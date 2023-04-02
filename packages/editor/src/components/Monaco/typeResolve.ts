import { parse as moduleParse, ExportSpecifier } from 'es-module-lexer'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import './useWorker'

const componentCache = new Map<string, monaco.languages.ProviderResult<monaco.languages.Hover>>()

monaco.languages.registerHoverProvider('html', {
  provideHover: function (model, position) {
    const word = model.getWordAtPosition(position)
    if (word) {
      if (componentCache.has(word.word)) {
        return componentCache.get(word.word)
      }

      return {
        range: new monaco.Range(position.lineNumber, word.startColumn, position.lineNumber, word.endColumn),
        contents: [
          {
            value: 'Hovered word: ' + word.word
          },
          {
            value: 'desc'
          }
        ]
      }
    }
  }
})

class AutoImportTypings {
  parse(source: string) {
    const imports = this.transformImportVar(source)
    console.log(imports)
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
