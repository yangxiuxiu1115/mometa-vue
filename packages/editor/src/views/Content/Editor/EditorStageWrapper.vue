<template>
  <div ref="iframeWrapperRef" class="editor-stage__iframe-wrapper">
    <iframe ref="iframeRef" class="editor-iframe" :src="url" frameborder="0"></iframe>
  </div>
  <EditorStagePrompt :is-resizing="isResizing" />
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'

import EditorStagePrompt from './EditorStagePrompt.vue'

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

const isResizing = ref(false)
let stopId: number
let resize: ResizeObserver
onMounted(() => {
  if (iframeRef.value) {
    resize = new ResizeObserver(() => {
      if (stopId) {
        cancelAnimationFrame(stopId)
      }
      isResizing.value = true
      stopId = requestAnimationFrame(() => {
        isResizing.value = false
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
