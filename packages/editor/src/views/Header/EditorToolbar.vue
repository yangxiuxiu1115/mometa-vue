<template>
  <div class="editor-toolbar">
    <a-divider type="vertical" />
    <a-popover content="编辑模式" placement="bottom">
      <a-button size="small" shape="circle" :class="{ 'is-active': isEdit }" @click="changeIsEdit(!isEdit)">
        <template #icon>
          <edit-filled />
        </template>
      </a-button>
    </a-popover>
    <a-popover content="地址栏" placement="bottom">
      <a-button
        size="small"
        shape="circle"
        :class="{ 'is-active': showAddress }"
        @click="changeShowAddress(!showAddress)"
      >
        <template #icon>
          <link-outlined />
        </template>
      </a-button>
    </a-popover>
    <a-divider type="vertical" />
    <a-button type="link">在新窗口打开</a-button>
  </div>
</template>

<script setup lang="ts">
import { EditFilled, LinkOutlined } from '@ant-design/icons-vue'
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
  .ant-btn {
    margin: 0 10px;
  }
}
</style>
