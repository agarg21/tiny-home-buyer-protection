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

## Recommendation

Primary: `tinyhomeguard.com`

Why:

- Short enough to remember.
- Buyer-protective without claiming to be legal advice.
- Broad enough for placement, cost, utilities, financing, builder checks, and future tools.
- Less vendor-like than names built around "builders," "kits," or "homes for sale."

Backups:

- `tinyhomerealitycheck.com`
- `tinyhomebuyerprotection.com`
- `tinyhomeplacement.com`
- `tinyhomeduediligence.com`

## Next Step

Confirm `tinyhomeguard.com` at a registrar such as Porkbun, Namecheap, Cloudflare Registrar, or GoDaddy. Stop before payment unless the user explicitly confirms purchase.

