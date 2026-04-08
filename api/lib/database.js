import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Müşteri kaydet veya güncelle
export async function upsertCustomer(phone, data = {}) {
  const { data: customer, error } = await supabase
    .from('customers')
    .upsert(
      { phone, ...data, last_contact: new Date().toISOString() },
      { onConflict: 'phone' }
    )
    .select()
    .single();

  if (error) console.error('Customer upsert error:', error);
  return customer;
}

// Yeni rezervasyon oluştur
export async function createReservation(reservation) {
  const { data, error } = await supabase
    .from('reservations')
    .insert(reservation)
    .select()
    .single();

  if (error) console.error('Reservation insert error:', error);
  return data;
}

// Müşterinin rezervasyonlarını getir
export async function getReservationsByPhone(phone) {
  const { data, error } = await supabase
    .from('reservations')
    .select('*')
    .eq('customer_phone', phone)
    .order('created_at', { ascending: false });

  if (error) console.error('Reservation fetch error:', error);
  return data || [];
}

// Bugünkü rezervasyonları getir (admin rapor için)
export async function getTodayReservations() {
  const today = new Date().toISOString().split('T')[0];
  const { data, error } = await supabase
    .from('reservations')
    .select('*')
    .eq('cruise_date', today)
    .order('created_at', { ascending: false });

  if (error) console.error('Today reservations error:', error);
  return data || [];
}

// Tüm rezervasyonları getir (tarih aralığı ile)
export async function getReservations(from, to) {
  let query = supabase
    .from('reservations')
    .select('*')
    .order('cruise_date', { ascending: true });

  if (from) query = query.gte('cruise_date', from);
  if (to) query = query.lte('cruise_date', to);

  const { data, error } = await query;
  if (error) console.error('Reservations fetch error:', error);
  return data || [];
}

// Mesaj geçmişini kaydet
export async function saveMessage(phone, role, content) {
  const { error } = await supabase
    .from('messages')
    .insert({ phone, role, content });

  if (error) console.error('Message save error:', error);
}

// Mesaj geçmişini getir
export async function getMessageHistory(phone, limit = 20) {
  const { data, error } = await supabase
    .from('messages')
    .select('role, content')
    .eq('phone', phone)
    .order('created_at', { ascending: true })
    .limit(limit);

  if (error) console.error('Message history error:', error);
  return data || [];
}

// İstatistikleri getir (admin rapor için)
export async function getStats() {
  const today = new Date().toISOString().split('T')[0];
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const [todayRes, weekRes, totalCustomers] = await Promise.all([
    supabase.from('reservations').select('*', { count: 'exact' }).eq('cruise_date', today),
    supabase.from('reservations').select('*', { count: 'exact' }).gte('created_at', weekAgo),
    supabase.from('customers').select('*', { count: 'exact' }),
  ]);

  return {
    todayReservations: todayRes.count || 0,
    weekReservations: weekRes.count || 0,
    totalCustomers: totalCustomers.count || 0,
  };
}

export { supabase };
