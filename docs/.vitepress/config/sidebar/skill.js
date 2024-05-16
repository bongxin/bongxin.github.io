export function sidebarNpm() {
  return [
    {
      text: 'npm',
      collapsed: false,
      items: [
        { text: '什么是npm', link: 'npm/npm' },
        { text: 'npm包推荐', link: 'npm/npm包推荐' },
        { text: '什么是 nvm', link: 'npm/nvm' },
        { text: '什么是 nrm', link: 'npm/nrm' },
      ],
    },
    { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' },
  ];
}

export function sidebarPhp() {
  return [
    {
      text: 'PHP',
      collapsed: false,
      items: [
        { text: '什么是PHP', link: 'PHP' }
      ],
    },
    {
      text: 'Wordpress',
      collapsed: false,
      items: [
        { text: 'Wordpress', link: 'npm/npm' },
      ],
    },

    {
      text: 'B2 Pro',
      collapsed: false,
      items: [
        { text: 'B2 Pro', link: 'npm/npm包推荐' },
      ],
    },
    {
      text: '子比主题',
      collapsed: false,
      items: [
        { text: '子比主题', link: 'npm/npm包推荐' },
      ],
    },
    {
      text: '点大商城',
      collapsed: false,
      items: [
        { text: '点大商城', link: 'npm/npm包推荐' },
      ],
    },
  ];
}

export function sidebarVue() {
  return [
    {
      text: 'Vue',
      collapsed: false,
      items: [
        { text: '什么是Vue', link: 'Vue/简介' }
      ],
    },
    {
      text: 'Element Plus',
      collapsed: false,
      items: [
        { text: 'Element Plus', link: 'Element Plus/简介' }
      ],
    },
    {
      text: 'VitePress',
      collapsed: false,
      items: [
        { text: '什么是Vue', link: 'VitePress/简介' }
      ],
    },
    {
      text: 'VueUse',
      collapsed: false,
      items: [
        { text: '什么是VueUse', link: 'VueUse/简介' }
      ],
    },
    
    {
      text: 'Vant',
      collapsed: false,
      items: [
        { text: 'Vant', link: 'Vant/简介' }
      ],
    },
  ];
}