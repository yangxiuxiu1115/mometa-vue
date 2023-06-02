import type { Mometa } from '@shared/types'
import * as uuid from 'uuid'
import { getSelectId } from './utils'

const originCreateElement = document.createElement

document.createElement = function (tagName: string, options?: ElementCreationOptions) {
  const el = originCreateElement.call(this, tagName, options)

  Object.defineProperty(el, 'mometa', {
    enumerable: true,
    set(value: Mometa) {
      const id = (el as any).__mometa?.id || uuid.v4()
      const mometa = {
        ...value,
        id
      }
      if (getSelectId() === id) {
        window.parent.postMessage(
          {
            action: 'selected',
            mometa: {
              mometa,
              rect: el.getBoundingClientRect(),
              name: mometa.name
            }
          },
          '*'
        )
      }
      ;(el as any).__mometa = mometa
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
