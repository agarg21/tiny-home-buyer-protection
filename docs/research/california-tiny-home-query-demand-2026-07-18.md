# California Tiny-Home Query Demand

Checked: 2026-07-18

## Purpose

Understand whether California state/city tiny-home query demand supports more
California placement pages, and whether top-city pages should be prioritized
before broader source-page quality fixes.

## Data Sources

- DataForSEO Google Ads `search_volume/live`, collected 2026-07-18.
- Successful task cost reported by DataForSEO: approximately `$0.18`.
- Raw successful responses:
  - `docs/research/raw/dataforseo-explicit-ca-city-keywords-us-v2-2026-07-18.json`
  - `docs/research/raw/dataforseo-generic-placement-keywords-california-geo-2026-07-18.json`
- Rejected raw response retained for audit:
  - `docs/research/raw/dataforseo-explicit-ca-city-keywords-us-2026-07-18.json`
- Processed rows:
  - `docs/research/processed/california-tiny-home-keyword-demand-2026-07-18.csv`
  - `docs/research/processed/california-tiny-home-keyword-demand-summary-2026-07-18.json`

DataForSEO documentation says the Google Ads search volume endpoint returns
search volume, monthly searches, competition, and related fields for batches of
keywords. DataForSEO's Google Ads keyword data uses Google geographical
targeting locations, so this test used both `United States` and
`California,United States` location names.

## Method

Two small capped batches:

1. National volume for explicit California and city-modified queries.
   - Location: `United States`.
   - Keywords: 89 after removing one over-length phrase rejected by DataForSEO.
   - Examples: `tiny home california`, `tiny house zoning california`,
     `tiny house los angeles`, `tiny house adu los angeles`.
2. California geo-targeted volume for generic queries.
   - Location: `California,United States`.
   - Keywords: 20.
   - Examples: `where can i put a tiny house`, `tiny house zoning`,
     `tiny house on wheels`, `tiny home builders`.

Important caveat: Google Ads/DataForSEO can group close variants. Do not sum
`tiny house san diego` and `tiny home san diego` as separate demand pools just
because both show the same volume. Use cluster maxima and directional signals.

## Findings

### State-Level California Demand

The broad and commercial state-modified queries are much stronger than explicit
placement/zoning queries:

| Query | Monthly searches | CPC | Competition |
| --- | ---: | ---: | --- |
| `tiny home california` | 1,600 | 2.74 | MEDIUM |
| `tiny homes for sale california` | 1,600 | 1.52 | MEDIUM |
| `tiny home communities california` | 1,300 | 2.24 | LOW |
| `tiny house communities california` | 1,300 | 2.24 | LOW |
| `tiny home builders california` | 720 | 4.30 | MEDIUM |
| `tiny house builders california` | 720 | 4.30 | MEDIUM |
| `tiny house california` | 170 | 2.08 | MEDIUM |
| `tiny house laws california` | 40 | UNKNOWN | LOW |
| `tiny house on wheels california` | 30 | 1.12 | MEDIUM |
| `tiny house regulations california` | 10 | UNKNOWN | LOW |
| `tiny home regulations california` | 10 | UNKNOWN | LOW |
| `tiny house zoning california` | 10 | UNKNOWN | UNKNOWN |
| `california tiny house adu` | UNKNOWN | UNKNOWN | UNKNOWN |
| `california movable tiny house adu` | UNKNOWN | UNKNOWN | UNKNOWN |
| `movable tiny house california` | UNKNOWN | UNKNOWN | UNKNOWN |

Interpretation: California has real tiny-home demand, but the measured
state-level placement/legal demand is low and fragmented. A California
placement/ADU page may still be strategically useful if it is source-backed and
captures long-tail variants, but it should not be justified by obvious exact
volume alone.

### Top-City Explicit Demand

Top city modified queries mostly show broad `tiny house/tiny home [city]`
demand, not zoning/ADU demand:

| City | Broad max query | Monthly searches | Placement-specific known demand |
| --- | --- | ---: | --- |
| San Diego | `tiny house san diego` | 880 | none measured / UNKNOWN |
| Los Angeles | `tiny house los angeles` | 720 | `tiny house adu los angeles`: 10 |
| Sacramento | `tiny house sacramento` | 480 | none measured / UNKNOWN |
| San Jose | `tiny house san jose` | 260 | none measured / UNKNOWN |
| Fresno | `tiny house fresno` | 260 | none measured / UNKNOWN |
| San Francisco | `tiny house san francisco` | 170 | none measured / UNKNOWN |
| Bakersfield | `tiny house bakersfield` | 170 | none measured / UNKNOWN |
| Oakland | `tiny house oakland` | 70 | none measured / UNKNOWN |
| Long Beach | `tiny house long beach` | 10 | none measured / UNKNOWN |
| Anaheim | no known row | UNKNOWN | none measured / UNKNOWN |

Interpretation: city demand exists, but broad city queries may be about
builders, communities, rentals, stays, or homes for sale. They are not enough by
themselves to justify thin placement pages. Los Angeles has a tiny measured ADU
signal plus existing official-source clarity; San Diego has stronger broad
city demand and existing official-source clarity.

### California Geo-Targeted Generic Demand

People located in California searching generic terms show more useful placement
signals than many explicit city/state phrases:

| Query, California geo | Monthly searches | CPC | Competition |
| --- | ---: | ---: | --- |
| `tiny house on wheels` | 880 | 0.57 | HIGH |
| `movable tiny house` | 390 | 0.69 | HIGH |
| `where can i put a tiny house` | 90 | 3.24 | LOW |
| `tiny house adu` | 90 | 3.71 | HIGH |
| `tiny house zoning` | 70 | UNKNOWN | LOW |
| `tiny home zoning` | 70 | UNKNOWN | LOW |
| `can i put a tiny house in my backyard` | 40 | UNKNOWN | LOW |
| `can i put a tiny house on my land` | 10 | UNKNOWN | UNKNOWN |
| `tiny house regulations` | 10 | UNKNOWN | LOW |
| `tiny home regulations` | 10 | UNKNOWN | LOW |
| `tiny house laws` | 10 | 2.30 | MEDIUM |
| `tiny home laws` | 10 | 2.30 | MEDIUM |

Interpretation: a California searcher may not type `California` or a city. The
better page opportunity may be a California-focused hub around MTH/ADU,
placement, zoning, and THOW classification, internally linking to improved Los
Angeles and San Diego official-source pages.

## Strategy Implications

1. Do not mass-build California city pages from volume alone.
2. Fix the existing Los Angeles and San Diego pages first so they are
   answer-first and useful, not just cautious.
3. Consider a future California hub only after the source-page model is fixed.
   It should synthesize:
   - movable tiny house / ADU paths,
   - THOW versus ADU versus RV/park-model distinctions,
   - official state/city source links,
   - links to city pages where official sources are clear.
4. Treat Georgia-style classification pages as support content, not necessarily
   top-ranking bets for placement demand.
5. Backlink outreach remains premature until the pages become clearer assets
   worth citing.

## Candidate Next Research

If this direction remains promising, run targeted SERP review for:

- `tiny house san diego`
- `tiny house los angeles`
- `tiny house adu los angeles`
- `tiny house on wheels`
- `movable tiny house`
- `where can i put a tiny house`
- `tiny house zoning`

The SERP review should classify whether top results are builders, rentals,
communities, vendor regulation pages, official sources, forums, or genuinely
useful buyer guides.
