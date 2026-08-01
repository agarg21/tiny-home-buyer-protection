# Tiny Home Clarity Page Status

Baseline checked: 2026-08-01

GSC overlay: snapshot collected 2026-08-01 with finalized data through
2026-07-30. The public sitemap contains seven URLs; GSC last read it on July 29
and reports six discovered. Five established priority URLs are indexed, the
under-$20K page is not indexed, and the newly released build-options URL is not
yet known to Google. Authenticated daily rows show zero impressions on every
finalized day from July 22 through July 29 even though the rolling total remains
30. Technical, manual-action, and security evidence is healthy, so this is an
organic visibility stall and not a blanket page-revamp order. See
`docs/research/tiny-home-visibility-diagnosis-2026-08-01.md`.

| Page | Primary role | 2026-08-01 GSC overlay | Current state | Review coverage | Remaining / blocker |
|---|---|---|---|---|---|
| `https://tinyhomeclarity.com/` | National placement decision hub | 16 impressions, 0 clicks, page-level position 31.94 | Live, indexed, and released in `7f9ea5f` | Full every-section, decision-persona, and beginner/intermediate/advanced audit completed in `THC-RES-001`; implementation browser matrix and independent review passed | New four-factor first screen, category-first checker, honest source/general result split, static local routing, proof checklist, canonical, and sitemap date are live. Pages run `30390104298` and production invariants passed. |
| `https://tinyhomeclarity.com/los-angeles-tiny-house-adu/` | Los Angeles mixed-intent buyer-protection and official-source guide | 4 impressions, 0 clicks, page-level position 14 | Live, indexed, and repaired in `THC-QUAL-001` | Searcher-POV and beginner/intermediate/advanced review completed | Observe unless the full-site audit identifies a concrete unmet job or source/freshness defect. Do not infer stable ranking from four impressions. |
| `https://tinyhomeclarity.com/san-diego-tiny-house-adu/` | San Diego jurisdiction-first buyer-protection and official-source guide | 3 impressions, 0 clicks, page-level position 21 | Live, indexed, and production-verified in `daaf743`; Pages run `30399382114` succeeded | Current SERP, official-source hierarchy, decision-persona, beginner/intermediate/advanced, every-section, responsive, routing, and independent review passed | Current City section 141.0318 and the separate unincorporated-County THOW path are live; other incorporated cities do not receive a false match. Production bytes, HTTP, canonical, H1, source routes, focus, and 320px containment passed. |
| `https://tinyhomeclarity.com/georgia-tiny-house-classification/` | Georgia structure-classification explainer before local zoning | 5 impressions, 0 clicks, page-level position 22.4 | Live and indexed | Current SERP, decision-persona, experience-level, and every-section audit completed | Answer-first repair is justified on human usefulness, but measured query demand remains `UNKNOWN`; keep behind homepage, San Diego, calculator, and build candidates. |
| `https://tinyhomeclarity.com/tiny-home-cost-calculator/` | Quote and build-budget reality check with explicit unknowns | 2 impressions, 0 clicks, page-level position 26 | Live, indexed, and production-verified in `1af1dc2`; Pages run `30460242431` succeeded | Current calculator SERP, decision-persona, beginner/intermediate/advanced, every-section, state-contract, 19 focused and 45 full native tests, local/production browser QA, and three independent review cycles completed | The quote-first tool now keeps unknown and zero distinct, preserves partial states, and supports financing-only monthly output. Production bytes and interaction checks passed. One nonblocking blank-buffer title P3 remains recorded for a future action. |
| `https://tinyhomeclarity.com/tiny-house-under-20k/` | Buyer-protective feasibility checker for under-$20K claims | No page performance row in the current public snapshot | Live; the current URL Inspection row reports not indexed | Current SERP, decision-persona, experience-level, and every-section audit completed | Preserve the answer; later consolidate its duplicate budget tool into the cost calculator and fix the blank-state verdict. Do not rewrite from absent impressions. |
| `https://tinyhomeclarity.com/tiny-house-build-options/` | National plans/kits/shells/trailer/builders responsibility comparison | URL unknown to Google; released after the sitemap's last GSC read | Live and production-verified in `1895694`; Pages run `30622059848` succeeded | Current demand, reproducible SERP/ranking-page, official-source, decision-persona, beginner/intermediate/advanced, every-section, six focused tests, 1440px/390px/320x568/700/844 browser passes, and three fresh `PASS` reviews completed | Added to routine URL Inspection coverage. Observe discovery and indexing; do not request indexing or infer performance before evidence arrives. |

## Planned Decision Surface

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
