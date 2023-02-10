import { load } from 'cheerio'
import { normalizePath } from 'vite'

import { resolve } from './const'
const src = '../../__mometa/runtime/index.mjs'

const InjectRuntime = (html: string) => {
  const $ = load(html)
  $(`<script type="module" src="${normalizePath(`/@fs/${resolve(src)}`)}"></script>`).insertBefore(
    'script[type="module"]'
  )
  return $.html()
}

export default InjectRuntime
