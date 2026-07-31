# Implementation Backlog

Last updated: 2026-07-29

This is a supporting implementation inventory. `ops/seo-roadmap.json` is the
durable execution queue; backlog headings do not authorize work.

## Operating Baseline

- `THC-OPS-001`: completed on 2026-07-28 with no `site/**` change.
- `THC-OPS-002`: completed on 2026-07-28; substantive actions remain serial
  but no longer have a fixed daily quota.
- The Master is the only repository writer. Implementation support is read-only
  and does not select work from this backlog.

## Active

- `THC-BUILD-003`: fresh independent review and conditional release of the
  exact fixed 19-path build-options candidate. No new implementation or
  research is authorized. Two fresh review cycles returned `PASS`; final
  frozen-state verification and release remain.

## Held Source Candidate

- `THC-BUILD-002`: build one national plans/kits/shells/trailer/builder
  comparison and due-diligence page at `/tiny-house-build-options/`, with an
  original worksite image, focused tests, homepage/sitemap integration, and
  exact-path review/release controls. The exact candidate, local QA, and all
  findings are complete, but the action exhausted three cycles without a
  release verdict. A separate continuation is required.

## Prior Held Review Candidate

- `THC-COST-001`: repair the existing cost calculator around quote-first input,
  honest blank/partial/resolved states, four distinct outside-cost states,
  project-path context, separate utility buckets, progressive disclosure,
  focused tests, and current searcher/SERP evidence.
- Research and implementation are complete in the working tree. Nineteen
  focused calculator tests, inherited full native QA, and responsive browser
  checks are green. All `THC-COST-001` cycle 1-3 findings and
  `THC-COST-002` cycle 1 findings are fixed.
- Cycle 3 itself returned `FAIL`, exhausting the review cap. The candidate is
  uncommitted and unreleased. `THC-COST-002` now owns the separately registered
  fresh review-and-release continuation.
- Frozen to the 17 paths in `ops/seo-roadmap.json`. Do not absorb the under-$20K
  implementation, homepage, local guides, or national build asset.

## Released

- `THC-COST-002`: quote-first cost calculator released in `1af1dc2`; Pages run
  `30460242431` and production byte/interaction checks passed. Independent
  review returned `PASS_WITH_P3`; one nonblocking buffer-title wording note is
  deferred to a separate future action.
- `THC-SD-001`: repaired the existing San Diego guide around current City
  section 141.0318, the separate unincorporated-County THOW determination, and
  an explicit stop for other incorporated cities.
- Research, City/County source data, exact homepage routing, canonical,
  sitemap, native/browser QA, and independent review passed.
- Released in `daaf743`; Pages run `30399382114` and production checks passed.
- `THC-HOME-001`: rebuild the homepage placement hub around a source-backed
  buyer decision path.
- Exact future scope and acceptance criteria are recorded in
  `docs/research/tiny-home-clarity-full-site-decision-pack-2026-07-28.md`.
- The implementation must remove fake location precision, visible internal
  record fields, repeated cautions/checklists, and unclear supported-location
  routing. It must teach classification before asking for it and return an
  honest next action rather than a generic "low confidence" plan.
- `THC-RES-001` is review-clean and pushed in `2400e13`; the homepage action is
  now selected. Do not absorb another page repair.
- Homepage implementation and native/visual QA are complete.
- Independent review returned `PASS` on cycle 3 with no P0-P3 findings.
- Released in `7f9ea5f`; Pages run `30390104298` and production checks passed.

## Candidates, Not Selected

- `THC-BUILD-002`: national build decision / builder due-diligence asset.
- Georgia classification repair and under-$20K consolidation/indexing
  diagnosis remain candidates after the active calculator transaction.
- Do not build ADU-builder city pages, a builder directory, or a location-page
  batch.

## Monitor

- Keep the MVP as general national triage plus a small number of official-source examples. Do not create state pages or broad state-level permission claims.
- Optional polish: align homepage `Page last reviewed` labels to `2026-07-09` on the next homepage edit if the operator wants the support-cluster link update reflected in homepage freshness.

## Completed

- Repaired the existing Los Angeles and San Diego pages using
  `briefs/la-san-diego-page-repair-2026-07-18.md` and
  `reviews/la-san-diego-human-searcher-review-2026-07-18.md`.
- Rebuilt the top halves around human searcher tasks, early city/county stop
  conditions, listing/builder claim tables, city-specific adjacent-intent notes,
  and local-specific CTAs.
- The repaired pages passed independent human-searcher implementation review
  with verdict `PASS`; detailed notes are in
  `reviews/la-san-diego-human-searcher-implementation-review-2026-07-18.md`.
- Built the first `Where Can I Put a Tiny House?` MVP page/tool in `site/index.html` with responsive styling in `site/styles.css`.
- Added general-only triage output, low-confidence unsupported-location handling, official-source field preservation, and an on-page checklist preview while email provider remains `UNKNOWN`.
- Added launch-readiness improvements: official-source starter links, buyer-facing local-record note, non-link planned tool cards, and `Page last reviewed: 2026-07-08`.
- Applied final launch fixes: public-facing site brand is now `Tiny Home Clarity`, and `--subtle` was darkened to `#59665d` for contrast.
- Added the approved first official-source records to `site/data/local-records.json`: Los Angeles MTH-as-ADU, San Diego MTH/ADU-related path, and Georgia DCA state classification.
- Updated record rendering so Los Angeles and San Diego are city examples only, Georgia DCA is a state classification source, and unsupported locations keep low-confidence general triage.
- Built the first constrained support cluster from `briefs/local-source-support-pages-2026-07-09.md`: Los Angeles, San Diego, and Georgia classification pages.
- Linked homepage official-source record cards to the matching support pages and made one official source link visible by default on each card.
- Added the three support page URLs to `site/sitemap.xml` with `2026-07-09` lastmod dates.
- Built the `Tiny Home Cost Calculator` page from `briefs/tiny-home-cost-calculator-2026-07-10.md`.
- Linked the homepage planned cost-calculator card to the live calculator and kept unrelated planned assets as non-link cards.
- Added the cost-calculator URL to `site/sitemap.xml` with `2026-07-10` lastmod.
- Built the `Can You Build a Tiny House for Under $20K?` page from `briefs/tiny-house-under-20k-2026-07-13.md`.
- Linked the homepage planned `$20K` card to the local candidate page and kept unrelated planned assets as non-link cards; it becomes live only after an authorized deployment.
- Added the `$20K` page URL to `site/sitemap.xml` with `2026-07-13` lastmod.

## Needs SEO Research & Review

- No active implementation blocker from SEO review. Rendered official-source record review passed with verdict `launch`.
- Support-cluster review passed with verdict `launch`; no implementation rerun is required before Master commits/pushes.
- `$20K` page review passed with verdict `launch`; no implementation rerun is required before the authorized release.
- Maintain local records as static JSON for the MVP, preferably `site/data/local-records.json`.

## Infrastructure / Later Gates

- GitHub Pages, `site/CNAME`, custom-domain sitemap URLs, HTTPS, and read-only
  GSC collection are already operational.
- Analytics is deferred until meaningful traffic or a specific product question requires on-site analytics.
- Add email capture form after provider choice.

## Later Product Work

- Tiny House Toilet Options Calculator.
- Tiny Home Builder / Vendor Due Diligence Checklist.
