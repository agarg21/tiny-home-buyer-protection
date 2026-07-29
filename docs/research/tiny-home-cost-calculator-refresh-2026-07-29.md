# Tiny Home Cost Calculator Refresh

Date: 2026-07-29

Action: `THC-COST-001`

Base: `38a3654cff2818a1a6b8390bc0ec4ebf2484262c`

Target URL: `https://tinyhomeclarity.com/tiny-home-cost-calculator/`

## Decision

Repair the existing indexed calculator as a quote and working-budget reality
check. Do not turn it into a national price predictor.

The first screen should tell the reader:

> Bring a seller quote or working build budget. The calculator will total the
> costs you know, show what is still unknown, and avoid calling a partial
> subtotal an all-in price.

The page should help a buyer decide whether a quote is complete enough to
compare or act on. It cannot determine a typical price, affordability,
placement permission, financing eligibility, insurance eligibility, or a final
project cost.

## Evidence Classification

Primary selection evidence:

- Direct manual user instruction on 2026-07-29.
- The review-clean July 28 full-site decision pack places the calculator
  blank/partial-state and quote-first repair after the now-completed homepage
  and San Diego actions.
- The live calculator has reproducible product defects described below.

Current query and SERP evidence:

- Semrush UI, United States desktop, checked 2026-07-29:
  - `tiny home cost calculator`: 110 monthly searches, KD 6, informational
    intent, CPC `$1.02`, competitive density `0.07`, global volume 160.
  - `tiny house cost calculator`: 110 monthly searches, KD 6, informational
    intent, CPC `$0`, competitive density `0.06`, global volume 170.
- These close variants are not additive traffic. One useful page should cover
  both terms unless current result overlap or a genuinely different searcher
  job supports separate pages.
- A dated public search sample for the two exact queries and close cost
  estimator/budget variants returned interactive calculators, editorial cost
  guides, and contractor-lead pages. No local or official-result type dominates
  this calculator query.

Monitoring context:

- The latest repository GSC snapshot is dated 2026-07-28, with finalized data
  through 2026-07-26. The calculator has 2 impressions, 0 clicks, and average
  position 26 in a tiny page-level sample.
- The snapshot is unchanged versus the prior dated snapshot and does not cause
  this repair.
- The central report dated 2026-07-28 predates the completed San Diego release
  and this direct instruction.

Unavailable or not used:

- Additive addressable traffic across variants: `UNKNOWN`.
- Conversion rate, revenue, backlinks required, and stable ranking: `UNKNOWN`.
- DataForSEO: not called; the current exact-query Semrush UI check and retained
  SERP sample are sufficient for this bounded repair.
- Anti Gravity: attempted read-only through `agy --print`; no advisory verdict
  was produced because headless read-file permission was unavailable. Unsafe
  permission bypass was not used.

Read-only research advice:

- Supporting advisor thread:
  `019fad3f-dbe1-7953-856b-b82658edc919`.
- Verdict on the prior live page: `FAIL/improve`.
- P1 findings covered blank/unknown/zero collapse and financing output that
  implied more completeness than the inputs supported.
- P2 findings covered utility double counting, undefined project scope, and
  first-screen/SEO/internal-link cleanup.
- The implemented response uses four traceable outside-cost states: unknown,
  added amount, already covered by the starting amount, and not applicable.
- This advisor informed the implementation but is not the independent
  transaction reviewer.

## Current SERP And Ranking-Page Sample

### Reproducible paired-query matrix

Method: authenticated Google web search in a desktop Chrome session on
2026-07-29, with `hl=en` and `gl=us`. Exact quoted queries were run separately.
The session was logged in, so rankings can be personalized and are evidence of
one dated sample, not a universal rank order.

