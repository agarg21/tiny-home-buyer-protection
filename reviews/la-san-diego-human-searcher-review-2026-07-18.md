# LA / San Diego Human Searcher Review

Date: 2026-07-18

Reviewed current working tree.

## Verdict

`improve`

The repaired pages are safer than the original source memos, but they still do
not fully work from the point of view of a human searching `tiny house los
angeles` or `tiny house san diego`.

They pass basic claim-safety checks. They do not yet pass the human-searcher
standard because the first screen still explains the page and the SERP instead
of answering the reader's practical problem.

## Files Reviewed

- `site/los-angeles-tiny-house-adu/index.html`
- `site/san-diego-tiny-house-adu/index.html`
- `site/sitemap.xml`
- `briefs/la-san-diego-page-repair-2026-07-18.md`
- `docs/research/la-san-diego-addressable-query-volume-2026-07-18.md`
- `docs/research/serp-tiny-house-san-diego-intent-2026-07-18.md`
- `docs/research/processed/serp-los-angeles-tiny-house-intents-2026-07-18.json`
- `templates/searcher-pov-review-prompt.md`

## Target Searcher

### Los Angeles

Target query: `tiny house los angeles`

Likely searcher:

- Wants to buy, browse, build, compare, or place a tiny house in/near Los
  Angeles.
- May have seen vendor listings, YouTube builds, Reddit discussions, ADU vendor
  claims, tiny-home village news, or Airbnb stays.
- Does not yet know whether "tiny house" means movable tiny house as ADU, THOW,
  park model, conventional ADU, shelter village, short stay, or listing outside
  the city.

Searcher job-to-be-done:

- "Can I realistically buy/build/place one in Los Angeles, and what should I
  avoid before I spend money?"

### San Diego

Target query: `tiny house san diego`

Likely searcher:

- Wants to buy, build, place, visit, stay in, or find a community for a tiny
  house in/near San Diego.
- May be comparing a builder, listing, community, or vacation stay result.
- Does not know whether City of San Diego rules, San Diego County rules, or a
  private community/stay result applies.

Searcher job-to-be-done:

- "What tiny-house options are real around San Diego, and what should I verify
  before I contact someone or pay?"

## SERP Strategy Read

The saved SERP evidence shows mostly commercial and mixed-intent results:

- Los Angeles: vendor/listing pages, tiny-house builders, ADU/backyard-home
  vendors, Reddit, nonprofit/shelter village pages, videos, and Airbnb/stay
  pages.
- San Diego: listings, builders, Facebook/community pages, Airbnb/stay pages,
  video, communities, and some official/news/rules-adjacent results.

Tiny Home Clarity should not copy marketplace or vendor pages. The useful wedge
is:

- "Before you trust the listing/builder/community/stay result, here is what the
  result probably does and does not prove."
- "If you want legal placement, here is the official city-specific path we can
  verify and the questions still unanswered."
- "If you only wanted a stay or community, do not confuse that with ownership or
  parcel permission."

## P1 Findings

### 1. The hero still talks about Google/search mechanics instead of the user's problem

Los Angeles line 25 and San Diego line 25 start with "If you search..." and
then describe what Google mixes together.

That is analytically true, but it is not the best first-screen answer for a
human. A real searcher wants to know what they can do next, what is possible,
and what is risky.

Change:

- Replace SERP-language ledes with direct buyer answers.
- Suggested LA direction:
  - "In Los Angeles, the source-backed path we can verify is a movable tiny
    house used as an ADU inside the City of Los Angeles. Sale listings and ADU
    builder ads do not prove your parcel or unit qualifies."
- Suggested San Diego direction:
  - "In San Diego, tiny-house results can mean buying, building, staying, or
    legal placement. The source-backed path here is City of San Diego movable
    tiny house / ADU-related guidance; county properties and private communities
    need separate verification."

Files:

- `site/los-angeles-tiny-house-adu/index.html:25`
- `site/san-diego-tiny-house-adu/index.html:25`

### 2. "Short Answer" is not yet a human short answer

The current summary boxes are safe, but they read like a source record. A human
short answer should answer the page's main question in plain language.

Change the summary box from record-style fields into an answer block with:

- "Can I put a tiny house here?"
- "What path is source-backed?"
- "What does not count as proof?"
- "What should I do before I pay?"

Keep source confidence, source freshness, and jurisdiction scope visible, but
present them as supporting metadata after the human answer rather than the main
answer.

Files:

- `site/los-angeles-tiny-house-adu/index.html:29`
- `site/san-diego-tiny-house-adu/index.html:29`

### 3. The pages do not give enough concrete help for the dominant listing/builder SERP

