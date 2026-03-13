const stripe = require('../config/stripe')
const supabase = require('../config/supabase')
const { sendInvoiceEmail } = require('../utils/sendEmail')

const FRONTEND_URL = process.env.FRONTEND_URL || 'https://velunoo.ch'

// POST /api/payment/checkout
async function createCheckout(req, res) {
  const { orderId, customerEmail, items, currency = 'chf' } = req.body

  if (!items || !items.length) {
    return res.status(400).json({ error: 'No items provided' })
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'paypal'],
      line_items: items.map(item => ({
        price_data: {
          currency: currency.toLowerCase(),
          product_data: {
            name: item.name_de || item.name || item.name_en || 'Produkt',
            ...(item.imageUrl ? { images: [item.imageUrl] } : {})
          },
          unit_amount: Math.round(parseFloat(item.price) * 100)
        },
        quantity: item.quantity
      })),
      mode: 'payment',
      customer_email: customerEmail,
      metadata: { orderId: orderId || '' },
      success_url: `${FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${FRONTEND_URL}/cart`
    })

    res.json({ url: session.url, sessionId: session.id })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// POST /api/payment/webhook  (raw body required!)
async function handleWebhook(req, res) {
  const sig = req.headers['stripe-signature']
  let event

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('[Webhook] Signature verification failed:', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const orderId = session.metadata?.orderId

    if (!orderId) {
      console.warn('[Webhook] No orderId in session metadata')
      return res.sendStatus(200)
    }

    // Update order status to paid
    const { data: order, error } = await supabase
      .from('orders')
      .update({
        status: 'paid',
        stripe_payment_id: session.payment_intent
      })
      .eq('id', orderId)
      .select()
      .single()

    if (error) {
      console.error('[Webhook] DB update failed:', error.message)
      return res.sendStatus(500)
    }

    // Send invoice email
    try {
      await sendInvoiceEmail(order)
      await supabase
        .from('orders')
        .update({ invoice_sent_at: new Date().toISOString() })
        .eq('id', orderId)
    } catch (emailErr) {
      console.error('[Webhook] Invoice email failed:', emailErr.message)
    }
  }

  if (event.type === 'payment_intent.payment_failed') {
    const pi = event.data.object
    // Optionally update order to failed status
    await supabase
      .from('orders')
      .update({ status: 'failed' })
      .eq('stripe_payment_id', pi.id)
  }

  res.sendStatus(200)
}

module.exports = { createCheckout, handleWebhook }
