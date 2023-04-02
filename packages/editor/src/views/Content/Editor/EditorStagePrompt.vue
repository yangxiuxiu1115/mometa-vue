<template>
  <div class="editor-stage__prompt">
    <div
      v-if="hoverStyle"
      class="node-borders hover-node"
      :style="{
        width: `${hoverStyle.rect.width}px`,
        height: `${hoverStyle.rect.height}px`,
        transform: `translate(${hoverStyle.rect.left + 20}px, ${hoverStyle.rect.top + 20}px)`
      }"
    >
      <div class="node-borders__text hover-node__text">{{ hoverStyle.name }}</div>
    </div>
    <div
      v-if="selectedNode"
      class="node-borders selected-node"
      :style="{
        width: `${selectedNode.rect.width}px`,
        height: `${selectedNode.rect.height}px`,
        transform: `translate(${selectedNode.rect.left + 20}px, ${selectedNode.rect.top + 20}px)`
      }"
    >
      <div class="node-borders__text selected-node__text">
        <span>{{ selectedNode.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, watch } from 'vue'

import { useEvent, useInject } from '@/hooks'
import { isEqual } from '@/utils'
import type { Message, MometaPath, MometaMessage, NodeStyle } from '@shared/types'

const props = defineProps<{
  isResizing: boolean
}>()

const [isEdit] = useInject<boolean>('isEdit')
const [selectedNode, changeSelectNode] = useInject<NodeStyle>('selectNode')
watch(
  () => [isEdit.value, props.isResizing],
  (values) => {
    for (const val of values) {
      if (!val) {
        mometaPath.value = []
        hoverStyle.value = null
        selectedNode.value = null
        break
      }
    }
  }
)

const mometaPath = shallowRef<MometaPath[]>([])
const hoverStyle = shallowRef<NodeStyle>(null)
watch(mometaPath, (val) => {
  if (val.length) {
    const hover = val[0]
    if (selectedNode.value && isEqual(hover, selectedNode.value, ['rect', 'name'])) {
      hoverStyle.value = null
      return
    }
    hoverStyle.value = hover
  } else {
    hoverStyle.value = null
  }
})
const receiveMessage = (ev: MessageEvent<Message>) => {
  if (!isEdit.value) return
  let origin: string
  if (import.meta.env.DEV) {
    origin = 'http://127.0.0.1:5174'
  } else {
    origin = '/'
  }
  if (ev.origin === origin) {
    if (ev.data.action === 'mometa') {
      const data = ev.data as MometaMessage
      mometaPath.value = data.mometa
    }
    if (ev.data.action === 'selected') {
      changeSelectNode(hoverStyle.value)
      hoverStyle.value = null
    }
  }
}
useEvent('message', receiveMessage)
</script>

<style scoped lang="less">
.editor-stage__prompt {
  pointer-events: none;
  .node-borders {
    background: rgba(0, 121, 242, 0.04);
    border: 1px solid #197aff;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    .node-borders__text {
      position: absolute;
      top: 0;
      font-size: 12px;
      transform: translateY(-100%);
      display: flex;
      align-items: center;
      justify-content: center;
      word-break: break-all;
      white-space: nowrap;
    }
  }
  .hover-node {
    border-style: dashed;
    .hover-node__text {
      left: 0;
      color: #197aff;
    }
  }
  .selected-node {
    .selected-node__text {
      right: 0;
      background: #006cff;
      padding: 0 6px;
      color: #fff;
      height: 20px;
      cursor: pointer;
      border-radius: 3px;
    }
  }
}
</style>
