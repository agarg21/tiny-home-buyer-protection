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

Release: the exact reviewed nine-path transaction was pushed in
`3bf5ce5e9c244c5373a53a8d6a15ce5c2cf57c28`; no deployment applies.

Next gate: `THC-AUTH-002` is ready but unselected. It may prepare one
transparent BAC librarian suggestion and may send only after the user approves
the exact recipient, subject, and body. It must stop after that one contact.

## 2026-08-04 - Draft One BAC Library Resource Suggestion

Decision: select `THC-AUTH-002` as an eight-path draft-only transaction from
clean, origin-aligned base `df9a33e`. Prepare one message for public
organizational address `library@the-bac.edu`, independently review the exact
recipient, subject, and body, and stop at the human gate.

Evidence: the review-clean `THC-AUTH-001` plan retained only the BAC Library's
curated Tiny Houses guide and the canonical placement hub for a pilot. No newer
GSC snapshot or central decision exists; the August 3 snapshot is monitoring
context, and the central July 28 report is stale.

Boundary: no send, email-account mutation, held prospect, follow-up, payment,
reciprocity, backlink or ranking request, content, `site/**`, indexing, vendor,
cost, or legal/zoning action. The exact draft must be review-clean and then
explicitly approved by the user before any send.

Review result: independent read-only reviewer
`019fcc53-0002-7193-b368-2cecad75de2f` returned `PASS` with no P0-P3 findings in
both the substantive and final-state review cycles. The exact recipient,
subject, and body are now eligible for user approval; no send or email-account
mutation occurred.

## 2026-08-04 - Put BAC Outreach Behind Product Usefulness

Decision: defer `THC-AUTH-002` before any send. Preserve its review-clean draft
as a possible later experiment, close the approval request, and do not treat a
future product release as automatic permission to contact the library.

Why: one editorial citation could be useful, but it is not the site's primary
value proposition and will not repair weak usefulness or ranking fit by itself.
The project should first prove that it can identify and build a genuinely useful
buyer-protection asset for a real decision job.

Next gate: `THC-PROD-001` is ready but unselected as research-only work. It must
use current demand, SERP/ranking-page evidence, current-page overlap, decision
personas, experience levels, and every-section review to promote at most one
bounded implementation action. No site or outreach work occurs in this
reconciliation.

## 2026-08-04 - Promote A Parcel-Specific Pre-Offer Land Check

Decision: `THC-PROD-001` rejects standalone builder/vendor due diligence and
quote comparison as the next products and promotes only `THC-LAND-001`, a
separately implementable parcel-specific land evidence workflow.

Why: builder search demand is large but commercial, exact due-diligence
questions are weak in current estimates, and the live build-options page
already owns provider scope, written proof, and red flags. Quote demand is weak
and ambiguous, while the cost calculator already starts with a seller or
builder quote. Land demand is modest, but the pre-offer parcel job is distinct,
high-stakes, repeatedly visible in community questions, and not completed by
the broad homepage triage or narrative ranking pages.

Boundary: the future tool may organize unknown, claim-only, source-saved, and
conflicting evidence. It may not list land, transmit addresses, recommend a
vendor, calculate typical costs, or call a parcel legal, approved, or
buildable. This research transaction changes no `site/**` path and does not
start `THC-LAND-001`.

Review: cycle 1 returned `FAIL` with three P2 findings. The official wetlands
source, query-level result samples, inventory-intent exclusion, and durable
state were corrected. Cycles 2 and 3 returned `PASS_WITH_P3`; no P0-P2 finding
remains. `THC-LAND-001` is ready but unselected.

## 2026-08-06 - Finish The Bounded Product Set, Then Observe For 90 Days

Decision: treat the seven current public assets plus the separately eligible
`THC-LAND-001` parcel workflow as the bounded validation portfolio. Do not add
another page merely to reach a content count. If the land workflow is later
reviewed and production-verified, hold new indexable-page publication for 90
days from that release.

Why: the August 6 GSC snapshot through August 4 reports seven discovered URLs,
five indexed, 32 impressions, and 0 clicks. The under-$20K and build-options
pages are both discovered but not indexed. Current samples are too small for
causal page judgments, while the completed product audit identifies only the
land workflow as a distinct unmet buyer decision job. More publication now
would make the test noisier without evidence that another page is useful.

Check crawl/index coverage around day 30, repeated page/query testing and first
clicks around day 60, and the portfolio's potential at day 90. At that final
checkpoint, choose whether to deepen a visible cluster, repair query promise or
usefulness, investigate persistent discovery failure, or pause the project.

