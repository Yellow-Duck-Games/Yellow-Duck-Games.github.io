import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages has no server-side routing. With HTML5 history mode, a direct
// visit or refresh on a deep link (e.g. /games) would 404. Emitting a 404.html
// that is a copy of index.html makes Pages serve the SPA for any unknown path,
// so Vue Router can then render the correct view. Keeps URLs clean (no #).
//
// The 404.html fallback still responds with HTTP status 404, which automated
// link checkers (e.g. app store review) reject even though the page renders.
// So we also emit a real <route>/index.html for every known route, making
// Pages return 200 for direct visits. Product routes are derived from the
// dist/products/{games,apps}/<id> content folders.
function spaFallback(): Plugin {
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    closeBundle: {
      sequential: true,
      order: 'post',
      async handler() {
        const { copyFile, mkdir, readdir } = await import('node:fs/promises')
        const outDir = fileURLToPath(new URL('./dist', import.meta.url))
        await copyFile(`${outDir}/index.html`, `${outDir}/404.html`)

        const routes = ['games', 'apps', 'about', 'data-deletion-request']
        for (const category of ['games', 'apps']) {
          const entries = await readdir(`${outDir}/products/${category}`, { withFileTypes: true })
          routes.push(...entries.filter((e) => e.isDirectory()).map((e) => `${category}/${e.name}`))
        }
        for (const route of routes) {
          await mkdir(`${outDir}/${route}`, { recursive: true })
          await copyFile(`${outDir}/index.html`, `${outDir}/${route}/index.html`)
        }
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
