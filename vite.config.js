import handlebars from '@vituum/vite-plugin-handlebars';
import { defineConfig } from 'vite';
import vituum from 'vituum';

export default defineConfig(() => ({
  plugins: [
    vituum(),
    handlebars({
      root: './src',
    }),
  ],
}));