| Exact query | First five organic results in observed order | Observed result features | Confidence |
|---|---|---|---|
| `tiny home cost calculator` | [EcoLifeHomes park-model calculator](https://ecolifehomes.com/park-model-tiny-home-cost-calculator.html); [Paradise Tiny Home Community cost calculator](https://paradisetinyhomecommunity.com/cost-calculator/); [HomeCostPro calculator](https://www.homecostpro.com/topics/tiny-home-cost); [Estimero calculator](https://www.estimero.com/cost-calculators/tiny-home); [Kuhn Construction estimator](https://kuhnconstruction.com/tiny-home-estimator/) | AI Overview and People also ask; calculator, community-cost, and contractor-estimator pages dominate the first five | Medium for this dated personalized sample; low for stable national ordering |
| `tiny house cost calculator` | [Little Houses For Sale calculator](https://www.littlehousesforsale.com/tiny-house-tools/cost-calculator); [Facebook discussion](https://www.facebook.com/groups/tinyhousesandaffordablehomes/posts/2404743039979332/); [Bob Vila cost guide](https://www.bobvila.com/articles/tiny-house-cost/); [Tinyhousel 2026 cost guide](https://tinyhousel.com/average-cost-to-build-a-tiny-house-in-2026/); [YouTube AirCrete calculator video](https://www.youtube.com/watch?v=-QdnMfmDh9k) | AI Overview and People also ask; one direct calculator followed by discussion, editorial, and video results | Medium for this dated personalized sample; low for stable national ordering |

Overlap:

- Zero URLs and zero domains overlapped across the first five organic results.
- The sample therefore does **not** prove that Google currently treats the two
  exact queries as one interchangeable SERP.
- The one-URL decision instead rests on the shared informational intent in the
  current Semrush UI, the identical quote/budget decision job this product can
  serve, and the risk of creating two thin synonym pages. Use both terms
  naturally on the existing URL and revisit only if GSC later shows distinct
  query jobs that one page cannot satisfy.

Retained 2026-07-29 representative results:

| Page | Type | What it does well | Gap or boundary for this action |
|---|---|---|---|
| [Little Houses For Sale cost calculator](https://www.littlehousesforsale.com/tiny-house-tools/cost-calculator) | Marketplace/tool | Immediate visual estimate; asks size, quality, location, foundation, roof, and DIY status | Starts with a `$35,550` result and says it uses 2024-2025 U.S. averages. Tiny Home Clarity will not imitate assumed current prices. |
| [CalcEstimator tiny-house calculator](https://calcestimator.com/tiny-house-cost-calculator) | General calculator | Makes build method, foundation, finish, off-grid scope, and region visible | Starts with an `$88,660` default and makes broad financing, zoning, overrun, and national-average claims. Those claims are outside this action. |
| [EveryCalculators tiny-house calculator](https://everycalculators.com/tiny-house-cost-calculator.html) | General calculator | Accepts detailed user-entered components and explains its formula | Shows `$0.00` output before meaningful input and publishes broad typical ranges. Its blank-state failure reinforces our repair. |
| [Angi tiny-home cost guide](https://www.angi.com/articles/tiny-home-cost.htm) | Editorial/lead generation | Explains cost categories and project types for broad orientation | Owns contractor data, experts, and lead generation that this project cannot imitate or independently validate. |
| [HomeAdvisor tiny-home cost guide](https://www.homeadvisor.com/cost/architects-and-engineers/build-a-tiny-house/) | Editorial/lead generation | Provides a scannable type/cost guide and project-cost categories | Relies on range/average claims and contractor lead generation; it is not a neutral quote-normalization tool. |

SERP decision:

- Keep one calculator URL for both `tiny home` and `tiny house` variants.
- The dominant job is informational cost estimation, but result quality often
  depends on opaque assumptions or broad averages.
- Tiny Home Clarity can serve the narrower, defensible job: normalize a user's
  quote or working budget, separate known from unknown, and surface the next
  written quote questions.
- Do not chase contractor quotes, builder directories, cost-per-square-foot
  ranges, location multipliers, or automatic national estimates.

## Current Product-State Proof

Observed on the live page on 2026-07-29:

1. Submitting the untouched form produces `$0 estimated all-in project budget`.
2. Entering only an `$85,000` structure quote produces `$102,000 estimated
   all-in project budget` because the 20% starter contingency is applied while
   land, delivery, foundation, site, utilities, permits, taxes, insurance, and
   financing remain unknown.
3. Missing-cost warnings appear after the all-in headline and metrics.
4. JavaScript converts blank, explicit zero, invalid, and negative input to the
   same numeric zero.
5. `General utility hookups` overlaps the separate wastewater, water, and
   electrical fields.
6. The form does not ask whether the reader has a turnkey quote, shell/kit
   budget, DIY budget, foundation/ADU project, or park/RV-style product.
7. `Estimated cash before move-in` can look complete without a coherent
   financing scenario.
8. Related links default to local/classification pages rather than the live
   under-$20K cost question.
9. The page lacks an explicit canonical and still shows the July 10 review
   date.

## Decision Persona

Primary decision job: quote and budget reality checker.

Job:

- Determine what a seller quote or working build budget includes, what the
  known project subtotal is, and which missing categories require written
  confirmation before a deposit, land offer, or financing assumption.

Context and anxieties:

- The reader has seen a surprisingly low or attractive tiny-home number.
- They may not know whether it describes a turnkey home, shell, kit, DIY
  materials, park model, foundation build, delivery-only unit, or complete
  placed project.
- They are worried about land, setup, site work, utilities, permits, financing,
  insurance, and quote exclusions changing the decision.

Decision criteria:

- Starting object and amount.
- Land situation.
- Which one-time categories are known, explicitly zero/not applicable, or
  unknown.
- Which recurring and financing inputs are coherent.
- Which written documents or quotes are still needed.

Failure mode:

- Treating a partial subtotal or seller headline as a complete or typical
  project price.

## Experience-Level Review

### Beginner

- Must see the calculator and its quote-gap promise before a large disclaimer.
- Needs plain project-path labels with one-line explanations.
- Blank must mean `unknown`; a typed `0` is a resolved added amount and remains
  distinct from `already covered` and `not applicable`.
- Needs a clear first next action: obtain written scope for the largest unknown.

### Intermediate

- Needs separate delivery, setup/foundation, site, water, wastewater,
  electrical, permits/design, and taxes.
- Needs the result to place missing categories before a partial subtotal.
- Needs project-specific questions for turnkey, shell/kit, DIY,
  foundation/ADU, or park/RV-style paths.

### Advanced

- Needs exact arithmetic, applied-assumption traceability, explicit financing
  completeness, and a list of resolved versus unresolved categories.
- Needs zero-interest financing to calculate when `0` is explicitly entered.
- Needs no claim that project type, certification, title, permit path, or local
  placement is resolved by the calculator.

## Input And State Contract

### Starting context

Require:

- Project path:
  - finished home / seller or builder quote;
  - shell or kit to complete;
  - DIY or owner-builder working budget;
  - foundation home or ADU project;
  - park model or RV-style product.
- Starting amount: the quote or working structure/build budget, when known.
- A blank starting amount remains unknown and is omitted from result metrics; a
  typed `0` is a known user-entered amount.
- Land situation:
  - buying land;
  - land already owned / acquisition outside this estimate;
  - renting a lot or community space;
  - not decided.

Project path changes wording and verification prompts, not prices.

### One-time categories

- Starting home/build amount.
- Completion work beyond the starting amount.
- Land acquisition when buying.
- Delivery or transport.
- Setup, foundation, pad, anchoring, or blocking.
- Driveway, grading, drainage, and site preparation.
- Water or well connection.
- Wastewater, septic, or sewer.
- Electrical service.
- Permits and inspections.
- Plans, design, engineering, and surveys.
- Taxes or transaction fees when applicable.
- Other documented one-time costs.

Remove `General utility hookups`.

Input semantics:

- `Unknown` = no resolved written amount or scope.
- `Add amount` = user-entered known or working amount; a typed `0` is a
  deliberate resolved amount.
- `Already covered` = the written starting amount covers the bucket.
- `Not applicable` = the bucket does not apply to this scenario.
- A positive number is counted only when `Add amount` is selected.
- Negative or malformed number = invalid and must not calculate.

The form must explain all four states and the typed-zero rule next to the cost
inputs.

### Recurring and financing categories

- Loan amount.
- Annual interest rate.
- Loan term in years.
- Monthly insurance.
- Monthly lot/community rent.

Do not show a monthly loan payment until loan amount, rate, and term are all
known. An explicitly entered `0%` rate is valid.

Do not label a partial carrying-cost sum as complete when insurance or lot rent
is unknown.

### Contingency

- Keep 20% only as an editable starter assumption.
- Apply it only to entered one-time costs.
- Call it a `planning buffer on entered costs`.
- Blank means unknown and produces no zero-dollar or `0%` buffer metric.
- A typed `0` is a known deliberate no-buffer assumption and remains visible.
- Never use it to transform a materially incomplete subtotal into an all-in
  estimate.

## Result-State Contract

### Blank

Trigger: no starting amount, outside-cost amount, financing input, insurance
amount, or applicable lot rent beyond the prefilled contingency.

Result:

- Keep the neutral starter panel.
- On submit, explain that at least one quote or cost is needed.
- Show no dollar headline or zero-dollar metrics.

### Partial

Trigger: at least one monetary input, but one or more major one-time categories
remain blank or required context is missing.

Order:

1. `Partial budget: important costs are still unknown`.
2. Missing-cost warnings and the single most useful next written question.
3. Known starting amount, when entered, and added costs.
4. `Known one-time subtotal`, excluding every unknown bucket.
5. Optional planning buffer on entered costs, shown separately rather than
   combined into a more complete-looking total.
6. Financing/recurring output only where its inputs are coherent.
7. Project-path verification prompts.

Never use `all-in`, `complete`, `typical`, `expected`, or `affordable`.

A coherent financing or recurring-cost scenario without a project amount is
still a partial result. Show only its known financing/monthly metrics; do not
invent a zero-dollar starting amount, outside-cost subtotal, or planning
buffer.

### Resolved-input planning total

Trigger: starting mode, project path, and land situation are selected; a
starting amount is entered; and every outside-cost category is resolved as an
added amount, already covered, or not applicable. The planning buffer must
also be deliberately retained, changed, or set to `0`; blank buffer remains a
partial result.

Title:

- `Planning total from your resolved inputs`

This still is not a final bid or complete/typical price. The result must retain
the assumption and verification language.

### Invalid

- Native minimum constraints and JavaScript validation block negative or
  malformed values.
- Keep the current result instead of replacing it with a misleading total.
- Focus the first invalid control or the result/error message.

## Every-Section Decision

| Current block | Decision | Implementation |
|---|---|---|
| Hero | Compress | Direct quote-gap promise, current date, and calculator immediately after it. |
| Large limits panel | Merge/remove | Keep one compact boundary line with the form/result; remove the pre-tool barrier. |
| Tool introduction | Keep/replace | Explain all four bucket states and no automatic typical prices. |
| Purchase and land | Replace | Add project path, starting amount, and land-status controls. |
| Delivery/site/utilities | Replace | Remove general utilities; keep separate water, wastewater, and electrical fields. |
| Soft and carrying costs | Keep/clarify | Separate one-time taxes/fees from monthly insurance and lot rent. |
| Financing/contingency | Replace/clarify | Remove misleading cash-needed math; require coherent loan inputs; label buffer on entered costs. |
| Empty result | Keep | Neutral before meaningful input and after a blank submission. |
| Dollar result headline | Replace | Partial versus resolved-input state contract above. |
| User-number repetition | Compress | Show only decision metrics and resolved/unknown status. |
| Assumption block | Compress | Show only applied contingency and arithmetic boundaries. |
| Missing-cost warnings | Keep/move | First in any partial result. |
| Generated red flags | Keep/compress | Use project-specific stop conditions without repeating static cards. |
| Four static warning cards | Remove/merge | Move relevant advice into input help, result prompts, and checklist. |
| Buyer checklist | Keep/rewrite | Make it a six-question written quote workflow. |
| Related links | Replace | Keep placement tool; add under-$20K; remove weak default local/classification links. |
| Footer | Keep/shorten | One estimate and placement boundary with current date. |

## Technical And Test Contract

- Add an explicit canonical.
- Update sitemap `lastmod` to `2026-07-29`.
- Move calculator logic into
  `site/tiny-home-cost-calculator/calculator.js` with pure exported functions
  and guarded browser initialization.
- Add focused native tests in `tools/cost-calculator.test.mjs`.
- Required test states:
  - blank;
  - quote-only partial;
  - known outside cost with blank starting amount;
  - blank versus typed-zero planning buffer;
  - coherent financing/monthly input without a project amount;
  - partial with all four outside-cost states;
  - fully resolved one-time inputs;
  - land-owned and lot-rental branches;
  - zero-interest financing;
  - incomplete financing;
  - invalid negative input;
  - utility fields counted once;
  - contingency applied only to entered one-time costs.
- Browser QA:
  - keyboard/label behavior and result focus;
  - desktop, 390px, and 320px containment;
  - first-screen calculator signal;
  - blank, partial, resolved, explicit-zero, financing, and invalid states;
  - no console errors;
  - live canonical, internal links, and production-byte checks.

## Claim And Scope Boundaries

- No national average, typical, complete, expected, guaranteed, or live-market
  price.
- No affordability verdict.
- No builder/vendor recommendation or quote.
- No financing, insurance, title, appraisal, permit, code, zoning, or placement
  conclusion.
- No claim that a project path fixes which line items apply.
- No homepage, under-$20K implementation, local-guide, or national-build page
  change.

## Release Invariants

- Blank input produces no dollar result.
- Unknown starting amount and planning buffer never render as zero; typed zero
  remains a visible known value.
- Coherent financing/monthly-only input renders a partial scenario rather than
  being discarded as blank.
- Quote-only input is visibly partial and shows missing categories first.
- Unknown, typed zero, already covered, and not applicable remain distinct.
- A quote-only partial result shows the quote subtotal and optional buffer
  separately; it never displays their combined `$102,000` arithmetic as the
  project total.
- No general-utilities field remains.
- Project type changes prompts, never cost assumptions.
- Accepted cent values remain visible to two decimal places in quote, cost,
  subtotal, buffer, financing, insurance, rent, and monthly traces.
- The result never uses `all-in` for partial or resolved-input totals.
- Canonical and sitemap agree with the existing URL.
- The live page and calculator module match the reviewed commit.
