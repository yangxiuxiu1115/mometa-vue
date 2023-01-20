<template>
  <div class="editor-stage">
    <div v-show="showAddress" class="location-widget"></div>
    <div style="flex: 1 1; padding: 20px; background-color: rgb(226, 229, 236)">
      <div class="editor-stage_wrapper"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInject } from '@/hooks/useProvider'

const [showAddress] = useInject<boolean>('showAddress')
</script>

<style scoped lang="less">
.editor-stage {
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  .location-widget {
    height: 45px;
  }
  .editor-stage_wrapper {
  }
}
</style>
