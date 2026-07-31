# Tiny House Build Options Searcher Review

Date: 2026-07-29

Action: `THC-BUILD-002`

Target query families: tiny-house plans, kits, shells, trailers, builders, and
build-option comparisons.

## Review Standard

This review applies:

- The primary decision-job persona.
- Beginner, intermediate, and advanced experience-level passes.
- Every visible section, not only the headline and introduction.
- Claim safety, source scope, repetition, accessibility, technical SEO, and
  mobile containment.

A page that is cautious but does not help the searcher compare paths fails.

## Searcher Verdict Before Implementation

Proceed with one comparison and due-diligence page. Do not build a directory,
catalog, generic construction article, or intent router.

The page earns its URL only if it helps the reader see the responsibility
handoffs hidden behind common product labels.

## Persona Passes

### Decision job

The reader must be able to answer:

- What am I buying?
- Which work and risk become mine?
- What written proof should exist before I pay?
- Which questions still belong to a local office or professional?

### Beginner

Required:

- Define each path through responsibilities, not industry jargon.
- Explain that a plan is not a build, a trailer record is not dwelling
  approval, and a shell is not a finished home.
- Put the comparison before detailed source notes.

Avoid:

- Opening with standards acronyms.
- Treating "kit" or "turnkey" as a standardized scope.
- Repeating uncertainty without giving the reader a next action.

### Intermediate

Required:

- Show who owns design, labor, systems, transport, site work, and inspections.
- Name contract and quote gaps.
- Connect product choice to placement and project-budget checks.

Avoid:

- Generic advice such as "do your research."
- A single undifferentiated builder checklist.

### Advanced

Required:

- Request plan-set contents, design criteria, engineering, bills of materials,
  substitutions, chassis and weight records, standards and labels, inspection
  records, correction terms, and warranty exclusions.
- Attribute official and industry sources separately.

Avoid:

- Implying a document proves more than its issuing program covers.

## Every-Section Review

| Section | Searcher question | Required answer | Decision |
| --- | --- | --- | --- |
| First screen | What matters before I compare prices? | The option changes who owns major work and proof | Keep direct; no intent router |
| Comparison | How are these seven paths actually different? | Responsibility, likely fit, written proof, and unresolved decisions | Use one scannable table |
| Scope explanation | Why can similar offers be misleading? | Product labels do not standardize inclusions | Use concrete examples |
| Documents | What do I ask for? | Seven grouped written records | Use commands the buyer can reuse |
| Red flags | When should I slow down? | Specific unsupported or pressure-based claims | Keep separate from normal unknowns |
| Sources | Which claims can I verify? | Direct links plus program and adoption boundaries | Put after the decision aid |
| Next steps | What should I do after choosing a path? | Run placement and project-budget checks before deposit | Link to existing tools |

## Repetition And Language

- Say "does not prove placement or occupancy" where the distinction first
  matters and in the source boundary, not in every row.
- Use "get in writing" for actionable records, not as an empty repeated
  warning.
- Use "may fit when" instead of declaring a universally best option.
- Avoid "we cannot verify" as a section theme. State which party or office owns
  the unresolved decision.
- Explain THOW once as "tiny house on wheels (THOW)" before using the acronym.

## Source And Claim Pass

Allowed with scope:

- ICC model-code provisions can identify a possible standard or code path;
  adoption and acceptance vary.
- HUD certification labels belong to the manufactured-home program, not all
  tiny homes.
- NHTSA trailer manufacturer, VIN, certification-label, and GVWR records do not
  establish residential use.
- FTC contractor guidance supports written estimates/contracts and avoiding
  full upfront payment pressure; licensing rules vary.
- RVIA product-standard and intended-use statements must be labeled as
  industry guidance.

Not allowed:

- Vendor-authored price, timeline, completeness, or performance claims.
- Rankings, recommendations, referrals, or "vetted" language.
- Typical or all-in price figures.
- National legal, permit, financing, insurance, or occupancy answers.

## Technical And Visual Acceptance

- One H1, a unique title and description, and an explicit canonical.
- Original image has useful alt text, fixed dimensions, and responsive
  containment.
- Table headers use `scope="col"` and the table remains usable at 390px and
  320px.
