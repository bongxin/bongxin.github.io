import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  {
    text: '开发',
    items: [
      {
        text: '后端生态',
        items: [
          { text: 'Java (SpringBoot)', link: '/dev/java/spring-boot/' },
          { text: 'PHP (WordPress)', link: '/dev/php/wordpress/' },
        ],
      },
      {
        text: '工程与工具',
        items: [
          { text: 'NPM 包管理', link: '/dev/npm/' },
          { text: '通用框架/芋道(ruoyi-vue-pro)', link: '/dev/framework/yudao/' },
        ],
      },
    ],
  },
  {
    text: '设计',
    items: [
      {
        text: 'UI设计',
        items: [{ text: 'Figma', link: '/design/figma/' }],
      },
      {
        text: 'UML画图',
        items: [
          { text: 'Excalidraw', link: '/design/excalidraw/' },
          { text: 'PlantUML', link: '/design/uml/plantuml/' },
          { text: 'Mermaid', link: '/design/uml/mermaid/' },
          { text: 'Gravizo', link: '/design/uml/gravizo/' },
        ],
      },
    ],
  },
  {
    text: 'AI',
    items: [
      {
        text: '智能体',
        items: [{ text: 'Hermes Agent', link: '/ai/hermes-agent/' }],
      },
    ],
  },
  {
    text: '管理',
    items: [
      {
        text: '项目管理',
        items: [
          { text: 'PMP', link: '/mgmt/pmp/' },
          { text: '高项', link: '/mgmt/ispm/' },
        ],
      },
    ],
  },
  {
    text: '运维',
    items: [
      {
        text: '主机与容器',
        items: [
          { text: 'Linux', link: '/ops/linux/' },
          { text: '树莓派', link: '/ops/raspberry-pi/' },
          { text: 'Docker', link: '/ops/docker/docker-compose/' },
        ],
      },
      {
        text: '网络与安全',
        items: [
          { text: 'OpenWRT', link: '/ops/openwrt/' },
          { text: 'Clash', link: '/ops/clash/' },
          { text: '内网穿透 (Natapp)', link: '/ops/natapp/' },
          { text: 'VPN', link: '/ops/vpn/ConfigVPN.html' },
        ],
      },
      {
        text: '应用与服务',
        items: [
          { text: 'DSM 群晖 NAS', link: '/ops/dsm/群晖NAS系统（DSM）的安装和使用.html' },
          { text: '宝塔面板', link: '/ops/bt/宝塔面板/认识宝塔面板.html' },
        ],
      },
      {
        text: '工具',
        items: [{ text: 'Fast GitHub', link: '/ops/github/fast-github/' }],
      },
    ],
  },
  {
    text: '运营',
    items: [
      { text: '草料二维码', link: '/operation/草料微信二维码生成器/' },
    ],
  },
  { text: '音乐', link: '/music/KOKIA.html' },
  {
    text: '其他',
    items: [
      {
        text: '笔记与文档',
        items: [
          { text: 'Obsidian', link: '/others/obsidian/' },
          { text: 'Markdown', link: '/others/markdown/Markdown/认识Markdown.html' },
          { text: 'AsciiDoc', link: '/others/markdown/AsciiDoc/认识Asciidoc.html' },
        ],
      },
    ],
  },
  { text: '关于', link: '/about/' },
])
