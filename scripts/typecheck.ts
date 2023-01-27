import { execSync } from 'child_process'
import packages from './packages'

for (const item of packages) {
  const command = `pnpm run -F @lowcode/${item} typecheck`
  execSync(command, { stdio: 'inherit' })
}
