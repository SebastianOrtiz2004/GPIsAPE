const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Backend funcionando correctamente' })
})

app.get('/health', (req, res) => res.json({ ok: true }))

// Endpoint para usuarios
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Usuario 1' },
    { id: 2, name: 'Usuario 2' }
  ])
})

module.exports = app
