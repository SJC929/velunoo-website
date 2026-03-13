/* ============================================================
   VELUNOO — api.js
   Frontend ↔ Backend Verbindung
   ============================================================ */

const API_URL = 'http://localhost:3000/api'

/* ── Aktuelle Sprache holen ─────────────────────────────────── */
function getCurrentLang() {
  return localStorage.getItem('velunoo_lang') || 'de'
}

/* ── Session ID für Warenkorb ───────────────────────────────── */
function getSessionId() {
  let sid = localStorage.getItem('velunoo_session')
  if (!sid) {
    sid = crypto.randomUUID()
    localStorage.setItem('velunoo_session', sid)
  }
  return sid
}

/* ================================================================
   NEWSLETTER
   ================================================================ */
async function newsletterSubscribe(email) {
  const res = await fetch(`${API_URL}/newsletter`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, language: getCurrentLang() })
  })
  return res.json()
}

/* ================================================================
   PRODUKTE
   ================================================================ */
async function fetchProducts(category = '') {
  const url = category
    ? `${API_URL}/products?category=${category}`
    : `${API_URL}/products`
  const res = await fetch(url)
  return res.json()
}

async function fetchProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}`)
  return res.json()
}

/* Produktname in aktueller Sprache */
function getProductName(product) {
  const lang = getCurrentLang()
  const key = lang.startsWith('zh') ? 'name_de' : `name_${lang}`
  return product[key] || product.name_de || product.name_en || 'Produkt'
}

/* Produktbeschreibung in aktueller Sprache */
function getProductDesc(product) {
  const lang = getCurrentLang()
  const key = lang.startsWith('zh') ? 'desc_de' : `desc_${lang}`
  return product[key] || product.desc_de || product.desc_en || ''
}

/* ================================================================
   WARENKORB
   ================================================================ */
async function getCart() {
  const res = await fetch(`${API_URL}/cart`, {
    headers: { 'x-session-id': getSessionId() }
  })
  return res.json()
}

async function addToCart(productId, quantity = 1) {
  const res = await fetch(`${API_URL}/cart/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-session-id': getSessionId()
    },
    body: JSON.stringify({ productId, quantity })
  })
  return res.json()
}

async function updateCartItem(itemId, quantity) {
  const res = await fetch(`${API_URL}/cart/${itemId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-session-id': getSessionId()
    },
    body: JSON.stringify({ quantity })
  })
  return res.json()
}

async function removeCartItem(itemId) {
  const res = await fetch(`${API_URL}/cart/${itemId}`, {
    method: 'DELETE',
    headers: { 'x-session-id': getSessionId() }
  })
  return res.json()
}

async function clearCart() {
  const res = await fetch(`${API_URL}/cart`, {
    method: 'DELETE',
    headers: { 'x-session-id': getSessionId() }
  })
  return res.json()
}

/* ================================================================
   PRODUKTE RENDERN
   ================================================================ */
function renderProducts(products) {
  const grid = document.getElementById('productsGrid')
  if (!grid) return

  if (!products || products.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:#888;grid-column:1/-1;">Keine Produkte gefunden.</p>'
    return
  }

  grid.innerHTML = products.map(product => {
    const name = getProductName(product)
    const desc = getProductDesc(product)
    const image = product.product_images?.[0]?.url || ''
    const colors = product.colors || []

    return `
      <div class="product-card" data-category="${product.category}" data-animate="fade-up">
        <div class="product-image-wrap">
          ${image
            ? `<img src="${image}" alt="${name}" class="product-img" loading="lazy" />`
            : `<div class="product-img-placeholder"><svg viewBox="0 0 48 48" fill="none" width="60"><path d="M4.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm15 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-10-5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-2.5 4c-3.5 0-7 3-7 7 0 2.5 2 4 4 4 1.5 0 2.5-.5 3-1 .5.5 1.5 1 3 1 2 0 4-1.5 4-4 0-4-3.5-7-7-7z" fill="#77AE3A" opacity="0.4"/></svg></div>`
          }
          <button class="wishlist-btn" onclick="toggleWishlist(this)" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <span class="product-badge ${product.category}">${product.category === 'dog' ? '🐕' : product.category === 'cat' ? '🐈' : '🐾'}</span>
        </div>
        <div class="product-info">
          <h3 class="product-name">${name}</h3>
          ${desc ? `<p class="product-desc">${desc.replace(/<[^>]*>/g, '').slice(0, 80)}${desc.length > 80 ? '…' : ''}</p>` : ''}
          ${colors.length > 0 ? `
            <div class="product-colors">
              ${colors.map(c => `<span class="color-dot" style="background:${c}" title="${c}"></span>`).join('')}
            </div>
          ` : ''}
          <div class="product-footer">
            <span class="product-price">CHF ${parseFloat(product.price).toFixed(2)}</span>
            <button class="btn btn-primary btn-sm add-to-cart-btn"
              onclick="handleAddToCart('${product.id}', this)"
              ${product.stock === 0 ? 'disabled' : ''}>
              ${product.stock === 0
                ? '<span>Ausverkauft</span>'
                : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><span>In den Warenkorb</span>`
              }
            </button>
          </div>
        </div>
      </div>
    `
  }).join('')

  // Animationen neu triggern
  if (typeof observeAnimations === 'function') observeAnimations()
}

