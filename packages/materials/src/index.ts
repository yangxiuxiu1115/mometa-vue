import type { Connect } from 'vite'
import antdV from './antdV'

const materialMiddleware: Connect.NextHandleFunction = (req, res, next) => {
  if (req.url === '/material' && req.method?.toLowerCase() === 'get') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.end(antdV)
  } else {
    next()
  }
}

export * from './type'
export * from './utils'
export default materialMiddleware
