const { sendMail } = require('../config/mailer')

/**
 * POST /api/contact
 * Body: { name, email, subject, message }
 */
async function handleContact(req, res) {
  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Fehlende Felder: name, email, message.' })
  }

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1A2B1C;">
      <div style="background:#234C2F;padding:24px 32px;border-radius:12px 12px 0 0;">
        <h2 style="color:#fff;margin:0;font-size:20px;">🐾 Neue Nachricht von ${name}</h2>
      </div>
      <div style="background:#f9f9f9;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e0e0e0;border-top:none;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;font-weight:700;color:#234C2F;width:100px;">Name:</td><td style="padding:8px 0;">${name}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#234C2F;">E-Mail:</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#77AE3A;">${email}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#234C2F;">Betreff:</td><td style="padding:8px 0;">${subject || '–'}</td></tr>
        </table>
        <div style="margin-top:24px;padding:20px;background:#fff;border-radius:8px;border-left:4px solid #77AE3A;">
          <p style="margin:0;white-space:pre-wrap;font-size:15px;line-height:1.7;">${message}</p>
        </div>
        <p style="margin-top:24px;font-size:12px;color:#888;">
          Gesendet über velunoo.ch — ${new Date().toLocaleString('de-CH')}
        </p>
      </div>
    </div>
  `

  try {
    await sendMail({
      to: 'Stajinchirakal@gmail.com',
      subject: `[Velunoo Kontakt] ${subject || 'Neue Nachricht'} — von ${name}`,
      html
    })
    res.status(201).json({ success: true, message: 'Nachricht gesendet.' })
  } catch (err) {
    console.error('[Contact] Fehler beim Senden:', err.message)
    res.status(500).json({ error: 'Nachricht konnte nicht gesendet werden.' })
  }
}

module.exports = { handleContact }
