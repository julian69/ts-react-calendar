import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/ts-react-calendar/',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTest.ts',
  },
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@context': path.resolve(__dirname, './src/context'),
      '@components': path.resolve(__dirname, './src/components'),
      '@mocks': path.resolve(__dirname, './src/mocks'),
    },
  },
})
