import bodyparser from 'body-parser'
import delNode from './del'
import moveNode from './move'
import replaceNode from './replace'
import insertNode from './insert'

export const middlewares = [bodyparser.json(), delNode, moveNode, replaceNode, insertNode]
