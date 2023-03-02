<template>
  <div class="editor-antdv">
    <div v-for="assertGroups in antdv?.assertGroups" :key="assertGroups.key" class="editor-antdv__assert-group">
      <span>{{ assertGroups.name }}</span>
      <a-list :grid="{ gutter: 3, column: 3 }" :data-source="assertGroups.asserts" size="small">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-card hoverable>
              <template #cover>
                <img class="editor-antdv-item__img" :src="item.cover" />
              </template>
              <a-card-meta :title="item.name"> </a-card-meta>
            </a-card>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, onMounted } from 'vue'
import type { Material } from '@mometa-vue/materials'
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
  overflow-y: scroll;
  padding: 10px;
  .editor-antdv__assert-group {
    width: 100%;
    margin-bottom: 10px;
    overflow: hidden;
    transition: height ease 0.25s;
    :deep(.ant-list-item) {
      margin-bottom: 0;
      padding: 5px;
      .ant-card {
        padding: 5px;
        .editor-antdv-item__img {
          height: 70px;
          width: 60px;
        }
      }
    }
    :deep(.ant-card-body) {
      padding: 0;
    }
  }
}
</style>
