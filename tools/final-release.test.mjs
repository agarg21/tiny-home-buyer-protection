import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const home = read("site/index.html");
const la = read("site/los-angeles-tiny-house-adu/index.html");
const sitemap = read("site/sitemap.xml");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

test("final portfolio keeps eight unique URLs with explicit self-canonicals", () => {
  assert.equal(urls.length, 8);
  assert.equal(new Set(urls).size, 8);
  for (const url of urls) {
    const pathname = new URL(url).pathname;
    const page = read(`site${pathname}index.html`);
    assert.equal((page.match(/rel="canonical"/g) || []).length, 1);
    assert.ok(page.includes(`<link rel="canonical" href="${url}">`));
  }
});

test("homepage exposes existing buying tools without replacing placement intent", () => {
  const nav = home.match(/<nav\b[\s\S]*?<\/nav>/)[0];
  for (const path of ["buying-land-for-a-tiny-house", "tiny-house-build-options", "tiny-home-cost-calculator"]) {
    assert.ok(nav.includes(`href="./${path}/"`));
    assert.ok(la.includes(`href="../${path}/"`));
  }
  assert.ok(nav.includes('href="#tool"'));
  assert.match(home, /<h1>Where Can I Put a Tiny House\?<\/h1>/);
  assert.doesNotMatch(home, /choose your intent/i);
});

test("navigation review does not imply freshly verified official sources", () => {
  assert.match(la, /Official sources last checked: 2026-07-08/);
  assert.match(home, /Georgia tiny house categories[\s\S]*?Official sources checked: 2026-08-13/);
  assert.doesNotMatch(home + la, /Official sources (?:last )?checked: 2026-10-03/);
});
