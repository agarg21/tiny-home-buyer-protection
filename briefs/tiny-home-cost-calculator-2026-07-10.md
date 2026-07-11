# Tiny Home Cost / Reality Check Calculator Brief

Date: 2026-07-10

## Purpose

Create the second major asset for Tiny Home Clarity: a practical calculator that helps buyers test whether a tiny home project is actually affordable after land, delivery, site work, utilities, permits, financing, insurance, and contingency.

This should pair with the placement tool. The placement tool answers "what must I verify before placing it?" The cost calculator answers "what can this really cost before I buy/order?"

## Approved Page

Create:

- `site/tiny-home-cost-calculator/index.html`

Suggested title:

- `Tiny Home Cost Calculator: Reality Check Before You Buy | Tiny Home Clarity`

Suggested H1:

- `Tiny Home Cost Calculator`

## Core UX

Build a calculator-first page, not a marketing page.

The first viewport should include:

- Short title and caution.
- Calculator form.
- Result summary panel.

The page should be useful with rough inputs. Do not require perfect data.

## Inputs

Include inputs for:

- Tiny home / structure quote.
- Land cost or land already owned.
- Delivery / transport.
- Foundation, pad, or anchoring.
- Utility hookups.
- Septic or sewer.
- Well or water connection.
- Electrical service.
- Driveway, grading, drainage, and site prep.
- Permits, design, engineering, surveys, and inspections.
- Sales tax or local taxes, if applicable.
- Financing:
  - down payment
  - loan amount
  - interest rate
  - loan term
- Insurance estimate.
- Monthly land rent / community lot rent, if applicable.
- Contingency percentage.

Allow unknown fields to stay blank or zero, but make the result warn when major categories are missing.

## Outputs

Show:

- Visible seller quote.
- Estimated all-in project budget.
- Hidden-cost subtotal.
- Contingency amount.
- Estimated cash needed before move-in.
- Estimated monthly payment when financing fields are provided.
- Estimated monthly carrying cost including lot rent and insurance when provided.
- Missing-cost warnings.
- Buyer-protection red flags.

## Required Framing

- Do not claim tiny homes are always cheap.
- Do not present calculator defaults as measured national averages unless they are explicitly sourced.
- Separate user-entered numbers, editable planning assumptions, and warnings.
- Use language like "planning estimate," "rough budget," and "verify with local offices and vendors."
- State that costs vary by location, structure type, site conditions, utility access, lender, insurer, and local requirements.
- State that the calculator cannot determine zoning, permit approval, code compliance, lender approval, insurance eligibility, or final contractor pricing.

## Default Values

Use conservative editable starter values only where needed for usability.

Label them as:

- `editable starter assumption`

Do not label them as:

- national average
- typical cost
- expected cost
- guaranteed cost

If a field has no good default, leave it blank/zero and surface a warning when omitted.

## Content Sections

Below or beside the calculator, include:

- Why the seller quote is not the whole project cost.
- Major cost buckets buyers forget.
- Financing and insurance caveats.
- Site-work and utility caveats.
- Permit/inspection caveats.
- Before you put money down checklist.
- Links back to:
  - homepage placement triage tool
  - Los Angeles support page
  - San Diego support page
  - Georgia classification page

## Homepage Updates

- Turn the existing planned `Tiny Home Cost / Reality Check Calculator` card/link into a real internal link.
- Keep unrelated planned assets as non-link cards until they exist.
- Do not add analytics or email capture.

## Sitemap

Add:

- `https://tinyhomeclarity.com/tiny-home-cost-calculator/`

Use `lastmod` of `2026-07-10`.

## Out Of Scope

- No paid product.
- No email gate.
- No analytics.
- No affiliate links.
- No vendor recommendations.
- No claim that a given project is affordable.
- No legal, zoning, permit, lending, or insurance approval claims.

## Validation

Run before handoff:

```bash
git status --short
git diff --check
test -f site/.nojekyll
test -f .github/workflows/deploy-pages.yml
test -f site/CNAME
test -f site/robots.txt
test -f site/tiny-home-cost-calculator/index.html
```

Also run:

- lightweight JavaScript parse check for any inline calculator script
- lightweight HTML/internal link sanity check if practical

## Review Handoff

SEO Research & Review should review after implementation for:

- claim safety
- cost-assumption labeling
- usefulness for cautious buyers
- index-worthiness
- internal linking
- sitemap correctness
