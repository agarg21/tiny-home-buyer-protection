# Needs User

Last updated: 2026-07-09

## Open Decisions

- Domain selected: `tinyhomeclarity.com`.
- Registrar preference: Porkbun.
- Choose email service provider for future lead capture. Current value: `UNKNOWN`.
- Choose analytics provider. Current value: `UNKNOWN`; likely defaults are Plausible for simple privacy-friendly analytics or GA4 for free Google ecosystem reporting.
- Confirm whether to make the GitHub repo private. Public is currently working with GitHub Pages; private Pages may depend on account/plan support.

## Waiting On External Accounts

- Google Search Console homepage indexing status should be rechecked after Google processes the submitted indexing request. Sitemap status changed to `Success` on 2026-07-08 with 1 discovered page; public Google search returned the homepage on 2026-07-09.

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
