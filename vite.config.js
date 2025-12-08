import { defineConfig } from 'vite';
import { glob } from 'glob';
// Curly braces {} hata do:
import viteMinify from 'vite-plugin-html-minifier-terser';

export default defineConfig({
  plugins: [
    viteMinify(),
  ],
  build: {
    rollupOptions: {
      input: glob.sync('**/*.html'),
    },
  },
});





