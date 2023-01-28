import path from 'node:path'
import { writeFileSync, readFileSync } from 'node:fs'
import { load } from 'cheerio'

import { material, assertGroup } from './src/index'
import { Assert, AssertGroup } from './src/type'
const resolve = (...paths: string[]) => path.resolve(__dirname, ...paths)

;(async function () {
  const htmlText = readFileSync(resolve('./overview.html'), { encoding: 'utf-8' })
  const $ = load(htmlText)
  const assertGroups: AssertGroup[] = []
  const mat = material('AntdV', 'AntdV', assertGroups)

  const components = $('.components-overview').filter((i) => !!i)
  components.each((_, component) => {
    const assertGroupTitle = $(component)
      .find('.components-overview-group-title .ant-space .ant-space-item:first-child')
      .text()
      .trim()

    const assert: Assert[] = []
    assertGroups.push(assertGroup(assertGroupTitle, assertGroupTitle, assert))

    $(component)
      .find('.ant-row .ant-col')
      .each((_, col) => {
        const [key, name] = $(col).find('.ant-card .components-overview-title').text().split(' ')
        const src = $(col).find('.ant-card .components-overview-img img').attr('src')!
        const homepage = $(col).find('a[href]').attr('href')
        assert.push({
          name,
          key,
          homepage: `https://www.antdv.com${homepage}`,
          cover: src,
          data: {
            code: `<$${key}$ />`,
            dependencies: {
              [key]: {
                package: 'AntdV',
                mode: 'default'
              }
            }
          }
        })
      })
  })

  writeFileSync(resolve('./AntdV.json'), JSON.stringify(mat, null, 2))
})()
