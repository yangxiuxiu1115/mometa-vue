<template>
  <div class="editor-stage">
    <EditorStageWidget @url-change="urlChange" />
    <div style="flex: 1 1; padding: 20px; background-color: rgb(226, 229, 236)">
      <EditorStageWrapper :iframe-url="iframeUrl" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EditorStageWidget from './EditorStageWidget.vue'
import EditorStageWrapper from './EditorStageWrapper.vue'

const iframeUrl = ref<string>()

const urlChange = (url: string) => {
  iframeUrl.value = url
}
</script>

<style scoped lang="less">
.editor-stage {
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
