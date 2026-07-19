# Searcher POV Review Prompt

Use this prompt in every SEO Research & Review pass for a new or materially
repaired page.

## Required Setup

- Target page:
- Target query:
- Secondary queries:
- Intended searcher:
- Primary persona: beginner / intermediate / advanced
- Searcher job-to-be-done:
- SERP evidence reviewed:
- Official/source evidence reviewed:

## Persona Pass

Review from three angles:

1. Beginner tiny-house searcher:
   - Does the page explain terms before relying on them?
   - Does the first screen make the topic less confusing?
   - Does the reader know what to do next?
2. Intermediate tiny-house searcher:
   - Does the page help compare listings, builders, ADU claims, communities,
     stays, and legal placement without mixing them together?
   - Does it surface buyer-protection red flags?
3. Advanced tiny-house searcher:
   - Does the page give enough source specificity, jurisdiction scope,
     unresolved edge cases, and verification questions to be useful?

State which persona is primary for the target query. Broad city queries usually
need to work for beginner and intermediate searchers first.

## Human Searcher Pass

Read the page as the intended searcher:

> I searched this query because I have a real problem, not because I want to
> read an SEO page. In the first screen, does this page make me feel I landed in
> the right place? Does it answer or organize my problem in human terms? What
> would I do next after reading it? What feels like filler, site-internal
> framing, or an explanation of the page instead of an answer to me?

Answer:

1. Would the intended searcher continue reading after the first screen?
2. What exact question does the page answer first?
3. What is the reader's next action?
4. Which headings feel written for a human?
5. Which headings feel written for SEO/internal organization?
6. Which section is least useful to the intended searcher?
7. What is missing that the searcher would reasonably expect?

## SERP Strategy Pass

Review the top results for the target query and summarize:

1. Dominant result types: official, vendor, marketplace, forum, video, map/local,
   tool, guide, news, other.
2. What Google appears to think the searcher wants.
3. Which parts Tiny Home Clarity can serve honestly.
4. Which parts are adjacent or out of scope.
5. What our page must do differently to be useful.

## Safety And Source Pass

Check:

- No legal/permit/parcel approval overclaims.
- City/county/state scope is explicit.
- Official source URLs are visible.
- Source last checked dates are present.
- Confidence levels are present for local/zoning records.
- Unknown metrics or facts are marked `UNKNOWN`.

## Verdict

Use one:

- `launch` / `PASS`: useful from searcher POV and safe.
- `launch after fixes` / `PASS_WITH_P3`: only non-blocking polish remains.
- `improve` / `FAIL`: searcher POV, SERP strategy, source support, or claim
  safety has P0-P2 issues.
