#!/usr/bin/env node
// Checks translated Markdown against the zh-hans source.
// Usage: node scripts/lint-content.mjs <lang> [file-prefix]
import path from 'node:path';
import { SRC, walk, readText } from './lib/util.mjs';
import { parseFrontMatter } from './lib/markdown.mjs';
import { lintCopy } from './lib/checks.mjs';

const [lang, prefix = ''] = process.argv.slice(2);
if (!lang) {
  console.error('Usage: node scripts/lint-content.mjs <en|ja> [path-prefix]');
  process.exit(2);
}
const base = path.join(SRC, 'content', 'zh-hans');
const SKIP = new Set(['privacy', 'resellers/lizhi']);
const KEEP = ['section', 'group', 'order', 'howto', 'faq', 'related', 'layout', 'search', 'priority', 'icon'];
const TRANSLATE = ['title', 'short', 'description', 'card', 'lead'];
const ids = (body) => [...body.matchAll(/\{(#[^}]+)\}\s*$/gm)].map((m) => m[1].split(/\s+/).filter((x) => /^#[\x21-\x7e]+$/.test(x)).join(' '));
const codes = (body) => [...body.matchAll(/^\[\[[^\]]+\]\]$/gm)].map((m) => m[0]);
const links = (body) => [...body.matchAll(/\]\((\/[^)\s]*)\)/g)].map((m) => m[1]).sort();
const fences = (body) => [...body.matchAll(/```[\s\S]*?```/g)].map((m) => m[0].replace(/^```\w*\n?/, ''));

let problems = 0;
let checked = 0;
const report = (file, msg) => {
  problems++;
  console.log(`${file}: ${msg}`);
};

for (const file of walk(base, (f) => f.endsWith('.md'))) {
  const id = path.relative(base, file).replace(/\.md$/, '');
  if (SKIP.has(id) || !id.startsWith(prefix)) continue;
  const target = path.join(SRC, 'content', lang, id + '.md');
  let text;
  try {
    text = readText(target);
  } catch {
    report(id, 'missing translation');
    continue;
  }
  checked++;
  const src = parseFrontMatter(readText(file));
  const out = parseFrontMatter(text);
  for (const k of KEEP) if (String(src.data[k] ?? '') !== String(out.data[k] ?? '')) report(id, `front matter "${k}" must stay "${src.data[k] ?? ''}" (got "${out.data[k] ?? ''}")`);
  for (const k of TRANSLATE) {
    if (src.data[k] !== undefined && out.data[k] === undefined) report(id, `front matter "${k}" missing`);
    if (typeof out.data[k] === 'string' && /[一-鿿]{3,}/.test(out.data[k]) && lang === 'en') report(id, `front matter "${k}" looks untranslated`);
  }
  const a = ids(src.body).join(','), b = ids(out.body).join(',');
  if (a !== b) report(id, `heading ids differ\n  source: ${a}\n  target: ${b}`);
  if (codes(src.body).join() !== codes(out.body).join()) report(id, `shortcodes differ: ${codes(src.body)} vs ${codes(out.body)}`);
  const la = links(src.body).join(' '), lb = links(out.body).join(' ');
  if (la !== lb) report(id, `internal links differ\n  source: ${la}\n  target: ${lb}`);
  if (fences(src.body).join('\n') !== fences(out.body).join('\n')) report(id, 'code blocks must be identical');
  for (const p of lintCopy(id, text)) report(id, p);
  if (lang === 'en') {
    const cjk = out.body.replace(/`[^`]*`/g, '').match(/[一-鿿]+/g) || [];
    if (cjk.join('').length > 40) report(id, `many CJK characters left (${cjk.slice(0, 8).join(' ')}); only keep Chinese for proper names`);
  }
}
console.log(`\nChecked ${checked} file(s) for ${lang}${prefix ? ` under ${prefix}` : ''}: ${problems ? problems + ' problem(s)' : 'OK'}`);
process.exit(problems ? 1 : 0);
