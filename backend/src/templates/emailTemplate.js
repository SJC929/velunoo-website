const { formatOrderNumber } = require('../utils/orderNumber')

const VAT_RATE = 0.081

const i18n = {
  de: {
    greeting: name => `Hallo ${name}`,
    intro: num => `Vielen Dank für deine Bestellung bei Velunoo! Hier ist deine Bestellbestätigung für ${num}.`,
    orderDetails: 'Bestelldetails',
    product: 'Produkt',
    qty: 'Menge',
    price: 'Preis',
    subtotal: 'Zwischensumme',
    vat: 'MwSt. 8.1% (CH)',
    total: 'Gesamt',
    attachment: 'Die Rechnung findest du im Anhang als PDF.',
    thanks: 'Danke, dass du bei Velunoo bestellst! 🐾',
    team: 'Dein Velunoo-Team'
  },
  en: {
    greeting: name => `Hello ${name}`,
    intro: num => `Thank you for your order at Velunoo! Here is your order confirmation for ${num}.`,
    orderDetails: 'Order Details',
    product: 'Product',
    qty: 'Qty',
    price: 'Price',
    subtotal: 'Subtotal',
    vat: 'VAT 8.1% (CH)',
    total: 'Total',
    attachment: 'You will find your invoice attached as a PDF.',
    thanks: 'Thank you for shopping at Velunoo! 🐾',
    team: 'Your Velunoo Team'
  },
  fr: {
    greeting: name => `Bonjour ${name}`,
    intro: num => `Merci pour votre commande chez Velunoo! Voici votre confirmation pour ${num}.`,
    orderDetails: 'Détails de la commande',
    product: 'Produit',
    qty: 'Qté',
    price: 'Prix',
    subtotal: 'Sous-total',
    vat: 'TVA 8.1% (CH)',
    total: 'Total',
    attachment: 'Vous trouverez votre facture en pièce jointe au format PDF.',
    thanks: 'Merci de faire vos achats chez Velunoo! 🐾',
    team: 'Votre équipe Velunoo'
  },
  it: {
    greeting: name => `Ciao ${name}`,
    intro: num => `Grazie per il tuo ordine su Velunoo! Ecco la conferma per ${num}.`,
    orderDetails: 'Dettagli ordine',
    product: 'Prodotto',
    qty: 'Qtà',
    price: 'Prezzo',
    subtotal: 'Subtotale',
    vat: 'IVA 8.1% (CH)',
    total: 'Totale',
    attachment: "Troverai la tua fattura allegata come PDF.",
    thanks: 'Grazie per aver scelto Velunoo! 🐾',
    team: 'Il tuo team Velunoo'
  },
  nl: {
    greeting: name => `Hallo ${name}`,
    intro: num => `Bedankt voor je bestelling bij Velunoo! Hier is je orderbevestiging voor ${num}.`,
    orderDetails: 'Bestelgegevens',
    product: 'Product',
    qty: 'Aantal',
    price: 'Prijs',
    subtotal: 'Subtotaal',
    vat: 'BTW 8.1% (CH)',
    total: 'Totaal',
    attachment: 'Je factuur vind je als PDF bijlage.',
    thanks: 'Bedankt voor je aankoop bij Velunoo! 🐾',
    team: 'Jouw Velunoo Team'
  }
}

