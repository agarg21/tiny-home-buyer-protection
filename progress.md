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

## 2026-07-28

- Registered direct-manual action `THC-OPS-001` to harden the research,
  persona-review, QA, and operating model without changing `site/**`.
- Reconciled local `main` with `origin/main` and ingested the July 27 and July
  28 mechanical GSC snapshot commits. The July 28 snapshot is unchanged versus
  July 27: 30 impressions, 0 clicks, sitemap `Success`, 6 discovered pages, 5
  of 6 priority URLs indexed, and 0 unknown priority URLs.
- Replaced overlapping child-agent write ownership with one project writer:
  the Master / Operator. Research, implementation advisory, and independent
  review roles are read-only.
- Added `docs/plan/tiny-home-search-product-playbook.md` to require bounded
  query research, retained SERP-overlap samples, representative ranking-page
  review, evidence-linked decision personas, beginner/intermediate/advanced
  experience passes, every-page/every-section audits, and exactly one promoted
  implementation action.
- Added `status/site-pages.md` as the durable six-page role, review, GSC
  baseline, and blocker inventory. Daily monitoring remains in dated
  `ops/gsc-snapshots/` files.
- Expanded `templates/searcher-pov-review-prompt.md` with decision-job persona,
  every-section, category-boundary, technical, visual, and first-screen gates.
- Added independent reviewer instructions plus zero-dependency site and
  operator-state QA entry points and fixture tests.
- Initial native QA passed: 21 Node tests, site QA with 0 errors and 6 known
  missing-canonical warnings, operator-state QA with 0 errors, JSON parsing,
  required-file checks, and `git diff --check`.
- Independent read-only review found stale current-cycle/bootstrap authority and
  adversarial validator gaps in cycles 1 and 2. All P2 findings were fixed with
  regression coverage.
- Final native QA passed 26 Node tests, site QA with 0 errors and 6 known
  missing-canonical warnings, operator-state QA with 0 errors, JSON parsing,
  required-file checks, and `git diff --check`.
- Independent reviewer thread `019fa969-1f74-7113-9c5e-92eaa8949696`
  returned `PASS` on cycle 3 with no P0-P3 findings.
- Completed `THC-OPS-001` as docs/tools-only work. No deployment applies;
  `THC-RES-001` remains planned and was not started.
- Registered `THC-OPS-002` after the user explicitly removed the fixed daily
  substantive-action limit. The replacement keeps transactions serial,
  exact-path, QA-green, and independently reviewed.
- Completed `THC-OPS-002` after independent reviewer cycle 3 returned `PASS`
  with no P0-P3 findings. Native QA passed 26 tests, site/state checks, both
  JSON validations, required-file checks, and `git diff --check`.
- Registered research-only action `THC-RES-001` after the protocol transaction
  was pushed. Its frozen scope contains ten research and durable-state paths
  and excludes `site/**`.
- Reused the July 18 DataForSEO demand artifacts, treated the unchanged July 28
  GSC snapshot as monitoring only, collected a bounded current public SERP and
  representative ranking-page sample, and audited all six live pages plus the
  planned national build asset.
- Derived six evidence-linked decision personas and reviewed beginner,
  intermediate, and advanced experience needs separately.
- Recorded every-section dispositions, architecture boundaries, a scored
  candidate comparison, and one promoted implementation:
  `THC-HOME-001`, the homepage placement-hub repair.
- Recorded a later San Diego freshness opportunity around the distinct current
  unincorporated-County THOW path, but kept the recently repaired City page in
  observation.
- Draft research pack:
  `docs/research/tiny-home-clarity-full-site-decision-pack-2026-07-28.md`.
- Independent review cycles 1 and 2 found reproducibility gaps in SERP
  metadata/overlap, persona evidence, every-section dispositions, and the
  current San Diego City code source. All P2 findings and the P3 source cleanup
  were fixed.
- Independent reviewer thread
  `019fa9f0-f0e4-7f40-a628-5e258b93af39` returned `PASS` on cycle 3 with no
  P0-P3 findings.
- Final native QA passed 26 tests, site QA with 0 errors and 6 known canonical
  warnings, operator-state QA, roadmap JSON validation, required-file and
  exact-scope checks, and `git diff --check`.
