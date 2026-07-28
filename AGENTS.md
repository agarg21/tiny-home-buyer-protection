# AGENTS.md

## Project

Project name: Tiny Homes Buyer Protection

Workspace: `/Users/apoorvagarg/Documents/Tiny Home`

Business plan: `/Users/apoorvagarg/Documents/SEO Agent/seo-lab/niches/tiny-homes/13-bootstrap-business-plan.md`

This repo is the source of truth for strategy, implementation, research, and operating handoffs.

## Roles

- Master / Operator: the single repository writer for a registered Control Room
  dispatch or direct manual user transaction.
- Implementation Agent: read-only supporting role for bounded implementation
  analysis, test design, and patch recommendations.
- SEO Research & Review Agent: read-only supporting role for bounded search,
  competitor, persona, and editorial research.
- Operator Review Agent: different independent read-only reviewer for the
  complete transaction.

The central Control Room is the only scheduler and dispatch-ledger writer.
Direct manual user instructions in the Master chat are also valid, but the
Master must register one action ID and exact paths in the repository before
substantive editing. Supporting agents never independently schedule work or
edit the shared checkout.

## Read First

All agents should read:

- `AGENTS.md`
- `strategy/current-strategy.md`
- `strategy/content-principles.md`
- `ops/current-cycle.md`
- `ops/needs-user.md`
- `ops/operator-review.md`
- `ops/seo-roadmap.json`
- `status/site-pages.md`
- `docs/plan/tiny-home-search-product-playbook.md`
- `progress.md`
- `decisions.md`

Role-specific files:

- Master: `agents/master-operator.md`
- Implementation: `agents/implementation-agent.md`, `backlog/implementation-backlog.md`
- SEO Research & Review: `agents/seo-research-review-agent.md`, `backlog/seo-research-review-backlog.md`
- Independent review: `agents/operator-review-agent.md`

## Site Structure

- Published static files live in `site/`.
- GitHub Pages deploys `site/` through `.github/workflows/deploy-pages.yml`.
- Keep `site/.nojekyll`.
- Preserve `site/CNAME` for the configured `tinyhomeclarity.com` custom domain.
- Planning docs live under `docs/plan/`.
- Research docs live under `docs/research/`, `seo/`, `briefs/`, and `reviews/`.
- Page-role and implementation baselines live under `status/`. Dated GSC
  evidence remains under `ops/gsc-snapshots/`.

## Validation Commands

Run these before ending any substantive repository transaction:

```bash
git status --short
test -f site/.nojekyll
test -f .github/workflows/deploy-pages.yml
node --test tools/*.test.mjs
node tools/seo-qa.mjs
node tools/operator-state-qa.mjs
python3 -m json.tool ops/seo-roadmap.json >/dev/null
git diff --check
```

Site QA may report known non-blocking canonical warnings until a separately
reviewed site transaction adds explicit canonicals. New errors block release.
Use `node tools/seo-qa.mjs --strict-warnings` when the action claims all
warnings are resolved.

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
- New or materially repaired SEO pages must follow
  `docs/plan/tiny-home-search-product-playbook.md` and
  `templates/searcher-pov-review-prompt.md`.
- Review decision-job personas separately from beginner, intermediate, and
  advanced experience levels.
- A page that is safe but fails the primary searcher's first-screen job is not
  release-ready.

## Tooling Rules

- Semrush should be accessed through Codex Chrome/browser integration when logged in. Do not assume Semrush API units are available.
- DataForSEO must be used only in small capped batches, with raw responses saved and approximate cost reported.
- SEO Research & Review should use Anti Gravity CLI via `agy` as an advisory second opinion for important reviews when available.
- Browser automation must stop before purchase, payment, DNS changes, or account-level changes unless the user explicitly confirms.

## Central Control Room

- This project is enrolled in the central Control Room at `/Users/apoorvagarg/Documents/SEO Agent/seo-lab/operator/`.
- First read this repository's local `ops/operator.json`, `ops/seo-roadmap.json`, `ops/seo-roadmap.md`, and `ops/portfolio-operator.md`. Then read the central registry, site configuration, policy, and latest report under `/Users/apoorvagarg/Documents/SEO Agent/seo-lab/operator/`; central files are not under this repository's `ops/` path.
- The rolling roadmap replaces ad hoc chat selection as the durable execution queue. Existing role backlogs remain supporting evidence.
- Scheduled substantive work must arrive with a registered action ID,
  immutable dispatch contract, idempotency key, and lease token. Validate the
  lease before touching project state. A failed or stale lease is a no-op.
- Direct manual user work does not need a dispatch lease, but it still requires
  one recorded action, exact paths, native QA, a different independent
  read-only reviewer, and the same release controls.
- The user granted standing reviewed-release authorization on 2026-07-17. The operator may create and push at most one exact-path, independently reviewed, QA-green substantive commit per day, then verify the native Pages run and action-specific production invariants. Stop on remote divergence or a production regression whose rollback scope is ambiguous.
- GitHub Actions collects a normalized public-safe GSC snapshot daily. At run start, validate and compare every new snapshot with the prior snapshot and `ops/seo-roadmap.json`. The first snapshot establishes a baseline and cannot satisfy a changed-evidence gate. New data may unlock or reprioritize an item, but an unchanged healthy snapshot is housekeeping and should produce a no-op rather than manufactured work.
- Never commit GSC credentials, complete raw query exports, country/device rows, or user data. Treat Semrush as optional enrichment; GSC API evidence is the unattended first-party measurement source.
- A two-hour scan is a sensing cadence, not a content-production quota. Healthy unchanged runs should stop as no-ops.
- Never discard or absorb unrelated dirty files. Inspect baseline and resulting diffs and stage only declared action paths.
- Fix P0-P2 findings and request re-review for at most three cycles. Only
  `PASS` or `PASS_WITH_P3` may proceed.
- Before push, fetch `origin`, require no divergence, and inspect the complete
  unpushed commit/path range.
- A change without `site/**` or the Pages workflow is push-only; do not wait for
  a deployment that is not applicable.
