const origin = import.meta.env.DEV ? `http://127.0.0.1:5174` : ''

type MethodType = 'post' | 'get' | 'put' | 'delete' | 'patch'

const http = (url: string, body: any, method: MethodType = 'post') => {
  const { signal, abort } = new AbortController()
  const httpRequest = fetch(`${origin}/${url}`, {
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