The SERPs are dominated by listings, vendors, builders, communities, and stays.
The pages mention those categories, but the guidance is still generic.

A buyer looking at a listing or builder should get sharper help:

- "If a listing says THOW, park model, RVIA, ADU, MTH, modular, or shell, what
  does that imply?"
- "What documents should the seller/builder show?"
- "Which claims are red flags?"
- "Which costs are commonly outside the displayed price?"

Add one practical section per page:

- "If you are looking at a listing or builder quote"
- Include a short table:
  - Claim seen
  - What it might mean
  - What to ask for in writing

Files:

- `site/los-angeles-tiny-house-adu/index.html:46`
- `site/san-diego-tiny-house-adu/index.html:46`

### 4. City vs county scope should be a first-screen stop condition, not buried in summary/checklist

City/county scope is present, but a user could miss it until after they have
already read the page as locally applicable.

Change:

- Add an early warning or stop note immediately after the short answer:
  - LA: "If the parcel is outside the City of Los Angeles, stop. This page does
    not answer your county or other-city rules."
  - San Diego: "If the parcel is outside the City of San Diego, stop. San Diego
    County and other cities need separate rules."

Files:

- `site/los-angeles-tiny-house-adu/index.html:35`
- `site/san-diego-tiny-house-adu/index.html:35`

### 5. The pages need a clearer "next action" above the fold

The strongest practical next steps appear in the lower checklist, but a
searcher should see the next move sooner.

Change:

- Add a compact "Do these three things first" block near the top:
  1. Confirm parcel jurisdiction.
  2. Classify the unit.
  3. Ask the seller/builder which permit path and exclusions their price
     assumes.

Files:

- `site/los-angeles-tiny-house-adu/index.html:40`
- `site/san-diego-tiny-house-adu/index.html:40`

## P2 Findings

### 6. San Diego's community/stay intent is acknowledged but not useful enough

San Diego has meaningful community and rental/stay query demand. The current
page correctly says that stay/community intent is different from ownership, but
it does not help the reader decide what to do with that distinction.

Change:

- Add a small San Diego-specific section:
  - "If you are looking for a tiny-house community or stay"
  - Explain that this page is not a booking/community directory.
  - Give verification questions for long-term community claims:
    ownership vs rental, allowed duration, utilities, lease/lot terms,
    jurisdiction, and whether the result is actually inside the city.

File:

- `site/san-diego-tiny-house-adu/index.html:56`

### 7. Los Angeles shelter-village/nonprofit results should be separated from buyer intent

The LA SERP includes nonprofit/shelter village results. The current page
mentions nonprofit village stories in the lede but does not make clear that
this is not the same as a private buyer placement path.

Change:

- Add a brief note in the LA page:
  - "Tiny-home villages in LA search results are often shelter or nonprofit
    programs, not private buyer options."

File:

- `site/los-angeles-tiny-house-adu/index.html:25`

### 8. The bottom CTA is too generic

"Use the placement triage tool" is safe, but it is not the most useful next
step after a local page.

Change:

- Replace or supplement the bottom CTA with a local-specific action:
  - "Use the triage tool after you know the parcel city and unit type."
  - "Bring these answers to LADBS / City Planning" for LA.
  - "Bring these answers to Development Services / Planning" for San Diego.

Files:

- `site/los-angeles-tiny-house-adu/index.html:173`
- `site/san-diego-tiny-house-adu/index.html:173`

## Safety Pass

No P0 claim-safety issues found.

Passed:

- No parcel approval or legal permission overclaims.
- City/county scope is explicit.
- Official source URLs are visible.
- Source last checked dates are visible.
- Confidence levels are visible.
- The pages distinguish tiny-home build intent from ADU contractor intent.

## Recommended Implementation Shape

Do not solve this by adding more sections at the bottom. Rebuild the top half.

Recommended order:

1. Hero: direct answer to the searcher's problem.
2. Short answer: possible path, not automatic, city-only scope, first action.
3. Three first actions: jurisdiction, unit classification, seller/builder
   written assumptions.
4. Listing/builder claim table.
5. Source-backed city path.
6. City-specific caveats:
   - LA: MTH-as-ADU vs conventional ADU; shelter-village results are not buyer
     placement.
   - San Diego: community/stay results are not ownership/placement.
7. Official sources.
8. Verification checklist.

## Review Conclusion

The pages should not be released as-is if the goal is to satisfy human searcher
intent. They are safe, but still not concrete enough for someone who arrived
from the target broad local queries.

Next step: implementation should repair the top half of both pages using this
review, then SEO Research & Review should rerun the Searcher POV Review Prompt.
