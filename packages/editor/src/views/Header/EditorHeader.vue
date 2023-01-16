<template>
  <div class="editor-header">
    <div class="title">
      <h3>mometa-vue</h3>
    </div>
    <EditorToolbar />
  </div>
</template>

<script setup lang="ts">
import EditorToolbar from './EditorToolbar.vue'
</script>

<style scoped lang="less">
.editor-header {
  display: flex;
  .title {
    flex-basis: 280px;
    margin: 0 10px;
    h3 {
      margin: 0;
      line-height: 40px;
    }
  }
}
</style>
