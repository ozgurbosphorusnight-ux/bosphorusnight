-- Supabase SQL Editor'de çalıştır

-- Tekneler tablosu
CREATE TABLE boats (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL, -- URL için: tosunpasa, lufer, amor
  capacity INTEGER NOT NULL DEFAULT 100,
  login_code TEXT NOT NULL, -- giriş şifresi
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Cari hareketler tablosu
CREATE TABLE transactions (
  id BIGSERIAL PRIMARY KEY,
  boat_id BIGINT NOT NULL REFERENCES boats(id),
  type TEXT NOT NULL, -- income, expense, commission
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'EUR',
  description TEXT,
  reservation_id BIGINT REFERENCES reservations(id),
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Rezervasyonlara tekne bağlantısı ekle
ALTER TABLE reservations ADD COLUMN boat_id BIGINT REFERENCES boats(id);

-- Indexler
CREATE INDEX idx_transactions_boat ON transactions(boat_id);
CREATE INDEX idx_transactions_date ON transactions(date);
CREATE INDEX idx_reservations_boat ON reservations(boat_id);

-- Örnek tekneler ekle
INSERT INTO boats (name, slug, capacity, login_code) VALUES
  ('Tosunpaşa', 'tosunpasa', 150, 'tosun2024'),
  ('Lüfer', 'lufer', 120, 'lufer2024'),
  ('AMOR', 'amor', 100, 'amor2024');
