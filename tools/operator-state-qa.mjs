import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ALLOWED_STATUSES = new Set(["planned", "candidate", "ready", "in_progress", "completed", "blocked", "deferred", "superseded"]);

function read(repoDir, relative) {
  return fs.readFileSync(path.join(repoDir, relative), "utf8");
}

function latestSnapshotDate(repoDir) {
  const dir = path.join(repoDir, "ops", "gsc-snapshots");
  if (!fs.existsSync(dir)) return null;
  return fs.readdirSync(dir)
    .filter((name) => /^\d{4}-\d{2}-\d{2}\.json$/.test(name))
    .map((name) => name.slice(0, 10))
    .sort()
    .at(-1) ?? null;
}

function sitemapUrls(repoDir) {
  const sitemap = read(repoDir, "site/sitemap.xml");
  return [...sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((match) => match[1]);
}

function actionMarkers(text, label) {
  const prefix = `${label}:`;
  return text.split(/\r?\n/)
    .filter((line) => line.trim().startsWith(prefix))
    .map((line) => {
      const value = line.trim().slice(prefix.length).trim();
      return value.match(/^`?([A-Z0-9-]+|none)`?(?:\s|\(|$)/i)?.[1] ?? null;
    });
}

export function auditOperatorState({ repoDir = process.cwd() } = {}) {
  const errors = [];
  const roadmap = JSON.parse(read(repoDir, "ops/seo-roadmap.json"));
  const roadmapMd = read(repoDir, "ops/seo-roadmap.md");
  const currentCycle = read(repoDir, "ops/current-cycle.md");
  const statusPath = path.join(repoDir, "status", "site-pages.md");
  const status = fs.existsSync(statusPath) ? fs.readFileSync(statusPath, "utf8") : "";

  if (!Array.isArray(roadmap.items)) errors.push("ops/seo-roadmap.json items must be an array");
  const items = Array.isArray(roadmap.items) ? roadmap.items : [];
  const ids = items.map((item) => item.id);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length) errors.push(`duplicate roadmap action IDs: ${[...new Set(duplicateIds)].join(", ")}`);

  for (const item of items) {
    if (!item.id || !item.title) errors.push("every roadmap item requires id and title");
    if (!ALLOWED_STATUSES.has(item.status)) errors.push(`${item.id}: unsupported status ${item.status}`);
    if (item.status === "completed" && !item.completed_on) errors.push(`${item.id}: completed item lacks completed_on`);
    if (item.status === "in_progress" && !item.selected_on) errors.push(`${item.id}: in_progress item lacks selected_on`);
    if (!roadmapMd.includes(item.id)) errors.push(`${item.id}: missing from ops/seo-roadmap.md`);
  }

  const active = items.filter((item) => item.status === "in_progress");
  if (active.length > 1) errors.push(`more than one in_progress action: ${active.map((item) => item.id).join(", ")}`);
  for (const item of active) {
    if (!currentCycle.includes(item.id)) errors.push(`${item.id}: in_progress action missing from ops/current-cycle.md`);
    if (!roadmapMd.includes(item.id)) errors.push(`${item.id}: in_progress action missing from ops/seo-roadmap.md`);
  }

  const activeMarkers = actionMarkers(currentCycle, "Active action");
  const expectedActive = active[0]?.id ?? "none";
  if (activeMarkers.length !== 1 || !activeMarkers[0]) {
    errors.push("ops/current-cycle.md must contain exactly one valid Active action marker");
  } else if (activeMarkers[0] !== expectedActive) {
    errors.push(`current-cycle active marker ${activeMarkers[0]} does not match roadmap ${expectedActive}`);
  }

  const nextId = roadmap.next_eligible_action_id ?? "none";
  const nextMarkers = actionMarkers(currentCycle, "Next eligible action");
  if (nextMarkers.length !== 1 || !nextMarkers[0]) {
    errors.push("ops/current-cycle.md must contain exactly one valid Next eligible action marker");
  } else if (nextMarkers[0] !== nextId) {
    errors.push(`current-cycle next marker ${nextMarkers[0]} does not match roadmap ${nextId}`);
  }
  if (nextId !== "none") {
    const nextItem = items.find((item) => item.id === nextId);
    if (!nextItem) errors.push(`roadmap next_eligible_action_id ${nextId} does not exist`);
    else if (!["planned", "candidate", "ready"].includes(nextItem.status)) {
      errors.push(`roadmap next_eligible_action_id ${nextId} has ineligible status ${nextItem.status}`);
    }
  }

  for (const field of ["last_rescored_on", "next_rescore_due"]) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(roadmap[field] ?? "")) errors.push(`roadmap ${field} must be YYYY-MM-DD`);
  }

  const latest = latestSnapshotDate(repoDir);
  if (latest && !currentCycle.includes(latest)) {
    errors.push(`ops/current-cycle.md does not name newest GSC snapshot ${latest}`);
  }

  if (!status) errors.push("missing status/site-pages.md");
  else {
    for (const url of sitemapUrls(repoDir)) {
      if (!status.includes(url)) errors.push(`status/site-pages.md is missing sitemap URL ${url}`);
    }
  }

  return { errors, activeActions: active.map((item) => item.id), latestSnapshot: latest, ok: errors.length === 0 };
}

function printResult(result) {
  for (const error of result.errors) console.error(`ERROR ${error}`);
  console.log(`Operator state QA: ${result.errors.length} errors; active=${result.activeActions.join(",") || "none"}; latest_gsc=${result.latestSnapshot ?? "UNKNOWN"}`);
}

const isCli = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isCli) {
  const result = auditOperatorState();
  printResult(result);
  if (!result.ok) process.exitCode = 1;
}
