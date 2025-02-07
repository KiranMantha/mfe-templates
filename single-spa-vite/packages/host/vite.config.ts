import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        user: 'http://localhost:5001/dist/assets/userEntry.js',
        recommendations: 'http://localhost:5002/dist/assets/recommendationsEntry.js',
        checkout: 'http://localhost:5003/dist/assets/checkoutEntry.js'
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
    port: 5000,
    strictPort: true
  }
});
