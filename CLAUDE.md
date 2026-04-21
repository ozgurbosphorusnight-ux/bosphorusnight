# CLAUDE.md — Bosphorus Night AI Project

Bu dosya projenin kalıcı bellek dosyasıdır. Her yeni Claude Code oturumunda ilk olarak bu dosya okunur. Yeni bir şey öğrenildiğinde veya karar verildiğinde buraya eklenir.

---

## 1. PROJE KİMLİĞİ

- **İş:** Bosphorus Night — İstanbul lüks Boğaz akşam yemekli tekne turu
- **Site:** www.bosphorusnight.com
- **Sahip:** Özgür
- **Lokasyon:** İstanbul, Türkiye
- **TÜRSAB Lisans:** A-17672
- **Müşteri profili:** Uluslararası turistler (EN, TR, DE, ES, RU, AR)
- **Rating:** 4.8★ / 11.317 yorum
- **Rakipler:** Mega Lüfer, Bosphorus Cruise, Bosporus Cruise, Dinner Cruise Bosphorus, Tourlance, Bosfor, Pereme, Turna

---

## 2. PROJENİN AMACI

**Tam otonom AI sistemi.** Özgür hiçbir müşteriyle doğrudan muhatap olmayacak. AI tüm operasyonu yönetecek:

1. Siteden form → WhatsApp/Telegram/WeChat'e mesaj düştüğünde cevap verecek
2. Satış konuşması → rezervasyon → bilet üretimi
3. Tur öncesi teyit mesajları
4. Transfer 30 dk kala bildirim
5. Tur sırası check-in
6. Tur sonrası teşekkür + Google yorum + video mesaj talebi
7. Cevaplamayan müşterilere akıllı takip
8. İkinci satış, retention, "arkadaşını getir"
9. Telefon (ileride) — gelen/giden arama
10. Reklamlar (ileride) — Meta + Google + TikTok otomatik yönetim

**Özgür'ün günlük yükü:** 10 dakika. Sabah WhatsApp'a günlük özet düşer, onay kuyruğundaki kritik kararlara bakar.

---

## 3. ÜRÜN VE FİYATLAR

### Turlar

| Kod | Tur | Süre | Kalkış | Fiyat | Orijinal | Maliyet | Marj |
|---|---|---|---|---|---|---|---|
| DAYTIME_STD | Daytime Cruise | 1.5 saat | 12:00 | €20 | — | ⏳ bekleniyor | — |
| SUNSET_STD | Sunset Cruise | 3 saat | 17:30 | €35 | — | ⏳ bekleniyor | — |
| DINNER_STD | Standard Dinner Cruise | 3 saat | 21:00 | €24 | €40 | €18 | €6 |
| DINNER_VIP | VIP Dinner Cruise | 3 saat | 21:00 | €55 | €90 | €40 | €15 |

**Buluşma:** Kabataş İskelesi. Giriş 20:00'den itibaren, kalkış 21:00. Ödeme: Pay on the boat (ön ödeme yok).

**Rota:** Dolmabahçe → Çırağan → Ortaköy → Bebek → Rumeli Hisarı → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş

### Eklentiler

Eklentiler dinner paketlerine **ek delta fiyat** olarak uygulanır — toplam paket fiyatı değildir.

| Kod | İsim | Satış | Maliyet | Marj | Tip |
|---|---|---|---|---|---|
| ALCOHOL_2GLASS | 2 bardak alkol | €15 | €10 | €5 | per_person |
| ALCOHOL_UNLIMITED | Sınırsız alkol | €30 | €20 | €10 | per_person |
| HOTEL_TRANSFER | Otel transferi | €10 | €5 | €5 | per_person |
| ROMANTIC_TABLE | Romantik masa | €15 | €10 | €5 | per_booking |

**Örnek:** DINNER_STD (€24) + ALCOHOL_UNLIMITED (€30) = **€54/kişi** satış.

**PROPOSAL_PACKAGE kaldırıldı** — artık standart paket olarak satılmıyor. Müşteri "evlilik teklifi" talep ederse eskalasyona gider (§ 8).

