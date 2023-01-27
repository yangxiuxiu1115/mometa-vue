<template>
  <div class="editor-attribute">
    <el-tabs :class="{ 'el-tabs_hidden': props.rightPanalCollapse }">
      <el-tab-pane label="属性" name="attribute">attribute</el-tab-pane>
    </el-tabs>
    <div class="colse-btn" @click="handleCollapse">
      <el-icon color="rgb(24, 144, 255)">
        <DArrowLeft v-if="props.rightPanalCollapse" />
        <DArrowRight v-else />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'

const props = defineProps<{
  rightPanalCollapse: boolean
}>()
const emits = defineEmits(['changeRightPanalCollapse'])

const handleCollapse = () => {
  emits('changeRightPanalCollapse', !props.rightPanalCollapse)
}
</script>

<style scoped lang="less">
.editor-attribute {
  display: flex;
  height: 100%;
  flex-direction: row-reverse;

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
