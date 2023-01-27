import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const resolve = (str: string) => {
  return path.join(__dirname, str)
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: '/',
    resolve: {
      alias: {
        '@': resolve('./src')
      }
    },
    build: {
      outDir: '__mometa'
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
