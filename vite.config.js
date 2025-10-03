import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Realist-Projects-CV-frontend/', // GitHub Pages repo name
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
});
