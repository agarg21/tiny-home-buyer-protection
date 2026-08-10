import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  EVIDENCE_ITEMS,
  escapeHtml,
  evaluateLandCheck,
  renderEvidenceWorksheet,
  renderLandResult
} from "../site/buying-land-for-a-tiny-house/land-checker.js";

const page = readFileSync(
  new URL("../site/buying-land-for-a-tiny-house/index.html", import.meta.url),
  "utf8"
);
const script = readFileSync(
  new URL("../site/buying-land-for-a-tiny-house/land-checker.js", import.meta.url),
  "utf8"
);
const home = readFileSync(new URL("../site/index.html", import.meta.url), "utf8");
const sitemap = readFileSync(new URL("../site/sitemap.xml", import.meta.url), "utf8");
const styles = readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

function evidenceState(state = "unknown") {
  return Object.fromEntries(
    EVIDENCE_ITEMS.map((item) => [item.id, {
      state,
      source: state === "source" ? `Retained ${item.id} record` : ""
    }])
  );
}

function completeContext(overrides = {}) {
  return {
    parcelLabel: "APN ending 4421",
    jurisdictionKnown: "known",
    homeCategory: "thow",
    intendedUse: "primary",
    parcelStage: "specific",
    evidence: evidenceState("source"),
    ...overrides
  };
}

test("blank worksheet stays neutral and produces no parcel result", () => {
  const result = evaluateLandCheck();
  assert.equal(result.status, "blank");
  assert.deepEqual(result.stop, []);
  assert.deepEqual(result.investigate, []);
  assert.doesNotMatch(renderLandResult(result), /legal|approved|buildable/i);
});

test("evidence model covers all brief groups and five critical deadline checks", () => {
  assert.equal(EVIDENCE_ITEMS.length, 15);
  assert.deepEqual(
    [...new Set(EVIDENCE_ITEMS.map((item) => item.group))],
    [
      "Parcel identity and authority",
      "Home category and intended use",
      "Title, restrictions, and access",
      "Water and wastewater",
      "Utilities and site constraints"
    ]
  );
  assert.equal(EVIDENCE_ITEMS.filter((item) => item.critical).length, 5);
});

test("browsing state investigates critical unknowns without a false money stop", () => {
  const result = evaluateLandCheck({
    parcelStage: "browsing",
    jurisdictionKnown: "unknown",
    homeCategory: "unresolved",
    intendedUse: "unresolved",
    evidence: evidenceState("unknown")
  });

  assert.equal(result.status, "partial");
  assert.equal(result.stop.length, 0);
  assert.ok(result.investigate.length >= EVIDENCE_ITEMS.length);
});

test("offer deadline moves critical unknown, claim, and conflict evidence into stop", () => {
  const evidence = evidenceState("source");
  evidence["parcel-record"] = { state: "unknown" };
  evidence.jurisdiction = { state: "claim" };
  evidence.wastewater = { state: "conflict" };
  const result = evaluateLandCheck(completeContext({ parcelStage: "offer", evidence }));

  assert.equal(result.stop.length, 3);
  assert.match(result.stop.join(" "), /parcel\/APN/i);
  assert.match(result.stop.join(" "), /replace the claim/i);
  assert.match(result.stop.join(" "), /resolve the conflicting/i);
});

test("source-saved rows are recorded but retain explicit proof limits", () => {
  const result = evaluateLandCheck(completeContext());
  assert.equal(result.stop.length, 0);
  assert.equal(result.investigate.length, 0);
  assert.equal(result.recorded.length, EVIDENCE_ITEMS.length);

  const html = renderLandResult(result, new Date("2026-08-10T14:00:00Z"));
  assert.match(html, /Evidence recorded/);
  assert.match(html, /Still does not prove:/);
  assert.match(html, /This is not parcel approval/);
});

test("source-saved without a reference remains unresolved while browsing", () => {
  const result = evaluateLandCheck({
    parcelStage: "browsing",
    jurisdictionKnown: "known",
    homeCategory: "thow",
    intendedUse: "primary",
    evidence: Object.fromEntries(
      EVIDENCE_ITEMS.map((item) => [item.id, { state: "source", source: "" }])
    )
  });

  assert.equal(result.stop.length, 0);
  assert.equal(result.investigate.length, EVIDENCE_ITEMS.length);
  assert.equal(result.recorded.length, 0);
  assert.match(result.investigate.join(" "), /add the retained source or document reference/i);
  assert.match(renderLandResult(result), /Source saved - add reference/);
});

