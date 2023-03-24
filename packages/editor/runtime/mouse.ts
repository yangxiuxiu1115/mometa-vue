const getValidMometaPath = (el: any) => {
  const path = []
  while (el && el !== document) {
    const mometa = el.__vnode?.__mometa
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
  console.log(mometa)
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

window.addEventListener('click', () => {
  window.parent.postMessage(
    {
      action: 'selected'
    },
    '*'
  )
})

export {}
