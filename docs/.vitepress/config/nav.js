export default function sidebar() {
  return [
    { text: '指南', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
    { text: '配置', link: '/config/introduction', activeMatch: '/config/' },
    {
      text: '体系',
      items: [
        {
          text: 'TOGAF',
          link: '/system/togaf/什么是TOGAF？',
        },
        {
          text: 'Contributing',
          items: [
            {
              text: 'TOGAF',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md', 
            },
            {
              text: 'Contributing',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
            },
          ],
        },
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
              link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
            },
            {
              text: 'Contributing',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
            },
          ],
        },
        {
          text: '后端',
          items: [
            {
              text: 'PHP',
              link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
            },
            {
              text: 'Nest.js',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
            },
          ],
        },
        {
          text: '设计',
          items: [
            {
              text: 'Figma',
              link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
            },
            {
              text: 'Nest.js',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
            },
          ],
        },
        {
          text: '管理',
          items: [
            {
              text: 'PHP',
              link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
            },
            {
              text: 'Nest.js',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
            },
          ],
        },
        {
          text: '剪辑',
          items: [
            {
              text: 'Pr',
              link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
            },
            {
              text: 'Ps',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
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
