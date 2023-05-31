import { originUrl } from "./const"

type MethodType = 'post' | 'get' | 'put' | 'delete' | 'patch'

const http = (url: string, body: any, method: MethodType = 'post') => {
  const { signal, abort } = new AbortController()
  const httpRequest = fetch(`${originUrl}/${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: method !== 'get' ? JSON.stringify(body) : undefined,
    signal
  })

  return {
    httpRequest,
    abort
  }
}

export { http }
