import { defineConfig } from 'vitepress';
import sidebar from './config/sidebar';
import nav from './config/nav';

export default defineConfig({
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
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    sidebar: sidebar(),
    nav: nav(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    editLink: {
      pattern: 'https://github.com/bongxin/bongxin/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最近更新时间',

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
