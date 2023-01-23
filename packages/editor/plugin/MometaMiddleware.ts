import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Connect } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
