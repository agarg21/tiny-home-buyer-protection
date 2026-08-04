# Decisions

## 2026-07-07 - Bootstrap As Focused Experiment

Decision: proceed as a focused bootstrap experiment, not a full-scale content site.

Why:

- Business plan identifies credible initial demand and buyer pain.
- The project has a clear tool-first wedge.
- Success depends on useful assets and official-source verification, not page volume.

## 2026-07-07 - Use GitHub Pages Static Site

Decision: deploy the initial site from `site/` using GitHub Pages via GitHub Actions.

Why:

- Simple, low-cost launch path.
- Good fit for a static SEO/product MVP.
- Keeps published source in GitHub.

## 2026-07-07 - Do Not Create `site/CNAME` Yet

Decision: wait to create `site/CNAME` until a custom domain is selected and purchased.

Why:

- Avoids deploying a CNAME that does not yet resolve or belong to the user.

## 2026-07-07 - Create Public GitHub Repo

Decision: create `agarg21/tiny-home-buyer-protection` as a public GitHub repository.

Why:

- Public Pages hosting is the lowest-friction static-site path.
- The initial repo contains operating docs and static source, not private credentials.

Status update:

- User noted the repo may need to become private.
- Do not change visibility until explicitly confirmed because Pages behavior can depend on account/plan support.

## 2026-07-07 - Use Porkbun As Registrar

Decision: use Porkbun for domain purchase/setup unless the user changes direction.

Why:

- User said Porkbun has been the standard registrar for recent domain purchases.

## 2026-07-07 - Select tinyhomeclarity.com

Decision: use `tinyhomeclarity.com` as the custom domain.

Why:

- User approved it after rejecting `tinyhomeguard.com`.
- It better conveys practical decision support than security/protection.
- It is broad enough for placement, cost, utilities, financing, builder checks, and future tools.

Status:

- Purchased through Porkbun on 2026-07-07.
- Porkbun authoritative DNS configured for GitHub Pages on 2026-07-08.
- Leftover wildcard parking DNS was removed on 2026-07-08 because GitHub strongly recommends against wildcard DNS records for Pages and HTTPS provisioning was stuck.

## 2026-07-08 - Use Tiny Home Clarity As Public Brand

Decision: use `Tiny Home Clarity` as the public-facing site brand.

Why:

- It matches `tinyhomeclarity.com`.
- It conveys practical decision support without sounding like legal advice, a regulator, or a formal buyer-protection program.
- It leaves room for placement, cost, utilities, financing, builder checks, and future templates/tools.

Status:

- Public title, header brand, aria label, and footer disclaimer now use `Tiny Home Clarity`.
- `Tiny Homes Buyer Protection` remains acceptable as internal project/thesis language unless explicitly renamed later.

## 2026-07-13 - Defer Analytics Until Traffic Or Product Questions Require It

Decision: do not add analytics yet.

Why:

- Google Search Console is enough for the current bottleneck: discovery, indexing, impressions, clicks, and queries.
- The site has no meaningful click volume yet, so analytics would mostly confirm low traffic.
- Capturing raw calculator inputs would create unnecessary privacy and trust risk.
- If analytics are added later, start with page views and anonymous events only, not user-entered financial numbers.

Status:

- Analytics provider remains unselected.
- Add analytics only after GSC shows meaningful traffic or there is a specific product question GSC cannot answer.

## 2026-07-18 - Consolidate Strategy, Research, SERP Review, And Backlink Timing

Decision: use `strategy/current-strategy.md` as the consolidated operating
business plan and strategy summary. Keep detailed research artifacts in
`docs/research/`, `seo/`, `reviews/`, `briefs/`, and `ops/`, but update the
strategy when research changes mission, positioning, roadmap, or decision
gates.

Decision: do not run broad SERP review on every GSC pass. Use GSC first while
the site is newly launched, then run targeted SERP reviews when a query/page
pair shows meaningful impressions, an adjacent query suggests a better page or
section, or a planned asset needs current SERP context.

Decision: treat backlinks as important but premature for active outreach until
there are several link-worthy, review-clean assets. Prioritize calculators,
official-source records, checklists, and source-backed comparison pages first.

Why:

- The current bottleneck is discovery, indexing, and early query fit, not a lack
  of broad SEO activity.
