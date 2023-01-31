import prettier from 'prettier/standalone'
import parserHTML from 'prettier/parser-html'
import { Loc } from '../types'

export default class LineContent {
  content: string[]
  constructor(content: string) {
    this.content = content.trim().split('\n')
  }

  insert(code: string, start: Loc) {
    const { line } = start
    const lines = code.split('\n')
    this.content.splice(line, 0, ...lines)
  }

  del(start: Loc, end: Loc) {
    const { line, column } = start
    const { line: endLine, column: endColumn } = end

    if (line === endLine) {
      this.content[endLine - 1] =
        this.content[endLine - 1].slice(0, column) + this.content[endLine - 1].slice(endColumn + 1)
    } else {
      this.content[line - 1] = this.content[line - 1].slice(0, column)
      this.content[endLine - 1] = this.content[endLine - 1].slice(endColumn + 1)
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
      return error
    }
  }
}
