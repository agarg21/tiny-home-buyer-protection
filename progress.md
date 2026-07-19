# Progress

## 2026-07-07

- Created initial repo scaffold for Tiny Homes Buyer Protection.
- Converted business plan into strategy and content principles.
- Prepared three-agent operating files and role charters.
- Drafted deployment plan for GitHub Pages via GitHub Actions.
- Drafted domain research and recommended `tinyhomeguard.com`, pending registrar confirmation.
- Drafted first product spec: `Where Can I Put a Tiny House?`
- Prepared child chat bootstrap prompts.
- Built the first static MVP for `Where Can I Put a Tiny House?` in `site/index.html`.
- Added interactive placement triage logic, cautious result wording, rule buckets, possible paths, red flags, verification checklist, and local/zoning record field preservation.
- Kept unsupported locations as general triage only with `Low` confidence, `UNKNOWN` official source URLs, and `UNKNOWN` last checked dates.
- Validation completed: `git diff --check`, inline JavaScript parse check, `site/.nojekyll` presence, and GitHub Pages workflow presence.
- Created GitHub repo: `https://github.com/agarg21/tiny-home-buyer-protection`.
- Configured GitHub Pages with Actions and verified `https://agarg21.github.io/tiny-home-buyer-protection/` and `/sitemap.xml` return `HTTP/2 200`.
- Created Implementation Agent thread: `019f3cd1-b87c-7d51-aae4-9c1b024f5e9a`.
- Created SEO Research & Review Agent thread: `019f3cd1-ef2e-7d90-82f4-bbad070df733`.
- Recorded `tinyhomeclarity.com` as purchased.
- Added `site/CNAME` and updated sitemap to `https://tinyhomeclarity.com/`.
- Configured GitHub Pages custom domain as `tinyhomeclarity.com`.
- Updated Porkbun authoritative DNS for GitHub Pages: apex points to the four GitHub Pages A records and `www` points to `agarg21.github.io`; `http://tinyhomeclarity.com/` returns `HTTP 200`.
- Removed leftover Porkbun wildcard parking CNAME, retriggered GitHub Pages certificate provisioning by re-adding the custom domain, and enabled HTTPS enforcement. Verified HTTPS homepage and sitemap return `HTTP 200`.
- Checked terminology in Semrush: `tiny homes` has the largest exact head-term volume, while singular `tiny house` is larger than singular `tiny home`.
- Completed SEO Research & Review for the first product spec and built MVP; saved recommendations at `reviews/where-can-i-put-a-tiny-house-spec-review-2026-07-07.md` and updated SEO, implementation, and current-cycle handoffs.

## 2026-07-08

- Applied launch-readiness improvements to the `Where Can I Put a Tiny House?` MVP.
- Added a short official-source starter section with California HCD, Georgia DCA, and Texas TDHCA links to support local-verification caution without implying statewide permission.
- Replaced the buyer-facing local-record keyword-metric note with a note about future official URLs, source summaries, last checked dates, and confidence levels.
- Changed planned related tools from same-page links into non-link cards until those pages exist.
- Added `Page last reviewed: 2026-07-08` freshness labels.
- Completed final SEO launch review at `reviews/where-can-i-put-a-tiny-house-launch-review-2026-07-08.md`; verdict is `improve first` for public brand rename to `Tiny Home Clarity` and subtle-text contrast before launch.
- Applied final launch fixes: changed public-facing brand references to `Tiny Home Clarity` and darkened subtle metadata text for contrast.
- Set up Google Search Console Domain property for `tinyhomeclarity.com` using DNS TXT verification through Porkbun.
- Submitted `https://tinyhomeclarity.com/sitemap.xml` in Search Console. Initial GSC sitemap table status showed `Couldn't fetch`, but URL Inspection discovered the homepage from that sitemap and the sitemap returns `HTTP 200` publicly.
- Requested indexing for `https://tinyhomeclarity.com/`; GSC confirmed the URL was added to the priority crawl queue.
- Added `site/robots.txt` with a sitemap directive and added a `lastmod` date to `site/sitemap.xml`.
- Rechecked GSC sitemap status: `https://tinyhomeclarity.com/sitemap.xml` now shows `Success`, last read July 8, 2026, with 1 discovered page.
- Created the first implementation-ready official-source record set for the placement tool at `reviews/official-source-records-where-can-i-put-a-tiny-house-2026-07-08.md`; Los Angeles, San Diego, and Georgia DCA are ready, while Austin is deferred.
- Added the approved first official-source records to `site/data/local-records.json`: Los Angeles MTH-as-ADU, San Diego movable tiny house / ADU-related path, and Georgia DCA state classification.
- Updated the MVP UI to render official-source example records with source summaries, official URLs, last checked dates, source confidence, and explicit non-approval caveats.
- Kept unsupported locations as general national triage with low personal placement confidence and `UNKNOWN` official-source fields.
- Completed rendered official-source record review at `reviews/rendered-official-source-records-review-2026-07-08.md`; verdict is `launch`, with no implementation-blocking fixes.
- Rechecked GSC sitemap status during rendered-record review; sitemap remains `Success` with 1 discovered page.

