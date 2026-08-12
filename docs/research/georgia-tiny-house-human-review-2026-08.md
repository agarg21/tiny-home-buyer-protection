# Georgia Tiny House Human Review

Date: 2026-08-12

Action: `THC-REV-001`

Reviewed URL:
`https://tinyhomeclarity.com/georgia-tiny-house-classification/`

Disposition: `repair`

## Decision

Repair the existing page in a separate transaction. Do not create a Georgia
county directory or another indexable URL.

The primary searcher is trying to find out whether a tiny house can be placed
or occupied in Georgia. Classification is useful only because it changes which
rules, documents, and offices apply. The current page reverses that hierarchy:
it opens as a state-source record, leads with limitations, and makes a beginner
read most of the page before learning how to classify the unit or what to ask
locally.

The review also found a material source-freshness gap. The live page's building
code note still reflects older 2012 IRC / Appendix Q context. Georgia's current
mandatory residential code is now the 2024 IRC with Georgia amendments,
effective January 1, 2026, and the amendment packet includes changes to
Appendix BB, Tiny Houses. The available official text does not by itself prove
which Appendix BB provisions a particular authority enforces. A repaired page
must state that limit and send the reader to DCA or the authority having
jurisdiction for a written answer.

## Evidence Classification

### Causal evidence

- The July 28 every-section audit found a poor beginner first screen and
  source-record framing instead of a plain classification answer.
- Desktop, 390px, and 320px rendered checks on August 12 reproduced that gap.
- Current Georgia DCA code pages and the 2026 residential-code amendments
  materially change the source context used by the live page.
- A bounded August 12 SERP sample confirms that broad Georgia searches are
  usually placement questions. Classification is a necessary step, not the
  searcher's final job.

### Monitoring context only

The August 12 public-safe GSC snapshot, finalized through August 10, reports
five impressions, zero clicks, and average position 22.4 for the Georgia URL.
The page is indexed and was last crawled July 24. Those values are unchanged
from the prior snapshot's page row. They neither select nor cancel this repair.
No public-safe query row identifies what produced the impressions.

### Unknowns

- Current monthly search volume, CPC, difficulty, traffic, backlinks, and
  conversion potential for the Georgia query family are `UNKNOWN`.
- The public SERP interface did not expose a controlled searcher location,
  complete feature set, or stable ranking report.
- No official statewide registry of Georgia counties that allow tiny houses
  was found.
- The reviewed official text does not support a statewide placement answer or
  a conclusion that Appendix BB is enforceable in every Georgia jurisdiction.

## Human Question

The page should answer this question before discussing source mechanics:

> I am considering a tiny house in Georgia. What kind of structure is it, and
> what should I verify before I buy the home or rely on a parcel?

A useful answer has three parts:

1. Georgia does not provide one statewide placement answer for every tiny
   house.
2. Identify which of the four DCA categories best fits the unit using actual
   documents, not the seller's label.
3. Ask the city or county about that category, intended use, and parcel, then
   ask the building authority which construction-code path and appendix rules
   it will enforce.

## Current SERP And Intent Sample

Collected anonymously on 2026-08-12. `Market / locale` is `UNKNOWN`; geographic
words in the query are constraints, not proof of the searcher's location. The
retained pages are representative samples, not a rank tracker.

| Exact query | Representative results and page types | Searcher intent | Page implication |
|---|---|---|---|
| `Georgia tiny house laws` | Georgia manufactured-home rules (official); Murray County tiny-house FAQ (official local); 2024 IRC Appendix BB with Georgia amendments (code); commercial county and state guides | Find whether and where a tiny house can be placed or occupied, then understand the controlling rule | Lead with the statewide-versus-local answer and classification workflow, not a source summary |
| `Georgia tiny house rules classification` | Georgia DCA fact sheet (official); Georgia DCA Appendix Q legacy PDF; current Appendix BB material; commercial explainers | Decode categories and construction-rule vocabulary | Preserve the four-category source role, but translate it into evidence a buyer can request |
| `can I put a tiny house on my property Georgia` | Murray County and Macon-Bibb local FAQs; commercial statewide guides; community discussions | Get a parcel and intended-use answer | Say plainly that a Georgia state page cannot answer the parcel; give the exact local questions and documents needed |