- Completed `THC-RES-001` as a review-clean research-only transaction. No page
  implementation, indexing, deployment, outreach, external-account mutation,
  vendor recommendation, cost conclusion, or legal conclusion was performed.
- Committed and pushed `THC-RES-001` in `2400e13`.
- Registered `THC-HOME-001` as the next separate direct-manual implementation
  transaction at clean base `2400e13765c19c21559b6262932dd27b1d8cee84`.
- Rebuilt `site/index.html` around a direct four-factor placement answer,
  beginner-friendly category decoder, reduced checker, ordered decision-path
  output, scoped source matching, static local guides, one proof checklist, and
  live cost routes.
- Removed generic location-looking rule/path output, confidence scoring,
  visible `UNKNOWN` record fields, public schema/MVP language, duplicate
  checklist/source sections, and planned-tool cards.
- Updated shared styles for the four-factor panel, step form, honest result
  states, scoped sources, and responsive layouts without changing other page
  behavior.
- Added the homepage canonical and changed its sitemap lastmod to 2026-07-28.
- Inline script parsing and native site QA passed; the homepage removed one
  canonical warning, leaving five known warnings on unchanged pages.
- Browser QA passed blank validation, LA/SD supported routes, City boundary
  stops, Georgia classification-only, unsupported and escaped inputs, focus
  handoff, desktop/mobile layouts, and zero horizontal overflow.
- Independent review cycle 1 found four P2 issues: repeated factor/proof blocks,
  a below-fold 320px CTA, unbroken-input overflow, and stale current-cycle
  authority text. It also found one P3 Georgia status wording issue.
- Fixed all cycle 1 findings. The 320px primary CTA now ends above 439px and
  the next section begins at 524px; Georgia is explicitly
  classification-only; and the generated result links to the single static
  proof checklist.
- Independent review cycle 2 found that maximum-length unbroken place input
  still overflowed inside the City-specific generated step, correcting the
  narrower general-result QA claim.
- Applied wrapping to the entire placement result. The exact maximum-length
  City case now holds document width at 320px with no list-item or title
  overflow.
- Independent reviewer thread
  `019faa05-b89c-7700-9eac-48f0b482bbe3` returned `PASS` on cycle 3 with no
  P0-P3 findings.
- `THC-HOME-001` is review-clean and release-authorized. Final native QA,
  commit, push, Pages, and production verification followed.
- Committed and pushed the exact 11-path review-clean implementation as
  `7f9ea5f558c288c06d6d18d046a7cc13443a2352`.
- GitHub Pages run `30390104298` succeeded.
- The live homepage returned HTTP 200 and byte-matched the committed HTML; the
  live sitemap byte-matched the committed XML.
- Production browser checks passed the homepage canonical, legacy anchors,
  visible-copy boundaries, Los Angeles City source route, County stop, focus
  handoff, and desktop containment.
- Completed `THC-HOME-001` as released and production-verified.
- Registered `THC-SD-001` at clean aligned base
  `8b0013f0d14dfea010636a6afaed8587698dc55b` with 14 frozen paths.
- Preserved July 18 demand/SERP evidence and added current public result-type,
  City-code, County-determination, jurisdiction-map, and water/wastewater
  research in
  `docs/research/san-diego-city-county-tiny-house-refresh-2026-07-28.md`.
- Corrected the City source model from the dated ADU/companion framing to
  current Municipal Code section 141.0318.
- Added a separate unincorporated San Diego County THOW source record based on
  current County guidance and the September 4, 2025 determination.
- Rebuilt the San Diego page around City, unincorporated County, and
  other-incorporated-city routes; consolidated repeated buyer-protection
  sections; added a canonical; and updated the sitemap date.
- Added exact County routing to the homepage and versioned its source-data
  request after adversarial browser QA exposed a stale-cache mismatch.
- Read-only SEO research advisor
  `019faa73-88bf-7eb2-ab95-5ded1eb84fc9` independently confirmed the
  jurisdiction-first strategy and current-code correction.
- Preliminary native QA passed 26 tests, site QA with 0 errors and four
  unchanged canonical warnings, operator-state QA, JSON/script parsing, and
  `git diff --check`.
- Responsive and functional browser QA passed City/County/other-jurisdiction
  boundaries, source links, focus, cache-safe records, and desktop/390px/320px
  containment.
