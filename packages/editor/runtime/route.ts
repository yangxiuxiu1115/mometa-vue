import { HashMessage, HistoryMessage } from 'shared/types'

window.addEventListener('hashchange', () => {
  const action: HashMessage = {
    action: 'hash',
    url: window.location.hash
  }
  window.parent.postMessage(action, '*')
})

const __pushState = history.pushState
history.pushState = function (data: any, unused: string, url?: string | URL | null) {
  const action: HistoryMessage = {
    type: 'push',
    action: 'history',
    url: data.current,
    data
  }
  window.parent.postMessage(action, '*')
  return __pushState.apply(this, [data, unused, url])
}

const __replaceState = history.replaceState
history.replaceState = function (data: any, unused: string, url?: string | URL | null) {
  const action: HistoryMessage = {
    type: 'replace',
    action: 'history',
    url: data.current,
    data
  }
  window.parent.postMessage(action, '*')
  return __replaceState.apply(this, [data, unused, url])
}

window.addEventListener('message', (ev) => {
  const data = ev.data
  if (data === 'reload') {
    window.location.reload()
  }
})

export {}
