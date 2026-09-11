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
    autoFrontmatter: false,
    markdown: {
      mermaid: true,
    },
  }),
})
