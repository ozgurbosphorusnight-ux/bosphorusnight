# Oturum Durumu — 2026-04-20 (bosphorusnight site refactoru)

**Okuyunca hatırla, sonra sil. Sırayla devam et.**

## Genel Bağlam

Ana sayfa (bosphorusnight.com) refactoru sürüyor. **Commit+push EN SONDA** yapılacak — şu an her şey lokalde, push'lanmadı.

Stratejik hedef: Site Google'da görünmüyor (robots.txt yok, sitemap yok, Search Console verify yok → SEO kaybı endişesi yok). Büyük refactor güvenli.

**Uzun vadede hedef:** Ana sayfayı 16 dile static HTML olarak çevir (JS i18n kalksın), cruise sayfalarını sil. Ama önce EN master finalize.

---

## ✅ TAMAMLANDI (lokalde, PUSH EDİLMEDİ)

### Ana Yapı
1. **Daytime kartı** komple silindi (ana sayfa + translations)
2. **Sunset komple kaldırıldı** (küçük kart + büyük hero panel + route marker + boarding banner + arrival banner + footer link + tour-type-btn + translation)
3. **"Choose Your Experience" bölümü** komple silindi — sadece Dinner kaldı, section anlamsız
4. **"defaultPackagesGrid"** (3-tier €35/€50/€70 Sunset/Daytime için) silindi
5. Snapshots kaydedildi: `docs/sunset-active-snapshot.md` (restore kaynağı)
6. Claude belleğinde: `memory/sunset_maintenance.md`
7. `#packages` div'ı default visible yapıldı (was hidden), `#dinnerPackagesGrid` + `#dinnerInfoSection` hidden kaldırıldı

### Hero + Nav
8. Hero CTA: "Turları İncele" → **"Turu İncele"** (6 dil)
9. Hero subtitle: "Kabataş & Eminönü · 20:45–23:30" → **"Kabataş · 21:00–00:00"** (6 dil + HTML fallback)
10. Dinner hero büyük buton WhatsApp ikonu **silindi**
11. "Three ways to experience" → **"Pick the experience that fits your mood"** (sayı belirtmeyen)

