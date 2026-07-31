# Operator Review

## 2026-07-27 - Weekly Roadmap Re-Score

Action: `roadmap-rescore-2026-07-24`

Lease: validated before reading or editing project state.

Reviewed files:

- `AGENTS.md`
- `ops/operator.json`
- `ops/seo-roadmap.json`
- `ops/seo-roadmap.md`
- `ops/current-cycle.md`
- `ops/needs-user.md`
- `ops/operator-review.md` (created in this pass; file was missing)
- `ops/gsc-snapshots/2026-07-26.md`
- `ops/gsc-snapshots/2026-07-26.json`
- `ops/gsc-snapshots/2026-07-25.md`
- `ops/gsc-snapshots/2026-07-25.json`
- `/Users/apoorvagarg/Documents/SEO Agent/seo-lab/operator/reports/tiny-home-clarity/latest.md`
- `/Users/apoorvagarg/Documents/SEO Agent/seo-lab/operator/reports/control-room/latest.md`

Evidence classification:

- The July 26 read-only GSC snapshot has data through July 24.
- It is unchanged versus the prior dated July 25 snapshot: 30 impressions, 0
  clicks, sitemap `Success`, 6 discovered pages, 5 of 6 priority URLs indexed,
  and 0 unknown priority URLs.
- This is monitoring context, not causal evidence for implementation.
- Semrush was not called; it is optional enrichment and was not needed for this
  maintenance pass.

Decision:

- Queue-level no-op.
- Update roadmap review metadata only.
- Keep `THC-BUILD-002` as a candidate, not a selected action.
- Do not select monitoring, implementation, indexing, outreach, deployment,
  external-account, site-content, legal/zoning, builder/vendor, or cost-claim
  work from unchanged evidence.

Next re-score due: 2026-08-03.

QA:

- `test -f site/.nojekyll` passed.
- `test -f .github/workflows/deploy-pages.yml` passed.
- `git diff --check` passed.
- `ops/seo-roadmap.json` parsed with `python3 -m json.tool`.
- Independent read-only review returned `PASS` with no P0-P2 findings.

## 2026-07-28 - Operating Model And QA Hardening

Action: `THC-OPS-001`

Selection authority: direct manual user instruction. No Control Room dispatch
lease applies.

Evidence classification:

- The user requested that Tiny Home Clarity adopt the stronger persona-based
  review, SEO research, and operating approach used in the active Family
  Tripwise project.
- The 2026-07-28 GSC snapshot is fresh monitoring context with finalized data
  through 2026-07-26 and is unchanged versus 2026-07-27.
- GSC did not select or justify this operating-model action.

Frozen boundary:

- Operating contracts, one research/product playbook, a six-page status
  baseline, reusable review prompt, deterministic site/state QA, supporting
  backlogs, and durable operator/decision/progress records.
- No `site/**`, fresh keyword/SERP research, page/content work, indexing,
  outreach, deployment, external-account mutation, vendor recommendation,
  cost claim, or legal/zoning conclusion.

Pre-review QA:

- `node --test tools/*.test.mjs`: 21 tests passed.
- `node tools/seo-qa.mjs`: 6 HTML pages, 6 sitemap URLs, 0 errors, and 6 known
  missing-canonical warnings.
- `node tools/operator-state-qa.mjs`: 0 errors; active action
  `THC-OPS-001`; newest snapshot `2026-07-28`.
- Required deployment files are present.
- `ops/seo-roadmap.json` parses.
- `git diff --check` passes.

Independent review:

Review cycle 1:

- Reviewer thread: `019fa969-1f74-7113-9c5e-92eaa8949696`
- Reviewer title: unavailable
- Verdict: `FAIL`
- P0/P1: none.
- P2: stale current-cycle tail; operator-state QA checked ID presence rather
  than explicit active/next markers; deprecated bootstrap prompts still gave
  supporting agents write authority; site QA did not structurally reject
  malformed sitemap XML or multiple/order-varied canonicals.
- P3: the page-status table labeled the July 28 rolling overlay as a baseline.
- Scope amendment: add only `ops/chat-bootstrap-prompts.md` to deprecate the
  stale writer prompts. This remains operating-model work and does not broaden
  into site, content, research, or external state.
- Resolution: accepted for cycle 2.

Review cycle 2:

- Reviewer thread: `019fa969-1f74-7113-9c5e-92eaa8949696`
- Reviewer title: unavailable
- Verdict: `FAIL`
- Cycle-1 findings: resolved.
- P0/P1/P3: none.
- P2: sitemap validation still accepted multiple root elements; operator-state
  QA allowed a `blocked` item as `next_eligible_action_id`.
- Resolution: track and reject additional XML roots and non-whitespace outside
  the root; restrict next-eligible status to `planned`, `candidate`, or `ready`;
  add regression tests; request final cycle 3 review.

