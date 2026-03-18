const { sendMail } = require('../config/mailer')
const { generateInvoicePDF } = require('./generatePDF')
const { buildEmailHtml, buildShippingEmailHtml } = require('../templates/emailTemplate')
const { formatOrderNumber } = require('./orderNumber')

/**
 * Send invoice email with PDF attachment after successful payment.
 * @param {object} order - full order row from DB
 */
async function sendInvoiceEmail(order) {
  const orderNum = formatOrderNumber(order.order_number)
  const lang = order.language || 'de'

  const subjects = {
    de: `Deine Velunoo Bestellung ${orderNum} ✅`,
    'zh-züri': `Dini Velunoo Bstellig ${orderNum} ✅`,
    'zh-bern': `Dini Velunoo Bstellig ${orderNum} ✅`,
    'zh-basel': `Dini Velunoo Bstellig ${orderNum} ✅`,
    en: `Your Velunoo Order ${orderNum} ✅`,
    fr: `Votre commande Velunoo ${orderNum} ✅`,
    it: `Il tuo ordine Velunoo ${orderNum} ✅`,
    nl: `Jouw Velunoo bestelling ${orderNum} ✅`
  }

  const subject = subjects[lang] || subjects['de']
  const html = buildEmailHtml(order, lang)
  const pdfBuffer = await generateInvoicePDF(order)

  await sendMail({
    to: order.customer_email,
    subject,
    html,
    attachments: [
      {
        filename: `Velunoo-Rechnung-${orderNum}.pdf`,
        content: pdfBuffer
      }
    ]
  })
}

/**
 * Send shipping confirmation email when admin marks order as shipped.
 * @param {object} order - full order row from DB
 */
async function sendShippingEmail(order) {
  const orderNum = formatOrderNumber(order.order_number)
  const lang = order.language || 'de'

  const subjects = {
    de: `Deine Velunoo Bestellung ${orderNum} wurde versendet 🚚`,
    'ch-de': `Dini Velunoo Bstellig ${orderNum} isch usgschickt worde 🚚`,
    en: `Your Velunoo Order ${orderNum} has been shipped 🚚`,
    fr: `Votre commande Velunoo ${orderNum} a été expédiée 🚚`,
    it: `Il tuo ordine Velunoo ${orderNum} è stato spedito 🚚`
  }

  const subject = subjects[lang] || subjects['de']
  const html = buildShippingEmailHtml(order, lang)

  await sendMail({
    to: order.customer_email,
    subject,
    html
  })
}

module.exports = { sendInvoiceEmail, sendShippingEmail }
