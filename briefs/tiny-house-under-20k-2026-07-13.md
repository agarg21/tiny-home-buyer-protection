# Can You Build a Tiny House for Under $20K? Implementation Brief

Date: 2026-07-13
Owner: Master / Operator
Target agent: Implementation Agent, then SEO Research & Review Agent

## Purpose

Build a buyer-protective support page that helps readers test what must be excluded, donated, reused, DIY-built, or deferred for a tiny house project to fit under a `$20,000` cash budget.

The page should not sell the dream that a tiny house is normally achievable under `$20K`. It should make the tradeoffs concrete and connect readers to the existing cost calculator.

## Approved URL

- `site/tiny-house-under-20k/index.html`
- Public URL: `https://tinyhomeclarity.com/tiny-house-under-20k/`

## SEO Draft

Title:

- `Can You Build a Tiny House for Under $20K? Reality Check | Tiny Home Clarity`

H1:

- `Can You Build a Tiny House for Under $20K?`

Meta description:

- `A practical reality check for tiny house under $20K claims, including what is usually excluded, what has to be DIY, and which costs still need local verification.`

## Search Intent

Readers may be:

- Testing whether a tiny house is genuinely affordable.
- Comparing DIY tiny houses, sheds, cabins, trailers, used tiny homes, or unfinished shells.
- Trying to understand what `$20K` claims exclude.
- Looking for a hard-nosed planning checklist before spending money.

## Required Page Shape

Use the existing static site style and make the page useful on first load.

Required sections:

1. Hero with cautious answer.
   - Suggested framing: possible in narrow DIY/exclusion-heavy cases, but not a reliable turnkey tiny-home budget.
2. `$20K reality checker`.
   - Interactive or table-like tool that lets users allocate a `$20,000` budget across major buckets.
   - Include at least: structure/materials, trailer/foundation, tools, delivery, site work, utilities, permits/inspections, land, toilet/plumbing, electrical, insulation/HVAC, contingency.
3. What usually has to be true for `$20K` to work.
   - Examples: land already handled, heavy DIY labor, reused/salvaged materials, simple design, no expensive utility/site work, no turnkey builder package.
4. What `$20K` claims often exclude.
   - Land, delivery, utility hookups, septic/water, permits, site prep, tools, financing, insurance, rework, code/inspection corrections, and contingency.
5. Red flags.
   - Seller/vendor claim that ignores placement.
   - Budget with no site-work line.
   - Project that assumes free labor/tools/materials without naming them.
   - Land purchase before zoning and utilities are verified.
6. Safer next steps.
   - Link to the cost calculator.
   - Link to the placement tool.
   - Include a checklist for local verification and written quotes.

## Claim Safety

Do not claim:

- Tiny houses are normally under `$20K`.
- A reader can legally place a cheap tiny house on their land.
- DIY cost targets are guaranteed.
- Any cost bucket has a national average unless a current source is used and cited.

Use:

- `possible in narrow cases`
- `not a reliable turnkey budget`
- `verify locally`
- `UNKNOWN` for unavailable current keyword/market metrics
- `planning estimate`, not final bid

## Implementation Requirements

- Add the page at `site/tiny-house-under-20k/index.html`.
- Reuse `site/styles.css`; add only scoped CSS needed for the page/tool.
- Link the homepage planned card to `./tiny-house-under-20k/` after the page exists.
- Add the URL to `site/sitemap.xml` with `2026-07-13` lastmod.
- Link the new page to:
  - `../tiny-home-cost-calculator/`
  - `../`
- Do not add analytics, email capture, affiliate links, vendor recommendations, or lead-gen forms.

## Validation

Run before handing back:

```bash
git status --short
git diff --check
test -f site/.nojekyll
test -f .github/workflows/deploy-pages.yml
test -f site/CNAME
test -f site/robots.txt
test -f site/tiny-house-under-20k/index.html
```

If inline JavaScript is added, parse-check it.

## Review Request

SEO Research & Review should verify:

- The page does not imply `$20K` is a normal or easy all-in budget.
- Cost claims are clearly framed as user-entered assumptions, examples, or unknowns.
- The page adds enough practical decision support to be index-worthy.
- Internal links and sitemap entry are correct.
