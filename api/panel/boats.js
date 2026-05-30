import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// Public, read-only price map for the website.
//   GET /api/panel/boats?type=prices → packages + addons (no auth, 5min CDN cache)
//
// NOTE: The admin panel lives on Hetzner (panel.bosphorusnight.com) with its own
// authenticated backend. The legacy auth-protected branches that used to live in
// this file (catalog, price PUT, reservations, etc.) were removed because their
// tokens were unsigned base64 and could be forged. Do NOT add write/admin logic
// here without a properly signed/verified auth scheme.
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (req.query.type !== 'prices') {
    return res.status(404).json({ error: 'Not found' });
  }

  try {
    const [pkgRes, addonRes] = await Promise.all([
      supabase.from('packages').select('code, price_eur, original_price_eur').eq('is_active', true),
      supabase.from('addons').select('code, price_eur, price_type'),
    ]);
    if (pkgRes.error) throw pkgRes.error;
    if (addonRes.error) throw addonRes.error;

    const packages = {};
    for (const p of pkgRes.data || []) {
      const price = Number(p.price_eur);
      const original = p.original_price_eur != null ? Number(p.original_price_eur) : price;
      packages[p.code] = { price, original };
    }
    const addons = {};
    for (const a of addonRes.data || []) addons[a.code] = { price: Number(a.price_eur), type: a.price_type };

    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({ packages, addons });
  } catch (err) {
    console.error('Prices error:', err);
    return res.status(500).json({ error: 'Fiyatlar alınamadı' });
  }
}
