# Implementation Backlog

Last updated: 2026-07-08

## Ready After SEO Review

- `create` When first local records exist, store them in `site/data/local-records.json` with the spec fields, official URLs, source summaries, last checked dates, and confidence levels.
- `test` Keep the MVP as general national triage plus 2-4 official-source example records at most. Do not create state pages or broad state-level permission claims in the MVP.

## Completed

- Built the first `Where Can I Put a Tiny House?` MVP page/tool in `site/index.html` with responsive styling in `site/styles.css`.
- Added general-only triage output, low-confidence unsupported-location handling, official-source field preservation, and an on-page checklist preview while email provider remains `UNKNOWN`.
- Added launch-readiness improvements: official-source starter links, buyer-facing local-record note, non-link planned tool cards, and `Page last reviewed: 2026-07-08`.
- Applied final launch fixes: public-facing site brand is now `Tiny Home Clarity`, and `--subtle` was darkened to `#59665d` for contrast.

## Needs SEO Research & Review

- Optional quick-confirm launch readiness if the final diff expands beyond public brand and contrast fixes.
- Use the launch-review shortlist for first manually researched records: Los Angeles, San Diego, Austin, and Georgia DCA state classification.
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
