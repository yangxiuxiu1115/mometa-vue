import { parse } from '@babel/parser'
import types from '@babel/types'
import traverse from '@babel/traverse'
import generate from '@babel/generator'
import type { Identifier, ArrowFunctionExpression, BlockStatement, VariableDeclarator } from '@babel/types'
import type { NodePath } from '@babel/traverse'

const InjectMometaElement = (source: string) => {
  const ast = parse(source, { sourceType: 'module' })

  const expression = types.ifStatement(
    types.binaryExpression('===', types.identifier('key'), types.stringLiteral('mometa')),
    types.blockStatement([
      types.expressionStatement(
        types.assignmentExpression(
          '=',
          types.memberExpression(types.identifier('el'), types.identifier('__mometa')),
          types.identifier('nextValue')
        )
      ),
      types.expressionStatement(types.identifier('return'))
    ])
  )
  ;(traverse as any).default(ast, {
    VariableDeclarator(path: NodePath<VariableDeclarator>) {
      const id = path.node.id as Identifier
      if (id.name === 'patchProp') {
        const init = path.get('init').node as ArrowFunctionExpression
        const node = init.body as BlockStatement
        node.body.unshift(expression)
      }
    }
  })
  return (generate as any).default(ast).code
}

const InjectMometaElementV2 = (source: string) => {
  return source.replace(
    `var patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};`,
    `var patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "mometa") {
    el.__mometa = nextValue;
    return
  }
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};`
  )
}
export default InjectMometaElement
export { InjectMometaElementV2 }
