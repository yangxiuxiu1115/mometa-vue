import type { Material, AssertGroup, Assert } from './type'

export const material = (name: string, key: string, assertGroups: AssertGroup[]): Material => {
  return {
    name,
    key,
    assertGroups
  }
}

export const assertGroup = (name: string, key: string, asserts: Assert[]): AssertGroup => {
  return {
    name,
    key,
    asserts
  }
}
