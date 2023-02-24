import type { Connect } from 'vite'
import { Preload } from '../types'
import { NODEOPTION } from '../const'
import changeNode from '../common/changeNode'

const changeMiddleware: Connect.NextHandleFunction = (req: any, res, next) => {
  const params = req.body as Preload
  if (params.type === NODEOPTION.CHANGE) {
    changeNode(params)
    return
  }
  next()
}

export default changeMiddleware
