import { Material } from './type'

export default {
  name: 'AntdV',
  key: 'AntdV',
  assertGroups: [
    {
      name: '通用',
      key: '通用',
      asserts: [
        {
          name: '按钮',
          key: 'Button',
          homepage: 'https://www.antdv.com/components/button-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg',
          data: {
            code: '<a-button type="primary">按钮</a-button>',
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        // {
        //   name: '图标',
        //   key: 'Icon',
        //   homepage: 'https://www.antdv.com/components/icon-cn',
        //   cover: 'https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg',
        //   data: {
        //     code: '<$Icon$ />',
        //     dependencies: {
        //       Icon: {
        //         package: 'AntdV',
        //         mode: 'default'
        //       }
        //     }
        //   }
        // },
        {
          name: '排版',
          key: 'Typography',
          homepage: 'https://www.antdv.com/components/typography-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/GOM1KQ24O/Typography.svg',
          data: {
            code: `<a-typography>
              <a-typography-title>标题</a-typography-title>
              <a-typography-paragraph>段落</a-typography-paragraph>
            </a-typography>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        }
      ]
    },
    {
      name: '布局',
      key: '布局',
      asserts: [
        {
          name: '分割线',
          key: 'Divider',
          homepage: 'https://www.antdv.com/components/divider-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/5swjECahe/Divider.svg',
          data: {
            code: `<a-divider type="vertical" />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '栅格',
          key: 'Grid',
          homepage: 'https://www.antdv.com/components/grid-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/5rWLU27so/Grid.svg',
          data: {
            code: `<a-row>
            <a-col :span="12">col-12</a-col>
            <a-col :span="12">col-12</a-col>
          </a-row>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '布局',
          key: 'Layout',
          homepage: 'https://www.antdv.com/components/layout-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg',
          data: {
            code: `<a-layout>
            <a-layout-header>Header</a-layout-header>
            <a-layout>
              <a-layout-sider>Sider</a-layout-sider>
              <a-layout-content>Content</a-layout-content>
            </a-layout>
            <a-layout-footer>Footer</a-layout-footer>
          </a-layout>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '间距',
          key: 'Space',
          homepage: 'https://www.antdv.com/components/space-cn',
          cover: 'https://gw.alipayobjects.com/zos/antfincdn/wc6%263gJ0Y8/Space.svg',
          data: {
            code: `<a-space>
            <a-button type="primary">Primary</a-button>
            <a-button>Default</a-button>
          </a-space>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        }
      ]
    },
    {
      name: '导航',
      key: '导航',
      asserts: [
        {
          name: '固钉',
          key: 'Affix',
          homepage: 'https://www.antdv.com/components/affix-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg',
          data: {
            code: `<a-affix :offset-top="120">
            <a-button type="primary">按钮</a-button>
          </a-affix>`,
            dependencies: {
              Affix: {
                package: 'AntdV',
                mode: 'default'
              }
            }
          }
        },
        {
          name: '面包屑',
          key: 'Breadcrumb',
          homepage: 'https://www.antdv.com/components/breadcrumb-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg',
          data: {
            code: `<a-breadcrumb>
            <a-breadcrumb-item>item1</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">item2</a></a-breadcrumb-item>
            <a-breadcrumb-item><a href="">item3</a></a-breadcrumb-item>
          </a-breadcrumb>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '下拉菜单',
          key: 'Dropdown',
          homepage: 'https://www.antdv.com/components/dropdown-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg',
          data: {
            code: `<a-dropdown>
            <a>
              Hover me
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a href="javascript:;">1st menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">2nd menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">3rd menu item</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '导航菜单',
          key: 'Menu',
          homepage: 'https://www.antdv.com/components/menu-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/3XZcjGpvK/Menu.svg',
          data: {
            code: `<a-menu v-model:selectedKeys="current" mode="horizontal">
            <a-menu-item key="mail">
              Navigation One
            </a-menu-item>
            <a-menu-item key="app" disabled>
              Navigation Two
            </a-menu-item>
            <a-sub-menu key="sub1">
              <template #title>Navigation Three - Submenu</template>
              <a-menu-item-group title="Item 1">
                <a-menu-item key="setting:1">Option 1</a-menu-item>
                <a-menu-item key="setting:2">Option 2</a-menu-item>
              </a-menu-item-group>
              <a-menu-item-group title="Item 2">
                <a-menu-item key="setting:3">Option 3</a-menu-item>
                <a-menu-item key="setting:4">Option 4</a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
            <a-menu-item key="alipay">
                Navigation Four - Link
            </a-menu-item>
          </a-menu>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '页头',
          key: 'PageHeader',
          homepage: 'https://www.antdv.com/components/page-header-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/6bKE0Cq0R/PageHeader.svg',
          data: {
            code: `<a-page-header
            title="Title"
            sub-title="This is a subtitle"
          />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '分页',
          key: 'Pagination',
          homepage: 'https://www.antdv.com/components/pagination-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg',
          data: {
            code: `<a-pagination :total="50" show-less-items />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '步骤条',
          key: 'Steps',
          homepage: 'https://www.antdv.com/components/steps-cn',
          cover: 'https://gw.alipayobjects.com/zos/antfincdn/UZYqMizXHaj/Steps.svg',
          data: {
            code: `<a-steps :current="1">
            <a-step>
              <template #title>Finished</template>
              <template #description>
                <span>This is a description.</span>
              </template>
            </a-step>
            <a-step title="In Progress" description="This is a description." />
            <a-step title="Waiting" description="This is a description." />
          </a-steps>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        }
      ]
    },
    {
      name: '数据录入',
      key: '数据录入',
      asserts: [
        {
          name: '自动完成',
          key: 'AutoComplete',
          homepage: 'https://www.antdv.com/components/auto-complete-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg',
          data: {
            code: `<a-auto-complete
            :options="[]"
            style="width: 200px"
            placeholder="input here"
          />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '级联选择',
          key: 'Cascader',
          homepage: 'https://www.antdv.com/components/cascader-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/UdS8y8xyZ/Cascader.svg',
          data: {
            code: `<a-cascader :options="[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                      {
                        value: 'xihu',
                        label: 'West Lake',
                      },
                    ],
                  },
                ],
              },
              {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                  {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                      {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                      },
                    ],
                  },
                ],
              },
            ]" placeholder="Please select" />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '多选框',
          key: 'Checkbox',
          homepage: 'https://www.antdv.com/components/checkbox-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/8nbVbHEm_/CheckBox.svg',
          data: {
            code: `<a-checkbox>Checkbox</a-checkbox>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '日期选择框',
          key: 'DatePicker',
          homepage: 'https://www.antdv.com/components/date-picker-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/RT_USzA48/DatePicker.svg',
          data: {
            code: `<a-date-picker />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '表单',
          key: 'Form',
          homepage: 'https://www.antdv.com/components/form-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/ORmcdeaoO/Form.svg',
          data: {
            code: `<a-form
            name="basic"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            autocomplete="off"
          >
            <a-form-item
              label="Username"
              name="username"
              :rules="[{ required: true, message: 'Please input your username!' }]"
            >
              <a-input />
            </a-form-item>
        
            <a-form-item
              label="Password"
              name="password"
              :rules="[{ required: true, message: 'Please input your password!' }]"
            >
              <a-input-password />
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
              <a-button type="primary" html-type="submit">Submit</a-button>
            </a-form-item>
          </a-form>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '输入框',
          key: 'Input',
          homepage: 'https://www.antdv.com/components/input-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg',
          data: {
            code: `<a-input placeholder="Basic usage" />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '数字输入框',
          key: 'InputNumber',
          homepage: 'https://www.antdv.com/components/input-number-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/XOS8qZ0kU/InputNumber.svg',
          data: {
            code: `<a-input-number :min="1" :max="10" />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '提及',
          key: 'Mentions',
          homepage: 'https://www.antdv.com/components/mentions-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/jPE-itMFM/Mentions.svg',
          data: {
            code: `<a-mentions autofocus>
            <a-mentions-option value="afc163">afc163</a-mentions-option>
            <a-mentions-option value="zombieJ">zombieJ</a-mentions-option>
            <a-mentions-option value="yesmeck">yesmeck</a-mentions-option>
          </a-mentions>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '单选框',
          key: 'Radio',
          homepage: 'https://www.antdv.com/components/radio-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/8cYb5seNB/Radio.svg',
          data: {
            code: `<a-radio>Radio</a-radio>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '评分',
          key: 'Rate',
          homepage: 'https://www.antdv.com/components/rate-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/R5uiIWmxe/Rate.svg',
          data: {
            code: `<a-rate />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '选择器',
          key: 'Select',
          homepage: 'https://www.antdv.com/components/select-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg',
          data: {
            code: `<a-select
            style="width: 120px"
          >
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '滑动输入条',
          key: 'Slider',
          homepage: 'https://www.antdv.com/components/slider-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/HZ3meFc6W/Silder.svg',
          data: {
            code: `<a-slider />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '开关',
          key: 'Switch',
          homepage: 'https://www.antdv.com/components/switch-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/zNdJQMhfm/Switch.svg',
          data: {
            code: `<a-switch />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '时间选择框',
          key: 'TimePicker',
          homepage: 'https://www.antdv.com/components/time-picker-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/h04Zsl98I/TimePicker.svg',
          data: {
            code: `<a-time-picker />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '穿梭框',
          key: 'Transfer',
          homepage: 'https://www.antdv.com/components/transfer-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/QAXskNI4G/Transfer.svg',
          data: {
            code: `<a-transfer />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '树选择',
          key: 'TreeSelect',
          homepage: 'https://www.antdv.com/components/tree-select-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/Ax4DA0njr/TreeSelect.svg',
          data: {
            code: `<a-tree-select
            show-search
            style="width: 100%"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            allow-clear
            tree-default-expand-all
            :tree-data="[
              {
                title: 'parent 1',
                value: 'parent 1',
                children: [
                  {
                    title: 'parent 1-0',
                    value: 'parent 1-0',
                    children: [
                      {
                        title: 'my leaf',
                        value: 'leaf1',
                      },
                      {
                        title: 'your leaf',
                        value: 'leaf2',
                      },
                    ],
                  },
                  {
                    title: 'parent 1-1',
                    value: 'parent 1-1',
                  },
                ],
              },
            ]"
          >
          </a-tree-select>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '上传',
          key: 'Upload',
          homepage: 'https://www.antdv.com/components/upload-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg',
          data: {
            code: `<a-upload
            name="file"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          >
            <a-button>
              Click to Upload
            </a-button>
          </a-upload>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        }
      ]
    },
    {
      name: '数据展示',
      key: '数据展示',
      asserts: [
        {
          name: '头像',
          key: 'Avatar',
          homepage: 'https://www.antdv.com/components/avatar-cn',
          cover: 'https://gw.alipayobjects.com/zos/antfincdn/aBcnbw68hP/Avatar.svg',
          data: {
            code: `<a-avatar src="https://joeschmoe.io/api/v1/random" />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '徽标数',
          key: 'Badge',
          homepage: 'https://www.antdv.com/components/badge-cn',
          cover: 'https://gw.alipayobjects.com/zos/antfincdn/6%26GF9WHwvY/Badge.svg',
          data: {
            code: `<a-badge count="5">
            <a-avatar shape="square" size="large" />
          </a-badge>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '日历',
          key: 'Calendar',
          homepage: 'https://www.antdv.com/components/calendar-cn',
          cover: 'https://gw.alipayobjects.com/zos/antfincdn/dPQmLq08DI/Calendar.svg',
          data: {
            code: `<a-calendar />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '卡片',
          key: 'Card',
          homepage: 'https://www.antdv.com/components/card-cn',
          cover: 'https://gw.alipayobjects.com/zos/antfincdn/NqXt8DJhky/Card.svg',
          data: {
            code: `<a-card title="Default size card" style="width: 300px">
            <template #extra><a>more</a></template>
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
          </a-card>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '走马灯',
          key: 'Carousel',
          homepage: 'https://www.antdv.com/components/carousel-cn',
          cover: 'https://gw.alipayobjects.com/zos/antfincdn/%24C9tmj978R/Carousel.svg',
          data: {
            code: `<a-carousel>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </a-carousel>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '折叠面板',
          key: 'Collapse',
          homepage: 'https://www.antdv.com/components/collapse-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/IxH16B9RD/Collapse.svg',
          data: {
            code: `<a-collapse v-model:activeKey="activeKey">
            <a-collapse-panel key="1" header="This is panel header 1">
              <p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="This is panel header 2">
              <p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="This is panel header 3" collapsible="disabled">
              <p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p>
            </a-collapse-panel>
          </a-collapse>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '评论',
          key: 'Comment',
          homepage: 'https://www.antdv.com/components/comment-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/ILhxpGzBO/Comment.svg',
          data: {
            code: `<a-comment>
            <template #author><a>Han Solo</a></template>
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
            </template>
            <template #content>
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
              </p>
            </template>
          </a-comment>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '描述列表',
          key: 'Descriptions',
          homepage: 'https://www.antdv.com/components/descriptions-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/MjtG9_FOI/Descriptions.svg',
          data: {
            code: `<a-descriptions title="User Info">
            <a-descriptions-item label="UserName">Zhou Maomao</a-descriptions-item>
            <a-descriptions-item label="Telephone">1810000000</a-descriptions-item>
            <a-descriptions-item label="Live">Hangzhou, Zhejiang</a-descriptions-item>
          </a-descriptions>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '空状态',
          key: 'Empty',
          homepage: 'https://www.antdv.com/components/empty-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/MNbKfLBVb/Empty.svg',
          data: {
            code: `<a-empty />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '图片',
          key: 'Image',
          homepage: 'https://www.antdv.com/components/image-cn',
          cover: 'https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg',
          data: {
            code: `<a-image
            :width="200"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '列表',
          key: 'List',
          homepage: 'https://www.antdv.com/components/list-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/5FrZKStG_/List.svg',
          data: {
            code: `<a-list item-layout="horizontal" :data-source="[
              {
                title: 'Ant Design Title 1',
              },
              {
                title: 'Ant Design Title 2',
              },
              {
                title: 'Ant Design Title 3',
              },
              {
                title: 'Ant Design Title 4',
              },
            ]">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar src="https://joeschmoe.io/api/v1/random" />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '气泡卡片',
          key: 'Popover',
          homepage: 'https://www.antdv.com/components/popover-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/1PNL1p_cO/Popover.svg',
          data: {
            code: `<a-popover>
            <template #content>
              <p>Content</p>
              <p>Content</p>
            </template>
            <a-button type="primary">Hover me</a-button>
          </a-popover>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '统计数值',
          key: 'Statistic',
          homepage: 'https://www.antdv.com/components/statistic-cn',
          cover: 'https://gw.alipayobjects.com/zos/antfincdn/rcBNhLBrKbE/Statistic.svg',
          data: {
            code: `<a-statistic title="Active Users" :value="112893" />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '表格',
          key: 'Table',
          homepage: 'https://www.antdv.com/components/table-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg',
          data: {
            code: `<a-table :dataSource="[
              {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
              },
              {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
              },
            ]" :columns="[
              {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
              },
              {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
              },
            ]" />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '标签页',
          key: 'Tabs',
          homepage: 'https://www.antdv.com/components/tabs-cn',
          cover: 'https://gw.alipayobjects.com/zos/antfincdn/lkI2hNEDr2V/Tabs.svg',
          data: {
            code: `<a-tabs>
            <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
            <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
          </a-tabs>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '标签',
          key: 'Tag',
          homepage: 'https://www.antdv.com/components/tag-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/cH1BOLfxC/Tag.svg',
          data: {
            code: `<a-tag>Tag 1</a-tag>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '时间轴',
          key: 'Timeline',
          homepage: 'https://www.antdv.com/components/timeline-cn',
          cover: 'https://gw.alipayobjects.com/zos/antfincdn/vJmo00mmgR/Timeline.svg',
          data: {
            code: `<a-timeline>
            <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
            <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
            <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
            <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
          </a-timeline>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '文字提示',
          key: 'Tooltip',
          homepage: 'https://www.antdv.com/components/tooltip-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/Vyyeu8jq2/Tooltp.svg',
          data: {
            code: `<a-tooltip>
            <template #title>prompt text</template>
            Tooltip will show when mouse enter.
          </a-tooltip>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '树形控件',
          key: 'Tree',
          homepage: 'https://www.antdv.com/components/tree-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg',
          data: {
            code: `<a-tree
            block-node
            :tree-data="[
              {
                title: 'parent 1',
                key: '0-0',
                children: [
                  {
                    title: 'parent 1-0',
                    key: '0-0-0',
                    disabled: true,
                    children: [
                      { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
                      { title: 'leaf', key: '0-0-0-1' },
                    ],
                  },
                  {
                    title: 'parent 1-1',
                    key: '0-0-1',
                    children: [{ key: '0-0-1-0', title: 'sss' }],
                  },
                ],
              },
            ]"
          />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        }
      ]
    },
    {
      name: '反馈',
      key: '反馈',
      asserts: [
        {
          name: '警告提示',
          key: 'Alert',
          homepage: 'https://www.antdv.com/components/alert-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg',
          data: {
            code: `<a-alert message="Success Text" type="success" />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '抽屉',
          key: 'Drawer',
          homepage: 'https://www.antdv.com/components/drawer-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/7z8NJQhFb/Drawer.svg',
          data: {
            code: `<a-drawer
            title="Basic Drawer"
            placement="right"
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </a-drawer>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '全局提示',
          key: 'Message',
          homepage: 'https://www.antdv.com/components/message-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/hAkKTIW0K/Message.svg',
          data: {
            code: `<a-button type="primary" @click="() => {
              message.info('This is a normal message');
            }">Display normal message</a-button>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'named',
                imported: 'message'
              }
            ]
          }
        },
        {
          name: '对话框',
          key: 'Modal',
          homepage: 'https://www.antdv.com/components/modal-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg',
          data: {
            code: `<a-modal title="Basic Modal">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </a-modal>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '通知提醒框',
          key: 'Notification',
          homepage: 'https://www.antdv.com/components/notification-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/Jxm5nw61w/Notification.svg',
          data: {
            code: `<a-button type="primary" @click="() => {
              notification.open({
                message: 'Notification Title',
                description:
                  'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
              });
            }">Open the notification box</a-button>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'named',
                imported: 'notification'
              }
            ]
          }
        },
        {
          name: '气泡确认框',
          key: 'Popconfirm',
          homepage: 'https://www.antdv.com/components/popconfirm-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/fjMCD9xRq/Popconfirm.svg',
          data: {
            code: `<a-popconfirm
            title="Are you sure delete this task?"
            ok-text="Yes"
            cancel-text="No"
          >
            <a href="#">Delete</a>
          </a-popconfirm>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '进度条',
          key: 'Progress',
          homepage: 'https://www.antdv.com/components/progress-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/xqsDu4ZyR/Progress.svg',
          data: {
            code: `<a-progress :percent="30" />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '结果',
          key: 'Result',
          homepage: 'https://www.antdv.com/components/result-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/9nepwjaLa/Result.svg',
          data: {
            code: `<a-result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          >
          </a-result>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '骨架屏',
          key: 'Skeleton',
          homepage: 'https://www.antdv.com/components/skeleton-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/KpcciCJgv/Skeleton.svg',
          data: {
            code: `<a-skeleton />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '加载中',
          key: 'Spin',
          homepage: 'https://www.antdv.com/components/spin-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg',
          data: {
            code: `<a-spin />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        }
      ]
    },
    {
      name: '其他',
      key: '其他',
      asserts: [
        {
          name: '锚点',
          key: 'Anchor',
          homepage: 'https://www.antdv.com/components/anchor-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/_1-C1JwsC/Anchor.svg',
          data: {
            code: `<a-anchor>
            <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
            <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
          </a-anchor>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '回到顶部',
          key: 'BackTop',
          homepage: 'https://www.antdv.com/components/back-top-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/tJZ5jbTwX/BackTop.svg',
          data: {
            code: `<a-back-top />`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        },
        {
          name: '全局化配置',
          key: 'ConfigProvider',
          homepage: 'https://www.antdv.com/components/config-provider-cn',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/kegYxl1wj/ConfigProvider.svg',
          data: {
            code: `<a-config-provider></a-config-provider>`,
            dependencies: [
              {
                package: 'AntdV',
                mode: 'default'
              }
            ]
          }
        }
      ]
    }
  ]
} as Material
