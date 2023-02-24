import type { Connect } from 'vite'
import { Preload } from '../types'
import { NODEOPTION } from '../const'

const moveMiddleware: Connect.NextHandleFunction = (req: any, res, next) => {
  const params = req.body as Preload
  if (params.type === NODEOPTION.MOVE) {
    console.log(params)
    return
  }
  next()
}

export default moveMiddleware
