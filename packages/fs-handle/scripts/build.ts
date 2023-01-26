import { execSync } from 'node:child_process'

const commands = ['pnpm exec tsup ./index.ts --dts --clean --external vite --format cjs,esm -d dist']

for (const command of commands) {
  execSync(command, { stdio: 'inherit' })
}
