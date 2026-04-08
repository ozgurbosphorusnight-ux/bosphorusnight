-- Supabase SQL Editor'de çalıştır (supabase.com → SQL Editor → New Query)

-- Müşteriler tablosu
CREATE TABLE customers (
  id BIGSERIAL PRIMARY KEY,
  phone TEXT UNIQUE NOT NULL,
  name TEXT,
  email TEXT,
  language TEXT DEFAULT 'en',
  country TEXT,
  hotel TEXT,
  hotel_address TEXT,
  notes TEXT,
  first_contact TIMESTAMPTZ DEFAULT NOW(),
  last_contact TIMESTAMPTZ DEFAULT NOW()
);

-- Rezervasyonlar tablosu
CREATE TABLE reservations (
  id BIGSERIAL PRIMARY KEY,
  customer_phone TEXT NOT NULL REFERENCES customers(phone),
  customer_name TEXT,
  package TEXT NOT NULL, -- standard, premium, vip
  guests INTEGER NOT NULL DEFAULT 2,
  cruise_date DATE NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- pending, confirmed, cancelled, completed
  total_price DECIMAL(10,2),
  currency TEXT DEFAULT 'EUR',
  transfer_needed BOOLEAN DEFAULT FALSE,
  special_request TEXT, -- birthday, proposal, anniversary vs.
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Mesaj geçmişi tablosu
CREATE TABLE messages (
  id BIGSERIAL PRIMARY KEY,
  phone TEXT NOT NULL,
  role TEXT NOT NULL, -- user, assistant
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexler (hız için)
CREATE INDEX idx_reservations_phone ON reservations(customer_phone);
CREATE INDEX idx_reservations_date ON reservations(cruise_date);
CREATE INDEX idx_reservations_status ON reservations(status);
CREATE INDEX idx_messages_phone ON messages(phone);
CREATE INDEX idx_messages_created ON messages(created_at);
