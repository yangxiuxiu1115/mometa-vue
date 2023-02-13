import path from 'path'
import chokidar from 'chokidar'
import { debounce } from 'perfect-debounce'
import { logger, run } from './utils'

const rebuildPlugin = async () => {
  const plugin = path.resolve(process.cwd(), 'packages/editor/plugin')
  const runtime = path.resolve(process.cwd(), 'packages/editor/runtime')

  const watcher = chokidar.watch([plugin, runtime], {
    persistent: true
  })

  const build = async () => {
    await run('pnpm run', ['build-plugin'])
  }

  const debounceBuilder = debounce(async () => build(), 2000)

  watcher.on('all', async () => {
    await debounceBuilder()
  })
}

async function devPlugin() {
  try {
    await rebuildPlugin()
    console.log(logger.success('监听plugin成功'))
  } catch (error) {
    logger.err((error as Error).toString())
    process.exit()
  }
}

devPlugin()
