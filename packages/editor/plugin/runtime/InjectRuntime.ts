import { load } from 'cheerio'

const src = '/__mometa/runtime/index.mjs'

const InjectRuntime = (html: string) => {
  const $ = load(html)
  $(`<script type="module" src="${src}"></script>`).insertBefore('script[type="module"]')
  return $.html()
}

export default InjectRuntime