- Independent read-only operator review cycle 1 found two P2 documentation
  inconsistencies and no page/source defects. Both were fixed; cycle 2 returned
  `PASS` with no remaining P0-P3 findings.
- Released `THC-SD-001` in
  `daaf743d6d35f94659fb776372505ba0c13927b0`; Pages run `30399382114`
  succeeded. Live repository-byte, HTTP, canonical, H1, City/County routing,
  incorporated-city non-match, focus, source-link, and mobile-containment
  checks passed.
- Registered direct-manual action `THC-COST-001` on 2026-07-29 at clean,
  origin-aligned base `38a3654cff2818a1a6b8390bc0ec4ebf2484262c`.
- Froze 17 exact paths for current query/SERP and ranking-page research,
  calculator repair, focused tests, and operator/strategy mirrors. No adjacent
  page implementation or typical/complete cost claim is authorized.
- Completed the dated calculator research record with current exact-query
  Semrush evidence, a retained ranking-page sample, prior-state proof,
  decision-persona and experience-level review, every-section decisions, a
  four-state input contract, tests, and release invariants.
- A read-only research advisor returned `FAIL/improve` on the prior live page;
  its P1/P2 findings are addressed in the working-tree implementation.
- Rebuilt the calculator as a quote/budget reality check. Blank stays neutral;
  partial results put unknowns first and keep the optional buffer separate;
  four bucket states remain traceable; utilities cannot double count a general
  field; project paths change questions rather than price assumptions; and
  financing requires coherent inputs.
- Added sixteen focused native tests. Local desktop, 390px, and 320px browser
  checks passed the blank, quote-only, four-state, resolved, zero-interest,
  negative-input, focus, first-viewport, and containment invariants.
- Full native QA passes 42/42 tests, zero site errors with three pre-existing
  untouched-page canonical warnings, zero operator-state errors, JSON and
  required-file checks, and `git diff --check`.
- Independent reviewer `019fad57-656e-73a1-a687-08e4eb1f63fb` returned `FAIL`
  in cycle 1 with one P1, five P2, and one P3 finding. Fixed exact-value input
  constraints, lot-rent applicability and transitions, next-question order,
  paired-query SERP reproducibility, beginner project-type explanations,
  durable QA state, and the shared CSS selector collision.
- Cycle 2 confirmed all cycle 1 fixes and returned `FAIL` on one new P2
  visible-cent precision issue plus a P3 unsupported top-nine SERP sentence.
  Fixed exact currency and recurring traces, added native and 320px browser
  output assertions, and removed the unsupported sentence.
- Cycle 3 confirmed all prior fixes, then returned `FAIL` on undecided-land
  monthly completeness plus a stale P3 review instruction. Fixed both: blank
  or undecided land and rented space without known rent now stay `Known monthly
  costs`; owned, buying, and rented space with known rent may show `Entered
  monthly total`. Six native branches and a 320px browser pass confirm it.
- Stopped `THC-COST-001` without commit, push, or deployment because the third
  review cycle returned `FAIL` and exhausted the cap. A separate registered
  continuation with fresh independent review authority is required.
- Registered direct-manual continuation `THC-COST-002` on 2026-07-29 at
  origin-aligned base `38a3654cff2818a1a6b8390bc0ec4ebf2484262c`. It inherits
  the complete 17-path held candidate for fresh independent review and
  conditional release only.
- `THC-COST-002` independent review cycle 1 by
  `019fae23-18cf-7a10-bd54-cb104163517e` returned `FAIL` with two P2 groups and
  no P0, P1, or P3 findings. Fixed unknown starting and buffer values that
  could appear as zero, preserved deliberate zero, made coherent
  financing-only input a partial monthly scenario, and corrected two stale
  action mirrors.
- Added three focused regression tests; 19/19 calculator tests pass. Desktop
  browser checks passed the three repaired states and result focus. A 320px
  check reported 320px document width, no overflowing elements, and a
  contained result panel. Full native QA passes 45/45 with zero SEO and
  operator-state errors. Cycle 2 full-range review is pending.
- `THC-COST-002` independent cycle 2 returned `PASS_WITH_P3`. It confirmed all
  cycle 1 fixes, the exact 17-path scope, and the full human, arithmetic, SEO,
  responsive, test, and operator-state review surface. The sole P3 is
  nonblocking wording for the all-buckets-resolved, blank-buffer partial title;
  it is recorded without changing the reviewed site bytes.
