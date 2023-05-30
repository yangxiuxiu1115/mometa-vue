<template>
  <div ref="monacoRef" class="monaco-editor"></div>
</template>

<script setup lang="ts">
import { shallowRef, watchEffect, watch } from 'vue'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import autoImport from './typeResolve'
import { debounce } from '@/utils'

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
    const change = debounce(() => props.onChange!(editorRef.value?.getValue()), 2000)
    subscriptionRef.value = editorRef.value?.onDidChangeModelContent(() => {
      change()
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
    ;(editorRef.value as any).onDropIntoEditor(
      ({ position, event }: { position: monaco.Position; event: DragEvent }) => {
        const monacoRef = editorRef.value!
        const text = event.dataTransfer?.getData('application/plain') || ''
        monacoRef.executeEdits('', [
          {
            range: new monaco.Range(position.lineNumber, position.column, position.lineNumber, position.column),
            text
          }
        ])

        setTimeout(() => {
          monacoRef.trigger(null, 'undo', null)
          monacoRef.trigger(null, 'editor.action.format', null)
        })
      }
    )
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
