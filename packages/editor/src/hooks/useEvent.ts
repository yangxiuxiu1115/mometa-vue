import { onMounted, onUnmounted } from 'vue'

function useEvent<K extends keyof WindowEventMap>(
  name: K,
  cb: (this: Window, ev: WindowEventMap[K]) => any,
  options?: AddEventListenerOptions | boolean
): void
function useEvent(
  name: string,
  cb: EventListenerOrEventListenerObject,
  options?: AddEventListenerOptions | boolean
): void {
  onMounted(() => window.addEventListener(name, cb, options))
  onUnmounted(() => window.removeEventListener(name, cb))
}

export default useEvent
