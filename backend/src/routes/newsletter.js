const express = require('express')
const router = express.Router()
const { subscribe, list } = require('../controllers/newsletterController')
const { requireAuth } = require('../middleware/authMiddleware')

router.post('/', subscribe)
router.get('/', requireAuth, list)

module.exports = router
