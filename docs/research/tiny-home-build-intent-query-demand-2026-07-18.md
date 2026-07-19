# Tiny-Home Build-Intent Query Demand

Checked: 2026-07-18

## Purpose

Estimate how much query demand appears to come from people trying to build,
order, hire for, or permit a tiny home, separating general US demand from local
California / Los Angeles / San Diego demand.

## Data Sources

- DataForSEO Google Ads `search_volume/live`, collected 2026-07-18.
  - Reported task cost: approximately `$0.09`.
  - Raw response:
    `docs/research/raw/dataforseo-build-intent-keywords-us-2026-07-18.json`
  - Processed CSV:
    `docs/research/processed/tiny-home-build-intent-keyword-demand-2026-07-18.csv`
  - Processed summary:
    `docs/research/processed/tiny-home-build-intent-keyword-demand-summary-2026-07-18.json`

Important caveat: Google Ads/DataForSEO groups close variants. Do not sum rows
such as `build a tiny house`, `tiny house builders`, and `tiny house
contractors` when they return the same volume, CPC, and competition. Treat them
as one broad build/builder cluster unless a SERP review separates intent.

## General US Build Demand

| Intent bucket | Representative max query | Monthly searches | Read |
| --- | --- | ---: | --- |
| Broad build / builder / contractor | `build a tiny house` / `tiny house builders` | 40,500 | Real demand, but grouped; cannot cleanly split DIY from hiring |
| Plans / floor plans | `tiny house plans` | 27,100 | Strong DIY or pre-build research intent |
| Kits | `tiny house kits` | 12,100 | Product/build intent; likely commercial and DIY mixed |
| Trailer / shell | `tiny house trailer` | 9,900 | Build component intent |
| Builders near me | `tiny house builders near me` | 4,400 | Explicit local-service intent, national aggregate |
| Construction | `tiny house construction` | 4,400 | Build-process / contractor intent |
| Permits / codes | `tiny house building codes` | 1,600 | Feasibility and compliance intent |
| THOW build | `build tiny house on wheels` | 390 | Narrower, more direct build intent |

Interpretation: general build demand is much larger than exact local placement
demand. The cleanest addressable product angle is not "we are a builder list."
It is buyer protection before building: should you build, hire, buy a shell or
kit, use plans, and what must be verified before money changes hands.

Directional addressable range: the sampled general build-intent universe shows
one large grouped cluster at about 40,500 searches/month plus several distinct
adjacent clusters. Because searchers overlap across plans, kits, builders, and
cost research, use a conservative planning range of roughly 40,000-80,000 US
monthly searches, not a naive sum of every row.

## California And Local Build Demand

| Scope | Representative max query | Monthly searches | Read |
| --- | --- | ---: | --- |
| California tiny-house builders | `tiny house builders california` | 720 | Real state-modified builder demand |
| California tiny-house contractors | `tiny house contractors california` | 30 | Small exact contractor demand |
| California tiny-house permits | `tiny house permit california` | 20 | Very small exact permit demand |
| Los Angeles tiny-house builders | `tiny house builders los angeles` | 50 | Small exact city builder demand |
| San Diego tiny-house builders | `tiny house builders san diego` | 90 | Small exact city builder demand |
| Los Angeles ADU builders | `adu builders los angeles` | 480 | Larger, high-CPC adjacent demand; not tiny-house-specific |
| San Diego ADU builders | `adu builders san diego` | 480 | Larger, high-CPC adjacent demand; not tiny-house-specific |

Interpretation: exact local tiny-house build queries are small in LA and San
Diego. The bigger local commercial build pool is ADU/backyard-home demand, but
that market is crowded, expensive, and broader than tiny homes. Tiny Home
Clarity can use the ADU overlap only where official sources support movable
tiny homes or backyard units; it should not pretend to be an ADU contractor
directory.

## Strategic Implication

For LA and San Diego, build intent should be handled as a buyer-protection path
inside the page:

- If you want to build or hire a builder, first identify whether you mean a
  site-built ADU, movable tiny house, park model/RV, THOW, kit, shell, or custom
  tiny home.
- Before contacting builders, verify parcel location, city/county scope,
  classification, permit path, utility scope, delivery/setup, financing,
  insurance, warranty, and written official answers.
- Treat `ADU builders [city]` as adjacent opportunity only. It has higher CPC
  and volume than exact tiny-house builder terms, but many searchers want
  conventional ADU contractors.

The next page repair should therefore make the build path prominent, but not
turn the pages into builder directories. The useful wedge is "avoid the wrong
build path before you pay a builder, kit seller, or ADU vendor."
