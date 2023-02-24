import MometaMiddleware from './MometaMiddleware'
import FileTypeMiddleware from './FileTypeMiddleware'
import FSHandleMiddleware from '@mometa-vue/fs-handle'

const middlewares = [MometaMiddleware, FSHandleMiddleware]

export default middlewares
