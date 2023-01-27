import { writeFileSync } from 'node:fs'
import path from 'node:path'

import axios from 'axios'
import { load } from 'cheerio'

const resolve = (...paths: string[]) => path.resolve(__dirname, ...paths)
const BASEURL = 'https://element-plus.gitee.io/zh-CN/component'

;(async function () {
  const req = await axios.get(`${BASEURL}/button.html`)
  let $ = load(req.data)
  const group: any[] = []
  const apiGroup: string[] = []
  $('.sidebar-groups .sidebar-group').each((index, e) => {
    const groupTitle = $(e).find('.sidebar-group__title').text()
    const assets: any[] = []

    group.push({
      groupTitle,
      assets
    })

    $(e)
      .find('a.link')
      .each((i, component) => {
        const text = $(component).text()
        assets.push(text)
        apiGroup.push(text.split(' ').slice(0, -1).join('-').toLowerCase())
      })
  })

  writeFileSync(resolve('./asserts.json'), JSON.stringify(group))

  const apiUrl = (api: string) => {
    return `${BASEURL}/${api}`
  }

  const apiAsserts: any[] = []
  for (const api of apiGroup) {
    console.log('====================================')
    console.log(`正在获取${api}属性设置信息`)
    console.log('====================================')
    try {
      if (api === 'icon') continue
      const res = await axios.get(apiUrl(api))
      $ = load(res.data)
      const apiAssert: any = { name: api, assert: {} }
      $('div.vp-table').each((_, api) => {
        const id = $(api).prev().attr('id')!
        const assert: any[] = []
        apiAssert.assert[id] = assert
        const table = $(api)
        const thead: string[] = []
        table.find('table thead tr th').each((_, th) => {
          thead.push($(th).text())
        })
        table.find('table tbody tr').each((ind, tr) => {
          const temp: any = {}
          $(tr)
            .find('td')
            .each((index, td) => {
              temp[thead[index]] = $(td).text()
            })
          assert.push(temp)
        })
      })
      apiAsserts.push(apiAssert)
    } catch {}
  }
  writeFileSync(resolve('./apiAsserts.json'), JSON.stringify(apiAsserts))
})()
