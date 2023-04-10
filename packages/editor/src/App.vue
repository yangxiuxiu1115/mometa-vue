<script setup lang="ts">
import EditorHeader from './views/Header/EditorHeader.vue'
import { EditorAttribute, EditorMaterial, EditorStage } from './views/Content'

import { useProvider, useState } from '@/hooks'
import type { NodeStyle } from '@shared/types'

useProvider('isEdit', true)
useProvider('showAddress', true)
useProvider<NodeStyle>('selectNode', null)

const [rightPanalCollapse, changeRightPanalCollapse] = useState<boolean>(false)
</script>

<template>
  <a-layout style="height: 100%">
    <a-layout-header>
      <EditorHeader />
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="40px">
        <EditorMaterial />
      </a-layout-sider>
      <a-layout-content>
        <EditorStage />
      </a-layout-content>
      <a-layout-sider :width="rightPanalCollapse ? '20px' : '500px'" class="panal-transition">
        <EditorAttribute
          :right-panal-collapse="rightPanalCollapse"
          @change-right-panal-collapse="changeRightPanalCollapse"
        />
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="less">
.ant-layout-header {
  padding: 0;
  z-index: 1;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
  background-color: white;
  height: 40px;
}
.ant-layout-sider {
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 4%), 0 2px 4px 0 rgb(0 0 0 / 12%);
  z-index: 1;
  background-color: white;
}
.panal-transition {
  transition: all 0.25s linear;
}
.ant-layout-content {
  padding: 0;
}
</style>
