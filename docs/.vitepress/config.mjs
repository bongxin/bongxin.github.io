import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';
import nav from './config/nav';
import sidebar from './config/sidebar';

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: 'BongXin',
    description: '个人的知识库',
    themeConfig: {
      logo: '/logo.svg',
      nav: nav(),
      sidebar: sidebar(),
      editLink: {
        pattern:
          'https://github.com/bongxin/bongxin.github.io/edit/main/docs/:path',
        text: '在 GitHub 上编辑此页面',
      },

      footer: {
        message: '个人博客',
        copyright: `版权所有 © 2019-${new Date().getFullYear()} BongXin`,
      },

      docFooter: {
        prev: '上一页',
        next: '下一页',
      },

      outline: {
        label: '页面导航',
        level: [2,3]
      },

      lastUpdated: {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium',
        },
      },

      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/bongxin/bongxin.github.io',
        },
      ],

      lightModeSwitchTitle: '切换到浅色模式',
      darkModeSwitchTitle: '切换到深色模式',
    },
    mermaid: {
      //mermaidConfig !theme here works for ligth mode since dark theme is forced in dark mode
    },
  })
);
