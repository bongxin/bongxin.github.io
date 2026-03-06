export default function nav() {
  return [
    {
      text: "开发",
      items: [
        {
          text: "💻 前端生态",
          items: [
            { text: "Vue 3 全家桶", link: "/dev/web/vue/" },
          ],
        },
        {
          text: "⚙️ 后端生态",
          items: [
            { text: "Java (SpringBoot)", link: "/dev/java/spring-boot/" },
            { text: "PHP (WordPress)", link: "/dev/php/wordpress/" },
          ],
        },
        {
          text: "📦 工程与工具",
          items: [
            { text: "NPM 包管理", link: "/dev/npm/" },
            { text: "通用框架/芋道(ruoyi-vue-pro)", link: "/dev/framework/yudao/" },
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
            { text: "Figma", link: "/design/figma/" },
          ],
        },
        {
          text: "UML画图",
          items: [
            { text: "PlantUML", link: "/design/uml/plantuml/PlantUML/认识PlantUML" },
            { text: "Mermaid", link: "/design/uml/mermaid/Mermaid/认识Mermaid" },
            { text: "Gravizo", link: "/design/uml/gravizo/Gravizo/认识Gravizo" },
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
              link: "/mgmt/pmp/PMP/认识PMP",
            },
            {
              text: "CSMM",
              link: "/mgmt/csmm/CSMM/认识CSMM",
            },
            {
              text: "软考-高项",
              link: "/mgmt/ispm/信息系统项目管理师/AI生成工作分解结构",
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
              link: "/ops/linux/基本配置/基本配置",
            },
            {
              text: "Docker",
              link: "/ops/docker/DockerCompose",
            },
            {
              text: "OpenWRT",
              link: "/ops/openwrt/OpenWRT",
            },
            {
              text: "DSM",
              link: "/ops/dsm/群晖NAS系统（DSM）的安装和使用",
            },
            {
              text: "其他",
              link: "/ops/others/内网穿透",
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
    },
    {
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
    },
    {
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