## 2026-07-09

- Reconciled operating docs after `5bedfca Add official source records` was pushed.
- Updated the current cycle so the active priority is GSC homepage indexing monitoring plus analytics/email provider decisions, not committing already-shipped official-source records.
- Updated known strategy/deployment values for public brand, domain, registrar, Search Console property, and sitemap success.
- Confirmed live public URLs still return `HTTP 200` for the homepage, sitemap, robots.txt, and `site/data/local-records.json` equivalent path.
- Public Google search for `site:tinyhomeclarity.com` returned the homepage; GSC URL Inspection/page indexing status still needs direct recheck when available.
- Created the first support-cluster brief for narrow official-source-backed pages: Los Angeles MTH-as-ADU, San Diego MTH/ADU path, and Georgia classification explainer.
- Updated implementation and SEO review backlogs so Implementation builds the support cluster first, then SEO Research & Review reviews the rendered pages before commit/push.
- Built the first constrained support cluster:
  - `site/los-angeles-tiny-house-adu/index.html`
  - `site/san-diego-tiny-house-adu/index.html`
  - `site/georgia-tiny-house-classification/index.html`
- Linked homepage official-source record cards to their matching support pages and made one official source link visible by default on each card.
- Added the three support page URLs to `site/sitemap.xml` with `2026-07-09` lastmod dates.
- Kept the pages scoped to City of Los Angeles, City of San Diego, and Georgia classification-only guidance; no Austin page, analytics, email capture, or extra local pages were added.
- Completed SEO Research & Review for the first constrained support cluster at `reviews/local-source-support-pages-review-2026-07-09.md`; verdict is `launch` with no required implementation fixes before commit/push.
- Static review confirmed the three approved records are present, Austin is absent, support page links resolve, and sitemap support URLs have `2026-07-09` lastmod dates.
- Committed and pushed the support cluster in `4b467d2 Add local source support pages`.
- Verified the GitHub Pages deployment succeeded and live `HTTP 200` responses for the homepage, sitemap, Los Angeles support page, San Diego support page, and Georgia classification page.

## 2026-07-10

- Rechecked Google Search Console sitemap status: `https://tinyhomeclarity.com/sitemap.xml` remains `Success`, last read July 9, 2026, with 1 discovered page.
- Public Google `site:` checks did not yet show the three new support URLs.
- Shifted the active cycle toward the next asset: `Tiny Home Cost / Reality Check Calculator`.
- Created the implementation brief for `Tiny Home Cost / Reality Check Calculator` at `briefs/tiny-home-cost-calculator-2026-07-10.md`.

## 2026-07-11

