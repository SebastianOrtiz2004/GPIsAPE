module.exports = {
    root: true,
    env: { browser: true, es2022: true, node: true, jest: true, 'cypress/globals': true },
    ignorePatterns: ['dist', 'node_modules', '*.config.*', 'vite.config.*'],
    // Para JS/JSX usa el parser por defecto (espree) con estas reglas:
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:cypress/recommended'],
    settings: { react: { version: 'detect' } },
    rules: { 'react/react-in-jsx-scope': 'off' },
  
    // Para JS/JSX configura sourceType module
    overrides: [
      {
        files: ['**/*.js', '**/*.jsx'],
        parserOptions: {
          sourceType: 'module',
          ecmaVersion: 'latest'
        }
      },
      {
        files: ['**/*.ts', '**/*.tsx'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          project: ['./tsconfig.app.json'],
          tsconfigRootDir: __dirname,
          sourceType: 'module',
          ecmaVersion: 'latest'
        },
        plugins: ['@typescript-eslint'],
        extends: ['plugin:@typescript-eslint/recommended']
      }
    ]
  }
  