Review cycle 3:

- Reviewer thread: `019fa969-1f74-7113-9c5e-92eaa8949696`
- Reviewer title: unavailable
- Reviewer kind: independent subagent
- Read-only: yes
- Reviewed base: `2121232eacd355ef9f8fe3764860eef1783f89fb`
- Candidate: uncommitted working tree, exactly the 23 target paths recorded in
  `ops/seo-roadmap.json`
- Verdict: `PASS`
- Findings: no P0, P1, P2, or P3.
- Cycle-2 findings: resolved. Multiple/outside-root sitemap XML is rejected, and
  only `planned`, `candidate`, or `ready` items may be next eligible.
- QA: 26 Node tests passed; site QA found 0 errors and 6 known
  missing-canonical warnings across 6 pages/6 sitemap URLs; operator-state QA,
  roadmap JSON, required-file checks, exact-path scope, and `git diff --check`
  passed.
- Scope: 23 declared paths; no `site/**`, workflow, GSC snapshot, deployment,
  indexing, outreach, or external-account change.
- Release state: review-clean docs/tools-only commit; push is authorized under
  the standing reviewed-release policy and no deployment applies.

## 2026-07-28 - Remove Fixed Daily Action Limit

Action: `THC-OPS-002`

Selection authority: direct manual user instruction.

Decision:

- Remove the one-substantive-action-per-day limit.
- Allow multiple separately registered, exact-path, QA-green, independently
  reviewed transactions in one day.
- Keep transactions serial. Complete and release or stop one before selecting
  another.

Scope: the 10 exact protocol and durable-state paths recorded in
`ops/seo-roadmap.json`. No site, research, content, deployment, indexing,
outreach, or external-account mutation.

Independent review:

Review cycle 1:

- Reviewer thread: `019fa9de-cb91-7b12-920c-be9b57023b9b`
- Reviewer title: unavailable
- Verdict: `FAIL`
- P0/P1/P3: none.
- P2: stale prerequisites made `THC-RES-001` appear runnable after
  `THC-OPS-001` while `THC-OPS-002` remained active.
- Resolution: name `THC-OPS-002` consistently and require it to be
  review-clean, committed, and pushed before `THC-RES-001` starts.

Review cycle 2:

- Reviewer thread: `019fa9de-cb91-7b12-920c-be9b57023b9b`
- Reviewer title: unavailable
- Verdict: `FAIL`
- Original cycle-1 finding: resolved.
- P0/P1/P3: none.
- P2: cycle-1 evidence was placed under `THC-OPS-001` rather than this action.
- Resolution: move the evidence intact beneath `THC-OPS-002` and request final
  cycle 3 review.

Review cycle 3:

- Reviewer thread: `019fa9de-cb91-7b12-920c-be9b57023b9b`
- Reviewer title: unavailable
- Reviewer kind: independent subagent
- Read-only: yes
- Reviewed base: `cb5a901167ab6dd0a26330470cec35ea624eff8e`
- Candidate: uncommitted working tree, exactly the 10 target paths in
  `ops/seo-roadmap.json`
- Verdict: `PASS`
- Findings: no P0, P1, P2, or P3.
- QA: 26 Node tests, site/state QA, operator and roadmap JSON validation,
  required-file checks, exact-path scope, and `git diff --check` passed.
- Scope: protocol only; no `site/**` or external mutation.
- Release state: review-clean docs/config-only commit; no deployment applies.

## 2026-07-28 - Full-Site Search And Revamp Decision Pack

Action: `THC-RES-001`

Selection authority: direct manual user instruction after `THC-OPS-002` was
review-clean and pushed.

Evidence classification:

- Durable July 18 DataForSEO demand and intent artifacts are causal research
  evidence.
- Current bounded public SERP and ranking-page samples may refine page jobs and
  architecture.
- The unchanged July 28 GSC snapshot is monitoring context only.

Scope: the 10 exact research and durable-state paths recorded in
`ops/seo-roadmap.json`. No `site/**`, implementation, indexing, outreach,
deployment, external-account mutation, vendor recommendation, cost conclusion,
or legal/zoning conclusion.

Draft result:

- Compared all six live pages and `THC-BUILD-002` using retained demand,
  current bounded public SERP/ranking pages, six evidence-linked decision
  personas, three experience levels, and every-section dispositions.
- Promoted exactly one action: `THC-HOME-001`, the homepage placement-hub
  repair.
- Recorded San Diego's current unincorporated-County THOW path as a later
  freshness repair without changing the already scoped City page.
- Made no `site/**` or external-state change.

Independent review:

Review cycle 1:

- Reviewer: thread `019fa9f0-f0e4-7f40-a628-5e258b93af39`
  (`Feynman`; exact task title unavailable).
