# Under-$20K Page And Cost-Calculator Architecture Review

Date: 2026-08-14

Action: `THC-REV-002`

Disposition: `repair`

Recommendation label: `improve`

Promoted future action: `THC-UNDER-001` only. Do not implement it in this
research transaction.

Independent review: cycle 2 `PASS` after both cycle 1 P2 record findings were
corrected; final frozen-state cycle 3 also returned `PASS` with no findings.
Reviewer task: `01a00065-9c44-71e2-99f7-ab5e03b382e8`.

## Human Question

If I am trying to decide whether a claimed $20,000 tiny-house budget is real,
does the under-$20K page help me answer that distinct question, or should I use
the general cost calculator instead?

## Decision

Keep the existing under-$20K URL and its direct feasibility-answer role. Do not
consolidate the whole page into the cost calculator.

Replace the under-$20K page's duplicate budget-allocation calculator in a
separate reviewed repair. Its current blank and structure-only states can
headline `Within $20K` while major costs remain unresolved. The general cost
calculator already models known, unknown, included, and not-applicable costs
more safely.

The repaired under-$20K page should own a different artifact: a claim-scope
check that identifies what the $20,000 number describes and what evidence is
missing. It should route actual dollar modeling to the existing cost
calculator.

This is an existing-page product repair, not a new page, cost forecast, or
indexing action.

## Evidence Classification

### Causal research evidence

- The July 28 full-site audit recorded that the page's direct answer was strong
  but its bucket-summing form duplicated the main calculator.
- Current production rendering confirms that the first-screen answer still
  serves the exact feasibility question.
- Current production tool checks reproduce misleading blank and materially
  incomplete states on the under-$20K checker.
- The current cost calculator preserves unresolved costs and produces a
  neutral blank state plus an explicitly partial quote-only state.
- A reproducible current public-web sample corroborates that the direct under-
  $20K question, short shopping-like query, and calculator query expose
  different result patterns and human jobs. It is not the sole basis for the
  repair decision.

### Monitoring context only

The August 14 public-safe GSC snapshot is finalized through August 12. It
reports 15 rolling impressions, 0 clicks, average position 48.93, a successful
eight-URL sitemap, and five of eight priority URLs indexed. The under-$20K URL
has no page-performance row and remains `Discovered - currently not indexed`.

That state does not prove that copy, architecture, canonical markup, or
indexing should change. It neither selects nor cancels this review.

### Unknowns

- Current exact-query US search volume: `UNKNOWN`.
- Current CPC and keyword difficulty: `UNKNOWN`.
- Current Tiny Home Clarity ranking for either target query: `UNKNOWN`.
- Traffic, conversion, backlink requirement, and revenue potential: `UNKNOWN`.
- No retained DataForSEO row measures the direct under-$20K query.
- Search market, locale, device, personalization, and Google-specific feature
  presence for the current public-web sample: `UNKNOWN`.

No fresh paid keyword-data call was needed to decide the product overlap.

## Current Query And Public-Web Sample

Collected 2026-08-14 through the OpenAI public web-search interface. Each query
was run separately, and the first five results returned by that interface are
retained below in response order. The interface did not expose a market,
locale, device, personalization state, or Google rank. It surfaced ordinary
web, video, Reddit, and news result types, but did not expose reliable ads,
People Also Ask, local-pack, or featured-snippet state. The response order is
therefore not presented as Google ranking evidence.

### `can you build a tiny house for under $20,000`

