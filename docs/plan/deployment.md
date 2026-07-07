# Deployment Plan

Last updated: 2026-07-07

## Current Status

- Local git repo: initialized on `main`.
- GitHub owner: `agarg21`.
- Repo: `agarg21/tiny-home-buyer-protection`.
- Hosting: GitHub Pages via GitHub Actions.
- Published source: `site/`.
- Custom domain: not selected or purchased.
- `site/.nojekyll`: present.
- `site/CNAME`: intentionally absent until a custom domain is selected and purchased.
- Google Search Console: not configured because no domain is selected.
- GitHub Pages URL: `https://agarg21.github.io/tiny-home-buyer-protection/`.
- Deployment verification: homepage and sitemap returned `HTTP/2 200` on 2026-07-07.

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

Only after the user buys a domain:

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

## Google Search Console

Status: waiting on domain purchase.

Recommended property type: Domain property.

After purchase:

1. Create a Domain property for the apex domain in Google Search Console.
2. Add the provided TXT verification record at the registrar.
3. Check TXT propagation with `dig +short <domain> TXT`.
4. Submit `https://<domain>/sitemap.xml`.

## Items Requiring User Approval

- Domain purchase and payment.
- DNS changes at the registrar.
- Any account-level GitHub, registrar, or Google Search Console changes.
