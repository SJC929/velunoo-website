const supabase = require('../config/supabase')

async function subscribe(req, res) {
  const { email, language } = req.body
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  const { error } = await supabase
    .from('newsletter')
    .insert({ email: email.toLowerCase().trim(), language: language || 'de' })

  if (error) {
    // UNIQUE violation → already subscribed
    if (error.code === '23505') {
      return res.status(200).json({ message: 'Already subscribed' })
    }
    return res.status(500).json({ error: error.message })
  }

  res.status(201).json({ message: 'Subscribed successfully' })
}

async function list(req, res) {
  const { data, error } = await supabase
    .from('newsletter')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
}

module.exports = { subscribe, list }