Exception: a material technical/indexing defect, official-source change,
repeated query/page evidence exposing a concrete unmet job, or new direct user
decision may justify an earlier separately reviewed action. Daily sensing is
not a publication quota.

Boundary: `THC-STATUS-001` is docs-only and does not start `THC-LAND-001`,
change `site/**`, request indexing, run outreach, mutate an account, deploy, or
make a vendor, cost, legal, zoning, or buildability claim.

Review: 54/54 native tests and operator/SEO/JSON/scope/diff checks pass.
Independent read-only Anti Gravity CLI review returned `PASS` with no P0-P3
findings. The docs-only transaction is complete; no deployment applies.

## 2026-08-09 - Treat Generic-But-Safe Pages As Release Failures

Decision: keep Tiny Home Clarity as a deliberately small product portfolio and
make human usefulness non-compensable in every page transaction. A new or
materially repaired page must give the primary searcher a concrete result,
grounded comparison, evidence artifact, reusable decision aid, or narrowed next
step in the rendered experience.

Why: the repository already has strong safety and persona rules, but cautious
wording, sources, technical SEO, or a polished layout can still produce a page
that feels generic to a real searcher. Repeating what cannot be verified is not
buyer protection unless it narrows what the reader should verify and why.

Gate: apply topic-swap, paraphrase, concrete-output, removal, first-viewport,
every-section, and realistic-state tests. Generic, topic-swappable, filler-led,
or uncertainty-led content is P2 even when technically correct. `No-build`,
consolidation, or a narrower tool state is preferable when the usefulness delta
cannot be shown.

Operating cleanup: use `ops/current-cycle.md` for current state only, keep both
role backlogs non-authoritative and limited to current eligibility, and treat
the user-authorized 09:00/17:00 heartbeat through 2026-08-14 17:00 ET as
temporary direct-manual authority. It creates no Control Room lease or ledger
entry and expires unless renewed.

Boundary: `THC-OPS-003` changes operating documentation only. It does not start
`THC-LAND-001`, change `site/**`, run fresh research, request indexing, perform
outreach, mutate an account, deploy, or make a vendor, cost, legal, zoning, or
buildability claim.

Review result: cycles 1 and 2 found bounded schedule, authority, removal-test,
state, and release-closeout issues; all were fixed. Independent reviewer
`019fcc94-81c5-7ea2-b165-377dca84e4a0` returned `PASS` with no findings in
final cycle 3. Native QA is green and no deployment applies.

## 2026-08-10 - Build The Parcel File, Not Another Advice Article

Decision: select `THC-LAND-001` and implement one client-side pre-offer parcel
evidence workflow at `/buying-land-for-a-tiny-house/`. Its primary job is to
help a reader considering a particular listing, parcel, or offer distinguish
what is unknown, merely claimed, retained from a source, or conflicting, then
print the unresolved file before money becomes harder to recover.

Why: completed August 4 research found modest but distinct land diligence
demand, repeated high-stakes community questions, and a product gap not owned
by the broad placement hub, build-responsibility comparison, or cost
calculator. A worksheet that changes its next action by transaction stage and
evidence state has a defensible usefulness delta; another general narrative
page does not.

Boundary: the candidate stores and transmits no worksheet data, asks for no
full address, lists no property or vendor, makes no typical/complete cost
claim, and does not call a parcel legal, approved, zoned, permitted, or
buildable. Independent review and verified production release remain required.
Only the verified release starts the 90-day publication hold.

Review result: cycle 1 found one P1 and three P2 buyer-protection/evidence
issues; all were fixed. Independent cycle 2 returned `PASS` with no P0-P3
findings on the complete seventeen-path candidate. The page remains unreleased
until the reviewed commit, Pages run, and production invariants pass.

Final cycle 3 returned `PASS` with no P0-P3 findings on the frozen transaction.

Release: push review-clean commit
`b9760e93fb43ea7560963ef419e9b80421bc642b`. Pages run `31395122993` and the
predeclared production invariants passed. Start the 90-day no-new-page hold on
2026-08-10 through 2026-11-08; the 30- and 60-day checkpoints are 2026-09-09
and 2026-10-09. Keep `next_eligible_action_id` at `none` unless an exception
gate is met.

Monitoring note: scheduled GSC run `31383905353` timed out during one read-only
API request and produced no August 10 snapshot. Credentials and collector tests
were healthy. Do not manufacture a repair from one transient failure; escalate
only if the sensor fails again.

