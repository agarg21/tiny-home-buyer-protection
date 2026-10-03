import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const home = read("site/index.html");

test("homepage is static, without geographic inputs or lookup scripts", () => {
  assert.doesNotMatch(home, /<(?:form|input|select|script)\b/i);
  assert.doesNotMatch(home, /placement-form|fetch\(|Find my next checks|Show my next checks/);
});

test("first-screen copy discloses actual coverage and a fallback before the guides", () => {
  const hero = home.match(/<section class="hero">[\s\S]*?<\/section>/)[0];
  for (const scope of ["City of Los Angeles", "San Diego City and unincorporated County", "Georgia home classification", "For other locations"]) {
    assert.ok(hero.includes(scope));
  }
  assert.ok(home.indexOf('id="records"') < home.indexOf('id="types"'));
  assert.match(home, /We do not have local placement guides beyond the coverage shown here/);
});

test("all seven guide and worksheet destinations remain directly discoverable", () => {
  const sitemap = read("site/sitemap.xml");
  for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const path = new URL(match[1]).pathname;
    if (path !== "/") assert.ok(home.includes(`href=".${path}"`), path);
  }
  for (const date of ["2026-07-08", "2026-07-28", "2026-08-13"]) {
    assert.ok(home.includes(`Official sources checked: ${date}`));
  }
});

test("legacy bookmarks resolve to a concrete static placement checklist", () => {
  for (const id of ["records", "tool", "proof"]) {
    assert.equal(home.split(`id="${id}"`).length - 1, 1);
  }
  const checklist = home.match(/<section id="tool"[\s\S]*?<\/section>/)[0];
  assert.match(checklist, /For parcel \[parcel number\].*\[unit and label\].*\[intended use\]/);
  assert.equal((checklist.match(/<li>/g) || []).length, 6);
  assert.match(checklist, /unresolved questions/);
});

test("incoming placement handoffs promise a checklist, not a geographic lookup", () => {
  for (const path of ["los-angeles-tiny-house-adu", "san-diego-tiny-house-adu", "tiny-home-cost-calculator", "buying-land-for-a-tiny-house", "georgia-tiny-house-classification", "tiny-house-build-options"]) {
    const page = read(`site/${path}/index.html`);
    assert.match(page, /href="\.\.\/#tool"[^>]*>[^<]*placement checklist|href="\.\.\/#tool"[^>]*>[\s\S]*?<span>Placement checklist<\/span>/i);
    assert.doesNotMatch(page, /triage tool|placement (?:decision tool|tool|checker)/i);
  }
});