### Standart Dinner Menüsü
10 çeşit meze, sıcak başlangıç, ana yemek (salmon/levrek/tavuk/köfte), dondurmalı pasta, sınırsız meşrubat, Mevlana + 5 halk oyunu + oryantal + canlı müzik + DJ.

### VIP Dinner Menüsü
15+ premium meze, ana yemek eki (rib-eye, dana bonfile), sahneye yakın masa, VIP servis.

### Çocuk Politikası (2026-04-20 netleştirildi)

| Yaş | Paket fiyatı | Transfer |
|---|---|---|
| 0-3 (dahil) | Ücretsiz | Ücretsiz |
| 4-8 (dahil) | %50 indirimli | Normal (€10) |
| 9+ | Tam fiyat | Normal (€10) |

**Sınır:** 3 yaş dahil ücretsiz, 4'e girdiyse indirimli başlar; 8 dahil indirimli, 9'a girdiyse tam fiyat.

### İptal
2 saat öncesine kadar ücretsiz iptal, pay on boat olduğu için para iadesi konu değil.

### Transfer Kuralı (2026-04-20 netleştirildi)
Aynı gün (tur tarihi = bugün) için saat dilimleri:
- **00:00-17:00** → normal, AI kendisi alır
- **17:00-19:30** → **gri bölge**: AI Özgür'e escalation, Özgür Telegram'dan "al/reddet" komutu verir (Aşama 4 sonrası). Şimdilik default: AI reddeder.
- **19:30-21:00** → transfer imkansız, müşteri Kabataş'a kendi gelirse yetişir
- **21:00+** → bugünün turu kalktı

Yarın veya sonraki tarih için transfer her zaman mümkün (saat sınırı yok).

---

## 4. 10 AŞAMALI İNŞA PLANI

| # | Aşama | Durum |
|---|-------|-------|
| 0 | Hazırlık (hesaplar) | ✅ BİTTİ |
| 1 | Veri katmanı (Supabase) | ✅ BİTTİ |
| 2 | Backend iskelet (Node.js + Express) | ✅ BİTTİ |
| 3 | AI beyin (Claude API + prompt + hafıza) | ✅ BİTTİ — Mode A + Mode B parite, 5 iyileştirme (A-E) 2026-04-19'da tamamlandı. Canlı test geçti. |
| 4 | WhatsApp sales agent MVP | 🔴 AKTİF — Twilio + Meta onay sürecine başlanacak |
| 5 | Güvenlik ağları (onay, kill switch, anomali) | ⏳ |
| 6 | Operation agent (teyit, takip, transfer) | ⏳ |
| 7 | Dashboard + günlük rapor | ⏳ |
| 8 | Çoklu kanal (Telegram, WeChat) + retention | ⏳ |
| 9 | Voice agent (Vapi + ElevenLabs) | ⏳ |
| 10 | Ads agent (Meta + Google + TikTok) | ⏳ |

**Kural:** Bir aşama bitmeden sonrakine geçilmez. Her aşama sonunda canlı test.

---

## 5. TECH STACK — KESİNLEŞMİŞ KARARLAR

### AI Beyin
- **Claude API (Anthropic)** — tüm AI konuşmaları
- Ana model: `claude-sonnet-4-5`
- Karmaşık kararlar: `claude-opus-4-7`
- **Prompt caching zorunlu** — maliyet %60-70 düşüyor
- GPT / Gemini KULLANILMAYACAK

### Backend
- Node.js 20 + Express
- Hetzner VPS (CX22, €4.51/ay, Nuremberg) — Aşama 2 sonunda
- PM2 process manager
- nginx reverse proxy + Let's Encrypt SSL
- Subdomain: `api.bosphorusnight.com`

### Veri
- **Supabase (PostgreSQL)** — Frankfurt, **tek proje** (site + AI birleşti 2026-04-17)
- Proje: `bosphorus-ai`
- URL: `https://kknbiemjtcfpuznyptai.supabase.co`
- Site env vars (Vercel) da bu projeye bağlı — hem admin panel hem AI beyin aynı DB
- Eski `bosphorusnight` Supabase'i kullanılmıyor (paused'a alınacak)
- Airtable KULLANILMIYOR