| Interface order | Retained result | Page type | Observable need |
|---:|---|---|---|
| 1 | [myCocoon Homes direct answer](https://mycocoonhomes.com/blog/can-you-build-a-tiny-home-for-20000) | Vendor article | Quick feasibility answer, conditions, and exclusions. |
| 2 | [AskPawPaw build diary](https://www.youtube.com/watch?v=3p6fVqcOLqw) | Video / build diary | Actual spending, build stage, and scope behind the claim. |
| 3 | [Dwell build story](https://www.dwell.com/amp/article/blue-baloo-far-out-tiny-homes-38f47ad0) | Editorial case study | A completed-build story and the circumstances around a low-price claim. |
| 4 | [Tiny Home Builders plan](https://www.tinyhomebuilders.com/tiny-houses/simple-living) | Vendor plan page | A low materials-only starting point tied to a specific plan. |
| 5 | [Jack Cooper cost guide](https://www.jackcooper.com/how-much-does-it-cost-to-build-a-tiny-house/) | Service-provider guide | Cost tradeoffs and what a low-end build requires. |

Architecture signal: preserve a direct answer and inspect the evidence behind
the number. Do not borrow unsourced ranges or vendor conclusions.

### `tiny house under 20k`

| Interface order | Retained result | Page type | Observable need |
|---:|---|---|---|
| 1 | [TinyHouse.com under-$20K collection](https://www.tinyhouse.com/model-price/under-20k) | Product/listing directory | Shop listed units or starting-price products. |
| 2 | [PrefabList under-$20K collection](https://www.theprefablist.com/prefab-homes/under-20k) | Product directory | Compare prefab homes, sheds, offices, and other products by listed price. |
| 3 | [Tiny House Listings collection](https://tinyhouselistings.com/dreamlists/under-20k-214381) | Sale/rent listings | Browse location-specific inventory. |
| 4 | [The Gadgeteer product article](https://the-gadgeteer.com/2025/11/22/this-solar-powered-tiny-house-is-less-than-18k/) | Product article | Evaluate a specific advertised low-price unit. |
| 5 | [Tiny House Listings second collection](https://tinyhouselistings.com/dreamlists/under-20k-333573) | Sale/rent listings | Browse additional inventory. |

Architecture signal: the short query is strongly shopping-like in this sample.
A non-listing answer must quickly distinguish a listed unit, shell, kit, used
home, materials budget, and complete project rather than imitate inventory.

### `tiny home cost calculator`

| Interface order | Retained result | Page type | Observable need |
|---:|---|---|---|
| 1 | [CalcEstimator calculator](https://calcestimator.com/tiny-house-cost-calculator) | General calculator | Generate a range from size, build type, systems, and region assumptions. |
| 2 | [AgentCalc estimator](https://agentcalc.com/tiny-home-cost-estimator) | General calculator | Combine entered build, land, labor, and extras. |
| 3 | [Little Houses For Sale calculator](https://www.littlehousesforsale.com/tiny-house-tools/cost-calculator) | Calculator / marketplace | Configure quality, location, foundation, systems, and add-ons. |
| 4 | [Think Tiny House calculator](https://thinktiny.house/calculate/) | Vendor configuration tool | Configure a vendor model and options. |
| 5 | [HomeGuide cost guide](https://homeguide.com/costs/tiny-house-cost) | Cost guide / lead generation | Read ranges and component breakdowns. |

Architecture signal: general arithmetic belongs on the cost-calculator page.
Tiny Home Clarity should differentiate there through quote scope and explicit
unknowns, not add another estimate generator to the under-$20K page.

### Paired overlap and confidence

The retained first five contain zero exact-URL overlap and zero domain-only
overlap across all three query pairs. Page-type overlap is partial between the
two under-$20K queries because both can expose commercial/vendor pages, but
their dominant jobs differ: direct feasibility/evidence versus shopping and
inventory. Page-type overlap is low between either under-$20K query and the
calculator query, whose retained sample is four tools plus one cost guide.

Confidence in this point-in-time result composition is `MEDIUM` because the
surface is not Google and its market and feature state are unknown. Confidence
in the page-role decision is `HIGH` only after combining this corroborating
sample with the retained July 28 portfolio audit and the current rendered page
and tool-state evidence. No Tiny Home Clarity result was observed in any
retained first-five sample.

## Page-Role Boundary

### Under-$20K page

Primary decision job: test what a $20,000 claim actually describes.

Useful output:

- structure-only, shell, listed unit, used unit, DIY build, or purported all-in
  project;
- labor counted or unpaid;
- reused, donated, deferred, or missing inputs;
- receipts, dates, location, and build stage available or absent;
- land, delivery, site, utilities, permits, tools, systems, and contingency
  included, excluded, or unresolved; and
- one ordered next step before trusting the claim.

### Cost calculator

Primary decision job: compare a seller quote or working build estimate with
known outside costs while keeping unresolved categories visible.

Useful output:

- partial versus resolved scenario;
- known subtotal and optional buffer;
- unknown, added, included, and not-applicable states;
- project-specific written question; and
- optional coherent financing and recurring-cost scenario.

### Clean architecture

The pages are not inherently cannibalizing if each owns its real job. The
under-$20K page should answer and audit the claim. The cost calculator should
model entered dollars. The current under-$20K allocation form blurs that
boundary and should be replaced, not the URL.

## Rendered Production Review

Checked the live pages on 2026-08-14. Both returned rendered content with no
observed console warning/error. The cost calculator fit a 390px viewport
without horizontal overflow. The under-$20K page also fit 390px when opened in
a fresh mobile tab.

### First-screen searcher pass

Under-$20K page:

- The H1 exactly matches the feasibility question.
- The opening gives a direct, appropriately narrow answer before caveats.
- Beginner and intermediate readers can tell that the number usually depends
  on DIY work or exclusions.
- The primary CTA sends the reader into a duplicate calculator whose state
  model is weaker than the full calculator.
- The secondary CTA correctly routes to the full calculator.

Cost calculator:

- The H1 and opening make the quote/budget job explicit.
- The first section explains that blank is not zero and makes the state model
  understandable before input.
- The form is longer and more demanding, but that depth belongs to the quote-
  modeling job.

### Realistic tool states

| State | Under-$20K result | Cost-calculator result | Finding |
|---|---|---|---|
| Blank submit | Headlines `Within $20K on entered assumptions only`, shows entered total `$0`, remaining `$20,000`, and 12 zero/blank buckets, then warns that no costs were entered. | Headlines `Add one known amount` and renders no dollar estimate. | P2 product contradiction on the under-$20K checker: the headline answers before the warnings undo it. |
| Negative structure input | Native `min=0` browser validation blocks submission and produces no new result. The previously rendered blank-state result remained visible during the check. | Not compared; the under-$20K browser behavior was sufficient to correct the record. | No reproduced negative-calculation defect. Preserve invalid-input rejection as a future regression requirement. |
| Structure-only `$20,000` | Headlines `Within $20K`, shows 11 zero/blank buckets, then warns about land, utilities, permits, and contingency. | A `$20,000` seller-quote-only state is explicitly `Partial budget: important costs are still unknown`, resolves 1 of 13 categories, lists unknowns first, and asks what is actually being sold. | The main calculator already owns and handles incomplete arithmetic better. |

The under-$20K warnings are useful, but placing a positive-sounding verdict
before unresolved-cost evidence is not acceptable buyer protection.

## Decision Persona

Primary persona: constrained-budget claim checker.

| Attribute | Evidence-backed description |
|---|---|
| Job | Decide whether a `$20K` listing, video, DIY plan, or seller statement describes a structure, shell, unit, build, or complete usable project. |
| Context | Has a hard budget or an attractive low-price claim and may not yet understand tiny-house categories or project boundaries. |
| Anxiety | Losing money after discovering unpaid labor, missing systems, unsuitable classification, delivery/site work, utilities, permits, or land outside the number. |
| Decision criteria | Claim scope, home/project type, build stage, labor treatment, receipts, included/excluded work, location/date, and next written proof. |
| Failure mode | Treating a low entered subtotal or advertised starting price as feasibility. |
| Evidence basis | Current public-web sample, retained July 28 audit, current page/tool states, and recent firsthand question language. |

## Experience-Level Review

### Beginner

The direct opening works. The current form asks for twelve cost buckets before
explaining whether the claim is a shell, used unit, DIY materials budget, or
all-in project. A replacement claim-scope check should orient before asking for
evidence and route detailed arithmetic away.

### Intermediate

The conditions, exclusions, and red flags are useful, but repeated lists and a
second calculator add scan cost. This reader needs a compact evidence record:
what the claim includes, what it excludes, and what written proof to request.

### Advanced

The page lacks receipt date/location, build stage, labor-hours treatment,
classification/certification, and exact scope fields. It should not manufacture
cost certainty; it should let this reader identify which evidence prevents a
valid comparison.

## Every-Section Disposition

| Current block | Disposition | Reason / future contract |
|---|---|---|
| Hero and direct answer | Keep; tighten | Distinct query answer and strong first-screen fit. Preserve the narrow-case boundary. |
| Short-answer panel | Keep; compress | Useful scope, but merge repeated caveats with the opening and result boundary. |
| `$20K reality checker` introduction | Replace | Reframe around checking what the claim describes, not allocating another budget. |
| Twelve-field budget allocation form | Replace | Duplicates the main calculator and has materially weaker state semantics. |
| Empty/default result | Replace | Keep neutral, but show the evidence needed to assess a claim rather than a future dollar total. |
| Generated verdict and four metrics | Replace | Blank and incomplete inputs must never produce `Within $20K`; invalid input must remain rejected. |
| Generated allocation | Remove | Actual dollar allocation belongs in the main calculator. |
| Generated assumption label | Merge | Preserve one concise measured/entered/unknown boundary. |
| Generated missing-cost warnings | Keep in new artifact | Convert to ordered unresolved-evidence questions before any conclusion. |
| Generated red flags | Merge | Keep only scenario-specific stop conditions; avoid repeating the static list. |
| Four possible-path cards | Keep; compress | They explain the narrow conditions behind a plausible claim. |
| Common exclusions | Keep; merge | Core decision content, but remove overlap with the result and checklist. |
| Static red flags | Merge | Retain distinct seller/listing/classification warnings once. |
| Before-chasing checklist | Keep; compress | End with three ordered actions: define scope, gather proof, then model numbers. |
| Related tools | Replace | Route actual costs to the cost calculator, provider responsibility to build options, and parcel/site unknowns to the land workflow or placement tool. |
| Footer | Keep; update | Preserve concise boundaries and current review date. |
| Canonical metadata | Add in future repair | The page is one of two known pages without an explicit canonical. This is a technical cleanup inside the same existing-page repair, not evidence for a new URL. |

## Concrete Usefulness Delta

The repaired page must produce a result the general calculator does not:

1. identify what the `$20K` number claims to cover;
2. distinguish evidence-backed inclusion from exclusion, free/reused input,
   unpaid labor, deferral, and unknown;
3. expose why two `$20K` stories are not comparable without date, location,
   build stage, labor treatment, and receipts; and
4. give one ordered next action before the reader relies on the claim.

A generic article plus a link to the calculator would not be enough. A second
bucket-summing tool is also not enough.

## Future Action Contract

Action: `THC-UNDER-001`

Kind: bounded existing-page repair.

Required result:

- keep `/tiny-house-under-20k/` and its direct-answer role;
- replace the duplicate allocation form and script with a claim-scope evidence
  check or equivalent concrete artifact;
- never render a positive feasibility verdict from blank, invalid, or
  materially incomplete evidence;
- route actual dollar modeling to `/tiny-home-cost-calculator/`;
- compress repeated caveats, exclusions, red flags, and checklists;
- add an explicit canonical and current review/sitemap date;
- pass decision-persona, beginner/intermediate/advanced, every-section, blank,
  incomplete, conflicting, desktop, mobile, 320px, native, independent, and
  production review.

Boundaries:

- no new URL or indexable page;
- no national average, typical/complete cost, affordability conclusion, or
  promise that `$20K` is sufficient;
- no vendor recommendation, product listing, affiliate link, or lead form;
- no legal, zoning, permit, code, insurance, financing, or buildability
  conclusion;
- no indexing request, outreach, community post, or external-account action;
  and
- do not change the general cost calculator unless a separate evidence-backed
  action later identifies a defect there.

## Result

`THC-REV-002` returns `repair`, not `consolidate` and not `no-build`.

The page deserves to remain because the exact feasibility question and result
types differ from general cost-calculator intent. Its duplicate tool does not
deserve to remain because it repeats the main calculator's job and produces a
materially weaker answer. Promote only `THC-UNDER-001` for a later, separately
reviewed implementation transaction.
