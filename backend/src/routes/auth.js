const express = require('express')
const router = express.Router()
const { login, setup } = require('../controllers/authController')

router.post('/login', login)
router.post('/setup', setup) // One-time use: create first admin

module.exports = router
