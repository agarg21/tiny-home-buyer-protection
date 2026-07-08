# Launch Review: Where Can I Put a Tiny House?

Date: 2026-07-08

Reviewed files:

- `site/index.html`
- `site/styles.css`
- `briefs/where-can-i-put-a-tiny-house-product-spec.md`
- `reviews/where-can-i-put-a-tiny-house-spec-review-2026-07-07.md`

Role: SEO Research & Review Agent

Verdict: `improve first`

## Summary

The MVP is useful, source-backed enough for a first launch, and index-worthy once two launch polish items are fixed. The prior SEO recommendations were correctly applied:

- Official-source starter section: implemented.
- Buyer-facing local-record note: implemented.
- Non-link planned tool cards: implemented.
- Page freshness label: implemented with `Page last reviewed: 2026-07-08`.
- Cautious legal/zoning language: maintained.

Do not `noindex` this page. It should launch indexed after the brand and contrast fixes below.

## Findings

### P1 - Public brand still says `Tiny Homes Buyer Protection`

Recommendation: `improve`

The custom domain is now `tinyhomeclarity.com`, and the public brand should be `Tiny Home Clarity`. The current page still uses `Tiny Homes Buyer Protection` in:

- `site/index.html` title tag.
- Header brand and aria label.
- Footer disclaimer.

Why it matters:

- `Tiny Home Clarity` matches the purchased domain and feels less formal/legal than `Tiny Homes Buyer Protection`.
- The old name is still useful as the internal project thesis, but it is too institutional for the public-facing brand.
- Brand mismatch between the domain and page title/nav can reduce trust at first impression.

Implementation-ready change:

- Change the public title from `Where Can I Put a Tiny House? | Tiny Homes Buyer Protection` to `Where Can I Put a Tiny House? | Tiny Home Clarity`.
- Change the header brand and aria label to `Tiny Home Clarity`.
- Change the footer opening to `Tiny Home Clarity provides planning support...`.
- Keep repo/project docs free to use `Tiny Homes Buyer Protection` as the internal operating thesis unless Master / Operator decides to rename those later.

### P2 - `--subtle` color is slightly under normal-text contrast

Recommendation: `improve`

The CSS variable `--subtle: #6f7c73` is used for small labels and metadata. Measured contrast:

- `#6f7c73` on white: 4.37:1.
- `#6f7c73` on `#f7faf7`: 4.16:1.
- `#6f7c73` on `#e3f1e9`: 3.75:1.

This is a small accessibility/readability issue. It is not an SEO strategy blocker, but it is easy launch polish.

Implementation-ready change:

- Darken `--subtle` to at least `#59665d` or reuse `--muted: #526158` for small text.

### P3 - Email provider remains `UNKNOWN`

Recommendation: `ask user`

The current on-page checklist preview is the right temporary solution. Do not add email capture until the user chooses a provider.

Implementation-ready change:

- Keep the current checklist preview for launch.
- After provider selection, add the email capture form and update the checklist section copy.

## Launch Readiness

Search intent fit: `launch`

- The H1 directly targets `where can i put a tiny house`.
- The page addresses adjacent intent for `tiny house zoning`, `tiny home zoning`, and `can i put a tiny house on my land`.
- The tool answers the real job: "what do I need to verify before I buy?"

Usefulness: `launch`

- The form covers location, city/county, city-limit status, structure type, intended use, land situation, utilities, HOA/deed restrictions, financing/insurance, used/DIY status, and size.
- The result creates rule buckets, possible paths, red flags, a verification checklist, and a low-confidence local-record status.

Trust and source quality: `launch`

- The official-source starter section correctly explains that source links are for category complexity and agency roles, not parcel approval.
- It links to California HCD, Georgia DCA, and Texas TDHCA sources.
- The page still avoids unsupported local permission claims.

Index-worthiness: `launch`

- The page has a working interactive tool, official-source synthesis, a checklist, red flags, and a comparison framework for structure categories.
- It should remain indexed after the P1/P2 fixes.

Mobile/readability: `improve`

- Layout stacks at `max-width: 900px`, and the sticky result panel becomes static on smaller screens.
- The mobile approach is acceptable.
- The only launch polish issue found in static review is the subtle text contrast.

Claims review: `launch`

- No launch-blocking overclaim found.
- Strong phrases such as "legal anywhere" appear only as red flags.
- The page consistently uses "possible path," "verify," "general triage only," `Low` confidence, and `UNKNOWN` source fields where appropriate.

## Brand Recommendation

Recommendation: `improve`

Use `Tiny Home Clarity` as the public-facing brand for title, header/nav, footer, and future metadata. Keep `Tiny Homes Buyer Protection` as the internal project/thesis language if useful.

Suggested public metadata:

- Site name: `Tiny Home Clarity`
- Homepage/page title: `Where Can I Put a Tiny House? | Tiny Home Clarity`
- Footer: `Tiny Home Clarity provides planning support, not legal, zoning, code, financing, insurance, or safety advice.`

Rationale:

- `Tiny Home Clarity` matches `tinyhomeclarity.com`.
- It preserves the skeptical, practical promise without sounding like a law firm, regulator, or consumer-protection bureau.
- It leaves room for future assets beyond placement, including cost, utilities, financing, builder checks, and due diligence templates.

