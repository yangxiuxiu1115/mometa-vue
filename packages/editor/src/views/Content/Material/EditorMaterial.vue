<template>
  <div class="editor-material">
    <el-tabs :class="{ 'el-tabs_hidden': props.leftPanalCollapse }">
      <el-tab-pane label="Local Mat" name="Local Mat">Local Mat</el-tab-pane>
      <el-tab-pane label="Antd" name="Antd">Antd</el-tab-pane>
    </el-tabs>
    <div class="colse-btn" @click="handleCollapse">
      <el-icon color="rgb(24, 144, 255)">
        <DArrowRight v-if="props.leftPanalCollapse" />
        <DArrowLeft v-else />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'

const props = defineProps<{
  leftPanalCollapse: boolean
}>()
const emits = defineEmits(['changeLeftPanalCollapse'])

const handleCollapse = () => {
  emits('changeLeftPanalCollapse', !props.leftPanalCollapse)
}
</script>

<style scoped lang="less">
.editor-material {
  display: flex;
  height: 100%;

  .el-tabs.el-tabs_hidden {
    width: 0;
    margin: 0;
    opacity: 0;
    padding: 0;
    border: none;
  }
  .el-tabs {
    overflow: hidden;
    flex: 1;
    opacity: 1;
    transition: all ease 0.25s;
    --el-tabs-header-height: 45px;
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
