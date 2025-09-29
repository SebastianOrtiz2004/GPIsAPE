const request = require('supertest')
const express = require('express')

const app = express()
app.get('/health', (req, res) => res.json({ ok: true }))

test('GET /health responde ok: true', async () => {
  const res = await request(app).get('/health')
  expect(res.statusCode).toBe(200)
  expect(res.body.ok).toBe(true)
})
