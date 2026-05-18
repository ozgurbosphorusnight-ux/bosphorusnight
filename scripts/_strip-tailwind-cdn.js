#!/usr/bin/env node
/**
 * Post-build pass: strip <script src="cdn.tailwindcss.com"> + inline
 * tailwind.config script from every HTML in dist/, replace with a single
 * <link rel="stylesheet" href="/css/tailwind.css">.
 *
 * Why: the CDN runs the full Tailwind JIT engine in the browser (~350 KB JS,
 * render-blocking). dist/css/tailwind.css is the precompiled bundle (~45 KB
 * minified) produced by scripts/build-tailwind.js — same visual output, much
 * less work for the client.
 *
 * Source HTML files (index.html, blog/*.html, city-guide/*.html) keep the CDN
 * reference so local preview (dev-server.js) still works without running the
 * full build pipeline.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

// Match <script src="cdn.tailwindcss.com"></script> followed by an optional
// <script>tailwind.config = {...}</script> inline config block. Preserve any
// leading whitespace so indentation looks correct after replacement.
const CDN_BLOCK = /([ \t]*)<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>(?:\s*<script>\s*tailwind\.config\s*=[\s\S]*?<\/script>)?/g;
const REPLACEMENT_LINK = '<link rel="stylesheet" href="/css/tailwind.css">';

function walkHtml(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, files);
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function main() {
  if (!fs.existsSync(DIST)) {
    console.error(`✗ dist/ yok — önce build-pages/build-home çalıştır`);
    process.exit(1);
  }

  const start = Date.now();
  const files = walkHtml(DIST);
  let replaced = 0;
  let skipped = 0;

  for (const f of files) {
    const html = fs.readFileSync(f, 'utf8');
    if (!html.includes('cdn.tailwindcss.com')) {
      skipped++;
      continue;
    }
    const next = html.replace(CDN_BLOCK, (_, indent) => `${indent}${REPLACEMENT_LINK}`);
    fs.writeFileSync(f, next);
    replaced++;
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`🎨 Tailwind CDN strip: ${replaced} HTML güncellendi, ${skipped} atlandı (${elapsed}s)`);
}

main();
