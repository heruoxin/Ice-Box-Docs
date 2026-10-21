import { esc } from '../../scripts/lib/util.mjs';
import { pagePath } from '../../scripts/lib/pages.mjs';
import { layout, breadcrumbs, breadcrumbLd, pageLabel } from './layout.mjs';
import { articleLd, faqLd, howToLd, appLd, organizationLd } from './ld.mjs';

function parentOf(ctx, page) {
  const parts = page.id.split('/');
  if (parts.length < 2) return null;
  const parentId = parts.slice(0, -1).join('/');
  return ctx.registry.get(ctx.lang, parentId) || ctx.registry.get('en', parentId) ? parentId : null;
}

export function trailFor(ctx, page) {
  const { t, lang, registry } = ctx;
  const trail = [{ name: t('nav.home'), href: pagePath(lang, '') }];
  const parent = parentOf(ctx, page);
  if (parent) trail.push({ name: pageLabel(ctx, parent), href: registry.url(lang, parent) });
  trail.push({ name: page.data.short || page.title, href: pagePath(lang, page.slug) });
  return trail;
}

function related(ctx, page) {
  const { t, lang, registry } = ctx;
  const items = String(page.data.related || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((id) => registry.get(lang, id) || registry.get('en', id))
    .filter(Boolean)
    .map((p) => `<li><a href="${registry.url(lang, p.id)}">${esc(p.data.short || p.title)}</a></li>`)
    .join('');
  return items ? `<nav class="related" aria-label="${esc(t('common.related'))}"><p>${esc(t('common.related'))}</p><ul>${items}</ul></nav>` : '';
}

function toc(ctx, headings) {
  const h2 = headings.filter((h) => h.depth === 2);
  if (h2.length < 3 || ctx.page.data.toc === false) return '<aside class="toc"></aside>';
  return `<aside class="toc" aria-label="${esc(ctx.t('common.onThisPage'))}" data-toc><p>${esc(ctx.t('common.onThisPage'))}</p><ol>${h2.map((h) => `<li><a href="#${esc(h.id)}">${esc(h.text)}</a></li>`).join('')}</ol></aside>`;
}

export function renderDoc(ctx, page) {
  const { t, lang, icons, registry } = ctx;
  const hub = page.data.layout === 'hub';
  const trail = trailFor(ctx, page);
  const showDate = !hub && page.data.section !== 'legal';
  const search = page.data.search
    ? `<div class="search" data-search data-index="${pagePath(lang, 'search-index.json')}" data-empty="${esc(t('search.empty'))}">${icons.use('search')}<input type="search" placeholder="${esc(t('search.placeholder'))}" aria-label="${esc(t('search.placeholder'))}" autocomplete="off" data-search-input><ul class="search__results" data-search-results hidden></ul></div>`
    : '';
  const head = `<div class="wrap doc-head">
${breadcrumbs(ctx, trail)}
<h1>${esc(page.title)}</h1>
${page.data.lead !== false ? `<p class="lead">${esc(page.data.lead || page.description)}</p>` : ''}
${showDate ? `<p class="doc-meta">${esc(t('common.updated', { date: page.updated }))}</p>` : ''}
${search}
</div>`;
  const foot = hub ? '' : `<p class="doc-foot">${esc(t('common.stillStuckPre'))}<a href="${registry.url(lang, 'faq')}">${esc(pageLabel(ctx, 'faq'))}</a>${esc(t('common.stillStuckPost'))}</p>`;
  const main = hub
    ? `<div class="wrap doc doc--wide"><div class="hub">${page.html}</div></div>`
    : `<div class="wrap doc"><article class="prose">${page.html}${related(ctx, page)}${foot}</article>${toc(ctx, page.headings)}</div>`;
  const jsonLd = [breadcrumbLd(trail)];
  if (!hub && page.data.section !== 'legal') jsonLd.push(articleLd(ctx, page));
  if (page.faq?.length) jsonLd.push(faqLd(page.faq));
  if (page.steps?.length && page.data.howto) jsonLd.push(howToLd(ctx, page, page.steps));
  if (page.id === 'download' || page.id === 'about') jsonLd.push(organizationLd(), appLd(ctx));
  return layout(ctx, {
    title: page.data.seoTitle || `${page.title}${t('meta.titleSep')}${t('meta.siteName')}`,
    description: page.description,
    body: head + main,
    bodyClass: `page-doc${hub ? ' page-hub' : ''} page-${page.id.replace(/\//g, '-')}`,
    jsonLd: jsonLd.filter(Boolean),
    noindex: !!page.data.noindex,
    mdPath: ctx.mdPath,
  });
}
