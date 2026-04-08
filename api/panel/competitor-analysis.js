import { createClient } from '@supabase/supabase-js';
import { runFullAnalysis } from '../_lib/competitor-analyzer.js';

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

  // Sadece admin_sahip rakip analizine erişebilir
  if (user.role !== 'admin_sahip') {
    return res.status(403).json({ error: 'Bu sayfaya erişiminiz yok' });
  }

  // GET — son raporu ve tarama sonuçlarını getir
  if (req.method === 'GET') {
    const action = req.query.action;

    // Son rapor
    if (action === 'report') {
      const { data } = await supabase
        .from('competitor_reports')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      return res.status(200).json(data || { content: 'Henüz rapor yok. Analizi çalıştırın.' });
    }

    // Rakip listesi ve son fiyatları
    if (action === 'competitors') {
      const { data: competitors } = await supabase
        .from('competitors')
        .select('*')
        .eq('active', true);

      // Her rakibin son taramasını al
      const results = [];
      for (const comp of (competitors || [])) {
        const { data: lastScan } = await supabase
          .from('competitor_scans')
          .select('*')
          .eq('competitor_id', comp.id)
          .order('scanned_at', { ascending: false })
          .limit(1)
          .single();

        results.push({
          ...comp,
          last_scan: lastScan || null,
        });
      }

      return res.status(200).json(results);
    }

    // Fiyat değişiklik geçmişi
    if (action === 'price-history') {
      const { data } = await supabase
        .from('competitor_price_history')
        .select('*, competitors(name)')
        .order('detected_at', { ascending: false })
        .limit(50);

      return res.status(200).json(data || []);
    }

    // Tüm raporlar
    if (action === 'reports') {
      const { data } = await supabase
        .from('competitor_reports')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);

      return res.status(200).json(data || []);
    }

    return res.status(400).json({ error: 'action parametresi gerekli' });
  }

  // POST — yeni analiz çalıştır
  if (req.method === 'POST') {
    try {
      const result = await runFullAnalysis();
      return res.status(200).json(result);
    } catch (error) {
      console.error('Analysis error:', error);
      return res.status(500).json({ error: 'Analiz sırasında hata: ' + error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
