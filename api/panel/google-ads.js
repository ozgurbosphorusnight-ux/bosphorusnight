import { getAuthUrl, getCampaignPerformance, getKeywordPerformance, isConnected } from '../_lib/google-ads.js';

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
  if (!user || user.role !== 'admin_sahip') {
    return res.status(401).json({ error: 'Yetkisiz' });
  }

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const action = req.query.action;

  // OAuth URL al
  if (action === 'auth-url') {
    return res.status(200).json({ url: getAuthUrl() });
  }

  // Bağlantı durumu
  if (action === 'status') {
    const connected = await isConnected();
    return res.status(200).json({ connected });
  }

  // Kampanya performansı
  if (action === 'campaigns') {
    const days = parseInt(req.query.days) || 7;
    const data = await getCampaignPerformance(days);
    return res.status(200).json(data);
  }

  // Kelime performansı
  if (action === 'keywords') {
    const days = parseInt(req.query.days) || 7;
    const data = await getKeywordPerformance(days);
    return res.status(200).json(data);
  }

  return res.status(400).json({ error: 'action gerekli' });
}
