import type { Connect } from 'vite'

const delNode: Connect.NextHandleFunction = (req, res, next) => {
  next()
}

export default delNode
