# Tiny Home Clarity Visibility Diagnosis

Reviewed: 2026-08-01

Action: `THC-MON-001`

## Decision

Tiny Home Clarity has an organic visibility stall, not a demonstrated technical
outage, site-wide deindexing event, manual action, or security incident.

Google Search Console's finalized daily rows show zero impressions on every day
from 2026-07-22 through 2026-07-29. The rolling 28-day total did not expose
that change because older impressions remained inside the window. Public
preflight, sitemap status, URL Inspection, manual-action, and security evidence
remain healthy for the established site.

Do not respond by rewriting every page or inventing more local pages. Preserve
the current buyer-protection positioning, monitor whether daily activity and
new-page discovery resume, and make one separate authority-opportunity research
action the next eligible transaction. No outreach or backlink placement is
performed here.

## Evidence Classification

Measured first-party evidence:

- Authenticated GSC Search Analytics daily and 28-day performance rows.
- Authenticated GSC sitemap, URL Inspection, manual-action, security, and Links
  reports.
- The checked-in 2026-08-01 public snapshot and prior dated snapshot.

Measured public evidence:

- HTTP and sitemap/robots preflight for the live site.
- Bounded public search-result samples collected on 2026-08-01.

Inference:

- Initial Google testing appears to have stopped after a small early sample.
- A new domain with zero reported external links is likely constrained by
  authority and trust, although GSC does not prove causation.
- Some pages face product-intent mismatch, but the evidence does not support a
  blanket rewrite order.

Unavailable:

- Complete GSC query rows, which are privacy-thresholded: `UNKNOWN`.
- Current Semrush authority score, referring-domain count, traffic estimate,
  and ranking distribution: `UNKNOWN`. The Semrush report could not run because
  the account lacked available API units.
- Conversion data: `UNKNOWN`.

## GSC Chronology

The automated snapshot collected 2026-08-01 has finalized data through
2026-07-30. It reports 30 rolling impressions, 0 clicks, average position
26.47, sitemap `Success`, 6 discovered pages, and 5 of 6 configured priority
URLs indexed. Those aggregate values are materially unchanged from the prior
snapshot.

The authenticated daily query shows the material change hidden by that rolling
total:

| Finalized date | Impressions | Clicks |
|---|---:|---:|
| 2026-07-09 | 9 | 0 |
| 2026-07-10 | 2 | 0 |
| 2026-07-13 | 4 | 0 |
| 2026-07-14 | 3 | 0 |
| 2026-07-15 | 2 | 0 |
| 2026-07-16 | 1 | 0 |
| 2026-07-17 | 1 | 0 |
| 2026-07-18 | 3 | 0 |
| 2026-07-20 | 4 | 0 |
| 2026-07-21 | 1 | 0 |
| 2026-07-22 through 2026-07-29 | 0 each day | 0 each day |

GSC exposed only three privacy-safe query rows: `tiny house` with 3
impressions, `what qualifies a tiny house` with 2, and `where can i put my tiny
house` with 1. They do not sum to the site total and must not be treated as a
complete query export.

## Technical And Indexing Health

| Check | 2026-08-01 result | Interpretation |
|---|---|---|
| Public sitemap | HTTP 200; 7 parsed URLs | Healthy public discovery surface |
| `robots.txt` | HTTP 200; sitemap declared | No public crawl block found |
| Configured page HTTP | All 6 previously configured URLs returned 200 | No observed page outage |
| GSC sitemap | `Success`; last read 2026-07-29; 6 discovered | Healthy but one release behind |
| Established URL Inspection | Homepage plus LA, San Diego, Georgia, and calculator indexed | No site-wide deindexing |
| Under-$20K URL Inspection | Discovered, currently not indexed | Known page-specific observation |
| Build-options URL Inspection | URL unknown to Google; no crawl or referring sitemap | Expected for a page released after the last sitemap read |
| Manual actions | None | No penalty evidence |
| Security issues | None | No security suppression evidence |
| GSC external links | 0 | Measured authority signal, not proof of cause |

The collector previously inspected six URLs and omitted the newly released
build-options page. `THC-MON-001` adds that seventh URL and stores privacy-safe
finalized daily rows plus a tested zero-impression streak. Historical snapshot
validation remains backward compatible.

## Current Search-Result Sample

This is a bounded diagnostic sample, not a complete ranking census. Searches
were run on 2026-08-01. Result order can vary by location and personalization.