### İletişim Kanalları
- **Twilio → WhatsApp Business API** (Meta onayı bekleniyor)
- Telegram Bot API (Aşama 8)
- WeChat Official Account (Aşama 8)
- **Vapi.ai + ElevenLabs** → telefon (Aşama 9)

### Dashboard & Orkestrasyon
- **Retool** — kontrol paneli (Aşama 7)
- **n8n (self-hosted)** — scheduled jobs (Aşama 6+)
- Make.com KULLANILMIYOR

### Geliştirme
- VS Code + Claude Code
- GitHub (private repo)
- Git version control
- Windows lokal makine

---

## 6. VERİTABANI ŞEMASI — 17 TABLO

Tek Supabase'de (bosphorus-ai). Site ile AI birleşti 2026-04-17. Seed data yüklü (2 paket + 4 eklenti). DAYTIME_STD ve SUNSET_STD için maliyet bekleniyor.

### AI Tabloları (9)
1. **customers** — müşteri (phone UNIQUE, preferred_language, tags, customer_type). Site uyumluluğu için `language`, `last_contact`, `first_contact` generated kolonlar; `hotel`, `hotel_address` plain shim.
2. **packages** — paket (code, tour_type, tier, name_translations jsonb, **description_translations jsonb**, price_eur, cost_eur, inclusions jsonb)
3. **addons** — eklenti (code, name_translations jsonb, **description_translations jsonb**, price_type: per_person/per_table/per_booking)
4. **availability** — tarih bazlı doluluk (date + package_id UNIQUE)
5. **reservations** — rezervasyon (reservation_code, margin_eur GENERATED, status, ai_generated)
6. **conversations** — sohbet (customer_id, channel, status, summary, message_count)
7. **messages** — mesaj (direction, sender, content, input_tokens, output_tokens, cost_eur)
8. **escalations** — eskalasyon (reason, priority, ai_summary, suggested_response, status)
9. **system_logs** — audit trail (level, source, event_type, metadata jsonb)

### Site Tabloları (8 — 2026-04-17'de taşındı)
10. **boats** — tekneler (3 kayıt: Tosunpaşa, Lüfer, AMOR). BIGSERIAL id, slug UNIQUE, login_code + owner_code.
11. **admin_users** — admin panel kullanıcıları (2 kayıt: ozgur/admin_sahip, personel1/admin_personel). BIGSERIAL id.
12. **competitors** — rakip firmalar (8 kayıt). BIGSERIAL id, domain UNIQUE.
13. **competitor_scans** — Gemini tarama sonuçları (36 kayıt). raw_data + packages jsonb.
14. **competitor_price_history** — fiyat değişim geçmişi (şu an boş).
15. **competitor_reports** — Claude analiz raporları (7 kayıt). recommendations jsonb.
16. **transactions** — tekne cari hareketleri. **reservation_id UUID** (site'ta BIGINT'ti).
17. **settings** — key-value ayarlar (2 kayıt: Google Ads refresh + access token).

