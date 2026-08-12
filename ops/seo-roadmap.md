# Tiny Home Clarity Operator Roadmap

The machine-readable queue is `ops/seo-roadmap.json`. The central Control Room
is the only writer of its dispatch ledger and remains the default portfolio
scheduler. The project Master / Operator updates repository state only inside a
validated dispatch or direct manual user transaction. By direct user authority,
the temporary 09:00/17:00 Master heartbeat through 2026-08-14 17:00 ET is
direct-manual, not a Control Room dispatch. The user retains material legal,
monetization, provider, and unreviewed release decisions.

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
9. `THC-SD-001` — completed and production-verified on 2026-07-28: researched
   and repaired the existing San Diego URL around distinct City and
   unincorporated County paths.
10. `THC-COST-001` — blocked and unreleased after exhausting three independent
    review cycles; all findings are fixed in the held working tree, but cycle 3
    returned `FAIL`.
11. `THC-COST-002` — completed and production-verified on 2026-07-29 in
    `1af1dc2`; Pages run `30460242431` succeeded.
12. `THC-BUILD-002` — held unreleased after exhausting three review cycles;
    the exact local candidate is fixed but requires a separate continuation.
13. `THC-BUILD-003` — completed and production-verified in `1895694`; Pages
    run `30622059848` succeeded.
14. `THC-MON-001` — completed the review-clean visibility diagnosis and daily
    GSC sensor hardening on 2026-08-01.
15. `THC-AUTH-001` — completed review-clean ethical citation-opportunity plan
    on 2026-08-03; no outreach or link placement.
16. `THC-AUTH-002` — review-clean BAC draft deferred unsent by the user on
    2026-08-04; no approval request or external contact remains active.
17. `THC-PROD-001` — completed review-clean research on 2026-08-04; it
    promotes only the parcel-specific `THC-LAND-001` action.
18. `THC-LAND-001` — completed and production-verified on 2026-08-10 in
    `b9760e9`; Pages run `31395122993` succeeded and the 90-day portfolio
    observation period is active through 2026-11-08.
19. `THC-STATUS-001` — completed on 2026-08-06 as an eight-path, docs-only page
    status and finite build-then-observe reconciliation. It created no page and
    did not start `THC-LAND-001`.
20. `THC-OPS-003` — completed on 2026-08-09 as a 20-path docs-only operating
    cleanup. It aligned the temporary direct Master heartbeat, simplified
    current state/backlogs, and made material generic-but-safe content a P2
    failure.
21. `THC-MON-002` — completed in `fcd3ce5`: reconciled the recovered daily GSC
    sensor and August 11 monitoring state, added the omitted land-workflow URL
    to read-only inspection, and enforced exact sitemap/monitor parity.
22. `THC-OPS-004` — completed: added a finite human-value research rotation
    for the observation period and a draft-only, user-gated community-answer
    lane. No site or external-account mutation is in scope.
23. `THC-REV-001` — ready after `THC-OPS-004`: research-only re-verification of
    the unresolved Georgia first-screen beginner gap. It cannot edit the page
    or use five impressions as implementation evidence.

## THC-OPS-004 completion

- Authority: direct Master heartbeat and the user's August 12 direction; no
  Control Room lease or central-ledger write.
- Scope: the twenty-one exact paths in `ops/current-cycle.md`. Cycle 1 review
  exposed a stale authoritative no-op rule, so `ops/portfolio-operator.md` was
  declared before editing and added as the sole scope expansion.
- Causal evidence: the user wants scheduled work to review existing pages and
  answer real community questions only when the answer is genuinely useful.
- Monitoring context: the validated August 12 snapshot through August 10 has
  18 impressions, 0 clicks, five indexed URLs, and three discovered-currently-
  not-indexed URLs across the complete eight-URL monitor. It does not select a
  rewrite or new page.
- Output boundary: operating protocol, rotation status, and one draft-only
  candidate record. No page, indexing request, outreach, Reddit action, link
  placement, vendor recommendation, cost claim, or legal conclusion.
- Result: a finite five-lane research rotation, a draft-only community-answer
  contract, one high-fit standalone candidate draft, and one promoted
  research-only Georgia review. No site or external action occurred.
- QA: 70/70 tests, 25 snapshot validations, zero SEO errors with three known
  warnings, zero operator-state errors, valid JSON, required files, exact scope,
  and whitespace checks pass.
