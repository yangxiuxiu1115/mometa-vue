import type { Connect } from 'vite'
import { middlewares } from './src/index'

const nodeOptMiddleware: Connect.NextHandleFunction = (req, res, next) => {
  if (req.url === '/nodeopt' && req.method?.toLowerCase() === 'post') {
    let i = -1
    const dispatch: Connect.NextFunction = async (index: number) => {
      if (i >= index) console.warn('请勿重复调用next')
      i = index
      const fn = middlewares[index]
      if (!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(req, res, dispatch.bind(null, index + 1)))
      } catch (err) {
        return Promise.reject(err)
      }
    }
    dispatch(0)
  } else {
    next()
  }
}

export default nodeOptMiddleware
