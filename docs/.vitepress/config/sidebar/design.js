export function sidebarFigma() {
  return [
    {
      text: 'Figma',
      collapsed: false,
      items: [{ text: '什么是Figma', link: 'Figma' }],
    },
  ];
}

export function sidebarUML() {
  return [
    {
      text: '绘图工具',
      collapsed: false,
      items: [
        { text: 'Mermaid', link: 'mermaid/Mermaid/认识Mermaid' },
        { text: '(推荐)PlantUML', link: 'plantuml/PlantUML/认识PlantUML' },
        { text: 'Graphviz', link: 'graphviz/Graphviz/认识Graphviz' },
        { text: '绘图引擎Gravizo', link: 'gravizo/Gravizo/认识Gravizo' },
      ],
    },
    {
      text: 'Mermaid',
      collapsed: false,
      items: [{ text: 'Mermaid', link: 'mermaid/Mermaid/认识Mermaid' }],
    },
    {
      text: 'PlantUML',
      collapsed: false,
      items: [{ text: 'PlantUML', link: 'plantuml/PlantUML/认识PlantUML' }],
    },
    // {
    //   text: 'Graphviz',
    //   collapsed: false,
    //   items: [{ text: 'Graphviz', link: 'graphviz/Graphviz/认识Graphviz' }],
    // },
  ];
}
