import type { ThemeCollectionItem } from 'vuepress-theme-plume'
import { dailyBrowseSidebar } from '../daily-sidebar'

/** 知识库板块（开发 / 设计 / AI / 管理 / 运维 / 运营 / 音乐 / 笔记） */
export const knowledgeCollections: ThemeCollectionItem[] = [

  {
    type: 'doc',
    dir: 'dev',
    title: '开发',
    linkPrefix: '/dev/',
    sidebarCollapsed: true,
    autoFrontmatter: false,
    sidebar: [
      { text: '开发总览', link: '/dev/' },
      {
        text: 'Java',
        collapsed: false,
        items: [
          { text: '总览', link: '/dev/java/' },
          { text: 'Spring Boot', link: '/dev/java/spring-boot/' },
          { text: '项目部署', link: '/dev/java/spring-boot/deploy-project/' },
        ],
      },
      {
        text: 'PHP',
        collapsed: false,
        items: [
          { text: '总览', link: '/dev/php/' },
          { text: 'WordPress', link: '/dev/php/wordpress/' },
          { text: 'WordPress 插件', link: '/dev/php/wordpress/plugin/' },
          { text: 'B2 Pro', link: '/dev/php/b2-pro/' },
          { text: 'B2 Pro 指南', link: '/dev/php/b2-pro/guide/' },
          { text: 'B2 Pro App', link: '/dev/php/b2-pro/guide-app/' },
        ],
      },
      {
        text: '框架 · 芋道',
        collapsed: false,
        items: [
          { text: '框架总览', link: '/dev/framework/' },
          { text: '芋道介绍', link: '/dev/framework/yudao/' },
          { text: '快速开始', link: '/dev/framework/yudao/quick/' },
          { text: '开发指南', link: '/dev/framework/yudao/guide/' },
          { text: '功能模块', link: '/dev/framework/yudao/modules/' },
          { text: '后端部署', link: '/dev/framework/yudao/deploy/' },
          { text: '前端部署', link: '/dev/framework/yudao/deploy-app/' },
          { text: '常见问题', link: '/dev/framework/yudao/problems/' },
        ],
      },
    ],
  },

  {
    type: 'doc',
    dir: 'design',
    title: '设计',
    linkPrefix: '/design/',
    sidebarCollapsed: false,
    autoFrontmatter: false,
    sidebar: [
      { text: '设计总览', link: '/design/' },
      {
        text: 'UI 设计',
        collapsed: false,
        items: [
          { text: 'Figma', link: '/design/figma/' },
          { text: 'Figma 插件', link: '/design/figma/plugins/' },
        ],
      },
      {
        text: '绘图工具',
        collapsed: false,
        items: [
          { text: 'Excalidraw', link: '/design/excalidraw/' },
          { text: 'UML 总览', link: '/design/uml/' },
          { text: 'PlantUML', link: '/design/uml/plantuml/' },
          { text: 'Mermaid', link: '/design/uml/mermaid/' },
          { text: 'Gravizo', link: '/design/uml/gravizo/' },
        ],
      },
    ],
  },

  {
    type: 'doc',
    dir: 'ai',
    title: 'AI',
    linkPrefix: '/ai/',
    autoFrontmatter: false,
    sidebar: 'auto',
  },

  {
    type: 'doc',
    dir: 'mgmt',
    title: '管理',
    linkPrefix: '/mgmt/',
    sidebarCollapsed: true,
    autoFrontmatter: false,
    sidebar: [
      { text: '管理总览', link: '/mgmt/' },
      {
        text: 'PMP 认证',
        collapsed: false,
        items: [
          { text: '认识 PMP', link: '/mgmt/pmp/' },
          { text: '学习计划', link: '/mgmt/pmp/学习计划.html' },
          { text: 'PMBOK 看书指引', link: '/mgmt/pmp/PMBOK看书指引（第六版）.html' },
          { text: '模考题（二）', link: '/mgmt/pmp/PMP模考题（二）.html' },
          {
            text: 'ITTO 知识领域',
            collapsed: true,
            items: [
              { text: '4. 项目整合管理', link: '/mgmt/pmp/ITTO图/4. 项目整合管理.html' },
              { text: '5. 项目范围管理', link: '/mgmt/pmp/ITTO图/5. 项目范围管理.html' },
              { text: '6. 项目进度管理', link: '/mgmt/pmp/ITTO图/6. 项目进度管理.html' },
              { text: '7. 项目成本管理', link: '/mgmt/pmp/ITTO图/7. 项目成本管理.html' },
              { text: '8. 项目质量管理', link: '/mgmt/pmp/ITTO图/8. 项目质量管理.html' },
              { text: '9. 项目资源管理', link: '/mgmt/pmp/ITTO图/9. 项目资源管理.html' },
              { text: '10. 项目沟通管理', link: '/mgmt/pmp/ITTO图/10. 项目沟通管理.html' },
              { text: '11. 项目风险管理', link: '/mgmt/pmp/ITTO图/11. 项目风险管理.html' },
              { text: '12. 项目采购管理', link: '/mgmt/pmp/ITTO图/12. 项目采购管理.html' },
              { text: '13. 项目相关方管理', link: '/mgmt/pmp/ITTO图/13. 项目相关方管理.html' },
            ],
          },
          {
            text: '光环复习资料',
            collapsed: true,
            items: [
              {
                text: '复习秘籍',
                link: '/mgmt/pmp/光环国际PMP复习秘籍/光环PMP复习秘籍.html',
              },
              {
                text: '知识点总结超强版',
                link: '/mgmt/pmp/光环国际PMP知识点总结超强版/光环国际PMP知识点总结超强版.html',
              },
              {
                text: '课程学习笔记',
                link: '/mgmt/pmp/光环国际PMP课程学习笔记/光环国际PMP课程学习笔记.html',
              },
            ],
          },
          {
            text: '章节练习题',
            collapsed: true,
            items: [
              { text: '引论 + 环境', link: '/mgmt/pmp/光环国际PMP章节练习题/引论+环境.html' },
              { text: '人员', link: '/mgmt/pmp/光环国际PMP章节练习题/人员.html' },
              { text: '过程', link: '/mgmt/pmp/光环国际PMP章节练习题/过程.html' },
            ],
          },
          {
            text: '思维导图',
            link: '/mgmt/pmp/30张项目管理思维导图/30张项目管理思维导图.html',
          },
          {
            text: '备考资料',
            collapsed: true,
            items: [
              { text: '资料目录', link: '/mgmt/pmp/资料/' },
              { text: '十五至尊图', link: '/mgmt/pmp/资料/十五至尊图.html' },
              {
                text: '电子教材',
                link: '/mgmt/pmp/资料/1-电子教材/电子教材.html',
              },
              {
                text: 'PMPMAX 学习笔记',
                link: '/mgmt/pmp/资料/2-PMPMAX3.0学习笔记-配套《PMP备考宝典（第2版）》/2-PMPMAX3.0学习笔记-配套《PMP备考宝典（第2版）》.html',
              },
              {
                text: '冲刺串讲笔记',
                link: '/mgmt/pmp/资料/3-冲刺串讲学习笔记-配套《PMP通关一本通》/3-冲刺串讲学习笔记-配套《PMP通关一本通》.html',
              },
              {
                text: '做题技巧 36 计',
                link: '/mgmt/pmp/资料/4-知识点总结/PMP做题技巧36计.html',
              },
              {
                text: '考试过关口诀',
                link: '/mgmt/pmp/资料/4-知识点总结/PMP考试过关口诀/PMP考试过关口诀.html',
              },
            ],
          },
        ],
      },
      {
        text: '高项 (ISPM)',
        collapsed: false,
        items: [{ text: '信息系统项目管理师', link: '/mgmt/ispm/' }],
      },
    ],
  },

  {
    type: 'doc',
    dir: 'ops',
    title: '运维',
    linkPrefix: '/ops/',
    sidebarCollapsed: true,
    autoFrontmatter: false,
    sidebar: [
      { text: '运维总览', link: '/ops/' },
      {
        text: '主机运维',
        collapsed: false,
        items: [
          {
            text: 'Linux (Ubuntu)',
            collapsed: false,
            items: [
              { text: '总览', link: '/ops/linux/' },
              { text: '基本配置', link: '/ops/linux/基本配置/基本配置.html' },
              {
                text: '开发环境配置',
                link: '/ops/linux/基本配置/开发环境配置.html',
              },
              { text: '常见操作', link: '/ops/linux/常见操作/' },
              { text: '常见问题', link: '/ops/linux/常见问题/' },
            ],
          },
          { text: '树莓派', link: '/ops/raspberry-pi/' },
          {
            text: '宝塔面板',
            link: '/ops/bt/宝塔面板/认识宝塔面板.html',
          },
        ],
      },
      {
        text: '容器',
        collapsed: false,
        items: [
          { text: 'Docker 总览', link: '/ops/docker/' },
          { text: 'Docker Compose', link: '/ops/docker/docker-compose/' },
        ],
      },
      {
        text: '路由与网络',
        collapsed: false,
        items: [
          {
            text: 'OpenWrt',
            collapsed: true,
            items: [
              { text: '认识 OpenWrt', link: '/ops/openwrt/' },
              { text: '常用插件', link: '/ops/openwrt/plugins/' },
              { text: '使用（拨号等）', link: '/ops/openwrt/使用/' },
              {
                text: '红米 AX6000 刷固件',
                link: '/ops/openwrt/红米AX6000刷固件/',
              },
            ],
          },
          { text: 'Clash', link: '/ops/clash/' },
          { text: '内网穿透 · Natapp', link: '/ops/natapp/' },
          {
            text: 'VPN',
            collapsed: true,
            items: [
              { text: 'VPN 总览', link: '/ops/vpn/' },
              { text: 'ConfigVPN', link: '/ops/vpn/ConfigVPN.html' },
              { text: 'SoftEther VPN', link: '/ops/vpn/SoftEtherVPN.html' },
              {
                text: 'OpenVPN 服务 (Linux)',
                link: '/ops/linux/基本配置/OpenVPN服务.html',
              },
            ],
          },
        ],
      },
      {
        text: '存储',
        collapsed: false,
        items: [
          { text: '群晖 NAS 总览', link: '/ops/dsm/' },
          { text: '什么是 NAS', link: '/ops/dsm/什么是NAS.html' },
          {
            text: 'DSM 安装与使用',
            link: '/ops/dsm/群晖NAS系统（DSM）的安装和使用.html',
          },
        ],
      },
      {
        text: '安防与工具',
        collapsed: false,
        items: [
          {
            text: '海康威视 · NVR 外网映射',
            link: '/ops/hk/海康威视/硬盘录像机.html',
          },
          { text: 'Fast GitHub', link: '/ops/github/fast-github/' },
        ],
      },
    ],
  },

  {
    type: 'doc',
    dir: 'operation',
    title: '运营',
    linkPrefix: '/operation/',
    autoFrontmatter: false,
    sidebar: 'auto',
  },

  {
    type: 'doc',
    dir: 'music',
    title: '音乐',
    linkPrefix: '/music/',
    sidebarCollapsed: false,
    autoFrontmatter: false,
    sidebar: [
      {
        text: '日常入口',
        collapsed: false,
        items: dailyBrowseSidebar,
      },
      { text: '音乐总览', link: '/music/' },
      {
        text: '艺人',
        collapsed: false,
        items: [
          { text: 'KOKIA', link: '/music/KOKIA.html' },
          { text: 'Aimer', link: '/music/Aimer.html' },
          { text: 'BoA', link: '/music/BoA.html' },
          { text: 'Utada', link: '/music/Utada.html' },
          { text: '中岛美嘉', link: '/music/中岛美嘉.html' },
          { text: '平原绫香', link: '/music/平原绫香.html' },
          { text: '家入莉奥', link: '/music/家入莉奥.html' },
          { text: '泽野弘之', link: '/music/泽野弘之.html' },
          { text: '东方神起', link: '/music/东方神起.html' },
          { text: 'JYJ', link: '/music/JYJ.html' },
          { text: '2NE1', link: '/music/2NE1.html' },
          { text: '李宝蓝', link: '/music/李宝蓝.html' },
        ],
      },
      {
        text: '曲目随记',
        collapsed: true,
        items: [
          { text: '808', link: '/music/808.html' },
          { text: '嚣张', link: '/music/嚣张.html' },
          { text: 'sexy', link: '/music/sexy.html' },
          { text: '有点迷幻的 Rap', link: '/music/有点迷幻的Rap.html' },
        ],
      },
    ],
  },

  {
    type: 'doc',
    dir: 'photos',
    title: '相册',
    linkPrefix: '/photos/',
    autoFrontmatter: false,
    sidebar: [
      {
        text: '日常入口',
        collapsed: false,
        items: dailyBrowseSidebar,
      },
      { text: '相册', link: '/photos/' },
    ],
  },

  {
    type: 'doc',
    dir: 'others',
    title: '笔记',
    linkPrefix: '/others/',
    autoFrontmatter: false,
    sidebar: [
      { text: '笔记总览', link: '/others/' },
      {
        text: 'Obsidian',
        collapsed: false,
        items: [
          { text: '总览', link: '/others/obsidian/' },
          { text: 'Fast Note Sync', link: '/others/obsidian/fast-note-sync/' },
        ],
      },
      {
        text: '文档格式',
        collapsed: false,
        items: [
          { text: 'Markdown 总览', link: '/others/markdown/' },
          {
            text: '认识 Markdown',
            link: '/others/markdown/Markdown/认识Markdown.html',
          },
          {
            text: '认识 AsciiDoc',
            link: '/others/markdown/AsciiDoc/认识Asciidoc.html',
          },
        ],
      },
    ],
  },
]
