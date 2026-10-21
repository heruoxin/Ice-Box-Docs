import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');
export const SRC = path.join(ROOT, 'src');
export const DIST = path.join(ROOT, process.env.OUT_DIR || 'dist');

const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => HTML_ESCAPES[c]);
}

export function writeFile(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, data);
}

export function readText(file) {
  return fs.readFileSync(file, 'utf8');
}

export function walk(dir, filter = () => true) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full, filter));
    else if (filter(full)) out.push(full);
  }
  return out.sort();
}

export function copyDir(from, to) {
  for (const file of walk(from)) {
    if (path.basename(file) === '.DS_Store') continue;
    const target = path.join(to, path.relative(from, file));
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(file, target);
  }
}

export function hash(data, length = 10) {
  return crypto.createHash('sha256').update(data).digest('hex').slice(0, length);
}

// Heading anchors: keep CJK characters, collapse everything else into hyphens.
export function slugify(text) {
  return String(text)
    .normalize('NFKC')
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[\s　]+/g, '-')
    .replace(/[^\p{Letter}\p{Number}\-_]/gu, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const gitDateCache = new Map();

// Last commit date of a file, falling back to its mtime for uncommitted work.
export function lastModified(file) {
  if (gitDateCache.has(file)) return gitDateCache.get(file);
  let iso = '';
  try {
    iso = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], { cwd: ROOT, encoding: 'utf8' }).trim();
  } catch {
    iso = '';
  }
  let dirty = false;
  try {
    dirty = execFileSync('git', ['status', '--porcelain', '--', file], { cwd: ROOT, encoding: 'utf8' }).trim() !== '';
  } catch {
    dirty = true;
  }
  if (!iso || dirty) iso = fs.statSync(file).mtime.toISOString();
  const date = iso.slice(0, 10);
  gitDateCache.set(file, date);
  return date;
}

export function stripTags(html) {
  return String(html)
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

export function truncate(text, max) {
  const chars = Array.from(text);
  if (chars.length <= max) return text;
  return chars.slice(0, max - 1).join('').replace(/[\s,，、。.;；:：]+$/u, '') + '…';
}
