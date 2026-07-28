# Current Cycle

Last updated: 2026-07-28

Active action: `THC-SD-001`

Next eligible action: `none`

## Active Priority

`THC-SD-001` is a direct-manual research and implementation transaction selected
on 2026-07-28 after `THC-HOME-001` was production-verified. It repairs the
existing San Diego URL around the reader's first jurisdiction decision: City
of San Diego, unincorporated San Diego County, or another incorporated city.

The action must preserve dated SERP samples and current official City/County
sources, keep the two source paths separate, give incorporated-city readers no
false County answer, consolidate repetitive caution/checklist material, and
update homepage source routing only for an exact supported jurisdiction.

Frozen paths are the 14 exact paths in `ops/seo-roadmap.json`. Do not edit
another page, the deployment workflow, indexing, analytics, outreach, external
accounts, vendors, typical/complete costs, or parcel-level legal conclusions.

Evidence classification:

- Direct manual user instruction selects the action.
- Durable July 18 demand/SERP research and the July 28 full-site pack establish
  the mixed local searcher job and the County freshness gap.
- Current public SERP and official-source research may support page strategy and
  factual scope.
- The 2026-07-28 GSC snapshot remains healthy monitoring context: 30
  impressions, 0 clicks, six discovered pages, and five of six priority URLs
  indexed. It does not cause this repair.

Research and implementation result:

- Preserved the July 18 DataForSEO demand and rank-order SERP evidence, then
  added a dated July 28 public result-type sample and current official source
  hierarchy in
  `docs/research/san-diego-city-county-tiny-house-refresh-2026-07-28.md`.
- Found that the current July 2026 City code has a dedicated Movable Tiny House
  section 141.0318; the old page and local record incorrectly centered the
  October 2020 ADU/companion-unit framing.
- Rebuilt the existing San Diego URL around a first-screen City,
  unincorporated-County, or other-incorporated-city choice.
- Kept the City MTH and County THOW source paths, standards, offices,
  confidence, and unresolved parcel checks visibly separate.
- Consolidated listing, builder, community, stay, proof, office, and caution
  material into one claim table and one written-proof workflow.
- Added an explicit canonical and updated the sitemap lastmod without creating
  another San Diego URL.
- Updated the City source record, added a separately scoped County source
  record, and taught the homepage to match San Diego County only when the user
  selects unincorporated County.
- Versioned the homepage record request so returning browsers cannot combine
  the new HTML with stale source data.

Preliminary QA:

- 26 native tests passed.
- Site QA: six HTML pages and six sitemap URLs, zero errors, four unchanged
  missing-canonical warnings.
- Operator-state QA, roadmap JSON, local-record JSON, homepage script parsing,
  and `git diff --check` passed.
- San Diego browser QA passed at 1440x900, 390x844, and 320x568 with no document
  overflow; the 320 first screen reveals the jurisdiction section.
- Homepage County, City, Oceanside, unknown-jurisdiction, focus, source URL, and
  320px result-containment cases passed.
- Read-only research advisor `019faa73-88bf-7eb2-ab95-5ded1eb84fc9` independently
  confirmed the jurisdiction-first strategy and current-code correction.
- Independent read-only review returned `PASS` in cycle 2 after both cycle 1
  P2 documentation inconsistencies were fixed. Commit, push, Pages, and
  production verification remain.

`THC-HOME-001` remains complete and production-verified:

Implementation result:

- Replaced the caution-first hero with a direct four-factor placement answer.
- Moved the category decoder before the checker.
- Reduced the form to jurisdiction, home type, intended use, and land context.
- Replaced generic rule buckets, "verification plan," confidence score,
  `UNKNOWN` fields, and raw record schema with four ordered checks, written
  proof requests, and pre-payment red flags.
- LA and San Diego match only when `Inside city limits` is selected; Georgia
  remains classification-only; unsupported locations receive general decision
  support without a source or confidence claim.
- Added static scoped guide links, one proof checklist, live cost routes,
  homepage canonical, and sitemap lastmod `2026-07-28`.

Final QA: native site/state checks are green. Browser cases passed blank
validation; LA/SD source routes and city/county boundaries; Georgia
classification-only; unsupported and escaped input; focus handoff; desktop,
tablet, 375px, and 320px layout; maximum-length City input; and zero horizontal
overflow.

Independent review returned `PASS` on cycle 3 with no P0-P3 findings after
repetition, mobile first-screen, stale-state, classification wording, and
adversarial overflow fixes.

Release completed:

- Commit: `7f9ea5f558c288c06d6d18d046a7cc13443a2352`
- Pages run: `30390104298` (`success`)
- Live homepage: HTTP 200 and byte-matched committed `site/index.html`
- Live sitemap: byte-matched committed `site/sitemap.xml`
- Live browser: canonical, legacy anchors, visible-copy boundaries, LA City
  source route, county stop, focus handoff, and desktop containment passed.

