const express = require('express')
const router = express.Router()
const {
  getAll, getOne, create, update, remove,
  updateDescription, updateColors, uploadImage, deleteImage
} = require('../controllers/productController')
const { requireAuth } = require('../middleware/authMiddleware')
const { upload } = require('../middleware/uploadMiddleware')

// Public
router.get('/', getAll)
router.get('/:id', getOne)

// Admin — protected
router.post('/', requireAuth, create)
router.put('/:id', requireAuth, update)
router.delete('/:id', requireAuth, remove)

router.put('/:id/description', requireAuth, updateDescription)
router.put('/:id/colors', requireAuth, updateColors)

router.post('/:id/images', requireAuth, upload.single('image'), uploadImage)
router.delete('/:id/images/:imgId', requireAuth, deleteImage)

module.exports = router
