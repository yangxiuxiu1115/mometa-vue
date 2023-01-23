import { execSync } from 'node:child_process'

const commands = ['pnpm exec tsup ./plugin/index.ts --dts --clean --external vite --format cjs,esm -d vite-plugin']

for (const command of commands) {
  execSync(command)
}