- SERP review is useful when it informs a specific page decision; otherwise it
  can turn into expensive busywork.
- Outreach works better after the site has assets that official sources,
  forums, communities, or writers have a concrete reason to cite.

## 2026-07-18 - Treat Placement Homepage As Hub, Not Sole Ranking Bet

Decision: the homepage/placement tool should remain a hub, but the site should
not depend on that one broad page ranking for all `where can i put a tiny
house` intent. The query is locally sensitive; a 2026-07-18 manual SERP check
returned New Jersey/state/vendor results. Ranking work should pair the hub with
narrow, official-source-backed support pages chosen from GSC evidence, SERP
gaps, and source availability.

Why:

- The current homepage is useful as a diagnostic checklist, but it does not
  answer a localized searcher's likely next question by itself.
- Early GSC evidence is tiny, but the Los Angeles and San Diego source pages
  have better average positions than the broad homepage.
- A skeptical source-backed local record can compete against vendor pages that
  overstate certainty, but only if it answers a specific jurisdiction or
  classification question.

## 2026-07-18 - Make Cautious Pages More Actionable

Decision: keep the legal/zoning caution, but revise the page model so
source-backed pages lead with useful, bounded answers instead of mostly saying
what they cannot determine.

Why:

- The current narrow pages correctly avoid legal overclaims, but they can feel
  noncommittal to a buyer.
- A page can be confident about official-source facts while still refusing to
  guarantee parcel eligibility or permit approval.
- To rank and help users, the page must clarify the next decision: worth
  investigating, likely wrong jurisdiction/type, or stop until a local office
  confirms a specific blocker.

Implementation implication:

- Before creating more local pages, improve the existing Los Angeles, San Diego,
  and Georgia source pages with an answer-first structure:
  `official source supports`, `may fit`, `stop if`, `next question`, and
  `what remains unverified`.

## 2026-07-18 - California Demand Supports Hub-First, Not Mass City Pages

Decision: use the 2026-07-18 California query-demand research to prioritize
source-page quality and possibly a future California MTH/ADU/placement hub, not
mass city-page production.

Why:

- DataForSEO found stronger California demand for broad/commercial terms such
  as `tiny home california`, `tiny homes for sale california`, `tiny home
  communities california`, and city broad terms than for exact zoning/legal
  terms.
- California geo-targeted generic placement searches exist, but are modest:
  `where can i put a tiny house` at 90, `tiny house zoning` at 70, and `tiny
  house adu` at 90 monthly searches in the DataForSEO pull.
- City-modified placement signals are mostly `UNKNOWN` or very low; Los Angeles
  had only `tiny house adu los angeles` at 10 monthly searches.
- The better near-term move is to make Los Angeles and San Diego answer-first
  and useful, then consider a California hub if SERP/GSC evidence supports it.

Evidence: `docs/research/california-tiny-home-query-demand-2026-07-18.md`.

## 2026-07-18 - San Diego Broad Query Is Mixed Intent

Decision: do not treat `tiny house san diego` as a clean zoning or placement
query. Use it as mixed local intent: builders/listings, communities, stays,
general feasibility, and only secondarily rules.

Why:

- DataForSEO reported 880 monthly searches, CPC `$2.66`, and medium
  competition for both `tiny house san diego` and the close variant `tiny home
  san diego`.
- The Google SERP was dominated by listings, builders, Facebook/community,
  Airbnb/stay pages, videos, and only some official/news/rules-adjacent results.
- A cautious zoning memo alone will not satisfy this query. The San Diego page
  should become an answer-first local guide that helps uncertain searchers
  understand the real local landscape, including shopping, staying, community,
  and legal-placement paths.

Evidence:
`docs/research/serp-tiny-house-san-diego-intent-2026-07-18.md`.

## 2026-07-18 - Repair LA/San Diego Before New City Pages

Decision: focus the next page-quality work on Los Angeles and San Diego. Repair
the existing pages into answer-first local guides for broad, uncertain city
searchers before creating new California city pages or a broad California hub.

Why:

- Addressable query research shows the direct legal/placement exact-match
  volume is small, but broad and adjacent city demand is meaningful.
- San Diego: broad city query around 880/month, listings around 1,300/month,
  communities around 320/month, rentals around 210/month, THOW around 70/month,
  laws around 10/month.
