import { parse as moduleParse, ExportSpecifier } from 'es-module-lexer'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import './useWorker'

const componentCache = new Map<string, monaco.languages.ProviderResult<monaco.languages.Hover>>()

monaco.languages.registerCompletionItemProvider('html', {
  provideCompletionItems: function (model, position) {
    const word = model.getWordUntilPosition(position)
    const range = {
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: word.startColumn,
      endColumn: word.endColumn
    }
    return {
      suggestions: []
    }
  }
})

class AutoImportTypings {
  parse(source: string) {
    const imports = this.transformImportVar(source)
  }
  private transformImportVar(source: string) {
    if (!source) {
      return []
    }
    const exportStr = source.replaceAll('import', 'export').replace(/\s+as\s+\w+,?/g, ',')
    let importVariabls: readonly ExportSpecifier[] = []
    try {
      importVariabls = moduleParse(exportStr)[1]
    } catch {}

    return importVariabls
  }
}

const autoImport = new AutoImportTypings()

export default autoImport
