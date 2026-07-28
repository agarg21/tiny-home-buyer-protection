import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE_ORIGIN = "https://tinyhomeclarity.com";

function walkFiles(root, predicate) {
  const files = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...walkFiles(full, predicate));
    else if (predicate(full)) files.push(full);
  }
  return files;
}

function countMatches(text, pattern) {
  return [...text.matchAll(pattern)].length;
}

function firstMatch(text, pattern) {
  return text.match(pattern)?.[1]?.trim() ?? null;
}

function tagAttributes(tag) {
  const attributes = new Map();
  for (const match of tag.matchAll(/([^\s=/>]+)\s*=\s*(["'])(.*?)\2/gs)) {
    attributes.set(match[1].toLowerCase(), match[3].trim());
  }
  return attributes;
}

function tagsNamed(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((match) => match[0]);
}

function htmlPathToUrl(siteDir, file) {
  const relative = path.relative(siteDir, file).split(path.sep).join("/");
  if (relative === "index.html") return `${SITE_ORIGIN}/`;
  if (relative.endsWith("/index.html")) {
    return `${SITE_ORIGIN}/${relative.slice(0, -10)}`;
  }
  return `${SITE_ORIGIN}/${relative}`;
}

function pathnameToFile(siteDir, pathname) {
  const decoded = decodeURIComponent(pathname);
  if (decoded === "/") return path.join(siteDir, "index.html");
  const relative = decoded.replace(/^\/+/, "");
  if (relative.endsWith("/")) return path.join(siteDir, relative, "index.html");
  return path.join(siteDir, relative);
}

function extractIds(html) {
  return [...html.matchAll(/\sid=["']([^"']+)["']/gi)].map((match) => match[1]);
}

function extractHrefs(html) {
  return [...html.matchAll(/\shref=["']([^"']+)["']/gi)].map((match) => match[1]);
}

function extractJsonLd(html, file, errors) {
  const scripts = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const [index, script] of scripts.entries()) {
    try {
      JSON.parse(script[1]);
    } catch (error) {
      errors.push(`${file}: JSON-LD block ${index + 1} is invalid: ${error.message}`);
    }
  }
}

function sitemapUrls(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((match) => match[1]);
}

function validateSitemapXml(xml) {
  const stack = [];
  let root = null;
  let rootClosed = false;
  let cursor = 0;

  while (cursor < xml.length) {
    const start = xml.indexOf("<", cursor);
    const text = start === -1 ? xml.slice(cursor) : xml.slice(cursor, start);
    if (stack.length === 0 && text.trim()) return "non-whitespace text appears outside the root element";
    if (start === -1) break;

    if (xml.startsWith("<!--", start)) {
      const end = xml.indexOf("-->", start + 4);
      if (end === -1) return "unterminated XML comment";
      cursor = end + 3;
      continue;
    }
    if (xml.startsWith("<?", start)) {
      const end = xml.indexOf("?>", start + 2);
      if (end === -1) return "unterminated XML declaration";
      cursor = end + 2;
      continue;
    }
    if (xml.startsWith("<![CDATA[", start)) {
      const end = xml.indexOf("]]>", start + 9);
      if (end === -1) return "unterminated CDATA section";
      cursor = end + 3;
      continue;
    }

    const end = xml.indexOf(">", start + 1);
    if (end === -1) return "unterminated XML tag";
    const tag = xml.slice(start, end + 1);
    if (tag.slice(1).includes("<")) return `malformed XML tag ${tag}`;

    const closing = tag.match(/^<\s*\/\s*([A-Za-z_][\w:.-]*)\s*>$/);
    if (closing) {
      const expected = stack.pop();
      if (expected !== closing[1]) {
        return `closing tag ${closing[1]} does not match ${expected ?? "empty stack"}`;
      }
      if (stack.length === 0) rootClosed = true;
      cursor = end + 1;
      continue;
    }

    const opening = tag.match(/^<\s*([A-Za-z_][\w:.-]*)\b[^>]*>$/);
    if (!opening || /^<!/i.test(tag)) return `unsupported or malformed XML tag ${tag}`;
    const selfClosing = /\/\s*>$/.test(tag);
    if (stack.length === 0) {
      if (rootClosed) return `multiple root elements; found ${opening[1]} after ${root}`;
      if (!root) root = opening[1];
    }
    if (selfClosing) {
      if (stack.length === 0) rootClosed = true;
    } else {
      stack.push(opening[1]);
    }
    cursor = end + 1;
  }

  if (stack.length) return `unclosed XML tag ${stack.at(-1)}`;
  if (!rootClosed) return "sitemap root element is not closed";
  if (!root || root.split(":").at(-1) !== "urlset") return "sitemap root must be <urlset>";
  return null;
}

export function auditSite({ repoDir = process.cwd(), strictWarnings = false } = {}) {
  const siteDir = path.join(repoDir, "site");
  const errors = [];
  const warnings = [];

  for (const required of ["site/.nojekyll", ".github/workflows/deploy-pages.yml", "site/sitemap.xml", "site/robots.txt"]) {
    if (!fs.existsSync(path.join(repoDir, required))) errors.push(`missing required file: ${required}`);
  }

  if (!fs.existsSync(siteDir)) {
    return { errors: ["missing site directory"], warnings, pages: 0, sitemapUrls: 0, ok: false };
  }

  const htmlFiles = walkFiles(siteDir, (file) => file.endsWith(".html")).sort();
  const expectedUrls = new Set(htmlFiles.map((file) => htmlPathToUrl(siteDir, file)));
  const sitemapPath = path.join(siteDir, "sitemap.xml");
  const sitemapXml = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, "utf8") : "";
  const sitemapXmlError = sitemapXml ? validateSitemapXml(sitemapXml) : null;
  if (sitemapXmlError) errors.push(`site/sitemap.xml is not structurally valid: ${sitemapXmlError}`);
  const listedUrls = sitemapXml ? sitemapUrls(sitemapXml) : [];
  const sitemapSet = new Set(listedUrls);

  if (listedUrls.length !== sitemapSet.size) errors.push("sitemap contains duplicate <loc> URLs");
  for (const url of expectedUrls) {
    if (!sitemapSet.has(url)) errors.push(`sitemap is missing HTML page: ${url}`);
  }
  for (const url of sitemapSet) {
    if (!expectedUrls.has(url)) errors.push(`sitemap URL has no checked-in HTML page: ${url}`);
  }

  for (const file of htmlFiles) {
    const relative = path.relative(repoDir, file);
    const html = fs.readFileSync(file, "utf8");
    const renderedMarkup = html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
    const pageUrl = htmlPathToUrl(siteDir, file);

    if (countMatches(renderedMarkup, /<title\b[^>]*>/gi) !== 1) errors.push(`${relative}: expected exactly one <title>`);
    if (!firstMatch(renderedMarkup, /<title\b[^>]*>([\s\S]*?)<\/title>/i)) errors.push(`${relative}: title is empty`);
    if (countMatches(renderedMarkup, /<h1\b[^>]*>/gi) !== 1) errors.push(`${relative}: expected exactly one <h1>`);
    const descriptions = tagsNamed(renderedMarkup, "meta")
      .map(tagAttributes)
      .filter((attributes) => attributes.get("name")?.toLowerCase() === "description");
    if (descriptions.length !== 1 || !descriptions[0].get("content")) {
      errors.push(`${relative}: missing non-empty meta description`);
    }

    const canonicals = tagsNamed(renderedMarkup, "link")
      .map(tagAttributes)
      .filter((attributes) => attributes.get("rel")?.toLowerCase().split(/\s+/).includes("canonical"));
    if (canonicals.length === 0) warnings.push(`${relative}: canonical link is not yet explicit`);
    else if (canonicals.length !== 1) errors.push(`${relative}: expected exactly one canonical link, found ${canonicals.length}`);
    else {
      const canonical = canonicals[0].get("href");
      if (!canonical) errors.push(`${relative}: canonical link is missing href`);
      else if (canonical !== pageUrl) errors.push(`${relative}: canonical ${canonical} does not match ${pageUrl}`);
    }

    const ids = extractIds(renderedMarkup);
    const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
    if (duplicateIds.length) errors.push(`${relative}: duplicate id values: ${[...new Set(duplicateIds)].join(", ")}`);
    const idSet = new Set(ids);

    extractJsonLd(html, relative, errors);

    for (const href of extractHrefs(renderedMarkup)) {
      if (/^(mailto:|tel:|javascript:|data:)/i.test(href)) continue;
      let target;
      try {
        target = new URL(href, pageUrl);
      } catch {
        errors.push(`${relative}: invalid href ${href}`);
        continue;
      }
      if (target.origin !== SITE_ORIGIN) continue;

      const targetFile = pathnameToFile(siteDir, target.pathname);
      if (!fs.existsSync(targetFile)) {
        errors.push(`${relative}: internal href ${href} resolves to missing ${path.relative(repoDir, targetFile)}`);
        continue;
      }

      if (target.hash && targetFile.endsWith(".html")) {
        const targetHtml = targetFile === file ? renderedMarkup : fs.readFileSync(targetFile, "utf8")
          .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
          .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
        const targetIds = targetFile === file ? idSet : new Set(extractIds(targetHtml));
        const fragment = decodeURIComponent(target.hash.slice(1));
        if (!targetIds.has(fragment)) errors.push(`${relative}: href ${href} targets missing fragment #${fragment}`);
      }
    }
  }

  const robotsPath = path.join(siteDir, "robots.txt");
  if (fs.existsSync(robotsPath)) {
    const robots = fs.readFileSync(robotsPath, "utf8");
    if (!/Sitemap:\s*https:\/\/tinyhomeclarity\.com\/sitemap\.xml/i.test(robots)) {
      errors.push("site/robots.txt is missing the canonical sitemap directive");
    }
  }

  return {
    errors,
    warnings,
    pages: htmlFiles.length,
    sitemapUrls: listedUrls.length,
    ok: errors.length === 0 && (!strictWarnings || warnings.length === 0),
  };
}

function printResult(result) {
  for (const error of result.errors) console.error(`ERROR ${error}`);
  for (const warning of result.warnings) console.warn(`WARN ${warning}`);
  console.log(`SEO QA: ${result.pages} HTML pages, ${result.sitemapUrls} sitemap URLs, ${result.errors.length} errors, ${result.warnings.length} warnings`);
}

const isCli = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isCli) {
  const strictWarnings = process.argv.includes("--strict-warnings");
  const result = auditSite({ strictWarnings });
  printResult(result);
  if (!result.ok) process.exitCode = 1;
}
