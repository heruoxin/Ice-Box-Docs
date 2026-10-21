#!/usr/bin/env node
// Local preview server that mimics GitHub Pages: /x serves x.html or redirects to /x/,
// unknown paths get 404.html with a 404 status. Usage: node scripts/serve.mjs [port]
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { DIST } from './lib/util.mjs';

const port = Number(process.argv[2] || process.env.PORT || 4000);
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.zip': 'application/zip',
  '.apk': 'application/vnd.android.package-archive',
};

const isFile = (p) => fs.existsSync(p) && fs.statSync(p).isFile();

function send(res, file, status = 200) {
  res.writeHead(status, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
  fs.createReadStream(file).pipe(res);
}

http
  .createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    let rel;
    try {
      rel = decodeURIComponent(url.pathname).normalize('NFC');
    } catch {
      rel = url.pathname;
    }
    const full = path.join(DIST, rel);
    if (!full.startsWith(DIST)) return send(res, path.join(DIST, '404.html'), 404);
    if (rel.endsWith('/')) {
      const index = path.join(full, 'index.html');
      if (isFile(index)) return send(res, index);
    } else if (isFile(full)) {
      return send(res, full);
    } else if (isFile(full + '.html')) {
      return send(res, full + '.html');
    } else if (isFile(path.join(full, 'index.html'))) {
      res.writeHead(301, { Location: url.pathname + '/' + url.search });
      return res.end();
    }
    send(res, path.join(DIST, '404.html'), 404);
    console.log(`404 ${rel}`);
  })
  .listen(port, () => console.log(`Ice Box site preview: http://localhost:${port}/`));
