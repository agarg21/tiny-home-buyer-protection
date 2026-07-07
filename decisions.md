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
