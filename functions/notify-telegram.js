// Netlify Function: notify-telegram
// Securely forwards name submissions to Telegram without exposing the bot token on the client.

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { name } = JSON.parse(event.body || '{}');
    if (!name || typeof name !== 'string' || !name.trim()) {
      return { statusCode: 400, body: 'Missing or invalid name' };
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return { statusCode: 500, body: 'Server not configured: missing env vars' };
    }

    const text = `Khách nhập tên: ${name.trim()}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text })
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return { statusCode: 502, body: `Telegram error: ${errText}` };
    }

    return { statusCode: 200, body: 'OK' };
  } catch (e) {
    return { statusCode: 500, body: 'Internal Error' };
  }
};