### Shim Kolonları (migration 004 — site kodu uyumluluğu)
Site kodu eski kolon isimlerini bekliyor, AI schema farklı:
- `reservations`: `cruise_date` ← tour_date, `guests` ← adults+children+infants, `total_price` ← total_price_eur, `special_request` ← special_requests (hepsi GENERATED). `customer_phone`, `customer_name`, `package`, `currency`, `notes` plain (INSERT'te elle).
- `customers`: `language` ← preferred_language, `last_contact` ← last_contact_at, `first_contact` ← first_contact_at (GENERATED). `hotel`, `hotel_address` plain.
- Long-term: Aşama 3-4'te site kodu AI schema'ya tam adapte olunca shim'ler silinebilir.

### Yüklenen Seed Data
- 2 paket yüklendi: DINNER_STD, DINNER_VIP (11 dilde isim, tr+en açıklama, kategorili inclusions)
- 4 eklenti yüklendi: ALCOHOL_2GLASS, ALCOHOL_UNLIMITED, HOTEL_TRANSFER, ROMANTIC_TABLE
- **Bekleyen:** DAYTIME_STD ve SUNSET_STD (maliyet netleşince eklenecek)
- **Kaldırılan:** PROPOSAL_PACKAGE (satışta değil, sadece eskalasyon)

### Yeni Kolon (Aşama 2'de eklendi)
- `packages.description_translations` (jsonb) ve `addons.description_translations` (jsonb) — migration 001
- Pattern: `name_translations` ile aynı. Şimdilik 2 dilde dolu (tr, en); 9 dili Claude anlık çevirir.

### Trigger'lar
Tüm `updated_at` alanları otomatik güncellenir.

### İndeksler
customers.phone, customers.last_contact_at, packages.is_active, availability.date, reservations.customer_id, reservations.tour_date, reservations.status, conversations.customer_id, conversations.last_message_at, messages.conversation_id, messages.created_at, escalations.status, escalations.priority, system_logs.timestamp, system_logs.level.

---

## 7. KRİTİK PRENSİPLER — HER ZAMAN UYGULANACAK

1. **Hiçbir şey hardcoded değil.** Fiyat/paket/prompt hepsi Supabase'de veya `.env`'de.
2. **Prompt caching zorunlu.** `cache_control: {"type": "ephemeral"}` her çağrıda.
3. **Her aksiyon loglanır.** `system_logs` veya `messages` tablosuna.
4. **Güvenlik ağları default açık.** Onay kuyruğu + kill switch + anomali algılama.
5. **11 dil desteklenir.** en, tr, de, es, ru, ar, fr, it, zh, hi, ur. Paket isimleri 11 dilde Supabase'de; açıklamalar 2 dilde (tr, en) + Claude anlık çeviri. Dil otomatik algılanır.
6. **Hata toleransı düşük.** Try/catch her yerde, fallback mesajları hazır.
7. **Özgür gibi konuşur.** Bot gibi değil. Değişken gecikmeler (2-5 sn), doğal bölmeler.
8. **Token/maliyet kaydı.** Her Claude çağrısının Euro maliyeti `messages`'a.
9. **Küçük adımlar.** Her aşama canlı test olmadan kapanmaz.
10. **Özgür müşteriyle konuşmaz.** Bu yüzden eskalasyon > satıştan önemli.

---

## 8. ESKALASYON TETİKLEYİCİLERİ

Bu durumlarda AI cevap vermez, Özgür'e Telegram/WhatsApp bildirimi gider:

- **Bloklanmış durumlar** (AI rezervasyon oluşturmaz, Özgür karar):
  - Şikayet sinyali, agresif müşteri
  - Özel tekne talepleri (30+ kişi)
  - Evlilik teklifi talebi (AI önerir, müşteri onaylarsa escalation)
  - Menü dışı özel istek (kosher, alerji)
  - Bot 2 denemede anlamadıysa
  - Müşteri "insanla konuşmak istiyorum"
  - Fiyat pazarlığı
  - Tur öncesi 2 saat kala iptal/değişiklik
- **Bildirim gider ama AI satışa devam eder** (Özgür komut verirse müdahale):
  - €500+ rezervasyon
  - 30+ kişi grup (büyük grup, otomatik onay)
  - Blocked adres için transfer ısrarı
  - Fiyat uyuşmazlığı €10+ delta (wizard vs DB)
  - Transfer bölge dışı reddetme

---

## 9. "BOT GİBİ KONUŞMAMA" STRATEJİSİ

- Sistem promptuna Özgür'ün 20-30 gerçek WhatsApp konuşması eklenecek (sonra)
- Değişken cevap gecikmeleri (2-5 saniye)
- "Typing..." göstergesi aktif
- Tek uzun mesaj yerine 2-3 kısa mesaj
- Emoji dozunu müşterinin tarzına göre ayarla
- İlk cevapta "Merhaba, Bosphorus Night'tan Özgür" değil, doğrudan soruya gir

---

## 10. EKONOMİK BAĞLAM

### Birim ekonomi
- Satış: €24/kişi (Dinner Standard)
- Maliyet: €18/kişi (geçici)
- Brüt marj: €6/kişi = %25
- Ortalama rezervasyon: ~2.8 kişi
- Rezervasyon başı brüt kâr: ~€17

### AI operasyon maliyeti
- Rezervasyon başına ~€0.43 (prompt caching ile)
- Brüt kârın %2.5'i — çok sağlıklı

### Reklam gerçekliği
- Sağlıklı reklam maliyeti: €8-12 / rezervasyon
- €15 üstü tehlikeli, €16 üstü zarar
- İlk 3 ay reklama bütçe YOK

### Strateji
- Organik trafiğin dönüşüm oranını %30'dan %50'ye çıkar
- Upsell sıkı (romantik masa, transfer, alkol, VIP yükseltme)
- Retention ile 2. kez gelen müşteriyi çoğalt
- Reklam Aşama 10'da

### Hacim hedefi
- Başlangıç: 50 rez/ay
- 6 ayda 100-200 rez/ay
- 200+ rez/ay üstünde ciddi kâr

---

## 11. TASARIM PATTERN'LARI

### Modüler yapı
Her ajan ayrı dosya. Orchestrator → ajanları çağırır → her ajan tek iş yapar.

### Repository pattern
`src/db/queries/` içinde her tablo için query fonksiyonları. İş mantığı Supabase'e doğrudan bağlı değil.

### Channel adapter pattern
`src/channels/whatsapp.js`, `telegram.js`, `wechat.js` — aynı interface (sendMessage, receiveMessage). Orchestrator kanalı bilmez.

### Prompt versioning
`src/claude/prompts/` içinde .md dosyaları. Her prompt versiyonlu.

### Error handling
Her async fonksiyon try/catch. Hatalar `system_logs`'a. Kritik hatalarda Özgür'e bildirim.

### Graceful degradation
Claude API down → fallback mesaj. Supabase down → in-memory queue + alarm. Hiçbir müşteri cevapsız kalmaz.

---

## 12. DOSYA YAPISI

```
bosphorus-night-ai/
├── CLAUDE.md             (bu dosya — proje belleği)
├── .env                  (secret, git'e girmez)
├── .env.example          (şablon)
├── .gitignore
├── package.json
├── README.md
├── src/
│   ├── index.js          (Express entry)
│   ├── config.js         (env parser)
│   ├── db/
│   │   ├── supabase.js   (client wrapper)
│   │   └── queries/      (tablo bazlı query'ler)
│   ├── channels/         (whatsapp [Aşama 4], telegram, wechat, web-form)
│   ├── agents/           (sales [Mode A+B], orchestrator, ops, voice)
│   ├── claude/           (client, system-prompt, confirmation-prompt, intent-classifier, memory, tools/)
│   │   └── tools/        (check-availability, calculate-price, create-reservation, update-reservation, cancel-reservation, trigger-escalation)
│   ├── safety/           (approval, escalation, kill-switch, anomaly) [Aşama 5]
│   ├── scheduled/        (pre-tour, during-tour, post-tour, follow-up) [Aşama 6]
│   └── utils/            (logger, language, ticket-renderer, wizard-parser, name-validator, transfer-zones, markdown-stripper)
├── public/tickets/       (generated boarding pass PNGs)
└── docs/
```

---

## 13. NE KULLANMIYORUZ (KARAR VERİLDİ)

- ❌ GPT (OpenAI) — satış için Claude daha iyi
- ❌ Gemini — uzun hafıza zayıf
- ❌ Airtable — limitleri var, vektör yok
- ❌ Make.com — işlem başı pahalı, n8n daha iyi
- ❌ Zapier — gereksiz
- ❌ Google Sheets as database — scaling problemi

---

## 14. İLETİŞİM TARZI

- **Özgür:** iş kararları, onaylar, gerçek rakamlar
- **Claude Code:** teknik uygulama — dosya oluştur, kod yaz, test et, deploy et
- **Claude (chat):** strateji ve yönlendirme, Özgür üzerinden komut geçer
- Dil: **Türkçe** (kod yorumları EN, müşteri mesajları 6 dil)
- "Tamam" / "devam et" → bir sonraki adım
- Hata: net göster + çözüm öner
- Her aşama sonunda: özet + sıradaki adım

---

## 15. GELECEK AŞAMALAR İÇİN NOTLAR

**Aşama 3'te lazım:**
- Özgür'ün 20-30 gerçek WhatsApp konuşması (prompt için)
- "Red çizgiler" listesi
- Kritik karar kuralları (kaç kişi otomatik, ne zaman eskalasyon)

**Aşama 4'te:** WhatsApp Business API onayı gerekecek.

**Aşama 9'da:** ElevenLabs ses klonu kararı (Özgür'ün sesi veya AI sesi).