- Review: cycle 1 returned `FAIL` with one P2 stale no-op rule. The scope was
  explicitly expanded before fixing it. Independent cycle 2 returned `PASS`
  with no findings on all twenty-one paths. Final closeout cycle 3 returned
  `PASS_WITH_P3`; its sole stale-cycle wording P3 is fixed.
- Release: review-clean commit
  `3530d12261f5db14b151f1fe7187c3c4a9f329d0` was pushed and remotely verified
  from base `e13f05d`. No deployment applies.

## THC-MON-002 completion

- Authority: direct Master heartbeat; no Control Room lease or ledger write.
- Base: clean local `main` fast-forwarded to origin snapshot commit `93cdf69`.
- Evidence: run `31486530514` recovered after the prior one-run timeout. The
  August 11 snapshot through August 9 reports 22 impressions, 0 clicks, five
  of seven inspected URLs indexed, one impression on August 9, and both
  outstanding URLs discovered-currently-not-indexed.
- Defect: the live land workflow is the eighth sitemap URL but was absent from
  `ops/gsc-monitor.json`, so scheduled URL Inspection could not observe it.
- Result: added the land URL and enforced exact sitemap/monitor parity in
  operator-state QA with regression coverage.
- Decision: keep the 90-day hold and `next_eligible_action_id` at `none`; the
  new evidence does not select a page rewrite, URL, indexing request, or
  outreach.
- Scope: the ten exact paths frozen in `ops/current-cycle.md`; no `site/**` or
  external mutation.
- QA: 24 focused tests, 24 snapshot validations, zero operator-state errors,
  valid JSON, and clean diff checks pass after the cycle 1 P3 fix.
- Review cycle 1: independent reviewer
  `019ff0ef-59a5-7f12-96c4-ee46cec533a9` returned `PASS_WITH_P3` with no
  P0-P2 finding. Its duplicate-monitor regression P3 is fixed.
- Review cycle 2: the same independent read-only reviewer returned `PASS` with
  no findings and reproduced 70/70 tests plus all monitoring/state checks.
- Release: commit `fcd3ce5b0dfe95c564b11b69047966e9e650092b` is on
  `origin/main` and remotely verified. This is a push-only monitoring/config
  transaction; Pages deployment is not applicable.
- Final closeout review cycle 3: `PASS` with no findings on the complete action
  range and six-path mechanical closeout. All review findings are resolved.

## THC-LAND-001 completion

- Direct-manual authority: the temporary Master heartbeat; no Control Room
  lease or central-ledger write applies.
- Base: clean and origin-aligned at
  `7e6ad2dd33119d7c567515261a312af894861820`.
- Exact scope: the seventeen paths frozen in `ops/seo-roadmap.json`; the
  status, roadmap, review, decision, and progress paths are also the
  predeclared release-closeout paths for mechanical post-deployment evidence.
- Causal evidence: completed `THC-PROD-001` research and
  `briefs/tiny-home-next-user-value-brief-2026-08.md`.
- Monitoring context: the August 9 GSC snapshot through August 7 reports 21
  impressions, 0 clicks, seven discovered pages, five indexed, and six
  consecutive zero-impression days. It does not select or cancel this action.
- Output: one account-free, client-side, printable parcel evidence and
  unresolved-question workflow. It distinguishes unknown, claim-only,
  source-saved, and conflicting evidence without a legal/buildability verdict.
- Implementation checkpoint before release: the page, client-only worksheet,
  homepage discovery link, sitemap entry, styles, focused tests, and
  implementation record were complete locally with no push or deployment yet.
- Rendered QA: 1440, 390, and short 320 views have no horizontal overflow; the
  short 320 first screen shows the answer, first action, and next-section cue.
  Blank, browsing, offer-deadline, retained-source, escaped-input, reset, and
  focus states pass. A headless print check produces the parcel file only.
- Review cycle 1: independent reviewer
  `019fcc94-81c5-7ea2-b165-377dca84e4a0` returned `FAIL` with one P1 and three
  P2 findings. Fixed missing-reference source self-attestation, the first-screen
  land-inventory boundary, August 9 GSC status fidelity, and populated-print
  verification.
- Review cycle 2: the same independent read-only reviewer checked the complete
  seventeen-path candidate and returned `PASS` with no P0-P3 findings,
  independently reproducing 68/68 tests and all site/state checks. At that
  review checkpoint, the candidate remained unreleased.