- Verdict: `FAIL`.
- P2: the SERP sample lacked per-query market, page type, feature
  availability, overlap, architecture decision, and confidence metadata.
- P2: decision personas did not preserve specific dated evidence, context,
  anxiety, decision criteria, and pages served.
- P2: only the homepage had explicit every-block dispositions while the pack
  and page-status mirror claimed every-section coverage for all pages.

Cycle 1 fixes:

- Added a reproducible eight-query SERP matrix with retained URLs, page types,
  market/locale or `UNKNOWN`, feature limits, overlap, architecture decisions,
  and confidence.
- Expanded all six decision personas with dated evidence references, context,
  anxieties, criteria, pages served, and failure boundaries.
- Added explicit dispositions for every visible and generated block on Los
  Angeles, San Diego, Georgia, cost calculator, and under-$20K, plus the
  proposed modules of the unbuilt national asset.

Review cycle 2:

- Reviewer: same independent thread
  `019fa9f0-f0e4-7f40-a628-5e258b93af39`.
- Verdict: `FAIL`.
- P2: the new matrix described overlap with Tiny Home Clarity but did not
  classify overlap between paired SERP samples as exact URL, domain-only,
  page-type, or `UNKNOWN`.
- P3: the San Diego freshness analysis retained the 2020 City bulletin but not
  the current municipal-code source.

Cycle 2 fixes:

- Added paired-sample overlap classifications to all eight SERP rows, including
  the exact HomeAdvisor URL overlap and page-type-only local/placement overlap.
- Added current San Diego Municipal Code section 141.0318, checked 2026-07-28,
  to the retained sample and City-versus-County narrative.

Review cycle 3:

- Reviewer: same independent read-only thread
  `019fa9f0-f0e4-7f40-a628-5e258b93af39`.
- Verdict: `PASS`.
- Findings: no P0-P3.
- Verified the paired-sample overlap classifications, current San Diego code
  source/date, complete cycle history, exact 10-path scope, research-only
  boundary, and exactly one promoted but unstarted implementation action.

Final QA:

- `node --test tools/*.test.mjs`: 26 tests passed.
- `node tools/seo-qa.mjs`: 0 errors and six known missing-canonical warnings.
- `node tools/operator-state-qa.mjs`: 0 errors.
- Roadmap JSON, required files, exact scope, no-`site/**` guard, and
  `git diff --check`: passed.

Release state: review-clean research/docs transaction. Push applies; deployment
does not.

## 2026-07-28 - Homepage Placement-Hub Repair

Action: `THC-HOME-001`

Selection authority: direct manual user instruction after `THC-RES-001` was
review-clean and pushed in `2400e13`.

Frozen scope:

- `site/index.html`
- `site/styles.css`
- `site/sitemap.xml`
- `status/site-pages.md`
- `backlog/implementation-backlog.md`
- `ops/current-cycle.md`
- `ops/operator-review.md`
- `ops/seo-roadmap.json`
- `ops/seo-roadmap.md`
- `decisions.md`
- `progress.md`

Boundaries: homepage only. No other page, local-record data, workflow,
research, indexing, outreach, external account, vendor recommendation, cost
conclusion, or legal conclusion.

Baseline commit: `2400e13765c19c21559b6262932dd27b1d8cee84`.

Implementation summary:

- Rebuilt the homepage and checker around exact jurisdiction, home category,
  intended use, and land context.
- Removed location-looking generic rule/path output, confidence scores,
  `UNKNOWN` record fields, visible internal schema/MVP language, generic
  source cards, duplicate checklists, and planned-tool cards.
- Preserved legacy `#tool` and `#records` anchors required by other pages.
- Added an explicit homepage canonical and `2026-07-28` sitemap lastmod.

Pre-review QA:

- Inline homepage script parses.
- Native site QA: 0 errors and five known non-homepage canonical warnings.
- Operator-state QA: pending final state mirror.
- Browser: blank native validation; LA/SD supported and city-boundary cases;
  Georgia classification-only; unsupported route; HTML escaping; keyboard
  focus handoff; 1440x900, 375x812, and 320x568 layouts; no horizontal
  overflow.

Independent review:

Review cycle 1:

- Reviewer: thread `019faa05-b89c-7700-9eac-48f0b482bbe3`
  (`Hume`; exact task title unavailable).
- Verdict: `FAIL`.
- P2: the four-factor model and proof requests repeated across hero, form,
  default result, generated result, and static proof checklist.
- P2: the 320x568 first screen placed the primary action below the viewport.
- P2: escaped but unbroken place/state input could widen the mobile document.
- P2: stale current-cycle text said no site work was authorized during the
  active homepage transaction.
- P3: Georgia's top result status sounded like a local source match before the
  classification-only scope appeared.