- Built the `Tiny Home Cost Calculator` page at `site/tiny-home-cost-calculator/index.html`.
- Added a calculator-first UI with inputs for structure quote, land, delivery, foundation/pad/anchoring, utilities, septic/sewer, water, electrical service, site prep, permits/design/engineering/surveys/inspections, taxes, financing, insurance, lot rent, and contingency.
- Added rough-budget outputs for visible seller quote, estimated all-in project budget, hidden-cost subtotal, contingency, estimated cash needed before move-in, monthly payment, monthly carrying cost, missing-cost warnings, and buyer-protection red flags.
- Kept cost assumptions cautious: major cost fields are blank unless entered, contingency is labeled as an `editable starter assumption`, and the page states the calculator cannot determine zoning, permit approval, code compliance, lender approval, insurance eligibility, or final contractor pricing.
- Linked the homepage planned cost-calculator card to the live calculator while keeping unrelated planned assets as non-link cards.
- Added `https://tinyhomeclarity.com/tiny-home-cost-calculator/` to `site/sitemap.xml` with `2026-07-10` lastmod.
- Completed SEO Research & Review for the cost calculator at `reviews/tiny-home-cost-calculator-review-2026-07-11.md`; verdict is `launch` with no blocking implementation fixes before commit/push.
- Committed and pushed the calculator in `68c2bb1 Add tiny home cost calculator`.
- Verified GitHub Pages deployment succeeded and live `HTTP 200` responses for the calculator, sitemap, robots.txt, and local records JSON.
- Validation passed for inline JavaScript parse, local internal-link sanity, `git diff --check`, and required deployment files.
- The Control Room selected the review-clean `$20K` candidate for one exact-path proving-period commit; push and deployment remain separately gated through 2026-07-19.

## 2026-07-13

- Rechecked Google Search Console for `tinyhomeclarity.com`.
- GSC sitemap status remains `Success`; last read July 11, 2026; discovered pages increased to 5 and discovered videos remained 0.
- GSC URL Inspection showed the homepage and Los Angeles support page are indexed.
- GSC URL Inspection showed San Diego, Georgia, and the cost calculator are discovered from the sitemap but not indexed yet.
- Requested indexing for San Diego, Georgia, and the cost calculator; GSC confirmed those URLs were added to the priority crawl queue.
- Confirmed analytics is not urgent while there are no clicks; analytics is deferred until meaningful traffic or a specific product question requires it.
- Created reusable personal Codex skill `gsc-monitor` for cross-project GSC monitoring workflow and public preflight checks.
- Added `ops/gsc-monitor.json` so Tiny Home Clarity can run the reusable public preflight script.
- Created next implementation brief: `briefs/tiny-house-under-20k-2026-07-13.md`.
- Dispatched the `$20K` page build to Implementation Agent thread `019f3cd1-b87c-7d51-aae4-9c1b024f5e9a`.
- Dispatched bounded `$20K` brief and GSC-state pre-review to SEO Research & Review Agent thread `019f3cd1-ef2e-7d90-82f4-bbad070df733`.
- Built the `Can You Build a Tiny House for Under $20K?` support page at `site/tiny-house-under-20k/index.html`.
- Added a `$20K` reality checker that lets readers allocate the target budget across structure/materials, trailer/foundation, tools, delivery, site work, utilities, permits/inspections, land, toilet/plumbing, electrical, insulation/HVAC, and contingency.
- Kept the page cautious: all entered values are planning assumptions, zero buckets are treated as exclusions or `UNKNOWN`, and the copy does not imply a tiny house under `$20K` is normal, easy, legal to place, or all-in.
- Linked the homepage `$20K` planned card to the local candidate page and added its future public URL, `https://tinyhomeclarity.com/tiny-house-under-20k/`, to `site/sitemap.xml` with `2026-07-13` lastmod. It becomes live only after an authorized deployment.
- Completed SEO Research & Review for the `$20K` brief and rendered page at `reviews/tiny-house-under-20k-review-2026-07-13.md`; verdict is `launch` with no required implementation fixes before the exact-path local commit. Push and deployment remain separately gated.
- Validation passed for inline JavaScript parse, local internal-link sanity, `git diff --check`, and required deployment files.

## 2026-07-18

