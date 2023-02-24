<template>
  <div class="coder-mirror">
    <Codemirror
      v-model="code"
      :style="{ height: '400px' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="[html()]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { html } from '@codemirror/lang-html'

const code = ref('')
</script>

<style scoped lang="less">
.coder-mirror {
  padding: 0 10px;
}
</style>
