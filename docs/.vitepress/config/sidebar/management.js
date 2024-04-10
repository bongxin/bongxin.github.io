export function sidebarPmp() {
  return [
    {
      text: 'PMP',
      collapsed: false,
      items: [
        { text: '什么是PMP', link: 'PMP/认识PMP' },
        { text: '学习计划', link: 'PMP/学习计划' },
        { text: '8.十五至尊图', link: 'PMP/十五至尊图' }
      ],
    },
  ];
}

export function sidebarCsmm() {
  return [
    {
      text: 'CSMM',
      collapsed: false,
      items: [
        { text: '什么是CSMM', link: 'CSMM/认识CSMM' }
      ],
    },
    {
      text: '治理',
      collapsed: false,
      items: [
        { text: '战略与治理', link: 'CSMM/战略与治理' },
        { text: '目标管理', link: 'CSMM/目标管理' }
      ],
    },
    {
      text: '开发与交付',
      collapsed: false,
      items: [
        { text: '需求', link: 'CSMM/开发与交付/需求' },
        { text: '设计', link: 'CSMM/开发与交付/设计' },
        { text: '开发', link: 'CSMM/开发与交付/开发' },
        { text: '测试', link: 'CSMM/开发与交付/测试' },
        { text: '部署', link: 'CSMM/开发与交付/部署' },
        { text: '服务', link: 'CSMM/开发与交付/服务' },
        { text: '开源应用', link: 'CSMM/开发与交付/开源应用' },
      ],
    },
    {
      text: '管理与支持',
      collapsed: false,
      items: [
        { text: '项目策划', link: 'CSMM/管理与支持/项目策划' },
        { text: '项目监控', link: 'CSMM/管理与支持/项目监控' },
        { text: '项目结项', link: 'CSMM/管理与支持/项目结项' },
        { text: '风险管理', link: 'CSMM/管理与支持/风险管理' },
        { text: '质量保证', link: 'CSMM/管理与支持/质量保证' },
        { text: '配置管理', link: 'CSMM/管理与支持/配置管理' },
        { text: '供应商管理', link: 'CSMM/管理与支持/供应商管理' },
      ],
    },
    {
      text: '组织管理',
      collapsed: false,
      items: [
        { text: '过程管理', link: 'CSMM/组织管理/过程管理' },
        { text: '人员能力管理', link: 'CSMM/组织管理/人员能力管理' },
        { text: '组织资源管理', link: 'CSMM/组织管理/组织资源管理' },
        { text: '过程能力管理', link: 'CSMM/组织管理/过程能力管理' },
      ],
    },
  ];
}