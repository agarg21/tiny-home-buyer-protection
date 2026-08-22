import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { readFileSync } from "node:fs";

const page = readFileSync(
  new URL("../site/tiny-house-under-20k/index.html", import.meta.url),
  "utf8"
);
const styles = readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");
const sitemap = readFileSync(new URL("../site/sitemap.xml", import.meta.url), "utf8");
const scriptMatch = page.match(/<script>([\s\S]*?)<\/script>/);

assert.ok(scriptMatch, "under-$20K page must include its claim-checker script");

const context = {
  window: {},
  document: { querySelector: () => null }
};
vm.runInNewContext(scriptMatch[1], context);

const {
  evaluateClaim,
  renderClaimResult,
  scopeDefinitions
} = context.window.TinyHomeClaimChecker;

function completeScope(state = "documented") {
  return Object.fromEntries(scopeDefinitions.map(([key]) => [key, state]));
}

const documentedShell = {
  claimObject: "shell",
  sourceType: "completed",
  buildStage: "completed",
  proofLevel: "itemized",
  claimDate: "documented",
  claimLocation: "documented",
  ...completeScope(),
  scopeLabor: "free",
  scopeDelivery: "excluded",
  scopeSite: "excluded",
  scopeUtilities: "excluded",
  scopeApproval: "excluded",
  scopeTools: "free"
};

test("page keeps one direct answer and one self-canonical", () => {
  assert.equal((page.match(/<h1>/g) || []).length, 1);
  assert.match(page, /<h1>Can You Build a Tiny House for Under \$20K\?<\/h1>/);
  assert.match(page, /<strong>Sometimes, for a narrow scope\.<\/strong>/);
  assert.equal((page.match(/rel="canonical"/g) || []).length, 1);
  assert.match(
    page,
    /<link rel="canonical" href="https:\/\/tinyhomeclarity\.com\/tiny-house-under-20k\/">/
  );
});

test("duplicate dollar calculator is replaced by nine evidence-state rows", () => {
  assert.doesNotMatch(page, /id="budget-form"/);
  assert.doesNotMatch(page, /type="number"/);
  assert.doesNotMatch(page, /Within \$20K/);
  assert.equal((page.match(/data-scope-label=/g) || []).length, 9);
  assert.match(page, /Included, with written proof/);
  assert.match(page, /Free, donated, reused, or unpaid/);
  assert.match(page, /Deferred until later/);
  assert.match(page, /Not applicable to this claim/);
  assert.match(page, /Unknown/);
});

test("blank state is neutral and asks the first scope question", () => {
  const result = evaluateClaim({});
  const html = renderClaimResult(result);

  assert.equal(result.status, "blank");
  assert.match(html, /Define the claim before judging it/);
  assert.match(html, /blank worksheet is not evidence/i);
  assert.doesNotMatch(html, /proof of feasibility/i);
  assert.doesNotMatch(html, /Within \$20K/);
});

test("minimally identified claim stays incomplete", () => {
  const result = evaluateClaim({
    claimObject: "shell",
    sourceType: "seller",
    buildStage: "advertised",
    proofLevel: "claim-only"
  });
  const html = renderClaimResult(result);

  assert.equal(result.status, "incomplete");
  assert.equal(result.byState.unknown.length, 9);
  assert.match(html, /Not enough evidence to trust this \$20K claim/);
  assert.match(html, /Request an itemized written scope/);
  assert.doesNotMatch(html, /Better documented/);
});

test("unclear object and partial proof cannot receive the strongest result", () => {
  for (const overrides of [
    { claimObject: "other" },
    { proofLevel: "partial" }
  ]) {
    const result = evaluateClaim({ ...documentedShell, ...overrides });
    const html = renderClaimResult(result);

    assert.equal(result.status, "incomplete");
    assert.doesNotMatch(html, /Better documented/);
    assert.match(html, /Not enough evidence/);
  }
});

