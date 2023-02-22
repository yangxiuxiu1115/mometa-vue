const getValidMometaPath = (el: any) => {
  const path = []
  while (el && el !== document) {
    const mometa = el.__mometa
    if (mometa) {
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

window.addEventListener('click', () => {
  window.parent.postMessage(
    {
      action: 'selected'
    },
    '*'
  )
})

export {}
