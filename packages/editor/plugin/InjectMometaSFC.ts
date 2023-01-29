import { parse, compileScript } from '@vue/compiler-sfc'
import type { SFCDescriptor } from '@vue/compiler-sfc'

const toString = (obj: any) => {
  if (typeof obj !== 'object') {
    if (typeof obj === 'string') {
      return `'${obj}'`
    }
    return obj
  }
  const keys = Object.keys(obj)
  let res = `{`
  res += keys
    .filter((key) => obj[key] !== undefined && obj[key] !== null)
    .map((key) => {
      return ` ${key}: ${toString(obj[key])}`
    })
    .join(',')
  res += `}`

  return res
}

const existComp = (str: string, customCom: Set<string>) => {
  if (customCom.has(str)) return true
  const name = str
    .split('-')
    .map((item) => item.slice(0, 1).toUpperCase() + item.slice(1))
    .join('')
  return customCom.has(name)
}

const getCustomComponent = (descriptor: SFCDescriptor, customCom: Set<string>) => {
  if (!descriptor.scriptSetup && !descriptor.script) return
  const a = compileScript(descriptor, {
    id: 'mometa'
  })
  const imports = a.imports
  for (const key in imports) {
    const source = imports[key].source
    if (/\.vue$/.test(source)) {
      customCom.add(key)
    }
  }
}

const transformContent = (source: string, ast: any, customCom: Set<string>, filename: string) => {
  const content = source.split('\n')
  const DFS = (node: any, slotName?: string) => {
    if (node.type === 1) {
      if (node.tagType === 3) {
        slotName = node.props.find((prop: any) => prop.name === 'slot').arg.content
      }

      for (let i = node.children.length - 1; i >= 0; i--) {
        DFS(node.children[i], slotName)
      }

      if (existComp(node.tag, customCom) || node.tagType === 2 || node.tagType === 3) return

      const start = node.loc.start
      const mometa = {
        start: node.loc.start,
        end: node.loc.end,
        isSelfClosing: node.isSelfClosing,
        filename,
        isComponent: node.tag.startsWith('a-'),
        slotName
      }

      const begain = start.column + node.tag.length
      const line = content[start.line - 1]
      content[start.line - 1] = line.slice(0, begain) + ` :mometa="${toString(mometa)}"` + line.slice(begain)
    }
  }

  for (let i = ast.children.length - 1; i >= 0; i--) {
    DFS(ast.children[i])
  }

  return content.join('\n')
}

const InjectMometaSFC = (source: string, filename = 'app'): string => {
  const descriptor = parse(source).descriptor
  const ast = descriptor.template?.ast!
  const customCom = new Set<string>()
  getCustomComponent(descriptor, customCom)

  return transformContent(source, ast, customCom, filename)
}

export default InjectMometaSFC
