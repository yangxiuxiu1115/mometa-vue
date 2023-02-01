import { readFileSync, writeFileSync } from 'fs'
import { MovePreload } from '../types'
import LineContent from './lineContent'
import { isLeftGtRight } from '../utils'

const moveNode = (preload: MovePreload) => {
  const {
    data: { from, to }
  } = preload
  const { start, end, filename } = from
  const fromContent = readFileSync(filename, { encoding: 'utf-8' })
  const fromLineContent = new LineContent(fromContent)
  if (filename === to.filename) {
    const offset = fromLineContent.insert(to.code, to.start)
    const delStart = start
    const delEnd = end
    if (isLeftGtRight(to.start, start)) {
      delStart.line += offset
      delEnd.line += offset
    }
    fromLineContent.del(delStart, delEnd)
    writeFileSync(filename, fromLineContent.toString())
  } else {
    const toContent = readFileSync(to.filename, { encoding: 'utf-8' })
    const toLineContent = new LineContent(toContent)
    toLineContent.insert(to.code, to.start)
    writeFileSync(to.filename, toLineContent.toString())

    fromLineContent.del(start, end)
    writeFileSync(filename, fromLineContent.toString())
  }
}

export default moveNode
