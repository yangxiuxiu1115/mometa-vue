<script setup lang="ts">
import EditorHeader from './views/Header/EditorHeader.vue'
import { EditorAttribute, EditorMaterial, EditorStage } from './views/Content'
</script>

<template>
  <el-container style="height: 100%">
    <el-header>
      <EditorHeader />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <EditorMaterial />
      </el-aside>
      <el-main>
        <EditorStage />
      </el-main>
      <el-aside width="200px">
        <EditorAttribute />
      </el-aside>
    </el-container>
  </el-container>
</template>

<style scoped></style>
