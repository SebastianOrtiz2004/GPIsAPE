module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/tests/**/*.test.js',
    '**/tests/**/*.spec.js'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/tests/integration/'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(chai)/)'
  ],
  globals: {
    'describe': true,
    'it': true,
    'expect': true,
    'beforeEach': true,
    'afterEach': true,
    'beforeAll': true,
    'afterAll': true
  }
}
