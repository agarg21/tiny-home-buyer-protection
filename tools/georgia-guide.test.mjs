import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const page = readFileSync(
  new URL("../site/georgia-tiny-house-classification/index.html", import.meta.url),
  "utf8"
);
const styles = readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");
const sitemap = readFileSync(new URL("../site/sitemap.xml", import.meta.url), "utf8");

test("Georgia guide has one canonical and an answer-first opening", () => {
  assert.match(
    page,
    /<link rel="canonical" href="https:\/\/tinyhomeclarity\.com\/georgia-tiny-house-classification\/">/
  );
  assert.equal((page.match(/<h1\b/g) || []).length, 1);
  assert.match(page, /Georgia does not provide one statewide yes-or-no placement answer\./);
  assert.match(page, /Use actual labels and documents, not the seller's description\./);
  assert.match(page, /Four starting points:/);
  assert.doesNotMatch(page, /Source Summary|Record ID|What this page cannot verify/);
});

test("category decoder covers all four DCA paths with accessible table headers", () => {
  const categories = new Map([
    ["rv-park-model", "Recreational vehicle or park model"],
    ["manufactured-mobile", "Manufactured or mobile home"],
    ["modular-industrialized", "Residential modular or industrialized building"],
    ["site-built", "Site-built dwelling"]
  ]);

  for (const [category, label] of categories) {
    assert.match(
      page,
      new RegExp(`<tr data-category="${category}">\\s*<th scope="row">${label}</th>`)
    );
  }

  assert.equal((page.match(/<tr data-category=/g) || []).length, 4);
  assert.equal((page.match(/<th scope="col">/g) || []).length, 4);
  assert.equal((page.match(/<th scope="row">/g) || []).length, 4);
  assert.match(
    page,
    /aria-label="Georgia tiny-house category and evidence comparison"/
  );
});

test("current-code explanation is precise and removes stale Appendix Q copy", () => {
  assert.match(page, /2024 International Residential Code with Georgia amendments/);
  assert.match(page, /effective January 1, 2026/);
  assert.match(page, /Appendix BB/);
  assert.match(page, /presence of Appendix BB amendments alone is not a parcel or enforcement answer/);
  assert.match(page, /written code reference or adoption/);
  assert.doesNotMatch(page, /Appendix Q/);
});

test("official sources support classification, current code, and factory-built evidence", () => {
  const requiredSources = [
    "https://dca.georgia.gov/document/public-notices/georgiatinyhousefactsheet32824pdf/download",
    "https://dca.georgia.gov/community-assistance/construction-codes/current-state-minimum-codes-construction",
    "https://dca.georgia.gov/announcement/2025-12-09/new-codes-jan-2026",
    "https://dca.georgia.gov/document/document/irc-2026-amendment-packet-2024-edition/download",
    "https://dca.georgia.gov/community-assistance/construction-codes/enforcement-state-minimum-codes",
    "https://dca.georgia.gov/community-assistance/government-authority-reporting/construction-codes/industrialized-building",
    "https://oci.georgia.gov/inspections-permits-plans/manufactured-housing"
  ];

  for (const source of requiredSources) {
    assert.match(page, new RegExp(source.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.match(page, /Official sources checked: 2026-08-13/);
  assert.match(page, /Source confidence: high/);
});

test("page routes the next decision without adding a Georgia county directory", () => {
  assert.match(page, /href="\.\.\/buying-land-for-a-tiny-house\/"/);
  assert.match(page, /href="\.\.\/tiny-house-build-options\/"/);
  assert.doesNotMatch(page, /counties that allow tiny houses/i);
  assert.doesNotMatch(page, /best (tiny[- ]house )?builder/i);
  assert.doesNotMatch(page, /guaranteed approval|statewide permission/i);
});

test("decoder becomes labeled cards on narrow screens and sitemap date is current", () => {
  assert.match(styles, /\.georgia-classification-table thead\s*\{/);
  assert.match(styles, /content: "Evidence to request";/);
  assert.match(styles, /content: "Does not prove";/);
  assert.match(styles, /content: "Ask next";/);
  assert.match(
    sitemap,
    /<loc>https:\/\/tinyhomeclarity\.com\/georgia-tiny-house-classification\/<\/loc>\s*<lastmod>2026-08-13<\/lastmod>/
  );
});
