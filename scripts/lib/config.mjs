// Single source of truth for site-wide facts, languages, page registry and URL compatibility.

export const SITE = {
  url: (process.env.SITE_URL || 'https://icebox.catchingnow.com').replace(/\/$/, ''),
  legacyHost: 'iceboxdoc.catchingnow.com',
  packageName: 'com.catchingnow.icebox',
  playUrl: 'https://play.google.com/store/apps/details?id=com.catchingnow.icebox',
  // CoolApk no longer serves app pages on the web (they return 404); people install from the CoolApk app.
  coolapkUrl: 'https://www.coolapk.com/',
  apkPath: '/icebox_latest.apk',
  activatorPath: '/files/冰箱激活器-Windows.zip',
  webActivatorUrl: 'https://adb.http.gs/icebox.html',
  sdkUrl: 'https://github.com/heruoxin/IceBox-SDK',
  docsRepo: 'https://github.com/heruoxin/Ice-Box-Docs',
  privacyEmail: 'icebox_privacy@catchingnow.com',
  since: 2015,
  minAndroid: '7.0',
  themeColor: '#0277BD',
};

// `path` is the URL prefix. English is the x-default and lives at the root.
// `detect` matches a lower-cased browser language tag; the first match wins, so zh-hant comes before zh-hans.
export const LANGS = [
  { code: 'en', path: '', htmlLang: 'en', hreflang: ['en'], label: 'English', short: 'EN', og: 'en_US', detect: '^en' },
  { code: 'zh-hans', path: 'zh-hans', htmlLang: 'zh-Hans', hreflang: ['zh-Hans', 'zh-CN', 'zh-SG'], label: '简体中文', short: '简', og: 'zh_CN', detect: '^zh' },
  { code: 'zh-hant', path: 'zh-hant', htmlLang: 'zh-Hant', hreflang: ['zh-Hant', 'zh-TW', 'zh-HK', 'zh-MO'], label: '繁體中文', short: '繁', og: 'zh_TW', detect: '^zh-(tw|hk|mo)|^zh-hant' },
  { code: 'ja', path: 'ja', htmlLang: 'ja', hreflang: ['ja'], label: '日本語', short: '日', og: 'ja_JP', detect: '^ja' },
  { code: 'es', path: 'es', htmlLang: 'es', hreflang: ['es'], label: 'Español', short: 'ES', og: 'es_LA', detect: '^es' },
  { code: 'pt-br', path: 'pt-br', htmlLang: 'pt-BR', hreflang: ['pt-BR', 'pt'], label: 'Português (Brasil)', short: 'PT', og: 'pt_BR', detect: '^pt' },
  { code: 'fr', path: 'fr', htmlLang: 'fr', hreflang: ['fr'], label: 'Français', short: 'FR', og: 'fr_FR', detect: '^fr' },
  { code: 'de', path: 'de', htmlLang: 'de', hreflang: ['de'], label: 'Deutsch', short: 'DE', og: 'de_DE', detect: '^de' },
  { code: 'id', path: 'id', htmlLang: 'id', hreflang: ['id'], label: 'Bahasa Indonesia', short: 'ID', og: 'id_ID', detect: '^(id|in)(-|$)' },
  { code: 'tr', path: 'tr', htmlLang: 'tr', hreflang: ['tr'], label: 'Türkçe', short: 'TR', og: 'tr_TR', detect: '^tr' },
  { code: 'vi', path: 'vi', htmlLang: 'vi', hreflang: ['vi'], label: 'Tiếng Việt', short: 'VI', og: 'vi_VN', detect: '^vi' },
];

// Browser-side language detection, shared by the home page redirect, 404.html and the language hint.
const DETECT_ORDER = ['zh-hant', ...LANGS.map((l) => l.code).filter((c) => c !== 'zh-hant')];
export const DETECT_RULES = DETECT_ORDER.map((c) => [c, LANGS.find((l) => l.code === c).detect]);
export const DETECT_JS = `[${DETECT_RULES.map(([c, re]) => `['${c}',/${re}/]`).join(',')}]`;

