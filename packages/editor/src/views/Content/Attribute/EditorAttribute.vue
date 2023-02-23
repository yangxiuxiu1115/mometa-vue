<template>
  <div class="editor-attribute">
    <a-tabs :class="{ 'ant-tabs_hidden': props.rightPanalCollapse }">
      <a-tab-pane key="attribute" tab="属性">attribute</a-tab-pane>
    </a-tabs>
    <div class="colse-btn" @click="handleCollapse">
      <double-left-outlined v-if="props.rightPanalCollapse" :style="{ color: 'rgb(24, 144, 255)' }" />
      <double-right-outlined v-else :style="{ color: 'rgb(24, 144, 255)' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons-vue'
import type { NodeStyle } from '@shared/types'
import { useInject } from '@/hooks'

const props = defineProps<{
  rightPanalCollapse: boolean
}>()
const emits = defineEmits(['changeRightPanalCollapse'])

const [selectNode] = useInject<NodeStyle>('selectNode')

watch(selectNode, () => {
  console.log(selectNode.value)
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
