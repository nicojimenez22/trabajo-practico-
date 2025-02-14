// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Puerto fijo para el frontend
    proxy: {
      '/api': 'http://localhost:3000', // Redirige las solicitudes al backend
    },
  },
});