- Los Angeles: broad city query around 720/month, listings around 1,600/month,
  communities around 170/month, rentals around 140/month, and ADU/THOW/laws
  around 10/month each.
- Those buckets are not additive and not all directly addressable. The
  strategic opportunity is buyer-protective guidance for mixed intent, not a
  marketplace page and not a narrow zoning memo.

Evidence:

- `docs/research/la-san-diego-addressable-query-volume-2026-07-18.md`
- `briefs/la-san-diego-page-repair-2026-07-18.md`

## 2026-07-18 - Treat Build Intent As Buyer-Protection, Not Builder Directory

Decision: make build/hire-a-builder questions a prominent path in LA/San Diego
page repairs, but do not pivot Tiny Home Clarity into a builder directory.

Why:

- DataForSEO shows meaningful general US build demand, but `build a tiny house`,
  `tiny house builders`, and `tiny house contractors` appear grouped at 40,500
  monthly searches, so the data cannot cleanly separate DIY from contractor
  hiring.
- Plans, kits, trailer/shell, construction, and code/permit queries show
  additional build-stage demand.
- Exact city-modified tiny-house builder demand is small: Los Angeles around
  50/month and San Diego around 90/month.
- `ADU builders los angeles` and `ADU builders san diego` each show around
  480/month with high CPC, but this is adjacent conventional ADU intent rather
  than tiny-home-specific intent.

Evidence:
`docs/research/tiny-home-build-intent-query-demand-2026-07-18.md`.

## 2026-07-18 - Repair Local Pages First, Then Build National Build Asset

Decision: the work sequence is:

1. Repair the existing Los Angeles and San Diego pages.
2. After review, scope a national tiny-home build decision / builder
   due-diligence asset.
3. Do not build ADU-builder city pages, a builder directory, or more local pages
   from volume alone.

Why:

- LA/San Diego pages already exist and are indexable assets, but they need to be
  more useful before scaling the local pattern.
- Local exact tiny-house builder demand is small, while broad city pages have
  mixed shopping/building/stay/placement intent.
- General US tiny-home build demand is larger and better matched to a
  buyer-protection asset about plans, kits, shells/trailers, builders,
  contractors, THOW builds, codes, permits, and risk checks.
- ADU-builder demand is separate enough that it should be handled only as a
  distinction inside local pages unless official sources support a local
  tiny-home-as-ADU path.

## 2026-07-18 - Add Human Searcher POV And SERP Strategy Review Gates

Decision: every new or materially repaired SEO page must be reviewed from the
intended searcher's point of view and against the target SERP before it can be
considered release-ready.

Why:

- Prior review gates caught claim safety, source visibility, and scope issues,
  but a page can pass those checks while still feeling like an internal SEO
  artifact rather than useful information for a human searcher.
- Tiny Home Clarity pages should start with the user's real situation and next
  decision, not with site taxonomy, SERP taxonomy, or explanations of why the
  page exists.
- SERP review should inform the page job and first-screen promise, while
  official sources still control what the page can safely claim.

Implementation:

- Added the Searcher POV Gate and SERP Strategy Gate to
  `agents/seo-research-review-agent.md`.
- Added the Human Searcher Standard and SERP-Informed Page Strategy to
  `strategy/content-principles.md`.
- Added reusable review prompt
  `templates/searcher-pov-review-prompt.md`.

## 2026-07-18 - Review Broad Tiny-House Pages Across Beginner, Intermediate, And Advanced Personas

Decision: future SEO/content reviews must evaluate important pages across three
tiny-house reader levels: beginner, intermediate, and advanced.

Why:

- Broad local queries like `tiny house los angeles` include people who do not
  know terms like MTH, ADU, THOW, park model, shell, or kit.
- Intermediate readers may understand some terms but still confuse listings,
  builder claims, community/stay content, and legal placement.
- Advanced readers need official-source specificity and unresolved edge cases.

Implementation:

- Added persona requirements to `agents/seo-research-review-agent.md`.
- Added persona pass to `templates/searcher-pov-review-prompt.md`.
- Added reader-level standard to `strategy/content-principles.md`.
- Updated the Los Angeles and San Diego page openings to start from the human
  question before introducing the ADU/MTH path.