- Page works without JavaScript.
- Internal links resolve; homepage and sitemap expose the URL.
- Keyboard focus remains visible and no content overlaps or clips.

## Release Gate

### Rendered implementation pass

- The first screen gives the responsibility answer before definitions,
  standards, or classification questions.
- At 1440px, the original worksite image remains useful while the beginning of
  the comparison surface is visible in the initial viewport.
- At 390px and 320x568/700/844, the image becomes a compact visual band and the
  next section remains visible. There is no horizontal overflow.
- At narrow widths, each table row becomes a labeled record with `May fit
  when`, `You inherit`, `Get in writing`, and `Separate answer`; the semantic
  column and row headers remain in the HTML.
- The seven document groups remain readable as single-column records, the
  image loads, and the browser console reports no warnings or errors.
- The page works without JavaScript and homepage, sitemap, canonical, source,
  and internal links pass focused and site QA.

### Independent cycle 1

Reviewer `019fb0a9-b3ae-7d61-88aa-029533866535` returned `FAIL` with:

- P2: insufficiently reproducible SERP evidence.
- P2: four CPC values marked `UNKNOWN` despite retained values.
- P2: first-viewport evidence did not cover a shorter 320px viewport.
- P3: the mobile card layout retained a false scroll focus stop.

All findings are fixed. The research record now retains exact ranking samples
and CPC values. The <=360px first screen exposes the comparison eyebrow at
320x568 and 320x700 without overflow. Mobile cards no longer claim or create a
scrollable focus region, and a focused regression test protects that behavior.

Status: `AWAITING_CYCLE_2_REVIEW`.

### Independent cycle 2

The same read-only reviewer verified every cycle 1 fix, all three personas,
every section, claim and source boundaries, the exact 19 paths, 6/6 focused
tests, 51/51 full tests, and the complete responsive matrix. It returned
`FAIL` for one P2 stale operator word: `ops/current-cycle.md` said five focused
tests rather than six.

The count is corrected without changing the page or research candidate.

Status: `AWAITING_CYCLE_3_REVIEW`.

### Independent cycle 3

The reviewer again confirmed every page, research, persona, claim, responsive,
scope, and QA gate. It returned `FAIL` because two current-state mirrors still
described cycle 2 as pending or as the release gate. Both mirrors are fixed.

Status: `HELD_AFTER_REVIEW_CAP`.

The candidate remains uncommitted and unreleased. A separate registered
continuation with a fresh independent reviewer is required.

## THC-BUILD-003 Continuation

`THC-BUILD-003` inherits this exact fixed 19-path candidate for fresh
independent review and conditional release only. It does not authorize new
research, content, design, or scope.

Status: `AWAITING_FRESH_REVIEW`.

### THC-BUILD-003 fresh cycle 1

Fresh independent reviewer `019fb78f-65a1-7e90-b528-8dfac328418f` returned
`PASS` with no findings on the complete 19-path candidate. Every persona,
visible section, evidence, claim, responsive, SEO, accessibility, test, and
durable-state gate passed.

After the verdict, the repository fast-forwarded compatible automated GSC
snapshot commit `3b8c3a6`. The July 30 material metrics are unchanged versus
July 29. A fast final review of the reconciled base and current-state mirrors is
pending.

### THC-BUILD-003 fresh cycle 2

The same independent read-only reviewer reviewed the complete candidate from
reconciled base `3b8c3a6e085c4d19d4307a6b328c7de481728416` and returned
`PASS` with no findings. It confirmed the GSC commit is outside the exact
19-path action diff and every page, evidence, persona, claim, responsive,
scope, and QA gate remains clean.

Status: `REVIEW_CLEAN_COMMIT_PENDING`.

### THC-BUILD-003 fresh cycle 3 and release

The final frozen-candidate review returned `PASS` with no findings. The exact
19 paths were committed and pushed in
`18956949f0fe2748f13f0c71505dadf927a63150`.

Pages run `30622059848` succeeded. The live page, image, stylesheet, homepage,
and sitemap byte-match the repository. Production desktop, 390px, and
320x568 checks passed with no overflow or console issue.

Status: `PRODUCTION_VERIFIED`.
