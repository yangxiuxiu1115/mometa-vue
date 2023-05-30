import { describe, expect, it } from 'vitest'
import injectMometaSFC from '../runtime/InjectMometaSFC'
import { common, component, VFor, uicomponent, slotcomponent } from './case'

describe('test injectMometaSFC', () => {
  it('common element', () => {
    const commonSFC = injectMometaSFC(common)
    expect(commonSFC).toMatchSnapshot()
  })

  it('component element', () => {
    const componentSFC = injectMometaSFC(component)
    expect(componentSFC).toMatchSnapshot()
  })

  it('VFor element', () => {
    const VForSFC = injectMometaSFC(VFor)
    expect(VForSFC).toMatchSnapshot()
  })

  it('ui element', () => {
    const uicomponentSFC = injectMometaSFC(uicomponent)
    expect(uicomponentSFC).toMatchSnapshot()
  })

  it('slot element', () => {
    const slotcomponentSFC = injectMometaSFC(slotcomponent)
    expect(slotcomponentSFC).toMatchSnapshot()
  })
})
