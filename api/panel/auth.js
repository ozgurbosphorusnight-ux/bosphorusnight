import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { slug, code } = req.body;

  if (!slug || !code) return res.status(400).json({ error: 'Tekne ve kod gerekli' });

  const { data: boat, error } = await supabase
    .from('boats')
    .select('id, name, slug, login_code')
    .eq('slug', slug)
    .eq('active', true)
    .single();

  if (error || !boat) return res.status(401).json({ error: 'Tekne bulunamadı' });

  if (boat.login_code !== code) return res.status(401).json({ error: 'Hatalı giriş kodu' });

  // Basit token: base64(boat_id:slug:timestamp)
  const token = Buffer.from(`${boat.id}:${boat.slug}:${Date.now()}`).toString('base64');

  return res.status(200).json({
    token,
    boat_id: boat.id,
    boat_name: boat.name,
  });
}
