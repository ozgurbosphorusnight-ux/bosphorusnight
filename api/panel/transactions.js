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

  const month = req.query.month; // format: 2024-04
  if (!month) return res.status(400).json({ error: 'Ay gerekli' });

  const startDate = `${month}-01`;
  const [y, m] = month.split('-').map(Number);
  const endDate = new Date(y, m, 0).toISOString().split('T')[0]; // ayın son günü

  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .eq('boat_id', boat.boatId)
    .gte('date', startDate)
    .lte('date', endDate)
    .order('date', { ascending: false });

  if (error) return res.status(500).json({ error: 'Database error' });

  return res.status(200).json(data || []);
}