- Final review cycle 3: the reviewer returned `PASS` with no P0-P3 findings on
  the frozen complete transaction.
- Release: commit `b9760e93fb43ea7560963ef419e9b80421bc642b` was pushed without
  divergence; Pages run `31395122993` succeeded.
- Production: page, module, homepage, and sitemap returned HTTP 200; canonical,
  H1, boundary, discovery, sitemap, short-mobile, blank-state, missing-source,
  retained-source, print-action, and console invariants passed.
- Observation: new indexable-page publication is held through 2026-11-08;
  30/60/90-day checkpoints are 2026-09-09, 2026-10-09, and 2026-11-08.
- Sensor note: August 10 GSC run `31383905353` timed out on one read-only API
  request and produced no snapshot. Treat as transient unless it repeats.
- Required review: rendered first screen, every section, primary decision
  personas, beginner/intermediate/advanced experience levels, realistic tool
  states, native QA, independent review, Pages, and production invariants.
- Boundary: no listings, full-address collection or transmission, analytics,
  accounts, database, outreach, indexing request, vendors, typical/complete
  costs, or legal/zoning/buildability conclusion.

## THC-OPS-003 completion

- Direct manual user instruction; no Control Room lease applies.
- Base: clean and origin-aligned at
  `5f66a88da471d265079c9d721b68340a5a6463f3`.
- Exact scope: the 20 paths frozen in `ops/seo-roadmap.json`.
- Fresh monitoring context: the August 9 snapshot through August 7 reports 21
  rolling impressions, 0 clicks, seven discovered pages, five indexed, and six
  consecutive zero-impression days. It does not select a page action.
- Goal: remove scheduler/state/backlog contradictions and require a rendered,
  non-generic usefulness delta before any page can pass review.
- Result: fixed local heartbeat times and cutoff are authoritative; current
  cycle and both supporting backlogs are concise; research, implementation, and
  final review now apply topic-swap, paraphrase, output, removal, rendered, and
  realistic-state tests. Useful explanation, evidence, safety, trust,
  accessibility, and navigation can still earn their place.
- Native QA: 54/54 tests, zero SEO errors with three known warnings on untouched
  pages, zero operator-state errors, valid JSON, required files, exact scope,
  and clean diff checks.
- Independent review: cycles 1 and 2 returned bounded P2/P3 findings, all fixed;
  reviewer `019fcc94-81c5-7ea2-b165-377dca84e4a0` returned `PASS` with no
  findings in final cycle 3.
- `THC-LAND-001` remains the sole next eligible action and was not started.
- No deployment applies because no `site/**` path changed.
- No `site/**`, implementation, fresh keyword/SERP research, indexing request,
  outreach, external account, analytics, deployment, vendor recommendation,
  cost claim, or legal/zoning/buildability conclusion.

## THC-STATUS-001 completion

- Direct manual user instruction; no Control Room lease applies.
- Exact scope: the eight paths frozen in `ops/seo-roadmap.json`, from clean,
  origin-aligned base `36fa86e51606aea0ec9aeab7d5a744ddc157276f`.
- Current evidence: the August 6 snapshot is finalized through August 4 and
  reports 32 impressions, 0 clicks, seven sitemap-discovered URLs, and five of
  seven indexed. The under-$20K and build-options pages are both
  `Discovered - currently not indexed`; neither is collector-unknown.
- Decision: keep `THC-LAND-001` as the only ready implementation. If later
  reviewed and production-verified, its release starts a 90-day hold on new
  indexable page publication.
- During the hold, daily GSC sensing continues. Around day 30 inspect crawl and
  indexing, around day 60 inspect repeated query/page testing and clicks, and
  at day 90 choose whether to deepen, repair, investigate, or pause.
- Interrupt only for a material technical/indexing defect, official-source
  change, repeated query/page evidence exposing a specific unmet job, or a new
  direct user decision.
- Family Tripwise's durable city status convention is a process reference, not
  evidence that Tiny should copy its page count or publication cadence.
- No `site/**`, new content, research pull, indexing request, outreach,
  external account, deployment, vendor recommendation, cost claim, or legal/
  zoning conclusion is authorized.
- Native QA: 54/54 tests, zero SEO errors with three known warnings on
  untouched pages, zero operator-state errors, valid JSON, required files,
  exact eight-path scope, and clean diff checks.