export const LANG = Object.fromEntries(LANGS.map((l) => [l.code, l]));

// Pages rendered from code templates. Markdown pages are discovered from src/content/<lang>/.
export const TEMPLATE_PAGES = [{ id: 'home', slug: '', template: 'home', priority: 1.0 }];

export const NAV = ['features', 'use-cases', 'guide', 'faq'];

export const FOOTER = [
  { key: 'product', items: ['features', 'use-cases', 'themes', 'download', 'changelog'] },
  { key: 'help', items: ['guide', 'faq', 'guide/devices', 'guide/uninstall', 'purchase'] },
  { key: 'about', items: ['about', 'developers', 'privacy'] },
];

// Work modes, in the order the help center recommends them.
export const MODES = [
  { id: 'root', page: 'guide/root', root: true, computer: false, reboot: true, android: '7.0' },
  { id: 'deviceOwner', page: 'guide/device-owner', root: false, computer: true, reboot: true, android: '7.0' },
  { id: 'wireless', page: 'guide/wireless-debugging', root: false, computer: false, reboot: false, android: '11' },
  { id: 'adb', page: 'guide/adb', root: false, computer: true, reboot: false, android: '7.0' },
  { id: 'shizuku', page: 'guide/shizuku', root: false, computer: false, reboot: false, android: '11' },
  { id: 'qr', page: 'guide/qr-code', root: false, computer: false, reboot: true, android: '7.0' },
];

// Shared themes published in the old docs. Colors: fab, accent, toolbar, background, status bar, footer.
export const THEMES = [
  { id: 'sakura', code: '-e16b8c-dc9fb4-fedfe1-f5f5f5-fedfe1-77428d/0/default/1' },
  { id: 'clearBlue', code: '-ffc107-1e88e5-1e88e5-451976d2-0d47a1-9e9e9e/0/default/2' },
  { id: 'matcha', code: '-0097a7-90a4ae-e0f2f1-dbb2dfdb-4db6ac-90a4ae/0/default/1' },
  { id: 'panda', code: '-000000-616161-d9ffffff-d9f5f5f5-d9eeeeee-e0e0e0/0/default/1' },
  { id: 'dazzleRed', code: '-fbc02d-ffeb3b-bfef5350-bff44336-bfd32f2f-e0e0e0/0/default/1' },
  { id: 'amoled', code: '-1976d2-1e88e5-000000-000000-212121-9e9e9e/0/default/2' },
  { id: 'clearRed', code: '-ff5722-d32f2f-e53935-66d32f2f-b71c1c-b71c1c/0/default/2' },
  { id: 'clearGreen', code: '-4dd0e1-c8e6c9-26a69a-8a009688-00796b-00796b/0/default/2' },
  { id: 'softPink', code: '-e91e63-f57c00-fce4ec-aef8bbd0-f06292-fce4ec/0/default/1' },
];

