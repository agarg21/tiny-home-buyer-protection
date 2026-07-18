# GSC Page Indexing Review - 2026-07-18

## Evidence

- Source: authenticated Google Search Console browser report.
- Property: `sc-domain:tinyhomeclarity.com`.
- Collected: 2026-07-18.
- Report last updated by Google: 2026-07-09.
- Summary: 1 indexed page and 3 not-indexed URLs, all classified as
  `Page with redirect`.

## Affected URLs

| URL | Current public behavior | Decision |
| --- | --- | --- |
| `http://tinyhomeclarity.com/` | `301` to `https://tinyhomeclarity.com/` | Expected; no fix |
| `http://www.tinyhomeclarity.com/` | `301` to `https://tinyhomeclarity.com/` | Expected; no fix |
| `https://www.tinyhomeclarity.com/` | `301` to `https://tinyhomeclarity.com/` | Expected; no fix |

## Assessment

These are protocol and host aliases, not missing content pages. All three
correctly converge on the preferred HTTPS apex URL. They should remain excluded
from Google's index. Do not request indexing or start GSC fix validation for
these aliases.

The newer unattended API baseline is the operative measurement source: it found
5 of 6 configured priority URLs indexed, with only the newly released
under-$20K guide not yet indexed. Continue daily snapshot comparison under
`THC-MON-001`; this browser report does not unlock implementation work.
