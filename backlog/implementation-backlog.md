# Implementation Backlog

Last updated: 2026-07-08

## Ready After SEO Review

- `test` Keep the MVP as general national triage plus 2-4 official-source example records at most. Do not create state pages or broad state-level permission claims in the MVP.
- `monitor` Optional later improvement: if users miss the source URLs inside expandable details, make the first official source link visible by default on each record card.

## Completed

- Built the first `Where Can I Put a Tiny House?` MVP page/tool in `site/index.html` with responsive styling in `site/styles.css`.
- Added general-only triage output, low-confidence unsupported-location handling, official-source field preservation, and an on-page checklist preview while email provider remains `UNKNOWN`.
- Added launch-readiness improvements: official-source starter links, buyer-facing local-record note, non-link planned tool cards, and `Page last reviewed: 2026-07-08`.
- Applied final launch fixes: public-facing site brand is now `Tiny Home Clarity`, and `--subtle` was darkened to `#59665d` for contrast.
- Added the approved first official-source records to `site/data/local-records.json`: Los Angeles MTH-as-ADU, San Diego MTH/ADU-related path, and Georgia DCA state classification.
- Updated record rendering so Los Angeles and San Diego are city examples only, Georgia DCA is a state classification source, and unsupported locations keep low-confidence general triage.

## Needs SEO Research & Review

- No active implementation blocker from SEO review. Rendered official-source record review passed with verdict `launch`.
- Maintain local records as static JSON for the MVP, preferably `site/data/local-records.json`.

## Infrastructure

- Verify GitHub Pages deployment after initial push.
- Add `site/CNAME` only after domain purchase.
- Add sitemap custom-domain URLs after domain setup.
- Add analytics after provider choice.
- Add email capture form after provider choice.

## Later Product Work

- Tiny Home Cost / Reality Check Calculator.
- Can You Build a Tiny House for Under $20K?
- Tiny House Toilet Options Calculator.
- Tiny Home Builder / Vendor Due Diligence Checklist.