## 2026-08-11 - Restore Complete Read-Only Inspection Coverage

Decision: use `THC-MON-002` to reconcile the successful GSC retry and add the
released land workflow to the priority URL Inspection allowlist. Enforce exact
parity between current sitemap URLs and `ops/gsc-monitor.json` so later releases
cannot silently escape page-level monitoring.

Why: scheduled run `31486530514` succeeded and committed the August 11 snapshot
in `93cdf69`, proving the prior timeout was transient. The same comparison
showed a real monitoring gap: the live sitemap has eight URLs, while the sensor
inspected only the seven URLs configured before the land workflow shipped.

Evidence decision: 22 rolling impressions, one impression on August 9, and the
under-$20K/build-options transition to discovered-currently-not-indexed are
monitoring progress, not causal evidence for content work. Keep the 90-day
publication hold and `next_eligible_action_id: none`.

Boundary: this ten-path transaction changes read-only monitoring configuration,
tests, and durable state only. It does not change `site/**`, request indexing,
deploy Pages, run outreach, mutate an external account, add analytics, or make
a vendor, cost, legal, zoning, or buildability claim.

Review/release: cycle 1 returned `PASS_WITH_P3`; its duplicate-monitor test P3
was fixed. Cycle 2 returned `PASS` with no findings. The exact reviewed change
was pushed and remotely verified in
`fcd3ce5b0dfe95c564b11b69047966e9e650092b`. Deployment is not applicable;
final closeout review cycle 3 returned `PASS` with no findings on the complete
action range. All review findings are resolved.

## 2026-08-12 - Make Observation Productive Without Manufacturing Pages

Decision: the 90-day publication hold blocks speculative indexable pages and
low-impression rewrites, not useful research. Scheduled direct-Master runs may
rotate across existing-page human review, query/SERP investigation,
official-source freshness, internal usefulness/handoffs, and recent community
questions. Every run starts with one bounded human question and records one
disposition: `keep`, `repair`, `consolidate`, `needs-evidence`,
`draft-answer`, or `no-build`.

First due review: `THC-REV-001` will re-verify the unresolved Georgia
classification first-screen gap identified in the July 28 full-site audit. It
is research-only and cannot edit the page. The under-$20K consolidation review
remains next in the rotation because the durable evidence orders Georgia first.

Community boundary: a candidate answer must help without a Tiny Home Clarity
link, sound like one informed human rather than a brand, avoid invented
experience and unsupported cost/legal/vendor claims, and give a concrete next
step. Research and drafting do not authorize external action. The user must
approve the exact answer and destination before any post, comment, vote,
message, link insertion, or account action.

Monitoring decision: the August 12 snapshot verifies all eight sitemap URLs
are inspected, with five indexed and three discovered-currently-not-indexed.
Its 18 impressions and 0 clicks remain context only; they neither select nor
cancel the due Georgia research review.

Boundary: `THC-OPS-004` was initially frozen to twenty docs/research/state
paths and expanded to twenty-one before fixing the reviewer-identified handoff.
It makes no site change, indexing request, deployment, outreach, account
mutation, vendor recommendation, typical/complete cost claim, or legal/zoning/
buildability conclusion.

Review result: cycle 1 found one P2 contradictory no-op instruction in the
authoritative portfolio handoff. The scope was declared and expanded to
twenty-one paths before fixing it. Cycle 2 returned `PASS` with no findings;
native QA is green and no deployment applies.

## 2026-08-12: Georgia Needs A Human-First, Source-Current Repair

`THC-REV-001` reproduced the July 28 Georgia first-screen finding on desktop,
390px, and 320px. The page is cautious but opens like a source record: it leads
with limitations and internal confidence/scope metadata before explaining the
four categories or the first local question. This is a human-value defect for
beginners and a weaker-than-necessary path for intermediate readers.

The review also found causal freshness evidence. Georgia's current mandatory
residential code is the 2024 IRC with Georgia amendments, effective January 1,
2026, and the amendments include changes to Appendix BB, Tiny Houses. The live
page still uses older 2012 IRC / Appendix Q framing. Do not infer statewide
Appendix BB enforcement from the amendment packet; require DCA or local written
confirmation.

Decision: promote `THC-GA-001` as the sole future repair. Keep the existing URL,
replace the opening with a direct statewide-versus-local answer and four-
category proof decoder, compress repeated cautions, and give ordered local
questions. Do not build a Georgia county directory or claim statewide
permission. The page's five GSC impressions are monitoring context only.

