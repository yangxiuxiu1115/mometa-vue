import type { Connect } from 'vite'

const insertNode: Connect.NextHandleFunction = (req, res, next) => {
  next()
}

export default insertNode