| Exact search | Representative results | Observed intent | Tiny Home Clarity decision | Confidence |
|---|---|---|---|---|
| `"where can i put a tiny house"` | [Tiny House Australia placement guide](https://tinyhouse.com.au/where-can-i-put-my-tiny-home-in-australia-sites-services-and-set-up/), government and vendor placement FAQs | Geographically ambiguous placement guidance; common answers enumerate private land, communities, RV parks, or ADU paths and defer to local rules | Keep the homepage as a U.S. category-and-jurisdiction decision hub. Do not promise one national legal answer or mass-produce city pages. | Medium |
| `"what qualifies as a tiny house"` | [Quicken Loans explainer](https://www.quickenloans.com/learn/tiny-house), [NetSource definition article](https://www.netsourcemedia.com/blog/what-qualifies-as-a-tiny-home/), [Snohomish County FAQ](https://www.snohomishwa.gov/DocumentCenter/View/7544/Tiny-House-FAQ) | Definition/explainer content, usually centered on square footage and wheels-versus-foundation distinctions | The homepage category decoder overlaps this job. Two impressions do not justify a dedicated definition page while exact demand remains `UNKNOWN`. | Medium |
| `"tiny home cost calculator"` | [HomeCostPro](https://www.homecostpro.com/topics/tiny-home-cost), [CalcEstimator](https://calcestimator.com/tiny-house-cost-calculator), [Nomad Adjacent](https://nomadadjacent.com/cost-calculator) | Immediate estimate tools with prefilled assumptions, square-foot multipliers, ranges, and national or regional defaults | Preserve the quote-first reality check. It intentionally serves a safer comparison job and should not imitate unsupported national-average calculators merely to match the dominant result format. | High |
| `"tiny house san diego"` | [CA Tiny Living builder](https://catinyliving.com/), [Trip101 rentals](https://trip101.com/article/airbnb-tiny-house-san-diego) | Mixed builder, for-sale, community, rental/stay, and local-information intent | Keep the current City-versus-unincorporated-County buyer-protection slice. Do not chase inventory or travel intent with a misleading page rewrite. | High |

## Page-Level Diagnosis

| Page | Current diagnosis | Action now |
|---|---|---|
| Homepage placement hub | Indexed; largest small GSC sample; first-screen job and category routing were recently repaired | Preserve and observe daily activity |
| Los Angeles guide | Indexed; narrow official-source buyer-protection job within a broad local market | Preserve; refresh only on source or query evidence |
| San Diego guide | Indexed; broad head term remains mixed, while the page accurately serves jurisdiction decisions | Preserve; do not turn it into listings or rentals |
| Georgia classification | Indexed; definition/classification role is clear, but demand remains `UNKNOWN` | Keep behind measured opportunities |
| Cost calculator | Indexed; strong buyer protection but deliberate product differentiation from instant national estimators | Preserve; do not invent default prices |
| Under-$20K guide | Discovered but not indexed | Observe; no rewrite from absent impression evidence |
| Build-options guide | Live after GSC's last sitemap read and still unknown to Google | Add to routine inspection and observe discovery/indexing |

## Ranked Diagnosis

1. **Technical outage or crawl failure: rejected by current evidence.** Public
   pages, robots, sitemap, and the established index set are healthy.
2. **Manual penalty or security suppression: rejected by current evidence.**
   Both authenticated reports are clear.
3. **Small-domain testing and authority constraint: leading inference.** GSC
   shows a tiny initial test followed by eight zero days and reports zero
   external links. This is plausible, not proven causation.
4. **Selective intent/product mismatch: contributing factor.** Calculator and
   broad San Diego results favor different products or intents, but Tiny Home
   Clarity should keep its buyer-protection boundary instead of mimicking unsafe
   cost estimates or unrelated inventory.
5. **Content quality alone: insufficient diagnosis.** The major entry pages
   were recently reviewed and repaired. No current evidence identifies a
   specific P0-P2 content defect across the site.

## Next Eligible Action

Promote one separate research-only candidate: `THC-AUTH-001`, an ethical
authority-opportunity and citation plan for the existing seven-page site.

That action should:

- identify relevant, real editorial/resource/citation opportunities that have
  a defensible reason to reference one existing asset;
- assess each opportunity for topical fit, audience, editorial legitimacy,
  contact path, link-policy risk, and the specific cite-worthy asset;
- prioritize official, nonprofit, educational, professional, community, and
  genuinely relevant editorial resources over generic directories;
- reject paid links, exchanges, mass templates, private-network tactics,
  fabricated partnerships, and low-quality directory submissions;
- produce a reviewed internal plan only, with no outreach or external-account
  mutation.

Implementation remains separately gated. Normal sensing should also watch for
the build-options page entering GSC, the sitemap reaching seven discovered
pages, the under-$20K indexing state changing, or daily impressions resuming.
