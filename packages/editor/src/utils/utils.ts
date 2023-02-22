const isObject = (val: any) => {
  return typeof val === 'object' && val !== null
}

const isEqual = (obj1: object & { [key in string]: any }, obj2: object & { [key in string]: any }, keys?: string[]) => {
  const len1 = Object.keys(obj1)
  const len2 = Object.keys(obj2)
  const kesArr = keys ? keys : len1
  if (!keys && len1.length !== len2.length) return false
  for (const key of kesArr) {
    if (isObject(obj1[key]) && isObject(obj2[key])) {
      if (obj1[key] instanceof DOMRect) {
        for (const ps in obj1[key]) {
          if (obj1[key][ps] !== obj2[key][ps]) {
            return false
          }
        }
      } else if (!isEqual(obj1[key], obj2[key])) {
        return false
      }
    } else {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    }
  }
  return true
}

export { isObject, isEqual }
