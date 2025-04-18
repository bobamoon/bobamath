import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Optional: allows access from other devices
    port: 5173,      // Default Vite dev port
    proxy: {
      '/api': {
        target: 'http://192.168.0.21:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

