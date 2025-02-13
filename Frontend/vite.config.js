import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'
import React from 'react';

// https://vite.dev/config/
export default {
  server: {
    port: 5173, // Cambiado a un puerto libre
    proxy: {
      '/api': 'http://localhost:3000', // Asegúrate de que redirija las solicitudes de /api al backend
    },
  },
};

