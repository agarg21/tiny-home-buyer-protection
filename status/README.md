# Page Status Records

`status/site-pages.md` is the durable baseline for each public page's role,
implementation state, review coverage, and next blocker.

It is not the latest GSC report. Daily page-level performance and indexing
evidence belong in dated `ops/gsc-snapshots/` files. A page transaction may add
a dated monitoring overlay to the status table, but should preserve the
research or implementation baseline used for the page decision.

The operator updates this status record when a research pack changes a page
role, a page is materially reviewed, or a release changes implementation state.
Scan cadence alone does not require rewriting it.
