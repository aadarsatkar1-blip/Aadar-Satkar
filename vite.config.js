import { defineConfig } from 'vite';
import { glob } from 'glob';

export default defineConfig({
  build: {
    rollupOptions: {
      input: glob.sync('**/*.html'), // Ye saari HTML files dhoondh lega (pages folder wali bhi)
    },
  },
});