## 2026-08-13 - Build The Georgia Answer Around The Buyer's Evidence Trail

Decision: implement `THC-GA-001` on the existing Georgia URL as a four-category
proof decoder and ordered local question script. Lead with the statewide-versus-
local answer, then show which labels or documents support each category and
what those documents do not prove.

Why: the reviewed defect is not lack of caution. It is that a reader had to
work through source metadata and repeated uncertainty before learning how to
identify the home or ask the next useful question. Current DCA and OCI sources
support a category and evidence workflow while requiring local written answers
for parcel, use, code path, and Appendix BB enforcement.

Boundary: keep one URL. Do not create a county directory, give statewide
placement permission, state a legal or buildability conclusion, recommend a
vendor, present a typical or complete cost, request indexing, post externally,
or mutate an external account.

## 2026-08-13 - Release Georgia Repair And Isolate Mobile Polish

Decision: release the review-clean Georgia answer-first repair at
`d5904f6945bd3dd7a9a504dde8edebe9055552c3`. Production confirms the reader
answer, four-category evidence workflow, source and claim boundaries, metadata,
and horizontal containment.

One nonblocking production P3 remains: category-card headings inherit the
desktop 19% row-header width at 390px and 320px. Preserve the released content
and promote only `THC-GA-RESP-001` for a later responsive width correction and
regression test. Do not combine that polish with new content, local expansion,
or another URL.

## 2026-08-13 - Select The Bounded Georgia Responsive Fix

Decision: select `THC-GA-RESP-001` from clean, aligned base `d8669d7` and freeze
it to twelve exact paths. Correct only the responsive category-card row-header
width and add a focused regression assertion.

Why: the defect was observed directly in production at 390px and 320px. It is
a concrete visual usefulness issue, not a GSC-driven rewrite or a reason to
reopen the reviewed page content.

Boundary: preserve the desktop table, all page text, sources, claims, metadata,
sitemap, and URLs. No indexing or external action.

## 2026-08-13 - Release Georgia Responsive Fix And Return To Research

Decision: release `THC-GA-RESP-001` as exact reviewed commit `4ca8565`. Pages
run `31744910489` and production checks confirm the desktop table is unchanged,
the 900px breakpoint is exact, and mobile category headings now span their
cards without overflow or console errors.

Next: make research-only `THC-REV-002` the sole next eligible action. It should
decide whether the under-$20K checker provides a distinct decision artifact or
should be consolidated with the quote-first cost calculator. Its discovered-
currently-not-indexed state is monitoring context, not causal evidence for a
rewrite.

Boundary: no second action starts in this transaction. The review may later
return `keep`, `repair`, `consolidate`, `needs-evidence`, or `no-build`; only a
separate registered and reviewed action may change a public page.

## 2026-08-14 - Keep The Under-$20K Question, Remove Duplicate Arithmetic

Decision from review-clean `THC-REV-002`: keep the existing under-$20K URL because
the reproducible public-web sample, durable July 28 audit, and live first screen
support a distinct feasibility and claim-scope job. Do not consolidate the
whole page into the general cost calculator.

The current under-$20K allocation form should not survive a later repair.
Blank and structure-only states can headline `Within $20K` while major costs
remain unresolved. Native `min=0` validation blocks negative submission, so no
negative-calculation defect is claimed. The full cost calculator already models
dollar inputs more safely with neutral blank and explicit partial states.

The current search sample is corroborating rather than sole causal evidence. It
uses the OpenAI public web-search interface, retains each exact query's first
five response-order results, and records pairwise overlap, observable result
types, architecture signals, unknown market/Google feature state, and
confidence. The durable July 28 audit and live product-state comparison carry
the core decision.

Promote only `THC-UNDER-001` as the ready future existing-page repair: replace duplicate
arithmetic with a claim-scope evidence check, compress repetition, route actual
numbers to the full calculator, and add the missing canonical. This decision
does not authorize implementation, an indexing request, a cost or affordability
conclusion, a new URL, or any external action.

## 2026-08-22 - Run A Two-Month Human-Value Learning Loop

Decision: renew this permanent Master at 09:00 and 17:00
America/New_York through 2026-10-22 at 17:00 as a direct-manual project loop.
Do not route these runs through the Control Room or treat two daily heartbeats
as a production quota.

