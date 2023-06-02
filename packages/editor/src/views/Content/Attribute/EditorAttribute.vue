<template>
  <div class="editor-attribute">
    <template v-if="!rightPanalCollapse">
      <a-tabs v-if="selectNode">
        <a-tab-pane key="attribute" tab="源码">
          <!-- <CodeMirror v-model:code="code" :range="range" :filename="filename" /> -->
          <monaco-editor :value="code" :content="scriptCode" :on-change="onChange"></monaco-editor>
        </a-tab-pane>
        <a-tab-pane key="event" tab="属性">
          <EventAttribute />
        </a-tab-pane>
      </a-tabs>
      <div v-else class="editor-empty">
        <a-empty />
      </div>
    </template>
    <div class="close-btn" @click="handleCollapse">
      <double-left-outlined v-if="rightPanalCollapse" :style="{ color: 'rgb(24, 144, 255)' }" />
      <double-right-outlined v-else :style="{ color: 'rgb(24, 144, 255)' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons-vue'
import MonacoEditor from '@/components/Monaco/MonacoEditor.vue'
import EventAttribute from './EventAttribute/EventAttribute.vue'
import { http } from '@/utils'
import { useSelectNode } from './useSelectNode'

const props = defineProps<{
  rightPanalCollapse: boolean
}>()
const emits = defineEmits(['changeRightPanalCollapse'])

const { code, scriptCode, filename, selectNode, range } = useSelectNode()

const handleCollapse = () => {
  emits('changeRightPanalCollapse', !props.rightPanalCollapse)
}

const onChange = (value?: string) => {
  http('nodeopt', {
    type: 3,
    filename: filename.value,
    data: {
      ...range.value,
      code: value
    }
  })
  // location.reload()
}
</script>

<style scoped lang="less">
.editor-attribute {
  display: flex;
  height: 100%;
  flex-direction: row-reverse;
  .ant-tabs {
    overflow: hidden;
    flex: 1;
    opacity: 1;
    transition: all ease 0.25s;
    :deep(.ant-tabs-content) {
      height: 100%;
    }
  }
  .editor-empty {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .close-btn {
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
</style>
