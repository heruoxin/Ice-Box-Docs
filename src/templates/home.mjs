import { SITE, MODES } from '../../scripts/lib/config.mjs';
import { esc } from '../../scripts/lib/util.mjs';
import { phoneMock } from './components.mjs';
import { layout } from './layout.mjs';
import { appLd, websiteLd, organizationLd } from './ld.mjs';

const lines = (arr) => arr.map((l) => `<span>${esc(l)}</span>`).join(' ');

// "[text](/path/)" inside dictionary strings becomes a localized link.
function richText(ctx, text) {
  return esc(text).replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, (_, label, href) => {
    const [p, hash] = href.split('#');
    const id = ctx.slugIndex.get(p.replace(/^\//, ''));
    const url = id === undefined ? href : ctx.registry.url(ctx.lang, id, hash ? `#${hash}` : '');
    return `<a href="${url}">${label}</a>`;
  });
}

function phone(ctx, mode, frozen) {
  const { t, icons } = ctx;
  return phoneMock(icons, {
    mode,
    names: t('phone.names'),
    tabs: t('phone.tabs'),
    date: t('phone.date'),
    frozen,
    labels: { fab: t('phone.toastFrozen'), power: t('phone.power'), back: t('phone.back') },
  });
}

// Google Play and the APK, nothing else: the download page covers the other channels.
function storeButtons(ctx) {
  const { t, icons } = ctx;
  const market = t('home.market');
  return `<div class="btn-row"><a class="btn btn--white" href="${SITE.playUrl}" rel="noopener">${icons.use('store')}Google Play</a><a class="btn btn--line" href="${SITE.apkPath}" download>${icons.use('android')}${esc(t('download.apkName'))}</a></div>${market ? `<p class="market">${esc(market)}</p>` : ''}`;
}

const strings = (ctx) => esc(JSON.stringify({ frozen: ctx.t('phone.toastFrozen'), defrosted: ctx.t('phone.toastDefrosted') }));

function hero(ctx) {
  const { t } = ctx;
  ctx.icons.used.add('flake');
  return `<section class="screen screen--blue screen--hero" data-tone="blue" aria-labelledby="h-hero">
<div class="snow" aria-hidden="true"><span class="snow__a"><svg viewBox="0 0 256 256" focusable="false"><use href="#i-flake"/></svg></span><span class="snow__b"><svg viewBox="0 0 256 256" focusable="false"><use href="#i-flake"/></svg></span></div>
<div class="wrap split">
<div class="split__copy">
<h1 id="h-hero">${lines(t('home.title'))}</h1>
<p class="intro">${lines(t('home.lead'))}</p>
${storeButtons(ctx)}
</div>
<div class="split__art" data-phone-strings="${strings(ctx)}">
${phone(ctx, 'hero', ['video', 'game', 'news', 'shop'])}
</div>
</div>
</section>`;
}

function autoFreeze(ctx) {
  const { t, lang, registry } = ctx;
  return `<section class="screen" data-tone="white" aria-labelledby="h-auto">
<div class="wrap split split--flip">
<div class="split__copy reveal">
<h2 id="h-auto">${lines(t('home.auto.title'))}</h2>
<p class="intro">${lines(t('home.auto.lead'))}</p>
<div class="btn-row"><a class="link" href="${registry.url(lang, 'guide/auto-freeze')}">${esc(t('home.auto.link'))}</a></div>
</div>
<div class="split__art" data-phone-strings="${strings(ctx)}">
${phone(ctx, 'lock', ['map', 'camera', 'music', 'video', 'shop', 'food', 'game', 'news', 'chat', 'ride', 'travel', 'fit'])}
</div>
</div>
</section>`;
}

function modes(ctx) {
  const { t, lang, registry, icons } = ctx;
  const rows = t('home.modes.items').map((it) => {
    const mode = MODES.find((m) => m.id === it.id);
    const meta = mode.android !== '7.0' ? `<span class="mode__meta">Android ${mode.android}+</span>` : '';
    return `<a class="mode" href="${registry.url(lang, mode.page)}"><span class="mode__text"><span class="mode__name">${esc(t(`modes.${mode.id}.name`))}</span><span class="mode__line">${esc(it.line)}${meta}</span></span>${icons.use('arrow-right', 'mode__arrow')}</a>`;
  }).join('');
  return `<section class="screen screen--grey" data-tone="grey" aria-labelledby="h-modes">
<div class="wrap aside">
<div class="aside__copy reveal">
<h2 id="h-modes">${lines(t('home.modes.title'))}</h2>
<p class="intro">${lines(t('home.modes.lead'))}</p>
<div class="btn-row"><a class="link" href="${registry.url(lang, 'guide', '#compare')}">${esc(t('home.modes.link'))}</a></div>
</div>
<div class="modes reveal">${rows}</div>
</div>
</section>`;
}

function help(ctx) {
  const { t, lang, registry } = ctx;
  const items = t('home.help.items')
    .map((it) => `<details class="qa"><summary>${esc(it.q)}<span class="qa__mark" aria-hidden="true"></span></summary><p class="qa__body">${richText(ctx, it.a)}</p></details>`)
    .join('');
  return `<section class="screen" data-tone="white" aria-labelledby="h-help">
<div class="wrap aside">
<div class="aside__copy reveal"><h2 id="h-help">${esc(t('home.help.title'))}</h2></div>
<div class="reveal">${items}<p class="help__more"><a class="link" href="${registry.url(lang, 'faq')}">${esc(t('home.help.more'))}</a></p></div>
</div>
</section>`;
}

function closing(ctx) {
  const { t, icons } = ctx;
  icons.used.add('flake');
  return `<section class="screen screen--blue screen--last" data-tone="blue" aria-labelledby="h-close">
<svg class="closing__flake" viewBox="0 0 256 256" aria-hidden="true" focusable="false"><use href="#i-flake"/></svg>
<div class="wrap">
<div class="closing reveal">
<img class="closing__icon" src="/assets/img/icon-192.png" width="80" height="80" alt="">
<h2 id="h-close">${lines(t('home.closing.title'))}</h2>
<p class="closing__note">${esc(t('home.closing.note'))}</p>
${storeButtons(ctx)}
</div>
</div>
</section>`;
}

export function renderHome(ctx) {
  const { t } = ctx;
  const body = [hero(ctx), autoFreeze(ctx), modes(ctx), help(ctx), closing(ctx)].join('\n');
  return layout(ctx, {
    title: t('meta.homeTitle'),
    description: t('meta.homeDescription'),
    body,
    bodyClass: 'page-home',
    tone: 'blue',
    mdPath: ctx.mdPath,
    jsonLd: [organizationLd(), websiteLd(ctx), appLd(ctx)],
  });
}
