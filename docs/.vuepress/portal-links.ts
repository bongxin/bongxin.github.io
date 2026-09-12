/**
 * 门户外链单一数据源：顶栏 navbar 引用此处，避免与页面文案各写一份 URL。
 * LinkCard 仅用于 /links/ 与 /music/；应用访问 / 快捷入口用正文 Markdown 列表。
 */
export const shortcutNavItems = [
  {
    text: 'Fast-Note-Sync',
    link: 'http://192.168.31.151:9000/',
    target: '_blank' as const,
  },
  {
    text: 'ImmortalWrt',
    link: 'http://192.168.31.1/',
    target: '_blank' as const,
  },
]

export const appNavItems = [
  {
    text: 'BERNSINE 阿卡贝拉',
    link: 'https://acappella.bongxin.com.cn/',
    target: '_blank' as const,
  },
]
