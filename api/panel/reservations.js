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
  const user = parseToken(req.headers.authorization);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });

  // GET — rezervasyon listesi
  if (req.method === 'GET') {
    const date = req.query.date;
    if (!date) return res.status(400).json({ error: 'Tarih gerekli' });

    const { data, error } = await supabase
      .from('reservations')
      .select('*')
      .eq('boat_id', user.boatId)
      .eq('cruise_date', date)
      .order('created_at', { ascending: true });

    if (error) return res.status(500).json({ error: 'Database error' });
    return res.status(200).json(data || []);
  }

  // PATCH — check-in + tahsilat güncelleme
  if (req.method === 'PATCH') {
    const { id, checked_in, attendance, collected_amount, payment_method, payment_note } = req.body;

    if (!id) return res.status(400).json({ error: 'Rezervasyon ID gerekli' });

    // Sadece kendi teknesinin rezervasyonunu güncelleyebilir
    const { data: existing } = await supabase
      .from('reservations')
      .select('boat_id')
      .eq('id', id)
      .single();

    if (!existing || existing.boat_id !== user.boatId) {
      return res.status(403).json({ error: 'Bu rezervasyona erişiminiz yok' });
    }

    const updates = {};
    if (typeof checked_in === 'boolean') {
      updates.checked_in = checked_in;
      updates.checked_in_at = checked_in ? new Date().toISOString() : null;
      updates.attendance = checked_in ? 'arrived' : null;
    }
    if (attendance) updates.attendance = attendance; // arrived, no_show
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
