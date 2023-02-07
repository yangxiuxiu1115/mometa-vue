import { execSync } from 'node:child_process'

const build = (entry: string, target: string) => {
  return `pnpm exec tsup ${entry} --dts --clean --external vite --format cjs,esm -d __mometa/${target}`
}

const commands = [build('./plugin/index.ts', 'plugin'), build('./runtime/index.ts', 'runtime')]

for (const command of commands) {
  execSync(command, { stdio: 'inherit' })
}
