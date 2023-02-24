import type { Connect } from 'vite'
import delNode from '../common/delNode'
import { NODEOPTION } from '../const'
import { Preload } from '../types'

const delMiddleware: Connect.NextHandleFunction = (req: any, res, next) => {
  const params = req.body as Preload
  if (params.type === NODEOPTION.DELETE) {
    delNode(params)
    return
  }
  next()
}

export default delMiddleware
