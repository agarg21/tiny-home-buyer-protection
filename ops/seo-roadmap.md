# Tiny Home Clarity Operator Roadmap

The machine-readable queue is `ops/seo-roadmap.json`. The operator owns routine
status and evidence updates; the user owns material legal, monetization,
provider, and release decisions.

## Current sequence

1. `THC-REL-001` — completed the review-clean local capture in `a90434e`.
2. `THC-DEP-001` — completed the verified guide release and unattended GSC
   setup on 2026-07-17.
3. `THC-QUAL-001` — completed the LA/San Diego answer-first repair in
   `378bd659b042e96f97c6c0f5e8ae55436df6d84a`; Pages run `29682037581`
   succeeded and production checks passed.
4. `THC-BUILD-001` — completed the national tiny-home build decision / builder
   due-diligence brief on 2026-07-20.
5. `THC-BUILD-002` — next candidate: build the reviewed national decision /
   due-diligence asset in a separate dispatch.
6. Compare each new validated GSC snapshot with the 2026-07-18 baseline.
7. Select the next buyer-protection tool only from observed evidence and the
   project's skeptical, official-source-backed product strategy.

The two-hour Control Room scan does not authorize two-hour content production.
At most one substantive project action may run per day during the proving
period, and a no-op is valid.

## THC-REL-001 evidence

- Baseline: at `c87e291`, the July 13 review-clean candidate existed only as
  exact-path dirty work and was absent from repository history and production.
- Decision: preserve the review-clean candidate locally; `THC-DEP-001` owns the
  later authorized push, Pages run, and production verification.
- GSC: unavailable, with collection and data-through dates `UNKNOWN`; fresh GSC
  was not required for this release-capture action.
- QA: HTML/XML parsing, inline-JavaScript syntax, ten local links/fragments,
  required deployment files, blank/within/over/invalid calculator states, and
  desktop/390px/320px layout checks passed.
- Independent review: cycle 1 passed the original eight implementation paths;
  cycle 2 found one P2 in the expanded roadmap evidence; cycle 3 returned
  `PASS` after release-state and cycle-history fixes, with no P0-P3 remaining.
- Observation: no public observation window has started. Establish a URL-scoped
  window from the verified production deployment.

## THC-DEP-001 evidence

- Release: guide commit `a90434e` is live; Pages run `29627141191` succeeded and
  the production guide and sitemap byte-match the committed files.
- Measurement: GSC infrastructure commit `110d923` and workflow run
  `29627800041` succeeded using the restricted read-only service account.
- Baseline: snapshot commit `8ee6066` contains finalized data through
  2026-07-16: 20 impressions, 0 clicks, five sitemap URLs discovered, and 5 of
  6 priority URLs indexed.
- Page indexing review: the authenticated browser report collected 2026-07-18
  (Google last updated it 2026-07-09) listed only three protocol/www aliases as
  `Page with redirect`. Each correctly returns `301` to the HTTPS apex, so
  `ops/gsc-indexing-review-2026-07-18.md` records a no-fix decision.
- Next decision: observe the newly released under-$20K URL; do not create a new
  page solely because the two-hour Control Room scan ran.

## THC-QUAL-001 evidence

- User quality signal on 2026-07-18: even the narrow source pages read as too
  noncommittal and not clearly helpful.
- Diagnosis: the pages correctly avoid legal overclaims, but they need an
  answer-first layer that says what the official source does support, who the
  path may fit, who should stop, and which office/question comes next.
- LA/San Diego addressable-volume research found meaningful broad and adjacent
  city demand, but low exact placement/rules demand. The page repair should
  explain the local tiny-house landscape for broad, uncertain searchers, not act
  as a generic intent menu or only a zoning memo.
- Decision: improve the existing source-backed local page format before
  creating more local pages or starting backlink outreach. Start with Los
  Angeles and San Diego using
  `briefs/la-san-diego-page-repair-2026-07-18.md`.
- Release: completed in commit
  `378bd659b042e96f97c6c0f5e8ae55436df6d84a` on 2026-07-19.
- Review: independent read-only review returned `PASS_WITH_P3` with no P0-P2
  findings; the P3 documentation and wording cleanups were applied before the
  release commit.
- QA: `git diff --check`, staged `git diff --cached --check`, required site /
  deployment file checks, LA/SD HTML parse checks, sitemap XML parse, local link
  check, research artifact size check, and a secret-pattern scan passed.
  `node tools/seo-qa.mjs` could not run because `tools/seo-qa.mjs` is not
  present in this checkout.
- Production: GitHub Pages run `29682037581` completed successfully. The live
  Los Angeles page, San Diego page, and sitemap returned `HTTP 200`; the live
  LA/SD pages showed the new human-first opening copy.
- Result: complete and released. Do not keep `THC-QUAL-001` open in the central
  ledger.

## THC-BUILD-001 evidence

- Build-intent research found meaningful general US tiny-home build demand, but
  tiny-home build intent and ADU contractor intent are separate markets with
  some local overlap.
- Completed action: scoped a national tiny-home build decision / builder
  due-diligence asset as an internal brief only.
- Working concept: `Should You Build, Buy a Kit, Buy a Shell, or Hire a
  Tiny-Home Builder?`
- Evidence: `docs/research/tiny-home-build-intent-query-demand-2026-07-18.md`.
- Brief: `briefs/tiny-home-build-decision-due-diligence-2026-07-20.md`.
- Review: independent read-only review returned `PASS` with no P0-P2 findings.
- QA: required-file checks, `git diff --check`, JSON validation, and a
  no-`site/**` change guard passed.
- Evidence classification: durable July 18 DataForSEO demand research and the
  completed `THC-QUAL-001` page-quality handoff selected the brief. The July 20
  GSC snapshot is fresh read-only monitoring evidence but is not causal support
  for this research action.
- Boundaries: do not build a directory, recommend vendors, state legal/zoning
  conclusions, present typical or complete cost claims, create indexable pages,
  request indexing, mutate external accounts, or begin implementation from this
  completed action.

## THC-BUILD-002 candidate

- Next candidate: build the national tiny-home build decision and due-diligence
  asset from `briefs/tiny-home-build-decision-due-diligence-2026-07-20.md`.
- This must be a separate implementation dispatch with exact paths, native QA,
  SERP/searcher POV review, and independent read-only review.
- The asset should compare plans, kits, shells, trailers/THOWs, custom
  builders, conventional ADU contractors, and park model/RV-style products by
  fit, risk, written proof needed, and unresolved local verification.
- Do not start this work without a separate dispatch.

## THC-MON-001 observation note

- The 2026-07-19 GSC snapshot is newer than the 2026-07-18 baseline but changed
  only from 21 to 22 impressions, with 0 clicks, no sitemap change, no unknown
  inspections, and no indexing-state change.
- Treat that as observation evidence, not a standalone project action. A
  measurement action becomes eligible only when a changed snapshot identifies a
  discovery, indexing, or performance signal worth evaluating.
