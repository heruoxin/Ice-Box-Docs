import { LANGS, SITE } from '../../scripts/lib/config.mjs';
import { pagePath } from '../../scripts/lib/pages.mjs';
import { esc } from '../../scripts/lib/util.mjs';
import { phoneMock } from './components.mjs';

// Standalone page served for /theme/*, /list/* and every unknown path (GitHub Pages 404.html).
// Product links keep their URL; the content is chosen and localized in the browser.
export function renderSpecial(ctx, { legacyMap }) {
  const { icons, dict, assets, registry } = ctx;
  const strings = {};
  for (const l of LANGS) {
    const d = dict[l.code];
    strings[l.code] = {
      ...d.special,
      phone: { names: d.phone.names, tabs: d.phone.tabs },
      urls: {
        home: pagePath(l.code, ''),
        guide: registry.url(l.code, 'guide'),
        faq: registry.url(l.code, 'faq'),
        download: registry.url(l.code, 'download'),
        themes: registry.url(l.code, 'themes'),
      },
      htmlLang: l.htmlLang,
    };
  }
  const en = dict.en;
  const phone = phoneMock(icons, { names: en.phone.names, tabs: en.phone.tabs, date: '', frozen: ['video', 'game', 'news', 'shop'], id: 'landing-phone' });
  const langLinks = LANGS.map((l) => `<a href="#" data-set-lang="${l.code}" lang="${l.htmlLang}">${esc(l.label)}</a>`).join('');
  icons.use('copy');
  icons.use('open');
  icons.use('download');
  const playFallback = encodeURIComponent(SITE.playUrl);
  return `<!doctype html>
<html lang="en" class="no-js" data-lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Ice Box</title>
<meta name="robots" content="noindex, follow">
<meta name="theme-color" content="${SITE.themeColor}">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/assets/img/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="stylesheet" href="${assets.css}">
<style>
.route-theme [data-route]:not([data-route~="theme"]),.route-list [data-route]:not([data-route~="list"]),.route-404 [data-route]:not([data-route~="404"]){display:none!important}
.sp-langs{display:flex;flex-wrap:wrap;gap:4px 18px;margin-left:auto;font-size:13px}
.sp-langs a{opacity:.7}.sp-langs a[aria-current="true"]{opacity:1;font-weight:600}
.land__icon{width:180px;height:180px;border-radius:50%;box-shadow:0 1px 2px rgba(0,0,0,.14),0 24px 48px -16px rgba(0,0,0,.3)}
</style>
<script>document.documentElement.classList.replace('no-js','js')</script>
</head>
<body class="route-404">
<header class="masthead" data-tone="white"><div class="wrap head"><a class="brand" href="/" data-u="home"><img src="/assets/img/icon-192.png" width="26" height="26" alt="">Ice Box</a><nav class="sp-langs" aria-label="Language">${langLinks}</nav></div></header>
<main id="main" class="land">
<div class="wrap split">
<div class="split__copy">
<div data-route="theme list">
<h1 data-s="title">Ice Box</h1>
<p class="intro" data-s="lead"></p>
<div class="btn-row" style="margin-top:32px">
<a class="btn btn--blue" href="#" data-open>${icons.use('open')}<span data-s="open"></span></a>
<button class="btn btn--soft" type="button" data-copy-url data-copy-text="">${icons.use('copy')}<span data-s="copy"></span></button>
</div>
<p class="land__url" data-url></p>
<p class="land__note" data-manual data-s="manual"></p>
<p class="land__note" data-route="theme" data-s="restore"></p>
<p class="land__note" data-invalid hidden></p>
<p class="land__note"><span data-s="note"></span> <a href="#" data-u="download" data-s="download"></a><span data-route="theme"> · <a href="#" data-u="themes" data-s="gallery"></a></span></p>
</div>
<div data-route="404">
<p class="nf-code" aria-hidden="true">404</p>
<h1 data-s="nf.title">Page not found</h1>
<p class="intro" data-s="nf.lead">This page may have moved or been removed. You can continue here:</p>
<div class="btn-row" style="margin-top:32px">
<a class="btn btn--blue" href="/" data-u="home"><span data-s="nf.home">Home</span></a>
<a class="btn btn--soft" href="${registry.url('en', 'guide')}" data-u="guide"><span data-s="nf.guide">Help Center</span></a>
<a class="btn btn--soft" href="${registry.url('en', 'faq')}" data-u="faq"><span data-s="nf.faq">FAQ</span></a>
</div>
</div>
</div>
<div class="split__art">
<div data-route="theme">${phone}</div>
<img class="land__icon" data-route="list 404" src="/assets/img/icon-512.png" width="180" height="180" alt="">
</div>
</div>
</main>
${icons.sprite()}
<script>
(function () {
  var S = ${JSON.stringify(strings).replace(/</g, '\\u003c')};
  var LEGACY = ${JSON.stringify(legacyMap).replace(/</g, '\\u003c')};
  var root = document.documentElement;
  var raw = location.pathname;
  var dec = raw;
  try { dec = decodeURIComponent(raw); } catch (e) {}
  if (dec.normalize) dec = dec.normalize('NFC');
  var key = dec.replace(/^\\/+|\\/+$/g, '').replace(/\\.html$/i, '');
  if (Object.prototype.hasOwnProperty.call(LEGACY, key)) { location.replace(LEGACY[key] + location.hash); return; }
  var route = /^\\/theme(\\/|$)/.test(dec) ? 'theme' : /^\\/list(\\/|$)/.test(dec) ? 'list' : '404';
  var stored = null;
  try { stored = localStorage.getItem('icebox-lang'); } catch (e) {}
  var detect = function () {
    var ls = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en']);
    for (var i = 0; i < ls.length; i++) {
      var l = String(ls[i]).toLowerCase();
      if (/^zh-(tw|hk|mo)|^zh-hant/.test(l)) return 'zh-hant';
      if (/^zh/.test(l)) return 'zh-hans';
      if (/^ja/.test(l)) return 'ja';
      if (/^en/.test(l)) return 'en';
    }
    return 'en';
  };
  var m = /^\\/(zh-hans|zh-hant|ja)(\\/|$)/.exec(dec);
  var lang = (m && m[1]) || (S[stored] ? stored : detect());
  if (route === 'theme' && raw.replace(/^\/theme\/?/, '') === '') { location.replace(S[(m && m[1]) || (S[stored] ? stored : detect())].urls.themes); return; }
  document.body.className = 'route-' + route;
  var android = /Android/i.test(navigator.userAgent);
  var code = route === 'theme' ? raw.replace(/^\\/theme\\/?/, '') : '';
  var token = route === 'list' ? raw.replace(/^\\/list\\/?/, '').split('/')[0] : '';
  var valid = route === 'theme' ? /^-([0-9a-fA-F]{6,8}-){5}[0-9a-fA-F]{6,8}(\\/|$)/.test(code) : route === 'list' ? token.length > 0 : true;

  function parseColor(h) {
    h = h.toLowerCase();
    if (/^[0-9a-f]{6}$/.test(h)) return 'rgb(' + parseInt(h.slice(0, 2), 16) + ' ' + parseInt(h.slice(2, 4), 16) + ' ' + parseInt(h.slice(4, 6), 16) + ')';
    if (/^[0-9a-f]{8}$/.test(h)) return 'rgb(' + parseInt(h.slice(2, 4), 16) + ' ' + parseInt(h.slice(4, 6), 16) + ' ' + parseInt(h.slice(6, 8), 16) + ' / ' + (parseInt(h.slice(0, 2), 16) / 255).toFixed(2) + ')';
    return null;
  }
  function luminance(h) {
    h = h.toLowerCase();
    var a = h.length === 8 ? parseInt(h.slice(0, 2), 16) / 255 : 1;
    var c = h.slice(h.length - 6);
    var wall = [38, 50, 56];
    var ch = [0, 2, 4].map(function (i, k) { var v = parseInt(c.slice(i, i + 2), 16) * a + wall[k] * (1 - a); v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
    return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
  }
  function applyTheme() {
    var colors = code.split('/')[0].split('-').slice(1);
    if (colors.length < 6) return;
    var names = ['--ib-fab', '--ib-accent', '--ib-toolbar', '--ib-bg', '--ib-status', '--ib-footer'];
    var phone = document.getElementById('landing-phone');
    for (var i = 0; i < 6; i++) { var v = parseColor(colors[i]); if (v) phone.style.setProperty(names[i], v); }
    phone.style.setProperty('--ib-text', luminance(colors[3]) < 0.4 ? 'rgb(255 255 255 / .94)' : 'rgb(0 0 0 / .84)');
    phone.style.setProperty('--ib-text-2', luminance(colors[2]) < 0.4 ? 'rgb(255 255 255 / .72)' : 'rgb(0 0 0 / .56)');
  }

  function render() {
    var s = S[lang];
    root.lang = s.htmlLang;
    root.setAttribute('data-lang', lang);
    var block = route === 'list' ? s.list : s.theme;
    var get = function (k) { return k.indexOf('nf.') === 0 ? s.notFound[k.slice(3)] : block[k]; };
    Array.prototype.forEach.call(document.querySelectorAll('[data-s]'), function (el) { var v = get(el.getAttribute('data-s')); if (v != null) el.textContent = v; });
    Array.prototype.forEach.call(document.querySelectorAll('[data-u]'), function (el) { el.href = s.urls[el.getAttribute('data-u')]; });
    Array.prototype.forEach.call(document.querySelectorAll('[data-set-lang]'), function (el) { el.setAttribute('aria-current', String(el.getAttribute('data-set-lang') === lang)); });
    document.title = (route === '404' ? s.notFound.title : block.title) + (lang === 'en' ? ' | Ice Box' : (lang.indexOf('zh') === 0 ? '｜冰箱 Ice Box' : '｜Ice Box'));
    Array.prototype.forEach.call(document.querySelectorAll('#landing-phone .ib__app'), function (el) { el.querySelector('.ib__name span:last-child').textContent = s.phone.names[el.getAttribute('data-app')]; });
    Array.prototype.forEach.call(document.querySelectorAll('#landing-phone .ib__tab span'), function (el, i) { el.textContent = s.phone.tabs[i] || ''; });
    var inv = document.querySelector('[data-invalid]');
    if (!valid && route !== '404') { inv.hidden = false; inv.textContent = block.invalid; }
  }

  if (route !== '404') {
    var scheme = route === 'theme' ? 'theme/' + code : 'list/' + token;
    var open = document.querySelector('[data-open]');
    open.href = android
      ? 'intent://' + scheme + '#Intent;scheme=icebox;package=${SITE.packageName};S.browser_fallback_url=${playFallback};end'
      : 'icebox://' + scheme;
    if (!valid) { open.setAttribute('hidden', ''); document.querySelector('[data-manual]').hidden = true; }
    var shown = location.href.replace(/#.*$/, '');
    document.querySelector('[data-url]').textContent = shown;
    document.querySelector('[data-copy-url]').setAttribute('data-copy-text', shown);
    if (route === 'theme' && valid) applyTheme();
  }
  render();
  Array.prototype.forEach.call(document.querySelectorAll('[data-set-lang]'), function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      lang = el.getAttribute('data-set-lang');
      try { localStorage.setItem('icebox-lang', lang); } catch (err) {}
      render();
    });
  });
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('[data-copy-text]');
    if (!btn || !navigator.clipboard) return;
    navigator.clipboard.writeText(btn.getAttribute('data-copy-text')).then(function () {
      var span = btn.querySelector('span'); var old = span.textContent; span.textContent = '\\u2713'; setTimeout(function () { span.textContent = old; }, 1400);
    }, function () {});
  });
})();
</script>
</body>
</html>`;
}
