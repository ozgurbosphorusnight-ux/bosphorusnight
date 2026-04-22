#!/usr/bin/env node
/**
 * Schema.org JSON-LD validation across dist/.
 * Walks every .html file, extracts every <script type="application/ld+json">
 * block, and parses it as JSON. Reports:
 *   - Parse errors (missing brackets, commas, quotes)
 *   - Missing @context / @type
 *   - Invalid @type values (not on the schema.org known-type list)
 *   - Structural issues per common types (Event, Offer, BlogPosting, etc.)
 *
 * Exit code: 0 if all clean, 1 if any error found.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const SCHEMA_TAG_RE = /<script\s+type="application\/ld\+json"\s*>([\s\S]*?)<\/script>/g;

// Known schema.org types actually used in this project. Unknown types warn.
const KNOWN_TYPES = new Set([
  'TravelAgency', 'Organization', 'WebSite', 'VideoObject', 'ImageObject',
  'TouristTrip', 'Event', 'SocialEvent', 'BlogPosting', 'Blog',
  'FAQPage', 'Question', 'Answer', 'BreadcrumbList', 'ListItem',
  'Place', 'PostalAddress', 'GeoCoordinates', 'ContactPoint',
  'Offer', 'PriceSpecification', 'UnitPriceSpecification', 'QuantitativeValue',
  'PerformingGroup', 'Schedule', 'SearchAction', 'WebPage',
  'ItemList', 'CreativeWork', 'Person',
]);

// Minimal required fields per @type (Google Rich Results essentials).
const REQUIRED = {
  Event: ['name', 'startDate', 'location'],
  SocialEvent: ['name', 'startDate', 'location'],
  TouristTrip: ['name'],
  Offer: ['price', 'priceCurrency'],
  BlogPosting: ['headline', 'datePublished'],
  FAQPage: ['mainEntity'],
  VideoObject: ['name', 'contentUrl', 'thumbnailUrl'],
  BreadcrumbList: ['itemListElement'],
  Organization: ['name'],
  TravelAgency: ['name'],
};

function walkHtml(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

function validateObject(obj, issues, file, typePath = '$') {
  const type = obj['@type'];
  if (!type) {
    issues.push({ file, type: 'MISSING_TYPE', message: `${typePath}: @type missing` });
    return;
  }

  const typeArr = Array.isArray(type) ? type : [type];
  for (const t of typeArr) {
    if (!KNOWN_TYPES.has(t)) {
      issues.push({ file, type: 'UNKNOWN_TYPE', message: `${typePath}: @type="${t}" not in known list` });
    }
    const required = REQUIRED[t];
    if (required) {
      for (const field of required) {
        if (!(field in obj)) {
          issues.push({ file, type: 'MISSING_REQUIRED', message: `${typePath}[@type=${t}]: missing required field "${field}"` });
        }
      }
    }
  }

  // Recurse into nested objects and arrays
  for (const [k, v] of Object.entries(obj)) {
    if (k === '@context' || k === '@type') continue;
    if (Array.isArray(v)) {
      v.forEach((item, idx) => {
        if (item && typeof item === 'object') validateObject(item, issues, file, `${typePath}.${k}[${idx}]`);
      });
    } else if (v && typeof v === 'object') {
      validateObject(v, issues, file, `${typePath}.${k}`);
    }
  }
}

function validateFile(file) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(DIST, file);
  const issues = [];
  let blockCount = 0;

  let match;
  SCHEMA_TAG_RE.lastIndex = 0;
  while ((match = SCHEMA_TAG_RE.exec(html)) !== null) {
    blockCount++;
    const raw = match[1].trim();
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      issues.push({
        file: rel,
        type: 'PARSE_ERROR',
        message: `Block #${blockCount}: ${err.message}`,
        preview: raw.slice(0, 80).replace(/\s+/g, ' ')
      });
      continue;
    }

    if (!parsed['@context']) {
      issues.push({ file: rel, type: 'MISSING_CONTEXT', message: `Block #${blockCount}: @context missing` });
    }
    validateObject(parsed, issues, rel, `block#${blockCount}`);
  }

  return { file: rel, blockCount, issues };
}

function main() {
  console.log('🔍 Schema JSON-LD validation başlıyor\n');
  if (!fs.existsSync(DIST)) {
    console.error('❌ dist/ klasörü yok. Önce build çalıştır.');
    process.exit(1);
  }

  const files = walkHtml(DIST);
  console.log(`  ${files.length} HTML dosyası bulundu\n`);

  const start = Date.now();
  const allIssues = [];
  let totalBlocks = 0;
  let cleanFiles = 0;

  for (const file of files) {
    const result = validateFile(file);
    totalBlocks += result.blockCount;
    if (result.issues.length === 0) cleanFiles++;
    else allIssues.push(...result.issues);
  }

  // Group issues by type + message for cleaner reporting (the same bug repeats across 15 langs)
  const grouped = {};
  for (const issue of allIssues) {
    const key = `${issue.type}|${issue.message}`;
    if (!grouped[key]) grouped[key] = { type: issue.type, message: issue.message, files: [], preview: issue.preview };
    grouped[key].files.push(issue.file);
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log('='.repeat(70));
  console.log(`\n📊 Özet`);
  console.log(`  Dosya: ${files.length}  ·  Temiz: ${cleanFiles}  ·  Hatalı: ${files.length - cleanFiles}`);
  console.log(`  Toplam JSON-LD block: ${totalBlocks}`);
  console.log(`  Issue türleri: ${Object.keys(grouped).length}`);
  console.log(`  Süre: ${elapsed}s\n`);

  if (allIssues.length === 0) {
    console.log('✅ Tüm schema blockları geçerli. Google Rich Results için hazır.\n');
    process.exit(0);
  }

  console.log('⚠️  Issue detayları (benzersiz):\n');
  const sorted = Object.values(grouped).sort((a, b) => b.files.length - a.files.length);
  for (const g of sorted) {
    console.log(`  [${g.type}] ${g.message}`);
    console.log(`    Etkilenen dosya sayısı: ${g.files.length}`);
    console.log(`    İlk 3 örnek: ${g.files.slice(0, 3).join(', ')}`);
    if (g.preview) console.log(`    Preview: ${g.preview}...`);
    console.log('');
  }

  const errorCount = sorted.filter(g => g.type === 'PARSE_ERROR' || g.type === 'MISSING_REQUIRED' || g.type === 'MISSING_TYPE').length;
  if (errorCount === 0) {
    console.log('ℹ️  Sadece warning (unknown @type) var, parse/required hata yok → deploy edilebilir.');
    process.exit(0);
  }
  console.log(`❌ ${errorCount} kritik issue türü (parse/required) — düzeltilmeli.`);
  process.exit(1);
}

main();