Cycle 1 fixes:

- Replaced the default result with one jurisdiction-first action and replaced
  the generated proof list with a link to the single static proof checklist.
- Compressed the mobile header/hero, shortened the lede, hid the repeated hero
  factor panel on small screens, and moved the primary CTA above 439px at
  320x568; the next section begins at 524px.
- Added state/place length limits plus result/title containment. A 60-character
  state and 100-character unbroken place kept document width at 320px in the
  general-jurisdiction test, but cycle 2 found the City-specific step still
  overflowed.
- Removed the stale current-cycle prohibition.
- Changed Georgia to explicit state-classification status and guide language.

Review cycle 2:

- Reviewer: same independent thread
  `019faa05-b89c-7700-9eac-48f0b482bbe3`.
- Verdict: `FAIL`.
- P2: a 100-character unbroken place with City jurisdiction expanded the
  320px document to 1073px because the generated jurisdiction step did not
  inherit the title-only wrapping rule.

Cycle 2 fix:

- Applied `overflow-wrap: anywhere` to the complete placement result so all
  generated headings, list items, status text, and links contain unbroken
  input.
- Exact maximum-length City recheck passed at 320px: document, result title,
  and City step scroll widths equal their client widths.

Review cycle 3:

- Reviewer: same independent read-only thread
  `019faa05-b89c-7700-9eac-48f0b482bbe3`.
- Verdict: `PASS`.
- Findings: no P0-P3.
- Verified first-screen action visibility, one proof checklist, source/general
  distinction, LA/SD City boundaries, Georgia classification-only language,
  adversarial City input containment, canonical, sitemap, focus, exact scope,
  state mirrors, and research-to-implementation fidelity.

Final QA:

- `node --test tools/*.test.mjs`: 26 tests passed.
- `node tools/seo-qa.mjs`: 0 errors and five known canonical warnings on
  unchanged pages.
- `node tools/operator-state-qa.mjs`: 0 errors.
- Homepage inline script, roadmap JSON, required files, exact 11-path scope,
  and `git diff --check`: passed.
- Browser: blank; LA/SD City and boundary; Georgia classification-only;
  unsupported; escaping; focus; maximum-length City input; 1440x900,
  768x1024, 375x812, and 320x568 layouts; no horizontal overflow.
- Anti Gravity advisory was attempted but produced no verdict because its
  headless reviewer could not obtain its own command permission.

Release:

- Commit: `7f9ea5f558c288c06d6d18d046a7cc13443a2352`
- Remote: `origin/main` contains the exact reviewed commit.
- Pages run: `30390104298`, successful.
- Live homepage: HTTP 200 and byte-identical to `site/index.html`.
- Live sitemap: byte-identical to `site/sitemap.xml`.
- Live browser: canonical, `#tool`, `#records`, no visible internal
  schema/confidence copy, LA City source route, County boundary stop, focus
  handoff, and desktop containment passed.

Release state: production-verified.

## 2026-07-29 - THC-BUILD-002 Pre-Review Record

Action: research, build, independently review, and conditionally release one
national tiny-house build-options decision and due-diligence page.

Authority: direct manual user instruction.

Base: `7083794c1176a670f6e4997a9cdeaa10ae0466f4`

Target URL: `https://tinyhomeclarity.com/tiny-house-build-options/`

Frozen paths: the 19 exact paths recorded for `THC-BUILD-002` in
`ops/seo-roadmap.json`.

Required review:

- Current query/SERP overlap and representative ranking-page evidence.
- Plans/kit/shell/trailer/builder comparison decision persona.
- Beginner, intermediate, and advanced experience-level passes.
- Every visible section, first-screen answer, terminology, repetition, claim
  safety, source scope, internal links, technical SEO, accessibility, and
  desktop/390px/320px rendering.
- No vendor recommendation, directory, typical/complete cost, legal/permit
  conclusion, ADU-demand conflation, or false certification implication.

Local candidate:

- Fresh query, SERP, representative ranking-page, official-source, decision
  persona, experience-level, and every-section evidence is retained in the two
  dated research/review records.
- The page compares all seven paths by responsibility and written proof, uses
  no JavaScript or intent router, and links to the placement and cost tools.
- Focused tests pass 6/6; all native tests pass 51/51; SEO QA has zero errors
  and three known unrelated canonical warnings; operator-state QA and
  `git diff --check` pass.
- Browser QA passes at 1440px, 390px, and 320x568/700/844 with no overflow,
  missing image, console error, unlabeled mobile comparison record, or
  first-viewport dead end.

Independent review cycle 1:

- Reviewer: `019fb0a9-b3ae-7d61-88aa-029533866535` (`Peirce`), different and
  read-only.
