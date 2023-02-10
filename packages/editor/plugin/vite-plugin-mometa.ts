import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createFilter, PluginOption } from 'vite'

import { InjectMometaElementV3, InjectMometaSFC, InjectRuntime } from './runtime'
import middlewares from './middleware'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resolve = (...paths: string[]) => path.resolve(__dirname, ...paths)

const Mometa = function (customOptions: object): PluginOption {
  const jsOptions = {
    include: [/vue\.js\?v=[a-zA-Z0-9]{8}$/],
    exclude: []
  }

  const SFCOption = {
    include: [/\.vue$/],
    exclude: []
  }

  const filterSFC = createFilter(SFCOption.include, SFCOption.exclude)
  const filterJS = createFilter(jsOptions.include, jsOptions.exclude)

  return {
    name: 'vite-plugin-mometa',
    apply: 'serve',
    configureServer(server) {
      for (const middleware of middlewares) {
        server.middlewares.use(middleware)
      }
    },
    // resolveId(source) {
    //   if (source.startsWith('/__mometa')) {
    //     return resolve(`../..${source}`)
    //   }
    // },
    transform(src: string, id: string) {
      const isSFC = filterSFC(id)
      const isJS = filterJS(id)
      if (isSFC) {
        return {
          code: InjectMometaSFC(src, id)
        }
      }
      return InjectMometaElementV3(src, id, isJS)
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return InjectRuntime(html)
      }
    }
  }
}

export default Mometa
