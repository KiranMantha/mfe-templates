import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'recommendations',
      filename: 'recommendationsEntry.js',
      exposes: {
        './App': './src/App.tsx'
        // './routes': './src/routes.tsx'
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'single-spa-react', 'libs/utils']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5002,
    strictPort: true
  }
});
