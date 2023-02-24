import { NODEOPTION } from './const'

export interface Loc {
  column: number
  line: number
  offset: number
}

interface CommonPreload<T> {
  filename: string
  type: NODEOPTION
  data: T
}

export interface InsertPreload
  extends CommonPreload<{
    code: string
    start: Loc
  }> {
  type: NODEOPTION.INSERT
}

export interface DelPreload
  extends CommonPreload<{
    start: Loc
    end: Loc
  }> {
  type: NODEOPTION.DELETE
}

export interface ReplacePreload
  extends CommonPreload<{
    code: string
    start: Loc
    end: Loc
  }> {
  type: NODEOPTION.REPLACE
}

export interface MovePreload
  extends CommonPreload<{
    to: {
      code: string
      start: Loc
      filename: string
    }
    from: {
      start: Loc
      end: Loc
      filename: string
    }
  }> {
  type: NODEOPTION.MOVE
}

export interface ChangePreload
  extends CommonPreload<{
    start: Loc
    end: Loc
  }> {
  type: NODEOPTION.CHANGE
}

export type Preload = MovePreload | InsertPreload | ReplacePreload | DelPreload | ChangePreload
