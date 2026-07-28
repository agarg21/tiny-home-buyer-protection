# Tiny Home Clarity Operator Roadmap

The machine-readable queue is `ops/seo-roadmap.json`. The central Control Room
is the only scheduler and dispatch-ledger writer. The project Master / Operator
updates repository state only inside a validated dispatch or direct manual user
transaction. The user retains material legal, monetization, provider, and
unreviewed release decisions.

## Current sequence

1. `THC-REL-001` — completed the review-clean local capture in `a90434e`.
2. `THC-DEP-001` — completed the verified guide release and unattended GSC
   setup on 2026-07-17.
3. `THC-QUAL-001` — completed the LA/San Diego answer-first repair in
   `378bd659b042e96f97c6c0f5e8ae55436df6d84a`; Pages run `29682037581`
   succeeded and production checks passed.
4. `THC-BUILD-001` — completed the national tiny-home build decision / builder
   due-diligence brief on 2026-07-20.
5. `THC-OPS-001` — completed on 2026-07-28: hardened the research,
   persona-review, QA, and operating model without changing `site/**`.
6. `THC-OPS-002` — completed on 2026-07-28: removed the fixed daily
   substantive-action limit while preserving serial, independently reviewed
   transactions.
7. `THC-RES-001` — completed on 2026-07-28 as a review-clean research-only
   full-site decision pack; it promotes only `THC-HOME-001`.
8. `THC-HOME-001` — completed and production-verified on 2026-07-28.
9. `THC-SD-001` — active direct-manual transaction: research and repair the
   existing San Diego URL around distinct City and unincorporated County paths.
10. `THC-BUILD-002` — remains the strongest measured demand candidate after
   the active San Diego freshness repair.
11. Compare each new validated GSC snapshot with the 2026-07-18 baseline.
12. Select the next buyer-protection tool only from observed evidence and the
   project's skeptical, official-source-backed product strategy.

## THC-SD-001 active scope

- Target the existing San Diego page and its supported homepage routing; do not
  create a second San Diego URL.
- Preserve current July 18 demand research, then retain dated public SERP
  samples and current official City and County sources in
  `docs/research/san-diego-city-county-tiny-house-refresh-2026-07-28.md`.
- Rebuild the first screen around one human question: is the property inside
  the City of San Diego, in unincorporated San Diego County, or in another
  incorporated city?
- Keep City and County path summaries, standards, offices, confidence, and
  unresolved parcel checks visibly separate.
- Add a County source record and homepage route only if the official evidence
  supports that exact jurisdiction. Never match another incorporated city.
- Frozen paths are the 14 exact paths in `ops/seo-roadmap.json`.
- No other page, indexing, analytics, outreach, external account, vendor
  recommendation, complete/typical cost claim, or parcel permission conclusion
  is in scope.
- Research found that current City section 141.0318 supersedes the page's
  ADU/companion-unit-centered summary. The County path remains separately based
  on the September 4, 2025 Director's Determination and current PDS guidance.
- The implementation rebuilds the page around the three-way jurisdiction
  decision, merges repeated commercial/caution material, adds a canonical,
  updates City and County records, and adds exact County routing to the
  homepage.
- Native and responsive browser QA are green. Independent read-only review
  returned `PASS` in cycle 2 after both cycle 1 P2 documentation
  inconsistencies were fixed. Commit, push, Pages, and production verification
  remain.

The two-hour Control Room scan does not authorize two-hour content production.
There is no fixed daily substantive-action limit. Actions remain separate and
serial: finish and release or stop one registered transaction before selecting
another. A no-op remains valid when evidence and user priority are unchanged.

## THC-OPS-002 completion evidence

- Selection basis: direct manual user instruction on 2026-07-28.
- Change: remove the fixed one-substantive-action-per-day rule from every live
  project protocol surface.
- Preserved controls: one writer, one registered action at a time, exact paths,
  dirty-work preservation, native QA, independent read-only review, serial
  commit/push, and deployment verification when applicable.
- Prohibited in this action: `site/**`, research, content, indexing, outreach,
  deployment, or external-account work.
- Result: all live project protocol surfaces now allow multiple separately
  reviewed transactions in one day while requiring serial action completion.
- QA: 26 Node tests, site/state QA, both JSON validations, required-file
  checks, and `git diff --check` passed.
- Independent review: cycles 1 and 2 found stale prerequisite/evidence-placement
  issues; both were corrected. Cycle 3 returned `PASS` with no P0-P3 findings.
- Release boundary: docs/config only; no deployment applies.

## THC-OPS-001 completion evidence

- Selection basis: direct manual user instruction, not GSC cadence.
- Evidence context: the 2026-07-28 read-only GSC snapshot has finalized data
  through 2026-07-26 and is unchanged versus the 2026-07-27 snapshot.
- Transaction boundary: operating docs, role contracts, one reusable research
  playbook, a six-page baseline status inventory, deterministic site/state QA,
  backlogs, and decision/progress records.
- Prohibited in this action: `site/**`, page/content changes, fresh keyword or
  SERP research, indexing, outreach, deployment, external-account work,
  builder/vendor recommendations, cost claims, and legal/zoning conclusions.