**Aşama 10'da:** Rakip reklam istihbaratı (Meta Ads Library ile).

---

## 16. ŞU ANKİ GÖREV — AŞAMA 4 — WHATSAPP BUSINESS API (TWILIO)

### KRİTİK: PROJE LOKASYONU
**AI projesi:** `C:\Projects\bosphorus-night-ai` (site reposundan ayrı)
**Site reposu:** `c:\Users\DELL\Desktop\bosphorusnight`

### Durum — Aşama 3 tamamlandı (2026-04-19)
- Mode A (wizard teyit) + Mode B (açık sohbet) canlı
- Bilet PNG renderer (Puppeteer), harita konumu
- Intent classifier (mid-flow modifications)
- Update + cancel reservation tools
- Transfer zones (13 yer + Hilton Bosphorus) single-source
- Nezaket kuralı + saat-aware tarih teyidi
- Markdown strip, garbage name detect
- E2E test script: `npm run test:wizard`

### Aşama 4 Amaç
AI'ı gerçek WhatsApp'a bağla. Müşteri mesajları Twilio webhook üzerinden AI'a gelsin, AI cevapları + bilet + harita Twilio üzerinden WhatsApp'a geri gitsin. Bundan sonra gerçek trafik alınabilir.

### Ön Koşullar (Özgür)
1. **Twilio hesabı aç** — twilio.com/try-twilio
2. **Meta WhatsApp Business onayı** — Twilio sandbox üzerinden başla, production için 1-2 hafta onay süreci
3. **Business numara** — Bosphorus Night için WhatsApp Business numarası

