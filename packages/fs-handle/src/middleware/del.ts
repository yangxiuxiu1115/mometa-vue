import type { Connect } from 'vite'
import { NODEOPTION } from '../const'
import { Preload } from '../types'

const delMiddleware: Connect.NextHandleFunction = (req: any, res, next) => {
  const params = req.body as Preload
  if (params.type === NODEOPTION.DELETE) {
    console.log(params)
  }
  next()
}

export default delMiddleware
