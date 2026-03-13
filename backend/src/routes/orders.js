const express = require('express')
const router = express.Router()
const { createOrder, getAllOrders, getOrder, updateStatus, resendInvoice } = require('../controllers/orderController')
const { requireAuth } = require('../middleware/authMiddleware')

router.post('/', createOrder)
router.get('/', requireAuth, getAllOrders)
router.get('/:id', requireAuth, getOrder)
router.put('/:id/status', requireAuth, updateStatus)
router.post('/:id/invoice', requireAuth, resendInvoice)

module.exports = router
