const supabase = require('../config/supabase')

async function getAll(req, res) {
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .order('date', { ascending: false })
  if (error) return res.status(400).json({ error: error.message })
  res.json(data)
}

async function create(req, res) {
  const { date, type, category, amount, description } = req.body
  if (!date || !type || !category || !amount) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  const { data, error } = await supabase
    .from('transactions')
    .insert({ date, type, category, amount: parseFloat(amount), description })
    .select()
    .single()
  if (error) return res.status(400).json({ error: error.message })
  res.status(201).json(data)
}

async function remove(req, res) {
  const { id } = req.params
  const { error } = await supabase.from('transactions').delete().eq('id', id)
  if (error) return res.status(400).json({ error: error.message })
  res.json({ success: true })
}

module.exports = { getAll, create, remove }
