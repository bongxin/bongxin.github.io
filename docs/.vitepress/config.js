import { defineConfig } from 'vitepress';
import sidebar from './config/sidebar';
import nav from './config/nav';
import markdownItAnchor from 'markdown-it-anchor';
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  lang: 'zh-CN',
  title: 'BongXin',
  description: '个人的知识库',
  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  head: [
    [
      'meta',
      { name: 'theme-color', content: '#3c8772' },
      'link',
      { rel: 'icon', href: '/favicon.ico' },
    ],
  ],

  markdown: {
    // markdown-it-anchor 的选项
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    anchor: {
      permalink: markdownItAnchor.permalink.headerLink(),
    },
    // @mdit-vue/plugin-toc 的选项
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: {
      level: [1, 2, 3], // 指定标题的层级
    },
    headers: {
      level: [0, 0],
    },
    extendMarkdown: (md) => {
      md.use(require('markdown-it-mermaid').default);
    },

    mermaid: {
      //mermaidConfig !theme here works for ligth mode since dark theme is forced in dark mode
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    sidebar: sidebar(),
    nav: nav(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bongxin/bongxin.github.io' },
    ],

    editLink: {
      pattern:
        'https://github.com/bongxin/bongxin.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最近更新时间',
    outlineHeading: '目录',

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Bong Xin',
    },

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress',
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg',
    },
  },
});
