import bodyparser from 'body-parser'
import cors from './cors'
import delMiddleware from './del'
import moveMiddleware from './move'
import replaceMiddleware from './replace'
import insertMiddleware from './insert'
import changeMiddleware from './change'

export const middlewares = [
  bodyparser.json(),
  cors,
  changeMiddleware,
  delMiddleware,
  moveMiddleware,
  replaceMiddleware,
  insertMiddleware
]
