# Current Strategy

Last updated: 2026-07-20

This is the consolidated strategy and business-plan source for the project. It
subsumes the original bootstrap business plan at
`/Users/apoorvagarg/Documents/SEO Agent/seo-lab/niches/tiny-homes/13-bootstrap-business-plan.md`
for day-to-day operating decisions. Keep detailed research artifacts in their
original files, but update this strategy when research changes the mission,
positioning, roadmap, or decision gates.

## Thesis

Tiny Homes Buyer Protection is a U.S.-focused decision-support site for people considering tiny homes. It should help readers avoid expensive mistakes before buying, building, financing, placing, or living in a tiny home.

The site should win by being practical, source-backed, skeptical, and tool-shaped. It should not become a dreamy tiny-home lifestyle blog.

## Target Readers

- People considering buying or building a tiny home.
- People trying to understand where they can legally or practically place one.
- People comparing THOW, park model, RV, ADU, modular, manufactured, foundation tiny home, or small cabin options.
- People worried about land, zoning, cost, utilities, toilets, financing, insurance, builder trust, delivery, and permitting.
- Secondary readers: tiny home community shoppers, DIY builders, off-grid cabin buyers, land shoppers, and people comparing tiny homes vs ADUs.

## SEO Wedge

Start with high-anxiety, tool-shaped queries where readers need practical decision support:

- `where can i put a tiny house`
- `can i put a tiny house on my land`
- `tiny home zoning`
- `tiny house zoning`
- `tiny home cost calculator`
- `tiny home financing`
- `tiny home communities`
- `tiny home kits`

Validated early query opportunities from the original business plan and the
2026-07-07 Semrush review:

- `tiny home cost calculator`: KD 6% Very easy in Semrush UI.
- `where can i put a tiny house`: 320 US volume, KD 16% Easy in Semrush UI.
- `tiny house zoning`: 390 US volume, KD 19% Easy in Semrush UI.
- `tiny home zoning`: 260 US volume, KD 19% Easy in Semrush UI.
- `tiny home financing`: KD 24% Easy in Semrush UI.
- `tiny home communities`: KD 28% Easy in Semrush UI.
- `tiny home kits`: KD 29% Easy in Semrush UI.

These are tool-reported research inputs, not guaranteed traffic. Recheck before
using them as current live keyword metrics.

Terminology note:

- Use both `tiny house` and `tiny home`.
- As of a Semrush UI check on 2026-07-07, `tiny house` is stronger than `tiny home` in singular exact-match demand, while `tiny homes` is stronger than both plural/singular head terms.
- Keep query-led titles such as `Where Can I Put a Tiny House?`, but use `tiny home` naturally for brand/category/product language.
- See `seo/tiny-house-vs-tiny-home-terminology-2026-07-07.md`.

Measured/tool-reported details from the business plan:

- DataForSEO seed set: 980,860 total exact monthly searches across 58 tiny-home keywords, with synonym/overlap caveats.
- Semrush UI examples: low-KD opportunities from KD 6% to KD 29%.
- Reddit/forum pain noted in the original business plan: regret, cost surprises,
  placement uncertainty, toilets/wet baths, transportation limits, and vendor
  trust. Treat this as qualitative opportunity evidence, not statistically
  measured demand.

Unavailable or not independently rechecked in this repo:

- Current live keyword volume: `UNKNOWN`
- Current CPC: `UNKNOWN`
- Current traffic estimates: `UNKNOWN`
- Current ranking difficulty beyond business-plan notes: `UNKNOWN`
- Backlinks needed: `UNKNOWN`

## Product And Tool Wedge

Build pages that are useful even before the site has authority:

- Placement triage tools.
- Cost calculators.
- Decision checklists.
- Comparison tables.
- Buyer due diligence workbooks.
- Official-source local verification records.

The first product spec is `briefs/where-can-i-put-a-tiny-house-product-spec.md`.

## Research Source Map

Use these durable repo files before making strategy or SEO decisions:

- Domain and brand research:
  `docs/research/domain-name-research.md`.
- Tiny house vs tiny home terminology:
  `seo/tiny-house-vs-tiny-home-terminology-2026-07-07.md`.
- First placement-tool keyword/SERP/source review:
  `reviews/where-can-i-put-a-tiny-house-spec-review-2026-07-07.md`.
- Deployment, DNS, Pages, and GSC setup:
  `docs/plan/deployment.md`.
- Current measurement and operator gates:
  `ops/seo-roadmap.json`, `ops/seo-roadmap.md`,
  `ops/gsc-snapshots/`, and the central operator report.

The original external business plan remains useful historical context, but this
file is the operating summary.

## SERP Review And Link Timing

Use GSC first for this early stage: discovery, indexing, impressions, clicks,
query/page pairs, and whether Google is testing the site for the intended
long-tail topics.

