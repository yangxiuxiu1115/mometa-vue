import { readFileSync, writeFileSync } from 'fs'
import { ReplacePreload } from '../types'
import LineContent from './lineContent'

const replaceNode = (preload: ReplacePreload) => {
  const {
    filename,
    data: { start, end, code }
  } = preload

  const content = readFileSync(filename, { encoding: 'utf-8' })
  const lineContent = new LineContent(content)
  lineContent.replace(code, start, end)

  writeFileSync(filename, lineContent.toString())
}

export default replaceNode
