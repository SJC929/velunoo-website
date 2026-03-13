/* ============================================================
   VELUNOO — admin.js
   Gemeinsame Admin-Funktionen
   ============================================================ */

const ADMIN_API = 'https://velunoo-backend.onrender.com/api'

function requireAuth() {
  const token = localStorage.getItem('velunoo_admin_token')
  if (!token) {
    window.location.href = 'admin.html'
  }
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
  if (res.status === 401) {
    logout()
    return
  }
  return res.json()
}

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
