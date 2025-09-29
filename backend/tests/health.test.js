const request = require('supertest')
const app = require('../src/app')

test('GET /health -> ok:true', async () => {
  const res = await request(app).get('/health')
  expect(res.status).toBe(200)
  expect(res.body.ok).toBe(true)
})
