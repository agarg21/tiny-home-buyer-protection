# Tiny Home Search And Product Playbook

Status: operating guide

Prepared: 2026-07-28; last updated: 2026-08-22

Owner: Tiny Home Clarity Master / Operator

## Purpose

Use this process to research, choose, build, review, release, and measure one
buyer-protection decision surface at a time.

The goal is not to turn keywords into articles. It is to understand the
searcher's decision, determine what current results satisfy, identify what Tiny
Home Clarity can support honestly, and improve one page or tool without
overstating legality, cost, vendor quality, or personal experience.

## Principles

1. Search research is product input, not a page quota.
2. Use GSC, current keyword estimates, observed SERPs, ranking pages, official
   sources, and qualitative community questions for their proper evidence
   classes.
3. Do not add close variants or adjacent intents and present the total as unique
   addressable traffic.
4. Cluster queries only when the same ranking pages or page types and the same
   user job recur.
5. Treat `tiny house`, `tiny home`, THOW, park model, RV, manufactured,
   modular, foundation home, ADU, kit, shell, community, and short stay as
   potentially different objects. Do not merge them because sellers do.
6. Derive decision personas from observed queries, SERPs, questions, and
   failure modes. Experience level is a second review axis.
7. Audit every current page and every visible section before choosing a revamp.
8. Prefer improving an existing page before creating a new URL.
9. Promote at most one implementation action from a research transaction;
   `no-build` is valid.
10. Keep source-backed answers direct. Uncertainty should narrow the next step,
    not make the page useless.
11. Keep the default view useful before requiring a reader to classify
    themselves or configure a tool.
12. Let changed evidence, a concrete product gap, or direct user instruction
    trigger work. Scan cadence alone does not.
13. Treat generic-but-safe content as a P2 usefulness failure. Safety,
    technical SEO, source count, length, and polish cannot compensate for a
    missing human-usefulness delta.
14. Accept `no-build` as a successful research or review result.
15. Close the learning loop after every substantive run: preserve the human
    question, domain learning, SEO learning, useful result, feedback, and next
    falsifiable decision.
16. Improve the operating system only from a concrete failure, reviewer
    finding, or repeated friction. Do not manufacture process work from cadence.

## Stage 0: Operating Gate

Before substantive work:

- determine whether the action is a valid Control Room dispatch or a direct
  manual user instruction;
- validate the dispatch lease when applicable;
- reconcile local `main` with `origin/main`;
- preserve unrelated dirty work;
- compare the newest and prior GSC snapshots;
- classify GSC as causal evidence, monitoring context, stale, or unavailable;
- record one action ID, exact paths, transaction type, human gates, and release
  boundary before editing; and
- keep the Master / Operator as the only repository writer.

Stop on an invalid lease, divergence, unsafe overlap, missing required human
authority, or a trust-sensitive claim that the available evidence cannot
support.

## Stage 1: Define The Decision Surface

Write down:

- target query family;
- likely searcher situation;
- decision object: parcel, structure, plans, kit, shell, trailer, builder,
  quote, permit path, cost, community, or another explicit object;
- job-to-be-done;
- first-screen question and answer;
- next action the reader should be able to take;
- concrete result, comparison, evidence artifact, or narrowed decision the
  page will produce;
- usefulness delta versus current Tiny Home Clarity pages and representative
  ranking pages;
- adjacent intents the page should route or exclude; and
- claims that require official, local, transactional, or human evidence.

Do not select a page from one headline-volume query alone.

### Non-Compensable Usefulness Gate

Before promoting a page, answer all five tests:

1. **Topic-swap test:** would the structure and advice still read coherently if
   the topic or city name were replaced? If yes, it is too generic.
2. **Paraphrase test:** does the page mostly restate common advice or ranking
   pages without making a decision easier? If yes, it adds no product value.
3. **Output test:** what concrete result, comparison, evidence file, checklist,
   or narrowed next step does the reader leave with?
4. **Removal test:** which sections add nothing to comprehension, evidence,
   safety, trust, accessibility, navigation, the reader's decision, or the
   concrete output? Compress, remove, or replace them. An isolated weak section
   is not automatically a page-level failure.
5. **Rendered-state test:** does the first viewport and, for tools, each
   realistic input/result state deliver the promised job in human terms?

A cautious page that repeatedly says what it cannot verify still fails when it
does not narrow the decision. Page-level P2 applies when generic content is
material or dominant, obscures the primary job, or leaves no concrete output.
When these tests cannot pass, consolidate, noindex, monitor, or record
`no-build` instead of creating an indexable URL.

## Stage 2: Build The Query Universe

Sample the relevant families:

- placement and zoning;
- structure classification;
- land and parcel checks;
- build, plans, kits, shells, trailers, and THOWs;
- builders, contractors, quotes, contracts, and deposits;
- costs, budgets, financing, insurance, delivery, utilities, and setup;
- local city, county, state, and "near me" modifiers;
- communities, parks, rentals, and short stays;
- comparison, alternatives, mistakes, legality, worth-it, and due-diligence
  questions; and
