import path from 'node:path';
import { LEGACY_PAGES, LEGACY_FILES, SITE } from './config.mjs';
import { writeFile, esc } from './util.mjs';

// Old decoded path -> new site path.
export function legacyMap(registry) {
  const map = {};
  for (const item of LEGACY_PAGES) {
    if (!registry.get(item.lang, item.page)) console.warn(`  ! legacy target ${item.lang}:${item.page} missing, falling back (for "${item.path}")`);
    map[item.path.normalize('NFC')] = registry.url(item.lang, item.page);
  }
  return map;
}

function stub(target) {
  const url = SITE.url + target;
  return `<!doctype html>
<html lang="zh-Hans">
<head>
<meta charset="utf-8">
<title>Ice Box</title>
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="${esc(url)}">
<meta http-equiv="refresh" content="0; url=${esc(target)}">
<script>location.replace(${JSON.stringify(target)} + location.hash)</script>
</head>
<body>
<p><a href="${esc(target)}">${esc(url)}</a></p>
</body>
</html>
`;
}

// Redirect stubs at the old paths, for requests that reach the new host with an old path.
export function writeStubs(dist, registry) {
  const map = legacyMap(registry);
  let count = 0;
  for (const item of LEGACY_PAGES) {
    if (item.noStub) continue;
    writeFile(path.join(dist, `${item.path.normalize('NFC')}.html`), stub(map[item.path.normalize('NFC')]));
    count++;
  }
  return count;
}

// Browsers send non-ASCII and spaces percent-encoded and keep ASCII parentheses as they are.
const encodePath = (p) => encodeURI(p);

// Cloudflare Bulk Redirects list (CSV import): one exact 301 per important old URL, within the
// Free plan's 20 entries. Everything else is covered by the Single Redirect rule in redirects/README.md.
export const BULK_LIMIT = 20;
export function bulkRedirectsCsv(registry) {
  const map = legacyMap(registry);
  const items = LEGACY_PAGES.filter((item) => item.bulk);
  if (items.length > BULK_LIMIT) throw new Error(`Bulk redirect list has ${items.length} entries, the Cloudflare Free plan allows ${BULK_LIMIT}`);
  const rows = [['source_url', 'target_url', 'status_code', 'preserve_query_string', 'include_subdomains', 'subpath_matching', 'preserve_path_suffix']];
  for (const item of items) {
    rows.push([`${SITE.legacyHost}${encodePath('/' + item.path)}`, SITE.url + map[item.path.normalize('NFC')], '301', 'FALSE', 'FALSE', 'FALSE', 'FALSE']);
  }
  return rows.map((r) => r.map((c) => (/[",]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c)).join(',')).join('\n') + '\n';
}

export function legacyReport(registry) {
  const map = legacyMap(registry);
  return {
    host: SITE.legacyHost,
    target: SITE.url,
    pages: LEGACY_PAGES.map((item) => ({
      old: `https://${SITE.legacyHost}${encodePath('/' + item.path)}`,
      oldDecoded: `/${item.path}`,
      new: SITE.url + map[item.path.normalize('NFC')],
    })),
    files: LEGACY_FILES.map((f) => ({ old: `https://${SITE.legacyHost}${encodePath('/' + f)}`, new: `${SITE.url}${encodePath('/' + f)}` })),
  };
}
