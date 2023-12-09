import handlebars from '@vituum/vite-plugin-handlebars';
import { defineConfig } from 'vite';
import vituum from 'vituum';

export default defineConfig(() => ({
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [
    vituum({
      pages: {
        root: '.', // relative to vite.root
        dir: 'pages' // relative to vite.root
      },
    }),
    handlebars(),
  ],
}));