- Fast-forwarded the compatible remote-only GSC snapshot commit `f52c1c0`
  before release. The July 29 snapshot validates and is unchanged versus July
  28 except for collection/data-through dates, so it remains monitoring context
  and does not alter the calculator action.
- Final independent cycle 3 returned `PASS_WITH_P3` with no P0-P2 findings and
  retained the same nonblocking buffer-title wording note.
- Committed and pushed the exact 17-path calculator transaction in
  `1af1dc2d53fee70dff9b4dfd035ecc9d0ae920c6` from aligned base `f52c1c0`.
  Pages run `30460242431` succeeded.
- Production calculator HTML, JavaScript, stylesheet, and sitemap byte-match
  the repository. Live blank, quote-only, outside-cost/no-start,
  blank-versus-zero buffer, financing-only, focus, console, and 320px
  containment checks passed.
- Registered direct-manual `THC-BUILD-002` on 2026-07-29 at clean,
  origin-aligned base `7083794c1176a670f6e4997a9cdeaa10ae0466f4`.
- Froze 19 exact paths for one national build-options comparison and
  due-diligence page, current research/review evidence, an original worksite
  image, focused tests, homepage/sitemap integration, and operator mirrors.
  No directory, recommendation, typical/complete cost, legal/permit answer,
  lead generation, indexing, outreach, or external-account work is authorized.
- Completed the bounded query/SERP, representative ranking-page,
  official-source, decision-persona, experience-level, and every-section
  research refresh for `THC-BUILD-002`.
- Built the static `/tiny-house-build-options/` candidate with seven distinct
  responsibility paths, six scope handoffs, seven written document groups,
  red flags, scoped source notes, and links to the placement and cost tools.
- Added the original generated worksite image, homepage and sitemap discovery,
  responsive comparison records, and five focused contract tests.
- Local QA passes: 50/50 native tests, zero SEO errors with three known
  unrelated canonical warnings, zero operator-state errors,
  `git diff --check`, 1440px/390px/320px rendering, no horizontal overflow,
  loaded image, and no browser warnings or errors. Independent review is
  pending.
- Independent cycle 1 reviewer
  `019fb0a9-b3ae-7d61-88aa-029533866535` returned `FAIL` with three P2
  findings and one P3. Added an exact reproducible SERP sample, restored four
  retained CPC values, compacted the <=360px first screen, removed false
  mobile scroll semantics, and added a regression test.
- Repaired QA passes 6/6 focused and 51/51 full tests. At 320x568 and 320x700,
  the comparison eyebrow is visible below the complete first-screen answer and
  image strip with a 320px document width and no overflowing element. Cycle 2
  independent re-review is pending.
- Cycle 2 verified every cycle 1 fix and the full 19-path candidate, then
  returned `FAIL` for one P2 stale count in `ops/current-cycle.md`: five
  focused tests instead of six. Corrected that word; final cycle 3 is pending.
- Cycle 3 confirmed every page, research, persona, claim, scope, responsive,
  and QA gate but returned `FAIL` because two current-state mirrors still
  described cycle 2 as pending or as the release gate. Corrected both mirrors.
- Stopped `THC-BUILD-002` uncommitted and unreleased after exhausting its
  three-cycle cap. The fixed 19-path candidate requires a separate registered
  continuation and fresh independent reviewer.
- Registered `THC-BUILD-003` as the serial fresh-review and conditional-release
  continuation for the same exact fixed 19 paths at base
  `7083794c1176a670f6e4997a9cdeaa10ae0466f4`. No new implementation or
  research is authorized.
- Fresh independent reviewer
  `019fb78f-65a1-7e90-b528-8dfac328418f` returned `PASS` with no findings on
  the complete `THC-BUILD-003` candidate.
- Fetched and fast-forwarded compatible automated GSC snapshot commit
  `3b8c3a6`. The validated July 30 snapshot has unchanged material metrics
  versus July 29 and remains monitoring context. A reconciled-state review was
  then required.
- Fresh cycle 2 reviewed the complete candidate from reconciled base `3b8c3a6`
  and returned `PASS` with no findings. Exactly 19 frozen paths remain and the
  candidate reached its final frozen-state verification checkpoint.
