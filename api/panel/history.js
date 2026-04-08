import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

function parseToken(authHeader) {
  if (!authHeader?.startsWith('Bearer ')) return null;
  try {
    const decoded = Buffer.from(authHeader.slice(7), 'base64').toString();
    const [boatId, slug, role] = decoded.split(':');
    return { boatId: parseInt(boatId), slug, role: role || 'tekne_personel' };
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const user = parseToken(req.headers.authorization);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });

  // Sadece tekne_sahip geçmişi görebilir
  if (user.role !== 'tekne_sahip') {
    return res.status(403).json({ error: 'Bu sayfaya erişiminiz yok' });
  }

  const { from, to, status } = req.query;

  let query = supabase
    .from('reservations')
    .select('*')
    .eq('boat_id', user.boatId)
    .order('cruise_date', { ascending: false });

  if (from) query = query.gte('cruise_date', from);
  if (to) query = query.lte('cruise_date', to);
  if (status && status !== 'all') {
    if (status === 'arrived') query = query.eq('attendance', 'arrived');
    else if (status === 'no_show') query = query.eq('attendance', 'no_show');
    else if (status === 'cancelled') query = query.eq('status', 'cancelled');
  }

  const { data, error } = await query.limit(200);

  if (error) return res.status(500).json({ error: 'Database error' });
  return res.status(200).json(data || []);
}
