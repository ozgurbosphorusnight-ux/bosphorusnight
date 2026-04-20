import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

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
  const user = parseAdminToken(req.headers.authorization);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });

  if (req.method === 'GET') {
    try {
      const [pkgRes, addonRes] = await Promise.all([
        supabase.from('packages').select('code, price_eur, tour_type, tier, is_active, name_translations').order('code'),
        supabase.from('addons').select('code, price_eur, price_type, name_translations').order('code'),
      ]);
      if (pkgRes.error) throw pkgRes.error;
      if (addonRes.error) throw addonRes.error;
      return res.status(200).json({ packages: pkgRes.data || [], addons: addonRes.data || [] });
    } catch (err) {
      console.error('Packages GET error:', err);
      return res.status(500).json({ error: 'Veriler alınamadı' });
    }
  }

  if (req.method === 'PUT') {
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
      console.error('Packages PUT error:', error);
      return res.status(500).json({ error: 'Güncelleme başarısız' });
    }
    if (!data) return res.status(404).json({ error: 'Kayıt bulunamadı' });

    return res.status(200).json({ ok: true, updated: data });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
