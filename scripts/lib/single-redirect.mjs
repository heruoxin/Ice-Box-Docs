import { LEGACY_PAGES, SITE } from './config.mjs';

// Expression for the Cloudflare Single Redirect fallback rule. Single Redirects run before Bulk Redirects,
// so the paths that have an exact Bulk Redirect entry must be left out here.
export function singleRedirectExpression() {
  const exact = LEGACY_PAGES.filter((p) => p.bulk).map((p) => `"${encodeURI('/' + p.path)}"`).join(' ');
  return `(http.host eq "${SITE.legacyHost}" and not http.request.uri.path in {${exact}})`;
}
