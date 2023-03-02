import MometaMiddleware from './MometaMiddleware'
import FileTypeMiddleware from './FileTypeMiddleware'
import FSHandleMiddleware from '@mometa-vue/fs-handle'
import materialMiddleware from '@mometa-vue/materials'

const middlewares = [MometaMiddleware, FSHandleMiddleware, materialMiddleware]

export default middlewares
