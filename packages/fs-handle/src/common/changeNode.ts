import { readFileSync } from 'fs'
import type { ChangePreload } from '../types'
import LineContent from './lineContent'

const changeNode = (preload: ChangePreload, req: any) => {
  const {
    filename,
    data: { start, end }
  } = preload
  const content = readFileSync(filename, { encoding: 'utf-8' })
  const lineContent = new LineContent(content)
  return JSON.stringify({
    template: lineContent.getRangeCode(start, end),
    script: req.scriptCache.get(filename)
  })
}

export default changeNode
