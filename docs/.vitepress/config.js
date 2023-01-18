import { defineConfig } from 'vitepress';
import sidebar from './config/sidebar';

export default defineConfig({
  lang: 'zh-CN', // en-US
  title: 'Bongxin',
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
    nav: nav(),
    logo: '/logo.svg',

    sidebar: sidebar(),

    editLink: {
      pattern: 'https://gitee.com/bongxin/bongxin/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

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

function nav() {
  return [
    { text: '指南', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
    { text: '配置', link: '/config/introduction', activeMatch: '/config/' },
    {
      text: '体系',
      items: [
        {
          text: 'TOGAF',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          items: [
            {
              text: 'TOGAF',
              link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
            },
            {
              text: 'Contributing',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
            },
          ],
        },
      ],
    },
    {
      text: '技能',
      items: [
        {
          text: '前端',
          items: [
            {
              text: 'Vue',
              link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
            },
            {
              text: 'Contributing',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
            },
          ],
        },
        {
          text: '后端',
          items: [
            {
              text: 'PHP',
              link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
            },
            {
              text: 'Nest.js',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
            },
          ],
        },
        {
          text: '设计',
          items: [
            {
              text: 'Figma',
              link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
            },
            {
              text: 'Nest.js',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
            },
          ],
        },
        {
          text: '管理',
          items: [
            {
              text: 'PHP',
              link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
            },
            {
              text: 'Nest.js',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
            },
          ],
        },
        {
          text: '剪辑',
          items: [
            {
              text: 'Pr',
              link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
            },
            {
              text: 'Ps',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
            },
          ],
        },
      ],
    },
    {
      text: '伯恩西因',
      link: '/guide/what-is-vitepress',
      activeMatch: '/bernsine/',
    },
  ];
}
