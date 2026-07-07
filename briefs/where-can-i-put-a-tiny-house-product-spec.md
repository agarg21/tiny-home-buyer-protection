# Product Spec: Where Can I Put a Tiny House?

Last updated: 2026-07-07

## Purpose

Create an interactive placement triage tool and guide that helps a cautious U.S. buyer understand possible placement paths and local verification steps before buying or building a tiny home.

This tool must not provide definitive legal advice. It should help the user identify which official sources and local offices to check.

## Target Queries

- `where can i put a tiny house`
- `can i put a tiny house on my land`
- `tiny home zoning`
- `tiny house zoning`
- `where can you live in a tiny house`

Current live volume, CPC, and difficulty: `UNKNOWN` until rechecked.

## Target Reader

A person considering buying or building a tiny home who is worried that:

- They will buy a home they cannot legally place.
- Land, utilities, septic, HOA, insurance, or lender requirements will break the plan.
- Tiny home categories are confusing.
- Builders or sellers may oversimplify placement claims.

## User Inputs

Required:

- State.
- City or county.
- Is the site inside city limits? `yes` / `no` / `not sure`.
- Intended tiny home type:
  - THOW / tiny house on wheels.
  - Park model RV.
  - RV or travel trailer.
  - Foundation tiny home.
  - ADU.
  - Modular home.
  - Manufactured home.
  - Small cabin.
  - Not sure.
- Intended use:
  - Full-time primary residence.
  - Part-time/vacation.
  - Backyard family housing.
  - Rental.
  - Temporary while building.
  - Community/park placement.
- Land ownership:
  - Own land.
  - Shopping for land.
  - Family/friend land.
  - Tiny home community/RV park.
  - Not sure.

Optional:

- Utilities plan: grid, septic, well, composting toilet, off-grid, unknown.
- Whether HOA/deed restrictions may apply.
- Whether financing or insurance is needed.
- Whether the tiny home is new, used, DIY, or builder-built.
- Approximate square footage.

## Output Logic

The MVP should produce a triage result, not an approval result.

Output sections:

1. Likely rule buckets to check:
   - Zoning/use.
   - Building code.
   - RV/park model rules.
   - Manufactured/modular rules.
   - ADU rules.
   - Septic/health department.
   - Utilities.
   - HOA/deed restrictions.
   - Financing and insurance.
2. Possible placement paths:
   - ADU path.
   - Foundation dwelling path.
   - Manufactured/modular path.
   - RV park or tiny home community path.
   - Temporary RV/use permit path.
   - Agricultural/rural accessory use path.
3. Red flags:
   - Seller says "legal anywhere."
   - No official zoning source.
   - Land listing mentions "no restrictions" without confirming county/city and deed restrictions.
   - THOW marketed as a permanent dwelling where only RV rules appear to apply.
   - Septic/water/power assumptions missing.
4. Verification checklist:
   - Identify city vs county jurisdiction.
   - Check zoning district and allowed uses.
   - Ask planning/building department about the specific tiny home type and intended use.
   - Check health department septic/water rules.
   - Check HOA/deed restrictions.
   - Ask insurer/lender before purchase when applicable.
5. Confidence level:
   - `Low`: no official local source reviewed.
   - `Medium`: official source found but important details remain unclear.
   - `High`: official source clearly addresses the tiny home type and use, but local office verification is still recommended.

Forbidden output:

- "Yes, you can put a tiny home here."
- "This is legal."
- "Guaranteed approval."

Preferred output:

- "Possible path: ADU, if the local ADU ordinance allows this structure and use."
- "Verify with the local planning/building department before purchase."

## Data Fields

For every local/zoning record:

- `record_id`
- `state`
- `city`
- `county`
- `jurisdiction_type`
- `inside_city_limits`
- `zoning_district`
- `tiny_home_types_covered`
- `intended_uses_covered`
- `possible_placement_paths`
- `clearly_allowed`
- `clearly_not_allowed`
- `unclear`
- `local_office_to_contact`
- `official_source_urls`
- `source_quote_or_summary`
- `last_checked_date`
- `confidence_level`
- `notes`

## Official Source Requirements

Use official sources for:

- City/county zoning ordinances.
- Planning/building department pages.
- State building code pages.
- ADU ordinances.
- RV, park model, manufactured, and modular housing rules.
- Health/septic department requirements.

Do not rely on:

- Builder/vendor claims.
- Real estate listing copy.
- Generic blog posts.
- Social media anecdotes.
- AI summaries without official links.

Unofficial sources may be used only to identify questions, not as proof.

## Local Verification Caveats

Every result page or personalized output should say:

- Local rules can change.
- City and county rules may differ.
- HOA and deed restrictions can be stricter than zoning.
- Financing and insurance may block plans even when zoning seems possible.
- Septic, water, utilities, access, fire, and driveway rules can be decisive.
- The tool is planning support, not legal advice.

## Page Layout

1. Hero:
   - H1: `Where Can I Put a Tiny House?`
   - Short promise: "Get a practical checklist of the rules and local offices to verify before you buy."
2. Triage form:
   - Location.
   - Tiny home type.
   - Intended use.
   - Land situation.
   - Utilities/HOA/financing optional checks.
3. Result module:
   - Likely rule buckets.
   - Possible paths.
   - Red flags.
   - Verification checklist.
   - Confidence level and caveats.
4. Guide:
   - Explain tiny home categories.
   - Explain city vs county jurisdiction.
   - Explain why seller claims are not enough.
   - Explain what to ask local offices.
5. Local records:
   - Show MVP supported states/cities when researched.
   - Mark unsupported locations as "general triage only."
6. Email capture:
   - Offer: `Tiny Home Placement Verification Checklist`
   - Promise: a printable checklist and email script for contacting planning/building departments.
7. Internal links:
   - Tiny Home Cost / Reality Check Calculator.
   - Tiny Home Builder / Vendor Due Diligence Checklist.
   - Tiny House Toilet Options Calculator.
   - Can You Build a Tiny House for Under $20K?

## MVP States/Cities To Support First

Proposed starting set for official-source research:

- California: ADU interest, high search demand likelihood, complex local variation.
- Texas: large land market, rural/county questions, manufactured/modular/RV distinctions.
- Florida: RV/park model/mobile home and weather/insurance complexity.
- North Carolina: tiny home interest, mountain/rural land, county/city variation.
- Colorado: tiny home visibility, mountain towns, zoning pressure.

Candidate local jurisdictions should be selected only after SEO Research & Review checks SERPs and official-source availability. Each local page/record must be manually researched and source-backed.

## MVP States/Cities Caveat

The first MVP may support general state-level triage plus a small number of official local examples. It should not imply statewide permission.

## Email Capture Offer

Free offer:

`Tiny Home Placement Verification Checklist`

Includes:

- Questions to ask the planning/building department.
- Email script for city/county offices.
- Source log template.
- Red flag checklist before land or tiny home purchase.

Email provider: `UNKNOWN`.

## Success Metrics

Before Search Console data:

- Page/tool is complete enough to help a buyer verify next steps.
- SEO Research & Review says the page deserves indexing.
- Implementation can build without making unsupported legal claims.

After launch:

- Relevant GSC impressions for target long-tail queries.
- Engagement with the tool.
- Email captures.
- User replies or corrections identifying useful local-source gaps.

## Open Questions

- Final domain/brand.
- Email provider.
- Analytics provider.
- Which specific local jurisdictions should be researched first.
- Whether to store local records in JSON, CSV, or a simple markdown table for MVP.

