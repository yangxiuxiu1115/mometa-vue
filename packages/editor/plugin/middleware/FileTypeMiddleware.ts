import { readFileSync } from 'node:fs'
import { MOMETAURL, resolve } from './const'
import type { Connect } from 'vite'

const fileTypes: {
  [key: string]: string
} = {
  'favicon\.png$': 'image/png'
}

const FileTypeMiddleware: Connect.NextHandleFunction = (req, res, next) => {
  const assets = resolve(`../..${req.url}`)
  for (const fileType in fileTypes) {
    const reg = new RegExp(fileType)
    if (reg.test(assets)) {
      res.setHeader('Content-Type', fileTypes[fileType])
      const file = readFileSync(assets)
      res.end(file)
      return
    }
  }
  next()
}

export default FileTypeMiddleware
