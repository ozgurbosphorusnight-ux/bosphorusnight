-- Supabase SQL Editor'de çalıştır

-- Rakipler tablosu
CREATE TABLE competitors (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  domain TEXT UNIQUE NOT NULL,
  url TEXT NOT NULL,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Rakip tarama sonuçları
CREATE TABLE competitor_scans (
  id BIGSERIAL PRIMARY KEY,
  competitor_id BIGINT NOT NULL REFERENCES competitors(id),
  scanned_at TIMESTAMPTZ DEFAULT NOW(),
  raw_data JSONB, -- Gemini'den gelen ham veri
  packages JSONB, -- paket listesi [{name, price, currency, inclusions}]
  price_min DECIMAL(10,2),
  price_max DECIMAL(10,2),
  currency TEXT DEFAULT 'EUR',
  has_whatsapp BOOLEAN,
  has_transfer BOOLEAN,
  has_live_music BOOLEAN,
  has_dinner BOOLEAN,
  phone_numbers TEXT[],
  special_offers TEXT
);

-- Fiyat değişiklik geçmişi
CREATE TABLE competitor_price_history (
  id BIGSERIAL PRIMARY KEY,
  competitor_id BIGINT NOT NULL REFERENCES competitors(id),
  package_name TEXT,
  old_price DECIMAL(10,2),
  new_price DECIMAL(10,2),
  currency TEXT DEFAULT 'EUR',
  change_pct DECIMAL(5,2),
  detected_at TIMESTAMPTZ DEFAULT NOW()
);

-- AI analiz raporları
CREATE TABLE competitor_reports (
  id BIGSERIAL PRIMARY KEY,
  report_type TEXT NOT NULL, -- daily, weekly, alert
  content TEXT NOT NULL, -- AI tarafından yazılmış rapor
  recommendations JSONB, -- strateji önerileri
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexler
CREATE INDEX idx_scans_competitor ON competitor_scans(competitor_id);
CREATE INDEX idx_scans_date ON competitor_scans(scanned_at);
CREATE INDEX idx_price_history_competitor ON competitor_price_history(competitor_id);
CREATE INDEX idx_reports_date ON competitor_reports(created_at);

-- Rakipleri ekle
INSERT INTO competitors (name, domain, url) VALUES
  ('Dinner Cruise Bosphorus', 'dinnercruisebosphorus.com', 'https://www.dinnercruisebosphorus.com/'),
  ('Bosphorus Cruises', 'bosphorus-cruises.com', 'https://www.bosphorus-cruises.com/dinner-cruises/'),
  ('Bosphorus Cruise TR', 'bosphoruscruise.com.tr', 'https://www.bosphoruscruise.com.tr/'),
  ('Bosporus Cruise', 'bosporuscruise.com', 'https://bosporuscruise.com/'),
  ('Dinner Cruise Istanbul', 'dinnercruiseistanbul.com.tr', 'https://www.dinnercruiseistanbul.com.tr/'),
  ('Bosphorus Tour', 'bosphorustour.com', 'https://www.bosphorustour.com/'),
  ('Bosphorus Yacht (Zoe)', 'bosphorusyacht.com', 'https://www.bosphorusyacht.com/'),
  ('Istanbul Bosphorus Cruises', 'istanbulbosphorus.cruises', 'https://istanbulbosphorus.cruises/');
