import type { Mometa } from '@shared/types'

const originCreateElement = document.createElement

document.createElement = function (tagName: string, options?: ElementCreationOptions) {
  const el = originCreateElement.call(this, tagName, options)

  Object.defineProperty(el, 'mometa', {
    enumerable: true,
    set(value: Mometa) {
      const path = el.getAttribute('__mometa')
      ;(el as any).__mometa = {
        ...value,
        path
      }
    },
    get() {
      return (el as any).__mometa
    }
  })

  return el
}

export {}
