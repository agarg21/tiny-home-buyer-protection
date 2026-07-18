import assert from "node:assert/strict";
import test from "node:test";
import { base64url, finalizedThroughFromProbe, normalizeAggregate, normalizePageRows, performanceWindow, publicPageRows, renderMarkdown, sitemapCounts, sitemapStatus, summarizeInspection, validatePublicSnapshot } from "./gsc-snapshot.mjs";

test("builds a stable finalized 28-day window ending two days ago", () => {
  assert.deepEqual(performanceWindow(new Date("2026-07-14T12:00:00Z")), {
    startDate: "2026-06-15",
    endDate: "2026-07-12",
  });
});

test("normalizes public page rows without query data", () => {
  assert.deepEqual(
    normalizePageRows([
      { keys: ["https://tinyhomeclarity.com/example/"], clicks: 2, impressions: 25, ctr: 0.08, position: 12.345 },
    ]),
    [
      {
        url: "https://tinyhomeclarity.com/example/",
        clicks: 2,
        impressions: 25,
        ctr_percent: 8,
        average_position: 12.35,
      },
    ],
  );
});

test("publishes page rows only for checked-in URLs", () => {
  assert.deepEqual(
    publicPageRows(
      [
        { keys: ["https://tinyhomeclarity.com/"], impressions: 4 },
        { keys: ["https://tinyhomeclarity.com/legacy-preview/"], impressions: 9 },
      ],
      new Set(["https://tinyhomeclarity.com/"]),
    ),
    [{ url: "https://tinyhomeclarity.com/", clicks: 0, impressions: 4, ctr_percent: 0, average_position: 0 }],
  );
});

test("summarizes indexed URL Inspection evidence", () => {
  assert.deepEqual(
    summarizeInspection("https://tinyhomeclarity.com/example/", {
      inspectionResult: {
        indexStatusResult: {
          verdict: "PASS",
          coverageState: "Submitted and indexed",
          indexingState: "INDEXING_ALLOWED",
          pageFetchState: "SUCCESSFUL",
          robotsTxtState: "ALLOWED",
        },
      },
    }),
    {
      url: "https://tinyhomeclarity.com/example/",
      indexed: true,
      verdict: "PASS",
      coverage_state: "Submitted and indexed",
      indexing_state: "INDEXING_ALLOWED",
      page_fetch_state: "SUCCESSFUL",
      robots_txt_state: "ALLOWED",
      last_crawl_time: null,
    },
  );
});

test("omits API-supplied sitemap URLs from public inspection rows", () => {
  const summary = summarizeInspection("https://tinyhomeclarity.com/example/", {
    inspectionResult: {
      indexStatusResult: {
        verdict: "PASS",
        sitemap: ["https://tinyhomeclarity.com/private-feed.xml?token=secret"],
      },
    },
  });
  assert.equal(Object.hasOwn(summary, "sitemaps"), false);
});

test("uses unknown metrics rather than impossible zero position when GSC has no aggregate row", () => {
  assert.deepEqual(normalizeAggregate(), {
    latest_known_impressions: 0,
    latest_known_clicks: 0,
    latest_known_ctr_percent: null,
    latest_known_average_position: null,
  });
});

test("renders zero-data metrics as UNKNOWN without a percent sign", () => {
  const markdown = renderMarkdown({
    collected_at: "2026-07-14T10:00:00Z",
    data_through: "2026-07-12",
    collection_mode: "test",
    gsc: {
      sitemap_status: "Success",
      discovered_pages: 22,
      sitemap_last_read: null,
      performance: {
        latest_known_impressions: 0,
        latest_known_clicks: 0,
        latest_known_ctr_percent: null,
        latest_known_average_position: null,
        page_rows: [],
      },
      priority_inspection: { indexed: 0, inspected: 0, unknown: 0 },
    },
  });
  assert.match(markdown, /0 impressions, 0 clicks, UNKNOWN CTR, average position UNKNOWN/);
  assert.doesNotMatch(markdown, /null%|average position null/);
});

test("base64url emits URL-safe unpadded text", () => {
  assert.equal(base64url("test?"), "dGVzdD8");
});

test("public snapshot validation rejects credential-shaped fields", () => {
  const snapshot = {
    schema_version: 1,
    site: "tiny-home-clarity",
    property: "sc-domain:tinyhomeclarity.com",
    visibility: "public-summary",
    collection_mode: "test",
    collected_at: "2026-07-14T10:00:00Z",
    data_through: "2026-07-12",
    access_token: "must-not-ship",
    gsc: { performance: { page_rows: [] }, priority_inspection: { urls: [], unknown_urls: [], indexing_requested: false } },
  };
  assert.throws(
    () => validatePublicSnapshot(snapshot, new Set(["https://tinyhomeclarity.com/example/"])),
    /forbidden field: access_token/,
  );
});

test("derives the finalized cutoff from GSC incomplete-data metadata", () => {
  assert.deepEqual(
    finalizedThroughFromProbe({ metadata: { first_incomplete_date: "2026-07-14" } }, "2026-07-12"),
    { date: "2026-07-13", basis: "gsc-first-incomplete-date" },
  );
});

test("public snapshot validation rejects same-origin URLs outside the checked-in allowlist", () => {
  const snapshot = {
    schema_version: 1,
    site: "tiny-home-clarity",
    property: "sc-domain:tinyhomeclarity.com",
    visibility: "public-summary",
    collection_mode: "test",
    collected_at: "2026-07-14T10:00:00Z",
    data_through: "2026-07-12",
    gsc: {
      performance: { page_rows: [{ url: "https://tinyhomeclarity.com/private-preview?token=oops" }] },
      priority_inspection: { urls: [], unknown_urls: [], indexing_requested: false },
    },
  };
  assert.throws(
    () => validatePublicSnapshot(snapshot, new Set(["https://tinyhomeclarity.com/"])),
    /outside the checked-in allowlist/,
  );
});

test("public snapshot validation rejects an unallowlisted not-indexed URL", () => {
  const snapshot = {
    schema_version: 1,
    site: "tiny-home-clarity",
    property: "sc-domain:tinyhomeclarity.com",
    visibility: "public-summary",
    collection_mode: "test",
    collected_at: "2026-07-17T10:00:00Z",
    data_through: "2026-07-15",
    gsc: {
      performance: { page_rows: [] },
      priority_inspection: {
        urls: [],
        not_indexed_urls: ["https://tinyhomeclarity.com/private-preview/"],
        unknown_urls: [],
        indexing_requested: false,
      },
    },
  };
  assert.throws(
    () => validatePublicSnapshot(snapshot, new Set(["https://tinyhomeclarity.com/"])),
    /outside the checked-in allowlist/,
  );
});

test("sitemap summary counts only web URLs and reports API warnings", () => {
  assert.deepEqual(
    sitemapCounts({
      contents: [
        { type: "web", submitted: "22" },
        { type: "image", submitted: "40" },
        { type: "video", submitted: "3" },
      ],
    }),
    { discovered_pages: 22, discovered_videos: 3 },
  );
  assert.equal(sitemapStatus({ warnings: "2", errors: "0", isPending: false }), "Warning");
  assert.equal(sitemapStatus({ warnings: "2", errors: "1", isPending: false }), "Error");
});