### ✅ Sunucu hazır (19 Nisan 2026 gece bitti)
- Hetzner CCX13 (Nuremberg): IP 178.104.154.29, ayda €19.69
- `https://api.bosphorusnight.com` — SSL aktif, AI 7/24 çalışıyor
- SSH erişim: `ssh root@178.104.154.29` (Özgür'ün laptop key'i ile)
- Detay: memory/hetzner_server.md

### Teknik Yapılacaklar (AI projesi)
1. Twilio SDK kurulum: `npm install twilio`
2. `src/channels/whatsapp.js` doldurma:
   - Inbound webhook handler
   - Outbound `sendMessage(to, body, mediaUrl?)` fonksiyonu
   - PersistentAction ile location message
3. `/webhooks/whatsapp` endpoint (`src/index.js`):
   - Twilio signature doğrulama
   - Inbound mesajı `handleIncomingMessage` (sales agent) fonksiyonuna yönlendir
   - Response'u Twilio TwiML veya REST API ile geri gönder
4. Bilet PNG hosting:
   - `public/tickets/*.png` dosyalarını publicly accessible URL'ye taşı
   - Seçenek A: Supabase Storage (önerilen)
   - Seçenek B: Cloudflare R2 / DigitalOcean Spaces
   - Seçenek C: Hetzner üzerinde nginx serve
5. Hetzner VPS kurulumu:
   - CX22 sipariş
   - nginx + Let's Encrypt (api.bosphorusnight.com)
   - PM2 ile pm2 start
   - `.env` production değerleri
6. Test:
   - Twilio sandbox'ta manuel mesaj
   - Wizard'dan gelen mesaj → AI → bilet gönderim
   - Mode B sohbet → rezervasyon → bilet
   - Harita konumu inmemi kontrol et

### Eski "Aşama 2" talimatları aşağıda arşiv olarak tutuluyor (referans)