- Result: one-writer role contracts, deprecated stale child-writer prompts, a
  Tiny-specific search/product playbook, a durable six-page status baseline,
  expanded searcher review, and deterministic site/state QA.
- Native QA: 26 Node tests passed; six-page site/sitemap QA found zero errors
  and six known missing-canonical warnings; operator-state QA, JSON,
  required-file, and diff checks passed.
- Independent review: cycles 1 and 2 found validator/state contradictions that
  were fixed with regression tests; cycle 3 returned `PASS` with no P0-P3
  findings.
- Release boundary: docs/tools only; no deployment applies.

## 2026-07-27 roadmap re-score

- Result: queue-level no-op. The roadmap metadata was refreshed, but no
  implementation, indexing, research, outreach, deployment, or external-account
  work was selected.
- Evidence: newest read-only GSC snapshot collected 2026-07-26 with finalized
  data through 2026-07-24.
- GSC comparison: unchanged versus the prior dated 2026-07-25 snapshot: 30
  impressions, 0 clicks, sitemap `Success`, 6 discovered pages, 5 of 6 priority
  URLs indexed, 0 unknown priority URLs.
- Interpretation: monitoring context only, not causal evidence for
  implementation.
- Semrush: not called; optional enrichment only and not required for this
  maintenance pass.
- Next re-score due: 2026-08-03.

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
- The full-site decision pack retained this as the strongest measured demand
  candidate, behind the promoted homepage repair.
- Any later implementation must be a separate action with exact paths, native
  QA, SERP/searcher POV review, and independent read-only review.
- The asset should compare plans, kits, shells, trailers/THOWs, custom
  builders, conventional ADU contractors, and park model/RV-style products by
  fit, risk, written proof needed, and unresolved local verification.
- Do not start this work without a separate dispatch.
- 2026-07-27 re-score: remains a candidate, not a selected action.

## THC-RES-001 completed result

- Selected on 2026-07-28 after `THC-OPS-002` was pushed in `cb7df77`.
- Create one research-only full-site search, persona, and revamp decision pack.
- Preserve exact query/source dates, non-additive demand caveats, retained SERP
  samples, ranking-page advantages/gaps, evidence-linked decision personas,
  beginner/intermediate/advanced passes, every-page/every-section decisions,
  architecture, and exactly one promoted implementation.
- Compare the homepage, planned build asset, Georgia classification page, cost
  calculator, under-$20K page, and the recently repaired LA/San Diego pages.
- Reuse July 18 DataForSEO evidence and buy only bounded gaps.
- Do not change `site/**`, request indexing, create a location batch, add lead
  generation, recommend builders/vendors, or make legal/cost conclusions.
- Promote exactly one separately implementable action; do not begin it in this
  transaction.
- The resulting full-site pack promotes `THC-HOME-001`: rebuild the homepage
  placement hub around an honest buyer decision path. The current tool looks
  location-specific while returning mostly generic guidance, asks beginners to
  classify a home before teaching classification, exposes internal record
  fields, and repeats cautions instead of one useful next-step plan.
- Keep `THC-BUILD-002` as the highest-demand candidate, record a later San
  Diego City/County source-freshness repair, then consider calculator, Georgia,
  and under-$20K repairs in the evidence-backed order.
- Independent review returned `PASS` on cycle 3 with no P0-P3 findings. Native
  QA passed 26 tests, site/state checks, JSON validation, exact-scope and
  required-file checks, and `git diff --check`.
- No `site/**` change occurred in this research-only transaction.

## THC-HOME-001 promoted scope

- Selected by direct manual user instruction on 2026-07-28 after the
  review-clean research commit `2400e13` was pushed.
- Target `https://tinyhomeclarity.com/`.
- Teach jurisdiction, home classification, intended use, and land context
  before asking readers to make unfamiliar selections.
- Return a decision path rather than a fake location-specific approval or
  confidence score.
- Make supported source-backed locations explicit and statically linked.
- Remove visible internal schema/MVP language and merge duplicate warnings and
  checklists.
- Keep seller-claim red flags, official-source scope, and cautious legal
  boundaries.
- Active as one separate exact-path implementation transaction. Native and
  visual QA plus a different independent read-only review are required before
  release.
- Local implementation now has the direct four-factor first screen,
  category-first checker, ordered decision-path results, exact City/classifier
  source matching, static local guide routes, one proof checklist, homepage
  canonical, and updated sitemap date.
- Independent review returned `PASS` on cycle 3 with no P0-P3 findings. Native
  and visual QA are green.
- Released in `7f9ea5f`; Pages run `30390104298` succeeded. The live homepage
  and sitemap byte-match the committed files, and the live canonical, legacy
  anchors, copy boundaries, LA City route, County stop, focus, and containment
  checks passed.

## THC-MON-001 observation note

- The 2026-07-26 GSC snapshot is fresh read-only monitoring evidence with data
  through 2026-07-24, but it is unchanged versus the prior dated 2026-07-25
  snapshot: 30 impressions, 0 clicks, sitemap `Success`, 6 discovered pages, 5
  of 6 priority URLs indexed, and 0 unknown priority URLs.
- Treat that as observation evidence, not a standalone project action. A
  measurement action becomes eligible only when a changed snapshot identifies a
  discovery, indexing, or performance signal worth evaluating.
