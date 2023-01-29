import type { Connect } from 'vite'
import { Preload } from '../types'
import { NODEOPTION } from '../const'

const insertNode: Connect.NextHandleFunction = (req: any, res, next) => {
  const params = req.body as Preload
  if (params.type === NODEOPTION.INSERT) {
    console.log(params)
  }
  next()
}

export default insertNode
