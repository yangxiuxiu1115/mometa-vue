import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

const resolve = (str: string) => {
  return path.join(__dirname, str)
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/${MOMETA_BASE_URL}' : '',
    resolve: {
      alias: {
        '@': resolve('./src'),
        '@shared': resolve('./shared')
      }
    },
    build: {
      outDir: '__mometa/editor'
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [AntDesignVueResolver()]
      }),
      Components({
        resolvers: [AntDesignVueResolver()]
      })
    ]
  }
})
