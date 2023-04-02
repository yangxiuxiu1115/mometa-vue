import type { Connect } from 'vite'
import { Preload } from '../types'
import { NODEOPTION } from '../const'
import changeNode from '../common/changeNode'

const changeMiddleware: Connect.NextHandleFunction = (req: any, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  const params = req.body as Preload
  if (params.type === NODEOPTION.CHANGE) {
    res.end(changeNode(params, req))

    return
  }
  next()
}

export default changeMiddleware
