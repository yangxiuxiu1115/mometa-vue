import { readFileSync } from 'fs'
import type { ChangePreload } from '../types'
import LineContent from './lineContent'

const changeNode = (preload: ChangePreload) => {
  const {
    filename,
    data: { start, end }
  } = preload
  const content = readFileSync(filename, { encoding: 'utf-8' })
  const lineContent = new LineContent(content)
  return lineContent.getRangeCode(start, end)
}

export default changeNode
