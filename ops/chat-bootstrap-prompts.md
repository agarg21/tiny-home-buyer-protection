# Chat Bootstrap Prompts

Status: deprecated

Last updated: 2026-08-09

The original bootstrap prompts were created before the current single-writer,
frozen-path, direct-heartbeat, and independent-review protocol. They must not
be reused.

Use the current role files instead:

- Master / Operator: `agents/master-operator.md`
- implementation advisory: `agents/implementation-agent.md`
- SEO research and review: `agents/seo-research-review-agent.md`
- independent transaction review: `agents/operator-review-agent.md`

The Master / Operator is the only project-repository writer. Supporting roles
receive one bounded task, inspect the repository read-only, and return findings
or recommendations to the Master. They do not update shared state, choose work,
commit, push, deploy, or mutate external accounts.

Control Room dispatches require a valid contract and lease. The user-authorized
direct Master heartbeat through 2026-08-14 at 17:00 America/New_York is a
temporary direct-manual exception and writes no central ledger state. It still
requires one registered action, exact paths, native QA, and a different
independent read-only reviewer. After the cutoff, it performs no project work
unless the user renews authority.