## First Official-Source Local Record Shortlist

Recommendation: `create`

Prioritize source clarity over geographic spread. Do not create state pages yet.

### 1. City of Los Angeles, California

Why:

- Strong official-source clarity for movable tiny houses as part of the ADU framework.
- Good fit for high buyer anxiety because city/county boundaries and ADU rules are easy to misunderstand.

Initial official sources:

- Los Angeles City Planning housing policy page: `https://planning.lacity.gov/plans-policies/initiatives-policies/housing`
- LADBS ADU page: `https://dbs.lacity.gov/adu`
- LADBS movable tiny house bulletin: `https://dbs.lacity.gov/sites/default/files/efs/pdf/publications/zoning/ib-p-zc-2020-021-guidelines-for-construction-of-adu.pdf`

Record framing:

- Possible path: movable tiny house as ADU where the property, structure, utilities, and permit path qualify.
- Must verify: parcel jurisdiction, zoning, existing/proposed primary dwelling, hillside/coastal/overlay constraints, utilities, permits, and current city guidance.

### 2. City of San Diego, California

Why:

- Official City of San Diego materials directly address movable tiny houses.
- Municipal Code material is specific enough for a high-confidence researched example if carefully summarized.

Initial official sources:

- City of San Diego Information Bulletin 403, Movable Tiny House: `https://www.sandiego.gov/sites/default/files/dsdib403.pdf`
- San Diego Municipal Code Chapter 14, Article 1, Division 3: `https://docs.sandiego.gov/municode/municodechapter14/ch14art01division03.pdf`
- City of San Diego adopted single-issue code updates: `https://www.sandiego.gov/planning/work/land-development-code/single-issue-ldc-amendments`

Record framing:

- Possible path: movable tiny house under the city's companion unit / ADU-related framework where specific standards are met.
- Must verify: parcel zoning, public right-of-way/access, fire separation, utility connections, rental limits, hazard zones, and current code version.

### 3. City of Austin, Texas

Why:

- Official Austin materials include tiny-home definitions and code-amendment context.
- It is useful as a non-California example where the distinction between IRC tiny homes, RVs, and residential occupancy needs careful handling.

Initial official sources:

- Austin HOME Amendments page: `https://www.austintexas.gov/development-services/home-amendments`
- Austin tiny houses report: `https://services.austintexas.gov/edims/document.cfm?id=219157`
- Austin Additional Dwelling Units page: `https://www.austintexas.gov/development-services/additional-dwelling-units`

Record framing:

- Possible path: IRC-compliant tiny home as a dwelling unit or ADU-style housing unit where current code and zoning allow.
- Must verify: whether the structure is an IRC dwelling, RV/travel trailer, ADU, or another use; current zoning; occupancy; utility hookup; and any post-HOME code changes.

### 4. Georgia DCA state classification record

Why:

- This is not a local placement record, but it is a strong state-source category record.
- It can improve the tool's "structure classification first" logic before a Georgia local jurisdiction is selected.

Initial official sources:

- Georgia DCA tiny house fact sheet: `https://dca.georgia.gov/document/public-notices/georgiatinyhousefactsheet32824pdf/download`
- Georgia DCA construction code documents/downloads: `https://dca.georgia.gov/community-assistance/construction-codes/construction-codes-documents-downloads`

Record framing:

- Possible path: classification guidance for RV, manufactured, modular/industrialized, and site-built tiny homes.
- Must verify: local zoning, local government permission, site conditions, and whether a specific Georgia city/county has adopted or interpreted rules relevant to the structure.

## Deferred Candidates

- Fresno, California: official materials are promising, but current sources appear to include older ADU/submittal materials and newer 2025 code-amendment activity. Use only after reconciling the current municipal code and latest city guidance.
- Sarasota County, Florida: advisory review suggested it, but this pass did not verify a clear enough official tiny-home placement path. Keep it for later research, not the first shortlist.

## What Needs User Input

Recommendation: `ask user`

- Confirm public brand change to `Tiny Home Clarity` across public site copy.
- Choose email service provider.
- Choose analytics provider.
- Approve Google Search Console setup after DNS/HTTPS is live.

## Anti Gravity Advisory Summary

Anti Gravity CLI (`agy`) was used on 2026-07-08 as an advisory reviewer. It agreed the page is index-worthy and that prior implementation recommendations were applied. It flagged the remaining public-brand mismatch and subtle-color contrast issue. It also suggested local record candidates; this review independently verified and narrowed the shortlist to sources with clearer official support.

## Validation Performed

- `git diff --check`
- Inline JavaScript parse check with Node.
- `test -f site/.nojekyll`
- `test -f .github/workflows/deploy-pages.yml`
- `test -f site/CNAME`
- Confirmed `site/CNAME` is `tinyhomeclarity.com`.
- Confirmed `site/sitemap.xml` uses `https://tinyhomeclarity.com/`.

## Next Agent

Implementation Agent should run next to apply the P1/P2 launch fixes. After those two changes, SEO Research & Review can do a very quick final confirmation, or Master / Operator can proceed with launch/GSC setup if the diff is limited to brand and contrast.