## 2026-07-20 - Scope National Build Asset As Due-Diligence, Not Directory

Decision: scope the next national build-intent asset as a buyer-protection
decision guide and due-diligence checklist, not a builder directory, ADU
contractor page, vendor recommendation list, or legal placement answer.

Working concept:

`Should You Build, Buy a Kit, Buy a Shell, or Hire a Tiny-Home Builder?`

Why:

- July 18 DataForSEO build-intent research shows meaningful national demand for
  build, plans, kits, trailers, shells, builders, and codes, but the broad
  build/builder/contractor rows are grouped close variants and should not be
  naively summed.
- Exact LA/San Diego tiny-house builder demand is small, while ADU-builder
  demand is adjacent and often conventional-ADU-specific.
- The useful Tiny Home Clarity wedge is helping readers avoid the wrong build
  path before paying for plans, a kit, shell, trailer, builder deposit, or ADU
  contractor quote.

Implementation implication:

- Future implementation should compare plans, kits, shells, trailer/THOW
  builds, custom tiny-home builders, conventional ADU contractors, and park
  model/RV-style products by fit, risk, written proof needed, and unresolved
  local verification.
- Do not recommend builders/vendors, create a builder directory, state local
  legal or zoning conclusions, present typical or complete cost claims, add lead
  generation, or create an indexable page until a separate reviewed
  implementation action is dispatched.

Evidence:

- `docs/research/tiny-home-build-intent-query-demand-2026-07-18.md`
- `briefs/tiny-home-build-decision-due-diligence-2026-07-20.md`

## 2026-07-28 - Use One Writer And Evidence-To-Page Revamp Transactions

Decision: run the Tiny Home Clarity revamp as a sequence of bounded,
repository-persisted transactions. The Master / Operator is the only project
writer. Research, implementation advisory, and final review roles are
different read-only agents.

Decision: before changing another live page, complete one research-only
full-site decision pack that compares all six current pages and the planned
national build asset. It must preserve query and SERP evidence, inspect
representative ranking pages, derive decision-job personas from evidence,
review beginner/intermediate/advanced experience levels separately, audit every
page and section, and promote exactly one implementation action.

Why:

- Recent page feedback showed that source safety alone does not make a page
  useful to a human with the target search intent.
- Experience level is important, but it does not identify whether the reader is
  evaluating a parcel, comparing build paths, checking a quote, or verifying a
  permit/source path.
- The site needs a durable page-role baseline and repeatable section-level
  decisions instead of relying on an active chat's memory.
- One writer and one promoted action prevent overlapping agents, stale
  backlogs, and research from silently becoming implementation.

Implementation:

- `THC-OPS-001` establishes the operating contracts, playbook, page-status
  inventory, review prompt, and deterministic site/state QA.
- `THC-RES-001` is the next planned research-only action. It may select
  `THC-BUILD-002` or an existing-page revamp, but must not implement either.
- Every later page transaction requires exact paths, first-screen and
  every-section acceptance criteria, native QA, and a different independent
  read-only reviewer.

## 2026-07-28 - Remove Fixed Daily Commit Limit

Decision: remove the one-substantive-action-per-day limit for Tiny Home
Clarity. Multiple substantive transactions may be completed in one day when
the user or a valid Control Room dispatch selects them.

Preserved controls:

- one project writer;
- one registered action in progress at a time;
- exact paths and dirty-work preservation;
- native QA and a different independent read-only reviewer;
- at most three review cycles;
- separate commits and release evidence for separate actions; and
- deployment and production verification whenever `site/**` changes.

Why:

- The fixed waiting period slows an active manual revamp without improving the
  evidence or review quality of an already bounded next transaction.
- Serial action boundaries provide the useful safety property. A calendar-day
  quota does not.

## 2026-07-28 - Repair The Homepage Before Adding Another National Asset

Decision: promote `THC-HOME-001`, a rebuild of the homepage placement hub,
before implementing the national build decision asset.

Why:

- The homepage is the primary public entry and has the clearest existing
  promise/result mismatch: its output looks location-specific while most
  guidance is generic and low-confidence.
- Beginners must classify the structure before the page teaches the relevant
  categories.
