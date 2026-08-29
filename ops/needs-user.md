# Needs User

Last updated: 2026-08-29

## Current Blockers

- None. The user deferred the review-clean BAC Library draft before any send on
  2026-08-04. No outreach approval is requested.
- The user renewed direct Master operation at 09:00 and 17:00
  America/New_York through 2026-10-22 at 17:00. No schedule decision is
  pending.

## Deferred User Decisions

- Revisit the BAC Library resource suggestion only after a separate direct
  user decision. Product completion does not automatically reopen or approve
  the send.
- Approve the exact answer and destination before any Reddit or other public
  community post, comment, vote, message, link insertion, or account action.
  Research and drafts may proceed without requesting approval; no current
  candidate has posting authority.
- Choose email service provider for future lead capture. Current value: `UNKNOWN`.
- Choose analytics provider later if traffic or a specific product question requires on-site analytics. Current value: deferred; do not add analytics yet.
- Confirm whether to make the GitHub repo private. Public is currently working with GitHub Pages; private Pages may depend on account/plan support.

## Waiting On External Accounts

- Google Search Console indexing continues through the daily read-only snapshot
  workflow. The 2026-08-29 snapshot is finalized through 2026-08-27: 20
  impressions, 0 clicks, eight sitemap pages, and five indexed URLs. Under-
  `$20K`, build options, and land remain discovered-currently-not-indexed.
  Georgia received a fresh crawl and remains indexed. The lower rolling totals
  reflect older impression days leaving their windows, not a verified defect.
  No user action or indexing request is needed.
- The 2026-07-18 authenticated Page indexing review found only HTTP/`www` aliases excluded as `Page with redirect`; all correctly redirect to the HTTPS apex. No indexing request, fix validation, DNS change, or user action is needed for those aliases.

## User Input Log

- 2026-07-07: User said Porkbun should be used for domain purchase, consistent with prior domain purchases.
- 2026-07-07: User noted the GitHub Pages repo may need to be private. Do not change repo visibility until explicitly confirmed.
- 2026-07-07: User noted HTTPS/DNS settings may be needed after domain purchase.
- 2026-07-07: User said `tinyhomeguard.com` does not convey the correct idea. Updated recommendation moved toward clarity/check/planning names.
- 2026-07-07: User selected `tinyhomeclarity.com`. Porkbun cart prepared; payment remains user-controlled.
- 2026-07-07: User confirmed `tinyhomeclarity.com` was bought.
- 2026-07-08: User approved replacing Porkbun parking DNS with GitHub Pages records. Porkbun authoritative DNS now points apex to GitHub Pages and `www` to `agarg21.github.io`; recursive `www` caches may lag until TTL expiry.
- 2026-07-08: HTTPS setup issue found and fixed. Removed leftover Porkbun wildcard parking CNAME, re-added GitHub Pages custom domain to retrigger certificate provisioning, and enabled HTTPS enforcement after GitHub approved the certificate.
- 2026-07-08: User approved Google Search Console setup. Added DNS TXT verification at Porkbun, verified the `tinyhomeclarity.com` Domain property in GSC, submitted `https://tinyhomeclarity.com/sitemap.xml`, and requested indexing for the homepage.
- 2026-07-13: User agreed analytics is not urgent while there are no clicks. Decision recorded to defer analytics until meaningful traffic or a specific product question requires it.