/* ================================================================
   WARENKORB UI
   ================================================================ */
async function handleAddToCart(productId, btn) {
  const originalHTML = btn.innerHTML
  btn.disabled = true
  btn.innerHTML = '<span style="opacity:.7">...</span>'

  try {
    const data = await addToCart(productId, 1)
    updateCartBadge(data.items?.length || 0)
    showToast('✅ Zum Warenkorb hinzugefügt!')
  } catch {
    showToast('❌ Fehler beim Hinzufügen', true)
  } finally {
    btn.disabled = false
    btn.innerHTML = originalHTML
  }
}

function updateCartBadge(count) {
  const badge = document.getElementById('cartBadge')
  if (!badge) return
  badge.textContent = count
  badge.style.display = count > 0 ? 'flex' : 'none'
}

async function refreshCartBadge() {
  try {
    const data = await getCart()
    updateCartBadge(data.items?.length || 0)
  } catch { /* offline */ }
}

/* ================================================================
   PRODUKT FILTER
   ================================================================ */
let allProducts = []

async function initProducts() {
  try {
    allProducts = await fetchProducts()
    renderProducts(allProducts)
  } catch (err) {
    console.error('[Velunoo] Products failed to load:', err)
  }
}

function filterProductsByCategory(category) {
  if (category === 'all') {
    renderProducts(allProducts)
  } else {
    renderProducts(allProducts.filter(p => p.category === category || p.category === 'both'))
  }
}

/* ================================================================
   NEWSLETTER (überschreibt die Funktion in script.js)
   ================================================================ */
async function handleNewsletterSubmit(e) {
  e.preventDefault()
  const form = e.target
  const input = form.querySelector('input[type="email"]')
  const btn = form.querySelector('button[type="submit"]')
  const email = input.value.trim()

  if (!email) return

  const originalText = btn.innerHTML
  btn.disabled = true
  btn.innerHTML = '...'

  try {
    const data = await newsletterSubscribe(email)
    form.innerHTML = `
      <div class="newsletter-success">
        <svg viewBox="0 0 24 24" fill="none" stroke="#77AE3A" stroke-width="2.5" width="40">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
        <p style="color:#234C2F;font-weight:600;margin-top:12px;">
          ${data.message === 'Already subscribed' ? 'Du bist bereits angemeldet!' : '🎉 Erfolgreich angemeldet!'}
        </p>
      </div>
    `
  } catch {
    btn.disabled = false
    btn.innerHTML = originalText
    showToast('❌ Fehler. Bitte versuche es erneut.', true)
  }
}

/* ================================================================
   WARENKORB MODAL
   ================================================================ */
