import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
// @ts-ignore
import Mometa from '../editor/plugin'

// https://vitejs.dev/config/
export default defineConfig(({}) => {
  return {
    plugins: [Mometa({}), vue(), Inspect()]
  }
})