The loop starts from one real human question, improves the domain model and SEO
model, performs at most one evidence-backed useful action, measures or reviews
the result, and persists durable learning. A useful action can be a verified
technical fix, an existing-page repair, bounded research, an internal handoff
improvement, or a draft-only answer to a real community question.

Recursive improvement is bounded. Change prompts, tests, or protocol only when
a concrete failure, independent-review finding, or repeated friction exposes a
reusable weakness. Do not produce process documents merely to prove the loop is
running.

The eight-page no-new-indexable-page hold remains through 2026-11-08. Community
answers remain draft-only without the user's approval of the exact text and
destination. `THC-UNDER-001` remains the sole ready next implementation action
and is not started in this setup transaction.

## 2026-08-22 - Audit The $20K Claim Instead Of Estimating It Again

Decision: implement `THC-UNDER-001` on the existing under-$20K URL as a claim-
scope evidence check. The human question is what the `$20,000` number covers
and what proof is missing before a buyer should rely on it.

Why: the review-clean architecture decision and reproduced product states show
that the page's direct answer owns a distinct job, while its duplicate
calculator produces a positive headline from blank or structure-only inputs.
The general calculator already owns dollar modeling. GSC non-indexing and low
visibility remain monitoring context, not the reason for repair.

Result contract: distinguish documented inclusion, claim-only, excluded,
free/reused/unpaid, deferred, not-applicable, unknown, and conflicting scope.
Even a complete evidence record may say only `Better documented, not proof of
feasibility`. Preserve the URL, add the canonical, compress repetition, and
route numbers, provider scope, and parcel evidence to their existing tools.

Boundary: no new page, cost range, affordability or complete-cost conclusion,
vendor recommendation, legal/buildability conclusion, indexing request,
outreach, community post, external mutation, or cost-calculator edit.

Review learning: evidence quality needs semantic as well as arithmetic gates.
`Something else or unclear` and partial proof remain incomplete. A required
scope that is explicitly excluded or not applicable is a conflict, while an
unanswered required scope remains missing evidence rather than a contradiction.
When both claim object and proof are unresolved, define what the number buys
before asking the reader to upgrade the proof.

Release decision: ship the exact review-clean result in `195ec8c`. Pages run
`32600565832` and declared production invariants pass. Return the page to
observation; no next action becomes eligible from low visibility alone.

## 2026-08-23 - Do Not Turn A Stable GSC Window Into Page Work

Decision: `THC-NOOP-2026-08-23` returns `no-build`. The August 23 snapshot adds
one finalized zero-impression day, but aggregate performance remains 18
impressions and 0 clicks; the same homepage/San Diego rows remain, five of eight
URLs are indexed, and sitemap health is unchanged. This is window movement,
not a production outage or a concrete searcher gap.

Correct the stale current snapshot pointer and retained homepage, San Diego,
and Los Angeles monitoring values. Do not repeat public QA, SERP, paid keyword,
indexing, outreach, community, or page work. Reopen only when roadmap or
evidence changes.

## 2026-08-24 - Observe One Inspection-State Regression Before Acting

Decision: `THC-NOOP-2026-08-24` returns `needs-evidence` for the under-$20K
URL Inspection transition and `no-build` for implementation. The URL changed
from discovered-currently-not-indexed to `URL is unknown to Google`, but it is
live with HTTP 200, self-canonical, robots-allowed, free of `noindex`, and
present once in a successful eight-URL sitemap. Five of eight URLs remain
indexed, and aggregate impressions increased from 18 to 20.

Why: URL Inspection state can move without identifying a user-facing or
technical defect. One transition, with every bounded public discovery check
healthy, is insufficient evidence for a content change or another indexing
request. Continue the daily read-only sensor and diagnose only if repeated
evidence adds a concrete crawl, sitemap, robots, canonical, or internal-
discovery problem.

## 2026-08-25 - Treat One-Day Inspection Labels As Volatile Evidence

Decision: `THC-NOOP-2026-08-25` returns `needs-evidence` for changing URL
Inspection labels and `no-build` for implementation. Under-$20K returned from
`URL is unknown to Google` to discovered-currently-not-indexed after one day;
the same unknown label appeared on land. The land URL is live, self-canonical,
free of `noindex`, present once in the successful sitemap, and the indexed
homepage received a current crawl.

Why: movement between healthy, uncrawled URLs shows that one daily coverage
label is not stable causal evidence for content work or another indexing
request. Diagnose when a persistent label combines with a concrete crawl,
sitemap, robots, canonical, internal-discovery, or rendering defect. Continue
the daily read-only sensor in the meantime.
