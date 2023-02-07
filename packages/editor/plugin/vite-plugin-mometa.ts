import { createFilter, PluginOption } from 'vite'

import { InjectMometaElementV2, InjectMometaSFC, InjectRuntime } from './runtime'
import middlewares from './middleware/'

const Mometa = function (customOptions: object): PluginOption {
  const jsOptions = {
    include: [/\.js\?v=[a-zA-Z0-9]{8}$/],
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
    transform(src: string, id: string) {
      const isSFC = filterSFC(id)
      const isJS = filterJS(id)
      if (!isSFC && !isJS) return
      if (isSFC) {
        return {
          code: InjectMometaSFC(src, id)
        }
      }
      return InjectMometaElementV2(src)
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
