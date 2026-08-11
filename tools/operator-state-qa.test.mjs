import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { auditOperatorState } from "./operator-state-qa.mjs";

function fixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "tiny-home-state-qa-"));
  for (const dir of ["ops/gsc-snapshots", "site", "status"]) {
    fs.mkdirSync(path.join(root, dir), { recursive: true });
  }
  fs.writeFileSync(path.join(root, "ops", "seo-roadmap.json"), JSON.stringify({
    last_rescored_on: "2026-07-28",
    next_rescore_due: "2026-08-04",
    next_eligible_action_id: "TEST-002",
    items: [
      { id: "TEST-001", title: "Test", status: "in_progress", selected_on: "2026-07-28" },
      { id: "TEST-000", title: "Done", status: "completed", completed_on: "2026-07-27" },
      { id: "TEST-002", title: "Next", status: "planned" },
    ],
  }));
  fs.writeFileSync(path.join(root, "ops", "seo-roadmap.md"), "`TEST-001`\n`TEST-000`\n`TEST-002`\n");
  fs.writeFileSync(path.join(root, "ops", "current-cycle.md"), [
    "2026-07-28",
    "Active action: `TEST-001`",
    "Next eligible action: `TEST-002` (planned)",
  ].join("\n"));
  fs.writeFileSync(path.join(root, "ops", "gsc-snapshots", "2026-07-28.json"), "{}");
  fs.writeFileSync(path.join(root, "site", "sitemap.xml"), "<urlset><url><loc>https://tinyhomeclarity.com/</loc></url></urlset>");
  fs.writeFileSync(path.join(root, "ops", "gsc-monitor.json"), JSON.stringify({
    urls: ["https://tinyhomeclarity.com/"],
  }));
  fs.writeFileSync(path.join(root, "status", "site-pages.md"), "https://tinyhomeclarity.com/\n");
  return root;
}

test("passes aligned roadmap, current cycle, GSC pointer, and page status", () => {
  const root = fixture();
  assert.deepEqual(auditOperatorState({ repoDir: root }).errors, []);
  fs.rmSync(root, { recursive: true, force: true });
});

test("rejects duplicate action IDs and multiple active actions", () => {
  const root = fixture();
  const file = path.join(root, "ops", "seo-roadmap.json");
  const roadmap = JSON.parse(fs.readFileSync(file, "utf8"));
  roadmap.items.push({ id: "TEST-001", title: "Duplicate", status: "in_progress", selected_on: "2026-07-28" });
  fs.writeFileSync(file, JSON.stringify(roadmap));
  const errors = auditOperatorState({ repoDir: root }).errors.join("\n");
  assert.match(errors, /duplicate roadmap action IDs/);
  assert.match(errors, /more than one in_progress action/);
  fs.rmSync(root, { recursive: true, force: true });
});

test("rejects stale current GSC and missing page-status coverage", () => {
  const root = fixture();
  fs.writeFileSync(path.join(root, "ops", "current-cycle.md"), [
    "2026-07-27",
    "Active action: `TEST-001`",
    "Next eligible action: `TEST-002` (planned)",
  ].join("\n"));
  fs.writeFileSync(path.join(root, "status", "site-pages.md"), "");
  const errors = auditOperatorState({ repoDir: root }).errors.join("\n");
  assert.match(errors, /does not name newest GSC snapshot/);
  assert.match(errors, /missing status\/site-pages\.md/);
  fs.rmSync(root, { recursive: true, force: true });
});

test("rejects completed actions without completion dates", () => {
  const root = fixture();
  const file = path.join(root, "ops", "seo-roadmap.json");
  const roadmap = JSON.parse(fs.readFileSync(file, "utf8"));
  delete roadmap.items[1].completed_on;
  fs.writeFileSync(file, JSON.stringify(roadmap));
  assert.match(auditOperatorState({ repoDir: root }).errors.join("\n"), /completed item lacks completed_on/);
  fs.rmSync(root, { recursive: true, force: true });
});

test("rejects duplicate or contradictory active and next markers", () => {
  const root = fixture();
  const file = path.join(root, "ops", "current-cycle.md");
  fs.appendFileSync(file, "\nActive action: `none`\nNext eligible action: `TEST-001`\n");
  const errors = auditOperatorState({ repoDir: root }).errors.join("\n");
  assert.match(errors, /exactly one valid Active action marker/);
  assert.match(errors, /exactly one valid Next eligible action marker/);
  fs.rmSync(root, { recursive: true, force: true });
});

test("rejects blocked action as next eligible", () => {
  const root = fixture();
  const file = path.join(root, "ops", "seo-roadmap.json");
  const roadmap = JSON.parse(fs.readFileSync(file, "utf8"));
  roadmap.items.find((item) => item.id === "TEST-002").status = "blocked";
  fs.writeFileSync(file, JSON.stringify(roadmap));
  assert.match(
    auditOperatorState({ repoDir: root }).errors.join("\n"),
    /next_eligible_action_id TEST-002 has ineligible status blocked/,
  );
  fs.rmSync(root, { recursive: true, force: true });
});

test("rejects missing and non-sitemap GSC monitor URLs", () => {
  const root = fixture();
  fs.writeFileSync(
    path.join(root, "site", "sitemap.xml"),
    "<urlset><url><loc>https://tinyhomeclarity.com/</loc></url><url><loc>https://tinyhomeclarity.com/new-page/</loc></url></urlset>",
  );
  fs.writeFileSync(path.join(root, "ops", "gsc-monitor.json"), JSON.stringify({
    urls: ["https://tinyhomeclarity.com/", "https://tinyhomeclarity.com/retired-page/"],
  }));
  const errors = auditOperatorState({ repoDir: root }).errors.join("\n");
  assert.match(errors, /gsc-monitor\.json is missing sitemap URL https:\/\/tinyhomeclarity\.com\/new-page\//);
  assert.match(errors, /gsc-monitor\.json contains non-sitemap URL https:\/\/tinyhomeclarity\.com\/retired-page\//);
  fs.rmSync(root, { recursive: true, force: true });
});

test("rejects duplicate GSC monitor URLs", () => {
  const root = fixture();
  fs.writeFileSync(path.join(root, "ops", "gsc-monitor.json"), JSON.stringify({
    urls: ["https://tinyhomeclarity.com/", "https://tinyhomeclarity.com/"],
  }));
  assert.match(
    auditOperatorState({ repoDir: root }).errors.join("\n"),
    /duplicate GSC monitor URLs: https:\/\/tinyhomeclarity\.com\//,
  );
  fs.rmSync(root, { recursive: true, force: true });
});
