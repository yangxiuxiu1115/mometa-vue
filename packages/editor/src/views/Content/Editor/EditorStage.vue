<template>
  <div class="editor-stage">
    <EditorStageWidget />
    <div style="flex: 1 1; padding: 20px; background-color: rgb(226, 229, 236)">
      <EditorStageWrapper />
    </div>
  </div>
</template>

<script setup lang="ts">
import EditorStageWidget from './EditorStageWidget.vue'
import EditorStageWrapper from './EditorStageWrapper.vue'
</script>

<style scoped lang="less">
.editor-stage {
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
