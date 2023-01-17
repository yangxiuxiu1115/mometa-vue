<script setup lang="ts">
import { ref } from 'vue'

import EditorHeader from './views/Header/EditorHeader.vue'
import { EditorAttribute, EditorMaterial, EditorStage } from './views/Content'

import { useProvider } from '@/hooks/useProvider'

useProvider('isEdit', true)
useProvider('showAddress', true)

const leftPanalCollapse = ref(false)
const changeLeftPanalCollapse = (val: boolean) => {
  leftPanalCollapse.value = val
}
</script>

<template>
  <el-container style="height: 100%">
    <el-header height="40px">
      <EditorHeader />
    </el-header>
    <el-container>
      <el-aside :width="leftPanalCollapse ? '20px' : '300px'" class="editor-left-panal">
        <EditorMaterial
          :left-panal-collapse="leftPanalCollapse"
          @change-left-panal-collapse="changeLeftPanalCollapse"
        />
      </el-aside>
      <el-main>
        <EditorStage />
      </el-main>
      <el-aside width="300px">
        <EditorAttribute />
      </el-aside>
    </el-container>
  </el-container>
</template>

<style scoped lang="less">
.el-header {
  padding: 0;
  z-index: 1;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
}
.el-aside {
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 4%), 0 2px 4px 0 rgb(0 0 0 / 12%);
  z-index: 1;
}
.editor-left-panal {
  transition: width 0.25s linear;
}
.el-main {
  padding: 0;
}
</style>
