#!/usr/bin/env node
// Verifies that every old documentation URL (including the ones hard-coded in the Android app)
// still leads to the right page.
//
//   node scripts/verify-legacy.mjs                      Check production: iceboxdoc.catchingnow.com must 301 to the new pages
//   node scripts/verify-legacy.mjs --local [base]       Check the redirect stubs on a local build (default http://localhost:4000)
import fs from 'node:fs';
import path from 'node:path';
import { LEGACY_PAGES, LEGACY_FILES, APP_LINKS, SITE } from './lib/config.mjs';
import { ROOT } from './lib/util.mjs';

const local = process.argv.includes('--local');
const base = (process.argv.find((a) => /^https?:\/\//.test(a)) || (local ? 'http://localhost:4000' : `https://${SITE.legacyHost}`)).replace(/\/$/, '');
const report = JSON.parse(fs.readFileSync(path.join(ROOT, 'redirects/legacy-map.json'), 'utf8'));
const expected = new Map(report.pages.map((p) => [p.oldDecoded.slice(1), p.new]));

let failed = 0;
const ok = (msg) => console.log(`  ok    ${msg}`);
const bad = (msg) => { failed++; console.log(`  FAIL  ${msg}`); };

async function head(url) {
  const res = await fetch(url, { redirect: 'manual' });
  const body = res.status === 200 && /text\/html/.test(res.headers.get('content-type') || '') ? await res.text() : '';
  return { status: res.status, location: res.headers.get('location'), body, type: res.headers.get('content-type') };
}

async function checkPage(oldPath, target) {
  for (const variant of [oldPath, `${oldPath}.html`]) {
    const url = base + encodeURI('/' + variant);
    try {
      const r = await head(url);
      if (local) {
        const relTarget = target.replace(SITE.url, '');
        if (r.status === 200 && r.body.includes(JSON.stringify(relTarget))) ok(`${decodeURI(url)} -> ${relTarget}`);
        else if (r.status === 301 && r.location) ok(`${decodeURI(url)} -> ${r.location} (directory redirect)`);
        else bad(`${decodeURI(url)} returned ${r.status}, expected a stub pointing to ${relTarget}`);
      } else if ([301, 308].includes(r.status) && r.location === target) ok(`${decodeURI(url)} -> ${target}`);
      else if ([301, 308].includes(r.status) && r.location === SITE.url + encodeURI('/' + variant)) {
        // Path-preserving fallback rule: the stub on the new host must point to the target.
        const s = await head(r.location);
        const relTarget = target.replace(SITE.url, '');
        if (s.status === 200 && s.body.includes(JSON.stringify(relTarget))) ok(`${decodeURI(url)} -> ${r.location} -> ${relTarget} (fallback rule + stub)`);
        else if ([301, 308].includes(s.status) && s.location && (s.location === target || s.location === relTarget)) ok(`${decodeURI(url)} -> ${r.location} -> ${s.location}`);
        else bad(`${decodeURI(url)} -> ${r.location} returned ${s.status} ${s.location || ''}, expected a stub pointing to ${relTarget}`);
      } else bad(`${decodeURI(url)} returned ${r.status} ${r.location || ''}, expected 301 -> ${target}`);
    } catch (err) {
      bad(`${url}: ${err.message}`);
    }
  }
}

console.log(`\nLegacy pages on ${base}`);
for (const item of LEGACY_PAGES) {
  if (local && item.noStub) continue;
  await checkPage(item.path, expected.get(item.path));
}

console.log('\nLegacy files');
for (const f of LEGACY_FILES) {
  const url = base + encodeURI('/' + f);
  const want = `${SITE.url}${encodeURI('/' + f)}`;
  const r = await head(url).catch((e) => ({ status: 0, location: e.message }));
  if (local ? r.status === 200 : [301, 308].includes(r.status) && r.location === want) ok(decodeURI(url));
  else bad(`${decodeURI(url)} returned ${r.status} ${r.location || ''}`);
}

if (!local) {
  console.log('\nLinks hard-coded in the Android app');
  for (const link of APP_LINKS) {
    const r = await head(link.url).catch((e) => ({ status: 0, location: e.message }));
    const [kind, page] = link.expect;
    if (kind === 'root') {
      [301, 308].includes(r.status) && r.location === `${SITE.url}/` ? ok(`${link.where}`) : bad(`${link.where}: ${r.status} ${r.location || ''}`);
    } else if (kind === 'product') {
      r.status === 404 || r.status === 200 ? ok(`${link.where} (${r.status}, handled by the landing page)`) : bad(`${link.where}: ${r.status}`);
    } else if (kind === 'file') {
      r.status === 200 && /json/.test(r.type || '') ? ok(link.where) : bad(`${link.where}: ${r.status} ${r.type || ''}`);
    } else {
      const want = `${SITE.url}${kind === 'en' ? '' : '/' + kind}/${page}/`;
      if ([301, 308].includes(r.status) && r.location === want) ok(`${link.where}`);
      else if ([301, 308].includes(r.status) && r.location && r.location.startsWith(SITE.url + '/')) {
        const s = await head(r.location).catch((e) => ({ status: 0, location: e.message, body: '' }));
        const rel = want.replace(SITE.url, '');
        (s.status === 200 && s.body.includes(JSON.stringify(rel))) || s.location === want ? ok(`${link.where} (via ${r.location})`) : bad(`${link.where}: ${r.status} ${r.location} then ${s.status} ${s.location || ''}, expected ${want}`);
      } else bad(`${link.where}: ${r.status} ${r.location || ''}, expected ${want}`);
    }
  }
}

console.log(failed ? `\n${failed} check(s) failed.` : '\nAll checks passed.');
process.exit(failed ? 1 : 0);