test("an unclear object is defined before partial proof is upgraded", () => {
  const result = evaluateClaim({
    ...documentedShell,
    claimObject: "other",
    proofLevel: "partial"
  });

  assert.equal(result.status, "incomplete");
  assert.match(result.nextAction, /Ask exactly what the \$20K number buys/);
  assert.doesNotMatch(result.nextAction, /Request an itemized written scope/);
});

test("a shell cannot be documented when the structure sits outside the claim", () => {
  const result = evaluateClaim({
    ...documentedShell,
    ...completeScope("na"),
    scopeStructure: "excluded"
  });
  const html = renderClaimResult(result);

  assert.equal(result.status, "conflict");
  assert.match(result.conflicts.join(" "), /Shell or unfinished structure requires Structure/);
  assert.match(html, /conflicts with its own scope/);
  assert.doesNotMatch(html, /Better documented/);
});

test("a complete placed project cannot mark every scope not applicable", () => {
  const result = evaluateClaim({
    claimObject: "placed-project",
    sourceType: "completed",
    buildStage: "placed",
    proofLevel: "itemized",
    claimDate: "documented",
    claimLocation: "documented",
    ...completeScope("na")
  });
  const html = renderClaimResult(result);

  assert.equal(result.status, "conflict");
  assert.equal(result.byState.documented.length, 0);
  assert.match(result.conflicts.join(" "), /Complete placed project requires/);
  assert.doesNotMatch(html, /Better documented/);
});

test("complete-project claim conflicts with excluded completion work", () => {
  const result = evaluateClaim({
    claimObject: "placed-project",
    sourceType: "seller",
    buildStage: "placed",
    proofLevel: "itemized",
    claimDate: "documented",
    claimLocation: "documented",
    ...completeScope(),
    scopeUtilities: "excluded"
  });
  const html = renderClaimResult(result);

  assert.equal(result.status, "conflict");
  assert.match(result.conflicts.join(" "), /complete placed project/i);
  assert.match(html, /conflicts with its own scope/);
  assert.match(html, /reconcile the stated project type/);
  assert.doesNotMatch(html, /Better documented/);
});

test("well-documented narrow claim never becomes a feasibility verdict", () => {
  const result = evaluateClaim(documentedShell);
  const html = renderClaimResult(result);

  assert.equal(result.status, "documented");
  assert.match(html, /Better documented, not proof of feasibility/);
  assert.match(html, /does not establish current pricing/);
  assert.match(html, /Model the documented costs/);
  assert.doesNotMatch(html, /feasible project|can be built for \$20K/i);
});

test("unsupported values return invalid without a conclusion", () => {
  const result = evaluateClaim({ claimObject: "definitely-cheap" });
  const html = renderClaimResult(result);

  assert.equal(result.status, "invalid");
  assert.deepEqual(Array.from(result.invalidFields), ["claimObject"]);
  assert.match(html, /invalid state/);
  assert.match(html, /No conclusion was produced/);
});

test("handoffs, image, review date, sitemap, and responsive rules are explicit", () => {
  assert.match(page, /src="\.\.\/assets\/tiny-house-build-options-worksite\.png"/);
  assert.match(page, /href="\.\.\/tiny-home-cost-calculator\/"/);
  assert.match(page, /href="\.\.\/tiny-house-build-options\/"/);
  assert.match(page, /href="\.\.\/buying-land-for-a-tiny-house\/"/);
  assert.equal((page.match(/Page last reviewed: 2026-08-22/g) || []).length, 2);
  assert.match(
    sitemap,
    /<loc>https:\/\/tinyhomeclarity\.com\/tiny-house-under-20k\/<\/loc>\s*<lastmod>2026-08-22<\/lastmod>/
  );
  assert.match(styles, /\.under20-tool-grid\s*\{[^}]*grid-template-columns:/s);
  assert.match(styles, /@media \(max-width: 900px\)[\s\S]*?\.under20-tool-grid\s*\{[^}]*grid-template-columns: 1fr;/);
  assert.match(styles, /@media \(max-width: 640px\)[\s\S]*?\.claim-scope-grid[\s\S]*?grid-template-columns: 1fr;/);
});
