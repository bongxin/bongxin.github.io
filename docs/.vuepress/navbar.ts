import { defineNavbarConfig } from 'vuepress-theme-plume'
import { version } from '../../package.json'
import { appNavItems, shortcutNavItems } from './portal-links'

/**
 * 顶栏日常入口（尽量四字；门户三件套固定顺序）。
 * 顺序：站点导航 · 运行环境 · 应用访问 · 快捷入口 · 网站链接 · 设备资产 · 版本/更新日志
 * 音乐 / 相册 / 关于：不进顶栏（走 /map/ 与侧栏；/about/ 正文仍保留）
 * 版本下拉对齐 Plume 官方站写法（ws_ls_doc 同栈，本身无 changelog 页）
 */
export default defineNavbarConfig([
  { text: '站点导航', icon: 'material-symbols:map-outline', link: '/map/' },
  {
    text: '运行环境',
    icon: 'material-symbols:cloud-outline',
    link: '/environment/',
  },
  {
    text: '应用访问',
    icon: 'material-symbols:apps',
    items: [
      { text: '项目总览', link: '/apps/' },
      ...appNavItems,
    ],
  },
  {
    text: '快捷入口',
    icon: 'material-symbols:bolt',
    items: [
      { text: '入口总览', link: '/shortcuts/' },
      ...shortcutNavItems,
    ],
  },
  {
    text: '网站链接',
    icon: 'material-symbols:link',
    link: '/links/',
  },
  {
    text: '设备资产',
    icon: 'material-symbols:devices-outline',
    link: '/assets/',
  },
  {
    text: `${version}`,
    icon: 'codicon:versions',
    badge: '新',
    items: [
      { text: '更新日志', link: '/changelog/', icon: 'material-symbols:history' },
      { text: '站点约定', link: '/conventions/', icon: 'material-symbols:rule' },
    ],
  },
])
