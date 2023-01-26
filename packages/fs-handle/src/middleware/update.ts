import type { Connect } from 'vite'

const updateNode: Connect.NextHandleFunction = (req, res, next) => {
  next()
}

export default updateNode
