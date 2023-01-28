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

export default InjectMometaElement
