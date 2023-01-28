import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import Mometa from '@mometa-vue/editor'

// https://vitejs.dev/config/
export default defineConfig(({}) => {
  return {
    plugins: [Mometa({}), vue(), Inspect()]
  }
})
