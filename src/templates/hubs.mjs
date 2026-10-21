import { SITE, MODES, THEMES } from '../../scripts/lib/config.mjs';
import { absolute } from '../../scripts/lib/pages.mjs';
import { esc } from '../../scripts/lib/util.mjs';
import { phoneMock, parseTheme } from './components.mjs';

const THEME_BASE = 'https://icebox.catchingnow.com/theme/';

// Interactive "which mode should I use" card.
export function chooser(ctx) {
  const { t, lang, registry, icons } = ctx;
  const data = Object.fromEntries(
    MODES.map((m) => [m.id, { name: t(`modes.${m.id}.name`), href: registry.url(lang, m.page) }]),
  );
  const seg = (key, options, selected) =>
    `<div class="chooser__q" data-q="${key}"${key === 'android' ? ' hidden' : ''}><span class="chooser__label" id="cq-${key}">${esc(t(`finder.${key}.q`))}</span><span class="seg" role="group" aria-labelledby="cq-${key}">${options
      .map((o) => `<button type="button" data-v="${o}" aria-pressed="${o === selected}">${esc(t(`finder.${key}.${o}`))}</button>`)
      .join('')}</span></div>`;
  const first = data.deviceOwner;
  return `<div class="chooser" data-chooser data-modes="${esc(JSON.stringify(data))}">
${seg('root', ['yes', 'no'], 'no')}
${seg('pc', ['yes', 'no'], 'yes')}
${seg('android', ['new', 'old'], 'new')}
<div class="chooser__result" aria-live="polite"><div class="chooser__swap" data-swap>
<p class="chooser__kicker">${esc(t('finder.result'))}</p>
<p class="chooser__name" data-name>${esc(first.name)}</p>
</div>
<a class="btn btn--blue" data-href href="${first.href}">${esc(t('common.viewGuide'))}${icons.use('arrow-right')}</a>
</div>
</div>`;
}

