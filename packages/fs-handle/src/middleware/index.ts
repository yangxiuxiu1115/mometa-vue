import bodyparser from 'body-parser'
import delMiddleware from './del'
import moveMiddleware from './move'
import replaceMiddleware from './replace'
import insertMiddleware from './insert'

export const middlewares = [bodyparser.json(), delMiddleware, moveMiddleware, replaceMiddleware, insertMiddleware]
