/**
 * Tek kaynak (single source of truth) analytics snippet.
 *
 * Tüm sayfalara (anasayfa + 17×15 landing) tek elden enjekte edilir:
 * - Google Analytics 4 (GA4) — site trafiği ölçümü
 * - Google Ads conversion tag — reklam dönüşüm takibi
 * - Meta Pixel — Facebook/Instagram reklam dönüşüm takibi
 *
 * Drift kuralı: ID değişirse SADECE bu dosya değişir, build-home.js + build-pages.js
 * otomatik yeni snippet'i alır. CLAUDE.md §5.A Madde 13 (GA4 fix) ile aynı pattern.
 *
 * Pixel ID henüz oluşturulmadıysa META_PIXEL_ID null bırak, snippet oluşmaz.
 * Pixel ID gelince doldur → build çalıştır → tüm sayfalara yansır.
 */

const GA4_ID = 'G-P09XEBMNWE';                      // Google Analytics 4
const GOOGLE_ADS_ID = 'AW-18073952031';              // Google Ads conversion tag
const GOOGLE_ADS_WHATSAPP_LABEL = 'nyO1CLmfrZgcEJ--qqpD'; // WhatsApp click conversion label
const META_PIXEL_ID = '1504423541313272';            // Bosphorus Night Web — 5 May 2026

/**
 * <head>'e enjekte edilecek tam analytics snippet.
 * Idempotent: tüm gtag/fbq tanımları guard'lı, çift inject olsa bile çakışma yok.
 */
function buildAnalyticsHead() {
  const parts = [];

  // ---- GA4 + Google Ads (tek gtag.js bootstrap) ----
  parts.push(`
  <!-- Analytics — auto-generated, scripts/_analytics-snippet.js -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA4_ID}');
    gtag('config', '${GOOGLE_ADS_ID}');

    // Reusable: Google Ads WhatsApp/Telegram click conversion
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof(url) != 'undefined') { window.location = url; }
      };
      gtag('event', 'conversion', {
        'send_to': '${GOOGLE_ADS_ID}/${GOOGLE_ADS_WHATSAPP_LABEL}',
        'value': 1.0,
        'currency': 'TRY',
        'event_callback': callback
      });
      return false;
    }
    window.gtag_report_conversion = gtag_report_conversion;
  </script>`);

  // ---- Meta Pixel (sadece ID varsa) ----
  if (META_PIXEL_ID) {
    parts.push(`
  <!-- Meta Pixel -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${META_PIXEL_ID}');
    fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1"
    alt=""/></noscript>`);
  }

  return parts.join('\n');
}

/**
 * Wizard / CTA tıklama event'leri için helper. Site script'lerinde çağrılır.
 *
 * Browser'da window.bnTrack(eventName, params) olarak kullanılır.
 * GA4 + Google Ads + Meta Pixel hepsine paralel fire eder.
 *
 * Bu helper window'a bir kere yazılır (bnTrack), HTML body sonu civarında
 * inject edilir, idempotent.
 */
function buildAnalyticsBodyEnd() {
  return `
  <!-- Analytics tracking helper — bnTrack(eventName, params) -->
  <script>
    (function(){
      if (window.bnTrack) return;
      window.bnTrack = function(eventName, params){
        params = params || {};
        try {
          if (window.gtag) {
            window.gtag('event', eventName, params);
          }
        } catch(e){}
        try {
          if (window.fbq) {
            // Standard event isimleri (ViewContent, AddToCart, InitiateCheckout, Purchase, Lead)
            // veya custom event olarak gönder
            var standardEvents = ['ViewContent','AddToCart','InitiateCheckout','Purchase','Lead','Search','CompleteRegistration'];
            var fbEventType = standardEvents.indexOf(eventName) >= 0 ? 'track' : 'trackCustom';
            window.fbq(fbEventType, eventName, params);
          }
        } catch(e){}
      };
    })();
  </script>`;
}

/**
 * SADECE Meta Pixel snippet. build-home.js için (root index.html'de gtag zaten var,
 * sadece Pixel ekleniyor). buildAnalyticsHead'ten gtag kısmı çıkarılmış hali.
 */
function buildMetaPixelOnly() {
  if (!META_PIXEL_ID) return '';
  return `
  <!-- Meta Pixel — auto-generated, scripts/_analytics-snippet.js -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${META_PIXEL_ID}');
    fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1"
    alt=""/></noscript>`;
}

module.exports = {
  GA4_ID,
  GOOGLE_ADS_ID,
  META_PIXEL_ID,
  buildAnalyticsHead,        // Tam paket (GA4 + Ads + Pixel) — build-pages.js için
  buildMetaPixelOnly,        // Sadece Pixel — build-home.js için (gtag zaten root'ta)
  buildAnalyticsBodyEnd,     // bnTrack helper — her sayfaya </body> öncesi
};
