<template>
  <div class="editor-material">
    <el-tabs>
      <el-tab-pane label="Local Mat" name="Local Mat">Local Mat</el-tab-pane>
      <el-tab-pane label="Antd" name="Antd">Antd</el-tab-pane>
    </el-tabs>
    <div class="colse"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style scoped lang="less">
.editor-material {
  margin-top: 5px;
  display: flex;
  height: calc(100% - 5px);
  .el-tabs {
    flex: 1;
  }
  .colse {
    width: 20px;
    background-color: red;
  }
}
</style>
