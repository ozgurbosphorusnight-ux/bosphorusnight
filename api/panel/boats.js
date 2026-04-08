import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { data, error } = await supabase
    .from('boats')
    .select('name, slug')
    .eq('active', true)
    .order('name');

  if (error) return res.status(500).json({ error: 'Database error' });

  return res.status(200).json(data);
}