- Independent review: Anti Gravity CLI through `agy --print` returned `PASS`
  with no P0-P3 findings in cycle 1.
- Result: review-clean and complete; `THC-LAND-001` remains the sole ready next
  action and is not started. No deployment applies.

## THC-MON-001 completion

- Causal evidence: authenticated read-only GSC daily rows show eight
  consecutive finalized zero-impression days from July 22 through July 29.
- Monitoring context: the August 1 API snapshot through July 30 remains flat
  at 30 rolling impressions, 0 clicks, sitemap `Success`, six discovered
  pages, and five of six configured URLs indexed.
- Technical checks: public sitemap, robots, and configured pages return HTTP
  200; GSC reports no manual action or security issue.
- Monitoring defect: aggregate-only snapshots hide the zero streak, and the
  six-URL inspection list omits the live build-options page.
- Exact scope: the 13 paths frozen in `ops/seo-roadmap.json` only.
- Output: tested daily trend/streak sensing, complete seven-URL inspection,
  one dated visibility diagnosis, and at most one separately implementable
  next action.
- Prohibited: `site/**`, content rewrites, new URLs, indexing requests,
  outreach, backlink placement, external-account changes, vendor or builder
  recommendations, typical/complete costs, and legal/zoning conclusions.
- Preliminary diagnosis: an organic visibility stall, not a demonstrated
  technical outage or penalty. The complete measured, inferred, and unknown
  evidence is in
  `docs/research/tiny-home-visibility-diagnosis-2026-08-01.md`.
- Proposed next action: `THC-AUTH-001`, a separately registered internal
  authority-opportunity qualification plan. It is not started here.
- Implementation: all seven live URLs are inspected; finalized daily rows fill
  omitted dates with explicit zeros; a seven-day zero-impression status is
  stored and rendered; historical snapshots remain valid.
- QA: 54/54 native tests, 15/15 historical snapshot validations, zero SEO
  errors, zero operator-state errors, valid JSON, required files, and clean
  diff checks.
- Review: independent read-only reviewer
  `019fbf70-9256-75e3-85d6-fbff50aa0516` returned `PASS_WITH_P3` with no P0-P2
  findings. Direct malformed-row validator tests and fuller SERP market/device/
  order capture remain two nonblocking P3 maintenance notes.
- Release: pushed in `5e2dbae380705fb8f52d1e0caf3682f770276cb3`
  from aligned base `8c38181543d7be6599bdf825cf4f1a1d2adee4be`.
  Deployment does not apply because no `site/**` path changed.

## THC-AUTH-001 completion

- Selection evidence: seven reviewed live assets, an eight-day finalized
  zero-impression streak followed by only two isolated impressions, healthy
  public crawl and sitemap discovery, and GSC external-links total of zero.
- Current context: the August 3 snapshot through August 1 reports 32 rolling
  impressions and 0 clicks. The sitemap reports seven discovered URLs; URL
  Inspection reports five indexed URLs, the under-$20K URL as unknown to
  Google, and the build-options URL as discovered-currently-not-indexed. It is
  evidence of sitemap discovery and tiny residual testing, not meaningful
  visibility recovery.
- Exact scope: the nine paths frozen in `ops/seo-roadmap.json`, from aligned
  base `c6e795d4d52cb881bfc75ee06f6986253205d4c8`.
- Boundary: research and qualify opportunities only. Each retained opportunity
  must have a specific cite-worthy existing asset, topical/audience fit,
  editorial legitimacy, risk classification, and a current public contact or
  submission path.
- Prohibited: outreach, backlink placement, paid links, exchanges, private
  networks, generic directory submissions, mass templates, fabricated
  partnerships, external-account mutation, and `site/**` changes.
- Current Semrush authority metrics remain `UNKNOWN`; API units were
  unavailable and optional enrichment is not a gate.
- Research result: retain only Boston Architectural College Library's curated
  Tiny Houses guide for a later pilot. Its current guide has a visible gap for
  the canonical homepage's placement due-diligence job and the library exposes
  a public contact. Six candidates are held; paid, promotional, link-led, and
  credential-mismatch routes are rejected.
- Review: cycle 1 `FAIL` had two P2 evidence groups. The GSC indexing-state
  merge and stale/incomplete Dwell and Tiny House Expedition evidence were
  fixed. Independent cycle 2 and final completed-state cycle 3 returned `PASS`
  with no P0-P3 findings.
