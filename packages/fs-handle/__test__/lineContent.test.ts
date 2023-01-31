import { describe, expect, it } from 'vitest'
import LineContent from '../src/common/lineContent'
import { content, delContent, insertContent, replaceContent } from './case'

describe('test lineContent', () => {
  it('del node', () => {
    const lineContent = new LineContent(content)
    lineContent.del(
      {
        line: 7,
        column: 4,
        offset: 0
      },
      {
        line: 10,
        column: 8,
        offset: 0
      }
    )
    console.log(lineContent.toString())
    expect(lineContent.toString()).toBe(delContent)
  })

  it('insert node', () => {
    const lineContent = new LineContent(content)
    lineContent.insert(
      `<div>
      test insert
    </div>`,
      {
        line: 5,
        column: 4,
        offset: 0
      }
    )
    expect(lineContent.toString()).toBe(insertContent)
  })

  it('replace node', () => {
    const lineContent = new LineContent(content)
    lineContent.replace(
      `<div>
      test insert
    </div>`,
      {
        line: 9,
        column: 22,
        offset: 0
      },
      {
        line: 9,
        column: 38,
        offset: 0
      }
    )
    expect(lineContent.toString()).toBe(replaceContent)
  })
})
