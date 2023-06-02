<template>
  <div class="editor-stage">
    <EditorStageWidget @url-change="urlChange" />
    <div class="editor-stage__wrapper">
      <EditorStageWrapper :iframe-url="iframeUrl" @iframe-change="iframeChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EditorStageWidget from './EditorStageWidget.vue'
import EditorStageWrapper from './EditorStageWrapper.vue'

const iframeUrl = ref({ url: '/' })
const iframeRef = ref<HTMLIFrameElement>()

const urlChange = (url: string) => {
  iframeUrl.value = { url }
}

const iframeChange = (el?: HTMLIFrameElement) => {
  iframeRef.value = el
}
</script>

<style scoped lang="less">
.editor-stage {
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  .editor-stage__wrapper {
    flex: 1 1;
    padding: 20px;
    background-color: rgb(226, 229, 236);
    position: relative;
  }
}
</style>
