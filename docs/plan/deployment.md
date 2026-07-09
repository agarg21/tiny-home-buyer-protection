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
- Google Search Console: Domain property verified on 2026-07-08.
- GitHub Pages URL: `https://agarg21.github.io/tiny-home-buyer-protection/`.
- Deployment verification: homepage and sitemap returned `HTTP/2 200` on 2026-07-07.
- Registrar preference: Porkbun.
- Porkbun status: `tinyhomeclarity.com` purchased on 2026-07-07.
- GitHub Pages custom domain: configured as `tinyhomeclarity.com` on 2026-07-07.
- DNS status: Porkbun authoritative DNS updated for GitHub Pages on 2026-07-08; leftover wildcard parking CNAME removed on 2026-07-08.
- HTTPS status: GitHub Pages certificate approved and HTTPS enforced on 2026-07-08.
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
- GitHub Pages IPv6 AAAA records are also present:
  - `2606:50c0:8000::153`
  - `2606:50c0:8001::153`
  - `2606:50c0:8002::153`
  - `2606:50c0:8003::153`
- Removed old Porkbun wildcard parking record: `*.tinyhomeclarity.com CNAME uixie.porkbun.com`.
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
HTTP/1.1 301 Moved Permanently
Location: https://tinyhomeclarity.com/

curl -I https://tinyhomeclarity.com/
HTTP/2 200

curl -I https://tinyhomeclarity.com/sitemap.xml
HTTP/2 200

curl -I https://www.tinyhomeclarity.com/
HTTP/2 301
Location: https://tinyhomeclarity.com/
```

Notes:

- Porkbun quick setup left a wildcard parking record in place. GitHub warns against wildcard DNS records for Pages, so it was removed.
- After removing the wildcard, the GitHub Pages custom domain was removed and re-added to retrigger HTTPS provisioning. GitHub then approved the certificate for both `tinyhomeclarity.com` and `www.tinyhomeclarity.com`, and HTTPS enforcement was enabled.

## Google Search Console

Status on 2026-07-08:

- Domain property: `tinyhomeclarity.com`
- Verification method: DNS TXT record at Porkbun.
- TXT record added at root: `google-site-verification=8tBturqTgLYWBcThyfVEfG3DkfZma_9OKQ1Argim1f0`
- GSC ownership status: verified.
- Sitemap submitted: `https://tinyhomeclarity.com/sitemap.xml`
- Initial GSC sitemap table status: `Couldn't fetch`.
- Independent fetch checks: sitemap returns `HTTP 200` publicly and with a Googlebot user agent.
- URL Inspection found `https://tinyhomeclarity.com/` from the sitemap and showed `Discovered - currently not indexed`.
- Indexing request: submitted for `https://tinyhomeclarity.com/`; GSC confirmed it was added to the priority crawl queue.
- `site/robots.txt` now advertises the sitemap URL.
- Follow-up check: sitemap status changed to `Success` on 2026-07-08 with 1 discovered page.

Follow-up:

- Recheck homepage indexing status after Google processes the indexing request.

## Items Requiring User Approval

- DNS changes at the registrar.
- Changing the GitHub repository from public to private.
- Any account-level GitHub, registrar, or Google Search Console changes.
