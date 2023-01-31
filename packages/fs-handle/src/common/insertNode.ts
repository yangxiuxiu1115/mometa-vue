import { readFileSync, writeFileSync } from 'node:fs'
import type { InsertPreload } from '../types'
import LineContent from './lineContent'

const insertNode = (preload: InsertPreload) => {
  const {
    filename,
    data: { code, start }
  } = preload
  const content = readFileSync(filename, { encoding: 'utf-8' })
  const lineContent = new LineContent(content)
  lineContent.insert(code, start)
  writeFileSync(filename, lineContent.toString())
}

export default insertNode
