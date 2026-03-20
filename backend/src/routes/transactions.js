const express = require('express')
const router = express.Router()
const auth = require('../middleware/authMiddleware')
const { getAll, create, remove } = require('../controllers/transactionsController')

router.get('/',     auth, getAll)
router.post('/',    auth, create)
router.delete('/:id', auth, remove)

module.exports = router
