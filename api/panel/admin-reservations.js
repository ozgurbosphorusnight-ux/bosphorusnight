import Anthropic from '@anthropic-ai/sdk';
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

function getDateRange(months, days) {
  const end = new Date();
  const start = new Date();
  if (days) { start.setDate(start.getDate() - days); }
  else { start.setMonth(start.getMonth() - months); }
  return { startDate: start.toISOString().split('T')[0], endDate: end.toISOString().split('T')[0] };
}

export default async function handler(req, res) {
  const user = parseAdminToken(req.headers.authorization);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });

  // ── POST: AI Analiz ──
  if (req.method === 'POST' && req.body?.action === 'ai-analysis') {
    if (user.role !== 'admin_sahip') return res.status(403).json({ error: 'Yetkiniz yok' });
    const months = parseInt(req.body.months) || 3;
    const aiDays = req.body.days ? parseInt(req.body.days) : null;
    const { startDate, endDate } = getDateRange(months, aiDays);
    try {
      const { data: reservations } = await supabase.from('reservations')
        .select('cruise_date, created_at, package, boat_id, guests, expected_amount, collected_amount, attendance, status, payment_method, customer_phone')
        .gte('cruise_date', startDate).lte('cruise_date', endDate).neq('status', 'cancelled');
      const { data: boats } = await supabase.from('boats').select('id, name, capacity').eq('active', true);
      const phones = [...new Set((reservations || []).map(r => r.customer_phone).filter(Boolean))];
      let customers = [];
      if (phones.length > 0) { const { data } = await supabase.from('customers').select('phone, country, language').in('phone', phones); customers = data || []; }
      const customerMap = {}; for (const c of customers) customerMap[c.phone] = c;
      const rows = reservations || []; const arrived = rows.filter(r => r.attendance === 'arrived');
      const totalGuests = arrived.reduce((s, r) => s + (r.guests || 0), 0);
      const totalRevenue = arrived.reduce((s, r) => s + (parseFloat(r.collected_amount) || 0), 0);
      const noShowCount = rows.filter(r => r.attendance === 'no_show').length;
      const packages = {}; for (const r of rows) { const pkg = r.package || 'unknown'; if (!packages[pkg]) packages[pkg] = { count: 0, revenue: 0 }; packages[pkg].count++; if (r.attendance === 'arrived') packages[pkg].revenue += parseFloat(r.collected_amount) || 0; }
      const hourly = Array(24).fill(0); for (const r of rows) { if (!r.created_at) continue; hourly[(new Date(r.created_at).getUTCHours() + 3) % 24]++; }
      const dayNames = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
      const weekly = Array(7).fill(0); for (const r of rows) { weekly[new Date(r.cruise_date).getDay()]++; }
      const leadTimes = []; for (const r of rows) { if (!r.created_at || !r.cruise_date) continue; leadTimes.push(Math.max(0, Math.floor((new Date(r.cruise_date) - new Date(r.created_at)) / 86400000))); }
      const avgLeadTime = leadTimes.length > 0 ? (leadTimes.reduce((a, b) => a + b, 0) / leadTimes.length).toFixed(1) : 0;
      const sameDayPct = leadTimes.length > 0 ? ((leadTimes.filter(d => d === 0).length / leadTimes.length) * 100).toFixed(1) : 0;
      const countries = {}; for (const r of rows) { const country = customerMap[r.customer_phone]?.country || 'Bilinmiyor'; countries[country] = (countries[country] || 0) + 1; }
      const topCountries = Object.entries(countries).sort((a, b) => b[1] - a[1]).slice(0, 10);
      const boatStats = (boats || []).map(b => { const bRows = arrived.filter(r => r.boat_id === b.id); const g = bRows.reduce((s, r) => s + (r.guests || 0), 0); const d = new Set(rows.filter(r => r.boat_id === b.id).map(r => r.cruise_date)).size || 1; return { name: b.name, capacity: b.capacity, avgGuests: Math.round(g / d), occupancy: b.capacity > 0 ? Math.round((g / d / b.capacity) * 100) : 0 }; });
      const cashCount = arrived.filter(r => r.payment_method === 'cash').length;
      const cardCount = arrived.filter(r => r.payment_method === 'card').length;
      const statsData = { period: `Son ${months} ay (${startDate} - ${endDate})`, totalReservations: rows.length, totalGuests, totalRevenue: `€${totalRevenue.toFixed(0)}`, avgPerGuest: totalGuests > 0 ? `€${(totalRevenue / totalGuests).toFixed(1)}` : '€0', noShowRate: rows.length > 0 ? `%${((noShowCount / rows.length) * 100).toFixed(1)}` : '%0', packages, boatStats, topCountries, hourlyDistribution: hourly.map((count, h) => count > 0 ? `${String(h).padStart(2, '0')}:00=${count}` : null).filter(Boolean), weeklyDistribution: dayNames.map((name, i) => `${name}=${weekly[i]}`), avgLeadTimeDays: avgLeadTime, sameDayBookingPct: `%${sameDayPct}`, paymentSplit: `Nakit: ${cashCount}, Kart: ${cardCount}` };
      const prompt = `Sen bir turizm ve dijital pazarlama uzmanısın. Aşağıdaki İstanbul Boğaz turu istatistiklerini analiz et.\n\nBİZİM İŞLETME (Bosphorus Night):\n- Standard €35: 3 saat, açık büfe, canlı müzik, dans şovları\n- Premium €50: + öncelikli oturma, karşılama içeceği, zengin menü\n- VIP €80: + özel masa, sınırsız içecek, otel transferi\n- Rezervasyon: Sadece WhatsApp, online ödeme yok, teknede ödeme\n- Kalkış: Kabataş iskelesi, 20:00-23:30\n\nİSTATİSTİKLER:\n${JSON.stringify(statsData, null, 2)}\n\nGÖREV: Bu verileri analiz edip TÜRKÇE strateji önerileri ver. Özellikle şunlara odaklan:\n1. Google Ads reklam bütçesini hangi saatlere ve günlere yoğunlaştırmalıyız\n2. Hangi ülkeleri hedeflemeliyiz\n3. Paket fiyatlaması doğru mu, değişiklik lazım mı\n4. No-show oranını nasıl düşürebiliriz\n5. Aynı gün rezervasyon oranı yüksekse/düşükse ne anlama geliyor\n6. Tekne doluluk oranlarına göre operasyonel öneriler\n\nSADECE bu JSON formatında yanıt ver (başka metin yazma):\n{"summary":"2-3 cümle genel değerlendirme","recommendations":[{"action":"yapılması gereken","reason":"neden","priority":"high/medium/low","category":"reklam/fiyat/operasyon/hedef-kitle"}],"ad_strategy":{"best_hours":"reklam için en iyi saat aralıkları","best_days":"reklam için en iyi günler","target_countries":"hedef ülkeler ve neden","budget_tips":"bütçe dağılım önerisi"},"pricing_tips":"fiyatlama önerisi","risk_alerts":["dikkat edilmesi gereken riskler"]}`;
      const claude = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY });
      const response = await claude.messages.create({ model: 'claude-haiku-4-5-20251001', max_tokens: 3000, messages: [{ role: 'user', content: prompt }] });
      const text = response.content[0].text;
      const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      return res.status(200).json(JSON.parse(cleaned));
    } catch (err) { return res.status(500).json({ error: 'AI analiz hatası', detail: err.message }); }
  }

  // GET — tüm teknelerin rezervasyonları
  if (req.method === 'GET') {
    // ── Stats actions ──
    const statsAction = req.query.stats_action;
    if (statsAction && user.role === 'admin_sahip') {
      const months = parseInt(req.query.months) || 3;
      const sDays = req.query.days ? parseInt(req.query.days) : null;
      const { startDate, endDate } = getDateRange(months, sDays);

      try {
        if (statsAction === 'overview') {
          const { data: current } = await supabase.from('reservations').select('guests, expected_amount, collected_amount, attendance, status, cruise_date').gte('cruise_date', startDate).lte('cruise_date', endDate).neq('status', 'cancelled');
          const prevStart = new Date(startDate); prevStart.setMonth(prevStart.getMonth() - months);
          const { data: previous } = await supabase.from('reservations').select('guests, collected_amount, attendance, status').gte('cruise_date', prevStart.toISOString().split('T')[0]).lt('cruise_date', startDate).neq('status', 'cancelled');
          const calc = (rows) => { const arrived = (rows || []).filter(r => r.attendance === 'arrived'); const tg = arrived.reduce((s, r) => s + (r.guests || 0), 0); const tc = arrived.reduce((s, r) => s + (parseFloat(r.collected_amount) || 0), 0); const ns = (rows || []).filter(r => r.attendance === 'no_show').length; return { totalRevenue: tc, totalGuests: tg, avgPerGuest: tg > 0 ? tc / tg : 0, noShowRate: (rows || []).length > 0 ? (ns / (rows || []).length) * 100 : 0, totalReservations: (rows || []).length, arrivedCount: arrived.length, noShowCount: ns }; };
          const cur = calc(current); const prev = calc(previous);
          const pctChange = (c, p) => p > 0 ? ((c - p) / p) * 100 : 0;
          return res.status(200).json({ ...cur, changes: { revenue: pctChange(cur.totalRevenue, prev.totalRevenue), guests: pctChange(cur.totalGuests, prev.totalGuests), avgPerGuest: pctChange(cur.avgPerGuest, prev.avgPerGuest), noShowRate: cur.noShowRate - prev.noShowRate } });
        }

        if (statsAction === 'revenue-trend') {
          const granularity = req.query.granularity || 'daily';
          const { data: rows } = await supabase.from('reservations').select('cruise_date, guests, expected_amount, collected_amount, attendance, status').gte('cruise_date', startDate).lte('cruise_date', endDate).neq('status', 'cancelled').order('cruise_date', { ascending: true });
          const grouped = {};
          for (const r of (rows || [])) { let key = r.cruise_date; if (granularity === 'weekly') { const d = new Date(r.cruise_date); const ws = new Date(d); ws.setDate(d.getDate() - d.getDay() + 1); key = ws.toISOString().split('T')[0]; } else if (granularity === 'monthly') { key = r.cruise_date.substring(0, 7); } if (!grouped[key]) grouped[key] = { date: key, expected: 0, collected: 0, guests: 0, reservations: 0 }; grouped[key].expected += parseFloat(r.expected_amount) || 0; grouped[key].reservations++; if (r.attendance === 'arrived') { grouped[key].collected += parseFloat(r.collected_amount) || 0; grouped[key].guests += r.guests || 0; } }
          return res.status(200).json(Object.values(grouped).sort((a, b) => a.date.localeCompare(b.date)));
        }

        if (statsAction === 'breakdown') {
          const { data: reservations } = await supabase.from('reservations').select('package, boat_id, guests, collected_amount, payment_method, attendance, customer_phone, status').gte('cruise_date', startDate).lte('cruise_date', endDate).neq('status', 'cancelled');
          const { data: boats } = await supabase.from('boats').select('id, name, capacity').eq('active', true);
          const phones = [...new Set((reservations || []).map(r => r.customer_phone).filter(Boolean))];
          let customers = []; if (phones.length > 0) { const { data } = await supabase.from('customers').select('phone, country, language').in('phone', phones); customers = data || []; }
          const customerMap = {}; for (const c of customers) customerMap[c.phone] = c;
          const rows = reservations || []; const arrived = rows.filter(r => r.attendance === 'arrived');
          const packages = {}; for (const r of rows) { const pkg = r.package || 'unknown'; if (!packages[pkg]) packages[pkg] = { count: 0, revenue: 0, guests: 0 }; packages[pkg].count++; if (r.attendance === 'arrived') { packages[pkg].revenue += parseFloat(r.collected_amount) || 0; packages[pkg].guests += r.guests || 0; } }
          const boatOccupancy = (boats || []).map(boat => { const br = arrived.filter(r => r.boat_id === boat.id); const tg = br.reduce((s, r) => s + (r.guests || 0), 0); const d = new Set(rows.filter(r => r.boat_id === boat.id).map(r => r.cruise_date)).size || 1; return { name: boat.name, capacity: boat.capacity, avgGuests: Math.round(tg / d), occupancyRate: boat.capacity > 0 ? Math.round((tg / d / boat.capacity) * 100) : 0 }; });
          const paymentMethods = { cash: { count: 0, amount: 0 }, card: { count: 0, amount: 0 }, other: { count: 0, amount: 0 } }; for (const r of arrived) { const m = r.payment_method || 'other'; const k = paymentMethods[m] ? m : 'other'; paymentMethods[k].count++; paymentMethods[k].amount += parseFloat(r.collected_amount) || 0; }
          const countries = {}; for (const r of rows) { const country = customerMap[r.customer_phone]?.country || 'Bilinmiyor'; countries[country] = (countries[country] || 0) + 1; }
          const topCountries = Object.entries(countries).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([country, count]) => ({ country, count }));
          return res.status(200).json({ packages, boatOccupancy, paymentMethods, topCountries });
        }

        if (statsAction === 'peak-analysis') {
          const { data: rows } = await supabase.from('reservations').select('cruise_date, guests, attendance').gte('cruise_date', startDate).lte('cruise_date', endDate).neq('status', 'cancelled');
          const dayNames = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
          const days = Array(7).fill(null).map(() => ({ totalGuests: 0, totalReservations: 0 }));
          const datesByDay = Array(7).fill(null).map(() => new Set());
          for (const r of (rows || [])) { const d = new Date(r.cruise_date); const day = d.getDay(); datesByDay[day].add(r.cruise_date); days[day].totalReservations++; if (r.attendance === 'arrived') days[day].totalGuests += r.guests || 0; }
          const result = dayNames.map((name, i) => { const count = datesByDay[i].size || 1; return { day: name, avgGuests: Math.round(days[i].totalGuests / count), avgReservations: Math.round(days[i].totalReservations / count), totalGuests: days[i].totalGuests }; });
          return res.status(200).json(result);
        }

        if (statsAction === 'hourly-analysis') {
          const { data: rows } = await supabase.from('reservations').select('created_at, guests, status').gte('cruise_date', startDate).lte('cruise_date', endDate).neq('status', 'cancelled');
          const hours = Array(24).fill(null).map((_, i) => ({ hour: i, label: `${String(i).padStart(2, '0')}:00`, reservations: 0, guests: 0 }));
          for (const r of (rows || [])) { if (!r.created_at) continue; const localHour = (new Date(r.created_at).getUTCHours() + 3) % 24; hours[localHour].reservations++; hours[localHour].guests += r.guests || 0; }
          const maxRes = Math.max(...hours.map(h => h.reservations));
          return res.status(200).json({ hours, peakHour: hours.find(h => h.reservations === maxRes)?.hour ?? null, maxReservations: maxRes });
        }

        if (statsAction === 'lead-time') {
          const { data: rows } = await supabase.from('reservations').select('created_at, cruise_date, status').gte('cruise_date', startDate).lte('cruise_date', endDate).neq('status', 'cancelled');
          const buckets = [{ label: 'Aynı gün', min: 0, max: 0, count: 0 }, { label: '1-2 gün', min: 1, max: 2, count: 0 }, { label: '3-7 gün', min: 3, max: 7, count: 0 }, { label: '1-2 hafta', min: 8, max: 14, count: 0 }, { label: '2-4 hafta', min: 15, max: 28, count: 0 }, { label: '1+ ay', min: 29, max: Infinity, count: 0 }];
          for (const r of (rows || [])) { if (!r.created_at || !r.cruise_date) continue; const diffDays = Math.max(0, Math.floor((new Date(r.cruise_date) - new Date(r.created_at)) / 86400000)); const bucket = buckets.find(b => diffDays >= b.min && diffDays <= b.max); if (bucket) bucket.count++; }
          return res.status(200).json(buckets.map(({ label, count }) => ({ label, count })));
        }

        if (statsAction === 'ads-roi') {
          let adsData = null;
          try { const { getCampaignPerformance } = await import('../_lib/google-ads.js'); adsData = await getCampaignPerformance(months * 30); } catch {}
          const { data: rows } = await supabase.from('reservations').select('cruise_date, guests, collected_amount, attendance').gte('cruise_date', startDate).lte('cruise_date', endDate).eq('attendance', 'arrived');
          const totalRevenue = (rows || []).reduce((s, r) => s + (parseFloat(r.collected_amount) || 0), 0);
          const totalBookings = (rows || []).length; const totalGuests = (rows || []).reduce((s, r) => s + (r.guests || 0), 0);
          let totalAdSpend = 0, totalClicks = 0, totalImpressions = 0, totalConversions = 0;
          if (adsData && Array.isArray(adsData)) { for (const c of adsData) { totalAdSpend += parseFloat(c.cost) || 0; totalClicks += parseInt(c.clicks) || 0; totalImpressions += parseInt(c.impressions) || 0; totalConversions += parseInt(c.conversions) || 0; } }
          return res.status(200).json({ connected: !!adsData, totalAdSpend, totalClicks, totalImpressions, totalConversions, totalRevenue, totalBookings, totalGuests, costPerBooking: totalBookings > 0 ? totalAdSpend / totalBookings : 0, costPerGuest: totalGuests > 0 ? totalAdSpend / totalGuests : 0, roas: totalAdSpend > 0 ? totalRevenue / totalAdSpend : 0, ctr: totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0 });
        }

        return res.status(400).json({ error: 'Geçersiz stats_action' });
      } catch (err) { return res.status(500).json({ error: 'Sunucu hatası', detail: err.message }); }
    }
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
