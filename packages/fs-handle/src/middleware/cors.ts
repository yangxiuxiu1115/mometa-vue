import type { Connect } from 'vite'

const cors: Connect.NextHandleFunction = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  next()
}

export default cors
