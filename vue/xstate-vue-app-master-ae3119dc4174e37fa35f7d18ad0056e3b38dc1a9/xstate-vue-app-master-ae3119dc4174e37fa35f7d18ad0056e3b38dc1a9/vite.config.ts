import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // add more examples below
        ex01: resolve(__dirname, 'sub/ex01.html'),
        ex02: resolve(__dirname, 'sub/ex02.html'),
      },
    },
  },
});