async function showCart() {
  const data = await getCart()
  const items = data.items || []

  let modal = document.getElementById('cartModal')
  if (!modal) {
    modal = document.createElement('div')
    modal.id = 'cartModal'
    modal.style.cssText = 'position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.45);display:flex;align-items:flex-end;justify-content:center;'
    document.body.appendChild(modal)
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
  }

  const itemsHtml = items.length === 0
    ? '<p style="text-align:center;color:#888;padding:32px 0;">Dein Warenkorb ist leer 🛒</p>'
    : items.map(item => `
        <div style="display:flex;align-items:center;gap:14px;padding:14px 0;border-bottom:1px solid #EAF4D6;">
          ${item.product?.product_images?.[0]?.url
            ? `<img src="${item.product.product_images[0].url}" style="width:60px;height:60px;object-fit:cover;border-radius:10px;">`
            : '<div style="width:60px;height:60px;background:#EAF4D6;border-radius:10px;"></div>'
          }
          <div style="flex:1;">
            <div style="font-weight:700;color:#234C2F;font-size:14px;">${getProductName(item.product)}</div>
            <div style="color:#77AE3A;font-weight:600;font-size:13px;">CHF ${parseFloat(item.product?.price || 0).toFixed(2)}</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <button onclick="changeQty('${item.id}',${item.quantity - 1})" style="background:#EAF4D6;border:none;border-radius:6px;width:28px;height:28px;cursor:pointer;font-size:16px;">−</button>
            <span style="font-weight:700;min-width:20px;text-align:center;">${item.quantity}</span>
            <button onclick="changeQty('${item.id}',${item.quantity + 1})" style="background:#EAF4D6;border:none;border-radius:6px;width:28px;height:28px;cursor:pointer;font-size:16px;">+</button>
            <button onclick="removeItem('${item.id}')" style="background:none;border:none;cursor:pointer;color:#e53e3e;font-size:20px;margin-left:4px;">×</button>
          </div>
        </div>`).join('')

  modal.innerHTML = `
    <div style="background:#fff;border-radius:24px 24px 0 0;width:100%;max-width:520px;padding:28px 24px;max-height:80vh;overflow-y:auto;font-family:Montserrat,sans-serif;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
        <h3 style="color:#234C2F;margin:0;font-size:20px;font-weight:800;">🛒 Warenkorb</h3>
        <button onclick="document.getElementById('cartModal').remove()" style="background:none;border:none;cursor:pointer;font-size:26px;color:#888;line-height:1;">×</button>
      </div>
      ${itemsHtml}
      ${items.length > 0 ? `
        <div style="margin-top:20px;padding-top:16px;border-top:2px solid #EAF4D6;">
          <div style="display:flex;justify-content:space-between;font-weight:800;font-size:18px;color:#234C2F;margin-bottom:16px;">
            <span>Gesamt</span><span>CHF ${parseFloat(data.total || 0).toFixed(2)}</span>
          </div>
          <button onclick="showToast('Stripe kommt bald! 🚀')" style="width:100%;padding:16px;background:#234C2F;color:#fff;border:none;border-radius:12px;font-family:Montserrat,sans-serif;font-size:15px;font-weight:700;cursor:pointer;">Zur Kasse →</button>
        </div>` : ''}
    </div>`
}

async function changeQty(itemId, qty) {
  if (qty < 1) await removeCartItem(itemId)
  else await updateCartItem(itemId, qty)
  const data = await getCart()
  updateCartBadge(data.items?.length || 0)
  showCart()
}

async function removeItem(itemId) {
  await removeCartItem(itemId)
  const data = await getCart()
  updateCartBadge(data.items?.length || 0)
  showCart()
}

/* ================================================================
   TOAST (falls nicht in script.js)
   ================================================================ */
function showToast(message, isError = false) {
  let toast = document.getElementById('velunooToast')
  if (!toast) {
    toast = document.createElement('div')
    toast.id = 'velunooToast'
    toast.style.cssText = `
      position:fixed;bottom:24px;right:24px;z-index:9999;
      background:${isError ? '#e53e3e' : '#234C2F'};color:#fff;
      padding:14px 22px;border-radius:12px;font-family:Montserrat,sans-serif;
      font-size:14px;font-weight:600;box-shadow:0 8px 24px rgba(0,0,0,0.15);
      transform:translateY(80px);opacity:0;transition:all .3s ease;
    `
    document.body.appendChild(toast)
  }
  toast.textContent = message
  toast.style.background = isError ? '#e53e3e' : '#234C2F'
  toast.style.transform = 'translateY(0)'
  toast.style.opacity = '1'
  clearTimeout(toast._timer)
  toast._timer = setTimeout(() => {
    toast.style.transform = 'translateY(80px)'
    toast.style.opacity = '0'
  }, 3000)
}

/* ================================================================
   INIT — beim Laden der Seite
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Warenkorb-Badge laden
  refreshCartBadge()

  // Produkte laden (falls #productsGrid vorhanden)
  if (document.getElementById('productsGrid')) {
    initProducts()
  }

  // Filter-Buttons verbinden
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      filterProductsByCategory(btn.dataset.filter)
    })
  })
})
