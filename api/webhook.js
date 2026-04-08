import { sendWhatsAppMessage } from './lib/whatsapp.js';
import { generateReply } from './lib/chatbot.js';

// Meta webhook verification + incoming message handler
export default async function handler(req, res) {
  // GET = Meta webhook verification (ilk kurulumda bir kez çağrılır)
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === process.env.WEBHOOK_VERIFY_TOKEN) {
      console.log('Webhook verified');
      return res.status(200).send(challenge);
    }
    return res.status(403).send('Forbidden');
  }

  // POST = Gelen WhatsApp mesajları
  if (req.method === 'POST') {
    try {
      const body = req.body;

      // Meta her zaman bu yapıda gönderir
      const entry = body?.entry?.[0];
      const changes = entry?.changes?.[0];
      const value = changes?.value;

      // Status update (delivered, read vs.) — sadece 200 dön
      if (!value?.messages) {
        return res.status(200).send('OK');
      }

      const message = value.messages[0];
      const from = message.from; // müşterinin telefon numarası
      const phoneNumberId = value.metadata.phone_number_id;

      // Sadece text mesajları işle (şimdilik)
      let customerMessage = '';
      if (message.type === 'text') {
        customerMessage = message.text.body;
      } else if (message.type === 'interactive') {
        customerMessage = message.interactive?.button_reply?.title || 'Button clicked';
      } else {
        customerMessage = `[${message.type} message]`;
      }

      console.log(`Message from ${from}: ${customerMessage}`);

      // AI'dan cevap al
      const aiReply = await generateReply(customerMessage, from);

      // WhatsApp'tan cevap gönder
      await sendWhatsAppMessage(phoneNumberId, from, aiReply);

      return res.status(200).send('OK');
    } catch (error) {
      console.error('Webhook error:', error);
      // Meta 200 bekler, hata olsa bile 200 dön yoksa tekrar tekrar dener
      return res.status(200).send('OK');
    }
  }

  return res.status(405).send('Method not allowed');
}
