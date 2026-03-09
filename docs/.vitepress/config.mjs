import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';
import { imgSize } from '@mdit/plugin-img-size';
import { withSidebar } from 'vitepress-sidebar';
import vitepressProtectPlugin from 'vitepress-protect-plugin';

// ✅ 1. 导入独立的侧边栏配置
import { sidebarConfigs } from './sidebar.config.js';
import nav from './nav.config.js';

import markdownItTaskCheckbox from 'markdown-it-task-checkbox';

export default withMermaid(
  withSidebar(
    defineConfig({
      title: 'BongXin',
      description: '个人的知识库',
      themeConfig: {
        logo: '/logo.svg',
        sitemap: {
          hostname: 'https://docs.bongxin.com.cn',
        },
        nav: typeof nav === 'function' ? nav() : nav,

        // ✅ 2. 这里不再需要定义庞大的数组，直接使用导入的变量
        // 插件会自动处理 sidebarConfigs

        editLink: {
          pattern:
            'https://github.com/bongxin/bongxin.github.io/edit/base/docs/:path',
          text: '在 GitHub 上编辑此页面',
        },
        footer: {
          message: '个人博客',
          copyright: `版权所有 © 2019-${new Date().getFullYear()} BongXin`,
        },
        docFooter: { prev: '上一页', next: '下一页' },
        outline: { label: '页面导航', level: [2, 3] },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: { dateStyle: 'short', timeStyle: 'medium' },
        },
        socialLinks: [
          {
            icon: 'github',
            link: 'https://github.com/bongxin/bongxin.github.io',
          },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48c0-.63.478-1.218 1.152-1.218q.03 0 .058.003l.031.003A6.84 6.84 0 0 0 8 1.137A6.86 6.86 0 0 0 2.266 4.23c.16.005.313.009.442.009c.717 0 1.828-.087 1.828-.087c.37-.022.414.521.044.565c0 0-.371.044-.785.065l2.5 7.434l1.5-4.506l-1.07-2.929c-.369-.022-.719-.065-.719-.065c-.37-.022-.326-.588.043-.566c0 0 1.134.087 1.808.087c.718 0 1.83-.087 1.83-.087c.37-.022.413.522.043.566c0 0-.372.043-.785.065l2.48 7.377l.684-2.287l.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.86 6.86 0 0 0 3.868 6.176L1.73 5.206A6.8 6.8 0 0 0 1.137 8"/><path d="M6.061 14.583L8.121 8.6l2.109 5.78q.02.05.049.094a6.85 6.85 0 0 1-4.218.109m7.96-9.876q.046.328.047.706c0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z"/><path fill-rule="evenodd" d="M0 8c0-4.411 3.589-8 8-8s8 3.589 8 8s-3.59 8-8 8s-8-3.589-8-8m.367 0c0 4.209 3.424 7.633 7.633 7.633S15.632 12.209 15.632 8C15.632 3.79 12.208.367 8 .367C3.79.367.367 3.79.367 8"/></g></svg>',
            },
            link: 'https://www.bongxin.com.cn/links',
          },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.458 18.185C3.359 16.677 2 14.4 2 11.908C2 7.323 6.475 3.6 12 3.6s10 3.723 10 8.308c0 4.584-4.475 8.308-10 8.308a11.4 11.4 0 0 1-3.272-.462c-.092-.03-.216-.03-.308-.03c-.185 0-.37.06-.525.153l-2.191 1.262c-.062.03-.124.061-.186.061a.34.34 0 0 1-.339-.338c0-.093.03-.154.062-.246c.03-.031.308-1.047.463-1.662c0-.062.03-.154.03-.215q0-.37-.277-.554m3.21-7.673c.717 0 1.285-.569 1.285-1.286S9.385 7.94 8.668 7.94s-1.285.568-1.285 1.286c0 .717.567 1.285 1.285 1.285m6.666 0c.718 0 1.285-.569 1.285-1.286s-.567-1.286-1.285-1.286c-.717 0-1.285.568-1.285 1.286c0 .717.568 1.285 1.285 1.285"/></svg>',
            },
            link: 'https://www.bongxin.com.cn/circle/square',
          },
        ],
        search: {
          provider: 'local',
          options: {
            locales: {
              root: {
                placeholder: '搜索文档',
                translations: {
                  button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档',
                  },
                  modal: {
                    searchBox: {
                      resetButtonTitle: '清除查询条件',
                      resetButtonAriaLabel: '清除查询条件',
                      cancelButtonText: '取消',
                      cancelButtonAriaLabel: '取消',
                    },
                    startScreen: {
                      recentSearchesTitle: '搜索历史',
                      noRecentSearchesText: '没有搜索历史',
                      saveRecentSearchButtonTitle: '保存至搜索历史',
                      removeRecentSearchButtonTitle: '从搜索历史中移除',
                      favoriteSearchesTitle: '收藏',
                      removeFavoriteSearchButtonTitle: '从收藏中移除',
                    },
                    errorScreen: {
                      titleText: '无法获取结果',
                      helpText: '你可能需要检查你的网络连接',
                    },
                    footer: {
                      selectText: '选择',
                      navigateText: '切换',
                      closeText: '关闭',
                      searchByText: '搜索提供者',
                    },
                    noResultsScreen: {
                      noResultsText: '无法找到相关结果',
                      suggestedQueryText: '你可以尝试查询',
                      reportMissingResultsText: '你认为该查询应该有结果？',
                      reportMissingResultsLinkText: '点击反馈',
                    },
                  },
                },
              },
            },
          },
        },
      },
      appearance: false,
      markdown: {
        config: (md) => {
          md.use(imgSize);
          md.use(markdownItTaskCheckbox); //todo
        },
      },
      mermaid: {},
      vite: {
        plugins: [
          vitepressProtectPlugin({
            // disableF12: true, // 禁用F12开发者模式
            // disableCopy: true, // 禁用文本复制
            // disableSelect: true, // 禁用文本选择
            // disableRightClick: true, // 禁用右键菜单
            // disablePrint: true, // 禁用打印
            // disableSave: true, // 禁用保存
            // disableDrag: true, // 禁用拖拽
            // disableDrop: true, // 禁用拖拽
            // disablePaste: true, // 禁用粘贴
            // disableCut: true, // 禁用剪切
          }),
        ],
      },
    }),
    sidebarConfigs, // ✅ 3. 直接传入导入的变量
  ),
);
