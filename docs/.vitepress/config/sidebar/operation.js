export function sidebarUbuntu() {
  return [
    {
      text: "基本配置",
      collapsed: false,
      items: [
        { text: "基本配置", link: "基本配置/基本配置" },
        { text: "开发环境配置", link: "基本配置/开发环境配置" },
      ],
    },
    {
        text: "常见操作",
        collapsed: false,
        items: [
          { text: "常见操作", link: "常见操作/常见操作" },
        ],
      },
  ];
}

export function sidebarBt() {
  return [
    {
      text: "宝塔面板",
      collapsed: false,
      items: [{ text: "宝塔面板", link: "宝塔面板/认识宝塔面板" }],
    },
  ];
}
