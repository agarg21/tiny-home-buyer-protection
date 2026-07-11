# Tiny Home Cost Calculator Review

Date: 2026-07-11

Reviewed current working tree, not only the last commit.

## Verdict

`launch`

The `Tiny Home Cost / Reality Check Calculator` is launch-ready. I found no must-fix claim-safety, assumption-labeling, internal-linking, or sitemap issues before commit/push.

## Files Reviewed

- `briefs/tiny-home-cost-calculator-2026-07-10.md`
- `site/tiny-home-cost-calculator/index.html`
- `site/styles.css`
- `site/index.html`
- `site/sitemap.xml`

## Findings

### No launch blockers

- The calculator-first page exists at `site/tiny-home-cost-calculator/index.html`.
- The page uses the approved title/H1 direction and puts the calculator and result panel in the first functional viewport.
- Homepage now links the cost calculator as a live tool from the related-tools section.
- Unrelated future assets remain non-link planned cards.
- `site/sitemap.xml` includes `https://tinyhomeclarity.com/tiny-home-cost-calculator/` with `2026-07-10` lastmod.

### Claim safety passed

- I did not find claims that tiny homes are always cheap, guaranteed affordable, or approved.
- The page states that costs vary by location, structure type, site conditions, utility access, lender, insurer, and local requirements.
- The page states that the calculator cannot determine zoning, permit approval, code compliance, lender approval, insurance eligibility, or final contractor pricing.
- Result copy says the output is a planning estimate, not a bid, appraisal, loan approval, insurance approval, permit approval, or affordability decision.

### Assumption labeling passed

- Major cost fields are blank unless the user enters values.
- The only prefilled value I found is the contingency percentage, labeled as an `editable starter assumption`.
- The contingency help text explicitly says it is not a national average, typical cost, expected cost, or guaranteed cost.
- Results separate:
  - user-entered numbers
  - editable planning assumptions
  - missing-cost warnings
  - buyer-protection red flags
- Blank or zero fields are treated as missing information, not proof that the cost is zero.

### Usefulness and index-worthiness passed

- The page is useful as a standalone support asset because it provides an interactive calculator, missing-cost warnings, monthly payment/carrying-cost estimates, a checklist, and related placement links.
- The buyer-protective voice is consistent with the project strategy: cautious, practical, and focused on what to verify before nonrefundable commitments.
- The page avoids unsupported national cost averages. That is the correct choice until a sourced cost-data methodology exists.

### Internal links and sitemap passed

- Internal relative links resolve locally.
- The cost calculator links back to the placement tool and the three official-source support pages.
- The homepage cost-calculator card links to `./tiny-home-cost-calculator/`.
- Sitemap contains the new calculator URL with the requested lastmod.

### Minor non-blocking polish

- The homepage changed to include the live calculator link, but the homepage freshness label and homepage sitemap lastmod still show `2026-07-08`. This is not a launch blocker for the calculator because the new calculator URL is correctly included in the sitemap, but the operator may want to align homepage freshness/lastmod on the next homepage edit.

## Validation

- JavaScript parse check passed for the inline calculator script.
- Local internal-link sanity check passed.
- `git diff --check` passed.
- Required files are present:
  - `site/.nojekyll`
  - `.github/workflows/deploy-pages.yml`
  - `site/CNAME`
  - `site/robots.txt`
  - `site/tiny-home-cost-calculator/index.html`

## Advisory Tooling

- Anti Gravity CLI was available at `/Users/apoorvagarg/.local/bin/agy`.
- The first sandboxed `agy` run failed because the CLI needed to write logs/crash files and bind a local listener outside the sandbox.
- An escalated `agy --print` rerun completed but returned no usable advisory text, so no external-tool recommendation was incorporated.
- DataForSEO was not used.

## Implementation-Ready Fixes

No required fixes before commit/push.

Optional non-blocking polish:

- `monitor` Align homepage freshness label and homepage sitemap `lastmod` to the next true homepage review/update date.

## Recommended Next Agent

Master / Operator should commit and push the cost calculator, then verify GitHub Pages deployment and live `HTTP 200` for:

- `https://tinyhomeclarity.com/tiny-home-cost-calculator/`
- `https://tinyhomeclarity.com/sitemap.xml`
