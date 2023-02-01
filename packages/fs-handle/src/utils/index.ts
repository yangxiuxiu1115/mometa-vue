import { Loc } from '../types'

export const isLeftGtRight = (left: Loc, right: Loc) => {
  if (left.line > right.line) {
    return true
  } else if (left.line < right.line) {
    return false
  } else {
    if (left.column >= right.column) {
      return true
    }
    return false
  }
}
