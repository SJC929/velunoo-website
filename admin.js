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

/* ── Finanzen localStorage ─────────────────────────────────── */
function getFinanzenData() {
  try { return JSON.parse(localStorage.getItem('velunoo_finanzen') || '{}') } catch { return {} }
}

function saveFinanzenData(data) {
  localStorage.setItem('velunoo_finanzen', JSON.stringify(data))
}

function getMonthData(period) {
  const all = getFinanzenData()
  return all[period] || {
    tiktok_ads: 0, meta_ads: 0, ai_tools: 0,
    transport_einkauf: 0, transport_verkauf: 0, sonstige: 0,
    notizen: ''
  }
}

function saveMonthData(period, data) {
  const all = getFinanzenData()
  all[period] = { ...data, updated_at: new Date().toISOString() }
  saveFinanzenData(all)
}

function getTotalKosten(period) {
  const d = getMonthData(period)
  return (d.tiktok_ads || 0) + (d.meta_ads || 0) + (d.ai_tools || 0) +
         (d.transport_einkauf || 0) + (d.transport_verkauf || 0) + (d.sonstige || 0)
}
