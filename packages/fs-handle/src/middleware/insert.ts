import type { Connect } from 'vite'
import { Preload } from '../types'
import { NODEOPTION } from '../const'
import insertNode from '../common/insertNode'

const insertMiddleware: Connect.NextHandleFunction = (req: any, res, next) => {
  const params = req.body as Preload
  if (params.type === NODEOPTION.INSERT) {
    insertNode(params)
    res.end('插入成功')
    return
  }
  next()
}

export default insertMiddleware
