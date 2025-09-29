module.exports = {
  root: true,
  env: { 
    node: true, 
    es2022: true,
    commonjs: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'standard'
  ],
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module' 
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn'
  }
}
