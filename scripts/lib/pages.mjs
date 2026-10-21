import fs from 'node:fs';
import path from 'node:path';
import { LANGS, LANG, SITE, TEMPLATE_PAGES } from './config.mjs';
import { parseFrontMatter } from './markdown.mjs';
import { toHant, toHantDeep } from './hant.mjs';
import { SRC, walk, readText, lastModified } from './util.mjs';

export function pagePath(lang, slug) {
  const prefix = LANG[lang].path;
  return '/' + (prefix ? prefix + '/' : '') + slug;
}

export function absolute(p) {
  return SITE.url + p;
}

// UI dictionaries. zh-hant is derived from zh-hans unless src/i18n/zh-hant.mjs overrides a key.
export async function loadDictionaries() {
  const dict = {};
  for (const code of ['en', 'zh-hans', 'ja']) {
    dict[code] = (await import(path.join(SRC, 'i18n', `${code}.mjs`))).default;
  }
  dict['zh-hant'] = deepMerge(toHantDeep(dict['zh-hans']), await optionalImport(path.join(SRC, 'i18n', 'zh-hant.mjs')));
  return dict;
}

async function optionalImport(file) {
  if (!fs.existsSync(file)) return {};
  return (await import(file)).default;
}

function deepMerge(base, extra) {
  if (!extra || typeof extra !== 'object' || Array.isArray(extra)) return extra ?? base;
  const out = { ...base };
  for (const [k, v] of Object.entries(extra)) {
    out[k] = v && typeof v === 'object' && !Array.isArray(v) && base?.[k] ? deepMerge(base[k], v) : v;
  }
  return out;
}

// Look up "a.b.c" in a dictionary, falling back to English so a missing key never breaks a page.
export function makeT(dict, lang) {
  const get = (obj, key) => key.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
  return (key, vars) => {
    let value = get(dict[lang], key);
    if (value == null) value = get(dict.en, key);
    if (value == null) throw new Error(`Missing i18n key "${key}" (${lang})`);
    if (typeof value === 'string' && vars) {
      value = value.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? `{${k}}`));
    }
    return value;
  };
}

// Markdown pages from src/content/<lang>/**/*.md. zh-hant falls back to a converted zh-hans file.
export function loadMarkdownPages() {
  const pages = [];
  const byLang = {};
  for (const code of ['en', 'zh-hans', 'ja', 'zh-hant']) {
    const dir = path.join(SRC, 'content', code);
    byLang[code] = new Map(
      walk(dir, (f) => f.endsWith('.md')).map((file) => [path.relative(dir, file).replace(/\.md$/, '').replace(/\\/g, '/'), file]),
    );
  }
  const ids = new Set([...byLang['zh-hans'].keys(), ...byLang.en.keys()]);
  for (const id of [...ids].sort()) {
    for (const { code } of LANGS) {
      let file = byLang[code].get(id);
      let source;
      if (file) source = readText(file);
      else if (code === 'zh-hant' && byLang['zh-hans'].has(id)) {
        file = byLang['zh-hans'].get(id);
        source = toHant(readText(file));
      } else continue;
      const { data, body } = parseFrontMatter(source);
      if (data.draft) continue;
      const slug = id === 'index' ? '' : id.replace(/\/index$/, '') + '/';
      pages.push({
        id,
        lang: code,
        kind: 'md',
        template: 'doc',
        slug,
        data,
        body,
        file,
        title: data.title,
        description: data.description,
        updated: data.updated || lastModified(file),
        priority: data.priority ?? 0.7,
      });
    }
  }
  return pages;
}

export function loadTemplatePages() {
  const pages = [];
  for (const def of TEMPLATE_PAGES) {
    for (const { code } of LANGS) {
      pages.push({ ...def, lang: code, kind: 'template', data: {}, updated: null });
    }
  }
  return pages;
}

// Index pages by id and language so templates can link to any page in any language.
export class Registry {
  constructor(pages) {
    this.pages = pages;
    this.map = new Map();
    for (const p of pages) this.map.set(`${p.lang}:${p.id}`, p);
  }
  get(lang, id) {
    return this.map.get(`${lang}:${id}`);
  }
  has(lang, id) {
    return this.map.has(`${lang}:${id}`);
  }
  url(lang, id, hash = '') {
    const page = this.get(lang, id) || this.get('zh-hans', id) || this.get('en', id);
    if (!page) throw new Error(`Unknown page "${id}"`);
    return pagePath(page.lang, page.slug) + hash;
  }
  alternates(page) {
    return LANGS.map((l) => this.get(l.code, page.id)).filter(Boolean);
  }
  bySlug(lang, slug) {
    return this.pages.find((p) => p.lang === lang && p.slug === slug);
  }
  all(lang) {
    return this.pages.filter((p) => p.lang === lang);
  }
}
