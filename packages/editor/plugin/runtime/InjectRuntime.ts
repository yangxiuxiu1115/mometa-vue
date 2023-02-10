import { load } from 'cheerio'

import { resolve } from './const'
const src = '../../__mometa/runtime/index.mjs'

const InjectRuntime = (html: string) => {
  const $ = load(html)
  $(`<script type="module" src="/@fs/${resolve(src)}"></script>`).insertBefore('script[type="module"]')
  return $.html()
}

export default InjectRuntime