- QA: 54/54 tests, zero SEO errors with three known canonical warnings, zero
  operator-state errors, all 17 GSC snapshots validated, valid JSON, required
  files, exact nine-path scope, and clean diff checks.
- Release: the exact reviewed transaction was pushed in
  `3bf5ce5e9c244c5373a53a8d6a15ce5c2cf57c28` from aligned base
  `c6e795d4d52cb881bfc75ee06f6986253205d4c8`. Deployment does not apply because
  no `site/**` path changed.
- Historical follow-on: `THC-AUTH-002` was the separate human-gated
  one-contact pilot promoted by this research. It was later selected, drafted,
  reviewed, and deferred unsent by the user on 2026-08-04.

## THC-AUTH-002 deferred transaction

- One public organizational recipient: Boston Architectural College Library.
- One asset: the canonical placement hub.
- Exact scope: the 11 paths frozen in `ops/seo-roadmap.json`, from aligned
  base `df9a33edae978e162f297d6a5b7657e5d66cace5`.
- User redirect: before any send, the user asked to backlog this pilot and
  prioritize building something genuinely useful. The transaction scope was
  therefore expanded to the 11 exact paths in `ops/seo-roadmap.json` for a
  reviewed, docs-only deferral and product-priority reconciliation.
- Current evidence: no newer GSC snapshot or central decision exists. The
  August 3 snapshot is unchanged monitoring context, and the July 28 central
  report is stale relative to the reviewed local roadmap.
- User decision: defer the experiment and prioritize a genuinely useful
  user-facing product before considering outreach.
- Draft state: the exact plain-text message is preserved in
  `docs/research/tiny-home-authority-outreach-log-2026-08.md`; it has not been
  sent or entered into an email account. Independent reviewer
  `019fcc53-0002-7193-b368-2cecad75de2f` returned `PASS` with no P0-P3 findings
  in both the substantive and final-state review cycles. No approval is
  requested. A later send requires a new direct user decision.
- Stop after one contact, including after rejection or no response. Do not
  contact the six held prospects.
- Success is truthful delivery and learning. A reply, citation, referral visit,
  or ranking effect remains `UNKNOWN` until observed.
- No payment, reciprocity, directory submission, generic template, new content,
  `site/**`, indexing request, account creation, vendor recommendation, cost
  claim, or legal/zoning conclusion.

## THC-PROD-001 completion

- Research-only; selected with the 12 exact paths in `ops/seo-roadmap.json`.
- Start from one observed buyer decision job, not a keyword headline or content
  quota.
- Use current query, SERP, ranking-page, community-question, and existing-page
  overlap evidence with explicit uncertainty and non-additive demand handling.
- Define the first-screen answer, concrete next action, decision personas,
  beginner/intermediate/advanced usefulness, and every-section purpose.
- Result: promote only `THC-LAND-001`. Parcel/land diligence has modest distinct
  demand, a repeated high-stakes buyer job, and a gap between the homepage's
  broad placement triage and one parcel's evidence file.
- Do not promote standalone builder due diligence or quote comparison. Those
  jobs materially overlap the build-options page and cost calculator.
- Proposed product: a client-side, printable workflow that separates unknown,
  claim-only, source-saved, and conflicting evidence and produces an unresolved
  question file without a legal or buildability verdict.
- Review: cycle 1 returned `FAIL` with three P2 findings. The FWS URL,
  reproducible land-query samples, inventory-intent exclusion, and current
  state were fixed. Cycles 2 and 3 returned `PASS_WITH_P3`; their two P3
  transaction-close wording notes are synchronized in the completed state.
- QA: 54/54 tests, zero SEO errors with three known warnings, zero
  operator-state errors, valid JSON, required files, exact scope, and clean
  diff checks.
- `THC-LAND-001` is ready but unselected; no implementation is started here.
- No `site/**`, outreach, indexing, external account, vendor recommendation,
  cost claim, or legal/zoning conclusion was authorized by this transaction.

## THC-COST-002 completion

- Direct manual authorization on 2026-07-29.
- The validated July 29 GSC snapshot is unchanged versus July 28 and remains
  monitoring context only; it does not alter this action.
