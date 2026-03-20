-- ============================================================
--  VELUNOO — Supabase PostgreSQL Schema
--  Run this in your Supabase SQL Editor
-- ============================================================

-- Produkte
CREATE TABLE IF NOT EXISTS products (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name_de      TEXT NOT NULL,
  name_en      TEXT,
  name_fr      TEXT,
  name_it      TEXT,
  name_nl      TEXT,
  desc_de      TEXT,   -- HTML-fähig
  desc_en      TEXT,
  desc_fr      TEXT,
  desc_it      TEXT,
  desc_nl      TEXT,
  price        DECIMAL(10,2) NOT NULL,
  stock        INT DEFAULT 0,
  category     TEXT CHECK (category IN ('dog', 'cat', 'both')) DEFAULT 'both',
  colors       TEXT[] DEFAULT '{}',
  active       BOOLEAN DEFAULT true,
  created_at   TIMESTAMP DEFAULT NOW()
);

-- Produktbilder
CREATE TABLE IF NOT EXISTS product_images (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id   UUID REFERENCES products(id) ON DELETE CASCADE,
  url          TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  sort_order   INT DEFAULT 0,
  created_at   TIMESTAMP DEFAULT NOW()
);

-- Warenkorb
CREATE TABLE IF NOT EXISTS carts (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id   TEXT NOT NULL UNIQUE,
  created_at   TIMESTAMP DEFAULT NOW(),
  updated_at   TIMESTAMP DEFAULT NOW()
);

-- Warenkorb Items
CREATE TABLE IF NOT EXISTS cart_items (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  cart_id      UUID REFERENCES carts(id) ON DELETE CASCADE,
  product_id   UUID REFERENCES products(id),
  quantity     INT DEFAULT 1 CHECK (quantity > 0)
);

-- Bestellungen
CREATE TABLE IF NOT EXISTS orders (
  id                UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_number      SERIAL,
  customer_name     TEXT NOT NULL,
  customer_email    TEXT NOT NULL,
  address           TEXT NOT NULL,
  country           TEXT DEFAULT 'CH',
  language          TEXT DEFAULT 'de',
  items             JSONB NOT NULL,
  total_price       DECIMAL(10,2) NOT NULL,
  currency          TEXT DEFAULT 'CHF',
  status            TEXT DEFAULT 'pending'
                    CHECK (status IN ('pending','paid','shipped','delivered','cancelled','refunded','failed')),
  stripe_payment_id TEXT,
  invoice_sent_at   TIMESTAMP,
  created_at        TIMESTAMP DEFAULT NOW()
);

-- Newsletter Subscribers
CREATE TABLE IF NOT EXISTS newsletter (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email      TEXT UNIQUE NOT NULL,
  language   TEXT DEFAULT 'de',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Admin
CREATE TABLE IF NOT EXISTS admins (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email         TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL
);

-- Transaktionen (Buchhaltung / Finanzen)
CREATE TABLE IF NOT EXISTS transactions (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date        DATE NOT NULL,
  type        TEXT NOT NULL CHECK (type IN ('aufwand', 'ertrag')),
  category    TEXT NOT NULL,
  amount      DECIMAL(10,2) NOT NULL CHECK (amount > 0),
  description TEXT,
  created_at  TIMESTAMP DEFAULT NOW()
);

-- ── Indexes ─────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_active   ON products(active);
CREATE INDEX IF NOT EXISTS idx_product_images_product ON product_images(product_id);
CREATE INDEX IF NOT EXISTS idx_cart_items_cart   ON cart_items(cart_id);
CREATE INDEX IF NOT EXISTS idx_orders_email      ON orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_status     ON orders(status);
CREATE INDEX IF NOT EXISTS idx_transactions_date ON transactions(date);
CREATE INDEX IF NOT EXISTS idx_transactions_type ON transactions(type);

-- ── Row Level Security ────────────────────────────────────────────────────
-- Products: public read, service role write
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read active products"
  ON products FOR SELECT USING (active = true);

-- Product images: public read
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read product images"
  ON product_images FOR SELECT USING (true);

-- ── Storage Bucket ───────────────────────────────────────────────────────
-- Run in Supabase Dashboard → Storage → New Bucket
-- Name: velunoo-products
-- Public bucket: YES
-- File size limit: 10MB
-- Allowed MIME types: image/jpeg, image/png, image/webp
