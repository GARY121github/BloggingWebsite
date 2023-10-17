import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const proxy_url = 'http://localhost:3000/';
// https://vitejs.dev/config/
export default defineConfig({
  // proxy: {
  //   "/blog": {
  //     target: proxy_url,
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^/blog/, ""),
  //   },
    plugins: [react()],
  })
