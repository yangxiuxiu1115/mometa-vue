import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const MOMETAURL = '/__mometa'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
export const resolve = (...paths: string[]) => path.resolve(__dirname, ...paths)