- Inherit the complete uncommitted 17-path `THC-COST-001` candidate at
  origin-aligned base `38a3654cff2818a1a6b8390bc0ec4ebf2484262c`.
- Use a fresh independent read-only reviewer for the complete diff, human
  decision job, beginner/intermediate/advanced passes, every-section purpose,
  calculator state machine, exact arithmetic, monthly completeness, SEO,
  accessibility, responsive behavior, and durable state.
- Cycle 1 reviewer `019fae23-18cf-7a10-bd54-cb104163517e` returned `FAIL` with
  two P2 groups: unresolved starting/buffer values could render as zero while a
  financing-only scenario was discarded, and two durable mirrors still called
  `THC-COST-001` active. Both groups are fixed. Nineteen focused tests and
  45/45 full native tests plus desktop and 320px browser checks pass.
- Cycle 2 reviewed the complete inherited diff and all cycle 1 fixes, returning
  `PASS_WITH_P3`. The sole P3 is nonblocking buffer-title wording when all
  one-time categories are resolved but the buffer is blank. It is recorded
  without changing the reviewed site candidate.
- Only `PASS` or `PASS_WITH_P3` may proceed.
- If review-clean, rerun native QA, fetch and require no divergence, commit and
  push the exact 17 paths, verify Pages, and test production bytes and behavior.
- Do not reopen research, redesign the page, or absorb another page/action.
- Final cycle 3 returned `PASS_WITH_P3` with no P0-P2 findings and retained the
  same nonblocking wording note.
- Released in `1af1dc2d53fee70dff9b4dfd035ecc9d0ae920c6`; Pages run
  `30460242431` succeeded.
- Live HTML, calculator JavaScript, stylesheet, and sitemap byte-match the
  repository. The production interaction and 320px containment matrix passed.

## THC-BUILD-002 held result

- Target URL: `https://tinyhomeclarity.com/tiny-house-build-options/`.
- Frozen to the 19 exact paths in `ops/seo-roadmap.json`.
- Reuse the July 18 build-intent demand artifact and the completed internal
  brief; refresh public SERPs, representative ranking pages, official sources,
  decision personas, experience levels, and every-section decisions.
- Build one comparison and due-diligence surface for plans, kits, shells,
  THOW/trailer builds, custom builders, ADU contractors, and park-model/RV
  products. Do not create a generic intent router.
- No directory, vendor recommendation, typical/complete price, parcel/legal
  answer, lead generation, location batch, indexing request, outreach, or
  external-account change.
- The exact local candidate is implemented with reproducible current evidence,
  exact ranking URLs and retained CPC values, an original
  worksite image, one static seven-path comparison, written-proof workflow,
  homepage/sitemap integration, and six focused tests.
- Native tests pass 51/51; SEO and operator-state QA have zero errors; desktop,
  390px, and 320x568/700/844 browser passes have no overflow, image, console,
  first-viewport, scroll-semantics, or mobile-labeling defect.
- Cycle 1 reviewer `019fb0a9-b3ae-7d61-88aa-029533866535` returned `FAIL`
  with three P2 findings and one P3. All are fixed; cycle 2 re-review is
  complete.
- Cycle 2 verified every cycle 1 fix and the complete candidate, then returned
  `FAIL` only because `ops/current-cycle.md` said five focused tests instead of
  six. The count is corrected.
- Cycle 3 verified the complete page and every prior fix, then returned `FAIL`
  because two current-state mirrors still called cycle 2 pending or the
  release gate. Both are corrected.
- Native, focused, visual, responsive, SEO, source/link, privacy, and
  independent review gates pass in substance, but the action exhausted three
  cycles without `PASS` or `PASS_WITH_P3`. It is held, uncommitted, and
  unreleased. A separately registered continuation with a fresh reviewer is
  required.

## THC-BUILD-003 completion

- Inherit the exact fixed 19-path `THC-BUILD-002` candidate at base
  `7083794c1176a670f6e4997a9cdeaa10ae0466f4`.
- Use a fresh different independent read-only reviewer for the complete
  candidate, three personas, every section, claims, sources, SEO,
  accessibility, responsive behavior, tests, and durable state.
- Do not reopen research, redesign, add a URL, directory, vendor, price,
  legal/permit answer, lead generation, indexing request, outreach, or external
  account.
- Fresh cycle 1 reviewer `019fb78f-65a1-7e90-b528-8dfac328418f` returned
  `PASS` with no findings on the complete 19-path candidate.
