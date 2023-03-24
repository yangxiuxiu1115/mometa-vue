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

const originDefineProperty = Object.defineProperty

Object.defineProperty = function (obj: any, prop: string, descriptor: PropertyDescriptor & ThisType<any>): any {
  const newDescriptor = { ...descriptor }
  if (obj instanceof HTMLElement && prop === '__vnode') {
    const value = descriptor.value
    const mometa = value.props?.mometa || value.ctx.attrs?.mometa
    if (mometa) {
      newDescriptor.value = {
        ...value,
        __mometa: mometa
      }
    }
  }
  return originDefineProperty.call(this, obj, prop, newDescriptor)
}

export {}
