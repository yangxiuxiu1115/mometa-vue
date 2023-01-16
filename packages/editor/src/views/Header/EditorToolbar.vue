<template>
  <div class="editor-toolbar">
    <el-divider direction="vertical" />
    <el-tooltip content="编辑模式" placement="bottom">
      <el-button size="small" :icon="EditPen" circle :class="{ 'is-active': isEdit }" @click="changeIsEdit(!isEdit)" />
    </el-tooltip>
    <el-tooltip content="地址栏" placement="bottom">
      <el-button
        size="small"
        :icon="Link"
        circle
        :class="{ 'is-active': showAddress }"
        @click="changeShowAddress(!showAddress)"
      />
    </el-tooltip>
    <el-divider direction="vertical" />
    <el-link type="primary">在新窗口打开</el-link>
  </div>
</template>

<script setup lang="ts">
import { Link, EditPen } from '@element-plus/icons-vue'

import { useInject } from '@/hooks/useProvider'

const [isEdit, changeIsEdit] = useInject<boolean>('isEdit')
const [showAddress, changeShowAddress] = useInject<boolean>('showAddress')
</script>

<style scoped lang="less">
.editor-toolbar {
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
  .el-button {
    margin: 0 10px;
  }
}
</style>