The local official pages are particularly instructive because they answer the
question in jurisdiction-specific terms. For example, Murray County presents a
direct `Can I install/build a tiny house on my property?` FAQ. Tiny Home
Clarity cannot imitate that local certainty at state level. It can be more
useful than broad commercial lists by showing why the unit category changes
the next office and by preventing a seller label from being mistaken for
permission.

## Official-Source Freshness

Checked 2026-08-12.

| Source | What it supports | Limit for this page |
|---|---|---|
| [Georgia DCA tiny house fact sheet](https://www.dca.ga.gov/sites/default/files/georgia_tiny_house_fact_sheet_32824_0.pdf) | Four state-level categories: recreational vehicle, manufactured/mobile home, residential modular/industrialized building, and site-built dwelling; local zoning varies | Useful classification source, but its building-code discussion reflects older 2012 IRC / Appendix Q context |
| [Current state minimum codes](https://dca.georgia.gov/community-assistance/construction-codes/current-state-minimum-codes-construction) | The current mandatory residential code is the 2024 IRC with Georgia amendments | Does not answer a parcel, zoning, or unit-classification question |
| [New codes effective January 1, 2026](https://dca.georgia.gov/announcement/2025-12-09/new-codes-jan-2026) | Confirms the effective date and current code edition | Does not establish local zoning permission or the classification of a particular unit |
| [2026 Georgia IRC amendment packet](https://dca.georgia.gov/document/document/irc-2026-amendment-packet-2024-edition/download) | Says appendices are not enforceable unless referenced in the code body or adopted by DCA or the authority having jurisdiction; includes Georgia changes to Appendix BB, Tiny Houses | The extracted packet expressly says DCA adopts Appendix U as optional, but contains no equivalent express adoption sentence for Appendix BB. Do not infer statewide Appendix BB enforcement from the amendments alone |
| [Enforcement of state minimum codes](https://dca.georgia.gov/community-assistance/construction-codes/enforcement-state-minimum-codes) | Explains state and local enforcement roles and points readers to local authorities | It is an orientation source, not a local written determination |

Material freshness result: the live statement that tiny-house appendix
provisions `must be locally adopted to be enforced`, paired with Appendix Q in
the limitations section, is no longer an adequate summary. The current source
set is 2024 IRC / Appendix BB, and the enforceability question must remain
explicitly unresolved unless DCA or the local authority confirms it.

## Rendered First-Screen Review

Checked the production page at desktop 1280x720, mobile 390x844, and narrow
mobile 320x740.

- The first screen begins with `State classification source`, a long title,
  four negative limitations, and a source date.
- At 320px the hero ends around 580px, so the first useful content visible
  after the hero is still `Source Summary`, not a category decoder or local
  action.
- The first screen does not answer what classification means, name the four
  categories, show what evidence distinguishes them, or provide the first
  local question.
- The page has no horizontal overflow at 320px. The defect is usefulness and
  information order, not responsive breakage.
- The page has no explicit canonical, one of three known site-wide warnings.
  That should be corrected if the page is materially repaired, but it is not
  the causal reason for the repair.

## Persona Review

Decision-job persona: a Georgia placement-feasibility checker who has a unit,
seller description, plan, or parcel in mind and is afraid of paying before
knowing what rules and authorities apply.

| Experience level | Current result | What the repaired page must provide |
|---|---|---|
| Beginner | `poor` | A plain answer before acronyms; four recognizable categories; examples of the documents or labels to collect; one ordered next action |
| Intermediate | `medium-low` | A side-by-side category / evidence / authority comparison; the difference between seller description, construction category, intended use, zoning, and approval |
| Advanced | `medium` | Current source edition and date, source links, precise Appendix BB uncertainty, jurisdiction boundaries, and exact written questions for DCA and local officials |

Safety is not a substitute for usefulness. The current page is cautious, but
the repeated `cannot determine` language makes the reader do the translation.

## Anti-Generic Test

The repaired page must fail review if `Georgia` can be replaced with another
state name without changing the core artifact. Its defensible state-specific
value is:

- DCA's four-category taxonomy;
- Georgia's current 2024 IRC / 2026 amendment context;
- the distinction between DCA classification guidance and local placement;
- the specific proof a buyer should request for each category; and
- exact questions for a Georgia local authority and DCA.

Generic reminders about utilities, septic, HOAs, lenders, and insurance may
appear once as secondary checks. They cannot be the main product.

## Every-Section Disposition

| Current block | Decision | Repair requirement |
|---|---|---|
| Hero | Replace | Lead with the answer: Georgia uses several structure categories, and a category is only the start of the local placement check |
| Source Summary | Remove | Do not expose record ID, confidence metadata, or an inability list as the first product |
| Possible paths | Replace | Use a four-row decoder: category, proof to request, what it does not prove, and next authority/question |
| DCA category source card | Merge | Support the decoder with one clear official-source note |
| Local-zoning source card | Merge | Put the statewide-versus-local boundary directly after the answer |
| Construction-code card | Replace | Use current 2024 IRC / 2026 amendments; label Appendix BB enforceability as unresolved without written confirmation |
| What this page cannot verify | Compress | One short boundary after the useful answer; remove repeated caution language |
| Offices to contact | Replace | Give an ordered route based on incorporated city versus unincorporated county, then building authority and DCA as needed |
| Verification checklist | Merge | Rewrite it into the answer flow: ask for category evidence, intended-use answer, parcel rule, code path, and written response; keep generic due diligence secondary |
| Placement-tool handoff | Keep | Route the parcel workflow after classification is understood |
| Footer | Keep once | One concise scope reminder and current review date |

## Required Decision Artifact

The core artifact is a four-row classification decoder, not another article:

| DCA category | Evidence to request before relying on the label | Next question |
|---|---|---|
| Recreational vehicle | Title/registration, manufacturer documents, applicable RV standard or certification, dimensions and mobility details | Does this jurisdiction allow this RV category for the intended use and duration on this parcel? |
| Manufactured/mobile home | HUD label/data plate and installation documents, or the exact reason the seller says this category applies | Does the unit qualify under the relevant manufactured-home rules, and is this use allowed on the parcel? |
| Residential modular/industrialized building | Georgia program insignia or approval documents, plans, module manufacturer, and installation/foundation scope | Which local permits, site work, foundation, and inspections remain after state-program review? |
| Site-built dwelling | Plans, proposed foundation, code edition/path, and contractor or designer scope | Do local zoning and the building authority allow this dwelling and intended use on the parcel, and what written approvals are required? |

The final page must source and refine the exact category evidence during
implementation review. It must not state that a category, badge, title, label,
or code compliance proves siting or occupancy permission.

## Ordered Local Questions

The repaired page should give a short script, with no claim that the answer is
known:

1. Is this parcel inside an incorporated city or in unincorporated county
   jurisdiction?
2. For the attached unit documents, what structure category does your office
   use?
3. Is that category allowed for the intended primary, accessory, temporary, or
   recreational use on this parcel?
4. Which zoning, building-code, foundation, installation, utility, septic,
   access, and inspection approvals apply?
5. For a site-built tiny dwelling, does this authority enforce Appendix BB or
   another approved code path, and can it identify the written adoption or
   code reference?
6. Can the answer and source be provided in writing before a deposit, land
   contingency, delivery, or construction commitment expires?

## Architecture And Measurement

- Keep one Georgia URL. It owns state classification orientation before a
  local placement check, not county-by-county permission.
- Keep the national placement workflow as the parcel-level handoff.
- Do not add county pages from this research. A future local page would need a
  distinct user job, official-source coverage, demand/SERP evidence, and a
  maintenance path.
- After release, verify first-screen usefulness at desktop, 390px, and 320px;
  every-section distinctness; current source links; canonical; sitemap
  last-modified date; and production text/source invariants.
- GSC observation remains directional. Success first means a useful,
  source-current answer for a real Georgia reader, not an immediate impression
  or click threshold.

## Promoted Action

Promote one separately implementable action: `THC-GA-001`, an answer-first and
source-current repair of the existing Georgia classification guide.

The implementation action may edit only its separately frozen paths after it
is selected. It must use this research as causal evidence, run focused and full
native QA, pass desktop/mobile/320px rendered checks, receive independent
persona/every-section/source review, and verify the live release. It must not
create a new URL, county directory, statewide placement answer, indexing
request, vendor recommendation, cost claim, outreach, or external mutation.