- Verdict: `FAIL`.
- P2: the fresh SERP record was not reproducible enough. Fixed with exact
  queries, US/English market, collection date, ranking URLs, page types,
  feature availability, overlap, architecture decisions, and confidence.
- P2: four available CPC values were incorrectly marked `UNKNOWN`. Restored
  `$0.19`, `$1.45`, `$2.53`, and `$0.90` from the retained July 18 artifact.
- P2: the prior 320px QA used an 844px viewport and overstated first-screen
  visibility at shorter heights. Added a `<=360px` compact first screen and
  passed 320x568 and 320x700 checks with the comparison eyebrow visible.
- P3: a mobile card layout retained a false scroll focus stop. Removed the
  focusable/scrollable semantics and added a focused regression test.

Advisory limitation: Anti Gravity CLI returned no advisory output because its
headless profile denied its own command permission. No bypass or permission
weakening was used.

Release state: cycle 1 findings are fixed; cycle 2 independent re-review is
complete. Cycle 2 verified every cycle 1 fix and returned `FAIL` for one P2:
`ops/current-cycle.md` said five focused tests instead of the actual six. The
count is corrected.

Independent review cycle 3:

- The same reviewer confirmed every page, research, persona, claim, responsive,
  scope, and QA gate and the corrected six-test count.
- Verdict: `FAIL`.
- P2: `ops/current-cycle.md` still called cycle 2 pending and
  `status/site-pages.md` still named cycle 2 as the release gate. Both
  current-state mirrors are corrected.

Release state: held after the third and final review cycle. No commit, push, or
deployment is authorized. A separately registered continuation with a fresh
independent reviewer is required.

## 2026-07-29 - THC-BUILD-003 Pre-Review Record

Action: fresh independent review and conditional release of the exact fixed
`THC-BUILD-002` candidate.

Authority: direct manual user continuation.

Base: `7083794c1176a670f6e4997a9cdeaa10ae0466f4`

Frozen paths: the same exact 19 paths recorded for `THC-BUILD-003` in
`ops/seo-roadmap.json`.

Boundaries: no new research, content, design, URL, vendor, price, legal/permit,
lead-generation, indexing, outreach, or external-account work. A fresh
different read-only reviewer must review the complete inherited candidate, not
only prior findings.

Release state: fresh review pending; no commit, push, or deployment is
authorized yet.

Fresh cycle 1:

- Reviewer: independent read-only
  `019fb78f-65a1-7e90-b528-8dfac328418f` (`Mendel`).
- Reviewed base: `7083794c1176a670f6e4997a9cdeaa10ae0466f4`.
- Verdict: `PASS`.
- Findings: none.
- Scope: exactly 19 paths; all searcher, beginner/intermediate/advanced,
  every-section, evidence, claim, responsive, SEO, accessibility, test, and
  durable-state gates passed.

Post-review reconciliation: `origin/main` advanced only through automated GSC
snapshot commit `3b8c3a6`. The compatible commit was fast-forwarded. The
validated July 30 snapshot is materially unchanged versus July 29 and remains
monitoring context.

Fresh cycle 2:

- Reviewer: the same independent read-only reviewer
  `019fb78f-65a1-7e90-b528-8dfac328418f`.
- Reviewed base: `3b8c3a6e085c4d19d4307a6b328c7de481728416`.
- Verdict: `PASS`.
- Findings: none.
- The reviewer confirmed the automated GSC commit is outside the action diff,
  exactly 19 frozen paths remain, all current mirrors are truthful, and all
  page, evidence, persona, claim, responsive, scope, and QA gates remain clean.

Release state: review-clean; final frozen-state verification and exact-path
commit remain before push.

## 2026-07-28 - THC-SD-001 Pre-Review Record

Action: repair the existing San Diego guide around distinct City and
unincorporated County paths.

Base SHA: `8b0013f0d14dfea010636a6afaed8587698dc55b`

Frozen paths:

- `docs/research/san-diego-city-county-tiny-house-refresh-2026-07-28.md`
- `site/san-diego-tiny-house-adu/index.html`
- `site/data/local-records.json`
- `site/index.html`
- `site/styles.css`
- `site/sitemap.xml`
- `status/site-pages.md`
- `backlog/implementation-backlog.md`
- `ops/current-cycle.md`
- `ops/operator-review.md`
- `ops/seo-roadmap.json`
- `ops/seo-roadmap.md`
- `decisions.md`
- `progress.md`

Evidence:

- Durable July 18 DataForSEO demand and rank-order SERP evidence remains
  primary demand evidence.
- A dated July 28 public result-type sample confirms mixed official,
  commercial, community/stay, and third-party answer results.
- Current July 2026 City code section 141.0318 replaces the page's stale
  ADU/companion-unit-centered summary.