const components = {
  'mode-finder'(ctx) {
    return chooser(ctx);
  },
  'mode-cards'(ctx) {
    const { t, lang, registry } = ctx;
    return `<ul class="cases">${MODES.map((m) => `<li><a href="${registry.url(lang, m.page)}"><strong>${esc(t(`modes.${m.id}.name`))}</strong><span>${esc(t(`modes.${m.id}.desc`))}</span></a></li>`).join('')}</ul>`;
  },
  'mode-table'(ctx) {
    const { t, lang, registry, icons } = ctx;
    const yn = (ok) => icons.use(ok ? 'check' : 'cross', `yn ${ok ? 'yn--yes' : 'yn--no'}`, t(ok ? 'modeTable.yes' : 'modeTable.no'));
    const rows = MODES.map(
      (m) => `<tr><th scope="row"><a href="${registry.url(lang, m.page)}">${esc(t(`modes.${m.id}.name`))}</a></th><td>${yn(!m.root)}</td><td>${yn(!m.computer)}</td><td>${yn(m.reboot)}</td><td>${esc(m.android)}+</td><td>${esc(t(`modes.${m.id}.note`))}</td></tr>`,
    ).join('');
    return `<div class="compare table-wrap"><table><thead><tr><th scope="col">${esc(t('modeTable.mode'))}</th><th scope="col">${esc(t('modeTable.root'))}</th><th scope="col">${esc(t('modeTable.pc'))}</th><th scope="col">${esc(t('modeTable.reboot'))}</th><th scope="col">${esc(t('modeTable.android'))}</th><th scope="col">${esc(t('modeTable.note'))}</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  },
  'guide-groups'(ctx) {
    const { t, lang, registry, icons } = ctx;
    const cols = Object.entries(t('guideGroups'))
      .map(([key, label]) => {
        const pages = registry.all(lang).filter((p) => p.data.group === key).sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
        if (!pages.length) return '';
        return `<section id="${esc(key)}"><h3>${esc(label)}</h3><ul>${pages.map((p) => `<li><a href="${registry.url(lang, p.id)}"><span>${esc(p.data.short || p.title)}</span>${icons.use('chevron-right')}</a></li>`).join('')}</ul></section>`;
      })
      .join('');
    return `<div class="groups">${cols}</div>`;
  },
  'faq-teaser'(ctx, arg) {
    const { lang, registry, icons } = ctx;
    const faq = registry.get(lang, 'faq');
    if (!faq?.headings) return '';
    const items = faq.headings.filter((h) => h.depth === 3).slice(0, Number(arg) || 8);
    return `<ul class="links2">${items.map((h) => `<li><a href="${registry.url(lang, 'faq', '#' + h.id)}"><span>${esc(h.text)}</span>${icons.use('chevron-right')}</a></li>`).join('')}</ul>`;
  },
  'usecase-cards'(ctx) {
    const { lang, registry } = ctx;
    const items = registry
      .all(lang)
      .filter((p) => p.data.section === 'usecase' && p.id !== 'use-cases')
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
      .map((p) => `<li><a href="${registry.url(lang, p.id)}"><strong>${esc(p.data.short || p.title)}</strong><span>${esc(p.data.card || p.description)}</span></a></li>`)
      .join('');
    return `<ul class="cases">${items}</ul>`;
  },
  'theme-gallery'(ctx) {
    const { t, icons } = ctx;
    const cards = THEMES.map((th) => {
      const theme = parseTheme(th.code);
      const url = THEME_BASE + th.code;
      return `<article class="theme" id="theme-${th.id}">${phoneMock(icons, { names: t('phone.names'), tabs: t('phone.tabs'), date: '', theme, frozen: ['video', 'game', 'news', 'shop'] })}<h3>${esc(t(`themes.${th.id}`))}</h3><div class="btn-row"><a class="btn btn--blue" href="${url}">${esc(t('themes.import'))}</a><button class="btn btn--soft" type="button" data-copy-text="${esc(url)}">${esc(t('common.copyLink'))}</button></div></article>`;
    }).join('');
    return `<div class="themes">${cards}</div>`;
  },
  'download-buttons'(ctx) {
    const { t, icons } = ctx;
    return `<div class="dl"><a class="btn btn--blue" href="${SITE.playUrl}" rel="noopener">${icons.use('store')}Google Play</a><a class="btn btn--soft" href="${SITE.apkPath}" download>${icons.use('android')}${esc(t('download.apkName'))}</a><a class="btn btn--soft" href="${SITE.coolapkUrl}" rel="noopener">${icons.use('storefront')}${esc(t('download.coolapkName'))}</a></div>`;
  },
  'download-block'(ctx) {
    return components['download-buttons'](ctx);
  },
  'activator-download'(ctx) {
    const { t, icons } = ctx;
    return `<div class="dl"><a class="btn btn--blue" href="${esc(SITE.activatorPath)}" download>${icons.use('download')}${esc(t('download.activator'))}</a><a class="btn btn--soft" href="${SITE.webActivatorUrl}" rel="noopener">${icons.use('globe')}${esc(t('download.webActivator'))}</a></div>`;
  },
  version(ctx) {
    return `<p class="version-big">${esc(ctx.version || '')}</p>`;
  },
};

const componentsMd = {
  'mode-cards'(ctx) {
    const { t, lang, registry } = ctx;
    return MODES.map((m) => `- [${t(`modes.${m.id}.name`)}](${absolute(registry.url(lang, m.page))}): ${t(`modes.${m.id}.desc`)}`).join('\n');
  },
  'mode-table'(ctx) {
    const { t } = ctx;
    const head = `| ${t('modeTable.mode')} | ${t('modeTable.root')} | ${t('modeTable.pc')} | ${t('modeTable.reboot')} | ${t('modeTable.android')} | ${t('modeTable.note')} |\n|---|---|---|---|---|---|`;
    const yn = (ok) => t(ok ? 'modeTable.yes' : 'modeTable.no');
    const rows = MODES.map((m) => `| ${t(`modes.${m.id}.name`)} | ${yn(!m.root)} | ${yn(!m.computer)} | ${yn(m.reboot)} | ${m.android}+ | ${t(`modes.${m.id}.note`)} |`);
    return [head, ...rows].join('\n');
  },
  'mode-finder'(ctx) {
    return componentsMd['mode-cards'](ctx);
  },
  'guide-groups'(ctx) {
    const { t, lang, registry } = ctx;
    return Object.entries(t('guideGroups'))
      .map(([key, label]) => {
        const pages = registry.all(lang).filter((p) => p.data.group === key).sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
        if (!pages.length) return '';
        return `## ${label}\n\n` + pages.map((p) => `- [${p.title}](${absolute(registry.url(lang, p.id))}): ${p.description}`).join('\n');
      })
      .filter(Boolean)
      .join('\n\n');
  },
  'faq-teaser'(ctx, arg) {
    const { lang, registry } = ctx;
    const faq = registry.get(lang, 'faq');
    if (!faq?.headings) return '';
    return faq.headings.filter((h) => h.depth === 3).slice(0, Number(arg) || 8).map((h) => `- [${h.text}](${absolute(registry.url(lang, 'faq', '#' + h.id))})`).join('\n');
  },
  'usecase-cards'(ctx) {
    const { lang, registry } = ctx;
    return registry.all(lang).filter((p) => p.data.section === 'usecase').sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99)).map((p) => `- [${p.title}](${absolute(registry.url(lang, p.id))}): ${p.description}`).join('\n');
  },
  'theme-gallery'(ctx) {
    const { t } = ctx;
    return THEMES.map((th) => `- ${t(`themes.${th.id}`)}: ${THEME_BASE}${th.code}`).join('\n');
  },
  'download-buttons'(ctx) {
    const { t } = ctx;
    return `- Google Play: ${SITE.playUrl}\n- ${t('download.apkName')}: ${absolute(SITE.apkPath)}\n- ${t('download.coolapkName')}: ${SITE.coolapkUrl}`;
  },
  'download-block'(ctx) {
    return componentsMd['download-buttons'](ctx);
  },
  'activator-download'(ctx) {
    const { t } = ctx;
    return `- ${t('download.activator')}: ${absolute(encodeURI(SITE.activatorPath))}\n- ${t('download.webActivator')}: ${SITE.webActivatorUrl}`;
  },
  version(ctx) {
    return ctx.version || '';
  },
};

export function renderComponent(ctx, name, arg) {
  if (!components[name]) throw new Error(`Unknown shortcode [[${name}]]`);
  return components[name](ctx, arg);
}

export function renderComponentMd(ctx, name, arg) {
  if (!componentsMd[name]) throw new Error(`Unknown shortcode [[${name}]]`);
  return componentsMd[name](ctx, arg);
}
