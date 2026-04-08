import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Kullanıcı adı ve şifre gerekli' });

  const { data: user, error } = await supabase
    .from('admin_users')
    .select('id, name, username, role, login_code')
    .eq('username', username)
    .eq('active', true)
    .single();

  if (error || !user) return res.status(401).json({ error: 'Kullanıcı bulunamadı' });
  if (user.login_code !== password) return res.status(401).json({ error: 'Hatalı şifre' });

  const token = Buffer.from(`admin:${user.id}:${user.role}:${Date.now()}`).toString('base64');

  return res.status(200).json({
    token,
    name: user.name,
    role: user.role,
  });
}
