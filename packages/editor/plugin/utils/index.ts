import type { SFCDescriptor } from '@vue/compiler-sfc'
import { compileScript } from '@vue/compiler-sfc'

import { IProps } from '@shared/types'

const toString = (obj: any): string => {
  if (typeof obj !== 'object') {
    if (typeof obj === 'string') {
      if (obj.startsWith('$attrs')) return `${obj}`
      return `\`${obj.replaceAll(/\`/g, '\\`')}\``
    }
    return obj
  }
  if (Array.isArray(obj)) {
    return `[${obj.map((item) => toString(item)).join(',')}]`
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

const formatProps = (node: any): IProps[] => {
  const props = node.props
  // type: 6  name value.content  type 7 arg.content exp.content
  return props.map((prop: any) => {
    const { type, name, value, arg, exp } = prop
    if (type === 6) {
      return {
        diractive: false,
        name,
        value: value?.content
      }
    } else if (type === 7) {
      return {
        diractive: name,
        name: arg?.content,
        value: exp?.content
      }
    }
  })
}

export { toString, getCustomComponent, existComp, formatProps }
