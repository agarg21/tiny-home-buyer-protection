# Decisions

## 2026-07-07 - Bootstrap As Focused Experiment

Decision: proceed as a focused bootstrap experiment, not a full-scale content site.

Why:

- Business plan identifies credible initial demand and buyer pain.
- The project has a clear tool-first wedge.
- Success depends on useful assets and official-source verification, not page volume.

## 2026-07-07 - Use GitHub Pages Static Site

Decision: deploy the initial site from `site/` using GitHub Pages via GitHub Actions.

Why:

- Simple, low-cost launch path.
- Good fit for a static SEO/product MVP.
- Keeps published source in GitHub.

## 2026-07-07 - Do Not Create `site/CNAME` Yet

Decision: wait to create `site/CNAME` until a custom domain is selected and purchased.

Why:

- Avoids deploying a CNAME that does not yet resolve or belong to the user.

## 2026-07-07 - Create Public GitHub Repo

Decision: create `agarg21/tiny-home-buyer-protection` as a public GitHub repository.

Why:

- Public Pages hosting is the lowest-friction static-site path.
- The initial repo contains operating docs and static source, not private credentials.

Status update:

- User noted the repo may need to become private.
- Do not change visibility until explicitly confirmed because Pages behavior can depend on account/plan support.

## 2026-07-07 - Use Porkbun As Registrar

Decision: use Porkbun for domain purchase/setup unless the user changes direction.

Why:

- User said Porkbun has been the standard registrar for recent domain purchases.

## 2026-07-07 - Select tinyhomeclarity.com

Decision: use `tinyhomeclarity.com` as the custom domain.

Why:

- User approved it after rejecting `tinyhomeguard.com`.
- It better conveys practical decision support than security/protection.
- It is broad enough for placement, cost, utilities, financing, builder checks, and future tools.

Status:

- Purchased through Porkbun on 2026-07-07.
- Porkbun authoritative DNS configured for GitHub Pages on 2026-07-08.
- Leftover wildcard parking DNS was removed on 2026-07-08 because GitHub strongly recommends against wildcard DNS records for Pages and HTTPS provisioning was stuck.

## 2026-07-08 - Use Tiny Home Clarity As Public Brand

Decision: use `Tiny Home Clarity` as the public-facing site brand.

Why:

- It matches `tinyhomeclarity.com`.
- It conveys practical decision support without sounding like legal advice, a regulator, or a formal buyer-protection program.
- It leaves room for placement, cost, utilities, financing, builder checks, and future templates/tools.

Status:

- Public title, header brand, aria label, and footer disclaimer now use `Tiny Home Clarity`.
- `Tiny Homes Buyer Protection` remains acceptable as internal project/thesis language unless explicitly renamed later.

## 2026-07-13 - Defer Analytics Until Traffic Or Product Questions Require It

Decision: do not add analytics yet.

Why:

- Google Search Console is enough for the current bottleneck: discovery, indexing, impressions, clicks, and queries.
- The site has no meaningful click volume yet, so analytics would mostly confirm low traffic.
- Capturing raw calculator inputs would create unnecessary privacy and trust risk.
- If analytics are added later, start with page views and anonymous events only, not user-entered financial numbers.

Status:

- Analytics provider remains unselected.
- Add analytics only after GSC shows meaningful traffic or there is a specific product question GSC cannot answer.
