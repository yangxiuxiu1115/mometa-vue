<template>
  <MaterialList :materials="antdv" />
</template>

<script setup lang="ts">
import { shallowRef, onMounted } from 'vue'
import type { Material } from '@mometa-vue/materials'
import MaterialList from '@/components/MaterialList.vue'
import { http } from '@/utils'

const antdv = shallowRef<Material>()
onMounted(async () => {
  const { httpRequest } = http('material', null, 'get')
  antdv.value = JSON.parse(await (await httpRequest).text())
})
</script>

<style scoped lang="less">
.editor-antdv {
  width: 100%;
  height: 100%;
  padding-left: 5px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  .ant-collapse {
    border: none;
    .ant-collapse-item {
      :deep(.ant-collapse-header) {
        font-size: 6px;
        font-weight: 600;
        padding: 8px 10px;
        background-color: white;
      }
      :deep(.ant-collapse-content-box) {
        padding: 0;
      }
      .editor-andv-card {
        display: flex;
        padding: 12px;
        flex-direction: column;
        height: 114px;
        justify-content: space-between;
        align-items: center;
        border-right: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        cursor: pointer;
        transition: box-shadow 0.2s ease, -webkit-box-shadow 0.2s ease;
        &:hover {
          box-shadow: 0 6px 16px 0 rgb(0 0 0 / 15%);
          border-color: transparent;
        }
        .editor-andv-card__img {
          width: 56px;
          height: 56px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .editor-antdv__search {
    padding-bottom: 10px;
  }
}
</style>
