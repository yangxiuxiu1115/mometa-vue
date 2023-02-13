<template>
  <div class="editor-stage_wrapper">
    <iframe class="editor-iframe" :src="url" frameborder="0"></iframe>
  </div>
</template>

<script setup lang="ts">
const url = import.meta.env.DEV ? 'http://127.0.0.1:5174/' : '/'
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
