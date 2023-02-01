import prettier from 'prettier/standalone'
import parserHTML from 'prettier/parser-html'
import { Loc } from '../types'

export default class LineContent {
  content: string[]
  constructor(content: string) {
    this.content = content.trim().split('\n')
  }

  getRangeCode(start: Loc, end: Loc) {
    const { line: startLine, column: startColumn } = start
    const { line: endLine, column: endColumn } = end

    if (startLine === endLine) {
      return this.content[startLine - 1].slice(startColumn, endColumn)
    }

    const code = []
    let i = startLine
    while (i <= endLine) {
      if (i === startLine) {
        code.push(this.content[i - 1].slice(startColumn))
      } else if (i === endLine) {
        code.push(this.content[i - 1].slice(0, endColumn))
      } else {
        code.push(this.content[i - 1])
      }
      i++
    }

    return code.join('\n')
  }

  insert(code: string, start: Loc) {
    const { line, column } = start
    const endContent = this.content[line - 1].slice(column)
    this.content[line - 1] = this.content[line - 1].slice(0, column)
    if (endContent.trim()) this.content.splice(line, 0, endContent)
    const lines = code.split('\n')
    this.content.splice(line, 0, ...lines)
    return lines.length + (endContent.trim() ? 1 : 0)
  }

  del(start: Loc, end: Loc) {
    const { line, column } = start
    const { line: endLine, column: endColumn } = end

    if (line === endLine) {
      this.content[endLine - 1] =
        this.content[endLine - 1].slice(0, column) + this.content[endLine - 1].slice(endColumn)
    } else {
      this.content[line - 1] = this.content[line - 1].slice(0, column)
      this.content[endLine - 1] = this.content[endLine - 1].slice(endColumn)
      this.content.splice(line, endLine - line - 1)
    }
  }

  replace(code: string, start: Loc, end: Loc) {
    this.del(start, end)
    this.insert(code, start)
  }

  toString() {
    try {
      return prettier.format(this.content.join('\n'), {
        parser: 'vue',
        plugins: [parserHTML],
        vueIndentScriptAndStyle: true
      })
    } catch (error) {
      return ''
    }
  }
}
