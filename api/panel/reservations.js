import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

function getBoatFromToken(authHeader) {
  if (!authHeader?.startsWith('Bearer ')) return null;
  try {
    const decoded = Buffer.from(authHeader.slice(7), 'base64').toString();
    const [boatId, slug] = decoded.split(':');
    return { boatId: parseInt(boatId), slug };
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const boat = getBoatFromToken(req.headers.authorization);
  if (!boat) return res.status(401).json({ error: 'Yetkisiz' });

  const date = req.query.date;
  if (!date) return res.status(400).json({ error: 'Tarih gerekli' });

  const { data, error } = await supabase
    .from('reservations')
    .select('*')
    .eq('boat_id', boat.boatId)
    .eq('cruise_date', date)
    .order('created_at', { ascending: true });

  if (error) return res.status(500).json({ error: 'Database error' });

  return res.status(200).json(data || []);
}
