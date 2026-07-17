# Implementation Backlog

Last updated: 2026-07-13

## Ready

- No active implementation rerun. The `$20K` page passed SEO review and is ready for one exact-path local commit; push and deployment require user approval through the proving period.

## Monitor

- Keep the MVP as general national triage plus a small number of official-source examples. Do not create state pages or broad state-level permission claims.
- Optional polish: align homepage `Page last reviewed` labels to `2026-07-09` on the next homepage edit if the operator wants the support-cluster link update reflected in homepage freshness.

## Completed

- Built the first `Where Can I Put a Tiny House?` MVP page/tool in `site/index.html` with responsive styling in `site/styles.css`.
- Added general-only triage output, low-confidence unsupported-location handling, official-source field preservation, and an on-page checklist preview while email provider remains `UNKNOWN`.
- Added launch-readiness improvements: official-source starter links, buyer-facing local-record note, non-link planned tool cards, and `Page last reviewed: 2026-07-08`.
- Applied final launch fixes: public-facing site brand is now `Tiny Home Clarity`, and `--subtle` was darkened to `#59665d` for contrast.
- Added the approved first official-source records to `site/data/local-records.json`: Los Angeles MTH-as-ADU, San Diego MTH/ADU-related path, and Georgia DCA state classification.
- Updated record rendering so Los Angeles and San Diego are city examples only, Georgia DCA is a state classification source, and unsupported locations keep low-confidence general triage.
- Built the first constrained support cluster from `briefs/local-source-support-pages-2026-07-09.md`: Los Angeles, San Diego, and Georgia classification pages.
- Linked homepage official-source record cards to the matching support pages and made one official source link visible by default on each card.
- Added the three support page URLs to `site/sitemap.xml` with `2026-07-09` lastmod dates.
- Built the `Tiny Home Cost Calculator` page from `briefs/tiny-home-cost-calculator-2026-07-10.md`.
- Linked the homepage planned cost-calculator card to the live calculator and kept unrelated planned assets as non-link cards.
- Added the cost-calculator URL to `site/sitemap.xml` with `2026-07-10` lastmod.
- Built the `Can You Build a Tiny House for Under $20K?` page from `briefs/tiny-house-under-20k-2026-07-13.md`.
- Linked the homepage planned `$20K` card to the local candidate page and kept unrelated planned assets as non-link cards; it becomes live only after an authorized deployment.
- Added the `$20K` page URL to `site/sitemap.xml` with `2026-07-13` lastmod.

## Needs SEO Research & Review

- No active implementation blocker from SEO review. Rendered official-source record review passed with verdict `launch`.
- Support-cluster review passed with verdict `launch`; no implementation rerun is required before Master commits/pushes.
- `$20K` page review passed with verdict `launch`; no implementation rerun is required before the exact-path local commit, while push and deployment remain separately gated.
- Maintain local records as static JSON for the MVP, preferably `site/data/local-records.json`.

## Infrastructure

- Verify GitHub Pages deployment after initial push.
- Add `site/CNAME` only after domain purchase.
- Add sitemap custom-domain URLs after domain setup.
- Analytics is deferred until meaningful traffic or a specific product question requires on-site analytics.
- Add email capture form after provider choice.

## Later Product Work

- Tiny House Toilet Options Calculator.
- Tiny Home Builder / Vendor Due Diligence Checklist.
