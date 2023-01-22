import { readFileSync } from 'node:fs'
import path from 'node:path'
import type { Connect } from 'vite'

const MometaMiddleware: Connect.NextHandleFunction = (req, res, next) => {
  const dist = path.join(__dirname, '../dist')
  if (req.url === '/__mometa') {
    const mometa = readFileSync(path.join(__dirname, '../dist/index.html'))
    res.end(mometa)
    return
  }
  try {
    const assets = `${dist}${req.url}`
    const file = readFileSync(assets)
    if (/\.svg$/.test(assets)) {
      res.setHeader('Content-Type', 'image/svg+xml')
    }
    if (/\.js$/.test(assets)) {
      res.setHeader('Content-Type', 'application/javascript')
    }
    if (/\.css$/.test(assets)) {
      res.setHeader('Content-Type', 'text/css')
    }
    res.end(file)
    return
  } catch (error) {}
  next()
}

export default MometaMiddleware
