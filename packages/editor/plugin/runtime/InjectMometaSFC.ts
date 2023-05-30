import { parse } from '@vue/compiler-sfc'

import type { Mometa } from 'shared/types'
import { scriptCache } from './const'
import { toString, existComp, getCustomComponent, formatProps } from '../utils'

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
    const began = start.column + node.tag.length
    const mometa: Mometa = {
      start: node.loc.start,
      end: node.loc.end,
      isSelfClosing: node.isSelfClosing,
      filename,
      isComponent: node.tag.startsWith('a-'),
      slotName,
      name: node.tag,
      began,
      props: formatProps(node)
    }
    
    const line = content[start.line - 1]

    // q: tagType的值有哪些?
    // a: 1: element, 2: component, 3: slot
    if (!existComp(node.tag, customCom)) {
      content[start.line - 1] = line.slice(0, began) + ` :mometa="${toString(mometa)}" ` + line.slice(began)
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
