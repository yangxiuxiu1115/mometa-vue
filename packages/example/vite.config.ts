import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import Mometa from '@mometa-vue/editor'

// https://vitejs.dev/config/
export default defineConfig(({}) => {
  return {
    plugins: [
      Mometa({}),
      vue(),
      Inspect(),
      AutoImport({
        resolvers: [AntDesignVueResolver()]
      }),
      Components({
        resolvers: [AntDesignVueResolver()]
      })
    ]
  }
})
