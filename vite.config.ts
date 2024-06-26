import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import simpleHtmlPlugin from 'vite-plugin-simple-html'
import { webfontDownload } from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cv-application-the-odin-project/',
  plugins: [react(), simpleHtmlPlugin({ minify: true }), webfontDownload()]
})
