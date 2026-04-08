import { runFullAnalysis } from '../lib/competitor-analyzer.js';

// Vercel Cron Job — günlük rakip analizi
// vercel.json'da schedule tanımlanacak
export default async function handler(req, res) {
  // Cron secret doğrulama (Vercel otomatik gönderir)
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    console.log('Cron: Starting daily competitor analysis...');
    const result = await runFullAnalysis();
    console.log('Cron: Analysis complete.');
    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.error('Cron analysis error:', error);
    return res.status(500).json({ error: error.message });
  }
}
