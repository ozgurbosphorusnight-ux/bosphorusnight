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

  if (user.role !== 'tekne_sahip') {
    return res.status(403).json({ error: 'Bu sayfaya erişiminiz yok' });
  }

  const month = req.query.month; // YYYY-MM
  if (!month) return res.status(400).json({ error: 'Ay gerekli' });

  const [y, m] = month.split('-').map(Number);
  const startDate = `${month}-01`;
  const endDate = new Date(y, m, 0).toISOString().split('T')[0];

  // Ay içi tüm rezervasyonları al
  const { data: reservations, error } = await supabase
    .from('reservations')
    .select('guests, expected_amount, collected_amount, attendance, status')
    .eq('boat_id', user.boatId)
    .gte('cruise_date', startDate)
    .lte('cruise_date', endDate);

  if (error) return res.status(500).json({ error: 'Database error' });

  const rows = reservations || [];
  const arrived = rows.filter(r => r.attendance === 'arrived');

  const totalGuests = arrived.reduce((s, r) => s + (r.guests || 0), 0);
  const totalExpected = rows.reduce((s, r) => s + (parseFloat(r.expected_amount) || 0), 0);
  const totalCollected = arrived.reduce((s, r) => s + (parseFloat(r.collected_amount) || 0), 0);
  const totalReservations = rows.length;
  const arrivedCount = arrived.length;
  const noShowCount = rows.filter(r => r.attendance === 'no_show').length;
  const cancelledCount = rows.filter(r => r.status === 'cancelled').length;
  const avgPerGuest = totalGuests > 0 ? (totalCollected / totalGuests).toFixed(2) : 0;

  return res.status(200).json({
    totalGuests,
    totalExpected,
    totalCollected,
    difference: totalCollected - totalExpected,
    totalReservations,
    arrivedCount,
    noShowCount,
    cancelledCount,
    avgPerGuest: parseFloat(avgPerGuest),
  });
}
