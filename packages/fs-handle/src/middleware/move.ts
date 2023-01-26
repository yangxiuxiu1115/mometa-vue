import type { Connect } from 'vite'

const moveNode: Connect.NextHandleFunction = (req, res, next) => {
  next()
}

export default moveNode
