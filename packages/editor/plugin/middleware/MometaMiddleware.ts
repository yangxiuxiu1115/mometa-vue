import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Connect } from 'vite'

const MOMETAURL = '__mometa'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resolve = (...paths: string[]) => path.resolve(__dirname, ...paths)

const MometaMiddleware: Connect.NextHandleFunction = (req, res, next) => {
  if (req.url === `/${MOMETAURL}`) {
    const mometa = readFileSync(resolve(`../${MOMETAURL}/index.html`))
    res.end(mometa)
    return
  }
  next()
}

export default MometaMiddleware
