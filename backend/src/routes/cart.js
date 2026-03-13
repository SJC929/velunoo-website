const express = require('express')
const router = express.Router()
const { getCart, addItem, updateItem, removeItem, clearCart } = require('../controllers/cartController')

router.get('/', getCart)
router.post('/add', addItem)
router.put('/:itemId', updateItem)
router.delete('/:itemId', removeItem)
router.delete('/', clearCart)

module.exports = router
