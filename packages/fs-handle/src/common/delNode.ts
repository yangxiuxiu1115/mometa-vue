import { readFileSync, writeFileSync } from 'fs'
import type { DelPreload } from '../types'
import LineContent from './lineContent'

const delNode = (preload: DelPreload) => {
  const {
    filename,
    data: { start, end }
  } = preload
  const content = readFileSync(filename, { encoding: 'utf-8' })
  const lineContent = new LineContent(content)
  lineContent.del(start, end)
  writeFileSync(filename, lineContent.toString())
}

export default delNode
