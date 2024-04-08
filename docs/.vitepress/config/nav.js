export default function nav() {
  return [
    { text: '主页', link: '/' },
    {
      text: '例子',
      link: '/example/markdown-examples',
      activeMatch: '/zh/example/',
    },
    {
      text: '技能',
      items: [
        {
          text: '前端',
          items: [
            {
              text: 'npm',
              link: '/skill/development/npm/npm/0.简介',
            },
            {
              text: 'Vue',
              link: '/skill/development/vue/Vue/简介',
            },
            {
              text: '框架',
              link: '/skill/development/framework/若依/0.改版',
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
            {
              text: 'Java',
              link: '/skill/development/java/SpringBoot/部署项目',
            },
          ],
        },
        {
          text: '设计',
          items: [
            {
              text: 'Figma',
              link: '/skill/design/figma/Figma/认识Figma',
            },
            {
              text: 'PS',
              link: '/skill/design/ps/PhotoShop/认识PS',
            },
          ],
        },
        {
          text: '管理',
          items: [
            {
              text: 'PMP',
              link: '/skill/management/pmp/PMP/认识PMP',
            },
          ],
        },
        {
          text: '运维',
          items: [
            {
              text: '宝塔面板',
              link: '/skill/operation/bt/宝塔面板/认识宝塔面板',
            },
            {
              text: 'GitHub',
              link: '/skill/operation/github/GitHub/Fast GitHub',
            },
            {
              text: 'Ubuntu',
              link: '/skill/operation/ubuntu/基本配置/基本配置',
            },
            {
              text: '树莓派',
              link: '/skill/operation/树莓派/树莓派',
            },
            {
              text: 'OpenWRT',
              link: '/skill/operation/openwrt/OpenWRT',
            },
          ],
        },
      ],
    },
  ];
}
