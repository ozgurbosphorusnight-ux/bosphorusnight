/* lang-redirect.js — runs EARLY (before main.js) to:
 *  1. Detect current URL language
 *  2. On first visit: redirect to browser-language URL if supported
 *  3. On return visit: redirect to user's saved preference if different
 *  4. Expose window.navigateToLang() for the dropdown
 *
 * URL patterns supported:
 *  Production: /  (English root)       /xx/        /xx/slug     /slug
 *  Dev:        /dist/en/  /dist/xx/    /dist/en/slug.html       /dist/xx/slug.html
 */
(function () {
  'use strict';

  // Skip on localhost — dev server only has the English source; redirecting
  // to /tr/ etc. would 404. Production has all 15 langs pre-built.
  var host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local')) {
    return;
  }

  var SUPPORTED = ['en', 'tr', 'de', 'es', 'ru', 'ar', 'fa', 'fr', 'it', 'zh', 'id', 'ms', 'pl', 'bg', 'ro'];
  var STORAGE_KEY = 'bn_lang';

  function getLsGet() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function getLsSet(v) {
    try { localStorage.setItem(STORAGE_KEY, v); } catch (e) {}
  }

  // Detect current language from URL path or <html lang> attr.
  function getCurrentLang() {
    var path = window.location.pathname;
    // Match /dist/xx/ or /xx/ at start
    var m = path.match(/^\/(?:dist\/)?([a-z]{2})(?:\/|$)/);
    if (m && SUPPORTED.indexOf(m[1]) !== -1) return m[1];
    // Fallback to html[lang]
    var htmlLang = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2).toLowerCase();
    if (SUPPORTED.indexOf(htmlLang) !== -1) return htmlLang;
    return 'en';
  }

  // Rewrite pathname for target language.
  function rewritePathForLang(path, targetLang) {
    if (SUPPORTED.indexOf(targetLang) === -1) return path;

    // Case A: /dist/XX/... structure (dev server)
    var m = path.match(/^(\/dist\/)([a-z]{2})(\/.*)$/);
    if (m && SUPPORTED.indexOf(m[2]) !== -1) {
      return m[1] + targetLang + m[3];
    }

    // Case B: /XX/... structure (prod non-english or explicit)
    m = path.match(/^\/([a-z]{2})(\/.*)?$/);
    if (m && SUPPORTED.indexOf(m[1]) !== -1) {
      var tail = m[2] || '/';
      if (targetLang === 'en') return tail || '/';
      return '/' + targetLang + tail;
    }

    // Case C: plain /... (English root in prod)
    if (targetLang === 'en') return path;
    return '/' + targetLang + path;
  }

  function currentPathWithQs() {
    return window.location.pathname + window.location.search + window.location.hash;
  }

  var currentLang = getCurrentLang();
  var stored = getLsGet();

  // Returning user with saved preference different from current URL → redirect.
  if (stored && SUPPORTED.indexOf(stored) !== -1 && stored !== currentLang) {
    var newPath = rewritePathForLang(window.location.pathname, stored);
    if (newPath !== window.location.pathname) {
      window.location.replace(newPath + window.location.search + window.location.hash);
      return;
    }
  }

  // First-time visitor: try to match browser language.
  if (!stored) {
    var browserLang = ((navigator.language || navigator.userLanguage || '') + '').slice(0, 2).toLowerCase();
    if (SUPPORTED.indexOf(browserLang) !== -1 && browserLang !== currentLang) {
      getLsSet(browserLang);
      var newPath2 = rewritePathForLang(window.location.pathname, browserLang);
      if (newPath2 !== window.location.pathname) {
        window.location.replace(newPath2 + window.location.search + window.location.hash);
        return;
      }
    }
    // Otherwise remember what they landed on (prevents repeated detection).
    getLsSet(currentLang);
  }

  // Exposed for dropdown handler.
  window.navigateToLang = function (targetLang) {
    if (SUPPORTED.indexOf(targetLang) === -1) return;
    getLsSet(targetLang);
    var newPath = rewritePathForLang(window.location.pathname, targetLang);
    window.location.href = newPath + window.location.search + window.location.hash;
  };

  // Make current lang visible to main.js so it doesn't re-apply browser detection.
  window.__bnCurrentLang = currentLang;
})();
