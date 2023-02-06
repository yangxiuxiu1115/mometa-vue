import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Connect } from 'vite'

const MOMETAURL = '__mometa'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resolve = (...paths: string[]) => path.resolve(__dirname, ...paths)

const fileTypes: {
  [key: string]: string
} = {
  '.svg$': 'image/svg+xml',
  '.js$': 'application/javascript',
  '.css$': 'text/css'
}

const FileTypeMiddleware: Connect.NextHandleFunction = (req, res, next) => {
  if (req.url?.startsWith(`/${MOMETAURL}`)) {
    const assets = resolve(`../..${req.url}`)
    for (const fileType in fileTypes) {
      const reg = new RegExp(fileType)
      if (reg.test(assets)) {
        res.setHeader('Content-Type', fileTypes[fileType])
      }
    }
    const file = readFileSync(assets)
    res.end(file)
    return
  }
  next()
}

export default FileTypeMiddleware
