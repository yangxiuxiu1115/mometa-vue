<template>
  <div class="editor-material">
    <a-tabs :class="{ 'ant-tabs_hidden': props.leftPanalCollapse }">
      <a-tab-pane key="Local Mat" tab="Local Mat">Local Mat</a-tab-pane>
      <a-tab-pane key="Antd" tab="Antd">
        <EditorAntdV />
      </a-tab-pane>
    </a-tabs>
    <div class="colse-btn" @click="handleCollapse">
      <DoubleRightOutlined v-if="props.leftPanalCollapse" :style="{ color: 'rgb(24, 144, 255)' }" />
      <DoubleLeftOutlined v-else :style="{ color: 'rgb(24, 144, 255)' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons-vue'
import EditorAntdV from './EditorAntdV.vue'

const props = defineProps<{
  leftPanalCollapse: boolean
}>()
const emits = defineEmits(['changeLeftPanalCollapse'])

const handleCollapse = () => {
  emits('changeLeftPanalCollapse', !props.leftPanalCollapse)
}
</script>

<style scoped lang="less">
.editor-material {
  display: flex;
  height: 100%;

  .ant-tabs.ant-tabs_hidden {
    width: 0;
    margin: 0;
    opacity: 0;
    padding: 0;
    border: none;
  }
  .ant-tabs {
    overflow: hidden;
    flex: 1;
    opacity: 1;
    transition: all ease 0.25s;
    :deep(.ant-tabs-content) {
      width: 100%;
      height: 100%;
    }
  }
  .colse-btn {
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
</style>
