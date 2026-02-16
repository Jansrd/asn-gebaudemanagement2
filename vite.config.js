import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // Match CRA output for Docker compatibility
    sourcemap: false
  },
  server: {
    port: 3000
  }
})
