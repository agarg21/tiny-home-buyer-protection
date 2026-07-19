# LA / San Diego Addressable Query Volume

Checked: 2026-07-18

## Purpose

Estimate addressable query demand for the pages Tiny Home Clarity is actually
considering: useful San Diego and Los Angeles pages for people trying to buy,
build, stay in, or legally place a tiny house.

## Data Sources

- DataForSEO Google Ads `search_volume/live`, collected 2026-07-18.
  - Reported task cost: approximately `$0.09`.
  - Raw response:
    `docs/research/raw/dataforseo-la-san-diego-intent-keywords-us-2026-07-18.json`
  - Processed CSV:
    `docs/research/processed/la-san-diego-intent-keyword-demand-2026-07-18.csv`
  - Processed summary:
    `docs/research/processed/la-san-diego-intent-keyword-demand-summary-2026-07-18.json`
- DataForSEO Google organic SERP `live/advanced`, collected 2026-07-18.
  - San Diego report:
    `docs/research/serp-tiny-house-san-diego-intent-2026-07-18.md`
  - Los Angeles processed SERP summary:
    `docs/research/processed/serp-los-angeles-tiny-house-intents-2026-07-18.json`
  - Los Angeles SERP task cost: approximately `$0.018`.

Important caveat: Google Ads/DataForSEO groups close variants. Do not sum
`tiny house [city]` and `tiny home [city]` as separate demand pools. Use bucket
maxima as directional estimates.

## Addressable Buckets

### San Diego

| Intent bucket | Representative max query | Monthly searches | Fit for us |
| --- | --- | ---: | --- |
| Buy/listings | `tiny houses for sale san diego` | 1,300 | Adjacent, not directly owned unless we build buyer due diligence around listings |
| Broad city | `tiny house san diego` | 880 | Mixed intent; usable only with an intent-router page |
| Community | `tiny house community san diego` | 320 | Adjacent; useful if we cover community questions and verification |
| Stay/rent | `tiny house rentals san diego` | 210 | Adjacent; not core, but page should route this intent away from ownership/placement |
| Builders | `tiny house builders san diego` | 90 | Adjacent; useful for builder due-diligence framing |
| THOW/placement | `tiny home on wheels san diego` | 70 | Directly relevant |
| Rules/zoning | `tiny house laws san diego` | 10 | Directly relevant but low exact volume |
| ADU/MTH | no known row | UNKNOWN | Directly relevant but exact query demand not measured |

Interpretation: San Diego has meaningful local tiny-house search activity, but
most of it is commercial or exploratory. The directly legal/placement terms are
small. A pure zoning page is too narrow for the visible demand; an intent-router
page is a better fit.

### Los Angeles

| Intent bucket | Representative max query | Monthly searches | Fit for us |
| --- | --- | ---: | --- |
| Buy/listings | `tiny houses for sale los angeles` | 1,600 | Adjacent, not directly owned unless we build buyer due diligence around listings |
| Broad city | `tiny house los angeles` | 720 | Mixed intent; usable only with an intent-router page |
| Community | `tiny house community los angeles` | 170 | Adjacent; nonprofit/shelter/community intent may be different from buyer intent |
| Stay/rent | `tiny house rentals los angeles` | 140 | Adjacent; not core |
| Builders | `tiny house builders los angeles` | 50 | Adjacent; useful for builder due-diligence framing |
| ADU/MTH | `tiny house adu los angeles` | 10 | Directly relevant but low exact volume |
| THOW/placement | `tiny house on wheels los angeles` | 10 | Directly relevant but low exact volume |
| Rules/zoning | `tiny house laws los angeles` | 10 | Directly relevant but low exact volume |

Interpretation: Los Angeles has stronger listing demand than rules demand. Its
official MTH-as-ADU source clarity is valuable, but the page must meet a broad
shopping/building/feasibility SERP, not only an ADU code-query SERP.

## SERP Intent Notes

### San Diego

`tiny house san diego` SERPs are mixed:

- listings and marketplaces,
- San Diego-area builders,
- Facebook/community pages,
- Airbnb or short-stay pages,
- videos,
- official/news/rules-adjacent pages.

The current San Diego page should not behave like only a zoning memo.

### Los Angeles

`tiny house los angeles` and `tiny houses for sale los angeles` SERPs are mostly
commercial/listing/project-oriented:

- Zook Cabins / park model sales pages,
- Tiny House Listings,
- Tiny Topanga / local builder pages,
- California Backyard Homes / ADU-builder-style pages,
- Reddit discussion,
- nonprofit/shelter tiny-home village results,
- personal build/cost content.

`tiny house adu los angeles` has only 10 measured monthly searches and the
DataForSEO SERP snapshot returned no visible top organic rows. Do not anchor the
whole LA strategy on that exact query even though the official ADU/MTH angle is
still useful.

## Practical Addressable Demand

For Tiny Home Clarity's current trust-building product, the addressable demand
is not the full listing/builder volume. We should think in layers:

1. Directly addressable placement/rules demand:
   - San Diego: roughly 70/month from THOW terms plus about 10/month from laws
     terms, with ADU/MTH exact demand `UNKNOWN`.
   - Los Angeles: roughly 10/month each for ADU, THOW, and laws terms.
2. Mixed-intent city demand we can partially address:
   - San Diego: broad city query around 880/month.
   - Los Angeles: broad city query around 720/month.
3. Adjacent commercial demand we can support with buyer-protective content:
   - San Diego: listings 1,300/month, communities 320/month, rentals 210/month,
     builders 90/month.
   - Los Angeles: listings 1,600/month, communities 170/month, rentals
     140/month, builders 50/month.

The page strategy should not chase listings directly. It should help searchers
avoid mistakes when they move from broad search intent into buying/building,
placement, community, or stay decisions.

## Strategic Conclusion

Focus on San Diego and Los Angeles first, but not as thin city zoning pages.

Best near-term content model:

- A city intent router above the fold.
- A buyer-protective checklist for each intent: buy/build, place legally, find a
  community/stay, or compare options.
- An official-source section that states what is actually supported.
- A stop-if section for wrong jurisdiction, wrong structure type, or missing
  parcel facts.
- Clear next questions to ask the city/county, builder, seller, community, or
  host before money changes hands.

This gives the pages a chance to satisfy mixed SERP intent while preserving the
site's core buyer-protection wedge.
