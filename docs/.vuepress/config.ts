import { existsSync, readFileSync, realpathSync } from 'node:fs'
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'BongXin',
  description: '个人的知识库',
  base: '/',

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#000000' }],
  ],

  bundler: viteBundler({
    vuePluginOptions: {
      // Vite 8 / rolldown does not pass ts.sys; compiler-sfc needs explicit fs
      // to resolve imported types in theme SFC macros.
      script: {
        fs: {
          fileExists: (file: string) => existsSync(file),
          readFile: (file: string) =>
            existsSync(file) ? readFileSync(file, 'utf-8') : undefined,
          realpath: (file: string) => realpathSync(file),
        },
      } as never,
    },
  }),

  theme: plumeTheme({
    hostname: 'https://docs.bongxin.com.cn',
    docsRepo: 'https://github.com/bongxin/bongxin.github.io',
    docsBranch: 'plume',
    docsDir: 'docs',
    editLink: true,
    contributors: false,
    changelog: false,
    // 按 Plume 写作约定：标题走 frontmatter / 页眉 .page-title，正文从 ## 起笔
    // https://theme-plume.vuejs.press/guide/write/
    autoFrontmatter: false,
    // markdown 只写在此处（官方：plume.config 不支持 markdown）；改后需重启
    markdown: {
      mermaid: true,
      markmap: true,
      bilibili: true,
      timeline: true,
      table: {
        align: 'left',
        fullWidth: true,
        copy: true,
      },
    },
    // bilibili / table 另写 markdownPower，确保 md-power 注入
    plugins: {
      markdownPower: {
        bilibili: true,
        table: {
          align: 'left',
          fullWidth: true,
          copy: true,
        },
      },
    },
  }),
})
