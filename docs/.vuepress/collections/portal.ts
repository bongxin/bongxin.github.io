import type { ThemeCollectionItem } from 'vuepress-theme-plume'
import { dailyBrowseSidebar } from '../daily-sidebar'

/**
 * 门户侧栏：日常入口（单一源）+ 环境子页分组，不与 dailyBrowseSidebar 重复。
 */
const portalSidebar = [
  ...dailyBrowseSidebar,
  {
    text: '环境说明',
    collapsed: false,
    items: [
      { text: '芋道', link: '/environment/yudao/' },
      { text: 'WordPress', link: '/environment/wordpress/' },
    ],
  },
]

/**
 * 门户正文均在 docs/portal/*，对外 permalink 保持短路径。
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