`THC-BUILD-002` remains a candidate and is not selected. No other page revamp,
fresh keyword/SERP research, indexing request, outreach, external-account work,
builder/vendor recommendation, cost claim, or legal/zoning conclusion is part
of this homepage transaction.

Continue to observe validated daily GSC snapshots, but do not turn routine
snapshot drift into a project action unless it identifies a discovery, indexing,
or performance signal worth evaluating.

The 2026-07-18 authenticated Page indexing review found no technical indexing
defect: the three excluded URLs are HTTP/www aliases that correctly redirect to
the HTTPS apex. See `ops/gsc-indexing-review-2026-07-18.md`; do not request
indexing or validate a fix for these aliases.

California query-demand research completed on 2026-07-18:
`docs/research/california-tiny-home-query-demand-2026-07-18.md`. It found broad
California/city tiny-home demand, but low and fragmented exact placement/zoning
demand. Do not mass-build city pages from volume alone; improve the existing
source-page format first.

San Diego SERP intent research completed on 2026-07-18:
`docs/research/serp-tiny-house-san-diego-intent-2026-07-18.md`. It found
`tiny house san diego` is mixed local/commercial intent, not a pure zoning
query. Improve the San Diego page as an answer-first local guide, not just a
cautious source memo or generic intent menu.

LA/San Diego addressable-volume research and repair brief completed on
2026-07-18:
`docs/research/la-san-diego-addressable-query-volume-2026-07-18.md` and
`briefs/la-san-diego-page-repair-2026-07-18.md`. The repair shipped in
`378bd659b042e96f97c6c0f5e8ae55436df6d84a`; do not create new city pages from
that research alone.

The 2026-07-28 GSC snapshot is fresh read-only monitoring evidence with data
through 2026-07-26, but it is unchanged versus the prior dated 2026-07-27
snapshot: 30 impressions, 0 clicks, sitemap `Success`, 6 discovered pages, 5 of
6 priority URLs indexed, and 0 unknown priority URLs. Treat it as observation
evidence, not a standalone action trigger.

## Recently Completed

- Installed unattended read-only GSC collection in `110d923`; workflow run
  `29627800041` succeeded and snapshot commit `8ee6066` established the first
  baseline: 20 impressions, 0 clicks, five sitemap URLs discovered, and 5 of 6
  priority URLs indexed.
- Released commit `a90434e` on 2026-07-17. GitHub Pages run `29627141191`
  succeeded for the exact SHA; the live under-$20K guide and sitemap byte-match
  the committed files and retain the reviewed buyer-protective invariants.
- Released `THC-QUAL-001` in commit
  `378bd659b042e96f97c6c0f5e8ae55436df6d84a` on 2026-07-19. GitHub Pages run
  `29682037581` succeeded; the live Los Angeles page, San Diego page, and
  sitemap returned `HTTP 200`, and the LA/SD pages showed the new human-first
  opening copy. Independent read-only review returned `PASS_WITH_P3` with no
  P0-P2 findings; P3 documentation/wording cleanups were applied before commit.
- Completed `THC-BUILD-001` in commit
  `68fc013c6b4fb881de6ec3f90d243451c6c6379a` on 2026-07-20. The action scoped
  the national tiny-home build decision / builder due-diligence asset as an
  internal reviewed brief only. No site implementation was started.
- Completed the 2026-07-27 weekly roadmap re-score as a queue-level no-op. The
  newest GSC snapshot was unchanged versus the prior dated snapshot and did not
  unlock monitoring, implementation, indexing, outreach, or external-account
  work.