- Current County guidance and the September 4, 2025 Director's Determination
  support a separately scoped primary-or-accessory THOW path in unincorporated
  County jurisdiction.
- The July 28 GSC snapshot is monitoring context only.

Read-only research support:

- Thread: `019faa73-88bf-7eb2-ab95-5ded1eb84fc9`
- Outcome: independently confirmed the jurisdiction-first first screen, current
  City-code correction, separate County path, incorporated-city boundary,
  section consolidation, and dated-bulletin risk.
- This support is advisory and is not the mandatory independent operator
  review.

Implementation:

- Rebuilt the page around City, unincorporated County, and other incorporated
  city routes.
- Kept City and County possible uses, unit proof, property filters, office
  questions, sources, confidence, and unresolved eligibility separate.
- Consolidated listing/builder/community/stay warnings and written proof.
- Added the San Diego canonical and sitemap date.
- Updated the City record, added the County record, and added exact homepage
  County matching with a versioned record request.

Preliminary QA:

- 26 native tests passed.
- Site QA: zero errors, four unchanged canonical warnings.
- Operator-state QA, JSON, homepage script, and diff checks passed.
- Responsive browser QA passed at 1440x900, 390x844, and 320x568.
- Homepage routing passed City, County, Oceanside non-match, unknown
  jurisdiction, focus, source URL, cache-safe data, and 320px containment.
- Anti Gravity advisory was attempted but produced no verdict because its
  headless process could not obtain read-file permission. Unsafe permission
  bypass was not used.

Independent operator review cycle 1:

- Reviewer: read-only thread `019faa80-89bd-7f12-8bb5-79be29494c91`.
- Base: `8b0013f0d14dfea010636a6afaed8587698dc55b`.
- Scope: all 14 declared paths; no undeclared path found.
- Verdict: `FAIL`.
- P2: the homepage rationale was placed below the new San Diego decision in
  `decisions.md`, giving the San Diego entry two `Why` sections.
- P2: a stale secondary sentence in `ops/current-cycle.md` called
  `THC-RES-001` active despite the canonical active marker and roadmap naming
  `THC-SD-001`.
- P0, P1, and P3: none.
- Page, source hierarchy, personas, every-section usefulness, routing,
  technical SEO, accessibility, responsive layout, and native QA passed.

Cycle 1 fixes:

- Restored the homepage rationale to the homepage decision before the San Diego
  heading.
- Replaced the stale secondary active sentence with the truthful
  `THC-SD-001` review/release state.

Independent operator review cycle 2:

- Reviewer: read-only thread `019faa80-89bd-7f12-8bb5-79be29494c91`.
- Base: `8b0013f0d14dfea010636a6afaed8587698dc55b`.
- Scope: all 14 declared paths; no undeclared path found.
- Verdict: `PASS`.
- The two cycle 1 P2 findings are resolved.
- P0, P1, P2, and P3: none.
- Current City and County source claims, jurisdiction boundaries,
  searcher/persona usefulness, homepage routing, technical SEO, responsive
  behavior, exact-path scope, and repository narrative consistency passed.
- The reviewer was independent and read-only; no files were modified.

Release state: review-clean; commit, push, Pages, and production verification
remain.

## 2026-07-28 - THC-SD-001 Release Record

- Reviewed implementation commit:
  `daaf743d6d35f94659fb776372505ba0c13927b0`.
- Push: `origin/main` accepted the exact reviewed commit.
- GitHub Pages run: `30399382114`, success.
- HTTP: the live San Diego URL returned `200`.
- Byte matches: live homepage, San Diego page, local-record data, and sitemap
  matched the reviewed repository files.
- Live browser: canonical, answer-first H1, first-viewport jurisdiction signal,
  City source route, unincorporated-County source route, incorporated-city
  non-match, official links, focus handoff, and 320px containment passed.

Release state: production-verified.

## 2026-07-29 - THC-COST-001 Pre-Review Record

Action: repair the existing cost calculator around honest quote-first and
partial-result states.

Base: `38a3654cff2818a1a6b8390bc0ec4ebf2484262c`

Frozen paths:

- `docs/research/tiny-home-cost-calculator-refresh-2026-07-29.md`
- `site/tiny-home-cost-calculator/index.html`
- `site/tiny-home-cost-calculator/calculator.js`
- `site/styles.css`
- `site/sitemap.xml`
- `tools/cost-calculator.test.mjs`
- `strategy/current-strategy.md`
- `status/site-pages.md`
- `backlog/implementation-backlog.md`
- `backlog/seo-research-review-backlog.md`
- `ops/current-cycle.md`
- `ops/needs-user.md`
- `ops/operator-review.md`
- `ops/seo-roadmap.json`
- `ops/seo-roadmap.md`
- `decisions.md`
- `progress.md`

Evidence:

