import { execSync } from 'node:child_process'

const commands = ['pnpm run build-editor', 'pnpm run build-plugin']

for (const command of commands) {
  execSync(command, { stdio: 'inherit' })
}
