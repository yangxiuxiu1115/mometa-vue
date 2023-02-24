const origin = import.meta.env.DEV ? `http://127.0.0.1:5174` : ''
const http = (url: string, body: any) => {
  const { signal, abort } = new AbortController()
  const httpRequest = fetch(`${origin}/${url}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    signal
  })

  return {
    httpRequest,
    abort
  }
}

export { http }