- Direct manual user instruction.
- July 28 full-site reviewed order after the completed homepage and San Diego
  actions.
- July 29 Semrush UI exact-query metrics and current public SERP/ranking-page
  sample.
- Reproduced blank `$0 all-in` and quote-only false-all-in live states.
- July 28 GSC is unchanged monitoring context only.

Advisory tooling:

- Anti Gravity was attempted read-only through `agy --print`.
- It produced no verdict because headless read-file permission was unavailable.
- Unsafe permission bypass was not used.
- Read-only research advisor thread
  `019fad3f-dbe1-7953-856b-b82658edc919` returned `FAIL/improve` on the prior
  live page. Its P1/P2 findings informed the current implementation; it is not
  the independent transaction reviewer.

Human and trust gates:

- No typical/complete price, affordability, vendor recommendation, financing,
  insurance, permit, code, zoning, or placement conclusion is authorized.
- Independent read-only review is required after implementation and native/
  browser QA.

Implementation evidence:

- Fifteen focused calculator tests pass.
- Local browser checks passed blank, quote-only partial, four-state, resolved,
  zero-interest, negative-input, and result-focus behavior.
- Desktop, 390px, and 320px containment passed, with calculator signal visible
  in the first mobile viewport.
- Full native QA passes: 41/41 tests; zero SEO QA errors with three
  pre-existing canonical warnings on untouched pages; zero operator-state
  errors; valid roadmap JSON; required files present; and `git diff --check`.

### Independent review cycle 1

- Reviewer: `019fad57-656e-73a1-a687-08e4eb1f63fb`
- Read-only: yes
- Verdict: `FAIL`
- P0: none.
- P1: coarse monetary/APR input steps rejected legitimate exact values.
- P2: lot rent counted outside rented-space scenarios; the project-specific
  written question appeared after metrics; paired-query SERP evidence was not
  reproducible enough; beginner project-type terms lacked plain explanations;
  durable records still called native QA pending.
- P3: the calculator reused a site-wide `.form-step` selector with conflicting
  layout rules.

Cycle 1 fixes:

- Monetary, percentage, insurance, rent, and APR inputs now accept values to
  two decimal places; loan years remain integer.
- Lot rent is enabled and counted only for rented-space scenarios, clears on
  transition away, and is covered for owned, buying, undecided, renting, and
  renting-to-owned behavior.
- The project-specific written question now follows partial warnings and
  precedes metrics.
- The research record now has a dated two-query US-English desktop SERP matrix,
  explicit zero-overlap result, confidence limits, and a revised one-URL
  rationale.
- Project-type options and visible help explain finished, shell/kit, DIY, used,
  foundation/ADU, and park-model/RV-style paths.
- Native QA state is aligned, and the calculator heading selector no longer
  collides with the site-wide `.form-step` rule.
- Local 320px browser checks passed exact quote/cost/APR/insurance/rent values,
  all land-state transitions, result order, focus, and containment.

### Independent review cycle 2

- Reviewer: `019fad57-656e-73a1-a687-08e4eb1f63fb`
- Read-only: yes
- Verdict: `FAIL`
- P0/P1: none.
- P2: the form accepted cent precision but visible currency formatting rounded
  quote, cost, recurring, and calculated values to whole dollars.
- P3: the research claimed zero overlap across nine results while retaining
  only five ordered results per query.
- The reviewer confirmed every cycle 1 finding was resolved.

Cycle 2 fixes:

- Visible currency now preserves up to two decimal places.
- The result trace itemizes calculated payment, entered insurance, and
  applicable lot rent in addition to quote and outside costs.
- A fifteenth focused test asserts exact quote, outside cost, subtotal, buffer,
  payment, insurance, rent, and monthly output strings.
- A 320px live browser pass confirmed every exact value, result focus, output
  order, and no horizontal overflow.
- The unsupported top-nine SERP sentence is removed; the reproducible first-five
  matrix and its explicit zero-overlap limit remain.

Review state: cycle 2 findings fixed; final cycle 3 independent review remains.

### Independent review cycle 3

- Reviewer: `019fad57-656e-73a1-a687-08e4eb1f63fb`
- Read-only: yes
- Verdict: `FAIL`
- P0/P1: none.
- P2: blank or undecided land could label coherent financing and insurance as
  `Entered monthly total` even though lot-rent applicability was unresolved.
- P3: the review backlog still instructed a cycle 1 re-review.
- The reviewer confirmed all cycle 1 and cycle 2 findings remained resolved.

Cycle 3 fixes:

- `Entered monthly total` now requires owned land, buying land, or rented space
  with known rent. Blank or undecided land and rented space without known rent
  render `Known monthly costs`.
- Six native branches cover blank, undecided, owned, buying, renting with rent,
  and renting without rent.
