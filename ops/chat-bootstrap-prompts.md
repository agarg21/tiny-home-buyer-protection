# Chat Bootstrap Prompts

Status: deprecated

Last updated: 2026-07-28

The original bootstrap prompts were created before the central Control Room,
single-writer transactions, frozen path contracts, and independent review
protocol. They must not be reused.

Use the current role files instead:

- Master / Operator: `agents/master-operator.md`
- implementation advisory: `agents/implementation-agent.md`
- SEO research and review: `agents/seo-research-review-agent.md`
- independent transaction review: `agents/operator-review-agent.md`

The Master / Operator is the only project-repository writer. Supporting roles
receive one bounded task, inspect the repository read-only, and return findings
or recommendations to the Master. They do not update shared state, choose work,
commit, push, deploy, or mutate external accounts.

Scheduled work must arrive through the central Control Room with a valid
dispatch contract and lease. Direct manual user instructions remain allowed in
the Master chat but still require one registered action, exact paths, native
QA, and a different independent read-only reviewer.
