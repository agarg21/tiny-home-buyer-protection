# Implementation Backlog

Last updated: 2026-07-07

## Ready After SEO Review

- Refine the `Where Can I Put a Tiny House?` MVP after SEO Research & Review reviews the built page/tool.
- `improve` Add a short official-source starter section before launch. Use official links to support category complexity and local verification, not to imply statewide permission.
- `improve` Replace the buyer-facing Local Records keyword-metric note with a local-record note focused on official URLs, source summaries, last checked dates, and confidence levels.
- `improve` Fix planned internal links so they are non-link cards until the planned pages exist, or point to real pages only when those pages are created.
- `improve` Add a page freshness label such as `Page last reviewed: 2026-07-07`.
- `create` When first local records exist, store them in `site/data/local-records.json` with the spec fields, official URLs, source summaries, last checked dates, and confidence levels.
- `test` Keep the MVP as general national triage plus 2-4 official-source example records at most. Do not create state pages or broad state-level permission claims in the MVP.

## Completed

- Built the first `Where Can I Put a Tiny House?` MVP page/tool in `site/index.html` with responsive styling in `site/styles.css`.
- Added general-only triage output, low-confidence unsupported-location handling, official-source field preservation, and an on-page checklist preview while email provider remains `UNKNOWN`.

## Needs SEO Research & Review

- Final-review the built MVP after the implementation-ready improvements in `reviews/where-can-i-put-a-tiny-house-spec-review-2026-07-07.md` are applied.
- Select the first manually researched state/city/county records only where official sources are available.
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
