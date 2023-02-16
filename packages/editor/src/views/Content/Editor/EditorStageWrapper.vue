<template>
  <div class="editor-stage_wrapper">
    <iframe ref="iframeRef" class="editor-iframe" :src="url" frameborder="0"></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useEvent } from '@/hooks'
import type { Message, MometaMessage } from '@shared/types'
const props = defineProps<{
  iframeUrl?: string
}>()

const emit = defineEmits(['iframeChange'])

const iframeRef = ref<HTMLIFrameElement>()
const url = computed(() => {
  if (!props.iframeUrl) {
    return import.meta.env.DEV ? `http://127.0.0.1:5174/` : '/'
  }
  return import.meta.env.DEV ? `http://127.0.0.1:5174${props.iframeUrl}` : props.iframeUrl
})

watch(iframeRef, (val) => {
  emit('iframeChange', val)
})

const recieveMessage = (ev: MessageEvent<Message>) => {
  let origin: string
  if (import.meta.env.DEV) {
    origin = 'http://127.0.0.1:5174'
  } else {
    origin = '/'
  }
  if (ev.origin === origin) {
    if (ev.data.action === 'mometa') {
      const data = ev.data as MometaMessage
      console.log(data)
    }
  }
}

useEvent('message', recieveMessage)
</script>

<style scoped lang="less">
.editor-stage_wrapper {
  width: 100%;
  height: 100%;
  .editor-iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
