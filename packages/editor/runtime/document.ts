const originCreateElement = document.createElement

document.createElement = function (tagName: string, options?: ElementCreationOptions) {
  const el = originCreateElement.call(this, tagName, options)

  Object.defineProperty(el, 'mometa', {
    enumerable: true,
    writable: true
  })

  return el
}

export {}
