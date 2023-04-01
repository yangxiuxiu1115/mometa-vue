<template>
  <div class="editor-attribute">
    <a-tabs :class="{ 'ant-tabs_hidden': props.rightPanalCollapse }">
      <a-tab-pane key="attribute" tab="属性">
        <template v-if="selectNode">
          <!-- <CodeMirror v-model:code="code" :range="range" :filename="filename" /> -->
          <monaco-editor :value="code"></monaco-editor>
        </template>
        <template v-else>
          <a-empty />
        </template>
      </a-tab-pane>
    </a-tabs>
    <div class="colse-btn" @click="handleCollapse">
      <double-left-outlined v-if="props.rightPanalCollapse" :style="{ color: 'rgb(24, 144, 255)' }" />
      <double-right-outlined v-else :style="{ color: 'rgb(24, 144, 255)' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, shallowRef } from 'vue'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons-vue'

import CodeMirror from '@/components/CodeMirror.vue'
import MonacoEditor from '@/components/MonacoEditor.vue'
import type { Loc } from '@mometa-vue/fs-handle'

import type { NodeStyle } from '@shared/types'
import { useInject } from '@/hooks'
import { http } from '@/utils'

const props = defineProps<{
  rightPanalCollapse: boolean
}>()
const emits = defineEmits(['changeRightPanalCollapse'])

const [selectNode] = useInject<NodeStyle>('selectNode')
const code = ref('')
const range = shallowRef<{
  start: Loc
  end: Loc
}>()
const filename = ref('')

watch(selectNode, async (val, _, onCleanUp) => {
  if (val) {
    range.value = {
      start: val.mometa.start,
      end: val.mometa.end
    }
    filename.value = val.mometa.filename
    const { httpRequest, abort } = http('nodeopt', {
      type: 4,
      filename: filename.value,
      data: range.value
    })
    onCleanUp(() => {
      try {
        abort()
      } catch (error) {}
    })
    code.value = await (await httpRequest).text()
  } else {
    code.value = ''
  }
})

const handleCollapse = () => {
  emits('changeRightPanalCollapse', !props.rightPanalCollapse)
}
</script>

<style scoped lang="less">
.editor-attribute {
  display: flex;
  height: 100%;
  flex-direction: row-reverse;

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
