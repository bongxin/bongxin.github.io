import { defineClientConfig } from 'vuepress/client'
// 勿在 CSS 里 @import 同目录文件：Vite/postcss-import 会把 './x.css' 解析到仓库根目录
import './styles/brand.css'
import './styles/home-hero.css'
import './styles/dark-button.css'

export default defineClientConfig({})