- terminology and category confusion revealed by suggestions, GSC, SERPs, and
  community questions.

Record exact query, market, source, collection date, volume/KD/CPC when
available, likely job, and overlap caveat. `UNKNOWN` is not zero.

Output: a bounded query-universe table broad enough to reveal page boundaries.

## Stage 3: Collect SERP-Overlap Evidence

For representative queries record:

| Field | Requirement |
|---|---|
| Collection date | Exact date |
| Query and market | Exact phrase and geography |
| Searcher job | The decision the result must support |
| Ranking URLs/domains | Retained representative results |
| Page type | Official, vendor, marketplace, guide, tool, forum, video, local/map, news |
| SERP features | AI summary, PAA, local pack, shopping, video, forums, featured snippet |
| Overlap | Exact URL, domain-only, page-type, or `UNKNOWN` |
| Decision | Merge, split, route, module, or defer |
| Confidence | High, medium, or low with reason |

Keep Sample A and Sample B when an overlap conclusion drives architecture. Do
not count a URL that was not retained. Split when the decision object or
ranking page type materially changes.

## Stage 4: Inspect Ranking Pages

Open representative:

- official or regulatory sources;
- vendors/builders when they rank;
- marketplaces or directories;
- specialist publishers;
- tools/calculators;
- forums or community results; and
- smaller pages that rank despite weaker apparent authority.

For each document:

- what it answers well;
- what remains difficult to compare or verify;
- what is stale, repetitive, promotional, generic, or weakly evidenced;
- what authority, inventory, firsthand experience, or legal role we cannot
  copy; and
- what source synthesis, comparison, conflict handling, calculator logic,
  document checklist, or verification workflow we can honestly improve.

Community discussions are question and failure-mode evidence only. They are not
demand, legal facts, vendor verification, or representative customer evidence.

## Stage 5: Derive Two-Axis Personas

Use a small set of decision-job hypotheses, normally four to six:

- category/orientation searcher;
- parcel or placement evaluator;
- plans/kit/shell/trailer/builder comparer;
- quote or budget reality checker; and
- advanced permit/source verifier.

Change the set when evidence supports different jobs. Do not invent
demographics.

For each decision persona record:

- ID and name;
- job-to-be-done;
- context;
- anxieties;
- decision criteria;
- failure mode;
- evidence basis;
- query families; and
- pages served.

Then review each relevant page across experience levels:

- beginner: needs translated terms, orientation, and a concrete first step;
- intermediate: needs comparison, red flags, exclusions, and verification
  questions; and
- advanced: needs jurisdiction and source scope, documents, edge cases,
  conflicts, and exact offices or records to verify.

Decision job and experience level are separate axes. Personas are review lenses,
not automatic pages.

## Stage 6: Audit Every Page And Section

For every canonical/indexable page record:

- full URL and repository path;
- primary job and query family;
- GSC baseline and indexing state;
- directional demand;
- decision and experience personas served;
- current strengths;
- missing decision support;
- evidence and trust gaps;
- internal-link gaps;
- overlap/cannibalization risk;
- verdict: keep, expand, consolidate, observe, retire, or noindex; and
- next eligible action and blocker.

For any implementation candidate, review every visible block: hero, opening,
tool/form, result, cards, tables, checklists, FAQs, sources, trust copy, and
next-step links.

Label each block:

- `keep`
- `compress`
- `merge`
- `move`
- `replace`
- `remove`

Judge user value, search intent, persona usefulness, scan cost, within-page
repetition, source support, unsupported firmness, and promised-versus-delivered
content.

## Stage 7: Decide Page Architecture

Assign one primary job to each URL. Prefer modules or tool states when a
modifier is useful but does not have a distinct result set.

Before proposing a new URL, answer:

1. Which observed SERPs require a different page type?
2. Which current URL cannot satisfy the job without becoming confusing?
3. Which page could it cannibalize?
4. Can it receive useful internal links?
5. Can official/source evidence and a refresh workflow keep it useful?
6. What concrete usefulness delta survives the topic-swap, paraphrase, output,
   removal, and rendered-state tests?

## Stage 8: Promote One Action

Promote at most one bounded action unless the user explicitly authorizes a
larger batch. `No-build` is a valid completed outcome when no candidate passes
the usefulness and evidence gates.

Define:

- one target URL or research artifact;
- exact paths;
- required evidence work;
- primary decision persona and experience levels;
- first-screen and every-section acceptance criteria;
- claim and human-review boundaries;
- internal-link behavior;
- native, focused, visual, privacy, and independent-review QA;
- release invariants; and
- measurement plan.

The action must name its concrete user output and define realistic rendered
scenarios that prove it works for the primary decision persona and the relevant
beginner, intermediate, and advanced experience levels.

Do not promote a new local-page batch, builder directory, vendor
recommendation, complete/typical cost claim, legal conclusion, or external
account mutation without the explicit gate required by `AGENTS.md`.

## Stage 9: Implement And Review

