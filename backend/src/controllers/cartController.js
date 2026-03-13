const supabase = require('../config/supabase')
const { v4: uuidv4 } = require('uuid')

// Helper: get or create cart for session
async function getOrCreateCart(sessionId) {
  let { data: cart } = await supabase
    .from('carts')
    .select('*')
    .eq('session_id', sessionId)
    .single()

  if (!cart) {
    const { data: newCart } = await supabase
      .from('carts')
      .insert({ session_id: sessionId })
      .select()
      .single()
    cart = newCart
  }

  return cart
}

// Helper: build cart response with items + product info
async function buildCartResponse(cartId) {
  const { data: items, error } = await supabase
    .from('cart_items')
    .select(`
      id,
      quantity,
      product:products(id, name_de, name_en, name_fr, name_it, name_nl, price, category, colors, product_images(url, sort_order))
    `)
    .eq('cart_id', cartId)

  if (error) return []
  return items.map(item => ({
    ...item,
    product: {
      ...item.product,
      product_images: (item.product?.product_images || []).sort((a, b) => a.sort_order - b.sort_order)
    }
  }))
}

// GET /api/cart
async function getCart(req, res) {
  const sessionId = req.cookies?.sessionId || req.headers['x-session-id']
  if (!sessionId) return res.json({ items: [], total: 0 })

  const cart = await getOrCreateCart(sessionId)
  const items = await buildCartResponse(cart.id)

  const total = items.reduce((sum, i) => sum + parseFloat(i.product.price) * i.quantity, 0)
  res.json({ cart_id: cart.id, items, total: total.toFixed(2) })
}

// POST /api/cart/add  { productId, quantity }
async function addItem(req, res) {
  const { productId, quantity = 1 } = req.body
  if (!productId) return res.status(400).json({ error: 'productId required' })

  const sessionId = req.cookies?.sessionId || req.headers['x-session-id'] || uuidv4()
  const cart = await getOrCreateCart(sessionId)

  // Check if item already in cart
  const { data: existing } = await supabase
    .from('cart_items')
    .select('*')
    .eq('cart_id', cart.id)
    .eq('product_id', productId)
    .single()

  if (existing) {
    await supabase
      .from('cart_items')
      .update({ quantity: existing.quantity + parseInt(quantity) })
      .eq('id', existing.id)
  } else {
    await supabase
      .from('cart_items')
      .insert({ cart_id: cart.id, product_id: productId, quantity: parseInt(quantity) })
  }

  // Update cart timestamp
  await supabase.from('carts').update({ updated_at: new Date().toISOString() }).eq('id', cart.id)

  const items = await buildCartResponse(cart.id)
  const total = items.reduce((sum, i) => sum + parseFloat(i.product.price) * i.quantity, 0)

  res
    .cookie('sessionId', sessionId, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000, sameSite: 'lax' })
    .json({ cart_id: cart.id, items, total: total.toFixed(2), sessionId })
}

// PUT /api/cart/:itemId  { quantity }
async function updateItem(req, res) {
  const { itemId } = req.params
  const { quantity } = req.body

  if (!quantity || quantity < 1) {
    return res.status(400).json({ error: 'quantity must be >= 1' })
  }

  const { data, error } = await supabase
    .from('cart_items')
    .update({ quantity: parseInt(quantity) })
    .eq('id', itemId)
    .select()
    .single()

  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
}

// DELETE /api/cart/:itemId
async function removeItem(req, res) {
  const { itemId } = req.params
  const { error } = await supabase.from('cart_items').delete().eq('id', itemId)
  if (error) return res.status(500).json({ error: error.message })
  res.json({ message: 'Item removed' })
}

// DELETE /api/cart
async function clearCart(req, res) {
  const sessionId = req.cookies?.sessionId || req.headers['x-session-id']
  if (!sessionId) return res.json({ message: 'Cart already empty' })

  const { data: cart } = await supabase
    .from('carts')
    .select('id')
    .eq('session_id', sessionId)
    .single()

  if (cart) {
    await supabase.from('cart_items').delete().eq('cart_id', cart.id)
  }

  res.json({ message: 'Cart cleared' })
}

module.exports = { getCart, addItem, updateItem, removeItem, clearCart }
