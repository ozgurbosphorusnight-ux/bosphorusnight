-- Supabase SQL Editor'de çalıştır

-- 1. Boats tablosuna sahip şifresi ekle
ALTER TABLE boats ADD COLUMN owner_code TEXT;
UPDATE boats SET owner_code = 'tosun_sahip' WHERE slug = 'tosunpasa';
UPDATE boats SET owner_code = 'lufer_sahip' WHERE slug = 'lufer';
UPDATE boats SET owner_code = 'amor_sahip' WHERE slug = 'amor';

-- 2. Reservations tablosuna check-in ve tahsilat alanları
ALTER TABLE reservations ADD COLUMN checked_in BOOLEAN DEFAULT FALSE;
ALTER TABLE reservations ADD COLUMN checked_in_at TIMESTAMPTZ;
ALTER TABLE reservations ADD COLUMN attendance TEXT; -- arrived, no_show
ALTER TABLE reservations ADD COLUMN expected_amount DECIMAL(10,2);
ALTER TABLE reservations ADD COLUMN collected_amount DECIMAL(10,2);
ALTER TABLE reservations ADD COLUMN payment_method TEXT; -- cash, card
ALTER TABLE reservations ADD COLUMN payment_note TEXT;

-- 3. Admin kullanıcılar tablosu
CREATE TABLE admin_users (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  username TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL, -- admin_personel, admin_sahip
  login_code TEXT NOT NULL,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Örnek admin kullanıcıları
INSERT INTO admin_users (name, username, role, login_code) VALUES
  ('Özgür', 'ozgur', 'admin_sahip', 'admin2024'),
  ('Personel', 'personel1', 'admin_personel', 'personel2024');

CREATE INDEX idx_admin_users_username ON admin_users(username);
