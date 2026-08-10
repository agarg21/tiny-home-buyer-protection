# Tiny House Land Pre-Offer Implementation Record

Checked: 2026-08-10

Action: `THC-LAND-001`

URL: `https://tinyhomeclarity.com/buying-land-for-a-tiny-house/`

## Selection And Evidence

The completed `THC-PROD-001` audit and
`briefs/tiny-home-next-user-value-brief-2026-08.md` select this implementation.
They identify a distinct, high-stakes job: before an offer or home purchase is
hard to unwind, organize what is supported by retained evidence, what is only a
claim, what conflicts, and what remains unknown for one parcel.

The August 9 GSC snapshot through August 7 is monitoring context only: 21
rolling impressions, 0 clicks, seven discovered pages, five indexed pages, and
six consecutive zero-impression days. It neither selects nor cancels this
already-qualified product. Ranking and traffic effects remain `UNKNOWN`.

## Frozen Scope

The seventeen paths in `ops/seo-roadmap.json` are the complete transaction.
The status, roadmap, review, decision, and progress paths are also predeclared
release-closeout paths for mechanical Pages and production evidence.

No land inventory, address lookup or transmission, analytics, account,
database, outreach, indexing request, vendor recommendation, typical or
complete cost, or legal/zoning/buildability conclusion is included.

## User Product

The rendered page begins with the decision and action, not a market overview.
It then provides:

1. four stop checks: exact parcel, controlling government, home category, and
   intended use;
2. account-free project context and fifteen parcel evidence rows;
3. four evidence states: `Unknown`, `Claim only`, `Source saved`, and
   `Conflict`;
4. deadline-aware `Stop before money is at risk`, `Investigate before relying`,
   and `Evidence recorded` buckets;
5. a printable evidence ledger with source references, dates, notes, unresolved
   questions, source limitations, timestamp, and page URL;
6. a question-to-office/document map, listing-claim translations, national
   screening sources, and routes to adjacent Tiny Home Clarity tools.

The worksheet never produces a score, confidence percentage, approval badge,
legal answer, or buildability result. Before an offer or under contract, only
unresolved parcel identity, controlling authority, home/use path, legal access,
and wastewater evidence moves to the stop bucket. Earlier-stage users see the
same gaps as investigation work rather than a fabricated emergency.

## Evidence Catalog

| Group | Rows | Deadline-critical rows |
|---|---|---|
| Parcel identity and authority | parcel/APN record; controlling government; zoning and overlays | parcel/APN; controlling government |
| Home category and intended use | written category/use review path | category/use path |
| Title, restrictions, and access | private restrictions; legal access; survey/boundaries | legal access |
| Water and wastewater | wastewater; water | wastewater |
| Utilities and site constraints | electric; flood; soil; wetlands; other site constraints; delivery/fire access | none |

Every `Source saved` row requires a nonblank source/document reference before
it counts as recorded evidence and retains a visible statement of what that
source does not prove. A saved-source selection without the reference remains
unresolved and visibly asks for it. Claim-only and conflict states produce
specific replacement or reconciliation questions rather than generic cautions.

## Source Roles

