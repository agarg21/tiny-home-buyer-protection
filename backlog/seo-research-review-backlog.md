# SEO Research & Review Backlog

Last updated: 2026-07-18

## Ready

- After LA/San Diego repair review, review the proposed national tiny-home
  build decision / builder due-diligence asset before implementation.
- `monitor` Recheck GSC indexing/crawl status for:
  - `https://tinyhomeclarity.com/`
  - `https://tinyhomeclarity.com/los-angeles-tiny-house-adu/`
  - `https://tinyhomeclarity.com/san-diego-tiny-house-adu/`
  - `https://tinyhomeclarity.com/georgia-tiny-house-classification/`
  - `https://tinyhomeclarity.com/tiny-home-cost-calculator/`
- `monitor` After a separately authorized push and verified deployment of the `$20K` page, monitor whether GSC discovers and indexes `https://tinyhomeclarity.com/tiny-house-under-20k/`.
- `monitor` After launch, watch whether users need official source links visible outside expandable record details.

## Completed

- Reviewed the repaired Los Angeles and San Diego pages from human-searcher POV.
  Initial verdict was `improve`; after implementation fixes, independent review
  verdict was `PASS`. Detailed notes are in
  `reviews/la-san-diego-human-searcher-review-2026-07-18.md` and
  `reviews/la-san-diego-human-searcher-implementation-review-2026-07-18.md`.
- Reviewed the `$20K` brief and rendered page. Verdict: `launch`; brief was implementation-ready and rendered page has no must-fix issues. Detailed notes are in `reviews/tiny-house-under-20k-review-2026-07-13.md`.
- Reviewed the Tiny Home Cost Calculator. Verdict: `launch`. Detailed notes are in `reviews/tiny-home-cost-calculator-review-2026-07-11.md`.
- Confirmed the calculator separates user-entered numbers from editable assumptions and warnings, avoids cost/legal/approval guarantees, links correctly from the homepage, and is included in the sitemap.
- Rechecked GSC on 2026-07-13: sitemap status `Success`, last read July 11, 2026, with 5 discovered pages; homepage and Los Angeles are indexed; San Diego, Georgia, and cost calculator are discovered from the sitemap but not indexed yet. Indexing requests were submitted for San Diego, Georgia, and the cost calculator.
- Reviewed the first constrained support cluster. Verdict: `launch`. Detailed notes are in `reviews/local-source-support-pages-review-2026-07-09.md`.
- Confirmed Los Angeles and San Diego support pages are city-only examples, Georgia is classification-only, Austin is absent, homepage record links make sense, and sitemap entries use `2026-07-09` lastmod dates.
- Reviewed rendered official-source records in `site/data/local-records.json`, `site/index.html`, and `site/styles.css`. Verdict: `launch`. Detailed notes are in `reviews/rendered-official-source-records-review-2026-07-08.md`.
- Confirmed approved records are implemented, Austin is absent, Los Angeles/San Diego are city-only examples, Georgia DCA is classification-only, and unsupported locations remain low-confidence with `UNKNOWN` source fields.
- Rechecked GSC sitemap status on 2026-07-08: sitemap remains `Success` with 1 discovered page.
- Created first official-source record set for the placement tool: Los Angeles, San Diego, and Georgia DCA classification. Detailed records are in `reviews/official-source-records-where-can-i-put-a-tiny-house-2026-07-08.md`.
- Deferred Austin pending deeper reconciliation of current HOME/ADU/tiny-home/THOW code paths.
- Rechecked GSC sitemap status on 2026-07-08: `https://tinyhomeclarity.com/sitemap.xml` now shows `Success`, last read July 8, 2026, with 1 discovered page.
- Final-reviewed the current working-tree MVP at `site/index.html` and `site/styles.css` before launch. Detailed notes are in `reviews/where-can-i-put-a-tiny-house-launch-review-2026-07-08.md`.
- Confirmed Implementation applied the prior official-source starter section, buyer-facing local-record note, non-link planned cards, freshness label, and cautious legal/zoning language.
- Built a first official-source local/source record shortlist prioritizing source clarity over broad state coverage.
- Recommended final public brand and contrast fixes; Implementation applied them before launch.
- Reviewed `briefs/where-can-i-put-a-tiny-house-product-spec.md` and the built MVP in `site/index.html` for search intent fit, usefulness, source requirements, cautious-buyer trust, index-worthiness, and implementation readiness.
- Validated the first target query cluster with Semrush UI, manual SERP review, and official-source spot checks. Detailed notes are in `reviews/where-can-i-put-a-tiny-house-spec-review-2026-07-07.md`.
- Used Anti Gravity CLI via `agy` as an advisory second opinion for the first product spec review.
- Recommended the built MVP as `improve` before final launch, then keep indexed if the working triage and source-caution improvements remain in place.

## Later

- Review domain/brand recommendation for trust and SERP fit.
- Build a current keyword snapshot for the first 5 assets without inventing missing metrics.
- Create a competitor/SERP review for placement and zoning queries.
- Define local-data source standards for the first 5 states.
