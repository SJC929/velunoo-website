const express = require('express')
const router = express.Router()
const { createCheckout, handleWebhook } = require('../controllers/paymentController')

// Stripe webhook needs raw body — mounted separately in server.js
router.post('/checkout', createCheckout)

module.exports = router
