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
