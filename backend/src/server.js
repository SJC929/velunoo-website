require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const stripe = require('./config/stripe')
const { handleWebhook } = require('./controllers/paymentController')

const app = express()
const PORT = process.env.PORT || 3000

// ── Stripe Webhook (raw body MUST come before express.json()) ──────────────
app.post(
  '/api/payment/webhook',
  express.raw({ type: 'application/json' }),
  handleWebhook
)

// ── Global Middleware ───────────────────────────────────────────────────────
app.use(cors({
  origin: (origin, callback) => callback(null, true),
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// ── Routes ──────────────────────────────────────────────────────────────────
app.use('/api/products', require('./routes/products'))
app.use('/api/cart', require('./routes/cart'))
app.use('/api/orders', require('./routes/orders'))
app.use('/api/payment', require('./routes/payment'))
app.use('/api/newsletter', require('./routes/newsletter'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contact', require('./routes/contact'))

// ── Health Check ────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Velunoo API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  })
})

// ── 404 ─────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.path} not found` })
})

// ── Error Handler ────────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('[Error]', err)
  res.status(err.status || 500).json({ error: err.message || 'Internal server error' })
})

// ── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════╗
  ║   🐾  Velunoo API — Running      ║
  ║   http://localhost:${PORT}          ║
  ╚══════════════════════════════════╝
  `)
})
