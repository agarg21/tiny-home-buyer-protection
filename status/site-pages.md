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
| `https://tinyhomeclarity.com/san-diego-tiny-house-adu/` | San Diego mixed-intent buyer-protection and official-source guide | 3 impressions, 0 clicks, page-level position 21 | Live, indexed, and repaired in `THC-QUAL-001` | Searcher-POV, experience-level, and current every-section audit completed | Observe. Record a later City-versus-unincorporated-County freshness repair: current County guidance exposes a distinct THOW path effective September 4, 2025. Do not collapse City and County into one permission claim. |
| `https://tinyhomeclarity.com/georgia-tiny-house-classification/` | Georgia structure-classification explainer before local zoning | 5 impressions, 0 clicks, page-level position 22.4 | Live and indexed | Current SERP, decision-persona, experience-level, and every-section audit completed | Answer-first repair is justified on human usefulness, but measured query demand remains `UNKNOWN`; keep behind homepage, San Diego, calculator, and build candidates. |
| `https://tinyhomeclarity.com/tiny-home-cost-calculator/` | Editable all-in planning calculator and seller-quote reality check | 2 impressions, 0 clicks, page-level position 26 | Live and indexed | Current calculator SERP, decision-persona, experience-level, and every-section audit completed | Repair blank/partial-result behavior, possible utility double counting, project-type assumptions, and quote-first progressive disclosure after the homepage. |
| `https://tinyhomeclarity.com/tiny-house-under-20k/` | Buyer-protective feasibility checker for under-$20K claims | No page performance row in the current public snapshot | Live; the current URL Inspection row reports not indexed | Current SERP, decision-persona, experience-level, and every-section audit completed | Preserve the answer; later consolidate its duplicate budget tool into the cost calculator and fix the blank-state verdict. Do not rewrite from absent impressions. |

## Planned Decision Surface

`THC-BUILD-002`, the national plans/kits/shells/trailers/builders
due-diligence asset, remains the strongest measured demand opportunity and a
candidate rather than the selected page. `THC-HOME-001` goes first because the
current primary public entry page has the clearest existing promise/result
mismatch.

## Promoted Implementation

`THC-HOME-001`: rebuild the homepage placement hub around a source-backed
buyer decision path. The complete research, first-screen promise, section
dispositions, boundaries, QA, release, and measurement plan are in
`docs/research/tiny-home-clarity-full-site-decision-pack-2026-07-28.md`.
