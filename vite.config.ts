import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages has no server-side routing. With HTML5 history mode, a direct
// visit or refresh on a deep link (e.g. /games) would 404. Emitting a 404.html
// that is a copy of index.html makes Pages serve the SPA for any unknown path,
// so Vue Router can then render the correct view. Keeps URLs clean (no #).
function spaFallback(): Plugin {
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    closeBundle: {
      sequential: true,
      order: 'post',
      async handler() {
        const { copyFile } = await import('node:fs/promises')
        const outDir = fileURLToPath(new URL('./dist', import.meta.url))
        await copyFile(`${outDir}/index.html`, `${outDir}/404.html`)
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), spaFallback()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
