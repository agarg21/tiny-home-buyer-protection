# Tiny Home Land Due-Diligence Brief

Checked: 2026-08-04

Source action: `THC-PROD-001`

Promoted implementation: `THC-LAND-001`

Proposed URL: `https://tinyhomeclarity.com/buying-land-for-a-tiny-house/`

## Reader And Decision Job

Primary reader: someone considering a specific parcel, land listing, offer, or
tiny-home purchase whose success depends on that land.

Primary decision job: before money becomes difficult to recover, identify what
is documented, what is only a verbal or listing claim, and what still needs an
answer from the controlling office, document, utility, title source, or
qualified professional.

Secondary readers are early land browsers and advanced verifiers. The page is
not a land marketplace, a legality checker, or a generic tiny-house article.

## First-Screen Contract

Suggested H1:

`Buying Land for a Tiny House? Check the Parcel Before You Offer`

Required direct answer:

Do not rely on `unrestricted`, `tiny-home friendly`, or `utilities nearby` as
proof. Before an offer becomes nonrefundable, confirm the exact parcel and
controlling government, intended home category and use, legal access and
private restrictions, wastewater and water path, utilities, and material site
constraints with written evidence.

Primary action: `Start the parcel check`

Secondary action: `See the documents to request`

The complete first screen must fit at 320px without hiding the answer or first
action, and a visible hint of the next section must remain in the first
viewport. It must not open with caveats, market landscape, internal confidence
language, or a generic explanation of tiny houses.

## Tool State Contract

The first implementation is client-side and account-free. It must not send or
store a parcel address. A user may enter a non-sensitive parcel label locally
for printing, but the interface should recommend APN or a private label rather
than a full address.

Required project context:

- controlling jurisdiction: known or unknown;
- home category: foundation dwelling, movable tiny house/THOW, manufactured
  home, park model/RV, ADU, or unresolved;
- intended use: primary dwelling, accessory dwelling, temporary/RV use,
  rental, or unresolved; and
- parcel stage: browsing, specific parcel, offer drafted, or under contract.

Each evidence row must support these states:

- `Unknown`: not investigated or no answer yet;
- `Claim only`: listing, seller, builder, or verbal statement without retained
  evidence;
- `Source saved`: official record, written response, document, or qualified
  report retained; and
- `Conflict`: sources or statements disagree.

The tool must never convert those inputs into `legal`, `approved`, or
`buildable`. Its result has three non-legal buckets:

- `Stop before money is at risk`: identity, authority, intended home/use, legal
  access, or wastewater path remains unknown, claim-only, or conflicting at a
  money deadline;
- `Investigate before relying`: other material parcel evidence is missing or
  conflicting; and
- `Evidence recorded`: the user has saved a source, but the tool still names
  what that source does not prove.

All-blank state: show orientation only and no false result.

Partially complete state: show a useful unresolved list; do not require every
row before producing guidance.

Print state: include the parcel label, timestamp, selected context, evidence
states, notes, unresolved questions, source-role caveats, and page URL. Do not
include navigation or controls that are meaningless on paper.

## Every-Section Contract

| Order | Section | Reader job | Required content | Exclude |
|---:|---|---|---|---|
| 1 | Answer and start | Understand the risk and begin immediately | H1, direct answer, two actions, plain-language no-verdict boundary | Market overview, dream copy, long disclaimers |
| 2 | Four stop checks | Avoid evaluating the wrong parcel or product | Exact parcel/APN, controlling government, home category, intended use | Statewide permission statements |
| 3 | Parcel evidence worksheet | Record evidence consistently | Context inputs and grouped rows for authority/use, title/access/private restrictions, water/wastewater, utilities, flood/soil/site, delivery/fire access | Address lookup, legal scoring, vendor lead form |
| 4 | Your unresolved file | Know what to do next | Stop/investigate/recorded buckets, grouped missing items, editable notes, print action | Confidence percentage, green approval badge |
| 5 | Documents and offices | Ask the right source for the right proof | Table mapping question to assessor/GIS, planning/zoning, building/code, health/wastewater, utility, recorder/title/HOA, survey/site professional, fire/access as applicable | One generic `call the county` instruction |
| 6 | Listing phrases that prove little | Resist sales shorthand | `Unrestricted`, `tiny-home friendly`, `utilities nearby`, `road access`, `perc available`, and `owner financing`, each paired with the next evidence request | Accusations that every seller is deceptive |
| 7 | National screening sources | Use federal tools without overreading them | FEMA, NRCS, FWS, EPA roles and explicit limitations | Claims that a map establishes approval or feasibility |
| 8 | Continue the project | Move to the neighboring decision surface | Placement hub, build-options page, cost calculator, and relevant local guides | Duplicate calculator or builder content |
| 9 | Boundary and freshness | Understand scope and currency | Last reviewed date, non-legal/non-professional boundary, no data transmission statement | Repeated warnings already stated above |

## Evidence Groups

### Parcel identity and authority

