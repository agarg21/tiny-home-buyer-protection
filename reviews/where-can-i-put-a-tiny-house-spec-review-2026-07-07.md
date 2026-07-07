# Review: Where Can I Put a Tiny House?

Date: 2026-07-07

Reviewed files:

- `briefs/where-can-i-put-a-tiny-house-product-spec.md`
- `site/index.html`
- `site/styles.css`

Role: SEO Research & Review Agent

Recommendation: `improve` the built MVP, then keep it indexed after a final QA pass.

## Verdict

The first asset is strategically sound and index-worthy. It matches the buyer-protection thesis by turning a high-anxiety placement query into a practical triage tool instead of a generic tiny-home article.

The built MVP in `site/index.html` already covers the most important safety boundary: it returns general triage, low confidence, `UNKNOWN` official source fields, and local verification steps rather than legal approval.

Do not `noindex` the page if the remaining trust improvements are made. Use `noindex` only if the page ships as a thin placeholder or loses the working triage behavior.

## Current Search Validation

Semrush UI checked in Chrome on 2026-07-07, United States desktop database:

| Query | US volume | KD | Intent | CPC | Recommendation |
|---|---:|---:|---|---:|---|
| `where can i put a tiny house` | 320 | 16% Easy | Informational | $0.72 | `create` / primary |
| `tiny house zoning` | 390 | 19% Easy | Informational | $0 | `create` / secondary |
| `tiny home zoning` | 260 | 19% Easy | Informational | $0 | `create` / secondary |
| `where can you live in a tiny house` | 110 | 31% Possible | Informational | $0.44 | `improve` as secondary copy |
| `can i put a tiny house on my land` | 20 | n/a | n/a | $0 | `improve` as long-tail section |

Semrush keyword ideas for `where can i put a tiny house` showed state-modified demand including Florida, Georgia, California, and Colorado. Texas and North Carolina remain plausible strategic states, but current query-specific support for them was not verified in this pass.

DataForSEO was not used. Approximate DataForSEO cost: $0.

## SERP And Source Notes

Manual SERP review on 2026-07-07 showed a mix of older blog posts, vendor regulation pages, forum threads, and a few official or quasi-official resources. Several competitor/vendor pages use confident "yes" framing that a cautious buyer should not rely on without official local verification.

Official-source examples support the spec's cautious, type-first approach:

- Georgia DCA's tiny house fact sheet separates RVs, manufactured homes, modular/industrialized buildings, and site-built dwellings, and says zoning varies by local jurisdiction: `https://dca.georgia.gov/document/public-notices/georgiatinyhousefactsheet32824pdf/download`
- California HCD's 2026 ADU handbook says tiny homes may be ADUs only when they meet the ADU definition, because "tiny home" can mean different structures or vehicles: `https://www.hcd.ca.gov/sites/default/files/docs/policy-and-research/adu-handbook-update.pdf`
- California HCD Information Bulletin 2016-01 warns that tiny homes must fit an approved structure category to be occupied: `https://www.hcd.ca.gov/sites/default/files/docs/building-standards/ib-2016-01.pdf`
- Texas TDHCA has a separate manufactured housing division with laws/rules, records, licensing, and ownership resources, reinforcing that "tiny home" is not one legal category: `https://www.tdhca.texas.gov/manufactured-housing-federal-and-state-laws-and-rules`

## Built MVP Review

Recommendation: `improve`

Strengths:

- The H1, hero promise, form, result module, category guide, red flags, checklist preview, and local record field list align with the spec.
- The page avoids forbidden claims such as "this is legal" or "you can put a tiny home here."
- Unsupported locations correctly return general triage only with low confidence and `UNKNOWN` official-source fields.
- The tool is useful before local records exist because it gives specific rule buckets and office questions.

Risks:

