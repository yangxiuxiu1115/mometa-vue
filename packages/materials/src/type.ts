export interface AssertImport {
  package: string
  mode: 'named' | 'namespace' | 'default'
  imported?: string
  local?: string
}

export interface Assert {
  name: string
  key: string
  cover: string
  homepage: string
  data: {
    code: string
    dependencies: AssertImport[]
  }
}

export interface AssertGroup {
  name: string
  key: string
  asserts: Assert[]
}

export interface Material {
  name: string
  key: string
  assertGroups: AssertGroup[]
}
