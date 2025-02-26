export default function nav() {
  return [
    { text: "AI", link: "/ai/AI/" },
    // {
    //   text: '例子',
    //   link: '/example/markdown-examples',
    //   activeMatch: '/zh/example/',
    // },
    {
      text: "开发",
      items: [
        {
          text: "前端",
          items: [
            {
              text: "npm",
              link: "/skill/development/npm/npm",
            },
            {
              text: "Vue",
              link: "/skill/development/vue/Vue/简介",
            },
          ],
        },
        {
          text: "后端",
          items: [
            {
              text: "PHP",
              link: "/skill/development/php/PHP/认识PHP",
            },
            {
              text: "Java",
              link: "/skill/development/java/yudao/guide",
            },
          ],
        },
      ],
    },
    {
      text: "设计",
      items: [
        {
          text: "UI设计",
          items: [
            {
              text: "Figma",
              link: "/skill/design/figma/Figma/认识Figma",
            },
            // {
            //   text: 'PS',
            //   link: '/skill/design/ps/PhotoShop/认识PS',
            // },
          ],
        },
        {
          text: "UML画图",
          items: [
            {
              text: "PlantUML",
              link: "/skill/design/uml/plantuml/PlantUML/认识PlantUML",
            },
            {
              text: "Mermaid",
              link: "/skill/design/uml/mermaid/Mermaid/认识Mermaid.md",
            },
            {
              text: "Gravizo",
              link: "/skill/design/uml/gravizo//Gravizo/认识Gravizo.md",
            },
          ],
        },
      ],
    },
    {
      text: "管理",
      items: [
        {
          text: "项目管理",
          items: [
            {
              text: "PMP",
              link: "/skill/management/pmp/PMP/认识PMP",
            },
            {
              text: "CSMM",
              link: "/skill/management/csmm/CSMM/认识CSMM",
            },
          ],
        },
      ],
    },
    {
      text: "运维",
      items: [
        {
          text: "运维",
          items: [
            {
              text: "Linux",
              link: "/skill/DevOps/ubuntu/基本配置/基本配置",
            },
            {
              text: "Docker",
              link: "/skill/DevOps/docker/DockerCompose",
            },
            {
              text: "OpenWRT",
              link: "/skill/DevOps/openwrt/OpenWRT",
            },
            {
              text: "DSM",
              link: "/skill/DevOps/dsm/群晖NAS系统（DSM）的安装和使用",
            },
            {
              text: "其他",
              link: "/skill/DevOps/others/内网穿透",
            },
          ],
        },
      ],
    },
    {
      text: "运营",
      items: [
        {
          text: "草料二维码",
          link: "/skill/operation/草料微信二维码生成器",
        },
      ],
    },{
      text: "音乐",
      items: [
        {
          text: "治愈",
          link: "/music/KOKIA.html#i-found-the-love-live-2015-和声",
        },
        {
          text: "鼓舞",
          link: "/music/BoA.html#only-one",
        },
        {
          text: "迷幻",
          link: "/music/有点迷幻的Rap.html#礼拜日-life-goes-on",
        },
        {
          text: "性感",
          link: "/music/sexy.html#Under%20The%20Influence",
        },
      ],
    },{
      text: "其他",
      items: [
        {
          text: "其他",
          items: [
            {
              text: "Markdown",
              link: "/others/markdown/Markdown/认识Markdown",
            },
            {
              text: "AsciiDoc",
              link: "/others/markdown/AsciiDoc/认识Markdown",
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
      ],
    },
  ];
}