const shippingI18n = {
  de: {
    subject: num => `Deine Velunoo Bestellung ${num} wurde versendet 🚚`,
    greeting: name => `Hallo ${name}`,
    intro: num => `Gute Neuigkeiten! Deine Bestellung ${num} ist unterwegs zu dir.`,
    trackingTitle: 'Versanddetails',
    address: 'Lieferadresse',
    deliveryInfo: 'Dein Paket sollte in den nächsten 2–5 Werktagen bei dir ankommen.',
    thanks: 'Danke, dass du bei Velunoo bestellst! 🐾',
    team: 'Dein Velunoo-Team'
  },
  'ch-de': {
    subject: num => `Dini Velunoo Bstellig ${num} isch usgschickt worde 🚚`,
    greeting: name => `Hoi ${name}`,
    intro: num => `Gueti Nöiikeite! Dini Bstellig ${num} isch underwegs zu dir.`,
    trackingTitle: 'Versanddetail',
    address: 'Lieferadrässe',
    deliveryInfo: 'Dis Päckli sötti innerhalb vo 2–5 Werchtig bi dir ankoo.',
    thanks: 'Merci, dass du bi Velunoo bstellsch! 🐾',
    team: 'Dis Velunoo-Team'
  },
  en: {
    subject: num => `Your Velunoo Order ${num} has been shipped 🚚`,
    greeting: name => `Hello ${name}`,
    intro: num => `Great news! Your order ${num} is on its way to you.`,
    trackingTitle: 'Shipping Details',
    address: 'Delivery Address',
    deliveryInfo: 'Your package should arrive within 2–5 business days.',
    thanks: 'Thank you for shopping at Velunoo! 🐾',
    team: 'Your Velunoo Team'
  },
  fr: {
    subject: num => `Votre commande Velunoo ${num} a été expédiée 🚚`,
    greeting: name => `Bonjour ${name}`,
    intro: num => `Bonne nouvelle ! Votre commande ${num} est en route vers vous.`,
    trackingTitle: 'Détails d\'expédition',
    address: 'Adresse de livraison',
    deliveryInfo: 'Votre colis devrait arriver dans 2 à 5 jours ouvrables.',
    thanks: 'Merci de faire vos achats chez Velunoo ! 🐾',
    team: 'Votre équipe Velunoo'
  },
  it: {
    subject: num => `Il tuo ordine Velunoo ${num} è stato spedito 🚚`,
    greeting: name => `Ciao ${name}`,
    intro: num => `Ottime notizie! Il tuo ordine ${num} è in viaggio verso di te.`,
    trackingTitle: 'Dettagli spedizione',
    address: 'Indirizzo di consegna',
    deliveryInfo: 'Il tuo pacco dovrebbe arrivare entro 2–5 giorni lavorativi.',
    thanks: 'Grazie per aver scelto Velunoo! 🐾',
    team: 'Il tuo team Velunoo'
  }
}

// Swiss German dialects fall back to DE
function getLocale(lang) {
  if (lang && (lang.startsWith('zh') || lang === 'ch-de')) return i18n.de
  return i18n[lang] || i18n.de
}

function getShippingLocale(lang) {
  if (lang && lang.startsWith('zh')) return shippingI18n['ch-de']
  return shippingI18n[lang] || shippingI18n.de
}

