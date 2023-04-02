<template>
  <div ref="monacoRef" class="monaco-editor"></div>
</template>

<script setup lang="ts">
import { shallowRef, watchEffect, watch } from 'vue'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import autoImport from './typeResolve'
const props = withDefaults(
  defineProps<{
    language?: 'typescript' | 'html' | 'css'
    readonly?: boolean
    onChange?: (value: string | undefined) => void
    value: string
    content: string
  }>(),
  {
    language: 'html',
    readonly: false,
    onChange: undefined
  }
)

const monacoRef = shallowRef<HTMLElement>()
const editorRef = shallowRef<monaco.editor.IStandaloneCodeEditor | null>()
const subscriptionRef = shallowRef<monaco.IDisposable | undefined>(undefined)
const colorMode = shallowRef<'dark' | 'light'>('dark')

watchEffect(() => {
  subscriptionRef.value?.dispose()
  if (props.onChange) {
    subscriptionRef.value = editorRef.value?.onDidChangeModelContent(() => {
      props.onChange!(editorRef.value?.getValue())
    })
  }
})
watch(
  () => [props.value, props.language],
  (newValue) => {
    const { readonly, content } = props
    const [value, language] = newValue
    if (editorRef.value) {
      editorRef.value.setValue(value)
      autoImport.parse(content)
      return
    }
    editorRef.value = monaco.editor.create(monacoRef.value!, {
      language,
      minimap: {
        enabled: false
      },
      readOnly: readonly,
      automaticLayout: true,
      scrollbar: {
        verticalScrollbarSize: 6
      },
      overviewRulerLanes: 0,
      lineNumbersMinChars: 4,
      fontSize: 14,
      theme: colorMode.value === 'dark' ? 'vs-dark' : 'vs',
      scrollBeyondLastLine: false,
      value
    })
  }
)
watchEffect(() => {
  if (editorRef.value) {
    editorRef.value.updateOptions({
      theme: colorMode.value === 'dark' ? 'vs-dark' : 'vs',
      readOnly: props.readonly
    })
  }
})
</script>

<style scoped lang="less">
.monaco-editor {
  height: 100%;
}
</style>
