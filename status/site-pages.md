# Tiny Home Clarity Page Status

Last updated: 2026-08-10

Sources:

- Current public-safe GSC snapshot: `ops/gsc-snapshots/2026-08-09.md`
- Visibility diagnosis: `docs/research/tiny-home-visibility-diagnosis-2026-08-01.md`
- Full-site decision pack: `docs/research/tiny-home-clarity-full-site-decision-pack-2026-07-28.md`
- Current roadmap: `ops/seo-roadmap.md`

The page table is a durable decision record, not a daily dashboard. Update it
when a page role, indexing state, release state, blocker, or material decision
changes. Daily search evidence remains in `ops/gsc-snapshots/`. Page-level
average position is not a query-specific rank, and third-party demand estimates
are directional rather than guaranteed traffic.

## August 9 Monitoring Overlay

The August 9 snapshot is finalized through August 7. The sitemap is successful
with seven discovered URLs and no sitemap errors or warnings. Five URLs are
indexed. The under-$20K and build-options URLs are sitemap-discovered but URL
Inspection currently reports both as `URL is unknown to Google`; the collector
itself has no unknown inspection result. Rolling performance is 21 impressions,
0 clicks, and page-average position 32.24, with six consecutive finalized
zero-impression days. This is
weak organic visibility, but the healthy sitemap, allowed indexing, successful
fetches on indexed pages, and prior manual-action/security checks do not support
a technical outage or site-wide rewrite.

| Page | Primary role | August 9 GSC signal | Current state | Review coverage | Next eligible decision |
|---|---|---|---|---|---|
| `https://tinyhomeclarity.com/` | National placement decision hub | 6 impressions, 0 clicks, page-average position 49.17; indexed; last crawled July 30 | Live and released in `7f9ea5f`; Pages run `30390104298` passed | Full every-section, decision-persona, experience-level, browser, and independent review | Observe query fit. Change only for a verified usefulness, source-freshness, or technical defect. |
| `https://tinyhomeclarity.com/los-angeles-tiny-house-adu/` | Los Angeles mixed-intent buyer-protection and official-source guide | 4 impressions, 0 clicks, page-average position 14; indexed; last crawled July 12 | Live and repaired in `THC-QUAL-001` | Searcher-POV and beginner/intermediate/advanced review complete | Observe. Four impressions cannot establish a stable rank or justify another rewrite. |
| `https://tinyhomeclarity.com/san-diego-tiny-house-adu/` | San Diego jurisdiction-first buyer-protection and official-source guide | 4 impressions, 0 clicks, page-average position 40.5; indexed; last crawled July 24 | Live and production-verified in `daaf743`; Pages run `30399382114` passed | SERP, official-source, persona, experience-level, every-section, responsive, routing, and independent review complete | Observe. Revisit only for a source change, a concrete reader gap, or material query evidence. |
| `https://tinyhomeclarity.com/georgia-tiny-house-classification/` | Georgia structure-classification explainer before local zoning | 5 impressions, 0 clicks, page-average position 22.4; indexed; last crawled July 24 | Live and indexed | SERP, decision-persona, experience-level, and every-section audit complete | Hold. Demand remains `UNKNOWN`; do not prioritize another repair from this tiny sample. |
| `https://tinyhomeclarity.com/tiny-home-cost-calculator/` | Quote and build-budget reality check with explicit unknowns | 2 impressions, 0 clicks, page-average position 26; indexed; last crawled July 21 | Live and production-verified in `1af1dc2`; Pages run `30460242431` passed | Current SERP, persona, experience-level, state, native, browser, production, and independent review complete | Observe. Retain the recorded nonblocking blank-buffer-title P3 for a later evidence-led action. |
| `https://tinyhomeclarity.com/tiny-house-under-20k/` | Buyer-protective feasibility checker for under-$20K claims | No page row; sitemap-discovered; URL Inspection says `URL is unknown to Google`; never crawled in current inspection evidence | Live and in the sitemap | SERP, decision-persona, experience-level, and every-section audit complete | Observe discovery. Do not request indexing repeatedly or rewrite from absent performance. Later consolidation into the cost calculator remains a held quality option. |
| `https://tinyhomeclarity.com/tiny-house-build-options/` | National plans/kits/shells/trailer/builders responsibility comparison | No page row; sitemap-discovered; URL Inspection says `URL is unknown to Google`; never crawled in current inspection evidence | Live and production-verified in `1895694`; Pages run `30622059848` passed | Demand, SERP/ranking-page, official-source, persona, experience-level, every-section, native, browser, and independent review complete | Observe discovery. Do not request indexing or infer performance before the page is crawled and measured. |
| `https://tinyhomeclarity.com/buying-land-for-a-tiny-house/` | Parcel-specific pre-offer evidence and unresolved-question workflow | Not in the August 9 sitemap or GSC evidence | Live and production-verified in `b9760e9`; Pages run `31395122993` passed | Demand/SERP/user-job brief, persona and experience matrix, focused logic tests, rendered desktop/mobile states, privacy, populated print, native QA, and independent cycles 2/3 `PASS` | Observe crawl, index, and query testing. Do not rewrite from absent early performance. |

## Build Then Observe Phase

The current portfolio is eight reviewed public assets. The verified
`THC-LAND-001` release starts the 90-day portfolio observation period from
2026-08-10 through 2026-11-08 with no further indexable page publication.

The daily GSC sensor continues during that period. A new content action may
interrupt the hold only for a material technical/indexing defect, an official
source change, a repeated query/page signal that exposes a specific unmet job,
or a new direct user decision. The formal 90-day review should decide among:

- deepen a page or cluster showing repeated impressions and improving position;
- repair query promise or searcher usefulness where impressions recur but
  clicks and fit remain weak;
- investigate discovery if reviewed sitemap URLs remain uncrawled or
  unindexed; or
- pause the project if indexed pages still show no durable search testing and
  no credible authority or direct-use signal.

## Released Decision Surface

`THC-LAND-001` is the sole product promoted by the 2026-08-04 user-value
audit. Its live page at `/buying-land-for-a-tiny-house/` is a
parcel-specific, pre-offer evidence workflow, distinct from the homepage's
broad placement triage, the build-options responsibility comparison, and the
quote-first cost calculator. It organizes unknown, claim-only, source-saved,
and conflicting evidence without declaring a parcel legal, approved, or
buildable. Commit `b9760e93fb43ea7560963ef419e9b80421bc642b` and Pages run
`31395122993` were production-verified on 2026-08-10.

`THC-COST-001` remains the held implementation/research source and
`THC-COST-002` is released. `THC-BUILD-002` produced one fixed national
plans/kits/shells/trailers/builders comparison and due-diligence candidate, but
it is held and unreleased after exhausting its review cap. It is not a
directory, vendor ranking, cost guide, or local permit answer.

## Promoted Implementation

`THC-COST-002`: released and production-verified the complete calculator
candidate inherited from `THC-COST-001`. The query evidence,
ranking-page sample, decision-persona and experience-level review,
every-section decisions, state contract, tests, and release invariants are in
`docs/research/tiny-home-cost-calculator-refresh-2026-07-29.md`.

`THC-BUILD-002`: the exact local
`https://tinyhomeclarity.com/tiny-house-build-options/` candidate is built from
the completed brief and current evidence. Local native and responsive QA pass
and all findings are fixed. The source action remains held because its review
cap was exhausted; `THC-BUILD-003` supplied the separate continuation and
production-verified the page.
