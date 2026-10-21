import fs from 'node:fs';
import path from 'node:path';
import { walk } from './util.mjs';

// Copy rules: no dashes used as punctuation, no emoji.
const DASHES = /[‒–—―⸺⸻]|——|(?<![\w-])--(?![\w-])/u;
const EMOJI = /(?![©®™])\p{Extended_Pictographic}/u;

function prose(text) {
  return text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`\n]*`/g, ' ')
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/<[^>]+>/g, ' ');
}

export function lintCopy(label, text) {
  const problems = [];
  prose(text).split('\n').forEach((line, i) => {
    if (DASHES.test(line)) problems.push(`${label}:${i + 1} dash: ${line.trim().slice(0, 80)}`);
    if (EMOJI.test(line)) problems.push(`${label}:${i + 1} emoji: ${line.trim().slice(0, 80)}`);
  });
  return problems;
}

export function lintDict(label, obj, trail = '') {
  const problems = [];
  if (typeof obj === 'string') {
    if (DASHES.test(obj)) problems.push(`${label} ${trail} dash: ${obj.slice(0, 80)}`);
    if (EMOJI.test(obj)) problems.push(`${label} ${trail} emoji: ${obj.slice(0, 80)}`);
  } else if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) problems.push(...lintDict(label, v, trail ? `${trail}.${k}` : k));
  }
  return problems;
}

// Every internal href/src in generated HTML must resolve to a file, and #anchors must exist.
export function checkLinks(dist) {
  const problems = [];
  const htmlFiles = walk(dist, (f) => f.endsWith('.html'));
  const idCache = new Map();
  const ids = (file) => {
    if (!idCache.has(file)) {
      const html = fs.readFileSync(file, 'utf8');
      idCache.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
    }
    return idCache.get(file);
  };
  const resolve = (url) => {
    let p = decodeURI(url.split('#')[0].split('?')[0]);
    if (p.endsWith('/')) p += 'index.html';
    const full = path.join(dist, p);
    if (fs.existsSync(full) && fs.statSync(full).isFile()) return full;
    if (fs.existsSync(full + '.html')) return full + '.html';
    if (fs.existsSync(path.join(full, 'index.html'))) return path.join(full, 'index.html');
    return null;
  };
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, 'utf8');
    if (path.basename(file) === '404.html' || /<meta name="robots" content="noindex, follow">\s*<link rel="canonical"/.test(html)) continue;
    for (const m of html.matchAll(/\s(?:href|src)="(\/[^"]*)"/g)) {
      const url = m[1].replace(/&amp;/g, '&');
      if (url.startsWith('//')) continue;
      const target = resolve(url);
      const rel = path.relative(dist, file);
      if (!target) {
        problems.push(`${rel}: broken link ${url}`);
        continue;
      }
      const hash = url.includes('#') ? decodeURIComponent(url.split('#')[1]) : '';
      if (hash && target.endsWith('.html') && !ids(target).has(hash)) problems.push(`${rel}: missing anchor ${url}`);
    }
    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        JSON.parse(m[1]);
      } catch (err) {
        problems.push(`${path.relative(dist, file)}: invalid JSON-LD (${err.message})`);
      }
    }
    for (const m of html.matchAll(/\shref="#([^"]+)"/g)) {
      const hash = decodeURIComponent(m[1]);
      if (!ids(file).has(hash)) problems.push(`${path.relative(dist, file)}: missing in-page anchor #${hash}`);
    }
  }
  return problems;
}
