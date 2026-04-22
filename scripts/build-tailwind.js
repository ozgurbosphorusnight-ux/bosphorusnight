#!/usr/bin/env node
/**
 * Build-time Tailwind CSS extraction.
 * Runs the Tailwind CLI against the content globs defined in tailwind.config.js
 * and emits a minified CSS bundle to dist/css/tailwind.css. Replaces the
 * production CDN script (cdn.tailwindcss.com) for faster LCP.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'dist', 'css');
const INPUT = path.join(ROOT, 'src', 'tailwind-input.css');
const OUTPUT = path.join(OUT_DIR, 'tailwind.css');

console.log('🎨 Tailwind CSS build başlıyor\n');

fs.mkdirSync(OUT_DIR, { recursive: true });

const start = Date.now();
try {
  execSync(
    `npx tailwindcss -i "${INPUT}" -o "${OUTPUT}" --minify`,
    { stdio: 'inherit', cwd: ROOT }
  );
  const size = (fs.statSync(OUTPUT).size / 1024).toFixed(1);
  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\n✅ dist/css/tailwind.css (${size} KB, ${elapsed}s)`);
} catch (err) {
  console.error('❌ Tailwind build hatası:', err.message);
  process.exit(1);
}
