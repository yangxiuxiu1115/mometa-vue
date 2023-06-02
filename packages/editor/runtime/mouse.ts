import { setSelectId } from "./utils"
import type { NodeStyle } from "@shared/types"

const getValidMometaPath = (el: any): NodeStyle[] => {
  const path = []
  while (el && el !== document) {
    const mometa = el.__mometa
    if (mometa) {
      const last = path[path.length - 1]
      if (mometa === last?.mometa) {
        path.pop()
      }
      path.push({
        mometa,
        rect: el.getBoundingClientRect(),
        name: mometa.name
      })
    }
    el = el.parentElement
  }

  return path
}

window.addEventListener('mouseover', (e) => {
  const el = e.target
  const mometa = getValidMometaPath(el)
  window.parent.postMessage(
    {
      action: 'mometa',
      mometa
    },
    '*'
  )
})

window.addEventListener('mouseout', (e: any) => {
  const toElement = e.toElement
  if (!toElement) {
    window.parent.postMessage(
      {
        action: 'mometa',
        mometa: []
      },
      '*'
    )
  }
})

window.addEventListener('click', (e) => {
  const el = e.target
  const mometa = getValidMometaPath(el)[0]
  setSelectId(mometa?.mometa.id!)
  window.parent.postMessage(
    {
      action: 'selected',
      mometa
    },
    '*'
  )
})

export {}
