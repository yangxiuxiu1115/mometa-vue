import { describe, expect, it } from 'vitest'
import injectMometaSFC from '../InjectMometaSFC'
import { common, commonTest, component, componentTest, VFor, VForTest } from './case'

describe('test injectMometaSFC', () => {
  it('common element', () => {
    const commonSFC = injectMometaSFC(common)
    expect(commonSFC).toBe(commonTest)
  })

  it('component element', () => {
    const componentSFC = injectMometaSFC(component)
    expect(componentSFC).toBe(componentTest)
  })

  it('VFor element', () => {
    const VForSFC = injectMometaSFC(VFor)
    console.log(VForSFC)
    expect(VForSFC).toBe(VForTest)
  })
})
