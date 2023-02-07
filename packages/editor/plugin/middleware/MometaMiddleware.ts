import { readFileSync } from 'node:fs'
import { MOMETAURL, resolve } from './const'
import type { Connect } from 'vite'

const MometaMiddleware: Connect.NextHandleFunction = (req, res, next) => {
  if (req.url === `${MOMETAURL}`) {
    const mometa = readFileSync(resolve(`../..${MOMETAURL}/editor/index.html`))
    res.end(mometa)
    return
  }
  next()
}

export default MometaMiddleware