// Pages of the old Jekyll site on iceboxdoc.catchingnow.com, keyed by their decoded path.
// Each one keeps working: Cloudflare 301s it to the new page, and the new site carries a
// redirect stub at the same path as a fallback.
// bulk: gets an exact 301 in the Cloudflare Bulk Redirect list (Free plan allows 20 entries). The rest
// reach the new host through one path-preserving Single Redirect rule and the stubs below take over.
export const LEGACY_PAGES = [
  { path: 'FAQ', bulk: true, lang: 'en', page: 'faq' },
  { path: 'FAQ 常见问题', bulk: true, lang: 'zh-hans', page: 'faq' },
  { path: 'Device Owner （免 root）模式设置', bulk: true, lang: 'zh-hans', page: 'guide/device-owner' },
  { path: 'Device Owner (Non Root) Setup', bulk: true, lang: 'en', page: 'guide/device-owner' },
  { path: 'Device Owner 三星特别说明', lang: 'zh-hans', page: 'guide/samsung-device-owner' },
  { path: 'QR Code (Non Root) Setup', bulk: true, lang: 'en', page: 'guide/qr-code' },
  { path: '免 Root 免电脑设置', bulk: true, lang: 'zh-hans', page: 'guide/qr-code' },
  { path: '一键激活工具', bulk: true, lang: 'zh-hans', page: 'guide/activator' },
  { path: '一键激活器（普通 ADB 模式）', bulk: true, lang: 'zh-hans', page: 'guide/adb' },
  { path: 'Active with simple ADB mode', bulk: true, lang: 'en', page: 'guide/adb' },
  { path: '网页版激活器', bulk: true, lang: 'zh-hans', page: 'guide/web-activator' },
  { path: '使用秋之盒激活', lang: 'zh-hans', page: 'guide/autumnbox' },
  { path: '使用 Shizuku Manager 激活冰箱', bulk: true, lang: 'zh-hans', page: 'guide/shizuku' },
  { path: 'Active with Shizuku ManagerManager', bulk: true, lang: 'en', page: 'guide/shizuku' },
  { path: '更换主题', lang: 'zh-hans', page: 'themes' },
  { path: 'theme', bulk: true, lang: 'zh-hans', page: 'themes', noStub: true },
  { path: 'changelog', bulk: true, lang: 'zh-hans', page: 'changelog', noStub: true },
  { path: '隐私策略', bulk: true, lang: 'zh-hans', page: 'privacy' },
  { path: '软件购买说明', bulk: true, lang: 'zh-hans', page: 'purchase' },
  { path: '其他支付方式', bulk: true, lang: 'zh-hans', page: 'purchase/wechat-pay' },
  { path: '支付宝兑换 Play 兑换码', lang: 'zh-hans', page: 'purchase' },
  { path: 'resellers/数码荔枝', lang: 'zh-hans', page: 'resellers/lizhi' },
  { path: 'README', bulk: true, lang: 'zh-hans', page: 'guide' },
];

// Files the old site served directly. They stay at the same path on the new host.
export const LEGACY_FILES = [
  'icebox_latest.apk',
  'files/冰箱激活器-Windows.zip',
  'wechatpay.jpg',
  'qqpay.jpg',
  'img/lizhi.png',
  'ic_launcher_web.png',
  'favicon.ico',
];