### Eski Amaç (Aşama 2 — tamamlandı)
Node.js + Express backend iskeleti kurmak. Supabase'e bağlanmak. İlk endpoint'leri açmak.

### Adım Adım Yapılacaklar

#### 1. Ortam Kontrolü
- `node --version` (v20+ olmalı, değilse Özgür'e Windows için kurulum talimatı ver)
- `npm --version`

#### 2. package.json
- `npm init -y` çalıştır, sonra düzenle:
  - `"name": "bosphorus-night-ai"`
  - `"version": "0.1.0"`
  - `"description": "Bosphorus Night — Autonomous AI system for sales and operations"`
  - `"main": "src/index.js"`
  - `"type": "module"` (ES modules)
  - `"scripts"`:
    - `"start": "node src/index.js"`
    - `"dev": "nodemon src/index.js"`
    - `"db:check": "node src/scripts/db-check.js"`

#### 3. Dependencies
```
npm install express @supabase/supabase-js @anthropic-ai/sdk dotenv pino pino-pretty
npm install -D nodemon
```

#### 4. Klasör Yapısı (CLAUDE.md § 12'deki yapı + placeholder TODO'lar)
```
src/
├── index.js                    (DOLU)
├── config.js                   (DOLU)
├── db/
│   ├── supabase.js             (DOLU)
│   └── queries/.gitkeep
├── channels/
│   ├── whatsapp.js             (// TODO Aşama 4)
│   ├── telegram.js             (// TODO Aşama 8)
│   ├── wechat.js               (// TODO Aşama 8)
│   └── web-form.js             (// TODO Aşama 4)
├── agents/
│   ├── orchestrator.js         (// TODO Aşama 3)
│   ├── sales.js                (// TODO Aşama 4)
│   ├── ops.js                  (// TODO Aşama 6)
│   └── voice.js                (// TODO Aşama 9)
├── claude/
│   ├── client.js               (// TODO Aşama 3)
│   ├── memory.js               (// TODO Aşama 3)
│   └── prompts/.gitkeep
├── safety/
│   ├── approval-queue.js       (// TODO Aşama 5)
│   ├── escalation.js           (// TODO Aşama 5)
│   ├── kill-switch.js          (// TODO Aşama 5)
│   └── anomaly-detector.js     (// TODO Aşama 5)
├── scheduled/
│   ├── pre-tour.js             (// TODO Aşama 6)
│   ├── during-tour.js          (// TODO Aşama 6)
│   ├── post-tour.js            (// TODO Aşama 6)
│   └── follow-up.js            (// TODO Aşama 6)
├── utils/
│   ├── logger.js               (DOLU)
│   ├── language.js             (// TODO Aşama 3)
│   └── ticket-pdf.js           (// TODO Aşama 4)
└── scripts/
    └── db-check.js             (DOLU — Supabase bağlantı testi)
```

#### 5. `.gitignore`
```
node_modules/
.env
*.log
dist/
.DS_Store
Thumbs.db
.vscode/
.idea/
```

#### 6. `.env.example`
```
# Server
PORT=3000
NODE_ENV=development

# Supabase (yeni API Keys sistemi — Publishable + Secret)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SECRET_KEY=
# Supabase DB (migration/seed için direkt postgres bağlantısı)
SUPABASE_DB_HOST=db.your-project.supabase.co
SUPABASE_DB_PORT=5432
SUPABASE_DB_USER=postgres
SUPABASE_DB_NAME=postgres
SUPABASE_DB_PASSWORD=

# Anthropic (Aşama 3'te dolacak)
ANTHROPIC_API_KEY=
CLAUDE_MODEL=claude-sonnet-4-5
CLAUDE_MODEL_ORCHESTRATOR=claude-opus-4-7

# Business
OWNER_WHATSAPP=+905322442922
BUSINESS_TIMEZONE=Europe/Istanbul
DEFAULT_LANGUAGE=en
SUPPORTED_LANGUAGES=en,tr,de,es,ru,ar,fr,it,zh,hi,ur

# Safety
APPROVAL_QUEUE_ENABLED=true
KILL_SWITCH_ENABLED=true
APPROVAL_QUEUE_TIMEOUT_SEC=60

# Logging
LOG_LEVEL=info
```

#### 7. `src/config.js`
- `dotenv/config` import
- Tüm env'leri parse + export
- Zorunlu kontrol: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`
- Eksikse net hata + program durur
- Opsiyonel eksik → uyarı

#### 8. `src/utils/logger.js`
- pino + pino-pretty
- Dev: renkli, okunabilir; Prod: JSON
- Timestamp + level + message
- Export: `logger`

#### 9. `src/db/supabase.js`
İki client:
- `supabasePublic` — publishable key (tarayıcı/public tarafı için)
- `supabaseAdmin` — secret key (sunucu tarafı, tüm yetki)
- Auth disable: `{ auth: { persistSession: false, autoRefreshToken: false } }`

#### 10. `src/index.js`
- Express + JSON body parser
- Logger middleware (her request log)
- Endpoints:
  - `GET /` → `{ name, version, status }`
  - `GET /health` → `{ status, timestamp, uptime }`
  - `GET /db-check` → Supabase packages tablosundan ilk 5 kayıt
- 404 handler + global error handler
- `app.listen(PORT, ...)` ile başlat

#### 11. `src/scripts/db-check.js`
`npm run db:check` ile çalışır:
- Supabase admin client
- packages + addons tablolarını çek
- Sayıları + kayıtları konsola bas

#### 12. `README.md`
- Proje adı + amaç
- Kurulum: `npm install`
- Çalıştır: `npm run dev`
- `.env.example` → `.env` kopyala
- Endpoint listesi
- DB test: `npm run db:check`

### Yapma Şu An
- ❌ `git init` (sonra)
- ❌ Claude API entegrasyonu (Aşama 3)
- ❌ WhatsApp/Twilio (Aşama 4)
- ❌ Hetzner deploy (sonra)

### Tamamlandığında Özgür'e Bildir
1. Oluşturulan dosya listesi
2. `npm install` başarılı mı
3. Sıradaki adım: `.env` doldurması lazım
4. Hangi 3 değer:
   - `SUPABASE_URL` = `https://kknbiemjtcfpuznyptai.supabase.co`
   - `SUPABASE_PUBLISHABLE_KEY` (Supabase dashboard → Settings → API Keys → Publishable key → default → `sb_publishable_...`)
   - `SUPABASE_SECRET_KEY` (aynı sayfa → Secret keys, ⚠️ gizli, `sb_secret_...`)

### Tarz Kuralları
- Kod yorumları: İngilizce
- Console/log mesajları: Türkçe (Özgür okuyacak)
- ES module syntax (`import/export`, `type: "module"`)
- Modern JS (async/await, optional chaining)
- Her async fonksiyonda try/catch

---

## 17. PROJE DOSYALARI — REFERANSLAR

**`C:\Projects\bosphorus-night-ai\AŞAMALAR.md`** — Her aşamanın detaylı uygulama rehberi
- Aşama 3'ten Aşama 10'a kadar her aşama için adım adım talimat
- Her aşamaya başlamadan önce ilgili bölümü oku
- "GİRİŞ KONTROLÜ", "Özgür'den toplanacak veriler", "Teknik uygulama", "Canlı test", "Başarı kriterleri" bölümleri var
- Aşama 2 tamamlanınca → AŞAMALAR.md'de Aşama 3'e bak
- Detaylı aşama talimatları için **AŞAMALAR.md dosyasına bak**

---

## 18. ÇALIŞMA KURALI

Bir aşamadan diğerine geçerken bu dosyanın § 4 bölümündeki "Aşama X — Durum" satırını ✅ olarak güncelle. Yeni kararlar çıkarsa ilgili bölüme ekle. Bu dosya projenin canlı belleği.

**Her yeni Claude Code oturumunda:**
1. Bu dosyayı oku
2. Özgür'e "nerede kaldık" diye sorma — sen söyle
3. Sıradaki adımı öner, onayla, başla

---

**DOSYA SONU**