- A 320px browser pass confirmed the expected monthly label for each branch and
  no horizontal overflow.
- The stale backlog review instruction is fixed.
- Full native QA passes 42/42 tests, including sixteen focused calculator
  tests.

Review state: all findings are fixed, but the three-cycle review cap is
exhausted and cycle 3 itself returned `FAIL`. This transaction is not release
eligible. No commit, push, deployment, or production claim may proceed. A
separately registered direct-manual continuation with fresh independent review
authority is required.

## 2026-07-29 - THC-COST-002 Pre-Review Record

Action: independently re-review and conditionally release the complete held
calculator candidate.

Authority: direct manual user instruction.

Base: `38a3654cff2818a1a6b8390bc0ec4ebf2484262c`

Frozen paths: the same 17 exact paths recorded for `THC-COST-002` in
`ops/seo-roadmap.json`.

Inherited evidence:

- Complete dated query/SERP, ranking-page, persona, experience-level, and
  every-section research.
- All findings from `THC-COST-001` cycles 1-3 fixed in the working tree.
- 42/42 native tests, zero site QA errors with three pre-existing untouched-page
  canonical warnings, zero operator-state errors, valid JSON, required files,
  and `git diff --check`.
- Desktop, 390px, and 320px browser QA, including exact values, land/rent
  transitions, all six monthly-label branches, focus, and containment.

Review requirement: a fresh different independent read-only reviewer must
return `PASS` or `PASS_WITH_P3` on the complete inherited range before release.

### Cycle 1

Reviewer: independent read-only reviewer
`019fae23-18cf-7a10-bd54-cb104163517e`

Verdict: `FAIL`

Findings:

- P2: unresolved starting amounts and contingency still rendered as zero, while
  complete financing-only input was discarded instead of returning a partial
  monthly scenario.
- P2: `status/site-pages.md` and
  `backlog/seo-research-review-backlog.md` still described `THC-COST-001` as
  active instead of the held source for the sole active `THC-COST-002`
  continuation.

Resolution:

- Added explicit starting, project-amount, and contingency known-state flags.
  Unknown starting and buffer metrics are omitted; deliberate zero remains a
  visible resolved value.
- Coherent financing, insurance, or applicable lot-rent input now returns a
  partial monthly scenario even when no one-time project amount is entered.
- Added three focused regression tests. Nineteen of nineteen calculator tests
  pass; the full native suite passes 45/45.
- Local browser checks pass for outside cost without a starting amount, blank
  versus explicit-zero contingency, financing-only monthly output and result
  focus, and 320px containment without horizontal overflow.
- Corrected both stale operator mirrors. Cycle 2 must review the complete diff
  and these fixes.

Release state: blocked pending cycle 2 `PASS` or `PASS_WITH_P3`.

### Cycle 2

Reviewer: independent read-only reviewer
`019fae23-18cf-7a10-bd54-cb104163517e`

Verdict: `PASS_WITH_P3`

Cycle 1 resolution check: passed. The reviewer independently confirmed that
unknown starting amounts are omitted, blank and deliberate-zero contingency
remain distinct, financing or recurring input without project amounts returns
a partial scenario, both stale mirrors are corrected, and the exact 17-path
scope and QA matrix pass.

Finding:

- P3 in `site/tiny-home-cost-calculator/calculator.js`: when all 13 one-time
  categories are resolved but the planning buffer is blank, the safe partial
  title says important costs are still unknown even though the body correctly
  identifies only the buffer assumption as unresolved.

Disposition: accept as nonblocking wording debt. Do not change the reviewed
site candidate in this release transaction.

Release recommendation: eligible for exact-path fetch/divergence, commit,
push, Pages, and production verification.

### Cycle 3 And Release

Reviewer: independent read-only reviewer
`019fae23-18cf-7a10-bd54-cb104163517e`

Verdict: `PASS_WITH_P3`

The final frozen-candidate check found no P0-P2 issues. It confirmed the exact
17-path scope, faithful cycle 2 evidence, all cycle 1 resolutions, 45/45 native
tests, 19/19 focused tests, zero SEO/operator-state errors, valid JSON,
required files, and a clean diff check. The same buffer-title P3 remains
unchanged for a future separately reviewed action.

Release:

- Commit: `1af1dc2d53fee70dff9b4dfd035ecc9d0ae920c6`
- Pushed base: `f52c1c0b9ce59fc0fb7d291199dfa74c1aa8d80f`
- Pages run: `30460242431`, success
- Production bytes: calculator HTML, JavaScript, shared stylesheet, and sitemap
  match the repository.
- Production browser: canonical, H1, review date, blank, quote-only, outside
  cost without quote, blank versus zero buffer, financing-only monthly output,
  result focus, console, and 320px containment checks passed.

Release state: production-verified.
