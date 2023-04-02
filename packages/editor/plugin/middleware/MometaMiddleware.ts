import { readFileSync } from 'node:fs'
import { normalizePath } from 'vite'
import type { Connect } from 'vite'
import { MOMETAURL, resolve } from './const'
import { MOMETA_BASE_URL } from 'shared/const'
import { scriptCache } from '../runtime/const'

const MometaMiddleware: Connect.NextHandleFunction = (req, res, next) => {
  if (!(req as any).scriptCache) {
    ;(req as any).scriptCache = scriptCache
  }

  if (req.url === `${MOMETAURL}`) {
    const mometa = readFileSync(resolve(`../..${MOMETAURL}/editor/index.html`), { encoding: 'utf-8' })
    const realMometa = mometa.replaceAll(
      encodeURI(MOMETA_BASE_URL),
      normalizePath(`/@fs/${resolve('../../__mometa/editor')}`)
    )
    res.end(realMometa)
    return
  }
  next()
}

export default MometaMiddleware
