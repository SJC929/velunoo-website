/* ============================================================
   VELUNOO — admin.js
   Gemeinsame Admin-Funktionen
   ============================================================ */

const ADMIN_API = 'https://velunoo-backend.onrender.com/api'

/* ── Auth ──────────────────────────────────────────────────── */
function requireAuth() {
  const token = localStorage.getItem('velunoo_admin_token')
  if (!token) window.location.href = 'admin.html'
  renderSidebar()
}

function logout() {
  localStorage.removeItem('velunoo_admin_token')
  window.location.href = 'admin.html'
}

async function authFetch(path, options = {}) {
  const token = localStorage.getItem('velunoo_admin_token')
  const res = await fetch(`${ADMIN_API}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...(options.headers || {})
    }
  })
  if (res.status === 401) { logout(); return }
  return res.json()
}

/* ── Sidebar ───────────────────────────────────────────────── */
function renderSidebar() {
  const page = window.location.pathname.split('/').pop()
  const items = [
    { href: 'admin-dashboard.html',    icon: '📊', label: 'Dashboard' },
    { href: 'admin-products.html',     icon: '📦', label: 'Produkte' },
    { href: 'admin-orders.html',       icon: '🛒', label: 'Bestellungen' },
    { href: 'admin-newsletter.html',   icon: '📧', label: 'Newsletter' },
    { href: 'admin-finanzen.html',     icon: '💰', label: 'Finanzen' },
    { href: 'admin-buchhaltung.html',  icon: '📒', label: 'Buchhaltung' },
  ]
  const nav = items.map(i => `
    <a href="${i.href}" class="nav-item ${page === i.href ? 'active' : ''}">
      <span class="nav-icon">${i.icon}</span> ${i.label}
    </a>`).join('')

  const sidebar = document.querySelector('.sidebar')
  if (!sidebar) return
  sidebar.innerHTML = `
    <div class="sidebar-logo">
      <img src="brand_assets/Velunoo Logo.png" alt="Velunoo" style="height:36px;" />
    </div>
    <nav class="sidebar-nav">${nav}</nav>
    <button class="logout-btn" onclick="logout()">Ausloggen</button>
  `
}

/* ── Toast ─────────────────────────────────────────────────── */
function showAdminToast(message, isError = false) {
  let toast = document.getElementById('adminToast')
  if (!toast) {
    toast = document.createElement('div')
    toast.id = 'adminToast'
    document.body.appendChild(toast)
  }
  toast.textContent = message
  toast.className = 'admin-toast ' + (isError ? 'toast-error' : 'toast-success')
  toast.style.opacity = '1'
  toast.style.transform = 'translateY(0)'
  clearTimeout(toast._t)
  toast._t = setTimeout(() => {
    toast.style.opacity = '0'
    toast.style.transform = 'translateY(20px)'
  }, 3000)
}

/* ── Finanzen Transaktionen ────────────────────────────────── */
const AUFWAND_KATEGORIEN = {
  tiktok_ads:        '📱 TikTok Ads',
  meta_ads:          '📘 Meta Ads',
  ai_bloatato:       '🤖 Bloatato',
  ai_openai_chat:    '💬 OpenAI ChatGPT',
  ai_openai_api:     '⚙️ OpenAI API / N8n',
  ai_claude:         '🧠 Claude AI',
  transport_einkauf: '🚚 Transport Einkauf',
  transport_verkauf: '📦 Transport Verkauf',
  sonstige:          '📎 Sonstige Kosten'
}

const ERTRAG_KATEGORIEN = {
  produktverkauf:    '🛒 Produktverkauf',
  sonstige_einnahmen:'💡 Sonstige Einnahmen'
}

// In-Memory Cache — wird via loadAllTransactions() befüllt
let _txCache = []

async function loadAllTransactions() {
  try {
    const data = await authFetch('/transactions')
    _txCache = Array.isArray(data) ? data : []
  } catch { _txCache = [] }
}

function getAllTransactions() {
  return _txCache
}

async function addTransaction(tx) {
  await authFetch('/transactions', {
    method: 'POST',
    body: JSON.stringify(tx)
  })
  await loadAllTransactions()
}

async function deleteTransaction(id) {
  await authFetch(`/transactions/${id}`, { method: 'DELETE' })
  await loadAllTransactions()
}

function getTransactionsByPeriod(period) {
  return _txCache.filter(t => t.date?.startsWith(period))
}

function getTransactionsByYear(year) {
  return _txCache.filter(t => t.date?.startsWith(String(year)))
}

function getTotalKosten(period) {
  return getTransactionsByPeriod(period)
    .filter(t => t.type === 'aufwand')
    .reduce((s, t) => s + (parseFloat(t.amount) || 0), 0)
}

function getTotalErtrag(period) {
  return getTransactionsByPeriod(period)
    .filter(t => t.type === 'ertrag')
    .reduce((s, t) => s + (parseFloat(t.amount) || 0), 0)
}
