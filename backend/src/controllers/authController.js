const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const supabase = require('../config/supabase')

async function login(req, res) {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' })
  }

  const { data: admin, error } = await supabase
    .from('admins')
    .select('*')
    .eq('email', email.toLowerCase())
    .single()

  if (error || !admin) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  const valid = await bcrypt.compare(password, admin.password_hash)
  if (!valid) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  const token = jwt.sign(
    { id: admin.id, email: admin.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  )

  res.json({ token, admin: { id: admin.id, email: admin.email } })
}

/**
 * Utility: hash a password (use once to seed your first admin)
 * POST /api/auth/setup  { email, password, setupKey }
 */
async function setup(req, res) {
  const { email, password, setupKey } = req.body
  if (setupKey !== process.env.ADMIN_SETUP_KEY) {
    return res.status(403).json({ error: 'Forbidden' })
  }

  const password_hash = await bcrypt.hash(password, 12)
  const { data, error } = await supabase
    .from('admins')
    .insert({ email: email.toLowerCase(), password_hash })
    .select('id, email')
    .single()

  if (error) return res.status(400).json({ error: error.message })
  res.status(201).json({ message: 'Admin created', admin: data })
}

module.exports = { login, setup }
