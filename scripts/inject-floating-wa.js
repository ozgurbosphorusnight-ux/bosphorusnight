#!/usr/bin/env node
/**
 * Floating WhatsApp pill'i blog ve city-guide HTML dosyalarına inject eder.
 * Landing pages ve ana sayfa zaten build-pages.js/build-home.js üzerinden alıyor (template = index.html).
 *
 * Hedefler:
 *   - blog/*.html (6 dosya, EN)
 *   - city-guide/*.html (7 dosya, EN)
 *   - src/city-guide-i18n/{lang}/*.html (16 dil × 7 sayfa = 112 dosya)
 *
 * İdempotent: id="floatingWhatsapp" zaten varsa skip.
 * Dil-aware: T['floatingWa.label'] ve T['floatingWa.message']'tan statik metin yazılır.
 *
 * Usage: node scripts/inject-floating-wa.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const WA_NUMBER = '905322442922';
const SENTINEL = 'id="floatingWhatsapp"';

const { T } = require(path.join(ROOT, 'js', 'translations.js'));

// Hedef dosya listesi: [{file, lang}]
const TARGETS = [];

// 1. Blog (EN)
const blogDir = path.join(ROOT, 'blog');
if (fs.existsSync(blogDir)) {
  for (const f of fs.readdirSync(blogDir)) {
    if (f.endsWith('.html')) TARGETS.push({ file: path.join(blogDir, f), lang: 'en' });
  }
}

// 2. City Guide root (EN)
const cgDir = path.join(ROOT, 'city-guide');
if (fs.existsSync(cgDir)) {
  for (const f of fs.readdirSync(cgDir)) {
    if (f.endsWith('.html')) TARGETS.push({ file: path.join(cgDir, f), lang: 'en' });
  }
}

// 3. City Guide multi-dil (src/city-guide-i18n/{lang}/)
const cgI18nDir = path.join(ROOT, 'src', 'city-guide-i18n');
if (fs.existsSync(cgI18nDir)) {
  for (const lang of fs.readdirSync(cgI18nDir)) {
    const langDir = path.join(cgI18nDir, lang);
    if (!fs.statSync(langDir).isDirectory()) continue;
    for (const f of fs.readdirSync(langDir)) {
      if (f.endsWith('.html')) TARGETS.push({ file: path.join(langDir, f), lang });
    }
  }
}

function buildPill(lang) {
  const labelT = T['floatingWa.label'];
  const msgT = T['floatingWa.message'];
  const label = (labelT && labelT[lang]) || (labelT && labelT.en) || "We're online · Chat now";
  const msg = (msgT && msgT[lang]) || (msgT && msgT.en) || "Hi! I'd like to ask about the Bosphorus Night cruise.";
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  // Escape attributes
  const labelEsc = label.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  return `
  <!-- ========== FLOATING WHATSAPP (auto-injected via scripts/inject-floating-wa.js) ========== -->
  <a id="floatingWhatsapp"
     href="${href}"
     target="_blank"
     rel="noopener"
     onclick="if(window.bnTrack){window.bnTrack('Lead',{value:0,currency:'EUR',contact_method:'whatsapp',content_name:'floating_button',language:'${lang}'});}"
     aria-label="Chat on WhatsApp"
     class="group fixed left-12 bottom-20 lg:bottom-6 z-[54] inline-flex items-center pl-11 pr-4 py-1.5 rounded-full border border-[#25D366]/60 bg-[#0a0f1e]/70 backdrop-blur-md hover:border-[#25D366] hover:bg-[#0a0f1e]/90 shadow-lg shadow-black/20 transition-all duration-300">
    <svg class="absolute -left-1 top-1/2 -translate-y-1/2 w-10 h-10 drop-shadow-md" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#25D366" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/>
      <path fill="#FFFFFF" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
    <span class="text-white text-xs font-semibold whitespace-nowrap">${labelEsc}</span>
    <span class="relative flex w-2 h-2 flex-shrink-0 ml-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
    </span>
  </a>
  <script>
  (function(){
    var wa=document.getElementById('floatingWhatsapp');if(!wa)return;
    var f=function(){var b=(window.innerHeight+window.scrollY)>=(document.body.offsetHeight-80);
      wa.classList.toggle('opacity-0',b);wa.classList.toggle('translate-y-4',b);wa.classList.toggle('pointer-events-none',b);};
    window.addEventListener('scroll',f,{passive:true});window.addEventListener('resize',f);f();
  })();
  </script>`;
}

let inserted = 0, skipped = 0, errors = 0;
for (const { file, lang } of TARGETS) {
  try {
    let html = fs.readFileSync(file, 'utf8');
    if (html.includes(SENTINEL)) { skipped++; continue; }
    if (!html.includes('</body>')) {
      console.warn(`  ⚠ SKIP (no </body>): ${path.relative(ROOT, file)}`);
      errors++;
      continue;
    }
    const pill = buildPill(lang);
    html = html.replace('</body>', `${pill}\n</body>`);
    fs.writeFileSync(file, html);
    inserted++;
  } catch (e) {
    console.error(`  ✗ ERROR ${path.relative(ROOT, file)}: ${e.message}`);
    errors++;
  }
}

console.log(`\n✅ Floating WhatsApp inject sonucu:`);
console.log(`   Inserted: ${inserted}`);
console.log(`   Skipped (zaten var): ${skipped}`);
console.log(`   Errors: ${errors}`);
console.log(`   Total hedef: ${TARGETS.length}`);
