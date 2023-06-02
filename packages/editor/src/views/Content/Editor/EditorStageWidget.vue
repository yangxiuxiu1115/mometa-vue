<template>
  <div v-show="showAddress" class="editor-stage-widget">
    <a-space :size="10">
      <a-button type="text" :disabled="canBack" @click="goBack">
        <template #icon><arrow-left-outlined /></template>
      </a-button>
      <a-button type="text" :disabled="canNext" @click="goNext">
        <template #icon><arrow-right-outlined /></template>
      </a-button>
      <a-button type="text" @click="reload">
        <template #icon><sync-outlined /></template>
      </a-button>
      <a-input
        class="editor-stage-widget__input"
        :value="inputValue"
        @change="onChange"
        @press-enter="onPressEnter"
      ></a-input
    ></a-space>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch, computed } from 'vue'
import { ArrowLeftOutlined, ArrowRightOutlined, SyncOutlined } from '@ant-design/icons-vue'

import { useInject, useState, useEvent } from '@/hooks'
import type { HashMessage, HistoryMessage, Message } from '@shared/types'
import { originUrl } from '@/utils'

const emit = defineEmits(['urlChange'])

const url = () => {
  return historyStack.urls[historyStack.index]
}

const [showAddress] = useInject<boolean>('showAddress')
const historyStack = reactive<{
  urls: string[]
  index: number
}>({
  urls: ['/'],
  index: 0
})
const canBack = computed(() => {
  return historyStack.index === 0
})
const goBack = () => {
  historyStack.index--
  emit('urlChange', url())
}
const canNext = computed(() => {
  return historyStack.index === historyStack.urls.length - 1
})
const goNext = () => {
  historyStack.index++
  emit('urlChange', url())
}
const reload = () => {
  const urls = url()
  historyStack.urls = [urls]
  historyStack.index = 0
  emit('urlChange', urls)
}

const [inputValue, setInputValue] = useState(url())
const onChange = (e: KeyboardEvent) => {
  setInputValue((e.target as HTMLInputElement)?.value)
}
const onPressEnter = (e: KeyboardEvent) => {
  emit('urlChange', (e.target as HTMLInputElement)?.value)
}
watch(
  () => url(),
  (val) => {
    setInputValue(val)
  }
)

const messageHandle = (ev: MessageEvent<Message>) => {
  if (import.meta.env.DEV && ev.origin !== originUrl) {
    return
  } else if (!import.meta.env.DEV && ev.origin !== window.origin) {
    return
  } else {
    if (['history', 'hash'].includes(ev.data.action)) {
      const val = ev.data as HistoryMessage | HashMessage
      const url = new URL(val.url, 'http://127.0.0.1:5173')
      if (val.type === 'replace') {
        historyStack.urls[historyStack.index] = url.pathname
      } else {
        historyStack.urls.push(url.pathname)
        historyStack.index = historyStack.index + 1
      }
    }
  }
}

useEvent('message', messageHandle)
</script>

<style scoped lang="less">
.editor-stage-widget {
  height: 45px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  .ant-space {
    width: 100%;
    &:deep(.ant-space-item:last-child) {
      flex: 1;
      .editor-stage-widget__input {
        width: 100%;
        border-radius: 15px;
      }
    }
  }
}
</style>