- Bootstrap repo scaffold created.
- GitHub Pages workflow prepared.
- GitHub repo created and pushed: `agarg21/tiny-home-buyer-protection`.
- GitHub Pages configured via Actions and verified at `https://agarg21.github.io/tiny-home-buyer-protection/`.
- Deployment plan drafted.
- Domain research drafted with RDAP/DNS signals.
- Project strategy converted from the business plan.
- Agent charters and child chat bootstrap prompts prepared.
- First product spec drafted at `briefs/where-can-i-put-a-tiny-house-product-spec.md`.
- First static MVP page/tool built at `site/index.html`.
- MVP includes general placement triage, cautious result logic, local verification checklist, red flags, and required local/zoning record fields.
- Unsupported locations currently return general triage only with `Low` confidence and `UNKNOWN` official source fields.
- SEO Research & Review completed the first product spec and built-MVP review at `reviews/where-can-i-put-a-tiny-house-spec-review-2026-07-07.md`.
- Implementation Agent chat created: `019f3cd1-b87c-7d51-aae4-9c1b024f5e9a`.
- SEO Research & Review Agent chat created: `019f3cd1-ef2e-7d90-82f4-bbad070df733`.
- Porkbun authoritative DNS updated for `tinyhomeclarity.com`: apex points to GitHub Pages A records and `www` points to `agarg21.github.io`.
- Fixed HTTPS setup for `tinyhomeclarity.com`: removed leftover Porkbun wildcard parking CNAME, retriggered GitHub Pages certificate provisioning, and enabled HTTPS enforcement.
- `http://tinyhomeclarity.com/` redirects to `https://tinyhomeclarity.com/`; HTTPS homepage and sitemap return `HTTP 200`.
- Implementation applied launch-readiness improvements from `reviews/where-can-i-put-a-tiny-house-spec-review-2026-07-07.md`.
- The MVP now includes official-source starter links, a buyer-facing local-record note, non-link planned tool cards, and `Page last reviewed: 2026-07-08`.
- SEO Research & Review completed final launch review at `reviews/where-can-i-put-a-tiny-house-launch-review-2026-07-08.md`.
- Final review verdict: `improve first`, limited to public brand rename from `Tiny Homes Buyer Protection` to `Tiny Home Clarity` and a small CSS contrast fix.
- First official-source local/source record shortlist: Los Angeles, San Diego, Austin, and Georgia DCA state classification.
- Implementation applied final launch fixes: public-facing brand is now `Tiny Home Clarity`, and subtle metadata text color was darkened for contrast.
- Google Search Console Domain property for `tinyhomeclarity.com` was verified via Porkbun DNS TXT record.
- Submitted `https://tinyhomeclarity.com/sitemap.xml` in GSC and requested indexing for the homepage.
- Added `site/robots.txt` and sitemap `lastmod` metadata.
- SEO Research & Review created the first implementation-ready official-source record set at `reviews/official-source-records-where-can-i-put-a-tiny-house-2026-07-08.md`.
- Records ready for Implementation: Los Angeles MTH-as-ADU, San Diego movable tiny house / ADU-related path, and Georgia DCA state classification.
- Austin was deferred pending deeper current-code reconciliation.
- GSC sitemap status changed from initial `Couldn't fetch` to `Success`; last read July 8, 2026, with 1 discovered page.
- Implementation added the approved Los Angeles, San Diego, and Georgia DCA records to `site/data/local-records.json`.
- MVP UI now renders the records as official-source examples with source URLs, last checked dates, confidence levels, and non-approval caveats.
- Unsupported locations remain general national triage with low personal placement confidence and `UNKNOWN` official-source fields.
- SEO Research & Review completed rendered official-source record review at `reviews/rendered-official-source-records-review-2026-07-08.md`.
- Rendered record verdict: `launch`; no implementation-blocking fixes required.
- GSC sitemap status remains `Success` with 1 discovered page; homepage indexing status was not successfully rechecked in this pass.
- Official-source record implementation was committed and pushed in `5bedfca Add official source records`.
- Public Google search for `site:tinyhomeclarity.com` returned the homepage on 2026-07-09, but GSC URL Inspection/page indexing status still needs a direct recheck.
- Master approved a small support-cluster brief at `briefs/local-source-support-pages-2026-07-09.md` after deciding the homepage can rank better with narrow, official-source-backed supporting pages.
- Implementation built the first constrained support cluster:
  - `site/los-angeles-tiny-house-adu/index.html`
  - `site/san-diego-tiny-house-adu/index.html`
  - `site/georgia-tiny-house-classification/index.html`
- Homepage official-source record cards now link to the matching support pages and show one official source link by default.
- `site/sitemap.xml` now includes all three support URLs with `2026-07-09` lastmod dates.
- SEO Research & Review completed support-cluster review at `reviews/local-source-support-pages-review-2026-07-09.md`.
- Support-cluster verdict: `launch`; no implementation-blocking fixes required.
- Review confirmed Austin is absent, Los Angeles and San Diego are city-only examples, Georgia is classification-only, homepage links make sense, and sitemap support URLs have `2026-07-09` lastmod dates.
- Master committed and pushed the support cluster in `4b467d2 Add local source support pages`.
- GitHub Pages deployment succeeded for `4b467d2` on 2026-07-09.
- Live checks returned `HTTP 200` for the homepage, sitemap, and all three support URLs:
  - `https://tinyhomeclarity.com/los-angeles-tiny-house-adu/`
  - `https://tinyhomeclarity.com/san-diego-tiny-house-adu/`
  - `https://tinyhomeclarity.com/georgia-tiny-house-classification/`
- GSC sitemap status checked on 2026-07-10: sitemap remains `Success`, last read July 9, 2026, but still reports 1 discovered page.
- Public Google `site:` checks on 2026-07-10 did not yet show the three new support URLs.
- Master created the cost-calculator implementation brief at `briefs/tiny-home-cost-calculator-2026-07-10.md`.
- Implementation built the cost calculator:
  - `site/tiny-home-cost-calculator/index.html`
