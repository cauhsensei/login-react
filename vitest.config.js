/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    globals: true,
    // Mostra no terminal + gera JUnit para anexar na PR
    reporters: [
      'default',
      ['junit', { outputFile: 'reports/junit.xml' }],
      'github-actions' // anota falhas direto na aba "Checks" da PR
    ],
    coverage: {
      reporter: ['text', 'html', 'json', 'lcov'],
      reportsDirectory: 'coverage',
      include: ['src/**/*.{js,jsx}'],
      exclude: ['src/**/__tests__/**', 'src/test/**']
    }
  }
})
