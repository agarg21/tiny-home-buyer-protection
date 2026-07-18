# AGENTS.md

## Project

Project name: Tiny Homes Buyer Protection

Workspace: `/Users/apoorvagarg/Documents/Tiny Home`

Business plan: `/Users/apoorvagarg/Documents/SEO Agent/seo-lab/niches/tiny-homes/13-bootstrap-business-plan.md`

This repo is the source of truth for strategy, implementation, research, and operating handoffs.

## Roles

- Master / Operator: coordinates strategy, infrastructure, agent handoffs, decisions, and status.
- Implementation Agent: maintains and validates site/product changes.
- SEO Research & Review Agent: researches and reviews search opportunities, content quality, and strategy alignment.

Agents coordinate through files, especially `ops/current-cycle.md`, `ops/needs-user.md`, `progress.md`, `decisions.md`, and the role-specific backlogs.

## Read First

All agents should read:

- `AGENTS.md`
- `strategy/current-strategy.md`
- `strategy/content-principles.md`
- `ops/current-cycle.md`
- `ops/needs-user.md`
- `progress.md`
- `decisions.md`

Role-specific files:

- Master: `agents/master-operator.md`
- Implementation: `agents/implementation-agent.md`, `backlog/implementation-backlog.md`
- SEO Research & Review: `agents/seo-research-review-agent.md`, `backlog/seo-research-review-backlog.md`

## Site Structure

- Published static files live in `site/`.
- GitHub Pages deploys `site/` through `.github/workflows/deploy-pages.yml`.
- Keep `site/.nojekyll`.
- Create `site/CNAME` only after a custom domain is selected and purchased.
- Planning docs live under `docs/plan/`.
- Research docs live under `docs/research/`, `seo/`, `briefs/`, and `reviews/`.

## Validation Commands

Run these before ending implementation work:

```bash
git status --short
test -f site/.nojekyll
test -f .github/workflows/deploy-pages.yml
```

For deployment checks after push:

```bash
gh run list --repo agarg21/tiny-home-buyer-protection --limit 5
gh api repos/agarg21/tiny-home-buyer-protection/pages
curl -I https://agarg21.github.io/tiny-home-buyer-protection/
```

If a custom domain is later configured, also check:

```bash
dig +short example.com A
dig +short www.example.com CNAME
curl -I https://example.com/
curl -I https://example.com/sitemap.xml
```

## Content Rules

- Voice: skeptical, practical, buyer-protective, source-backed, and clear about uncertainty.
- Avoid dreamy lifestyle content, definitive legal answers, mass city/state pages, generic inspiration posts, and thin affiliate listicles.
- Do not claim that tiny homes are always cheap.
- Do not claim "yes, you can put a tiny home here" unless official sources clearly support it.
- Prefer "possible path" and "verify this with the local office."
- Separate measured data, tool estimates, assumptions, and opinions.
- Mark unavailable keyword volume, CPC, difficulty, traffic, backlinks, revenue, or rankings as `UNKNOWN`.
- Every local/zoning record should include official source URLs, last checked date, and confidence level.
- Lead generation waits until partner vetting exists.

## Tooling Rules

- Semrush should be accessed through Codex Chrome/browser integration when logged in. Do not assume Semrush API units are available.
- DataForSEO must be used only in small capped batches, with raw responses saved and approximate cost reported.
- SEO Research & Review should use Anti Gravity CLI via `agy` as an advisory second opinion for important reviews when available.
- Browser automation must stop before purchase, payment, DNS changes, or account-level changes unless the user explicitly confirms.

## Central Control Room

- This project is enrolled in the central Control Room at `/Users/apoorvagarg/Documents/SEO Agent/seo-lab/operator/`.
- First read this repository's local `ops/operator.json`, `ops/seo-roadmap.json`, `ops/seo-roadmap.md`, and `ops/portfolio-operator.md`. Then read the central registry, site configuration, policy, and latest report under `/Users/apoorvagarg/Documents/SEO Agent/seo-lab/operator/`; central files are not under this repository's `ops/` path.
- The rolling roadmap replaces ad hoc chat selection as the durable execution queue. Existing role backlogs remain supporting evidence.
- The user granted standing reviewed-release authorization on 2026-07-17. The operator may create and push at most one exact-path, independently reviewed, QA-green substantive commit per day, then verify the native Pages run and action-specific production invariants. Stop on remote divergence or a production regression whose rollback scope is ambiguous.
- GitHub Actions collects a normalized public-safe GSC snapshot daily. At run start, validate and compare every new snapshot with the prior snapshot and `ops/seo-roadmap.json`. The first snapshot establishes a baseline and cannot satisfy a changed-evidence gate. New data may unlock or reprioritize an item, but an unchanged healthy snapshot is housekeeping and should produce a no-op rather than manufactured work.
- Never commit GSC credentials, complete raw query exports, country/device rows, or user data. Treat Semrush as optional enrichment; GSC API evidence is the unattended first-party measurement source.
- A two-hour scan is a sensing cadence, not a content-production quota. Healthy unchanged runs should stop as no-ops.
- Never discard or absorb unrelated dirty files. Inspect baseline and resulting diffs and stage only declared action paths.