- Visible internal record fields, `MVP` language, duplicate checklists, and
  repeated cautions make the page feel like an internal artifact rather than a
  human decision tool.
- The homepage has the largest current GSC page sample, but the 16 impressions
  and zero clicks are monitoring context, not proof of a ranking opportunity.
- The national build decision asset has the strongest measured demand and
  remains a high-priority candidate. Adding it before repairing the primary
  entry would preserve the site's weakest first impression.

Implementation implication:

- The first screen should explain the four facts that determine the next
  placement check: exact jurisdiction, home type, intended use, and land
  context.
- Teach classification before asking for it, return an honest decision path,
  and explicitly separate source-backed locations from general guidance.
- Do not imply parcel approval, expose internal record fields, recommend
  vendors, or repeat the same caution through every section.
- Complete `THC-RES-001` as a review-clean research-only transaction before
  starting the separately registered homepage action.

Evidence:

- `docs/research/tiny-home-clarity-full-site-decision-pack-2026-07-28.md`

## 2026-07-28 - Homepage Returns A Decision Path, Not A Placement Verdict

Decision: the national homepage checker may organize the next placement
decisions, but it must not label general guidance as a location-specific
verification plan or assign a personal placement-confidence score.

Implementation:

- Start with exact jurisdiction, home category, intended use, and land context.
- Teach the major product categories before asking the reader to select one.
- Return four ordered checks, written-proof requests, and pre-payment red flags.
- Match Los Angeles and San Diego records only when the user selects City
  jurisdiction; match Georgia only as state classification guidance.
- Give unsupported locations general office/classification steps without
  `UNKNOWN` source fields, confidence labels, or implied research coverage.
- Keep source-backed guides statically linked with scope and checked dates.
- Preserve one on-page proof checklist and route only to live related assets.

Why:

- The prior result looked personalized but mostly repeated generic rule
  buckets and cautions.
- A source-safe page can still fail when it foregrounds inability instead of
  the human's next decision.
- Explicit source/general separation is more truthful than presenting every
  location through the same confidence-shaped result.

## 2026-07-28 - San Diego Starts With Jurisdiction, Not ADU Terminology

Decision: the existing San Diego guide will serve the broad local searcher by
asking whether the property is inside the City of San Diego, in unincorporated
San Diego County, or in another incorporated city before presenting a
placement path.

Why:

- Current City Municipal Code section 141.0318 separately regulates Movable
  Tiny Houses; the page's October 2020 ADU/companion-unit-centered framing is
  stale.
- Since September 4, 2025, current County guidance separately treats a
  qualifying THOW as a possible primary or accessory dwelling in
  unincorporated County jurisdiction.
- Broad San Diego search demand mixes listings, builders, communities, stays,
  and placement questions, but none of those results can substitute for the
  property jurisdiction.

Implementation boundary:

- Keep City and County standards, possible uses, offices, dates, confidence,
  and parcel unknowns separate.
- Give another incorporated city no City or County source match.
- Keep one buyer-claim table and one pre-payment proof workflow.
- Use current City code before the dated 2020 bulletin where wording differs.
- Do not create another San Diego URL or claim parcel approval.

Evidence:

- `docs/research/san-diego-city-county-tiny-house-refresh-2026-07-28.md`

## 2026-07-29 - Repair The Existing Cost Calculator Before Building The National Build Asset

Decision: select `THC-COST-001` as the next serial direct-manual transaction.
Repair the existing indexed calculator around a quote/budget reality-check job
before creating the national build decision asset.

Why:

- The reviewed July 28 full-site order puts the calculator after the completed
  homepage and San Diego actions and before the national build asset.
- The live calculator has a concrete trust defect: blank input produces a `$0`
  estimated all-in result, while quote-only input produces an all-in headline
  despite every major non-structure cost remaining unknown.
- The existing URL is indexed and already has a clear product role, so repairing
  it is preferable to creating a new URL.
- Current query evidence supports a calculator/tool job, while current ranking
  pages commonly generate defaults or broad averages. Tiny Home Clarity can
  differentiate through user-entered quote gaps, explicit unknowns, and written
  verification rather than unsourced typical-price claims.

Boundaries:

- Do not publish national averages, typical/complete prices, affordability
  conclusions, vendor recommendations, or project-path legality.
