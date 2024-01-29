import * as Vangle from '@vangle/components'
import { define } from '../utils/types'
import type { Theme as ThemeType } from 'vitepress'

import { globals } from '../vitepress'

// 使用vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import Theme from 'vitepress/dist/client/theme-default/index.js'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import locale from "element-plus/es/locale/lang/zh-cn"
// 图标并进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


export default define<ThemeType>({
  ...Theme,
  enhanceApp: ({ app }) => {
    Object.keys(Vangle).forEach(key => {
      if (key.startsWith('Wil') && Vangle[key].name) {
        app.component(Vangle[key].name, Vangle[key])
      }
    })
    app.use(ElementPlus,{
      locale, // 语言设置
    })
    // 注册所有图标
    for (const [key, component1] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component1)
    }
    globals.forEach(([name, comp]) => app.component(name, comp))
  }
})
