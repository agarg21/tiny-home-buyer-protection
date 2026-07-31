import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const page = readFileSync(
  new URL("../site/tiny-house-build-options/index.html", import.meta.url),
  "utf8"
);
const home = readFileSync(new URL("../site/index.html", import.meta.url), "utf8");
const sitemap = readFileSync(
  new URL("../site/sitemap.xml", import.meta.url),
  "utf8"
);

test("build-options page has a unique canonical and useful first-screen answer", () => {
  assert.match(
    page,
    /<link rel="canonical" href="https:\/\/tinyhomeclarity\.com\/tiny-house-build-options\/">/
  );
  assert.equal((page.match(/<h1\b/g) || []).length, 1);
  assert.match(page, /Compare responsibility before price\./);
  assert.doesNotMatch(page, /choose your intent/i);
});

test("comparison covers all seven paths with accessible column and row headers", () => {
  const paths = [
    "plans",
    "kit",
    "shell",
    "thow",
    "builder",
    "adu-contractor",
    "park-model"
  ];

  for (const path of paths) {
    assert.match(page, new RegExp(`<tr data-path="${path}">`));
  }

  assert.equal((page.match(/<tr data-path=/g) || []).length, 7);
  assert.equal((page.match(/<th scope="col">/g) || []).length, 5);
  assert.equal((page.match(/<th scope="row">/g) || []).length, 7);
});

test("public page uses scoped primary and attributed-industry sources", () => {
  const requiredSources = [
    "https://codes.iccsafe.org/content/THPOTIRC2021P1",
    "https://www.hud.gov/hud-partners/manufactured-home-resources",
    "https://www.nhtsa.gov/importing-vehicle/importation-and-certification-faqs-1",
    "https://consumer.ftc.gov/articles/how-avoid-home-improvement-scam",
    "https://www.rvia.org/standards-regulations/association-and-ansi-adopted-standards",
    "https://www.rvia.org/advocacy/policies/what-rv"
  ];

  for (const source of requiredSources) {
    assert.match(page, new RegExp(source.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.match(page, /This is industry guidance, not local approval\./);
  assert.match(page, /Local adoption and project acceptance vary\./);
});

test("page avoids vendor recommendations and unsupported price claims", () => {
  const withoutRelatedPageName = page.replaceAll("$20K", "");

  assert.doesNotMatch(page, /tinyhouse\.com/i);
  assert.doesNotMatch(page, /houseplans\.com/i);
  assert.doesNotMatch(page, /MagicBox/i);
  assert.doesNotMatch(page, /best (tiny[- ]house )?builder/i);
  assert.doesNotMatch(withoutRelatedPageName, /\$[0-9]/);
  assert.doesNotMatch(page, /always cheaper/i);
  assert.doesNotMatch(page, /legal anywhere(?!,)/i);
});

test("image, internal discovery, and sitemap integration are explicit", () => {
  assert.match(
    page,
    /src="\.\.\/assets\/tiny-house-build-options-worksite\.png" width="1200" height="800" alt="[^"]+"/
  );
  assert.match(page, /href="\.\.\/tiny-home-cost-calculator\/"/);
  assert.match(page, /href="\.\.\/tiny-house-under-20k\/"/);
  assert.match(home, /href="\.\/tiny-house-build-options\/"/);
  assert.match(
    sitemap,
    /<loc>https:\/\/tinyhomeclarity\.com\/tiny-house-build-options\/<\/loc>/
  );
});

test("comparison uses card semantics on narrow screens without a false scroll focus stop", () => {
  assert.match(
    page,
    /<div class="table-wrap build-table-wrap" aria-label="Tiny-house build option comparison">/
  );
  assert.doesNotMatch(page, /build-table-wrap" tabindex=/);
  assert.doesNotMatch(page, /Scrollable tiny-house build option comparison/);
});
