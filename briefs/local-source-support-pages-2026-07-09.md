# Local Source Support Pages Brief

Date: 2026-07-09

## Purpose

Create a small, manually constrained support cluster for the homepage tool, not a mass local-page program.

The main page at `https://tinyhomeclarity.com/` can rank, but it needs supporting pages that demonstrate source-backed depth. These pages should reinforce the placement triage tool and answer narrow, official-source-backed questions better than broad vendor/state guides.

## Approved Pages

Create three pages:

1. `site/los-angeles-tiny-house-adu/index.html`
   - Public topic: Los Angeles movable tiny houses as ADUs.
   - Suggested title: `Tiny Houses in Los Angeles: Movable Tiny Houses as ADUs | Tiny Home Clarity`
   - Scope: City of Los Angeles only.
   - Record source: `los-angeles-ca-movable-tiny-house-adu`.

2. `site/san-diego-tiny-house-adu/index.html`
   - Public topic: San Diego movable tiny houses and the ADU / companion unit path.
   - Suggested title: `Tiny Houses in San Diego: Movable Tiny Houses and ADUs | Tiny Home Clarity`
   - Scope: City of San Diego only.
   - Record source: `san-diego-ca-movable-tiny-house-adu`.

3. `site/georgia-tiny-house-classification/index.html`
   - Public topic: Georgia tiny house classifications before local zoning.
   - Suggested title: `Georgia Tiny House Rules: Classify the Home Before Zoning | Tiny Home Clarity`
   - Scope: State agency classification explainer only.
   - Record source: `georgia-dca-tiny-house-classification`.

## Required Framing

- These pages are not legal advice, permit approval, parcel approval, or statewide permission.
- Use "possible path," "classification," "verify with the local office," and "this page cannot determine parcel eligibility."
- Do not say "you can put a tiny home here."
- Los Angeles and San Diego pages must be city-only, not countywide California guidance.
- The Georgia page must be a classification explainer, not a Georgia placement page.
- Keep HOA, deed restriction, lender, insurer, septic, utility, fire access, overlay, and parcel-specific limits explicit.

## Content Requirements

Each page should include:

- A concise H1 matching the specific narrow query.
- A short summary box:
  - Official-source confidence.
  - Last checked date.
  - Jurisdiction scope.
  - What the page can and cannot determine.
- "Possible path" section based only on the matching record.
- "What the official sources say" section with source summaries and official links.
- "What is still unclear" section.
- "Who to contact" section.
- "Before you buy/order" verification checklist.
- Link back to the homepage placement triage tool.

## Homepage Updates

- Link each official-source record card to its matching support page.
- Keep the homepage as the national triage hub.
- Make at least one official source link visible by default on each record card or support-page teaser if it fits the current UI.

## Sitemap

Add all three URLs to `site/sitemap.xml` with `lastmod` set to `2026-07-09`.

## Out Of Scope

- No additional local pages.
- No Austin page.
- No mass state/city page template.
- No analytics.
- No email capture.
- No affiliate or lead-gen calls to action.
- No repo visibility or DNS/account changes.

## Validation

Run before handoff:

```bash
git status --short
git diff --check
test -f site/.nojekyll
test -f .github/workflows/deploy-pages.yml
test -f site/CNAME
test -f site/robots.txt
test -f site/data/local-records.json
test -f site/los-angeles-tiny-house-adu/index.html
test -f site/san-diego-tiny-house-adu/index.html
test -f site/georgia-tiny-house-classification/index.html
```

Also run a lightweight HTML/link sanity check if practical.
