<template>
  <div v-if="isEdit" class="editor-stage__prompt">
    <div class="hover-node"></div>
    <div class="selected-node"></div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, watch } from 'vue'

import { useEvent, useInject } from '@/hooks'
import type { Message, MometaPath, MometaMessage } from '@shared/types'

const [isEdit] = useInject<boolean>('isEdit')

const mometaPath = shallowRef<MometaPath[]>([])
watch(mometaPath, (val) => {
  console.log(val)
})
const recieveMessage = (ev: MessageEvent<Message>) => {
  let origin: string
  if (import.meta.env.DEV) {
    origin = 'http://127.0.0.1:5174'
  } else {
    origin = '/'
  }
  if (ev.origin === origin) {
    if (ev.data.action === 'mometa') {
      const data = ev.data as MometaMessage
      mometaPath.value = data.mometa
    }
    if (ev.data.action === 'selected') {
      console.log('selected')
    }
  }
}
useEvent('message', recieveMessage)
</script>

<style scoped lang="less"></style>
