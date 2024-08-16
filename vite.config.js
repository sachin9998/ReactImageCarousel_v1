import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { ghPages } from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ReactImageCarousel_v1",
  plugins: [react(), ghPages()],
})
