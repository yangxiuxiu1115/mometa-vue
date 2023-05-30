import { provide, inject, shallowRef } from 'vue'
import type { Ref, UnwrapRef } from 'vue'

type handleFunc<T> = (val: T) => void

const Splicing = (pre: string, last: string) => {
  return pre + last.slice(0, 1).toUpperCase() + last.slice(1)
}

const useProvider = <T = any>(key: string, defaultValue: T) => {
  const handleKey = Splicing('change', key)
  const providerVal = shallowRef(defaultValue)

  provide(key, providerVal)
  provide(handleKey, (val: T) => {
    providerVal.value = val
  })

  return providerVal
}

const useInject = <T>(key: string) => {
  const handleKey = Splicing('change', key)

  const bool = inject<Ref<T>>(key)
  const handler = inject<handleFunc<UnwrapRef<T>>>(handleKey)

  if (!bool || !handler) {
    throw Error('useInject key must valid')
  }

  return [bool, handler] as const
}

export { useProvider, useInject }
