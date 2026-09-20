import type { ThemeCollectionItem } from 'vuepress-theme-plume'
import { dailyBrowseSidebar } from '../daily-sidebar'

/**
 * 门户侧栏：日常入口（单一源）+ 环境子页分组，不与 dailyBrowseSidebar 重复。
 * 集合侧栏只挂在 linkPrefix `/portal/` 上；短 permalink 须在 plume.config `sidebar` 再挂一次。
 */
export const portalSidebar = [
  ...dailyBrowseSidebar,
  {
    text: '环境说明',
    collapsed: false,
    items: [
      { text: '芋道 · 概览', link: '/environment/yudao/' },
      { text: '芋道 · 开发', link: '/environment/yudao/dev/' },
      { text: '芋道 · 测试', link: '/environment/yudao/test/' },
      { text: '芋道 · 生产', link: '/environment/yudao/prod/' },
      { text: 'WordPress', link: '/environment/wordpress/' },
      { text: 'Ubuntu Server', link: '/environment/ubuntu-server/' },
    ],
  },
]

/**
 * 短 permalink 与集合 linkPrefix 不一致时，主题按 URL 前缀匹配侧栏。
 * 这些路径都要挂上 portalSidebar，否则左侧栏为空。
 */
export const portalSidebarPaths = [
  '/map/',
  '/apps/',
  '/shortcuts/',
  '/links/',
  '/assets/',
  '/changelog/',
  '/conventions/',
  '/environment/',
]

/**
 * 门户正文均在 docs/portal/*，对外 permalink 保持短路径。
 * 运行环境正文在 docs/environment/（同属短 permalink，侧栏见 portalSidebarPaths）。
 */
export const portalCollections: ThemeCollectionItem[] = [
  {
    type: 'doc',
    dir: 'portal',
    title: '门户',
    linkPrefix: '/portal/',
    autoFrontmatter: false,
    sidebar: portalSidebar,
  },
  {
    type: 'doc',
    dir: 'about',
    title: '关于',
    linkPrefix: '/about/',
    autoFrontmatter: false,
    sidebar: [{ text: '关于我', link: '/about/' }],
  },
]
