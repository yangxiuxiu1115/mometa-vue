<template>
  <div ref="iframeWrapperRef" class="editor-stage__iframe-wrapper">
    <iframe
      v-if="changeIframe"
      ref="iframeRef"
      class="editor-iframe"
      :src="`${originUrl}${iframeUrl}`"
      frameborder="0"
    ></iframe>
    <iframe v-else ref="iframeRef" class="editor-iframe" :src="`${originUrl}${iframeUrl}`" frameborder="0"></iframe>
  </div>
  <EditorStagePrompt :is-resizing="isResizing" />
</template>

<script setup lang="ts">
import { watch, onMounted, onUnmounted, ref } from 'vue'
import { originUrl } from '@/utils'

import EditorStagePrompt from './EditorStagePrompt.vue'

const props = defineProps<{
  iframeUrl: { url: string }
}>()

const emit = defineEmits(['iframeChange'])
const iframeRef = ref<HTMLIFrameElement>()
const iframeUrl = ref('')
const changeIframe = ref(true)
watch(
  () => props.iframeUrl,
  (val) => {
    changeIframe.value = !changeIframe.value
    iframeUrl.value = val.url
  },
  {
    immediate: true
  }
)
watch(iframeRef, (val) => {
  emit('iframeChange', val)
})

const isResizing = ref(true)
let stopId: number
let resize: ResizeObserver
onMounted(() => {
  if (iframeRef.value) {
    resize = new ResizeObserver(() => {
      if (stopId) {
        cancelAnimationFrame(stopId)
      }
      isResizing.value = false

      stopId = requestAnimationFrame(() => {
        isResizing.value = true
      })
    })
    resize.observe(iframeRef.value)
  }
})

onUnmounted(() => {
  resize.disconnect()
})
</script>

<style scoped lang="less">
.editor-stage__iframe-wrapper {
  width: 100%;
  height: 100%;
  .editor-iframe {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