- [FEMA Flood Map Service Center](https://msc.fema.gov/portal/home): mapped
  flood-hazard screening, not site elevation, drainage, insurance, or approval.
- [USDA NRCS Web Soil Survey](https://www.nrcs.usda.gov/resources/data-and-reports/web-soil-survey): generalized soil data, not field testing,
  engineering, septic design, or local acceptance.
- [FWS Wetlands Mapper](https://www.fws.gov/program/national-wetlands-inventory/wetlands-mapper): biological screening data, not regulatory jurisdiction.
- [EPA septic guide](https://www.epa.gov/septic/new-homebuyers-brochure-and-guide-septic-systems): inspection and maintenance orientation; the parcel path remains local.

All four cited URLs returned HTTP 200 after redirects on 2026-08-10.

Parcel-specific proof must come from the relevant assessor/GIS, planning,
building/code, health/wastewater, utility, recorder/title/HOA, access, survey,
site, and fire sources as applicable. Exact local URLs remain `UNKNOWN` until a
parcel is selected.

## Privacy And State

- The optional parcel field requests an APN fragment or private label, not a
  full address.
- No worksheet value is transmitted, stored in browser storage, or written to
  an account or database.
- Blank state remains neutral and produces no result.
- Partial state produces an unresolved file without requiring every row.
- Print output removes site navigation and form controls.
- All user text is escaped before rendered summary output.

## Acceptance Matrix

| Lens | Required behavior |
|---|---|
| Parcel-under-consideration buyer | Critical deadline gaps are immediately ordered and printable. |
| Early land browser | Listing phrases become evidence requests; unknowns remain usable. |
| Advanced verifier | Source names, dates, notes, conflicts, and limitations survive in the ledger. |
| Beginner | Parcel/APN, jurisdiction, home category, and use are explained before evidence detail. |
| Intermediate | Claims, documents, offices, and unresolved handoffs are separated. |
| Advanced | The tool avoids simplified scores and preserves source-specific limitations. |
| Anti-generic | The output changes with parcel stage and evidence state; replacing the topic would break the evidence catalog and decision logic. |

## Rendered Pre-Review Evidence

- At 1440x900, the answer, actions, next-section cue, four-check grid, and
  two-column worksheet/result composition render without horizontal overflow.
- At 390x844, the first screen reaches the next-section cue and the worksheet
  becomes one readable column with full-width controls.
- At 320x568, the shortened direct answer keeps both actions visible and shows
  the `Start here` cue at the bottom of the first viewport without clipping.
- Blank state produces no score or verdict. Browsing state sends all unresolved
  evidence to investigation rather than a money stop.
- An offer-stage scenario with a saved parcel source sent four remaining
  critical gaps to stop, ten noncritical gaps to investigate, and the retained
  source to evidence recorded. Its source limitation remained visible.
- Claim and conflict states generated distinct replacement and reconciliation
  questions. Generated result headings receive focus, reset restores the
  neutral state, and all generated user text remains escaped.
- Browser console warnings and errors were empty.
- A real headless-Chrome print exposed that the initial print selector left the
  surrounding article visible. After repair, a populated offer scenario with
  claim, conflict, two retained sources, notes, nine investigation items, four
  stop items, limitations, timestamp, and URL produced an isolated five-page
  parcel file. PDF text assertions excluded the form and article; visual first-
  and last-page checks showed no clipped content or controls.
- Selecting `Source saved` with no reference produced five offer-stage stops,
  zero recorded rows, a visible `add reference` label, and an amber state.
  Adding the parcel-record reference immediately changed that row to recorded
  evidence and reduced the stop count to four.

## QA Contract

- Pure-logic tests cover blank, partial, deadline, claim-only, conflict,
  source-saved, state-transition, escaping, worksheet rendering, privacy,
  discovery, print, and source behavior.
- Native repository QA, JSON validation, and exact-scope diff checks must pass.
- Browser QA must exercise realistic beginner, intermediate, advanced, blank,
  partial, claim, conflict, source-saved, print, reset, keyboard, console, and
  1440px/390px/320px states.
- A different read-only reviewer must apply the first-screen, every-section,
  persona, anti-generic, evidence, accessibility, responsive, and privacy gates.
- Release requires `PASS` or `PASS_WITH_P3`, origin alignment, successful
  GitHub Pages deployment, and production content/interaction verification.

## Independent Review

Cycle 1 by read-only reviewer
`019fcc94-81c5-7ea2-b165-377dca84e4a0` returned `FAIL` with one P1 and three
P2 findings: missing-reference source self-attestation, missing first-screen
inventory boundary, inaccurate GSC status mirror, and missing populated-print
verification. All were fixed.

Cycle 2 reviewed the complete seventeen-path candidate and returned `PASS`
with no P0-P3 findings. The reviewer independently reproduced 68/68 tests,
zero SEO errors with three known warnings on untouched pages, zero operator-
state errors, valid JSON, exact scope, required files, and clean diff checks.
The candidate remains unreleased pending the reviewed commit, push, Pages, and
production verification.

Final cycle 3 reviewed the frozen complete transaction and returned `PASS`
with no P0-P3 findings. It confirmed all cycle 1 fixes, the recorded review
history, current QA counts, unreleased state, and `none` next-action marker.

## Release

Review-clean commit `b9760e93fb43ea7560963ef419e9b80421bc642b` was pushed to
`origin/main` without divergence. GitHub Pages run `31395122993` succeeded.
The live page, module, homepage, and sitemap returned HTTP 200 and passed the
canonical, H1, first-screen boundary, discovery, sitemap, 320px, blank-state,
missing-reference, retained-reference, print-action, and console invariants.

The production-verified release starts the no-new-indexable-page observation
hold on 2026-08-10 through 2026-11-08. No indexing request, outreach, analytics,
or external-account mutation occurred.
