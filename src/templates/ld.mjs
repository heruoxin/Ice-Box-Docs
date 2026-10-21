import { SITE, LANGS, LANG } from '../../scripts/lib/config.mjs';
import { absolute, pagePath } from '../../scripts/lib/pages.mjs';

const ORG_ID = `${SITE.url}/#org`;
const APP_ID = `${SITE.url}/#app`;
const SITE_ID = `${SITE.url}/#website`;

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'CatchingNow',
    url: SITE.url + '/',
    logo: absolute('/assets/img/icon-512.png'),
    sameAs: ['https://play.google.com/store/apps/dev?id=4678881964570346633', 'https://github.com/heruoxin'],
  };
}

export function websiteLd(ctx) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: SITE.url + '/',
    name: ctx.t('meta.siteName'),
    alternateName: ['Ice Box', '冰箱', 'IceBox'],
    inLanguage: LANGS.map((l) => l.htmlLang),
    publisher: { '@id': ORG_ID },
  };
}

export function appLd(ctx) {
  const { t, lang, registry, version } = ctx;
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    '@id': APP_ID,
    name: 'Ice Box',
    alternateName: ['冰箱', '冰箱 Ice Box', 'IceBox', 'Ice Box - Apps freezer'],
    description: t('meta.appDescription'),
    url: absolute(pagePath(lang, '')),
    identifier: SITE.packageName,
    operatingSystem: `Android ${SITE.minAndroid}+`,
    applicationCategory: 'UtilitiesApplication',
    applicationSubCategory: 'App freezer',
    ...(version ? { softwareVersion: version } : {}),
    downloadUrl: absolute(registry.url(lang, 'download')),
    installUrl: SITE.playUrl,
    releaseNotes: absolute(registry.url(lang, 'changelog')),
    softwareHelp: { '@type': 'CreativeWork', url: absolute(registry.url(lang, 'guide')) },
    image: absolute('/assets/img/icon-512.png'),
    inLanguage: LANG[lang].htmlLang,
    featureList: t('meta.featureList'),
    sameAs: [SITE.playUrl, SITE.coolapkUrl],
    publisher: { '@id': ORG_ID },
  };
}

export function faqLd(pairs) {
  if (!pairs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pairs.map((p) => ({ '@type': 'Question', name: p.q, acceptedAnswer: { '@type': 'Answer', text: p.a } })),
  };
}

export function howToLd(ctx, page, steps) {
  if (!steps.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: page.title,
    description: page.description,
    inLanguage: LANG[ctx.lang].htmlLang,
    step: steps.map((text, i) => ({ '@type': 'HowToStep', position: i + 1, text })),
  };
}

export function articleLd(ctx, page) {
  const url = absolute(pagePath(ctx.lang, page.slug));
  return {
    '@context': 'https://schema.org',
    '@type': page.data.section === 'guide' ? 'TechArticle' : 'Article',
    headline: page.title,
    description: page.description,
    url,
    mainEntityOfPage: url,
    inLanguage: LANG[ctx.lang].htmlLang,
    dateModified: page.updated,
    image: absolute(`/assets/img/og-${ctx.lang}.png`),
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    about: { '@id': APP_ID },
    isPartOf: { '@id': SITE_ID },
  };
}
