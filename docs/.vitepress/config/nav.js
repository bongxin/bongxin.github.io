export default function sidebar() {
  return [
    {
      text: '体系',
      items: [
        {
          text: 'TOGAF',
          link: '/system/togaf/什么是TOGAF？',
        }
      ],
    },
    {
      text: '技能',
      items: [
        {
          text: '前端',
          items: [
            {
              text: 'Vue',
              link: '/skill/development/vue/VitePress/为什么用TOGAF',
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
              text: 'Nest.js',
              link: '/skill/development/nestjs/NestJS/认识NestJS',
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
          text: '剪辑',
          items: [
            {
              text: 'PR',
              link: '/skill/editing/pr/认识Premiere Pro',
            },
          ],
        },
      ],
    },
    {
      text: '伯恩西因',
      link: '/guide/what-is-vitepress',
      activeMatch: '/bernsine/',
    },
  ];
}