- The calculator includes blank major cost inputs, a clearly labeled contingency `editable starter assumption`, rough-budget outputs, missing-cost warnings, and buyer-protection red flags.
- Homepage now links the cost-calculator card as a live tool while unrelated planned assets remain non-link cards.
- `site/sitemap.xml` now includes `https://tinyhomeclarity.com/tiny-home-cost-calculator/` with `2026-07-10` lastmod.
- SEO Research & Review completed cost-calculator review at `reviews/tiny-home-cost-calculator-review-2026-07-11.md`.
- Cost-calculator verdict: `launch`; no blocking implementation fixes required before commit/push.
- Master committed and pushed the calculator in `68c2bb1 Add tiny home cost calculator`.
- GitHub Pages deployment succeeded for `68c2bb1` on 2026-07-11.
- Live checks returned `HTTP 200` for:
  - `https://tinyhomeclarity.com/tiny-home-cost-calculator/`
  - `https://tinyhomeclarity.com/sitemap.xml`
  - `https://tinyhomeclarity.com/robots.txt`
  - `https://tinyhomeclarity.com/data/local-records.json`
- Live sitemap includes `https://tinyhomeclarity.com/tiny-home-cost-calculator/`.
- Master rechecked GSC on 2026-07-13:
  - Sitemap `https://tinyhomeclarity.com/sitemap.xml` remains `Success`.
  - Last read: July 11, 2026.
  - Discovered pages: 5.
  - Discovered videos: 0.
  - `https://tinyhomeclarity.com/` is indexed.
  - `https://tinyhomeclarity.com/los-angeles-tiny-house-adu/` is indexed.
  - `https://tinyhomeclarity.com/san-diego-tiny-house-adu/` is discovered from the sitemap but not indexed; indexing requested on 2026-07-13.
  - `https://tinyhomeclarity.com/georgia-tiny-house-classification/` is discovered from the sitemap but not indexed; indexing requested on 2026-07-13.
  - `https://tinyhomeclarity.com/tiny-home-cost-calculator/` is discovered from the sitemap but not indexed; indexing requested on 2026-07-13.
- Master created a reusable personal Codex skill for cross-project GSC monitoring: `~/.codex/skills/gsc-monitor`.
- Added project-local GSC monitor config at `ops/gsc-monitor.json`.
- User agreed analytics is not urgent while there are no clicks; analytics is deferred until meaningful traffic or a specific product question requires it.
- Master created the next implementation brief at `briefs/tiny-house-under-20k-2026-07-13.md`.
- Master dispatched the `$20K` page build to Implementation Agent thread `019f3cd1-b87c-7d51-aae4-9c1b024f5e9a`.
- Master dispatched a bounded `$20K` brief/GSC-state pre-review to SEO Research & Review Agent thread `019f3cd1-ef2e-7d90-82f4-bbad070df733`.
- Implementation built the `$20K` support page:
  - `site/tiny-house-under-20k/index.html`
- The page includes a `$20K` reality checker with user-entered planning assumptions, missing-cost warnings, and buyer-protection red flags.
- Homepage now links the `$20K` card to the local candidate guide while unrelated planned assets remain non-link cards; it becomes live only after an authorized deployment.
- `site/sitemap.xml` now includes `https://tinyhomeclarity.com/tiny-house-under-20k/` with `2026-07-13` lastmod.
- SEO Research & Review completed the `$20K` brief/rendered-page review at `reviews/tiny-house-under-20k-review-2026-07-13.md`.
- `$20K` review verdict: `launch`; no implementation-blocking fixes required before the exact-path local commit. Push and deployment remain separately gated.

## Supporting Roles

- No child-agent repository write is authorized. Research, implementation
  advisory, and independent review roles are read-only.
- `THC-SD-001` is the only active transaction. Its implementation is
  review-clean and remains inside commit, release, and production-verification
  gates.
- `THC-BUILD-002` remains the strongest measured demand candidate, not the
  selected build.
- The Control Room continues daily GSC sensing. Changed discovery, indexing, or
  performance evidence may affect the next research decision but does not
  independently authorize a page change.
- Do not treat HTTP or `www` alias exclusions as defects;
  `ops/gsc-indexing-review-2026-07-18.md` records them as expected redirects.

## Waiting On User

- Analytics provider is deferred; no provider choice is needed until traffic or a specific product question requires on-site analytics.
- Confirm email service provider choice before adding lead capture. Current value: `UNKNOWN`.

## Next Eligible Action

`none`. The full-site decision pack records San Diego City versus
unincorporated-County freshness, calculator behavior, and the national build
asset as later candidates. Select and freeze one separate action before more
implementation.
