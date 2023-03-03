<template>
  <div class="editor-antdv">
    <div class="editor-antdv__search">
      <a-input-search v-model:value="search" @change="onSearch" />
    </div>
    <a-collapse v-model:activeKey="activeKey" expand-icon-position="right" @change="onChange">
      <a-collapse-panel v-for="assertGroup in cardList?.assertGroups" :key="assertGroup.key" :header="assertGroup.name">
        <a-list :grid="{ column: 3 }" :data-source="assertGroup.asserts" size="small">
          <template #renderItem="{ item }">
            <div class="editor-andv-card">
              <div class="editor-andv-card__img">
                <img :alt="item.name" :src="item.cover" />
              </div>
              <div>{{ item.name }}</div>
            </div>
          </template>
        </a-list>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, shallowRef } from 'vue'
import type { Material } from '@mometa-vue/materials'

const props = defineProps<{
  materials?: Material
}>()

const search = ref('')
const activeKey = reactive([''])
const onChange = (keys: string[]) => {
  activeKey.splice(0, activeKey.length)
  activeKey.push(...keys)
}
const cardList = shallowRef<Material>()
watch(
  () => props.materials,
  (val) => {
    if (val) {
      activeKey.splice(0, activeKey.length)
      val.assertGroups.forEach((assertGroup) => {
        activeKey.push(assertGroup.key)
      })
      cardList.value = JSON.parse(JSON.stringify(val))
    }
  }
)

const onSearch = () => {
  const materials = JSON.parse(JSON.stringify(props.materials)) as Material
  cardList.value = materials
  const value = search.value
  if (value) {
    activeKey.splice(0, activeKey.length)
    materials.assertGroups = materials.assertGroups.filter((assertGroup) => {
      assertGroup.asserts = assertGroup.asserts.filter((assert) => {
        return assert.name.includes(value)
      })
      if (assertGroup.asserts.length) {
        activeKey.push(assertGroup.key)
        return true
      }
      return false
    })
  } else {
    activeKey.splice(0, activeKey.length)
    materials.assertGroups.forEach((assertGroup) => {
      activeKey.push(assertGroup.key)
    })
  }
}
</script>

<style scoped lang="less">
.editor-antdv {
  width: 100%;
  height: 100%;
  min-width: 280px;
  overflow: hidden;
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
