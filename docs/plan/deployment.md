# Deployment Plan

Last updated: 2026-07-08

## Current Status

- Local git repo: initialized on `main`.
- GitHub owner: `agarg21`.
- Repo: `agarg21/tiny-home-buyer-protection`.
- Hosting: GitHub Pages via GitHub Actions.
- Published source: `site/`.
- Custom domain: `tinyhomeclarity.com`; purchased on 2026-07-07.
- `site/.nojekyll`: present.
- `site/CNAME`: present with `tinyhomeclarity.com`.
- Google Search Console: not configured yet.
- GitHub Pages URL: `https://agarg21.github.io/tiny-home-buyer-protection/`.
- Deployment verification: homepage and sitemap returned `HTTP/2 200` on 2026-07-07.
- Registrar preference: Porkbun.
- Porkbun status: `tinyhomeclarity.com` purchased on 2026-07-07.
- GitHub Pages custom domain: configured as `tinyhomeclarity.com` on 2026-07-07.
- DNS status: Porkbun authoritative DNS updated for GitHub Pages on 2026-07-08.
- HTTPS status: pending GitHub certificate provisioning; `https://tinyhomeclarity.com/` still returns a certificate mismatch as of 2026-07-08.
- Repo visibility: currently public; user noted it may need to become private, but this needs explicit confirmation before changing.

## GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` deploys the `site/` directory on pushes to `main` when `site/**` or the workflow changes.

Pre-domain Pages URL:

```text
https://agarg21.github.io/tiny-home-buyer-protection/
```

Verification commands after repo creation and push:

```bash
gh run list --repo agarg21/tiny-home-buyer-protection --limit 5
gh api repos/agarg21/tiny-home-buyer-protection/pages
curl -I https://agarg21.github.io/tiny-home-buyer-protection/
curl -I https://agarg21.github.io/tiny-home-buyer-protection/sitemap.xml
```

## Custom Domain Setup

After purchase:

1. Add `site/CNAME` with the apex domain.
2. Configure GitHub Pages custom domain.
3. Add DNS records at the registrar.
4. Verify DNS, GitHub Pages custom-domain status, HTTPS certificate, and sitemap availability.

GitHub Pages DNS records for an apex domain:

| Type | Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `agarg21.github.io` |

DNS observed on 2026-07-07 before GitHub Pages DNS setup:

```text
tinyhomeclarity.com A 44.230.85.241
tinyhomeclarity.com A 52.33.207.7
www.tinyhomeclarity.com CNAME uixie.porkbun.com
tinyhomeclarity.com TXT "v=spf1 include:_spf.porkbun.com ~all"
```

Porkbun DNS changes completed on 2026-07-08:

- Apex resolves at Porkbun authoritative nameservers to GitHub Pages A records:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- `www` CNAME resolves at Porkbun authoritative nameservers to `agarg21.github.io`.
- Root SPF TXT record was preserved: `"v=spf1 include:_spf.porkbun.com ~all"`.

Verification on 2026-07-08:

```text
dig +short @salvador.ns.porkbun.com tinyhomeclarity.com A
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

dig +short @salvador.ns.porkbun.com www.tinyhomeclarity.com CNAME
agarg21.github.io.

curl -I http://tinyhomeclarity.com/
HTTP/1.1 200 OK
Server: GitHub.com
```

Note: recursive DNS caches may briefly show the old `www` CNAME (`uixie.porkbun.com`) until the previous TTL expires.

## Google Search Console

Status: waiting on DNS setup and Google Search Console verification.

Recommended property type: Domain property.

After purchase:

1. Create a Domain property for the apex domain in Google Search Console.
2. Add the provided TXT verification record at the registrar.
3. Check TXT propagation with `dig +short <domain> TXT`.
4. Submit `https://<domain>/sitemap.xml`.

## Items Requiring User Approval

- DNS changes at the registrar.
- Changing the GitHub repository from public to private.
- Any account-level GitHub, registrar, or Google Search Console changes.