- The live page currently has no outbound official-source links. For a zoning/legal-adjacent topic, this weakens trust even though the tool does not make approval claims.
- The note in the Local Records section says keyword volume, CPC, and difficulty remain `UNKNOWN`; that is now outdated for the checked target queries and is not useful to a buyer-facing page.
- Planned internal links use `href="./"` with `aria-disabled="true"`, which can look like real navigation but only reloads the same page.
- The page does not yet include a clear "last reviewed" or "sources last checked" date for the general guide.
- There are no local JSON records yet. That is acceptable for launch only if the page continues to label results as general triage.

## Implementation-Ready Recommendations

`improve` Add a short official-source starter section before launch:

Add a section such as "Why this starts with local verification" with 3-4 official links. Use the links to support category complexity, not to imply statewide permission. Good candidates are California HCD ADU/tiny home guidance, California HCD Information Bulletin 2016-01, Georgia DCA tiny house fact sheet, and Texas TDHCA manufactured housing resources.

`improve` Remove the buyer-facing keyword-metric note:

Replace the Local Records note about keyword volume/CPC/KD with a buyer-facing note: "No official local record has been reviewed yet. Local records will include official URLs, source summaries, last checked dates, and confidence levels."

`improve` Fix planned internal links:

Either render planned tools as non-link cards until pages exist, or point them to future stable paths only when those pages are created. Avoid same-page links marked as disabled.

`improve` Add freshness labels:

Add "Page last reviewed: 2026-07-07" near the guide or footer. For future official records, show each record's `last_checked_date`.

`create` Add static local-record storage when the first records exist:

Use `site/data/local-records.json` for MVP records. Keep the spec's fields, allow empty arrays and `UNKNOWN` values, and require official URLs, source summaries, last checked date, and confidence level before a record is displayed as researched.

`test` Launch with general national triage plus 2-4 official-source example records at most:

Do not wait for five fully researched states. Use a small source-backed set to test the UX and data model.

`monitor` Review GSC after launch:

Watch impressions for `where can i put a tiny house`, `tiny house zoning`, `tiny home zoning`, `can i put a tiny house on my land`, and state-modified versions. Expand only where impressions and official-source availability support it.

`ask user` Email and analytics remain blocked:

The email checklist should stay on-page until the user chooses an email provider. Analytics and GSC also need user/account decisions.

## MVP Local Data Advice

Recommendation: `test`

The proposed states are directionally reasonable, but five-state support is too broad for a first implementation. Keep the national triage page as the main indexable asset, then add a small number of official records.

Suggested first record strategy:

- California: keep high priority because official HCD tiny-home and ADU materials are strong, and California has obvious ADU intent.
- Georgia: consider adding despite not being in the proposed state list because Semrush showed state-modified query demand and Georgia DCA has a clear official fact sheet.
- Florida: keep as a candidate because Semrush showed state-modified demand and SERPs contain vendor pages with broad claims that a skeptical source-backed page can improve on.
- Texas: keep as a candidate for manufactured/modular/RV distinctions and land-shopping relevance, but select local records only after official local source availability is confirmed.
- North Carolina: `monitor` or defer until current query demand and official local source availability are verified.
- Colorado: keep as a candidate only if a specific official local example is chosen.

Avoid creating state pages in the MVP. State names can appear in the tool as example records, not as broad state-level "allowed" claims.

## Anti Gravity Advisory Summary

Anti Gravity CLI (`agy`) was used on 2026-07-07 as a second-opinion reviewer. It agreed the spec is highly aligned and index-worthy, but warned about local-data scope creep and recommended static JSON plus explicit fallback UX for unsupported locations. This review accepts those points and folds them into the implementation handoff.

## Unresolved Unknowns

- Final brand/domain: `UNKNOWN`
- Email provider: `UNKNOWN`
- Analytics provider: `UNKNOWN`
- Google Search Console property: `UNKNOWN`
- Exact local jurisdictions for first official records: `UNKNOWN`
- Backlinks needed: `UNKNOWN`
- Ranking difficulty beyond checked Semrush UI metrics: partially known for target queries, otherwise `UNKNOWN`

## Next Agent

Implementation Agent should run next to apply the `improve` items above. After that, SEO Research & Review should do a final launch-readiness pass.
