import { execa, Options } from 'execa'
import pc from 'picocolors'

export const run = (bin: string, args: string[], options: Options = {}) => {
  return execa(bin, args, {
    stdio: 'inherit',
    ...options
  })
}

export const logger = {
  success(str: string) {
    console.log(pc.green(str))
  },
  err(err: string) {
    console.log(pc.red(err))
  }
}
