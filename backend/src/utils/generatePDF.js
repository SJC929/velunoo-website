const PDFDocument = require('pdfkit')
const { formatOrderNumber } = require('./orderNumber')

const DARK_GREEN = '#234C2F'
const LIGHT_GREEN = '#77AE3A'
const PALE_GREEN = '#EAF4D6'
const GREY = '#555555'
const LIGHT_GREY = '#F5F5F5'

const VAT_RATE = 0.081 // 8.1% Schweizer MwSt.

/**
 * Generate a Velunoo-branded PDF invoice.
 * @param {object} order - order row from DB
 * @returns {Promise<Buffer>} PDF as buffer
 */
function generateInvoicePDF(order) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50, size: 'A4' })
    const chunks = []

    doc.on('data', chunk => chunks.push(chunk))
    doc.on('end', () => resolve(Buffer.concat(chunks)))
    doc.on('error', reject)

    const orderNum = formatOrderNumber(order.order_number)
    const items = Array.isArray(order.items) ? order.items : JSON.parse(order.items || '[]')
    const currency = order.currency || 'CHF'
    const total = parseFloat(order.total_price)
    const vatAmount = total - total / (1 + VAT_RATE)
    const subtotal = total - vatAmount

    // ── Header Bar ─────────────────────────────────────────────────────────
    doc.rect(0, 0, doc.page.width, 80).fill(DARK_GREEN)

    doc
      .fillColor('#FFFFFF')
      .font('Helvetica-Bold')
      .fontSize(26)
      .text('VELUNOO', 50, 25)

    doc
      .fillColor(LIGHT_GREEN)
      .font('Helvetica')
      .fontSize(11)
      .text('velunoo.ch  •  Instagram: @velunoo.ch  •  TikTok: @velunoo.ch', 50, 56)

    // "RECHNUNG" label on the right
    doc
      .fillColor('#FFFFFF')
      .font('Helvetica-Bold')
      .fontSize(18)
      .text('RECHNUNG', 0, 30, { align: 'right', width: doc.page.width - 50 })

    // ── Order Meta ─────────────────────────────────────────────────────────
    doc.moveDown(3)
    const metaY = 105

    doc
      .fillColor(DARK_GREEN)
      .font('Helvetica-Bold')
      .fontSize(10)
      .text('BESTELLNUMMER', 50, metaY)
    doc.fillColor(GREY).font('Helvetica').text(orderNum, 50, metaY + 14)

    doc.fillColor(DARK_GREEN).font('Helvetica-Bold').text('DATUM', 200, metaY)
    const date = new Date(order.created_at)
    const formatted = `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`
    doc.fillColor(GREY).font('Helvetica').text(formatted, 200, metaY + 14)

    doc.fillColor(DARK_GREEN).font('Helvetica-Bold').text('STATUS', 380, metaY)
    doc.fillColor(GREY).font('Helvetica').text(order.status || 'paid', 380, metaY + 14)

    // ── Divider ────────────────────────────────────────────────────────────
    doc.moveTo(50, metaY + 36).lineTo(doc.page.width - 50, metaY + 36).strokeColor(PALE_GREEN).lineWidth(1).stroke()

    // ── Customer Block ─────────────────────────────────────────────────────
    const custY = metaY + 50

    doc.fillColor(DARK_GREEN).font('Helvetica-Bold').fontSize(10).text('RECHNUNGSADRESSE', 50, custY)
    doc
      .fillColor(GREY)
      .font('Helvetica')
      .fontSize(10)
      .text(order.customer_name, 50, custY + 16)
      .text(order.customer_email, 50, custY + 30)
      .text(order.address, 50, custY + 44)
      .text(order.country || '', 50, custY + 58)

    // ── Items Table Header ─────────────────────────────────────────────────
    const tableTop = custY + 90
    doc.rect(50, tableTop, doc.page.width - 100, 22).fill(DARK_GREEN)

    doc
      .fillColor('#FFFFFF')
      .font('Helvetica-Bold')
      .fontSize(9)
      .text('PRODUKT', 60, tableTop + 7)
      .text('MENGE', 340, tableTop + 7)
      .text('EINZELPREIS', 400, tableTop + 7)
      .text('TOTAL', 490, tableTop + 7)

    // ── Items Rows ─────────────────────────────────────────────────────────
    let rowY = tableTop + 28
    items.forEach((item, i) => {
      const rowBg = i % 2 === 0 ? '#FFFFFF' : LIGHT_GREY
      doc.rect(50, rowY - 4, doc.page.width - 100, 20).fill(rowBg)

      const itemTotal = (parseFloat(item.price) * parseInt(item.quantity)).toFixed(2)

      doc
        .fillColor(GREY)
        .font('Helvetica')
        .fontSize(9)
        .text(item.name_de || item.name || item.name_en || 'Produkt', 60, rowY)
        .text(String(item.quantity), 345, rowY)
        .text(`${currency} ${parseFloat(item.price).toFixed(2)}`, 400, rowY)
        .text(`${currency} ${itemTotal}`, 490, rowY)

      rowY += 22
    })

    // ── Divider before totals ───────────────────────────────────────────────
    rowY += 6
    doc.moveTo(50, rowY).lineTo(doc.page.width - 50, rowY).strokeColor(PALE_GREEN).lineWidth(1).stroke()
    rowY += 12

    // ── Totals Block ───────────────────────────────────────────────────────
    const totalsX = 370

    doc.fillColor(GREY).font('Helvetica').fontSize(10)
      .text('Zwischensumme:', totalsX, rowY)
      .text(`${currency} ${subtotal.toFixed(2)}`, 490, rowY)

    rowY += 18
    doc
      .text(`MwSt. 8.1% (CH):`, totalsX, rowY)
      .text(`${currency} ${vatAmount.toFixed(2)}`, 490, rowY)

    rowY += 10
    doc.moveTo(totalsX, rowY).lineTo(doc.page.width - 50, rowY).strokeColor(LIGHT_GREEN).lineWidth(1.5).stroke()
    rowY += 10

    doc.rect(totalsX - 10, rowY - 4, doc.page.width - totalsX - 40, 24).fill(PALE_GREEN)
    doc
      .fillColor(DARK_GREEN)
      .font('Helvetica-Bold')
      .fontSize(12)
      .text('GESAMT:', totalsX, rowY)
      .text(`${currency} ${total.toFixed(2)}`, 490, rowY)

    // ── Footer ─────────────────────────────────────────────────────────────
    const footerY = doc.page.height - 70
    doc.rect(0, footerY, doc.page.width, 70).fill(DARK_GREEN)

    doc
      .fillColor(PALE_GREEN)
      .font('Helvetica')
      .fontSize(8)
      .text(
        'Velunoo • velunoo.ch • Instagram @velunoo.ch • TikTok @velunoo.ch',
        0,
        footerY + 16,
        { align: 'center', width: doc.page.width }
      )
      .text(
        'Vielen Dank für deine Bestellung! 🐾  Thank you for your order!',
        0,
        footerY + 32,
        { align: 'center', width: doc.page.width }
      )
      .fillColor(LIGHT_GREEN)
      .text('velunoo.ch', 0, footerY + 46, { align: 'center', width: doc.page.width })

    doc.end()
  })
}

module.exports = { generateInvoicePDF }
