<template>
  <div class="editor-attribute-event">
    <a-form name="editorAttributeForm" :model="attrs" @finish="onFinish">
      <a-space
        v-for="(attr, index) in attrs"
        :key="attr.name"
        style="display: flex; margin-bottom: 8px"
        align="baseline"
      >
        <a-form-item
          :name="[index, 'name']"
          :rules="{
            required: true,
            message: '缺少属性名'
          }"
        >
          <a-input v-model:value="attr.name" placeholder="属性名" />
        </a-form-item>
        <a-form-item
          :name="[index, 'value']"
          :rules="{
            required: true,
            message: '缺少属性值'
          }"
        >
          <a-input v-model:value="attr.value" placeholder="属性值" />
        </a-form-item>
        <a-form-item :name="[index, 'diractive']">
          <a-tooltip placement="bottom" title="双向绑定">
            <ApiOutlined v-if="!attr.diractive" style="cursor: pointer" @click="attr.diractive = 'bind'" />
            <ApiTwoTone v-else @click="attr.diractive = false" />
          </a-tooltip>
        </a-form-item>

        <MinusCircleOutlined @click="removeUser(attr)" />
      </a-space>
      <a-form-item>
        <a-button type="dashed" block @click="addUser">
          <PlusOutlined />
          添加属性
        </a-button>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">保存</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import { MinusCircleOutlined, PlusOutlined, ApiOutlined, ApiTwoTone } from '@ant-design/icons-vue'
import type { IProps, NodeStyle } from '@shared/types'
import { useInject } from '@/hooks'
import { Loc } from '@mometa-vue/fs-handle'
import { http } from '@/utils'
const [selectNode] = useInject<NodeStyle>('selectNode')
const attrs = ref<IProps[]>([])
watch(
  selectNode,
  (val) => {
    if (val) {
      attrs.value = val.mometa.props
    }
  },
  {
    immediate: true
  }
)

const removeUser = (attr: IProps) => {
  let index = attrs.value.indexOf(attr)
  if (index !== -1) {
    attrs.value.splice(index, 1)
  }
}
const addUser = () => {
  attrs.value.push({
    name: '',
    value: '',
    diractive: 'bind'
  })
}
const onFinish = (values: IProps[]) => {
  let code = `<${selectNode.value!.name}`
  for (const key in values) {
    const value = values[key]
    console.log(value.diractive)
    code += ` ${value.diractive === 'bind' ? ':' : ''}${value.name}="${value.value}"`
  }
  code += '>'
  console.log(code)
  const start = selectNode.value?.mometa.start!

  const end: Loc = {
    ...start,
    column: start.column + code.length + 1
  }
  console.log(start, end)
  http('nodeopt', {
    type: 3,
    filename: selectNode.value?.mometa.filename,
    data: {
      start,
      end,
      code
    }
  })

  // location.reload()
}
</script>

<style scoped lang="less"></style>
