const request = require('supertest')
const { expect } = require('chai')
const app = require('../../src/app')

describe('Users API', () => {
  it('GET /api/users debe responder 200', async () => {
    const res = await request(app).get('/api/users')
    expect(res.status).to.equal(200)
  })
})