1. Re-read the frozen action.
2. Refresh volatile facts and inspect a wider candidate/evidence pool.
3. Keep a retained/deferred ledger when the page compares options.
4. Update source or reusable data paths before repeated rendered copies.
5. Keep claims proportional to evidence and turn conflicts into explicit
   checks.
6. Prove unrelated outputs are unchanged.
7. Run focused tests, all repository tests, site QA, state QA, JSON validation,
   responsive browser checks, interaction checks, source/link checks, privacy
   checks, and `git diff --check` as applicable.
8. Inspect the rendered first viewport and every visible section as the target
   searcher; source-only review is insufficient for page work.
9. For tools, exercise realistic beginner, intermediate, advanced, blank,
   incomplete, conflicting, and unresolved states.
10. Invoke a different independent read-only reviewer on the complete diff.
11. Fix P0-P2 and re-review for at most three cycles.
12. Proceed only on `PASS` or `PASS_WITH_P3`.

## Stage 10: Release And Close

Before push:

- stage exact paths only;
- inspect the complete staged diff and unpushed range;
- fetch origin and require no divergence; and
- ensure every substantive commit is action-recorded and review-clean.

For deployable work, verify the native Pages run, pushed SHA/release marker,
production SEO availability, and action-specific content or behavior
invariants.

For a Control Room dispatch, keep post-release workflow and production evidence
in its handback. A deployable direct-manual action must predeclare exact
release-closeout paths in its frozen scope. After push, deployment, and
production verification, the Master may add only mechanical release evidence
to those paths, rerun applicable state and diff QA, obtain independent
read-only review of the closeout and complete action range, and push one
exact-path closeout commit under the same registered action. This controlled
closeout is part of the original transaction; an ad hoc historical backfill
still requires separate authority.

## Stage 11: Measure

Wait for a current crawl of a changed page. Use GSC to observe indexing,
impressions, clicks, CTR, page-level position, and discovered query families.
Do not infer causality from a tiny sample or a calendar date.

Continue only when:

- changed evidence reveals a concrete intent, content, or crawl gap;
- the decision pack already justifies the next page;
- a technical or trust defect preempts normal order; or
- the user directly changes priority.

## Stage 12: Research During Observation

An observation hold stops speculative publication, not bounded learning. After
new snapshots and due deterministic sensors are reconciled, consult
`status/research-rotation.md`. Select at most one real human question from:

- an existing page's rendered first-screen, persona, or every-section gap;
- a query/SERP mismatch that may change a current page's job;
- a material official-source freshness risk;
- internal overlap, cannibalization, or weak product handoff; or
- a recent community question that can receive a high-quality standalone
  answer.

Freeze a research-only action before starting. Preserve the current page,
query, sources, personas, section dispositions, unknowns, and one result:
`keep`, `repair`, `consolidate`, `needs-evidence`, `draft-answer`, or
`no-build`. Promote at most one future action. Low impressions alone cannot
select a rewrite, and a research result cannot silently become implementation.

Community work is draft-only. Use
`templates/community-answer-review-prompt.md`; the answer must work without a
site link, sound human, avoid invented experience and unsupported claims, and
disclose any proposed affiliation. The user must approve the exact answer and
destination before any external action.

## Stage 13: Close The Learning Loop

Before closing a substantive transaction, compare its original human question
and usefulness hypothesis with the evidence produced.

Record only durable learning:

- domain: terminology, decision objects, official-source boundaries, common
  failure modes, or facts that would change the answer;
- SEO: query intent, result composition, ranking-page advantages, GSC behavior,
  discovery/indexing state, or the site's defensible usefulness delta;
- human value: what concrete result or ordered next step became better, or why
  `keep`, `needs-evidence`, or `no-build` is the useful outcome;
- failure: a disproved assumption, misleading state, weak section, reviewer
  finding, or evidence gap; and
- system: one reusable prompt, test, or protocol improvement only when the
  failure is concrete or repeated.

State what future observation could confirm or refute the conclusion. Persist
the learning in the action's research record, roadmap, decisions, progress, or
status rather than creating a redundant meta-process file.

## Required Durable Artifacts

- one full-site or cluster decision pack under `docs/research/`;
- `status/site-pages.md` as the durable page-role and implementation baseline;
- `status/research-rotation.md` as the due bounded research view during an
  observation hold;
- implementation-ready every-section audits;
- source/evidence records for volatile or trust-sensitive claims;
- roadmap and supporting backlogs linked by action ID;
- immutable independent-review evidence in `ops/operator-review.md`; and
- structured release/measurement evidence after publication.

## Reusable Review Stack

Every substantive page receives:

- query-intent and SERP-overlap review;
- representative ranking-page review;
- decision-persona and experience-level review;
- every-section editorial review;
- evidence, freshness, and claim-safety review;
- repetition and scan-friction review;
- topic-swap, paraphrase, concrete-output, removal, and rendered-state review;
- terminology, classification, and ADU/tiny-home boundary review;
- internal-link and cannibalization review;
- technical SEO and structured-data review;
- mobile/desktop visual and interaction review; and
- independent final read-only review.
