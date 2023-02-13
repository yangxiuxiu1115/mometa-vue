window.addEventListener('hashchange', () => {
  const action = {
    type: 'hash',
    url: window.location.hash
  }
  window.parent.postMessage(action, '*')
})

const __pushState = history.pushState
history.pushState = function (data: any, unused: string, url?: string | URL | null) {
  const action = {
    type: 'history',
    action: 'push',
    url: data.current,
    data
  }
  window.parent.postMessage(action, '*')
  return __pushState.apply(this, [data, unused, url])
}

const __replaceState = history.replaceState
history.replaceState = function (data: any, unused: string, url?: string | URL | null) {
  const action = {
    type: 'history',
    action: 'replace',
    url: data.current,
    data
  }
  window.parent.postMessage(action, '*')
  return __replaceState.apply(this, [data, unused, url])
}

export {}
