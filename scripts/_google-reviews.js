/**
 * Shared Google reviews renderer — used by build-home.js (homepage) AND
 * build-pages.js (17 landing pages). Single source so 576 pages stay in sync.
 *
 * Data: assets/data/google-reviews.json (snapshot; refreshed by Hetzner cron).
 * Build READS the file (no API call → works on Vercel). Both scripts call
 * injectGoogleReviews(html, lang) which:
 *   1. replaces <!--GOOGLE_REVIEWS--> with localized Google-style cards
 *   2. replaces {{GRATING}} / {{GREVIEW_COUNT}} / {{GREVIEW_WORD}} stat tokens
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const GREVIEWS = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'assets', 'data', 'google-reviews.json'), 'utf8')
);

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escapeAttr(s) {
  return String(s).replace(/"/g, '&quot;');
}

const GOOGLE_G_SVG = '<svg width="14" height="14" viewBox="0 0 48 48" class="inline-block flex-shrink-0" aria-hidden="true"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>';

// "Read all reviews on Google" — 32 languages (fallback EN).
const REVIEW_BTN = {
  en: 'Read all reviews on Google', tr: "Tüm yorumları Google'da oku",
  de: 'Alle Bewertungen auf Google lesen', es: 'Leer todas las reseñas en Google',
  ru: 'Все отзывы в Google', ar: 'اقرأ كل المراجعات على Google',
  fa: 'همه نظرات را در Google بخوانید', fr: 'Lire tous les avis sur Google',
  it: 'Leggi tutte le recensioni su Google', zh: '在 Google 上查看全部评价',
  ja: 'Google ですべてのレビューを見る', ko: 'Google에서 모든 리뷰 보기',
  hi: 'Google पर सभी समीक्षाएं पढ़ें', ur: 'Google پر تمام جائزے پڑھیں',
  id: 'Baca semua ulasan di Google', ms: 'Baca semua ulasan di Google',
  pl: 'Przeczytaj wszystkie opinie w Google', bg: 'Прочетете всички отзиви в Google',
  ro: 'Citește toate recenziile pe Google', uk: 'Усі відгуки в Google',
  pt: 'Ler todas as avaliações no Google', nl: 'Lees alle reviews op Google',
  el: 'Διαβάστε όλες τις κριτικές στο Google', cs: 'Přečíst všechny recenze na Google',
  hu: 'Összes értékelés a Google-on', sv: 'Läs alla recensioner på Google',
  da: 'Læs alle anmeldelser på Google', no: 'Les alle anmeldelser på Google',
  fi: 'Lue kaikki arvostelut Googlessa', sk: 'Prečítať všetky recenzie na Google',
  sl: 'Preberite vse ocene na Googlu', lv: 'Lasīt visas atsauksmes pakalpojumā Google'
};

// "reviews" (count noun for the stat label "Google · N reviews") — 32 languages.
const REVIEW_WORD = {
  en: 'reviews', tr: 'yorum', de: 'Bewertungen', es: 'reseñas', ru: 'отзывов',
  ar: 'مراجعة', fa: 'نظر', fr: 'avis', it: 'recensioni', zh: '条评价',
  ja: '件のレビュー', ko: '리뷰', hi: 'समीक्षाएं', ur: 'جائزے', id: 'ulasan',
  ms: 'ulasan', pl: 'opinii', bg: 'отзива', ro: 'recenzii', uk: 'відгуків',
  pt: 'avaliações', nl: 'reviews', el: 'κριτικές', cs: 'recenzí', hu: 'értékelés',
  sv: 'recensioner', da: 'anmeldelser', no: 'anmeldelser', fi: 'arvostelua',
  sk: 'recenzií', sl: 'ocen', lv: 'atsauksmes'
};

function buildGoogleReviewsHtml(lang) {
  const fmtDate = (iso) => {
    try { return new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric' }).format(new Date(iso)); }
    catch { return ''; }
  };
  const cards = GREVIEWS.reviews.map((r) => {
    const initials = r.name.trim().split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
    const full = Math.max(0, Math.min(5, r.rating || 5));
    const starRow = '★'.repeat(full) + (full < 5 ? `<span class="text-white/20">${'★'.repeat(5 - full)}</span>` : '');
    const avatar = r.photo
      ? `<img src="${escapeAttr(r.photo)}" alt="${escapeAttr(r.name)}" referrerpolicy="no-referrer" loading="lazy" class="w-10 h-10 rounded-full object-cover flex-shrink-0" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span class="w-10 h-10 rounded-full bg-gold/15 border border-gold/20 text-gold text-xs font-bold items-center justify-center flex-shrink-0" style="display:none">${initials}</span>`
      : `<span class="w-10 h-10 rounded-full bg-gold/15 border border-gold/20 text-gold text-xs font-bold flex items-center justify-center flex-shrink-0">${initials}</span>`;
    return `        <div class="g-review-card bg-white/[0.04] border border-white/10 rounded-2xl p-5">
          <div class="flex items-center gap-3 mb-3">
            ${avatar}
            <div class="min-w-0 flex-grow">
              <div class="flex items-center gap-1.5">
                <span class="text-sm font-semibold text-white truncate">${escapeHtml(r.name)}</span>
                ${GOOGLE_G_SVG}
              </div>
              <div class="flex items-center gap-2 mt-0.5">
                <span class="text-gold text-xs tracking-tight">${starRow}</span>
                <span class="text-white/40 text-[11px]">${fmtDate(r.date)}</span>
              </div>
            </div>
          </div>
          <p class="text-white/80 text-sm leading-relaxed">${escapeHtml(r.text)}</p>
        </div>`;
  }).join('\n');
  const label = REVIEW_BTN[lang] || REVIEW_BTN.en;
  const seeAll = `      <div class="text-center mt-8">
        <a href="${escapeAttr(GREVIEWS.googleUrl)}" target="_blank" rel="noopener nofollow" class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-gold/40 text-sm font-medium transition-all">${GOOGLE_G_SVG}<span>${escapeHtml(label)}</span><span aria-hidden="true">→</span></a>
      </div>`;
  return `      <div class="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">\n${cards}\n      </div>\n${seeAll}`;
}

/**
 * Apply all reviews-related replacements to a page's HTML, for one language.
 * Both build-home.js and build-pages.js call this on their per-lang HTML.
 */
function injectGoogleReviews(html, lang) {
  let out = html.replace('<!--GOOGLE_REVIEWS-->', () => buildGoogleReviewsHtml(lang));
  out = out
    .replace(/\{\{GRATING\}\}/g, String(GREVIEWS.rating))
    .replace(/\{\{GREVIEW_COUNT\}\}/g, String(GREVIEWS.reviewCount))
    .replace(/\{\{GREVIEW_WORD\}\}/g, REVIEW_WORD[lang] || REVIEW_WORD.en);
  return out;
}

module.exports = { GREVIEWS, buildGoogleReviewsHtml, injectGoogleReviews };
