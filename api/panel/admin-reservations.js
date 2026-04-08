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

  // GET — tüm teknelerin rezervasyonları
  if (req.method === 'GET') {
    const date = req.query.date;
    const month = req.query.month;
    const boatId = req.query.boat_id;

    // Günlük: tüm teknelerin bugünkü rezervasyonları
    if (date) {
      let query = supabase
        .from('reservations')
        .select('*, boats(name)')
        .eq('cruise_date', date)
        .order('boat_id', { ascending: true });

      if (boatId) query = query.eq('boat_id', boatId);

      const { data, error } = await query;
      if (error) return res.status(500).json({ error: 'Database error' });
      return res.status(200).json(data || []);
    }

    // Aylık özet (sadece admin_sahip)
    if (month && user.role === 'admin_sahip') {
      const [y, m] = month.split('-').map(Number);
      const startDate = `${month}-01`;
      const endDate = new Date(y, m, 0).toISOString().split('T')[0];

      const { data: boats } = await supabase.from('boats').select('id, name').eq('active', true);

      const summaries = [];
      for (const boat of (boats || [])) {
        const { data: reservations } = await supabase
          .from('reservations')
          .select('guests, expected_amount, collected_amount, attendance, status')
          .eq('boat_id', boat.id)
          .gte('cruise_date', startDate)
          .lte('cruise_date', endDate);

        const rows = reservations || [];
        const arrived = rows.filter(r => r.attendance === 'arrived');

        summaries.push({
          boat_id: boat.id,
          boat_name: boat.name,
          totalReservations: rows.length,
          totalGuests: arrived.reduce((s, r) => s + (r.guests || 0), 0),
          totalExpected: rows.reduce((s, r) => s + (parseFloat(r.expected_amount) || 0), 0),
          totalCollected: arrived.reduce((s, r) => s + (parseFloat(r.collected_amount) || 0), 0),
          arrivedCount: arrived.length,
          noShowCount: rows.filter(r => r.attendance === 'no_show').length,
        });
      }

      return res.status(200).json(summaries);
    }

    return res.status(400).json({ error: 'date veya month parametresi gerekli' });
  }

  // PATCH — rezervasyon güncelleme (check-in + tahsilat)
  if (req.method === 'PATCH') {
    const { id, checked_in, attendance, collected_amount, payment_method, payment_note } = req.body;
    if (!id) return res.status(400).json({ error: 'Rezervasyon ID gerekli' });

    const updates = {};
    if (typeof checked_in === 'boolean') {
      updates.checked_in = checked_in;
      updates.checked_in_at = checked_in ? new Date().toISOString() : null;
      updates.attendance = checked_in ? 'arrived' : null;
    }
    if (attendance) updates.attendance = attendance;
    if (collected_amount !== undefined) updates.collected_amount = collected_amount;
    if (payment_method) updates.payment_method = payment_method;
    if (payment_note !== undefined) updates.payment_note = payment_note;
    updates.updated_at = new Date().toISOString();

    const { data, error } = await supabase
      .from('reservations')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) return res.status(500).json({ error: 'Güncelleme hatası' });
    return res.status(200).json(data);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
