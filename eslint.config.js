import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Ignorar pastas geradas
  globalIgnores(['dist', 'coverage', 'reports']),

  // Regras gerais do app
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser, // ambiente de browser p/ app
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },

  // Overrides para arquivos de TESTE
  {
    files: ['**/__tests__/**/*.{js,jsx,ts,tsx}', '**/*.test.{js,jsx,ts,tsx}'],
    languageOptions: {
      // habilita globais de testes (describe/it/test/expect) e Node
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    // caso seu preset esteja insistindo no no-undef,
    // você pode descomentar a linha abaixo:
    // rules: { 'no-undef': 'off' },
  },
])
