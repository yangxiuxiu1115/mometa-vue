import { parse, compileScript } from '@vue/compiler-sfc'
import type { SFCDescriptor } from '@vue/compiler-sfc'
import type { Mometa } from 'shared/types'
import { scriptCache } from './const'

const toString = (obj: any) => {
  if (typeof obj !== 'object') {
    if (typeof obj === 'string') {
      if (obj.startsWith('$attrs')) return `${obj}`
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
  const DFS = (node: any, index: string, slotName?: string) => {
    if (node.tagType === 3) {
      slotName = node.props.find((prop: any) => prop.name === 'slot')?.arg.content
    }

    const validChildren = node.children.filter((child: any) => child.type === 1)
    for (let i = validChildren.length - 1; i >= 0; i--) {
      const validChild = validChildren[i]
      DFS(
        validChildren[i],
        `${validChild.tagType === 2 || validChild.tagType === 3 ? index : `${index}.${i}`}`,
        slotName
      )
    }

    if (node.tagType === 2 || node.tagType === 3) return

    const start = node.loc.start
    const mometa: Mometa = {
      start: node.loc.start,
      end: node.loc.end,
      isSelfClosing: node.isSelfClosing,
      filename,
      isComponent: node.tag.startsWith('a-'),
      slotName,
      name: node.tag,
      path: "$attrs['__mometa']"
    }

    const began = start.column + node.tag.length
    const line = content[start.line - 1]

    // q: tagType的值有哪些?
    // a: 1: element, 2: component, 3: slot
    if (existComp(node.tag, customCom)) {
      content[start.line - 1] = line.slice(0, began) + ` __mometa="${index}" ` + line.slice(began)
    } else {
      content[start.line - 1] =
        line.slice(0, began) + ` __mometa="${index}" :mometa="${toString(mometa)}" ` + line.slice(began)
    }
  }

  const validChildren = ast.children.filter((child: any) => child.type === 1)
  for (let i = validChildren.length - 1; i >= 0; i--) {
    DFS(validChildren[i], String(i))
  }

  return content.join('\n')
}

const InjectMometaSFC = (source: string, filename = 'app'): string => {
  const descriptor = parse(source).descriptor
  const ast = descriptor.template?.ast!
  scriptCache.set(filename, descriptor.scriptSetup?.content || descriptor.script?.content || '')
  const customCom = new Set<string>(['router-link', 'transition', 'keep-alive', 'router-view'])
  getCustomComponent(descriptor, customCom)

  return transformContent(source, ast, customCom, filename)
}

export default InjectMometaSFC