- Do not change the homepage, under-$20K page, local guides, or build asset.

## 2026-07-29 - Hold The Cost Calculator After The Review Cap

Decision: stop `THC-COST-001` without commit, push, or deployment.

Why:

- Independent review cycles 1 and 2 returned actionable failures that were
  fixed and re-reviewed.
- Cycle 3 confirmed every prior fix but found one new P2 monthly-completeness
  defect plus one P3 stale review instruction.
- Both cycle 3 findings are fixed and QA is green, but the repository protocol
  caps review at three cycles and permits release only after `PASS` or
  `PASS_WITH_P3`.
- A cycle 3 `FAIL` cannot be converted into release authority by a Master
  self-review.

Next gate:

- Preserve the exact-path working tree.
- Register a separate direct-manual review-clean continuation before another
  independent review or any commit/push.

## 2026-07-29 - Register THC-COST-002 As A Review-Only Continuation

Decision: use the user's direct manual authorization to register
`THC-COST-002` over the complete held 17-path calculator candidate.

Boundary:

- Fresh independent read-only review of the full inherited diff.
- No new research or redesign.
- Only `PASS` or `PASS_WITH_P3` may authorize commit and release.
- Stop without push if the fresh review returns a release-blocking finding.

## 2026-07-29 - Fix THC-COST-002 Cycle 1 Findings Before Re-Review

Decision: resolve both fresh cycle 1 P2 finding groups inside the registered
17-path continuation and request a complete cycle 2 review.

Why:

- Unknown starting amounts and planning buffers must not appear as deliberate
  zeroes.
- Coherent financing or recurring input is useful as a partial monthly
  scenario even when no one-time project amount is known.
- Durable mirrors must identify `THC-COST-001` as held and `THC-COST-002` as
  the sole active action.
- Nineteen focused and 45 full native tests plus desktop and 320px browser
  checks pass after the fixes.

Release gate: unchanged. Only cycle 2 `PASS` or `PASS_WITH_P3` may proceed.

## 2026-07-29 - Accept THC-COST-002 Cycle 2 PASS_WITH_P3

Decision: preserve the cycle 2 reviewed calculator bytes and proceed to the
exact-path release controls.

Why:

- The independent reviewer confirmed every cycle 1 fix and the complete
  17-path transaction.
- The sole P3 is a conservative but imperfect partial-result title when all
  one-time categories are resolved and only the planning buffer is blank.
- The body remains truthful and identifies the unresolved buffer. Changing the
  title now would create a new, unreviewed site candidate.

Release requirement: freeze the complete commit candidate, verify no remote
divergence, push only the declared paths, then require Pages and production
byte/behavior checks.

## 2026-07-29 - Release THC-COST-002 And Promote The Next Candidate

Decision: mark the calculator transaction completed and production-verified,
then name `THC-BUILD-002` as next eligible without selecting or starting it.

Evidence:

- Exact commit `1af1dc2d53fee70dff9b4dfd035ecc9d0ae920c6` is on
  `origin/main`.
- Pages run `30460242431` succeeded.
- Production repository-byte and interaction invariants passed.
- Final independent review remained `PASS_WITH_P3` with no P0-P2 findings.

Boundary: `THC-BUILD-002` requires its own registered exact-path transaction,
fresh search/product evidence, native QA, and independent review.

## 2026-07-29 - Select THC-BUILD-002

Decision: use the user's direct manual instruction to select one national
tiny-house build-options comparison and due-diligence page.

Primary job: help a reader distinguish plans, kit, shell, trailer/THOW,
builder, ADU-contractor, and park-model/RV product responsibilities before
paying.

Boundary: one new URL and the exact 19 paths in `ops/seo-roadmap.json`. No
intent-router first screen, directory, vendor ranking, typical/complete price,
local permit answer, lead generation, location expansion, indexing request,
outreach, or external-account change.

## 2026-07-29 - Implement THC-BUILD-002 As A Responsibility Comparison

Decision: make the page's primary comparison unit the work and proof each path
transfers to the buyer, not an advertised price, vendor list, or generic
definition.

Implementation:

- One first-screen answer: compare responsibility before price.
- Seven paths: plans, kit, shell, THOW/trailer build, custom tiny-home builder,
  conventional ADU contractor, and park-model/RV-style product.
