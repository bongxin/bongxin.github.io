export default function nav() {
  return [
    { text: 'AI', link: '/ai/AI/' },
    // {
    //   text: '例子',
    //   link: '/example/markdown-examples',
    //   activeMatch: '/zh/example/',
    // },
    {
      text: '开发',
      items: [
        {
          text: '前端',
          items: [
            {
              text: 'npm',
              link: '/skill/development/npm/npm',
            },
            {
              text: 'Vue',
              link: '/skill/development/vue/Vue/简介',
            },
          ],
        },
        {
          text: '后端',
          items: [
            {
              text: 'PHP',
              link: '/skill/development/php/PHP/认识PHP',
            },
          ],
        },
      ]
    }, {
      text: '设计',
      items: [
        {
          text: 'UI设计',
          items: [
            {
              text: 'Figma',
              link: '/skill/design/figma/Figma/认识Figma',
            },
            // {
            //   text: 'PS',
            //   link: '/skill/design/ps/PhotoShop/认识PS',
            // },
          ],
        },
        {
          text: 'UML画图',
          items: [
            {
              text: 'PlantUML',
              link: '/skill/design/uml/plantuml/PlantUML/认识PlantUML',
            },
            {
              text: 'Mermaid',
              link: '/skill/design/uml/mermaid/Mermaid/认识Mermaid.md',
            },
            {
              text: 'Gravizo',
              link: '/skill/design/uml/gravizo//Gravizo/认识Gravizo.md',
            },
          ],
        },
      ]
    }, {
      text: '管理',
      items: [
        {
          text: '项目管理',
          items: [
            {
              text: 'PMP',
              link: '/skill/management/pmp/PMP/认识PMP',
            },
            {
              text: 'CSMM',
              link: '/skill/management/csmm/CSMM/认识CSMM',
            },
          ],
        },
      ]
    }, 
    {
      text: '运维',
      items: [
        {
          text: '运维',
          items: [
            {
              text: '宝塔面板',
              link: '/skill/DevOps/bt/宝塔面板/认识宝塔面板',
            },
            {
              text: 'Linux',
              link: '/skill/DevOps/ubuntu/基本配置/基本配置',
            },
            {
              text: 'Clash',
              link: '/skill/DevOps/clash/',
            },
            {
              text: 'OpenWRT',
              link: '/skill/DevOps/openwrt/OpenWRT',
            },
          ],
        }
      ]
    }, 
    {
      text: '其他',
      items: [
        {
          text: '其他',
          items: [
            {
              text: 'Markdown',
              link: '/others/markdown/Markdown/认识Markdown',
            },
            {
              text: 'AsciiDoc',
              link: '/others/markdown/AsciiDoc/认识Markdown',
            },
            
            // {
            //   text: 'GitHub',
            //   link: '/skill/DevOps/github/GitHub/Fast GitHub',
            // },
            // {
            //   text: '树莓派',
            //   link: '/skill/DevOps/树莓派/树莓派',
            // },
            // {
            //   text: 'OpenWRT',
            //   link: '/skill/DevOps/openwrt/OpenWRT',
            // },
            // {
            //   text: 'Mac',
            //   link: '/skill/DevOps/openwrt/OpenWRT',
            // },
          ],
        },
      ]
    },
  ];
}
