<template>
  <div class="editor-stage_wrapper">
    <iframe class="editor-iframe" :src="url" frameborder="0"></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  iframeUrl?: string
}>()

const url = computed(() => {
  if (!props.iframeUrl) {
    return import.meta.env.DEV ? `http://127.0.0.1:5174/` : '/'
  }
  return import.meta.env.DEV ? `http://127.0.0.1:5174${props.iframeUrl}` : props.iframeUrl
})
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
