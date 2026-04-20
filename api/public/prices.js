import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const [pkgRes, addonRes] = await Promise.all([
      supabase.from('packages').select('code, price_eur').eq('is_active', true),
      supabase.from('addons').select('code, price_eur, price_type'),
    ]);

    if (pkgRes.error) throw pkgRes.error;
    if (addonRes.error) throw addonRes.error;

    const packages = {};
    for (const p of pkgRes.data || []) {
      packages[p.code] = { price: Number(p.price_eur) };
    }

    const addons = {};
    for (const a of addonRes.data || []) {
      addons[a.code] = { price: Number(a.price_eur), type: a.price_type };
    }

    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({ packages, addons });
  } catch (err) {
    console.error('Prices endpoint error:', err);
    return res.status(500).json({ error: 'Failed to load prices' });
  }
}
