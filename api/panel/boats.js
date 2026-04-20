import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// Consolidated catalog endpoint (merged from api/public/prices + api/panel/packages
// to stay within Vercel Hobby 12-function limit):
//   GET  /api/panel/boats                  → active boats (legacy, used by admin.html)
//   GET  /api/panel/boats?type=prices      → public price map for the site (no auth, 5min cache)
//   GET  /api/panel/boats?type=catalog     → packages + addons for admin panel (auth)
//   PUT  /api/panel/boats                  → update package/addon price (admin_sahip only)

function parseAdminToken(authHeader) {
  if (!authHeader?.startsWith('Bearer ')) return null;
  try {
    const decoded = Buffer.from(authHeader.slice(7), 'base64').toString();
    const [prefix, userId, role] = decoded.split(':');
    if (prefix !== 'admin') return null;
    return { userId: parseInt(userId), role };
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const type = req.query.type;

    // Public price map — site reads this, no auth
    if (type === 'prices') {
      try {
        const [pkgRes, addonRes] = await Promise.all([
          supabase.from('packages').select('code, price_eur').eq('is_active', true),
          supabase.from('addons').select('code, price_eur, price_type'),
        ]);
        if (pkgRes.error) throw pkgRes.error;
        if (addonRes.error) throw addonRes.error;

        const packages = {};
        for (const p of pkgRes.data || []) packages[p.code] = { price: Number(p.price_eur) };
        const addons = {};
        for (const a of addonRes.data || []) addons[a.code] = { price: Number(a.price_eur), type: a.price_type };

        res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
        return res.status(200).json({ packages, addons });
      } catch (err) {
        console.error('Prices error:', err);
        return res.status(500).json({ error: 'Fiyatlar alınamadı' });
      }
    }

    // Admin catalog — packages + addons with full fields for panel UI
    if (type === 'catalog') {
      const user = parseAdminToken(req.headers.authorization);
      if (!user) return res.status(401).json({ error: 'Yetkisiz' });
      try {
        const [pkgRes, addonRes] = await Promise.all([
          supabase.from('packages').select('code, price_eur, tour_type, tier, is_active, name_translations').order('code'),
          supabase.from('addons').select('code, price_eur, price_type, name_translations').order('code'),
        ]);
        if (pkgRes.error) throw pkgRes.error;
        if (addonRes.error) throw addonRes.error;
        return res.status(200).json({ packages: pkgRes.data || [], addons: addonRes.data || [] });
      } catch (err) {
        console.error('Catalog error:', err);
        return res.status(500).json({ error: 'Veriler alınamadı' });
      }
    }

    // Legacy boats list
    const { data, error } = await supabase
      .from('boats')
      .select('name, slug')
      .eq('active', true)
      .order('name');

    if (error) return res.status(500).json({ error: 'Database error' });
    return res.status(200).json(data);
  }

  if (req.method === 'PUT') {
    const user = parseAdminToken(req.headers.authorization);
    if (!user) return res.status(401).json({ error: 'Yetkisiz' });
    if (user.role !== 'admin_sahip') {
      return res.status(403).json({ error: 'Sadece yönetici fiyat değiştirebilir' });
    }

    const { type, code, price_eur } = req.body || {};
    if (!type || !code || price_eur === undefined) {
      return res.status(400).json({ error: 'type, code ve price_eur gerekli' });
    }
    if (type !== 'package' && type !== 'addon') {
      return res.status(400).json({ error: 'type "package" veya "addon" olmalı' });
    }
    const numPrice = Number(price_eur);
    if (!Number.isFinite(numPrice) || numPrice < 0) {
      return res.status(400).json({ error: 'Geçersiz fiyat' });
    }

    const table = type === 'package' ? 'packages' : 'addons';
    const { data, error } = await supabase
      .from(table)
      .update({ price_eur: numPrice })
      .eq('code', code)
      .select()
      .single();

    if (error) {
      console.error('Price update error:', error);
      return res.status(500).json({ error: 'Güncelleme başarısız' });
    }
    if (!data) return res.status(404).json({ error: 'Kayıt bulunamadı' });
    return res.status(200).json({ ok: true, updated: data });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
