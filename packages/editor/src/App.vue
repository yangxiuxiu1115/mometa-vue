<script setup lang="ts">
import EditorHeader from './views/Header/EditorHeader.vue'
import { EditorAttribute, EditorMaterial, EditorStage } from './views/Content'

import { useProvider } from '@/hooks/useProvider'

useProvider('isEdit', true)
useProvider('showAddress', true)
</script>

<template>
  <el-container style="height: 100%">
    <el-header height="40px">
      <EditorHeader />
    </el-header>
    <el-container>
      <el-aside width="300px">
        <EditorMaterial />
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
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
}
</style>
