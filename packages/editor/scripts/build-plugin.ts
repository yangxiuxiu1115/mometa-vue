import { execSync } from 'node:child_process'
import { TSBuild } from './utils'

const commands = [TSBuild('./plugin/index.ts', 'plugin'), TSBuild('./runtime/index.ts', 'runtime')]

for (const command of commands) {
  execSync(command, { stdio: 'inherit' })
}
