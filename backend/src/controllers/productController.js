const supabase = require('../config/supabase')
const { v4: uuidv4 } = require('uuid')

const BUCKET = process.env.SUPABASE_STORAGE_BUCKET || 'velunoo-products'

// ── PUBLIC ──────────────────────────────────────────────────────────────────

async function getAll(req, res) {
  const { category } = req.query

  let query = supabase
    .from('products')
    .select(`*, product_images(id, url, sort_order)`)
    .eq('active', true)
    .order('created_at', { ascending: false })

  if (category) {
    query = query.or(`category.eq.${category},category.eq.both`)
  }

  const { data, error } = await query
  if (error) return res.status(500).json({ error: error.message })

  // Sort images by sort_order
  const products = data.map(p => ({
    ...p,
    product_images: (p.product_images || []).sort((a, b) => a.sort_order - b.sort_order)
  }))

  res.json(products)
}

async function getOne(req, res) {
  const { id } = req.params
  const { data, error } = await supabase
    .from('products')
    .select(`*, product_images(id, url, storage_path, sort_order)`)
    .eq('id', id)
    .single()

  if (error) return res.status(404).json({ error: 'Product not found' })

  data.product_images = (data.product_images || []).sort((a, b) => a.sort_order - b.sort_order)
  res.json(data)
}

// ── ADMIN ───────────────────────────────────────────────────────────────────

async function create(req, res) {
  const { name_de, name_en, name_fr, name_it, name_nl, desc_de, desc_en, desc_fr, desc_it, desc_nl, price, stock, category, colors, active } = req.body

  if (!name_de || !price) {
    return res.status(400).json({ error: 'name_de and price are required' })
  }

  const { data, error } = await supabase
    .from('products')
    .insert({
      name_de, name_en, name_fr, name_it, name_nl,
      desc_de, desc_en, desc_fr, desc_it, desc_nl,
      price: parseFloat(price),
      stock: parseInt(stock) || 0,
      category: category || 'both',
      colors: colors || [],
      active: active !== undefined ? active : true
    })
    .select()
    .single()

  if (error) return res.status(500).json({ error: error.message })
  res.status(201).json(data)
}

async function update(req, res) {
  const { id } = req.params
  const allowed = ['name_de', 'name_en', 'name_fr', 'name_it', 'name_nl', 'desc_de', 'desc_en', 'desc_fr', 'desc_it', 'desc_nl', 'price', 'stock', 'category', 'colors', 'active']
  const updates = {}
  allowed.forEach(key => {
    if (req.body[key] !== undefined) updates[key] = req.body[key]
  })

  const { data, error } = await supabase
    .from('products')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
}

async function remove(req, res) {
  const { id } = req.params

  // Get all images to delete from storage
  const { data: images } = await supabase
    .from('product_images')
    .select('storage_path')
    .eq('product_id', id)

  if (images && images.length > 0) {
    const paths = images.map(img => img.storage_path)
    await supabase.storage.from(BUCKET).remove(paths)
  }

  const { error } = await supabase.from('products').delete().eq('id', id)
  if (error) return res.status(500).json({ error: error.message })
  res.json({ message: 'Product deleted' })
}

async function updateDescription(req, res) {
  const { id } = req.params
  const { desc_de, desc_en, desc_fr, desc_it, desc_nl } = req.body

  const { data, error } = await supabase
    .from('products')
    .update({ desc_de, desc_en, desc_fr, desc_it, desc_nl })
    .eq('id', id)
    .select()
    .single()

  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
}

async function updateColors(req, res) {
  const { id } = req.params
  const { colors } = req.body

  if (!Array.isArray(colors)) {
    return res.status(400).json({ error: 'colors must be an array of HEX strings' })
  }

  const { data, error } = await supabase
    .from('products')
    .update({ colors })
    .eq('id', id)
    .select()
    .single()

  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
}

// ── IMAGE MANAGEMENT ────────────────────────────────────────────────────────

async function uploadImage(req, res) {
  const { id } = req.params
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' })

  const ext = req.file.mimetype.split('/')[1].replace('jpeg', 'jpg')
  const filename = `${uuidv4()}.${ext}`
  const storagePath = `products/${id}/${filename}`

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from(BUCKET)
    .upload(storagePath, req.file.buffer, {
      contentType: req.file.mimetype,
      upsert: false
    })

  if (uploadError) return res.status(500).json({ error: uploadError.message })

  const { data: { publicUrl } } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(uploadData.path)

  // Get current max sort_order
  const { data: existing } = await supabase
    .from('product_images')
    .select('sort_order')
    .eq('product_id', id)
    .order('sort_order', { ascending: false })
    .limit(1)

  const nextOrder = existing && existing.length > 0 ? existing[0].sort_order + 1 : 0

  const { data: imgData, error: dbError } = await supabase
    .from('product_images')
    .insert({
      product_id: id,
      url: publicUrl,
      storage_path: uploadData.path,
      sort_order: nextOrder
    })
    .select()
    .single()

  if (dbError) return res.status(500).json({ error: dbError.message })
  res.status(201).json(imgData)
}

async function deleteImage(req, res) {
  const { imgId } = req.params

  const { data: img, error: fetchError } = await supabase
    .from('product_images')
    .select('storage_path')
    .eq('id', imgId)
    .single()

  if (fetchError || !img) return res.status(404).json({ error: 'Image not found' })

  await supabase.storage.from(BUCKET).remove([img.storage_path])

  const { error } = await supabase.from('product_images').delete().eq('id', imgId)
  if (error) return res.status(500).json({ error: error.message })
  res.json({ message: 'Image deleted' })
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
  updateDescription,
  updateColors,
  uploadImage,
  deleteImage
}
