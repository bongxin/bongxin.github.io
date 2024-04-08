export function sidebarDevelopment() {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '什么是 VitePress？', link: 'markdown-examples' },
        { text: '快速开始', link: 'api-examples' },
      ],
    },
    {
      text: '实验性功能',
      collapsed: false,
      items: [
        { text: 'MPA 模式', link: 'api-examples' },
        { text: 'sitemap 生成', link: 'markdown-examples' },
      ],
    },
    { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' },
  ];
}
