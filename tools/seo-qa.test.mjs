import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { auditSite } from "./seo-qa.mjs";

function fixture({ canonical = true, href = "/guide/#answer" } = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "tiny-home-seo-qa-"));
  fs.mkdirSync(path.join(root, ".github", "workflows"), { recursive: true });
  fs.mkdirSync(path.join(root, "site", "guide"), { recursive: true });
  fs.writeFileSync(path.join(root, ".github", "workflows", "deploy-pages.yml"), "name: test\n");
  fs.writeFileSync(path.join(root, "site", ".nojekyll"), "");
  fs.writeFileSync(path.join(root, "site", "robots.txt"), "User-agent: *\nSitemap: https://tinyhomeclarity.com/sitemap.xml\n");
  fs.writeFileSync(path.join(root, "site", "sitemap.xml"), [
    "<urlset>",
    "<url><loc>https://tinyhomeclarity.com/</loc></url>",
    "<url><loc>https://tinyhomeclarity.com/guide/</loc></url>",
    "</urlset>",
  ].join(""));
  fs.writeFileSync(path.join(root, "site", "index.html"), [
    "<!doctype html><html><head><title>Home</title>",
    '<meta name="description" content="Home description">',
    canonical ? '<link rel="canonical" href="https://tinyhomeclarity.com/">' : "",
    "</head><body><h1>Home</h1>",
    `<a href="${href}">Guide</a>`,
    "</body></html>",
  ].join(""));
  fs.writeFileSync(path.join(root, "site", "guide", "index.html"), [
    "<!doctype html><html><head><title>Guide</title>",
    '<meta name="description" content="Guide description">',
    '<link rel="canonical" href="https://tinyhomeclarity.com/guide/">',
    "</head><body><h1>Guide</h1><h2 id=\"answer\">Answer</h2>",
    '<script type="application/ld+json">{"@type":"Article"}</script>',
    "</body></html>",
  ].join(""));
  return root;
}

test("passes a complete two-page static site", () => {
  const root = fixture();
  const result = auditSite({ repoDir: root });
  assert.deepEqual(result.errors, []);
  assert.deepEqual(result.warnings, []);
  assert.equal(result.pages, 2);
  fs.rmSync(root, { recursive: true, force: true });
});

test("reports missing canonical as a non-blocking baseline warning", () => {
  const root = fixture({ canonical: false });
  const result = auditSite({ repoDir: root });
  assert.equal(result.errors.length, 0);
  assert.match(result.warnings[0], /canonical link is not yet explicit/);
  assert.equal(auditSite({ repoDir: root, strictWarnings: true }).ok, false);
  fs.rmSync(root, { recursive: true, force: true });
});

test("fails a broken internal fragment", () => {
  const root = fixture({ href: "/guide/#missing" });
  const result = auditSite({ repoDir: root });
  assert.equal(result.ok, false);
  assert.match(result.errors.join("\n"), /missing fragment/);
  fs.rmSync(root, { recursive: true, force: true });
});

test("fails sitemap and canonical drift", () => {
  const root = fixture();
  const page = path.join(root, "site", "guide", "index.html");
  fs.writeFileSync(page, fs.readFileSync(page, "utf8").replace(
    "https://tinyhomeclarity.com/guide/",
    "https://tinyhomeclarity.com/wrong/",
  ));
  const result = auditSite({ repoDir: root });
  assert.match(result.errors.join("\n"), /canonical .* does not match/);
  fs.rmSync(root, { recursive: true, force: true });
});

test("accepts canonical attributes in either order and rejects duplicates", () => {
  const root = fixture();
  const page = path.join(root, "site", "index.html");
  fs.writeFileSync(page, fs.readFileSync(page, "utf8").replace(
    '<link rel="canonical" href="https://tinyhomeclarity.com/">',
    '<link href="https://tinyhomeclarity.com/" rel="canonical">',
  ));
  assert.deepEqual(auditSite({ repoDir: root }).errors, []);

  fs.appendFileSync(page, '<link rel="canonical" href="https://tinyhomeclarity.com/wrong/">');
  assert.match(auditSite({ repoDir: root }).errors.join("\n"), /expected exactly one canonical link/);
  fs.rmSync(root, { recursive: true, force: true });
});

test("rejects structurally malformed sitemap XML", () => {
  const root = fixture();
  fs.writeFileSync(
    path.join(root, "site", "sitemap.xml"),
    "<urlset><url><loc>https://tinyhomeclarity.com/</loc></url>",
  );
  assert.match(auditSite({ repoDir: root }).errors.join("\n"), /sitemap\.xml is not structurally valid/);
  fs.rmSync(root, { recursive: true, force: true });
});

test("rejects multiple sitemap root elements", () => {
  const root = fixture();
  fs.writeFileSync(
    path.join(root, "site", "sitemap.xml"),
    "<urlset></urlset><urlset></urlset>",
  );
  assert.match(auditSite({ repoDir: root }).errors.join("\n"), /multiple root elements/);
  fs.rmSync(root, { recursive: true, force: true });
});