- Fast-forwarded compatible automated GSC snapshot commit `3b8c3a6`; July 30
  material metrics are unchanged versus July 29 and remain monitoring context.
- Cycle 2 reviewed the complete reconciled 19-path diff and returned `PASS`
  with no findings.
- Cycle 3 reviewed the frozen candidate and returned `PASS` with no findings.
- Committed and pushed the exact 19 paths in
  `18956949f0fe2748f13f0c71505dadf927a63150` from base `3b8c3a6`.
- Pages run `30622059848` succeeded. The production page, image, stylesheet,
  homepage, and sitemap return HTTP 200 and byte-match the repository.
- Live 1440x900, 390x844, and 320x568 browser checks passed canonical, H1,
  image, seven-path, mobile-label, first-viewport, containment, and console
  invariants.

## THC-COST-001 held result

- Repair the existing indexed calculator URL; do not create another cost page.
- Retain July 29 Semrush UI, public SERP, representative ranking-page, current
  product-state, persona, and every-section evidence in
  `docs/research/tiny-home-cost-calculator-refresh-2026-07-29.md`.
- Research and implementation are complete in the working tree. A read-only
  research advisor returned `FAIL/improve` on the prior live page; the rebuilt
  tool addresses those P1/P2 issue groups.
- Make a known quote or working build budget the starting anchor without
  generating national-average or typical costs.
- Distinguish unknown, added amount including typed zero, already covered by
  the starting amount, and not applicable.
- Blank input must remain neutral. Materially partial input may show known
  costs and a separate optional buffer, but never as an all-in project
  estimate.
- Remove the general-utilities overlap; keep water, wastewater, and electrical
  costs separate.
- Add project-path context for turnkey, shell/kit, DIY, foundation/ADU, and
  park/RV-style products without assigning prices or implying placement.
- Keep one buyer-protection checklist, compress repeated warnings, add the live
  under-$20K route, and preserve the placement-tool handoff.
- Forty-two native tests, site/state QA, JSON, required-file, diff, and
  desktop/390px/320px local browser checks pass.
- Independent reviewer `019fad57-656e-73a1-a687-08e4eb1f63fb` returned `FAIL`
  in cycle 1 with one P1, five P2, and one P3 finding. Exact-value validation,
  lot-rent applicability/transitions, result order, paired-query SERP evidence,
  beginner terminology, durable QA state, and the CSS selector collision are
  fixed.
- Cycle 2 confirmed those fixes, then returned `FAIL` on visible-cent
  precision and one unsupported top-nine SERP sentence. Currency and recurring
  traces now preserve cents with native/browser assertions, and the unsupported
  sentence is removed.
- Cycle 3 confirmed every prior fix, then returned `FAIL` because blank or
  undecided land could still produce an `Entered monthly total`; it also found
  one stale P3 review instruction. Both are fixed with six native monthly-label
  branches and a 320px browser pass.
- The three-cycle cap is exhausted. No commit, push, deployment, or production
  claim is allowed from this transaction. A separately registered
  direct-manual continuation with fresh independent review authority is
  required before release.
- Frozen paths are the 17 exact paths in `ops/seo-roadmap.json`.
- No homepage, under-$20K implementation, local guide, build page, analytics,
  email, indexing, outreach, external account, vendor recommendation,
  typical/complete price, affordability answer, or legal conclusion is in
  scope.

## THC-SD-001 completion evidence

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
  inconsistencies were fixed.
- Released in `daaf743d6d35f94659fb776372505ba0c13927b0`; Pages run
  `30399382114` succeeded.
- The live homepage, San Diego page, local records, and sitemap byte-matched the
  reviewed commit. The live canonical, H1, City/County routing,
  incorporated-city non-match, focus, source links, and 320px layout passed.

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

- The 2026-08-01 snapshot through 2026-07-30 is unchanged at the rolling
  aggregate level versus July 31: 30 impressions, 0 clicks, sitemap `Success`,
  6 discovered pages, and 5 of 6 configured priority URLs indexed.
- Authenticated daily rows materially change the interpretation: every
  finalized day from July 22 through July 29 has zero impressions. This hidden
  streak selected `THC-MON-001` even though the aggregate sensor was flat.
- Future snapshots retain privacy-safe daily rows and a zero-streak status and
  inspect all seven live sitemap URLs, including build options.
