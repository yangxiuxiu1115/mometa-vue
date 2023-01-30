import type { Connect } from 'vite'
import { middlewares } from './src/index'

const nodeOptMiddleware: Connect.NextHandleFunction = (req, res, next) => {
  if (req.url === '/nodeopt') {
    let i = -1
    const dispatch: Connect.NextFunction = async (index: number) => {
      if (i >= index) console.warn('请勿重复调用next')
      i = index
      const fn = middlewares[index]
      fn && fn(req, res, () => dispatch(++index))
    }
    dispatch(0)
  } else {
    next()
  }
}

export default nodeOptMiddleware
