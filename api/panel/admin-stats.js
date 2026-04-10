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

function getDateRange(months) {
  const end = new Date();
  const start = new Date();
  start.setMonth(start.getMonth() - months);
  return {
    startDate: start.toISOString().split('T')[0],
    endDate: end.toISOString().split('T')[0],
  };
}

export default async function handler(req, res) {
  const user = parseAdminToken(req.headers.authorization);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });
  if (user.role !== 'admin_sahip') return res.status(403).json({ error: 'Yetkiniz yok' });

  // ── POST: AI Analiz ──
  if (req.method === 'POST') {
    const { action, months: reqMonths } = req.body || {};
    if (action !== 'ai-analysis') return res.status(400).json({ error: 'Geçersiz action' });

    const months = parseInt(reqMonths) || 3;
    const { startDate, endDate } = getDateRange(months);

    try {
      // Tüm verileri topla
      const { data: reservations } = await supabase
        .from('reservations')
        .select('cruise_date, created_at, package, boat_id, guests, expected_amount, collected_amount, attendance, status, payment_method, customer_phone')
        .gte('cruise_date', startDate)
        .lte('cruise_date', endDate)
        .neq('status', 'cancelled');

      const { data: boats } = await supabase.from('boats').select('id, name, capacity').eq('active', true);

      const phones = [...new Set((reservations || []).map(r => r.customer_phone).filter(Boolean))];
      let customers = [];
      if (phones.length > 0) {
        const { data } = await supabase.from('customers').select('phone, country, language').in('phone', phones);
        customers = data || [];
      }
      const customerMap = {};
      for (const c of customers) customerMap[c.phone] = c;

      const rows = reservations || [];
      const arrived = rows.filter(r => r.attendance === 'arrived');

      // KPI
      const totalGuests = arrived.reduce((s, r) => s + (r.guests || 0), 0);
      const totalRevenue = arrived.reduce((s, r) => s + (parseFloat(r.collected_amount) || 0), 0);
      const noShowCount = rows.filter(r => r.attendance === 'no_show').length;

      // Paket dağılımı
      const packages = {};
      for (const r of rows) {
        const pkg = r.package || 'unknown';
        if (!packages[pkg]) packages[pkg] = { count: 0, revenue: 0 };
        packages[pkg].count++;
        if (r.attendance === 'arrived') packages[pkg].revenue += parseFloat(r.collected_amount) || 0;
      }

      // Saatlik
      const hourly = Array(24).fill(0);
      for (const r of rows) {
        if (!r.created_at) continue;
        const h = new Date(r.created_at).getUTCHours();
        hourly[(h + 3) % 24]++;
      }

      // Haftalık
      const dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
      const weekly = Array(7).fill(0);
      for (const r of rows) {
        weekly[new Date(r.cruise_date).getDay()]++;
      }

      // Lead time
      const leadTimes = [];
      for (const r of rows) {
        if (!r.created_at || !r.cruise_date) continue;
        leadTimes.push(Math.max(0, Math.floor((new Date(r.cruise_date) - new Date(r.created_at)) / 86400000)));
      }
      const avgLeadTime = leadTimes.length > 0 ? (leadTimes.reduce((a, b) => a + b, 0) / leadTimes.length).toFixed(1) : 0;
      const sameDayPct = leadTimes.length > 0 ? ((leadTimes.filter(d => d === 0).length / leadTimes.length) * 100).toFixed(1) : 0;

      // Ülkeler
      const countries = {};
      for (const r of rows) {
        const country = customerMap[r.customer_phone]?.country || 'Bilinmiyor';
        countries[country] = (countries[country] || 0) + 1;
      }
      const topCountries = Object.entries(countries).sort((a, b) => b[1] - a[1]).slice(0, 10);

      // Tekne doluluk
      const boatStats = (boats || []).map(b => {
        const bRows = arrived.filter(r => r.boat_id === b.id);
        const guests = bRows.reduce((s, r) => s + (r.guests || 0), 0);
        const days = new Set(rows.filter(r => r.boat_id === b.id).map(r => r.cruise_date)).size || 1;
        return { name: b.name, capacity: b.capacity, avgGuests: Math.round(guests / days), occupancy: b.capacity > 0 ? Math.round((guests / days / b.capacity) * 100) : 0 };
      });

      // Ödeme
      const cashCount = arrived.filter(r => r.payment_method === 'cash').length;
      const cardCount = arrived.filter(r => r.payment_method === 'card').length;

      // Claude'a gönder
      const statsData = {
        period: `Son ${months} ay (${startDate} - ${endDate})`,
        totalReservations: rows.length,
        totalGuests,
        totalRevenue: `€${totalRevenue.toFixed(0)}`,
        avgPerGuest: totalGuests > 0 ? `€${(totalRevenue / totalGuests).toFixed(1)}` : '€0',
        noShowRate: rows.length > 0 ? `%${((noShowCount / rows.length) * 100).toFixed(1)}` : '%0',
        packages,
        boatStats,
        topCountries,
        hourlyDistribution: hourly.map((count, h) => count > 0 ? `${String(h).padStart(2, '0')}:00=${count}` : null).filter(Boolean),
        weeklyDistribution: dayNames.map((name, i) => `${name}=${weekly[i]}`),
        avgLeadTimeDays: avgLeadTime,
        sameDayBookingPct: `%${sameDayPct}`,
        paymentSplit: `Nakit: ${cashCount}, Kart: ${cardCount}`,
      };

      const prompt = `Sen bir turizm ve dijital pazarlama uzmanısın. Aşağıdaki İstanbul Boğaz turu istatistiklerini analiz et.

BİZİM İŞLETME (Bosphorus Night):
- Standard €35: 3 saat, açık büfe, canlı müzik, dans şovları
- Premium €50: + öncelikli oturma, karşılama içeceği, zengin menü
- VIP €80: + özel masa, sınırsız içecek, otel transferi
- Rezervasyon: Sadece WhatsApp, online ödeme yok, teknede ödeme
- Kalkış: Kabataş iskelesi, 20:00-23:30

İSTATİSTİKLER:
${JSON.stringify(statsData, null, 2)}

GÖREV: Bu verileri analiz edip TÜRKÇE strateji önerileri ver. Özellikle şunlara odaklan:
1. Google Ads reklam bütçesini hangi saatlere ve günlere yoğunlaştırmalıyız
2. Hangi ülkeleri hedeflemeliyiz
3. Paket fiyatlaması doğru mu, değişiklik lazım mı
4. No-show oranını nasıl düşürebiliriz
5. Aynı gün rezervasyon oranı yüksekse/düşükse ne anlama geliyor
6. Tekne doluluk oranlarına göre operasyonel öneriler

SADECE bu JSON formatında yanıt ver (başka metin yazma):
{"summary":"2-3 cümle genel değerlendirme","recommendations":[{"action":"yapılması gereken","reason":"neden","priority":"high/medium/low","category":"reklam/fiyat/operasyon/hedef-kitle"}],"ad_strategy":{"best_hours":"reklam için en iyi saat aralıkları","best_days":"reklam için en iyi günler","target_countries":"hedef ülkeler ve neden","budget_tips":"bütçe dağılım önerisi"},"pricing_tips":"fiyatlama önerisi","risk_alerts":["dikkat edilmesi gereken riskler"]}`;

      const claude = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY });
      const response = await claude.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 3000,
        messages: [{ role: 'user', content: prompt }],
      });

      const text = response.content[0].text;
      const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const report = JSON.parse(cleaned);

      return res.status(200).json(report);
    } catch (err) {
      return res.status(500).json({ error: 'AI analiz hatası', detail: err.message });
    }
  }

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const action = req.query.action;
  const months = parseInt(req.query.months) || 3;
  const { startDate, endDate } = getDateRange(months);

  try {
    // ── OVERVIEW: KPI kartları ──
    if (action === 'overview') {
      const { data: current } = await supabase
        .from('reservations')
        .select('guests, expected_amount, collected_amount, attendance, status, cruise_date')
        .gte('cruise_date', startDate)
        .lte('cruise_date', endDate)
        .neq('status', 'cancelled');

      // Önceki dönem karşılaştırma
      const prevStart = new Date(startDate);
      prevStart.setMonth(prevStart.getMonth() - months);
      const { data: previous } = await supabase
        .from('reservations')
        .select('guests, collected_amount, attendance, status')
        .gte('cruise_date', prevStart.toISOString().split('T')[0])
        .lt('cruise_date', startDate)
        .neq('status', 'cancelled');

      const calc = (rows) => {
        const arrived = (rows || []).filter(r => r.attendance === 'arrived');
        const totalGuests = arrived.reduce((s, r) => s + (r.guests || 0), 0);
        const totalCollected = arrived.reduce((s, r) => s + (parseFloat(r.collected_amount) || 0), 0);
        const noShowCount = (rows || []).filter(r => r.attendance === 'no_show').length;
        return {
          totalRevenue: totalCollected,
          totalGuests,
          avgPerGuest: totalGuests > 0 ? totalCollected / totalGuests : 0,
          noShowRate: (rows || []).length > 0 ? (noShowCount / (rows || []).length) * 100 : 0,
          totalReservations: (rows || []).length,
          arrivedCount: arrived.length,
          noShowCount,
        };
      };

      const cur = calc(current);
      const prev = calc(previous);

      const pctChange = (cur, prev) => prev > 0 ? ((cur - prev) / prev) * 100 : 0;

      return res.status(200).json({
        ...cur,
        changes: {
          revenue: pctChange(cur.totalRevenue, prev.totalRevenue),
          guests: pctChange(cur.totalGuests, prev.totalGuests),
          avgPerGuest: pctChange(cur.avgPerGuest, prev.avgPerGuest),
          noShowRate: cur.noShowRate - prev.noShowRate,
        }
      });
    }

    // ── REVENUE TREND: Gelir trendi ──
    if (action === 'revenue-trend') {
      const granularity = req.query.granularity || 'daily'; // daily | weekly | monthly

      const { data: rows } = await supabase
        .from('reservations')
        .select('cruise_date, guests, expected_amount, collected_amount, attendance, status')
        .gte('cruise_date', startDate)
        .lte('cruise_date', endDate)
        .neq('status', 'cancelled')
        .order('cruise_date', { ascending: true });

      const grouped = {};
      for (const r of (rows || [])) {
        let key = r.cruise_date;
        if (granularity === 'weekly') {
          const d = new Date(r.cruise_date);
          const weekStart = new Date(d);
          weekStart.setDate(d.getDate() - d.getDay() + 1);
          key = weekStart.toISOString().split('T')[0];
        } else if (granularity === 'monthly') {
          key = r.cruise_date.substring(0, 7);
        }

        if (!grouped[key]) grouped[key] = { date: key, expected: 0, collected: 0, guests: 0, reservations: 0 };
        grouped[key].expected += parseFloat(r.expected_amount) || 0;
        grouped[key].reservations++;
        if (r.attendance === 'arrived') {
          grouped[key].collected += parseFloat(r.collected_amount) || 0;
          grouped[key].guests += r.guests || 0;
        }
      }

      return res.status(200).json(Object.values(grouped).sort((a, b) => a.date.localeCompare(b.date)));
    }

    // ── BREAKDOWN: Paket, tekne, ödeme, ülke dağılımı ──
    if (action === 'breakdown') {
      const { data: reservations } = await supabase
        .from('reservations')
        .select('package, boat_id, guests, collected_amount, payment_method, attendance, customer_phone, status')
        .gte('cruise_date', startDate)
        .lte('cruise_date', endDate)
        .neq('status', 'cancelled');

      const { data: boats } = await supabase.from('boats').select('id, name, capacity').eq('active', true);

      // Müşteri ülkeleri
      const phones = [...new Set((reservations || []).map(r => r.customer_phone).filter(Boolean))];
      let customers = [];
      if (phones.length > 0) {
        const { data } = await supabase.from('customers').select('phone, country, language').in('phone', phones);
        customers = data || [];
      }
      const customerMap = {};
      for (const c of customers) customerMap[c.phone] = c;

      const rows = reservations || [];
      const arrived = rows.filter(r => r.attendance === 'arrived');

      // Paket dağılımı
      const packages = {};
      for (const r of rows) {
        const pkg = r.package || 'unknown';
        if (!packages[pkg]) packages[pkg] = { count: 0, revenue: 0, guests: 0 };
        packages[pkg].count++;
        if (r.attendance === 'arrived') {
          packages[pkg].revenue += parseFloat(r.collected_amount) || 0;
          packages[pkg].guests += r.guests || 0;
        }
      }

      // Tekne doluluk
      const boatOccupancy = (boats || []).map(boat => {
        const boatRows = arrived.filter(r => r.boat_id === boat.id);
        const totalGuests = boatRows.reduce((s, r) => s + (r.guests || 0), 0);
        const days = new Set(rows.filter(r => r.boat_id === boat.id).map(r => r.cruise_date)).size || 1;
        return {
          name: boat.name,
          capacity: boat.capacity,
          avgGuests: Math.round(totalGuests / days),
          occupancyRate: boat.capacity > 0 ? Math.round((totalGuests / days / boat.capacity) * 100) : 0,
        };
      });

      // Ödeme yöntemi
      const paymentMethods = { cash: { count: 0, amount: 0 }, card: { count: 0, amount: 0 }, other: { count: 0, amount: 0 } };
      for (const r of arrived) {
        const method = r.payment_method || 'other';
        const key = paymentMethods[method] ? method : 'other';
        paymentMethods[key].count++;
        paymentMethods[key].amount += parseFloat(r.collected_amount) || 0;
      }

      // Ülke dağılımı
      const countries = {};
      for (const r of rows) {
        const cust = customerMap[r.customer_phone];
        const country = cust?.country || 'Bilinmiyor';
        countries[country] = (countries[country] || 0) + 1;
      }
      const topCountries = Object.entries(countries)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([country, count]) => ({ country, count }));

      return res.status(200).json({ packages, boatOccupancy, paymentMethods, topCountries });
    }

    // ── PEAK ANALYSIS: Haftalık yoğunluk ──
    if (action === 'peak-analysis') {
      const { data: rows } = await supabase
        .from('reservations')
        .select('cruise_date, guests, attendance')
        .gte('cruise_date', startDate)
        .lte('cruise_date', endDate)
        .neq('status', 'cancelled');

      const dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
      const days = Array(7).fill(null).map(() => ({ totalGuests: 0, totalReservations: 0, dayCount: 0 }));

      // Hangi günlerde cruise vardı say
      const datesByDay = Array(7).fill(null).map(() => new Set());
      for (const r of (rows || [])) {
        const d = new Date(r.cruise_date);
        const day = d.getDay();
        datesByDay[day].add(r.cruise_date);
        days[day].totalReservations++;
        if (r.attendance === 'arrived') {
          days[day].totalGuests += r.guests || 0;
        }
      }

      const result = dayNames.map((name, i) => {
        const count = datesByDay[i].size || 1;
        return {
          day: name,
          avgGuests: Math.round(days[i].totalGuests / count),
          avgReservations: Math.round(days[i].totalReservations / count),
          totalGuests: days[i].totalGuests,
        };
      });

      return res.status(200).json(result);
    }

    // ── HOURLY ANALYSIS: 24 saat bazında rezervasyon yoğunluğu ──
    if (action === 'hourly-analysis') {
      const { data: rows } = await supabase
        .from('reservations')
        .select('created_at, guests, status')
        .gte('cruise_date', startDate)
        .lte('cruise_date', endDate)
        .neq('status', 'cancelled');

      const hours = Array(24).fill(null).map((_, i) => ({
        hour: i,
        label: `${String(i).padStart(2, '0')}:00`,
        reservations: 0,
        guests: 0,
      }));

      for (const r of (rows || [])) {
        if (!r.created_at) continue;
        const h = new Date(r.created_at).getUTCHours();
        // UTC+3 Istanbul timezone
        const localHour = (h + 3) % 24;
        hours[localHour].reservations++;
        hours[localHour].guests += r.guests || 0;
      }

      const maxRes = Math.max(...hours.map(h => h.reservations));

      return res.status(200).json({
        hours,
        peakHour: hours.find(h => h.reservations === maxRes)?.hour ?? null,
        maxReservations: maxRes,
      });
    }

    // ── LEAD TIME: Rezervasyon zamanlaması ──
    if (action === 'lead-time') {
      const { data: rows } = await supabase
        .from('reservations')
        .select('created_at, cruise_date, status')
        .gte('cruise_date', startDate)
        .lte('cruise_date', endDate)
        .neq('status', 'cancelled');

      const buckets = [
        { label: 'Aynı gün', min: 0, max: 0, count: 0 },
        { label: '1-2 gün', min: 1, max: 2, count: 0 },
        { label: '3-7 gün', min: 3, max: 7, count: 0 },
        { label: '1-2 hafta', min: 8, max: 14, count: 0 },
        { label: '2-4 hafta', min: 15, max: 28, count: 0 },
        { label: '1+ ay', min: 29, max: Infinity, count: 0 },
      ];

      for (const r of (rows || [])) {
        if (!r.created_at || !r.cruise_date) continue;
        const created = new Date(r.created_at);
        const cruise = new Date(r.cruise_date);
        const diffDays = Math.max(0, Math.floor((cruise - created) / (1000 * 60 * 60 * 24)));
        const bucket = buckets.find(b => diffDays >= b.min && diffDays <= b.max);
        if (bucket) bucket.count++;
      }

      return res.status(200).json(buckets.map(({ label, count }) => ({ label, count })));
    }

    // ── ADS ROI: Google Ads vs Rezervasyon ──
    if (action === 'ads-roi') {
      let adsData = null;
      try {
        const { getCampaignPerformance } = await import('../_lib/google-ads.js');
        const days = months * 30;
        adsData = await getCampaignPerformance(days);
      } catch {
        // Google Ads bağlı değilse null
      }

      const { data: rows } = await supabase
        .from('reservations')
        .select('cruise_date, guests, collected_amount, attendance')
        .gte('cruise_date', startDate)
        .lte('cruise_date', endDate)
        .eq('attendance', 'arrived');

      const totalRevenue = (rows || []).reduce((s, r) => s + (parseFloat(r.collected_amount) || 0), 0);
      const totalBookings = (rows || []).length;
      const totalGuests = (rows || []).reduce((s, r) => s + (r.guests || 0), 0);

      let totalAdSpend = 0;
      let totalClicks = 0;
      let totalImpressions = 0;
      let totalConversions = 0;
      if (adsData && Array.isArray(adsData)) {
        for (const c of adsData) {
          totalAdSpend += parseFloat(c.cost) || 0;
          totalClicks += parseInt(c.clicks) || 0;
          totalImpressions += parseInt(c.impressions) || 0;
          totalConversions += parseInt(c.conversions) || 0;
        }
      }

      return res.status(200).json({
        connected: !!adsData,
        totalAdSpend,
        totalClicks,
        totalImpressions,
        totalConversions,
        totalRevenue,
        totalBookings,
        totalGuests,
        costPerBooking: totalBookings > 0 ? totalAdSpend / totalBookings : 0,
        costPerGuest: totalGuests > 0 ? totalAdSpend / totalGuests : 0,
        roas: totalAdSpend > 0 ? totalRevenue / totalAdSpend : 0,
        ctr: totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0,
      });
    }

    return res.status(400).json({ error: 'Geçersiz action parametresi' });
  } catch (err) {
    return res.status(500).json({ error: 'Sunucu hatası', detail: err.message });
  }
}
