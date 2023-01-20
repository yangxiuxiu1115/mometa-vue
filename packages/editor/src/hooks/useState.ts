import { ref } from 'vue'
import type { UnwrapRef } from 'vue'

type BaseType = number | boolean | string
const useState = <T extends BaseType>(val: T) => {
  const state = ref(val)
  const handle = (val: UnwrapRef<T>) => {
    console.log(val, state)
    state.value = val
  }

  return [state, handle] as const
}

export default useState
