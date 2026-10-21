import { LANGS, LANG, SITE } from '../../scripts/lib/config.mjs';
import { pagePath, absolute } from '../../scripts/lib/pages.mjs';
import { esc } from '../../scripts/lib/util.mjs';

const FOOTER_LINKS = ['guide', 'themes', 'changelog', 'about', 'privacy'];

export function pageLabel(ctx, id) {
  const { registry, lang, t } = ctx;
  const page = registry.get(lang, id) || registry.get('en', id);
  if (page?.data?.short) return page.data.short;
  if (page?.kind === 'template') return t(`pages.${id}`);
  return page?.title || id;
}

function langLinks(ctx) {
  const { registry, page, lang } = ctx;
  const alternates = registry.alternates(page);
  return LANGS.map((l) => {
    const target = alternates.find((p) => p.lang === l.code);
    return { ...l, href: target ? pagePath(l.code, target.slug) : pagePath(l.code, ''), current: l.code === lang };
  });
}

function header(ctx, tone) {
  const { t, lang, icons, registry } = ctx;
  const items = langLinks(ctx)
    .map((l) => `<li><a href="${l.href}" hreflang="${l.htmlLang}" lang="${l.htmlLang}" data-lang-switch="${l.code}"${l.current ? ' aria-current="true"' : ''}>${esc(l.label)}</a></li>`)
    .join('');
  return `<header class="masthead" data-masthead data-tone="${tone}">
<div class="wrap head">
<a class="brand" href="${pagePath(lang, '')}"><img src="/assets/img/icon-192.png" width="26" height="26" alt="">${esc(t('meta.brandHtml'))}</a>
<nav class="head-links" aria-label="${esc(t('nav.main'))}">
<a class="pill" href="${registry.url(lang, 'download')}">${esc(t('nav.download'))}</a>
<details class="lang" data-lang>
<summary aria-label="${esc(t('nav.language'))}">${icons.use('globe')}<span>${esc(LANG[lang].label)}</span>${icons.use('chevron-down', 'chev')}</summary>
<ul class="lang-menu">${items}</ul>
</details>
</nav>
</div>
</header>`;
}

export function footer(ctx) {
  const { t, lang, registry } = ctx;
  const links = FOOTER_LINKS.filter((id) => registry.get(lang, id) || registry.get('en', id))
    .map((id) => `<a href="${registry.url(lang, id)}">${esc(pageLabel(ctx, id))}</a>`)
    .join('');
  const langs = langLinks(ctx)
    .map((l) => `<a href="${l.href}" hreflang="${l.htmlLang}" lang="${l.htmlLang}" data-lang-switch="${l.code}"${l.current ? ' aria-current="true"' : ''}>${esc(l.label)}</a>`)
    .join('');
  return `<footer class="foot">
<div class="wrap foot__inner">
<span>${esc(t('footer.copyright', { year: new Date().getFullYear() }))}</span>
<nav aria-label="${esc(t('footer.links'))}">${links}</nav>
<nav class="foot__langs" aria-label="${esc(t('nav.language'))}">${langs}</nav>
</div>
</footer>`;
}

function hreflangLinks(ctx) {
  const { registry, page } = ctx;
  const alts = registry.alternates(page);
  const links = [];
  for (const alt of alts) {
    for (const code of LANG[alt.lang].hreflang) links.push(`<link rel="alternate" hreflang="${code}" href="${absolute(pagePath(alt.lang, alt.slug))}">`);
  }
  const def = alts.find((p) => p.lang === 'en') || alts[0];
  if (def) links.push(`<link rel="alternate" hreflang="x-default" href="${absolute(pagePath(def.lang, def.slug))}">`);
  return links.join('\n');
}

export function layout(ctx, { title, description, body, jsonLd = [], bodyClass = '', noindex = false, mdPath, ogImage, tone = 'white' }) {
  const { lang, t, page, assets } = ctx;
  const l = LANG[lang];
  const canonical = absolute(pagePath(lang, page.slug));
  const image = absolute(ogImage || `/assets/img/og-${lang}.png`);
  const ld = jsonLd.length
    ? `<script type="application/ld+json">${JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : { '@context': 'https://schema.org', '@graph': jsonLd.map(({ '@context': _, ...rest }) => rest) }).replace(/</g, '\\u003c')}</script>`
    : '';
  const ogLocales = LANGS.filter((x) => x.code !== lang).map((x) => `<meta property="og:locale:alternate" content="${x.og}">`).join('');
  const alts = Object.fromEntries(ctx.registry.alternates(page).map((p) => [p.lang, pagePath(p.lang, p.slug)]));
  return `<!doctype html>
<html lang="${l.htmlLang}" class="no-js" data-lang="${lang}" data-copied="${esc(t('common.copied'))}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">'}
${noindex ? '' : hreflangLinks(ctx)}
${mdPath ? `<link rel="alternate" type="text/markdown" href="${mdPath}" title="Markdown">` : ''}
<link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt">
<meta name="theme-color" content="${SITE.themeColor}">
<meta name="application-name" content="${esc(t('meta.siteName'))}">
<meta property="og:type" content="${page.id === 'home' ? 'website' : 'article'}">
<meta property="og:site_name" content="${esc(t('meta.siteName'))}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(t('meta.ogAlt'))}">
<meta property="og:locale" content="${l.og}">${ogLocales}
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/assets/img/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="stylesheet" href="${assets.css}">
${ld}
<script>document.documentElement.classList.replace('no-js','js')</script>
${ctx.headScript || ''}
</head>
<body class="${bodyClass}">
<a class="skip" href="#main">${esc(t('nav.skip'))}</a>
${header(ctx, tone)}
<main id="main">
${body}
</main>
${footer(ctx)}
<div class="lang-hint" data-lang-hint role="region" aria-live="polite" data-alts="${esc(JSON.stringify(alts))}" data-hints="${esc(JSON.stringify(ctx.langHints))}" hidden></div>
${ctx.icons.sprite()}
<script src="${assets.js}" defer></script>
</body>
</html>`;
}

export function breadcrumbs(ctx, trail) {
  const items = trail
    .map((item, i) => (i === trail.length - 1 ? `<li><span aria-current="page">${esc(item.name)}</span></li>` : `<li><a href="${item.href}">${esc(item.name)}</a></li>`))
    .join('');
  return `<nav aria-label="${esc(ctx.t('nav.breadcrumb'))}"><ol class="crumbs">${items}</ol></nav>`;
}

export function breadcrumbLd(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: absolute(item.href) })),
  };
}
