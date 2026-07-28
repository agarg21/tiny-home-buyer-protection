# Tiny Home Clarity Page Status

Baseline checked: 2026-07-28

GSC overlay: snapshot collected 2026-07-28 with finalized data through
2026-07-26. The six-page sitemap is healthy. Five of six priority URLs are
indexed. Performance is unchanged versus the 2026-07-27 snapshot, so these
small samples are monitoring context, not a revamp order.

| Page | Primary role | 2026-07-28 GSC overlay | Current state | Review coverage | Remaining / blocker |
|---|---|---|---|---|---|
| `https://tinyhomeclarity.com/` | National placement decision hub | 16 impressions, 0 clicks, page-level position 31.94 | Live, indexed, and released in `7f9ea5f` | Full every-section, decision-persona, and beginner/intermediate/advanced audit completed in `THC-RES-001`; implementation browser matrix and independent review passed | New four-factor first screen, category-first checker, honest source/general result split, static local routing, proof checklist, canonical, and sitemap date are live. Pages run `30390104298` and production invariants passed. |
| `https://tinyhomeclarity.com/los-angeles-tiny-house-adu/` | Los Angeles mixed-intent buyer-protection and official-source guide | 4 impressions, 0 clicks, page-level position 14 | Live, indexed, and repaired in `THC-QUAL-001` | Searcher-POV and beginner/intermediate/advanced review completed | Observe unless the full-site audit identifies a concrete unmet job or source/freshness defect. Do not infer stable ranking from four impressions. |
| `https://tinyhomeclarity.com/san-diego-tiny-house-adu/` | San Diego jurisdiction-first buyer-protection and official-source guide | 3 impressions, 0 clicks, page-level position 21 | Live and indexed; `THC-SD-001` implementation is review-clean and release-pending | Current SERP, official-source hierarchy, decision-persona, beginner/intermediate/advanced, and every-section research completed; responsive and routing QA passed; independent review returned `PASS` in cycle 2 | Working tree replaces the stale City ADU/companion framing with current City section 141.0318, adds the distinct unincorporated-County THOW path effective September 4, 2025, and keeps other incorporated cities out. Commit, push, Pages, and production verification remain. |
| `https://tinyhomeclarity.com/georgia-tiny-house-classification/` | Georgia structure-classification explainer before local zoning | 5 impressions, 0 clicks, page-level position 22.4 | Live and indexed | Current SERP, decision-persona, experience-level, and every-section audit completed | Answer-first repair is justified on human usefulness, but measured query demand remains `UNKNOWN`; keep behind homepage, San Diego, calculator, and build candidates. |
| `https://tinyhomeclarity.com/tiny-home-cost-calculator/` | Editable all-in planning calculator and seller-quote reality check | 2 impressions, 0 clicks, page-level position 26 | Live and indexed | Current calculator SERP, decision-persona, experience-level, and every-section audit completed | Repair blank/partial-result behavior, possible utility double counting, project-type assumptions, and quote-first progressive disclosure after the homepage. |
| `https://tinyhomeclarity.com/tiny-house-under-20k/` | Buyer-protective feasibility checker for under-$20K claims | No page performance row in the current public snapshot | Live; the current URL Inspection row reports not indexed | Current SERP, decision-persona, experience-level, and every-section audit completed | Preserve the answer; later consolidate its duplicate budget tool into the cost calculator and fix the blank-state verdict. Do not rewrite from absent impressions. |

## Planned Decision Surface

`THC-SD-001` is the active exact-path repair. `THC-BUILD-002`, the national
plans/kits/shells/trailers/builders due-diligence asset, remains the strongest
measured demand candidate after the San Diego transaction is released or
stopped.

## Promoted Implementation

`THC-SD-001`: repair the existing San Diego page and scoped homepage routing
around City, unincorporated County, and other incorporated-city boundaries.
The durable research, source hierarchy, section decisions, claim boundaries,
and acceptance criteria are in
`docs/research/san-diego-city-county-tiny-house-refresh-2026-07-28.md`.
