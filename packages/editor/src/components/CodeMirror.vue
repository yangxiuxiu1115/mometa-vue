<template>
  <div class="coder-mirror">
    <Codemirror
      v-model="codes"
      :style="{ height: '400px' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="[html()]"
      @blur="onBlur"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { html } from '@codemirror/lang-html'
import type { Loc } from '@mometa-vue/fs-handle'
import { http } from '@/utils'

const props = defineProps<{
  code: string
  range?: { start: Loc; end: Loc }
  filename: string
}>()
const emits = defineEmits(['update:code'])

const codes = ref(props.code || '')
watch(
  () => props.code,
  (val) => {
    codes.value = val
  }
)

const onBlur = () => {
  const { code, range, filename } = props
  if (codes.value !== code && range) {
    emits('update:code', codes.value)
    http('nodeopt', {
      type: 3,
      filename,
      data: {
        code: codes.value,
        ...range
      }
    })
  }
}
</script>

<style scoped lang="less">
.coder-mirror {
  padding: 0 10px;
}
</style>