- Six project responsibilities, seven written document groups, red flags,
  scoped source notes, and existing placement/cost next steps.
- Responsive table-to-record transformation at narrow widths; no intent router
  or JavaScript is needed.

Boundary: current price, traffic, backlinks, conversions, and exact target-query
volume remain `UNKNOWN`; a label, model code, VIN record, plan, or standard
does not become a national placement or occupancy answer.

## 2026-07-29 - Hold THC-BUILD-002 After Review Cap

Decision: stop `THC-BUILD-002` without commit or release after its third
independent review cycle returned `FAIL`.

Evidence: every page, research, persona, claim, scope, responsive, and native
QA gate passed in the final review. The remaining P2 was two stale current-state
sentences about cycle 2. Those sentences are fixed, but the action cannot
receive a fourth review.

Next gate: a separately registered review-and-release continuation with a fresh
independent reviewer may inherit the exact fixed 19-path candidate.

## 2026-07-29 - Select THC-BUILD-003

Decision: register a fresh review-and-release continuation for the exact fixed
`THC-BUILD-002` candidate.

Boundary: same 19 paths and base, fresh different independent reviewer, native
QA, exact-path commit, Pages, and production checks only. No new research,
content, design, URL, vendor, price, legal answer, indexing, outreach, or
external-account mutation.

## 2026-07-31 - Release THC-BUILD-003

Decision: release the exact fixed 19-path build-options candidate after three
fresh `PASS` reviews.

Evidence: commit `18956949f0fe2748f13f0c71505dadf927a63150`, Pages run
`30622059848`, production byte matches, and desktop/390px/320x568 browser
invariants all passed.

Next state: observe through normal GSC snapshots. No indexing request, vendor
work, outreach, or immediate follow-on page is authorized.

## 2026-08-01 - Diagnose The Impression Stall Before Rewriting Pages

Decision: register `THC-MON-001` as a 13-path research and monitoring action.
Treat eight finalized zero-impression days as a material organic visibility
stall, while rejecting a technical outage, site-wide deindexing, manual action,
or security incident on current evidence.

Why: the rolling 28-day total stayed at 30 impressions and hid the daily stop.
Five established pages remain indexed, public crawl surfaces are healthy, and
GSC reports zero external links. Current search-result samples show selective
intent mismatch but no evidence-backed order to rewrite all pages.

Next gate: after native QA and independent review, complete the sensor and
diagnosis transaction. Then `THC-AUTH-001` may separately research legitimate
citation opportunities for existing assets. No outreach or backlink placement
is authorized by this decision.

Review outcome: `PASS_WITH_P3` from independent read-only reviewer
`019fbf70-9256-75e3-85d6-fbff50aa0516`, with no P0-P2 findings. The two P3
notes are bounded future validator-test and SERP-capture improvements and do not
block the docs/tools-only release.

Release: the exact reviewed transaction was pushed in
`5e2dbae380705fb8f52d1e0caf3682f770276cb3`; no deployment applies.

## 2026-08-03 - Qualify One Ethical Citation Opportunity

Decision: register `THC-AUTH-001` as a nine-path, research-only transaction and
retain only Boston Architectural College Library's Tiny Houses research guide
for a possible later contact.

Why: the library guide is publicly curated, serves a built-environment
research audience, lacks a beginner-facing placement due-diligence tool, and
has a current public organizational contact. The canonical homepage fills that
job without offering a legal answer. Six other candidates require a stronger
relationship, clearer editorial route, stronger local asset, or demonstrated
distribution. Paid registries, sponsored/link placements, link-led guest posts,
and personal-story credential mismatches are rejected.

Boundary: no outreach, submission, link placement, account change, new content,
site change, indexing request, payment, exchange, or fabricated relationship.

Review result: cycle 1 returned `FAIL` with two P2 evidence groups. The GSC
indexing-state merge and stale/incomplete Dwell and Tiny House Expedition
evidence were fixed. Independent cycle 2 returned `PASS` with no P0-P3
findings; final completed-state cycle 3 also returned `PASS` with no findings.

Next gate: `THC-AUTH-002` is ready but unselected. It may prepare one
transparent BAC librarian suggestion and may send only after the user approves
the exact recipient, subject, and body. It must stop after that one contact.