- parcel/APN and assessor or GIS record;
- incorporated city, unincorporated county, or other controlling government;
- planning/zoning office and building/code office;
- zoning district and overlays as reported by the relevant source; and
- written source date and contact or document reference.

### Home category and intended use

- foundation dwelling, ADU, manufactured home, movable tiny house/THOW, park
  model/RV, or unresolved;
- primary, accessory, temporary/RV, rental, or unresolved use; and
- written description of the proposed path, without turning it into a site
  conclusion.

### Private restrictions, title, and access

- deed restrictions, covenants, HOA or architectural review;
- legal access, recorded easement, road maintenance, and frontage; and
- survey, boundaries, encroachments, and buildable-area questions as needed.

### Water and wastewater

- public service availability in writing, or private well/septic path;
- existing permit, design, inspection, or maintenance records when present;
- local health or wastewater requirements and unresolved site evaluation; and
- no assumption that a nearby line or prior perc statement guarantees service.

### Utilities and site constraints

- electric and other intended service availability and extension assumptions;
- FEMA flood map screening;
- NRCS soil screening and any required site-specific work;
- FWS wetland screening with its regulatory limitation;
- slope, drainage, vegetation, wildfire, environmental, or other locally
  relevant constraints; and
- delivery route, turning, bridge/road limits, crane/setup area, and emergency
  access as applicable.

## Persona Acceptance Checks

Parcel-under-consideration buyer:

- can find the first stop checks without reading an article;
- gets a deadline-aware unresolved list; and
- can print a question file before an office call, professional review, or
  offer decision.

Early land browser:

- learns why listing phrases are not proof;
- can use the worksheet with unknowns rather than inventing an address; and
- sees which five or six issues are worth screening before emotional or
  financial commitment.

Advanced verifier:

- can save source labels, dates, document names, and conflicts;
- does not have to accept a simplified legality score; and
- can distinguish screening maps from local or professional determinations.

Beginner, intermediate, and advanced experience levels must be reviewed
separately from these decision personas using
`templates/searcher-pov-review-prompt.md`.

## Search And Architecture Contract

Primary query family:

- `buying land for a tiny house`
- `land for tiny house`

Supporting questions:

- `do you need to buy land for a tiny house`
- `how to buy land for a tiny house`
- `how do you find land for a tiny house`

Adjacent intent to exclude from the primary target:

- `where to buy land for a tiny house` is materially inventory and discovery
  oriented in the bounded current result sample. State that this page does not
  list land and is for screening a parcel after it is found; do not imply that
  the workflow satisfies marketplace intent.

The title and H1 should match the pre-offer job, not promise listings. The page
must explain early that it does not provide land inventory.

Architecture boundaries:

- Homepage: broad placement and classification triage.
- New land page: one parcel's pre-offer evidence workflow.
- Build options: product and provider responsibility.
- Cost calculator: known and unresolved money.
- Local pages: source-backed jurisdiction examples only.

## Proposed Implementation Scope

`THC-LAND-001` should be a separately selected and reviewed implementation
transaction. Proposed exact paths:

- `docs/research/tiny-house-land-pre-offer-implementation-2026-08.md`
- `site/buying-land-for-a-tiny-house/index.html`
- `site/buying-land-for-a-tiny-house/land-checker.js`
- `site/index.html`
- `site/styles.css`
- `site/sitemap.xml`
- `tools/land-checker.test.mjs`
- `strategy/current-strategy.md`
- `backlog/implementation-backlog.md`
- `backlog/seo-research-review-backlog.md`
- `status/site-pages.md`
- `ops/current-cycle.md`
- `ops/operator-review.md`
- `ops/seo-roadmap.json`
- `ops/seo-roadmap.md`
- `decisions.md`
- `progress.md`

Do not silently expand that action into analytics, accounts, a database,
address lookup, listings, outreach, indexing requests, local-page production,
vendor recommendations, cost claims, or legal conclusions.

## QA And Review Contract

- Add pure-logic tests for blank, partial, conflict, deadline, claim-only,
  source-saved, state-transition, print-summary, and HTML-escaping behavior.
- Run all native repository QA in `AGENTS.md`.
- Test keyboard labels, focus, error/state announcements, print output, and no
  address transmission.
- Test 1440px, 390px, and 320px widths, including a short 320px viewport.
- Require no horizontal overflow, clipped controls, state-driven layout shift,
  console warning/error, broken local link, or missing canonical/sitemap entry.
- Review the first screen, every section, all decision personas, and beginner,
  intermediate, and advanced experience levels with a fresh independent
  read-only reviewer.
- Release only after `PASS` or `PASS_WITH_P3`, origin alignment, successful
  Pages deployment, and production byte/interaction checks.

## Success Signal

The implementation is successful when a reader can turn an uncertain parcel
or listing into an honest, printable evidence and question file without being
given a false legal, buildability, vendor, or cost answer. Ranking and traffic
remain observation outcomes, not release claims.
