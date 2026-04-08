// WhatsApp Cloud API üzerinden mesaj gönder
export async function sendWhatsAppMessage(phoneNumberId, to, text) {
  const url = `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { body: text },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('WhatsApp send error:', error);
    throw new Error(`WhatsApp API error: ${response.status}`);
  }

  return response.json();
}

// Butonlu mesaj gönder (paket seçimi vs. için)
export async function sendWhatsAppButtons(phoneNumberId, to, bodyText, buttons) {
  const url = `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to,
      type: 'interactive',
      interactive: {
        type: 'button',
        body: { text: bodyText },
        action: {
          buttons: buttons.map((btn, i) => ({
            type: 'reply',
            reply: { id: `btn_${i}`, title: btn },
          })),
        },
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('WhatsApp buttons error:', error);
    throw new Error(`WhatsApp API error: ${response.status}`);
  }

  return response.json();
}