test("source-saved without a reference cannot clear offer-stage critical stops", () => {
  const result = evaluateLandCheck(completeContext({
    parcelStage: "offer",
    evidence: Object.fromEntries(
      EVIDENCE_ITEMS.map((item) => [item.id, { state: "source", source: "" }])
    )
  }));

  assert.equal(result.stop.length, 5);
  assert.equal(result.investigate.length, EVIDENCE_ITEMS.length - 5);
  assert.equal(result.recorded.length, 0);
});

test("changing a saved critical row back to unknown restores the unresolved question", () => {
  const saved = completeContext();
  assert.equal(evaluateLandCheck(saved).investigate.length, 0);
  saved.evidence["legal-access"] = { state: "unknown" };
  const changed = evaluateLandCheck(saved);
  assert.equal(changed.recorded.length, EVIDENCE_ITEMS.length - 1);
  assert.match(changed.investigate.join(" "), /recorded evidence establishes legal access/i);
});

test("partial notes and source details survive safely in the printable file", () => {
  const evidence = evidenceState("unknown");
  evidence["parcel-record"] = {
    state: "source",
    source: "County GIS <record>",
    checkedDate: "2026-08-10",
    notes: "APN matches & acreage needs survey"
  };
  const result = evaluateLandCheck({
    parcelLabel: "Parcel <A>",
    parcelStage: "specific",
    generalNotes: "Offer date: <unknown>",
    evidence
  });
  const html = renderLandResult(result, new Date("2026-08-10T14:00:00Z"));

  assert.match(html, /Parcel &lt;A&gt;/);
  assert.match(html, /County GIS &lt;record&gt;/);
  assert.match(html, /APN matches &amp; acreage needs survey/);
  assert.doesNotMatch(html, /<script>/);
  assert.match(html, /tinyhomeclarity\.com\/buying-land-for-a-tiny-house/);
});

test("HTML escaping handles text, attributes, and apostrophes", () => {
  assert.equal(
    escapeHtml(`<script data-x="1">it's & bad</script>`),
    "&lt;script data-x=&quot;1&quot;&gt;it&#39;s &amp; bad&lt;/script&gt;"
  );
});

test("generated worksheet has labeled states, sources, dates, and notes", () => {
  const html = renderEvidenceWorksheet();
  assert.equal((html.match(/class="evidence-row"/g) || []).length, 15);
  assert.equal((html.match(/data-evidence-state/g) || []).length, 15);
  assert.match(html, /critical before a money deadline/);
  assert.match(html, /Source, document, or claim reference/);
  assert.match(html, /Checked or received/);
  assert.match(html, /Notes or conflict/);
});

test("page has the promised first-screen answer and no inventory or verdict promise", () => {
  assert.match(page, /<link rel="canonical" href="https:\/\/tinyhomeclarity\.com\/buying-land-for-a-tiny-house\/">/);
  assert.equal((page.match(/<h1\b/g) || []).length, 1);
  assert.ok(page.indexOf("Do not treat") < page.indexOf('id="start"'));
  assert.ok(page.indexOf("Start the parcel check") < page.indexOf('id="start"'));
  assert.match(page, /does not list land[\s\S]*does not decide legality, approval, or buildability/i);
  assert.doesNotMatch(page, /find land near you|best land|approved parcel/i);
});

test("page uses official screening sources and routes neighboring decisions", () => {
  for (const source of [
    "https://msc.fema.gov/portal/home",
    "https://www.nrcs.usda.gov/resources/data-and-reports/web-soil-survey",
    "https://www.fws.gov/program/national-wetlands-inventory/wetlands-mapper",
    "https://www.epa.gov/septic/new-homebuyers-brochure-and-guide-septic-systems"
  ]) {
    assert.match(page, new RegExp(source.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.match(page, /href="\.\.\/tiny-house-build-options\/"/);
  assert.match(page, /href="\.\.\/tiny-home-cost-calculator\/"/);
  assert.match(page, /href="\.\.\/san-diego-tiny-house-adu\/"/);
});

test("tool is client-only, address-free, printable, and integrated into discovery", () => {
  assert.doesNotMatch(script, /\bfetch\s*\(|XMLHttpRequest|localStorage|sessionStorage/);
  assert.doesNotMatch(page, /name="[^"]*address/i);
  assert.match(script, /window\.print\(\)/);
  assert.match(styles, /@media print/);
  assert.match(styles, /body > main > :not\(#worksheet\)/);
  assert.match(home, /href="\.\/buying-land-for-a-tiny-house\/"/);
  assert.match(sitemap, /<loc>https:\/\/tinyhomeclarity\.com\/buying-land-for-a-tiny-house\/<\/loc>/);
});
