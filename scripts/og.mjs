#!/usr/bin/env node
// Renders dist/_og/<lang>.html into src/assets/img/og-<lang>.png (1200x630).
// Needs a local preview server (npm run serve) and Playwright: npm i -D playwright
const { chromium } = await import('playwright').catch(() => {
  console.error('Playwright is not installed. Run: npm i -D playwright');
  process.exit(1);
});
import path from 'node:path';
import { SRC } from './lib/util.mjs';

const base = process.argv[2] || 'http://localhost:4000';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const lang of ['en', 'zh-hans', 'zh-hant', 'ja']) {
  await page.goto(`${base}/_og/${lang}.html`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(SRC, 'assets', 'img', `og-${lang}.png`), type: 'png' });
  console.log(`og-${lang}.png`);
}
await browser.close();
