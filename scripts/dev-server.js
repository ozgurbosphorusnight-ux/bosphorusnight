#!/usr/bin/env node
/**
 * Tiny static file server for previewing test builds.
 * Serves from project root so absolute paths like /assets/... /js/... resolve.
 * Usage: node scripts/dev-server.js [port]
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = Number(process.argv[2]) || 8080;
const ROOT = path.join(__dirname, '..');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url);
  let pathname = decodeURIComponent(parsed.pathname || '/');
  if (pathname === '/') pathname = '/index.html';

  // Build preview rewrite: JS-driven asset paths (tours.js etc.) resolve
  // relative to page URL. For /dist/{lang|test}/page.html requesting
  // assets/... the URL becomes /dist/{lang}/assets/... which doesn't exist.
  // Strip the /dist/{segment}/ prefix for asset subpaths.
  const m = pathname.match(/^\/dist\/[^/]+\/(assets|js|css|lang|blog)\//);
  if (m) pathname = pathname.replace(/^\/dist\/[^/]+/, '');

  const filePath = path.join(ROOT, pathname);
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end(`404 — ${pathname} yok`);
    }
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime, 'Cache-Control': 'no-cache' });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n🚀 Dev server: http://localhost:${PORT}/`);
  console.log(`\nTest sayfaları:`);
  console.log(`   http://localhost:${PORT}/dist/test/bosphorus-dinner-cruise.html`);
  console.log(`   http://localhost:${PORT}/dist/test/bosphorus-with-kids.html`);
  console.log(`\nAna sayfa (referans):`);
  console.log(`   http://localhost:${PORT}/\n`);
  console.log('Ctrl+C ile durdur.\n');
});
