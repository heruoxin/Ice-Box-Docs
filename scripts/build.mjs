#!/usr/bin/env node
// Builds the static site into dist/. Usage: node scripts/build.mjs [--no-strict]
import fs from 'node:fs';
import path from 'node:path';
import QRCode from 'qrcode';
import { SITE, LANGS, LANG } from './lib/config.mjs';
import { ROOT, SRC, DIST, writeFile, readText, copyDir, hash, walk, stripTags, truncate } from './lib/util.mjs';
import { loadDictionaries, loadMarkdownPages, loadTemplatePages, makeT, pagePath, absolute, Registry } from './lib/pages.mjs';
import { renderMarkdown, markdownTwin } from './lib/markdown.mjs';
import { toHantDeep } from './lib/hant.mjs';
import { writeStubs, legacyMap, bulkRedirectsCsv, legacyReport } from './lib/legacy.mjs';
import { twinHeader, homeTwin, llmsTxt, llmsFull, robotsTxt, sitemapXml } from './lib/ai.mjs';
import { lintCopy, lintDict, checkLinks } from './lib/checks.mjs';
import { Icons, faviconSvg, phoneMock } from '../src/templates/components.mjs';
import { renderHome } from '../src/templates/home.mjs';
import { footer } from '../src/templates/layout.mjs';
import { renderDoc } from '../src/templates/doc.mjs';
import { renderSpecial } from '../src/templates/special.mjs';
import { renderComponent, renderComponentMd } from '../src/templates/hubs.mjs';

const strict = !process.argv.includes('--no-strict');
const started = Date.now();
const log = (...a) => console.log(...a);

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

// ---------- Load ----------

const dict = await loadDictionaries();
const llmsText = (await import(path.join(SRC, 'i18n', 'llms.mjs'))).default;
llmsText['zh-hant'] = toHantDeep(llmsText['zh-hans']);
const registry = new Registry([...loadTemplatePages(), ...loadMarkdownPages()]);
const langHints = Object.fromEntries(LANGS.map((l) => [l.code, dict[l.code].langHint]));

// Code-rendered pages (the home page) take the newest date of their language's content.
for (const page of registry.pages.filter((p) => p.kind === 'template')) {
  page.updated = registry.all(page.lang).map((p) => p.updated).filter(Boolean).sort().pop() || null;
}

