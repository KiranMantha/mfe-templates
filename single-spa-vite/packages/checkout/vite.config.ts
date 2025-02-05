import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'checkout',
      filename: 'checkoutEntry.js',
      exposes: {
        './App': './src/App.tsx'
        // './routes': './src/routes.tsx'
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'single-spa-react', 'utils']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5003,
    strictPort: true
  }
});