### Paket Kartları (Standart/VIP)
12. **Card başlıkları**: "Standard/VIP Akşam Turu" → **"Standart Menü / VIP Menü"** (6 dil)
13. **VIP eski fiyat €90 → €92** (40% OFF etiketi doğru: €92 × 0.6 = €55.20 ≈ €55)
14. **çupra → çipura** (6 dil item3)
15. **VIP ana yemek**: "antrikot veya biftek" → **"dana bonfile veya antrikot"**
16. Ana yemek satırı: "Mevsim salatalı ana yemek" → **"Ana yemek (mevsim salatasıyla birlikte, birini seçin)"**
17. **Vejetaryen tabağı** ana yemek satırına eklendi: "falafel, patates tavası, bulgur pilavı, sebze ve soğan halkası" (6 dil, her iki kartta)
18. "pastırma ve kaşar" → **"dana pastırması ve kaşar peyniri"** (6 dil)
19. "Helal · Vergiler dahil" → **"Helal"** (vergiler dahil silindi, 6 dil)
20. **"2 saat önce ücretsiz iptal" pill** silindi (her iki karttan)
21. item7 "Açık güverte ve panoramik seyir terası" 6 dile çevirildi (önceden İngilizce fallback'te kalmıştı)

### Bilgi Bölümleri
22. **Cruise Route**: Beylerbeyi Palace → **Üsküdar → Maiden's Tower (visible from distance)** → Kabataş Pier
23. **Meeting Point** subtitle: "via WhatsApp after booking" → **"via WhatsApp, Telegram or WeChat after booking"** (meeting.share yeni key, 6 dil)
24. **Know Before You Go**: "Vegetarian, pescetarian and halal dietary options available" satırı **silindi** (vejetaryen pakette var, helal pill'de)
25. **"Not Allowed"**: "Outside food & beverages" **silindi** (sadece Pets + Smoking indoors kaldı)
26. **Drop-off** metni değişti:
    - "approximately 23:30" → **"between 23:30 and 00:00"**
    - Ek: "the same driver who picked you up will be waiting at the pier to take you back to your hotel"
    - dropoff.title + dropoff.desc yeni keyler (6 dil + HTML fallback)
27. **Nasıl Çalışır** bölümü:
    - Subtitle: "WhatsApp'tan yazın veya arayın" → **"Bize yazın veya arayın"** (6 dil)
    - Adım 1 başlık: "Turunu Seç" → **"Rezervasyon Detaylarını Girin"** (6 dil)
    - Adım 1 desc: "Seçilmiş koleksiyonumuzdan..." → **"Tarih, kişi sayısı ve paketi (Standard veya VIP) belirleyin"** (6 dil)
    - Adım 2 desc: "WhatsApp'tan yazın..." → **"Yazılı veya sesli — size uygun şekilde iletişime geçin"** (6 dil)
28. **arrival.time.night**: "~23:30" → **"23:30–00:00"** (6 dil)

### Saat/Süre Düzeltmeleri (önceki sessionlardan)
- 20:45 → 21:00 her yerde (boarding)
- 3.5 saat → 3 saat her yerde
- 23:30 (dönüş) → 00:00 (doğru hesap: 21:00 + 3 saat)

---

## ⏳ PENDING (bu oturumda yarım kalanlar)

### 1. "What's Included" accordion kartları detail metinlerinde WhatsApp kaldır + içerik güncelle

Özgür net söyledi: **"hepsi whatsuptan ı kaldır"** — tüm WhatsApp mentionları kaldırılacak.

Düzeltilecek translation keyleri (6 dil her biri):

- **`incl.cruise.detail`** (Boğaz Gece Turu card):
  - Mevcut: "Kız Kulesi, Dolmabahçe Sarayı, Boğaz Köprüsü, Beylerbeyi Sarayı, Ortaköy Camii ve Rumeli Hisarı'nın önünden geçin. Kabataş'tan 21:00'te kalkar, 00:00'da döner."
  - Yeni (önerim): "Dolmabahçe Sarayı, Çırağan, Ortaköy Camii, Boğaz Köprüsü, Rumeli Hisarı, Beylerbeyi Sarayı ve Üsküdar'ın önünden geçin; Kız Kulesi uzaktan görünür. Kabataş'tan 21:00'de kalkar, 23:30–00:00 arası döner."
  - **User asked:** "ilk kartta üsküdar ekle az önceki rota düzenlemesi gibi yap yani" — Cruise Route ile aynı yapı

- **`incl.entertainment.detail`**:
  - Mevcut TR: "Canlı şarkıcı performansları, halk dansları ve oryantal dans ile geleneksel Türk gecesi şovu ve DJ müziği. **Eğlence 21:00'e kadar devam eder.**"
  - Yeni: "Eğlence 21:00'e kadar" → **"Eğlence tur sonuna kadar devam eder"** (6 dil)
  - **User:** "eğlence 21:00 e kadar devam eder kötü ve yanlış bir ifade. Tur sonuna kadar devam eder. yap"

- **`incl.transfer.detail`**:
  - Mevcut TR: "Sultanahmet, Taksim ve Beyoğlu bölgelerinden gidiş-dönüş otel servisi mevcuttur. Rezervasyon sırasında ekstra olarak eklenebilir. Otel konumunuzu WhatsApp'tan belirtin."
  - Yeni: "Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy ve Beyoğlu bölgelerinden gidiş-dönüş otel servisi mevcuttur. Rezervasyon sırasında ekstra olarak eklenebilir. Otel konumunuzu belirtin."
  - **User:** "bizim rotaları gir ve whatsup ı kaldır otel konumunuzu belirtin kalsın sadece"

- **`incl.special.detail`**:
  - Mevcut TR: "Özel bir gün mü kutluyorsunuz? Mum ve çiçeklerle romantik masa düzeni (+€15) ve doğum günü kutlamaları sunuyoruz. WhatsApp'tan bize yazın!"
  - Yeni: "...sunuyoruz. **Bize bildirin**." (6 dil)
  - **User:** "özel günlerdeki whatsup ı da kaldır. bize bildirin yazsın"

- **`why.before.desc`** (Öncesinde card, trust section):
  - Mevcut TR: "Mükemmel paketi seçmenize yardım eder, tüm sorularınızı cevaplar ve rezervasyonunuzu onaylarız — hepsi WhatsApp'tan."
  - Yeni: "... — mesaj veya telefonla." (6 dil) — WhatsApp kaldır
  - **User:** "hepsi whatsuptan ı kaldır"

- **`incl.support.detail`**:
  - WhatsApp kaldır, genel "bize ulaşın" ifadesi

### 2. Genel WhatsApp taraması

Tüm translations.js + index.html'de **"WhatsApp"** geçen yerleri tara, gereksizleri kaldır. Marka olarak gereken yerlerde (örn. WhatsApp logosu olan iletişim butonu) kalır.

### 3. "What's Included" accordion JS davranışı

- User: "tıklayınca 3 ü birden açılıyor sorun yok açılsın ama bari içeriği gözüksün"
- Mevcut JS `initIncludedAccordion` (js/main.js:1430): tıklayınca önce hepsini kapatır, sonra tıklananı açar. Accordion tek-kart davranışı.
- User'ın istediği: 3 kart bir arada açılsa bile içerik gözüksün.
- Action: Muhtemelen içerik görünür — user ekranda sadece tek kart açılmış görüyor olabilir. Test etmek lazım. Eğer gerçekten içerik eksikse JS'i revize et.

### 4. Dil karışımı (önceki session'dan deferred)

Kartlarda bazı addon metinleri hâlâ İngilizce (user "dil kısmını sonra halledicez" dedi). Sonra:
- "2 Glasses of Alcohol" → "2 Kadeh Alkol"
- "Unlimited Alcohol" → "Sınırsız Alkol"
- "Choose from local wine, beer, rakı, vodka, or gin" → TR versiyon
- "Unlimited local wine, beer, rakı, vodka, gin all night" → TR
- "40% OFF" → "%40 İNDİRİM"

---

## 🔜 SONRAKI BÜYÜK AŞAMALAR (sıra)

1. **Aşama 1: Eksik 10 dil için çeviri** — translations.js şu an 6 dil. 10 dil eksik: bg, ro, zh, fr, it, ja, ko, ms, id, ur, hi. Claude ile çeviri üret, Özgür review.
2. **Aşama 2: Build script** — `scripts/build-i18n-pages.js` — index.html template'inden 16 static HTML üret (`/tr/index.html`, `/de/index.html`, vs.)
3. **Aşama 3: Cruise sayfalarını sil + redirect** — 68 cruise HTML dosyasını sil, `/dinner-cruise` → `/` redirect
4. **Aşama 4: SEO altyapı** — `/robots.txt` + `/sitemap.xml` + Google Search Console (Özgür yapacak)
5. **Aşama 5: EN SONDA — commit + push + test** — user "push en son"

---

## 🔒 Kritik Kurallar

- **Push YAPMA** — user "push en son" dedi, tüm değişiklikler bittiğinde tek seferde push
- **AI ile çelişirse uyar** — fiyat, saat, politika değişirse AI sistem prompt'u da güncellenmeli
- **Snapshot kaydet** — bir şey silindiğinde `docs/sunset-active-snapshot.md`'e restore için kaydet
- **Tekne adı**: "Bosphorus Night Cruise" (marka). Gerçek tekne: Tosunpaşa.

## 🔑 Anahtar Dosyalar

- `c:\Users\DELL\Desktop\bosphorusnight\index.html` — ana sayfa
- `c:\Users\DELL\Desktop\bosphorusnight\js\translations.js` — 6 dil çeviri
- `c:\Users\DELL\Desktop\bosphorusnight\js\main.js` — JS logic
- `c:\Users\DELL\Desktop\bosphorusnight\js\tours.js` — tour config
- `c:\Users\DELL\Desktop\bosphorusnight\docs\sunset-active-snapshot.md` — restore snapshot

## 📋 Uncommitted Changes (git status)

```
M CLAUDE.md (AI side? check)
M cruises/dinner-cruise.html + diğer SEO sayfaları (önceki session)
M index.html (bu session + önceki)
M js/main.js
M js/tours.js
M js/translations.js
? docs/sunset-active-snapshot.md (yeni)
? memory/sunset_maintenance.md (Claude memory — bu repo dışı)
? scripts/fix-dinner-time-duration.mjs + fix-prices.mjs (yeni)
```

## 🧭 Okuyunca Ne Yap

1. Bu dosyayı oku (zaten okudun)
2. Son user mesajına göre **PENDING listesinden** devam et:
   - User "hepsi whatsuptan ı kaldır" dedi — tüm incl.*.detail + why.before.desc + incl.support.desc keylerinden WhatsApp kaldır
   - User "dönüş 23:30 / 00:00 arası" dedi — **tamam, `arrival.time.night` zaten güncellendi** ama user şimdi tekrar belirtti, **aynı değer**. Kontrol et.
   - User ilk cruise card (Boğaz Gece Turu) detail'ına Üsküdar ekle
   - User entertainment'ta "21:00'e kadar" → "tur sonuna kadar" değişikliği istedi
   - User transfer zones gerçek 12 semt istedi
3. Tüm bu pending düzeltmeleri **tek bulk script ile** yap (daha hızlı)
4. Bitince bu dosyayı **SİL** (`docs/session-state-2026-04-20.md`)
5. Sonra user sırayla devam eder

## 🚨 UYARI

**Push YAPMA** — lokalde kalsın. User tüm fix'ler bitince tek push yapacağız.
