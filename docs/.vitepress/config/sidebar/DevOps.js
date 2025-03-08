export function sidebarUbuntu() {
  return [
    {
      text: "基本配置",
      collapsed: false,
      items: [
        { text: "基本配置", link: "基本配置/基本配置" },
        { text: "开发环境配置", link: "基本配置/开发环境配置" },
        { text: "OpenVPN服务", link: "基本配置/OpenVPN服务" },
      ],
    },
    {
      text: "常见操作",
      collapsed: false,
      items: [{ text: "常见操作", link: "常见操作/常见操作" }],
    },
  ];
}

export function sidebarDocker() {
  return [
    {
      text: "Docker",
      collapsed: false,
      items: [{ text: "Docker Compose", link: "DockerCompose" }],
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

export function sidebarOpenwrt() {
  return [
    {
      text: "OpenWRT",
      collapsed: false,
      items: [
        { text: "认识OpenWRT", link: "OpenWRT" },
        { text: "AX6000刷固件", link: "AX6000刷固件" },
        { text: "OpenWRT使用", link: "OpenWRT使用" },
      ],
    },
  ];
}

export function sidebarDSM() {
  return [
    {
      text: "NAS",
      collapsed: false,
      items: [{ text: "什么是NAS", link: "什么是NAS" }],
    },
    {
      text: "群晖NAS",
      collapsed: false,
      items: [
        {
          text: "核心功能",
          link: "群晖NAS系统（DSM）的安装和使用#nas系统有哪些核心功能",
        },
        {
          text: "安装",
          link: "群晖NAS系统（DSM）的安装和使用#群晖nas系统-dsm-的安装",
        },
        {
          text: "使用",
          link: "群晖NAS系统（DSM）的安装和使用#群晖nas系统-dsm-的使用",
        },
        {
          text: "套件分享",
          link: "群晖NAS系统（DSM）的安装和使用#群晖nas套件分享和演示",
        },
        {
          text: "应用",
          link: "群晖NAS系统（DSM）的安装和使用#nas在企业和家庭中的应用",
        },
      ],
    },
  ];
}

export function sidebarOthers() {
  return [
    {
      text: "其他",
      collapsed: false,
      items: [
        { text: "内网穿透", link: "内网穿透" },
        { text: "WSL2", link: "wsl2" },
        { text: "Clash", link: "clash" },
      ],
    },
    {
      text: "VPN",
      collapsed: false,
      items: [
        { text: "ConfigVPN", link: "vpn/ConfigVPN" },
        { text: "SoftEtherVPN", link: "vpn/SoftEtherVPN" },
      ],
    },
    {
      text: "宝塔面板",
      collapsed: false,
      items: [{ text: "宝塔面板", link: "bt/宝塔面板/认识宝塔面板" }],
    },
  ];
}