const changelog = registry.get('zh-hans', 'changelog');
const version = changelog ? (/^#{2,4}\s*v?(\d+\.\d+\.\d+)/m.exec(changelog.body) || [])[1] : undefined;

// ---------- Assets ----------

copyDir(path.join(SRC, 'assets'), path.join(DIST, 'assets'));
fs.rmSync(path.join(DIST, 'assets/img/snowflake.path'), { force: true });
writeFile(path.join(DIST, 'assets/img/icon.svg'), faviconSvg());
const cssHash = hash(readText(path.join(SRC, 'assets/css/site.css')));
const jsHash = hash(readText(path.join(SRC, 'assets/js/site.js')));
const assets = {
  css: `/assets/css/site.css?v=${cssHash}`,
  js: `/assets/js/site.js?v=${jsHash}`,
};

const qrCache = new Map();
for (const { code } of LANGS) {
  const url = registry.url(code, 'download');
  qrCache.set(url, await QRCode.toString(absolute(url), { type: 'svg', margin: 0, errorCorrectionLevel: 'M', color: { dark: '#052a42', light: '#ffffff' } }));
}
const qr = (url) => qrCache.get(url).replace('<svg ', '<svg role="img" aria-label="QR" ');

const slugIndex = new Map(registry.pages.map((p) => [p.slug, p.id]));

// ---------- Context ----------

function makeCtx(lang, page, icons) {
  const t = makeT(dict, lang);
  const ctx = {
    lang,
    t,
    dict,
    registry,
    page,
    icons,
    assets,
    qr,
    version,
    langHints,
    slugIndex,
    resolve: resolver(lang),
    mdPath: pagePath(lang, page.slug) + (page.slug === '' || page.slug.endsWith('/') ? 'index.md' : '.md'),
  };
  ctx.footer = () => footer(ctx);
  return ctx;
}

function resolver(lang) {
  return (href) => {
    if (!href || !href.startsWith('/') || href.startsWith('//')) return href;
    const [p, h] = href.split('#');
    const id = slugIndex.get(p.replace(/^\//, ''));
    if (id === undefined) return href;
    return registry.url(lang, id, h ? `#${h}` : '');
  };
}

// ---------- Render markdown ----------

// FAQ first, hubs last: hubs list other pages' headings and titles.
const mdPages = registry.pages.filter((p) => p.kind === 'md');
const rank = (p) => (p.id === 'faq' ? 0 : p.data.layout === 'hub' ? 2 : 1);
mdPages.sort((a, b) => rank(a) - rank(b));

for (const page of mdPages) {
  const icons = new Icons();
  const ctx = makeCtx(page.lang, page, icons);
  const res = renderMarkdown(page.body, {
    resolve: resolver(page.lang),
    component: (name, arg) => renderComponent(ctx, name, arg),
    alertLabel: (kind) => ctx.t(`alerts.${kind}`),
    copyLabel: ctx.t('common.copy'),
    extractFaq: page.data.faq === true || page.id === 'faq',
    extractSteps: page.data.howto === true,
    siteUrl: SITE.url,
  });
  page.html = res.html;
  page.headings = res.headings;
  page.faq = res.faq;
  page.steps = res.steps;
  page.icons = icons;
}

// ---------- Render HTML ----------

const outputs = [];
const twins = new Map();

for (const page of registry.pages) {
  const icons = page.icons || new Icons();
  const ctx = makeCtx(page.lang, page, icons);
  let html;
  if (page.template === 'home') {
    if (page.lang === 'en') {
      ctx.headScript = `<script>(function(){try{var m={'zh-hans':'/zh-hans/','zh-hant':'/zh-hant/','ja':'/ja/'};var c=localStorage.getItem('icebox-lang');if(c){if(m[c])location.replace(m[c]);return}var l=String((navigator.languages&&navigator.languages[0])||navigator.language||'').toLowerCase();var t=/^zh-(tw|hk|mo)|^zh-hant/.test(l)?m['zh-hant']:/^zh/.test(l)?m['zh-hans']:/^ja/.test(l)?m.ja:'';if(t)location.replace(t)}catch(e){}})()</script>`;
    }
    html = renderHome(ctx);
    twins.set(`${page.lang}:${page.id}`, homeTwin(ctx));
  } else {
    html = renderDoc(ctx, page);
    const body = markdownTwin(page.body, {
      absolute: (href) => absolute(resolver(page.lang)(href)),
      componentMd: (name, arg) => renderComponentMd(ctx, name, arg),
    });
    twins.set(`${page.lang}:${page.id}`, twinHeader(page, page.lang, ctx.t) + body + '\n');
  }
  outputs.push({ page, html });
}

// ---------- Write pages ----------

for (const { page, html } of outputs) {
  const dir = path.join(DIST, LANG[page.lang].path, page.slug);
  writeFile(path.join(dir, 'index.html'), html);
  const twin = twins.get(`${page.lang}:${page.id}`);
  if (twin) writeFile(path.join(dir, 'index.md'), twin);
}

// ---------- Special pages ----------

{
  const icons = new Icons();
  const ctx = makeCtx('en', { id: '404', slug: '404.html', data: {} }, icons);
  const html = renderSpecial(ctx, { legacyMap: legacyMap(registry) });
  writeFile(path.join(DIST, '404.html'), html);
  writeFile(path.join(DIST, 'theme/index.html'), html);
  writeFile(path.join(DIST, 'list/index.html'), html);
}

// Open Graph image sources (rendered to src/assets/img/og-<lang>.png by scripts/og.mjs).
for (const { code } of LANGS) {
  const icons = new Icons();
  const t = makeT(dict, code);
  const phone = phoneMock(icons, { names: t('phone.names'), tabs: t('phone.tabs'), date: t('phone.date'), frozen: ['video', 'game', 'shop', 'news', 'travel', 'camera'], width: '300px' });
  const title = t('home.title').map((l) => `<span>${l}</span>`).join('');
  const html = `<!doctype html><html lang="${LANG[code].htmlLang}" data-lang="${code}"><head><meta charset="utf-8"><meta name="robots" content="noindex"><link rel="stylesheet" href="${assets.css}"><style>
html,body{margin:0;padding:0;width:1200px;height:630px;overflow:hidden;background:#0277bd;color:#fff}
.og{position:relative;width:1200px;height:630px}
.og .brand{position:absolute;left:80px;top:64px;font-size:24px}.og .brand img{width:40px;height:40px}
.og h1{position:absolute;left:80px;top:196px;width:600px;font-size:${code === 'en' ? 72 : code === 'ja' ? 68 : 76}px}
.og .device{position:absolute;right:120px;top:72px;--shadow:0 1px 2px rgba(1,50,86,.24),0 14px 28px -10px rgba(1,50,86,.4),0 44px 88px -30px rgba(1,50,86,.5)}
</style></head><body><div class="og"><span class="brand"><img src="/assets/img/icon-192.png" alt="">${t('meta.brandHtml')}</span><h1>${title}</h1>${phone}</div>${icons.sprite()}</body></html>`;
  writeFile(path.join(DIST, '_og', `${code}.html`), html);
}

const stubCount = writeStubs(DIST, registry);
writeFile(path.join(ROOT, 'redirects/cloudflare-bulk-redirects.csv'), bulkRedirectsCsv(registry));
writeFile(path.join(ROOT, 'redirects/legacy-map.json'), JSON.stringify(legacyReport(registry), null, 2) + '\n');

// ---------- SEO and AI files ----------

writeFile(path.join(DIST, 'robots.txt'), robotsTxt());
writeFile(path.join(DIST, 'sitemap.xml'), sitemapXml(registry));
for (const { code, path: prefix } of LANGS) {
  const dir = path.join(DIST, prefix);
  writeFile(path.join(dir, 'llms.txt'), llmsTxt(code, registry, llmsText[code]));
  writeFile(path.join(dir, 'llms-full.txt'), llmsFull(code, registry, twins));
  const index = [];
  for (const p of registry.all(code)) {
    if (p.kind !== 'md' || p.data.noindex || p.data.section === 'legal') continue;
    const url = registry.url(code, p.id);
    index.push({ t: p.title, u: url, h: (p.headings || []).filter((h) => h.depth <= 3).map((h) => h.text).join(' · '), x: truncate(stripTags(p.html), 900) });
    for (const q of p.faq || []) {
      const h = (p.headings || []).find((x) => x.text === q.q);
      index.push({ t: q.q, u: url + (h ? `#${h.id}` : ''), h: p.title, x: truncate(q.a, 300) });
    }
  }
  writeFile(path.join(dir, 'search-index.json'), JSON.stringify(index));
}
writeFile(
  path.join(DIST, 'manifest.webmanifest'),
  JSON.stringify({ name: 'Ice Box', short_name: 'Ice Box', start_url: '/', display: 'browser', background_color: '#ffffff', theme_color: SITE.themeColor, icons: [{ src: '/assets/img/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/assets/img/icon-512.png', sizes: '512x512', type: 'image/png' }] }, null, 2),
);

copyDir(path.join(ROOT, 'static'), DIST);
writeFile(path.join(DIST, '.nojekyll'), '');

// ---------- Checks ----------

const problems = [];
for (const file of walk(path.join(SRC, 'content'), (f) => f.endsWith('.md'))) problems.push(...lintCopy(path.relative(ROOT, file), readText(file)));
for (const { page } of outputs) if (page.lang === 'zh-hant' && page.kind === 'md') problems.push(...lintCopy(`zh-hant:${page.id}`, page.body));
for (const { code } of LANGS) problems.push(...lintDict(`i18n/${code}`, dict[code]), ...lintDict(`llms/${code}`, llmsText[code]));
problems.push(...checkLinks(DIST));

const count = walk(DIST, (f) => f.endsWith('.html')).length;
log(`Built ${count} HTML files (${outputs.length} pages, ${stubCount} legacy stubs) into ${path.relative(ROOT, DIST)}/ in ${Date.now() - started} ms. Latest app version: ${version || 'unknown'}.`);
if (problems.length) {
  console.error(`\n${problems.length} problem(s):\n` + problems.map((p) => '  - ' + p).join('\n'));
  if (strict) process.exit(1);
}
