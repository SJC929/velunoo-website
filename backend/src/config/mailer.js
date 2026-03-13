const { Resend } = require('resend')
const nodemailer = require('nodemailer')

// Primary: Resend API
const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Send email via Resend (primary) with nodemailer fallback
 * @param {object} options - { to, subject, html, attachments }
 */
async function sendMail({ to, subject, html, attachments = [] }) {
  try {
    const payload = {
      from: process.env.MAIL_FROM || 'bestellungen@velunoo.ch',
      to,
      subject,
      html,
      attachments: attachments.map(a => ({
        filename: a.filename,
        content: a.content // Buffer
      }))
    }

    const { data, error } = await resend.emails.send(payload)
    if (error) throw error
    return data
  } catch (err) {
    console.error('[Mailer] Resend failed, trying nodemailer fallback:', err.message)

    // Nodemailer fallback (configure SMTP if needed)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.resend.com',
      port: parseInt(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'resend',
        pass: process.env.RESEND_API_KEY
      }
    })

    return transporter.sendMail({
      from: process.env.MAIL_FROM,
      to,
      subject,
      html,
      attachments
    })
  }
}

module.exports = { sendMail }
