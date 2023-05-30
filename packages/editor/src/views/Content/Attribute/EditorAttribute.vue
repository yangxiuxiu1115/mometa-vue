<template>
  <div class="editor-attribute">
    <a-tabs v-if="selectNode" :class="{ 'ant-tabs_hidden': props.rightPanalCollapse }">
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
    <div class="close-btn" @click="handleCollapse">
      <double-left-outlined v-if="props.rightPanalCollapse" :style="{ color: 'rgb(24, 144, 255)' }" />
      <double-right-outlined v-else :style="{ color: 'rgb(24, 144, 255)' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, shallowRef } from 'vue'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons-vue'

import type { Loc } from '@mometa-vue/fs-handle'

import MonacoEditor from '@/components/Monaco/MonacoEditor.vue'
import EventAttribute from './EventAttribute/EventAttribute.vue'

import type { NodeStyle } from '@shared/types'
import { useInject } from '@/hooks'
import { http } from '@/utils'
import { val } from 'cheerio/lib/api/attributes'

const props = defineProps<{
  rightPanalCollapse: boolean
}>()
const emits = defineEmits(['changeRightPanalCollapse'])

const [selectNode] = useInject<NodeStyle>('selectNode')
const code = ref('')
const scriptCode = ref('')
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
    const data = JSON.parse(await (await httpRequest).text())
    code.value = data.template
    scriptCode.value = data.script
  } else {
    code.value = ''
    scriptCode.value = ''
  }
})

const handleCollapse = () => {
  emits('changeRightPanalCollapse', !props.rightPanalCollapse)
}

const onChange = (value?: string) => {
  http('nodeopt', {
    type: 3,
    filename: filename.value,
    data: {
      start: range.value?.start,
      end: range.value?.end,
      code: value
    }
  })
  location.reload()
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
