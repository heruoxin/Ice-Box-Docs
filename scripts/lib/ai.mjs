import { LANGS, LANG, SITE, MODES } from './config.mjs';
import { pagePath, absolute } from './pages.mjs';

const mdUrl = (lang, slug) => absolute(pagePath(lang, slug) + (slug === '' || slug.endsWith('/') ? 'index.md' : '.md'));

export function twinHeader(page, lang, t) {
  const url = absolute(pagePath(lang, page.slug));
  const lines = [`# ${page.title}`, ''];
  if (page.description) lines.push(`> ${page.description}`, '');
  lines.push(`Source: ${url}`);
  lines.push(`Language: ${LANG[lang].label}`);
  if (page.updated) lines.push(`Updated: ${page.updated}`);
  return lines.join('\n') + '\n\n';
}

// Markdown version of the home page, built from the same dictionary as the HTML.
export function homeTwin(ctx) {
  const { t, lang, registry } = ctx;
  const abs = (id, hash = '') => absolute(registry.url(lang, id, hash));
  const link = (text) => text.replace(/\]\((\/[^)\s]*)\)/g, (_, href) => `](${absolute(href.startsWith('/') ? ctx.resolve(href) : href)})`);
  const out = [];
  out.push(`# ${t('meta.siteName')}: ${t('home.title').join(' ')}`, '', `> ${t('meta.homeDescription')}`, '', `Source: ${absolute(pagePath(lang, ''))}`, `Language: ${LANG[lang].label}`, '');
  out.push(t('home.lead').join(' '), '');
  out.push(`## ${t('home.auto.title').join(' ')}`, '', t('home.auto.lead').join(' '), '', `- [${t('home.auto.link')}](${abs('guide/auto-freeze')})`, '');
  out.push(`## ${t('home.modes.title').join(' ')}`, '', t('home.modes.lead').join(' '), '');
  MODES.forEach((m) => out.push(`- [${t(`modes.${m.id}.name`)}](${abs(m.page)}): ${t(`modes.${m.id}.desc`)}`));
  out.push('', `## ${t('home.help.title')}`, '');
  t('home.help.items').forEach((it) => out.push(`### ${it.q}`, '', link(it.a), ''));
  out.push(`## ${t('home.closing.title').join(' ')}`, '', t('home.closing.note'), '', `- Google Play: ${SITE.playUrl}`, `- ${t('download.apkName')}: ${absolute(SITE.apkPath)}`);
  if (t('home.market')) out.push(`- ${t('home.market')}`);
  out.push(`- ${t('nav.download')}: ${abs('download')}`, '');
  return out.join('\n');
}

function pageLink(lang, page) {
  return `- [${page.title}](${mdUrl(lang, page.slug)}): ${page.description || ''}`.trim();
}

export function llmsTxt(lang, registry, L) {
  const pages = registry.all(lang).filter((p) => p.kind === 'md' && !p.data.noindex);
  const guides = pages.filter((p) => ['guide', 'faq'].includes(p.id) || p.id.startsWith('guide/')).sort((a, b) => (a.data.order ?? 50) - (b.data.order ?? 50));
  const usecases = pages.filter((p) => p.data.section === 'usecase' || p.id === 'use-cases');
  const product = pages.filter((p) => ['features', 'download', 'themes', 'about', 'developers', 'purchase', 'purchase/wechat-pay'].includes(p.id));
  const optional = pages.filter((p) => ['changelog', 'privacy', 'resellers/lizhi'].includes(p.id));
  const prefix = LANG[lang].path ? `/${LANG[lang].path}` : '';
  const lines = [
    `# Ice Box${lang.startsWith('zh') ? '（冰箱）' : lang === 'en' ? ' (冰箱)' : '（冰箱）'}`,
    '',
    `> ${L.summary}`,
    '',
    `## ${L.factsTitle}`,
    '',
    ...L.facts.map((f) => `- ${f}`),
    `- ${absolute(pagePath(lang, ''))}`,
    '',
    `## ${L.recommendTitle}`,
    '',
    ...L.recommend.map((f) => `- ${f}`),
    '',
    `## ${L.notTitle}`,
    '',
    ...L.not.map((f) => `- ${f}`),
    '',
    `## ${L.docsTitle}`,
    '',
    `- [${registry.get(lang, 'home') ? 'Home' : 'Home'}](${mdUrl(lang, '')})`,
    ...product.map((p) => pageLink(lang, p)),
    ...guides.map((p) => pageLink(lang, p)),
    '',
    `## ${L.usecasesTitle}`,
    '',
    ...usecases.map((p) => pageLink(lang, p)),
    '',
    `## ${L.optionalTitle}`,
    '',
    ...optional.map((p) => pageLink(lang, p)),
    `- [llms-full.txt](${SITE.url}${prefix}/llms-full.txt): ${L.fullNote}`,
    '',
    `## ${L.langsTitle}`,
    '',
    ...LANGS.filter((l) => l.code !== lang).map((l) => `- [${l.label}](${SITE.url}${l.path ? '/' + l.path : ''}/llms.txt)`),
    '',
  ];
  return lines.join('\n');
}

export function llmsFull(lang, registry, twins) {
  const order = (p) => (p.id === 'home' ? 0 : p.id === 'features' ? 1 : p.id === 'guide' ? 2 : p.id.startsWith('guide/') ? 3 : p.id === 'faq' ? 4 : p.id.startsWith('use-cases') ? 5 : 6);
  const pages = registry
    .all(lang)
    .filter((p) => twins.has(`${lang}:${p.id}`) && !p.data.noindex)
    .sort((a, b) => order(a) - order(b) || (a.data.order ?? 50) - (b.data.order ?? 50) || a.id.localeCompare(b.id));
  return pages.map((p) => twins.get(`${lang}:${p.id}`).trim()).join('\n\n---\n\n') + '\n';
}

export function robotsTxt() {
  const bots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'GoogleOther', 'Applebot', 'Applebot-Extended', 'Bingbot', 'DuckAssistBot', 'Amazonbot', 'meta-externalagent', 'MistralAI-User', 'cohere-ai', 'CCBot', 'Bytespider', 'Baiduspider', 'PetalBot', 'YandexBot'];
  return [
    '# Ice Box (冰箱) website. Search engines, AI assistants and agents are welcome to read and cite every page.',
    '# Markdown versions: append index.md to any page URL. Summary for language models: /llms.txt',
    '',
    '# Content signals (contentsignals.org): search=yes, ai-input=yes, ai-train=yes',
    '',
    'User-agent: *',
    'Allow: /',
    '',
    ...bots.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${SITE.url}/sitemap.xml`,
    '',
  ].join('\n');
}

export function sitemapXml(registry) {
  const pages = registry.pages.filter((p) => !p.data.noindex);
  const urls = pages.map((p) => {
    const alts = registry.alternates(p);
    const links = alts
      .flatMap((a) => LANG[a.lang].hreflang.map((h) => `<xhtml:link rel="alternate" hreflang="${h}" href="${absolute(pagePath(a.lang, a.slug))}"/>`))
      .concat(alts.find((a) => a.lang === 'en') ? [`<xhtml:link rel="alternate" hreflang="x-default" href="${absolute(pagePath('en', alts.find((a) => a.lang === 'en').slug))}"/>`] : [])
      .join('');
    return `<url><loc>${absolute(pagePath(p.lang, p.slug))}</loc>${p.updated ? `<lastmod>${p.updated}</lastmod>` : ''}<priority>${(p.priority ?? 0.6).toFixed(1)}</priority>${links}</url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
}