- Consolidated the external bootstrap business plan into `strategy/current-strategy.md` as the operating strategy source.
- Recorded that SERP review should be targeted from GSC/page evidence rather than run on every no-op scan, and that backlink outreach should wait until the site has clearer link-worthy assets.
- Recorded a strategy correction that the placement homepage should act as a hub, not the sole ranking bet for localized placement intent.
- Recorded a quality correction: existing source-backed pages need answer-first guidance that separates official-source facts, likely-fit conditions, stop conditions, next questions, and remaining parcel-specific unknowns.
- Ran a capped California query-demand pull through DataForSEO Google Ads `search_volume/live`:
  - Successful reported task cost: approximately `$0.18`.
  - 109 processed keyword rows.
  - 50 known nonzero volume rows.
  - Raw responses saved under `docs/research/raw/`.
  - Processed CSV and summary saved under `docs/research/processed/`.
  - Research report saved at `docs/research/california-tiny-home-query-demand-2026-07-18.md`.
- California demand finding: broad/commercial state and city terms are materially stronger than explicit placement/zoning terms. The evidence supports improving existing Los Angeles and San Diego source pages before building more city pages, with a possible future California MTH/ADU/placement hub if SERP/GSC evidence supports it.
- Ran a focused DataForSEO SERP snapshot for `tiny house san diego` in both
  United States and California locations:
  - Successful reported task cost: approximately `$0.012`.
  - Report saved at `docs/research/serp-tiny-house-san-diego-intent-2026-07-18.md`.
  - Finding: the query is mixed local/commercial intent, with listings,
    builders, Facebook/community, Airbnb/stay, video, and some official/news
    results. The San Diego page should be improved as an answer-first local
    guide, not just a narrow zoning/source memo or generic intent menu.
- Ran a focused LA/San Diego intent-bucket keyword pull:
  - Successful reported task cost: approximately `$0.09`.
  - 50 keywords across broad, buy/listings, builders, communities, stays,
    ADU/MTH, THOW, and rules/zoning buckets.
  - Report saved at `docs/research/la-san-diego-addressable-query-volume-2026-07-18.md`.
  - Implementation brief saved at `briefs/la-san-diego-page-repair-2026-07-18.md`.
  - Finding: direct legal/placement exact demand is small, but mixed city demand
    is meaningful enough to repair LA and San Diego into buyer-protective local
    guides before creating more city pages.
- Ran a capped build-intent keyword pull through DataForSEO Google Ads
  `search_volume/live`:
  - Successful reported task cost: approximately `$0.09`.
  - Raw response saved at
    `docs/research/raw/dataforseo-build-intent-keywords-us-2026-07-18.json`.
  - Processed CSV and summary saved at
    `docs/research/processed/tiny-home-build-intent-keyword-demand-2026-07-18.csv`
    and
    `docs/research/processed/tiny-home-build-intent-keyword-demand-summary-2026-07-18.json`.
  - Research report saved at
    `docs/research/tiny-home-build-intent-query-demand-2026-07-18.md`.
- Added a human-searcher review gate and reusable review prompt, then reviewed
  the current Los Angeles and San Diego page repairs from target-query POV.
  Review saved at
  `reviews/la-san-diego-human-searcher-review-2026-07-18.md`; verdict is
  `improve`.
- Applied the human-searcher review fixes to the Los Angeles and San Diego
  pages:
  - replaced SERP/page-explanation ledes with direct buyer answers,
  - added early city/county stop conditions,
  - added first-action blocks and listing/builder claim tables,
  - added Los Angeles shelter-village and San Diego community/stay distinctions,
  - made the bottom CTA local-specific,
  - added table styling with horizontal overflow protection.
- Independent implementation review passed with verdict `PASS`; notes saved at
  `reviews/la-san-diego-human-searcher-implementation-review-2026-07-18.md`.
- Added beginner / intermediate / advanced tiny-house personas to the SEO
  Research & Review agent, reusable review prompt, and content principles so
  broad local pages are reviewed from human searcher experience levels before
  `launch` / `PASS`.