// Every documentation link hard-coded in the Android app (app/src/main/res, Constants.java)
// plus the t.cn short links found in app strings. Used by scripts/verify-legacy.mjs.
export const APP_LINKS = [
  { where: 'values/strings_enviroment.xml qa_online', url: 'https://iceboxdoc.catchingnow.com/FAQ', expect: ['en', 'faq'] },
  { where: 'values/strings_enviroment.xml dpm_online', url: 'https://iceboxdoc.catchingnow.com/Device%20Owner%20(Non%20Root)%20Setup', expect: ['en', 'guide/device-owner'] },
  { where: 'values/strings_enviroment.xml qr_online', url: 'https://iceboxdoc.catchingnow.com/QR%20Code%20(Non%20Root)%20Setup', expect: ['en', 'guide/qr-code'] },
  { where: 'values/strings_enviroment.xml one_key_tool_online', url: 'https://iceboxdoc.catchingnow.com/%E4%B8%80%E9%94%AE%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7', expect: ['zh-hans', 'guide/activator'] },
  { where: 'values/strings_enviroment.xml shizuku_online', url: 'https://iceboxdoc.catchingnow.com/Active%20with%20Shizuku%20ManagerManager', expect: ['en', 'guide/shizuku'] },
  { where: 'values/strings_enviroment.xml adb_daemon_online', url: 'https://iceboxdoc.catchingnow.com/Active%20with%20simple%20ADB%20mode', expect: ['en', 'guide/adb'] },
  { where: 'values-zh-rTW/strings_enviroment.xml qa_online', url: 'https://iceboxdoc.catchingnow.com/', expect: ['root'] },
  { where: 'values-zh-rTW/strings_enviroment.xml dpm_online', url: 'https://iceboxdoc.catchingnow.com/Device%20Owner%20%EF%BC%88%E5%85%8D%20root%EF%BC%89%E6%A8%A1%E5%BC%8F%E8%AE%BE%E7%BD%AE', expect: ['zh-hans', 'guide/device-owner'] },
  { where: 'values-zh-rTW/strings_enviroment.xml qr_online', url: 'https://iceboxdoc.catchingnow.com/%E5%85%8D%20Root%20%E5%85%8D%E7%94%B5%E8%84%91%E8%AE%BE%E7%BD%AE', expect: ['zh-hans', 'guide/qr-code'] },
  { where: 'values-zh-rTW/strings_enviroment.xml shizuku_online', url: 'https://iceboxdoc.catchingnow.com/%E4%BD%BF%E7%94%A8%20Shizuku%20Manager%20%E6%BF%80%E6%B4%BB%E5%86%B0%E7%AE%B1', expect: ['zh-hans', 'guide/shizuku'] },
  { where: 'values/strings.xml description_dpm (t.cn/AiRyHJIv)', url: 'https://iceboxdoc.catchingnow.com/Device%20Owner%20(Non%20Root)%20Setup', expect: ['en', 'guide/device-owner'] },
  { where: 'values-zh-rCN|zh-rTW/strings.xml description_dpm (t.cn/EKINpeK)', url: 'https://iceboxdoc.catchingnow.com/Device%20Owner%20%EF%BC%88%E5%85%8D%20root%EF%BC%89%E6%A8%A1%E5%BC%8F%E8%AE%BE%E7%BD%AE', expect: ['zh-hans', 'guide/device-owner'] },
  { where: 'changelog 3.14.2 (t.cn/EKoc7v5)', url: 'https://iceboxdoc.catchingnow.com/%E5%85%B6%E4%BB%96%E6%94%AF%E4%BB%98%E6%96%B9%E5%BC%8F', expect: ['zh-hans', 'purchase/wechat-pay'] },
  { where: 'values/strings_no_translate.xml link_other_payment (.cn path)', url: 'https://iceboxdoc.catchingnow.com/%E5%85%B6%E4%BB%96%E6%94%AF%E4%BB%98%E6%96%B9%E5%BC%8F', expect: ['zh-hans', 'purchase/wechat-pay'] },
  { where: 'values/strings_no_translate.xml link_payment_description (.cn path)', url: 'https://iceboxdoc.catchingnow.com/%E8%BD%AF%E4%BB%B6%E8%B4%AD%E4%B9%B0%E8%AF%B4%E6%98%8E', expect: ['zh-hans', 'purchase'] },
  { where: 'values-zh-rCN/strings_enviroment.xml adb_daemon_online (.cn path)', url: 'https://iceboxdoc.catchingnow.com/%E4%B8%80%E9%94%AE%E6%BF%80%E6%B4%BB%E5%99%A8%EF%BC%88%E6%99%AE%E9%80%9A%20ADB%20%E6%A8%A1%E5%BC%8F%EF%BC%89', expect: ['zh-hans', 'guide/adb'] },
  { where: 'Constants.THEME_DOMAIN2 (App Link)', url: 'https://icebox.catchingnow.com/theme/-e16b8c-dc9fb4-fedfe1-f5f5f5-fedfe1-77428d/0/default/1', expect: ['product', 'theme'] },
  { where: 'AndroidManifest /list/ (App Link)', url: 'https://icebox.catchingnow.com/list/demo', expect: ['product', 'list'] },
  { where: 'App Links verification', url: 'https://icebox.catchingnow.com/.well-known/assetlinks.json', expect: ['file'] },
];
