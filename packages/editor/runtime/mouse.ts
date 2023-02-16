const getValidMometaPath = (el: any) => {
  const path = []
  while (el && el !== document) {
    const mometa = el.__mometa
    if (mometa) {
      path.push(mometa)
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

export {}
