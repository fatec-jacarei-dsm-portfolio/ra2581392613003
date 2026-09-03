import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Nome do repositório: necessário para os arquivos funcionarem no GitHub Pages.
  base: '/ra2581392613003/',
  plugins: [react()],
  build: {
    // O GitHub Pages deste repositório publica a pasta docs.
    outDir: 'docs',
    emptyOutDir: false,
    rollupOptions: { output: { entryFileNames: 'assets/index.js', chunkFileNames: 'assets/[name]-[hash].js', assetFileNames: (assetInfo) => assetInfo.name?.endsWith('.css') ? 'assets/index.css' : 'assets/[name]-[hash][extname]' } },
  },
})
