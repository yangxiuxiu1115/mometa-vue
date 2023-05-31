import { watch, ref, shallowRef } from 'vue'
import type { Loc } from '@mometa-vue/fs-handle'

import type { NodeStyle } from '@shared/types'
import { useInject } from '@/hooks'
import { http } from '@/utils'
export const useSelectNode = () => {
  const [selectNode] = useInject<NodeStyle>('selectNode')
  const code = ref('')
  const scriptCode = ref('')
  const range = shallowRef<{
    start: Loc
    end: Loc
  }>()
  const filename = ref('')

  watch(selectNode, async (val, _, onCleanUp) => {
    if (val) {
      const { start, end, filename: file } = val.mometa
      range.value = {
        start,
        end
      }
      filename.value = file
      const { httpRequest, abort } = http('nodeopt', {
        type: 4,
        filename: filename.value,
        data: range.value
      })
      onCleanUp(() => {
        try {
          abort()
        } catch (error) {}
      })
      const data = JSON.parse(await (await httpRequest).text())
      code.value = data.template
      scriptCode.value = data.script
    } else {
      code.value = ''
      scriptCode.value = ''
    }
  })

  return {
    code,
    scriptCode,
    filename,
    range,
    selectNode
  }
}
