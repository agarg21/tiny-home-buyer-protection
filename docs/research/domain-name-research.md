# Domain Name Research

Last updated: 2026-07-07

## Criteria

- Prefer clear, trustworthy `.com` names.
- Sound like a buyer-protection and planning resource, not a law firm, government office, builder, or vendor.
- Leave room for tools, checklists, zoning verification workflows, cost calculators, and vendor due diligence.
- Avoid names that imply definitive legal answers.
- Avoid overly dreamy lifestyle names.

## Availability Method

Checked small candidate set using:

```bash
curl -s -o /dev/null -w '%{http_code}' https://rdap.verisign.com/com/v1/domain/<domain>
dig +short <domain> A
```

Interpretation:

- RDAP `404` means the domain appears unregistered in Verisign RDAP.
- No A records supports but does not prove availability.
- Registrar checkout confirmation is still required before branding or adding `site/CNAME`.

Registrar confirmation status: PENDING. The user should confirm at the chosen registrar before purchase.

## Candidates

| Domain | RDAP | DNS A | Positioning Notes | Status |
|---|---:|---|---|---|
| `tinyhomeguard.com` | 404 | none found | Short, protective, memorable. Slightly broad but fits buyer protection without sounding legal or governmental. | Primary recommendation, registrar confirmation pending |
| `tinyhomerealitycheck.com` | 404 | none found | Strongly matches the sober, skeptical voice. Good for cost and placement reality checks; a bit long. | Backup |
| `tinyhomebuyerprotection.com` | 404 | none found | Exact positioning, highly clear, but long and slightly formal. | Backup |
| `tinyhomeplacement.com` | 404 | none found | Excellent for the first product wedge, but narrower than the full strategy. | Backup |
| `tinyhomeverify.com` | 404 | none found | Tool-like and trust-oriented. Could imply verification authority, so copy should be careful. | Backup |
| `tinyhomepermitpath.com` | 404 | none found | Clear planning angle, but narrow and may sound too permit-specific. | Backup |
| `tinyhouseplacement.com` | 404 | none found | Strong placement focus, useful for SEO; narrower than brand strategy. | Backup |
| `tinyhomeanswers.com` | 404 | none found | Broad and simple, but risks sounding definitive. | Backup |
| `tinyhomeduediligence.com` | 404 | none found | Very aligned with paid workbook/product future, but long. | Backup |
| `tinyhomebuyerchecklist.com` | 404 | none found | Clear and practical, good for templates/checklists; less brandable. | Backup |
| `tinyhomechecklist.com` | 200 | `162.255.119.219` | Clear but appears registered. | Do not use unless acquired |
| `tinyhomeplanning.com` | 200 | `15.197.225.128`, `3.33.251.168` | Strong name but appears registered. | Do not use unless acquired |

## Updated Direction

User feedback on 2026-07-07: `tinyhomeguard.com` does not convey the right idea.

Better positioning lane:

- Clear planning help.
- Buyer checklist / due diligence.
- Reality check.
- Placement verification.
- Avoid names that sound like a security company, legal advice, government office, or builder/vendor sales site.

## Additional Candidates

Checked on 2026-07-07 using RDAP/DNS. Registrar confirmation is still required.

| Domain | RDAP | DNS A | Positioning Notes | Status |
|---|---:|---|---|---|
| `tinyhomeclarity.com` | 404 | none found | Calm, helpful, broad enough for placement, cost, utilities, and builder due diligence. | Strong candidate |
| `tinyhomecheckup.com` | 404 | none found | Friendly, practical, broad. Suggests a pre-purchase check without sounding legal. | Strong candidate |
| `tinyhomeplancheck.com` | 404 | none found | Very tool-like and decision-support oriented. Slightly less elegant, but clear. | Strong candidate |
| `tinyhomerealitycheck.com` | 404 | none found | Excellent fit for skeptical, buyer-protective voice; longer but memorable. | Strong candidate |
| `tinyhouserealitycheck.com` | 404 | none found | Same as above, using "tiny house" phrasing. | Strong candidate |
| `tinyhomewise.com` | 404 | none found | Short and positive; less specific but brandable. | Candidate |
| `tinyhomeprep.com` | 404 | none found | Short, practical, pre-purchase angle. | Candidate |
| `tinyhomeready.com` | 404 | none found | Friendly and broad, but a little softer than the strategy. | Candidate |
| `tinyhomeplacementguide.com` | 404 | none found | Strong for first SEO wedge; narrower than full strategy. | Candidate |
| `tinyhomeplacementcheck.com` | 404 | none found | Good for first tool, clear verification framing; a bit long. | Candidate |
| `tinyhomepermitcheck.com` | 404 | none found | Practical, but too permit-specific and may imply legal certainty. | Candidate |
| `tinyhomeduediligence.com` | 404 | none found | Very aligned with product/workbook angle; long and formal. | Candidate |
| `tinyhomebuyerchecklist.com` | 404 | none found | Clear buyer resource; checklist/product-friendly but long. | Candidate |
| `tinyhomebuyerguide.com` | 404 | none found | Clear and broad; can sound like a generic guide site unless the voice is distinctive. | Candidate |
| `tinyhomefitcheck.com` | 404 | none found | Nice tool-like phrasing; broader than zoning. | Candidate |
| `tinyhomefeasibility.com` | 404 | none found | Accurate but slightly technical. | Candidate |
| `wherecaniputatinyhouse.com` | 404 | none found | Exact-match for first asset, but too narrow and awkward as a brand. | Candidate only for campaign/redirect |
| `tinyhomepath.com` | 200 | `2.57.91.91` | Strong name, appears registered. | Do not use unless acquired |
| `tinyhomeplanner.com` | 200 | `76.223.54.146`, `13.248.169.48` | Strong name, appears registered. | Do not use unless acquired |

## Selected Domain

Selected: `tinyhomeclarity.com`

User confirmed on 2026-07-07: "ok - this is good, lets go for it"

Porkbun status on 2026-07-07:

- Registrar: Porkbun.
- Purchase status: purchased.
- Term: 1 year.
- Cart total observed: `$11.08 USD`.
- Renewal estimate observed: `$11.08`.

Why:

- Conveys decision support without sounding like legal advice, government, security, or sales.
- Broad enough for placement, cost, utilities, financing, builder checks, and future templates/tools.
- Works with the promise: "Make tiny-home decisions with fewer surprises."
- More approachable than `tinyhomeduediligence.com` and less narrow than placement-only names.

Backups:

- `tinyhomecheckup.com`
- `tinyhomeplancheck.com`
- `tinyhomerealitycheck.com`
- `tinyhomeplacementguide.com`

## Next Step

Configure GitHub Pages DNS and custom domain.
