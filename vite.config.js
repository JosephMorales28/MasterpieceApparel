import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public', // 👈 tells Vite to use /public as the root
  build: {
    outDir: 'dist', // 👈 Vercel will deploy from /dist
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
