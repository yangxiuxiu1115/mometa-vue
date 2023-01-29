import { createFilter, PluginOption } from 'vite'

import InjectMometaElement from './InjectMometaElement'
import InjectMometaSFC from './InjectMometaSFC'
import middlewares from './middleware/'

const Mometa = function (customOptions: object): PluginOption {
  const vueOptions = {
    include: [/vue\.js\?v=[a-zA-Z0-9]{8}$/],
    exclude: []
  }

  const SFCOption = {
    include: [/\.vue$/],
    exclude: []
  }

  const filterVue = createFilter(vueOptions.include, vueOptions.exclude)
  const filterSFC = createFilter(SFCOption.include, SFCOption.exclude)

  return {
    name: 'vite-plugin-mometa',
    apply: 'serve',
    configureServer(server) {
      for (const middleware of middlewares) {
        server.middlewares.use(middleware)
      }
    },
    transform(src: string, id: string) {
      const isVue = filterVue(id)
      const isSFC = filterSFC(id)
      if (!isVue && !isSFC) return
      if (isSFC) {
        return {
          code: InjectMometaSFC(src, id)
        }
      }
      return InjectMometaElement(src)
    }
  }
}

export default Mometa
