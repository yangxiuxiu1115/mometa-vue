<template>
  <div ref="materialRef" class="editor-material">
    <a-tooltip placement="right">
      <template #title>
        <span>物料</span>
      </template>
      <a-button shape="circle" @click="material = !material">
        <template #icon><database-outlined /></template>
      </a-button>
    </a-tooltip>
    <a-tabs v-show="material">
      <a-tab-pane key="Local Mat" tab="Local Mat">Local Mat</a-tab-pane>
      <a-tab-pane key="Antd" tab="Antd">
        <EditorAntdV />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { DatabaseOutlined } from '@ant-design/icons-vue'
import EditorAntdV from './EditorAntdV.vue'

import { useEvent } from '@/hooks'

const material = ref(false)
const materialRef = ref<HTMLDivElement>()

const handle = (e: MouseEvent) => {
  if (e.composedPath().includes(materialRef.value!)) return
  material.value = false
}

useEvent('click', handle, true)
</script>

<style scoped lang="less">
.editor-material {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  .ant-tabs {
    position: absolute;
    left: 40px;
    top: 0;
    background-color: white;
    border: 1px solid #e8e8e8;
    height: 100%;
    min-width: 321px;
    padding: 0 20px;
    :deep(.ant-tabs-content) {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
