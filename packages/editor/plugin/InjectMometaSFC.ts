import { parse } from '@vue/compiler-sfc'

const toString = (obj: any) => {
  if (typeof obj !== 'object') return obj
  const keys = Object.keys(obj)
  let res = '{'
  res += keys
    .map((key) => {
      return ` ${key}: ${toString(obj[key])}`
    })
    .join(',')
  res += '}'

  return res
}

const InjectMometaSFC = (source: string): string => {
  const descriptor = parse(source).descriptor
  const ast = descriptor.template?.ast!
  const content = source.split('\n')
  const DFS = (node: any) => {
    if (node.type === 1 && !node.tagType) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        DFS(node.children[i])
      }

      const start = node.loc.start

      const mometa = {
        start: node.loc.start,
        end: node.loc.end,
        isSelfClosing: node.isSelfClosing
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

export default InjectMometaSFC