function buildEmailHtml(order, lang = 'de') {
  const t = getLocale(lang)
  const orderNum = formatOrderNumber(order.order_number)
  const items = Array.isArray(order.items) ? order.items : JSON.parse(order.items || '[]')
  const currency = order.currency || 'CHF'
  const total = parseFloat(order.total_price)
  const vatAmount = total - total / (1 + VAT_RATE)
  const subtotal = total - vatAmount

  const itemRows = items.map(item => `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #EAF4D6;">${item.name_de || item.name || item.name_en || 'Produkt'}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #EAF4D6;text-align:center;">${item.quantity}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #EAF4D6;text-align:right;">${currency} ${(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
    </tr>
  `).join('')

  return `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Velunoo Bestellung ${orderNum}</title>
</head>
<body style="margin:0;padding:0;background:#F5F5F5;font-family:'Montserrat',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F5F5;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#234C2F;padding:30px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="color:#FFFFFF;font-size:28px;font-weight:700;letter-spacing:2px;">VELUNOO</span><br>
                    <span style="color:#77AE3A;font-size:12px;">velunoo.ch</span>
                  </td>
                  <td align="right">
                    <span style="color:#EAF4D6;font-size:13px;">${orderNum}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="color:#234C2F;font-size:18px;font-weight:700;margin:0 0 8px;">${t.greeting(order.customer_name)},</p>
              <p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 28px;">${t.intro(orderNum)}</p>

              <!-- Order Table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #EAF4D6;">
                <thead>
                  <tr style="background:#234C2F;">
                    <th style="padding:12px 12px;color:#fff;font-size:11px;text-align:left;font-weight:600;">${t.product}</th>
                    <th style="padding:12px 12px;color:#fff;font-size:11px;text-align:center;font-weight:600;">${t.qty}</th>
                    <th style="padding:12px 12px;color:#fff;font-size:11px;text-align:right;font-weight:600;">${t.price}</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemRows}
                </tbody>
                <tfoot>
                  <tr style="background:#F5F5F5;">
                    <td colspan="2" style="padding:10px 12px;color:#555;font-size:13px;">${t.subtotal}</td>
                    <td style="padding:10px 12px;text-align:right;color:#555;font-size:13px;">${currency} ${subtotal.toFixed(2)}</td>
                  </tr>
                  <tr style="background:#F5F5F5;">
                    <td colspan="2" style="padding:6px 12px;color:#888;font-size:12px;">${t.vat}</td>
                    <td style="padding:6px 12px;text-align:right;color:#888;font-size:12px;">${currency} ${vatAmount.toFixed(2)}</td>
                  </tr>
                  <tr style="background:#EAF4D6;">
                    <td colspan="2" style="padding:14px 12px;color:#234C2F;font-weight:700;font-size:15px;">${t.total}</td>
                    <td style="padding:14px 12px;text-align:right;color:#234C2F;font-weight:700;font-size:15px;">${currency} ${total.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>

              <!-- Shipping Address -->
              <div style="margin-top:24px;padding:16px;background:#F5F5F5;border-radius:10px;border-left:4px solid #77AE3A;">
                <p style="margin:0;color:#555;font-size:13px;line-height:1.8;">
                  <strong style="color:#234C2F;">${order.customer_name}</strong><br>
                  ${order.address}<br>
                  ${order.country || ''}
                </p>
              </div>

              <p style="color:#888;font-size:13px;margin:24px 0 0;">${t.attachment}</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#234C2F;padding:24px 40px;text-align:center;">
              <p style="color:#EAF4D6;font-size:13px;margin:0 0 6px;">${t.thanks}</p>
              <p style="color:#77AE3A;font-size:12px;margin:0;">${t.team}</p>
              <p style="margin:12px 0 0;">
                <a href="https://instagram.com/velunoo.ch" style="color:#77AE3A;font-size:11px;text-decoration:none;margin:0 8px;">@velunoo.ch</a>
                <a href="https://velunoo.ch" style="color:#77AE3A;font-size:11px;text-decoration:none;margin:0 8px;">velunoo.ch</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

function buildShippingEmailHtml(order, lang = 'de') {
  const t = getShippingLocale(lang)
  const orderNum = formatOrderNumber(order.order_number)
  const currency = order.currency || 'CHF'
  const total = parseFloat(order.total_price)
  const items = Array.isArray(order.items) ? order.items : JSON.parse(order.items || '[]')

  const itemRows = items.map(item => `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #EAF4D6;">${item.name_de || item.name || 'Produkt'}${item.variant ? ' <span style="color:#6B7A5A;font-size:12px;">('+item.variant+')</span>' : ''}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #EAF4D6;text-align:right;font-weight:700;color:#234C2F;">${currency} ${(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}</td>
    </tr>
  `).join('')

  return `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Versandbestätigung ${orderNum}</title>
</head>
<body style="margin:0;padding:0;background:#F5F5F5;font-family:'Montserrat',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F5F5;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#234C2F;padding:30px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="color:#FFFFFF;font-size:28px;font-weight:700;letter-spacing:2px;">VELUNOO</span><br>
                    <span style="color:#77AE3A;font-size:12px;">velunoo.ch</span>
                  </td>
                  <td align="right">
                    <span style="background:#77AE3A;color:#fff;font-size:13px;font-weight:700;padding:6px 14px;border-radius:99px;">🚚 Versendet</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="color:#234C2F;font-size:18px;font-weight:700;margin:0 0 8px;">${t.greeting(order.customer_name)},</p>
              <p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 24px;">${t.intro(orderNum)}</p>

              <!-- Truck banner -->
              <div style="background:#EEF5E6;border-radius:12px;padding:20px 24px;text-align:center;margin-bottom:28px;">
                <p style="font-size:40px;margin:0 0 8px;">🚚</p>
                <p style="color:#234C2F;font-size:14px;font-weight:600;margin:0;">${t.deliveryInfo}</p>
              </div>

              <!-- Items -->
              <p style="color:#234C2F;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px;">${t.trackingTitle}</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #EAF4D6;margin-bottom:24px;">
                <tbody>${itemRows}</tbody>
                <tfoot>
                  <tr style="background:#EAF4D6;">
                    <td style="padding:14px 12px;color:#234C2F;font-weight:700;font-size:15px;">Total</td>
                    <td style="padding:14px 12px;text-align:right;color:#234C2F;font-weight:700;font-size:15px;">${currency} ${total.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>

              <!-- Address -->
              <p style="color:#234C2F;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px;">${t.address}</p>
              <div style="padding:16px;background:#F5F5F5;border-radius:10px;border-left:4px solid #77AE3A;">
                <p style="margin:0;color:#555;font-size:13px;line-height:1.8;">
                  <strong style="color:#234C2F;">${order.customer_name}</strong><br>
                  ${order.address}<br>
                  ${order.country || ''}
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#234C2F;padding:24px 40px;text-align:center;">
              <p style="color:#EAF4D6;font-size:13px;margin:0 0 6px;">${t.thanks}</p>
              <p style="color:#77AE3A;font-size:12px;margin:0;">${t.team}</p>
              <p style="margin:12px 0 0;">
                <a href="https://velunoo.ch" style="color:#77AE3A;font-size:11px;text-decoration:none;margin:0 8px;">velunoo.ch</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

module.exports = { buildEmailHtml, buildShippingEmailHtml }
