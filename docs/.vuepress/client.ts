import { defineClientConfig } from 'vuepress/client'
import { defineMermaidConfig } from '@vuepress/plugin-markdown-chart/client'
// 勿在 CSS 里 @import 同目录文件：Vite/postcss-import 会把 './x.css' 解析到仓库根目录
import './styles/brand.css'
import './styles/home-hero.css'
import './styles/dark-button.css'
import './styles/mermaid.css'

/**
 * Mermaid：theme=base 才能吃到 themeVariables；useMaxWidth 覆盖插件默认 false。
 * （若因打包多实例未生效，正文图内 --- config --- 与 mermaid.css 仍保底）
 */
defineMermaidConfig({
  theme: 'base',
  flowchart: { useMaxWidth: true, padding: 12, nodeSpacing: 24, rankSpacing: 36 },
  architecture: { useMaxWidth: true },
  sequence: { useMaxWidth: true },
  themeVariables: (isDark: boolean) =>
    isDark
      ? {
          background: '#1b1b1f',
          primaryColor: '#2c2c2e',
          primaryTextColor: '#f5f5f7',
          primaryBorderColor: '#98989d',
          secondaryColor: '#3a3a3c',
          tertiaryColor: '#1c1c1e',
          lineColor: '#98989d',
          textColor: '#f5f5f7',
          mainBkg: '#2c2c2e',
          nodeBorder: '#98989d',
          clusterBkg: '#242426',
          clusterBorder: '#636366',
          titleColor: '#f5f5f7',
          edgeLabelBackground: '#1b1b1f',
        }
      : {
          background: '#ffffff',
          primaryColor: '#f5f5f7',
          primaryTextColor: '#1d1d1f',
          primaryBorderColor: '#3c3c43',
          secondaryColor: '#ebebf0',
          tertiaryColor: '#ffffff',
          lineColor: '#6e6e73',
          textColor: '#1d1d1f',
          mainBkg: '#f5f5f7',
          nodeBorder: '#3c3c43',
          clusterBkg: '#fafafa',
          clusterBorder: '#d2d2d7',
          titleColor: '#1d1d1f',
          edgeLabelBackground: '#ffffff',
        },
})

export default defineClientConfig({})
