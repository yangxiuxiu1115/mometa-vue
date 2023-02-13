<template>
  <div v-show="showAddress" class="editor-stage_widget"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import { useInject } from '@/hooks/useProvider'

const [showAddress] = useInject<boolean>('showAddress')
const historyStack = reactive<{
  urls: string[]
  index: number
}>({
  urls: ['/'],
  index: 0
})
const action = ref<{
  type: 'history' | 'hash'
  url: string
  action: 'push' | 'replace'
  data: any
}>()
watch(action, (val) => {
  if (val) {
    if (val.action === 'replace') {
      historyStack.urls[historyStack.index] = val.url
    } else {
      historyStack.urls.push(val.url)
      historyStack.index = historyStack.index + 1
    }
  }
  console.log(historyStack)
})

const messageHandle = (ev: MessageEvent) => {
  if (import.meta.env.DEV && ev.origin !== 'http://127.0.0.1:5174') {
    return
  } else if (!import.meta.env.DEV && ev.origin !== window.origin) {
    return
  } else {
    action.value = ev.data
  }
}

onMounted(() => {
  window.addEventListener('message', messageHandle)
})

onUnmounted(() => {
  window.removeEventListener('message', messageHandle)
})
</script>

<style scoped lang="less">
.editor-stage_widget {
  height: 45px;
  flex-shrink: 0;
}
</style>