- Fresh cycle 3 returned `PASS` with no findings on the frozen candidate.
- Committed and pushed the exact 19 paths in
  `18956949f0fe2748f13f0c71505dadf927a63150` from reconciled base `3b8c3a6`.
- Pages run `30622059848` succeeded. Production page HTML, original image,
  shared stylesheet, homepage, and sitemap return HTTP 200 and byte-match the
  repository.
- Live 1440x900, 390x844, and 320x568 checks passed canonical, H1, image
  dimensions, seven comparison paths, first-viewport continuity, labeled
  mobile records, containment, and console invariants.
- Registered direct-manual `THC-MON-001` on 2026-08-01 at clean,
  origin-aligned base `8c38181` with 13 frozen paths and no `site/**`, indexing,
  outreach, backlink, or external-account authority.
- Authenticated GSC daily rows exposed eight finalized zero-impression days
  from July 22 through July 29. The August 1 rolling snapshot remains 30
  impressions and 0 clicks, while public crawl surfaces, five established
  indexed pages, manual-action, and security evidence remain healthy.
- Recorded the measured/inferred/unknown diagnosis and a bounded current SERP
  sample in
  `docs/research/tiny-home-visibility-diagnosis-2026-08-01.md`; no blanket page
  rewrite is supported.
- Added the build-options URL to routine GSC inspection and implemented
  privacy-safe finalized daily rows plus a tested seven-day zero-impression
  status. Focused tests pass 16/16 and all 15 historical snapshots validate.
- Promoted `THC-AUTH-001` as a separate ready research-only candidate for
  legitimate citation opportunities. It is not selected or started, and no
  outreach or link placement occurred.
- Independent read-only reviewer
  `019fbf70-9256-75e3-85d6-fbff50aa0516` returned `PASS_WITH_P3` with no P0-P2
  findings on the complete 13-path transaction. Two nonblocking P3 notes retain
  future direct malformed-row validator tests and fuller market/device/order
  capture for SERP samples used in page architecture.
- Committed and pushed the exact 13-path `THC-MON-001` transaction in
  `5e2dbae380705fb8f52d1e0caf3682f770276cb3` from aligned base `8c38181`.
  No deployment applies because the action changed no `site/**` path.
- Registered direct-manual `THC-AUTH-001` on 2026-08-03 at clean,
  origin-aligned base `c6e795d` with nine frozen paths and no site, content,
  indexing, outreach, link-placement, payment, account, vendor, cost, or legal
  authority.
- Validated the August 2 and August 3 GSC snapshots. Two isolated impressions
  ended the prior zero streak, but the August 3 snapshot remains extremely
  weak at 32 rolling impressions and 0 clicks. The sitemap reports seven
  discovered URLs; URL Inspection reports five indexed URLs, the under-$20K
  URL as unknown to Google, and the build-options URL as
  discovered-currently-not-indexed. Public preflight passes for all seven URLs.
- Audited the seven existing assets and current public resource, contact,
  membership, advertising, guest-post, and submission pages. Retained one
  pursue-later fit, held six conditional candidates, and rejected paid,
  promotional, link-led, or credential-mismatch routes in
  `docs/research/tiny-home-authority-opportunity-plan-2026-08.md`.
- The sole supported follow-on is a separately reviewed, human-gated
  one-contact suggestion to Boston Architectural College Library. No outreach,
  submission, external-account mutation, or link placement occurred.
- Independent reviewer `019fc80e-9063-7a43-b144-c9e7313a8fe2` returned `FAIL`
  in cycle 1 with two P2 evidence groups. Corrected the merged GSC indexing
  states, replaced stale Dwell evidence, evaluated Tiny House Expedition's
  relevant directory, moved it to hold, and synchronized six holds.
- Cycle 2 returned `PASS` with no P0-P3 findings. Native QA passes 54/54 tests,
  zero SEO errors with three known canonical warnings, zero operator-state
  errors, all 17 historical snapshot validations, valid JSON, required files,
  exact nine-path scope, and `git diff --check`.
- Final cycle 3 returned `PASS` with no findings on the completed roadmap state,
  exact message-approval gate, sole BAC organizational recipient, and
  stop-after-one boundary.
- Closed `THC-AUTH-001` as review-clean research-only work and marked
  `THC-AUTH-002` ready but unselected. Its one-contact BAC library send requires
  explicit user approval of the exact recipient, subject, and body.