The broad `where can i put a tiny house` query appears locally sensitive. A
manual 2026-07-18 SERP check produced New Jersey results and broad vendor/state
guides. Treat the homepage as a placement hub and diagnostic tool, not as the
only asset expected to win localized placement intent. Ranking strategy should
pair the hub with narrow official-source pages where search demand, GSC
impressions, and source availability justify the work.

Do targeted SERP review when one of these happens:

- A GSC query gets meaningful impressions but low or declining position.
- A page ranks for an adjacent query that suggests a better title, section, or
  support page.
- A planned page depends on understanding what currently satisfies the query.
- The operator is choosing between two otherwise similar next assets.

SERP review should answer: which pages are ranking, what type of intent they
serve, what they do better than us, what they overclaim or omit, and what
source-backed improvement Tiny Home Clarity can make. It should not become a
standing requirement for every no-op GSC scan.

Backlinks matter, but active outreach is not the first bottleneck. First build a
small set of link-worthy, review-clean assets: calculators, official-source
records, clear checklists, and source-backed comparison pages. Begin lightweight
link opportunity work after the site has several credible assets and GSC shows
which topics Google is actually testing. Avoid paid/link-scheme tactics and
generic outreach before the content earns a reason to be cited.

Current ranking reality from the 2026-07-18 GSC baseline is weak but
directional: 20 impressions, 0 clicks, and only small page-level samples. The
Los Angeles and San Diego official-source pages have the best early average
positions in tiny samples; the homepage has the most impressions but a weaker
average position. Do not overfit this baseline, but use it as evidence that
specific source-backed pages may be more rankable than a broad generic hub.

California query-demand follow-up on 2026-07-18 found real California tiny-home
demand, but explicit placement/zoning terms are low and fragmented. Broad and
commercial terms such as `tiny home california`, `tiny homes for sale
california`, `tiny home communities california`, and top-city broad terms show
more volume than legal/placement phrases. California geo-targeted generic
queries show some placement demand (`where can i put a tiny house`, `tiny house
zoning`, `tiny house adu`, `movable tiny house`), suggesting a future
California MTH/ADU/placement hub may be better than mass city pages. See
`docs/research/california-tiny-home-query-demand-2026-07-18.md`.

A 2026-07-18 SERP snapshot for `tiny house san diego` showed mixed
shopping/builder/community/stay intent, not a pure zoning intent. The San Diego
page should not target that query as a narrow zoning memo or a generic
choose-your-intent menu. It should be a buyer-protective local guide that
translates the broad query into the real local options, then leads readers
toward official-source placement checks. See
`docs/research/serp-tiny-house-san-diego-intent-2026-07-18.md`.

The current LA/San Diego addressable-volume read is layered, not additive. The
direct placement/rules exact-match demand is small, but the broad and adjacent
local demand is meaningful:

- San Diego: broad `tiny house san diego` around 880/month; listings around
  1,300/month; community around 320/month; rentals around 210/month; THOW around
  70/month; laws around 10/month.
- Los Angeles: broad `tiny house los angeles` around 720/month; listings around
  1,600/month; community around 170/month; rentals around 140/month; ADU/THOW
  /laws around 10/month each.

Because listings/builders/stays are adjacent rather than owned intent, the pages
should not chase marketplace rankings directly. They should serve buyer
protection for mixed city intent: buy/build, place legally, find a community or
stay, and verify official-source constraints. See
`docs/research/la-san-diego-addressable-query-volume-2026-07-18.md` and
`briefs/la-san-diego-page-repair-2026-07-18.md`.

A 2026-07-18 build-intent keyword pull found that general US build demand is
meaningful but heavily grouped by Google Ads close variants. The broad
build/builder/contractor cluster returns around 40,500 monthly searches, plans
around 27,100, kits around 12,100, trailer/shell around 9,900/3,600, and
builders-near-me around 4,400. Exact local tiny-house builder demand is much
smaller: Los Angeles around 50/month, San Diego around 90/month, and California
builder terms around 720/month. `ADU builders los angeles` and `ADU builders san
diego` each show around 480/month with very high CPC, but those are adjacent
ADU-service queries, not tiny-home-specific demand. See
`docs/research/tiny-home-build-intent-query-demand-2026-07-18.md`.

National build-intent strategy: treat build/hire/buy-a-kit demand as a
buyer-protection decision problem, not a directory problem. The next scoped
asset is an internal brief for a national guide tentatively titled `Should You
Build, Buy a Kit, Buy a Shell, or Hire a Tiny-Home Builder?` It should compare
plans, kits, shells, trailers/THOWs, custom builders, conventional ADU
contractors, and park model/RV-style products by risk and verification needs.
It must not recommend builders, imply a complete price, answer local zoning, or
merge ADU-contractor demand into tiny-home-builder demand. See
`briefs/tiny-home-build-decision-due-diligence-2026-07-20.md`.

## First 5 Assets

