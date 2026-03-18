const supabase = require('../config/supabase')
const { sendInvoiceEmail, sendShippingEmail } = require('../utils/sendEmail')

// POST /api/orders  { customer_name, customer_email, address, country, language, items, total_price, currency }
async function createOrder(req, res) {
  const { customer_name, customer_email, address, country, language, items, total_price, currency } = req.body

  if (!customer_name || !customer_email || !address || !items || !total_price) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const { data, error } = await supabase
    .from('orders')
    .insert({
      customer_name,
      customer_email,
      address,
      country: country || 'CH',
      language: language || 'de',
      items: JSON.stringify(items),
      total_price: parseFloat(total_price),
      currency: currency || 'CHF',
      status: 'pending'
    })
    .select()
    .single()

  if (error) return res.status(500).json({ error: error.message })
  res.status(201).json(data)
}

// GET /api/orders  (Admin)
async function getAllOrders(req, res) {
  const { status, limit = 50, offset = 0 } = req.query

  let query = supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false })
    .range(parseInt(offset), parseInt(offset) + parseInt(limit) - 1)

  if (status) query = query.eq('status', status)

  const { data, error } = await query
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
}

// GET /api/orders/:id  (Admin)
async function getOrder(req, res) {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', req.params.id)
    .single()

  if (error) return res.status(404).json({ error: 'Order not found' })
  res.json(data)
}

// PUT /api/orders/:id/status  (Admin)  { status }
async function updateStatus(req, res) {
  const { status } = req.body
  const allowed = ['pending', 'paid', 'shipped', 'delivered', 'cancelled', 'refunded']
  if (!allowed.includes(status)) {
    return res.status(400).json({ error: `status must be one of: ${allowed.join(', ')}` })
  }

  const { data, error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', req.params.id)
    .select()
    .single()

  if (error) return res.status(500).json({ error: error.message })

  // Send shipping confirmation email when marked as shipped
  if (status === 'shipped') {
    try {
      await sendShippingEmail(data)
    } catch (emailErr) {
      console.error('[updateStatus] Shipping email failed:', emailErr.message)
      // Don't fail the request — status was already updated
    }
  }

  res.json(data)
}

// POST /api/orders/:id/invoice  (Admin) — resend invoice
async function resendInvoice(req, res) {
  const { data: order, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', req.params.id)
    .single()

  if (error || !order) return res.status(404).json({ error: 'Order not found' })

  try {
    await sendInvoiceEmail(order)
    await supabase
      .from('orders')
      .update({ invoice_sent_at: new Date().toISOString() })
      .eq('id', order.id)

    res.json({ message: 'Invoice sent successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = { createOrder, getAllOrders, getOrder, updateStatus, resendInvoice }