1. `Where Can I Put a Tiny House?` interactive placement triage tool and guide.
2. `Tiny Home Cost / Reality Check Calculator`.
3. `Can You Build a Tiny House for Under $20K?`.
4. `Tiny House Toilet Options Calculator`.
5. `Should You Build, Buy a Kit, Buy a Shell, or Hire a Tiny-Home Builder?`
   decision guide and due-diligence checklist.

## First 90-Day Plan

Month 1:

- Build brand/site foundation.
- Publish `Where Can I Put a Tiny House?`.
- Publish `Tiny Home Cost / Reality Check Calculator`.
- Set up Google Search Console after domain purchase.
- Submit sitemap.
- Start official source records for 5 states.

Month 2:

- Publish `Can You Build a Tiny House for Under $20K?`.
- Publish `Tiny House Toilet Options Calculator`.
- Create free email capture workbook.
- Begin outreach to tiny home communities/builders for verification quotes.

Month 3:

- Publish `Tiny Home Builder / Vendor Due Diligence Checklist`.
- Publish 3-5 manually researched state/local pages only where official sources are available.
- Improve internal links.
- Review early GSC impressions.
- Decide which long-tail pages to build next.

## Monetization Phases

Phase 1: trust and email capture.

- Free placement tool.
- Free cost calculator.
- Free vendor checklist.
- Email-gated due diligence workbook.

Phase 2: paid digital products.

- Tiny Home Due Diligence Workbook.
- Tiny Home Budget Spreadsheet.
- Builder Quote Comparison Template.
- Land Due Diligence Checklist.
- Toilet / systems planning checklist.

Phase 3: affiliate and sponsorship, only where useful and appropriate.

- Composting toilets.
- Dry flush/cassette toilets.
- Water filtration.
- Solar/battery systems.
- Tiny home kits and plans.
- Relevant books, courses, or tools.

Phase 4: directory and lead generation after partner vetting exists.

- Verified communities.
- Vetted builders.
- Kit sellers.
- Land agents.
- Lenders.
- Insurance brokers.

## Quality Bar

Every page should:

- Solve a real decision.
- Use primary or official sources for rules, money, safety, legality, and code claims.
- Include a tool, checklist, table, calculator, or template.
- Explain assumptions.
- State what the page cannot determine.
- Include update dates where facts can change.
- Link to deeper related pages.
- Be useful even if the reader never visits another page on the site.

## Zoning And Legal Caution Rules

- Do not provide legal advice.
- Do not claim a placement is allowed unless official sources clearly support it.
- Prefer "possible path" and "verify with the local office."
- Include local office verification steps.
- Distinguish state law, county rules, city zoning, subdivision/HOA rules, utility requirements, septic/health rules, building code, and lender/insurance constraints.

## Official Source Requirements

For any local/zoning record, include:

- State.
- City/county.
- Tiny home types covered.
- Possible placement paths.
- What is clearly allowed.
- What is unclear.
- What must be verified locally.
- Official source URLs.
- Last checked date.
- Confidence level.

Confidence level must not make the page useless. Separate:

- Source confidence: how strong and official the cited source is.
- Scope confidence: exactly which jurisdiction, structure type, and use case the
  source covers.
- Action confidence: what a buyer can reasonably do next.

The page should lead with the clearest source-backed takeaway, such as "an
official city path exists for movable tiny houses as ADUs, but parcel approval
still depends on city review." Do not bury the useful answer under generic
disclaimers. The buyer-protective value is to narrow the user's next step, not
to avoid saying anything.

## Local And Zoning Data Strategy

Build data gradually from official sources:

- State building code pages.
- City/county zoning ordinances.
- Planning/building department pages.
- ADU ordinances.
- RV, park model, and manufactured housing rules.
- Septic and health department requirements.
- Tiny home community rules.

Avoid mass state/city pages. Add local pages only when official sources are clear enough and the page adds original verification value.

Current local/source page quality issue: the first narrow pages are cautious and
source-backed, but some read as "we cannot verify this" more than "here is what
the official source lets you know and what to do next." Before scaling local
pages, improve the format so each page has:

- A one-screen answer box with `What the official source supports`, `Who this
  may fit`, `Who should stop`, and `Next office/question`.
- A clearer distinction between non-negotiable official facts and unresolved
  parcel-specific checks.
- A short "not a fit if..." list, so the page gives useful negative guidance
  without pretending to issue legal approval.
- A source-backed recommendation about whether the path is worth investigating,
  not a final legal recommendation.

## Current Unknowns

- Final brand/domain: `Tiny Home Clarity` at `tinyhomeclarity.com`
- Registrar: Porkbun
- Search Console property: Domain property for `tinyhomeclarity.com`
- Analytics provider: deferred until meaningful traffic or a specific product question requires on-site analytics
- Email service provider: `UNKNOWN`
- Live keyword metrics after launch: `UNKNOWN`
- Initial local jurisdictions for official-source records beyond MVP proposal: `UNKNOWN`
