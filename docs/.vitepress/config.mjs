import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

import { imgSize } from "@mdit/plugin-img-size";

import nav from "./config/nav";
import sidebar from "./config/sidebar";

export default withMermaid(
  defineConfig({
    title: "BongXin",
    description: "个人的知识库",
    themeConfig: {
      logo: "/logo.svg",
      nav: nav(),
      sidebar: sidebar(),
      editLink: {
        pattern:
          "https://github.com/bongxin/bongxin.github.io/edit/main/docs/:path",
        text: "在 GitHub 上编辑此页面",
      },

      footer: {
        message: "个人博客",
        copyright: `版权所有 © 2019-${new Date().getFullYear()} BongXin`,
      },

      docFooter: {
        prev: "上一页",
        next: "下一页",
      },

      outline: {
        label: "页面导航",
        level: [2, 3],
      },

      lastUpdated: {
        text: "最后更新于",
        formatOptions: {
          dateStyle: "short",
          timeStyle: "medium",
        },
      },

      socialLinks: [
        // {
        //   icon: 'github',
        //   link: 'https://github.com/bongxin/bongxin.github.io',
        // },
        {
          icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48c0-.63.478-1.218 1.152-1.218q.03 0 .058.003l.031.003A6.84 6.84 0 0 0 8 1.137A6.86 6.86 0 0 0 2.266 4.23c.16.005.313.009.442.009c.717 0 1.828-.087 1.828-.087c.37-.022.414.521.044.565c0 0-.371.044-.785.065l2.5 7.434l1.5-4.506l-1.07-2.929c-.369-.022-.719-.065-.719-.065c-.37-.022-.326-.588.043-.566c0 0 1.134.087 1.808.087c.718 0 1.83-.087 1.83-.087c.37-.022.413.522.043.566c0 0-.372.043-.785.065l2.48 7.377l.684-2.287l.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.86 6.86 0 0 0 3.868 6.176L1.73 5.206A6.8 6.8 0 0 0 1.137 8"/><path d="M6.061 14.583L8.121 8.6l2.109 5.78q.02.05.049.094a6.85 6.85 0 0 1-4.218.109m7.96-9.876q.046.328.047.706c0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z"/><path fill-rule="evenodd" d="M0 8c0-4.411 3.589-8 8-8s8 3.589 8 8s-3.59 8-8 8s-8-3.589-8-8m.367 0c0 4.209 3.424 7.633 7.633 7.633S15.632 12.209 15.632 8C15.632 3.79 12.208.367 8 .367C3.79.367.367 3.79.367 8"/></g></svg>' },
          link: "https://www.bongxin.com.cn/links",
        },
        {
          icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1.19em" height="1em" viewBox="0 0 2048 1728"><path fill="currentColor" d="M580 429q0-41-25-66t-66-25q-43 0-76 25.5T380 429q0 39 33 64.5t76 25.5q41 0 66-24.5t25-65.5m743 507q0-28-25.5-50t-65.5-22q-27 0-49.5 22.5T1160 936q0 28 22.5 50.5t49.5 22.5q40 0 65.5-22t25.5-51m-236-507q0-41-24.5-66T997 338q-43 0-76 25.5T888 429q0 39 33 64.5t76 25.5q41 0 65.5-24.5T1087 429m635 507q0-28-26-50t-65-22q-27 0-49.5 22.5T1559 936q0 28 22.5 50.5t49.5 22.5q39 0 65-22t26-51m-266-397q-31-4-70-4q-169 0-311 77T851.5 820.5T770 1108q0 78 23 152q-35 3-68 3q-26 0-50-1.5t-55-6.5t-44.5-7t-54.5-10.5t-50-10.5l-253 127l72-218Q0 933 0 646q0-169 97.5-311t264-223.5T725 30q176 0 332.5 66t262 182.5T1456 539m592 561q0 117-68.5 223.5T1794 1517l55 181l-199-109q-150 37-218 37q-169 0-311-70.5T897.5 1364T816 1100t81.5-264T1121 644.5t311-70.5q161 0 303 70.5t227.5 192T2048 1100"/></svg>' },
          link: "https://www.bongxin.com.cn/circle/square",
        },
      ],

      search: {
        provider: "local",
      },

      // lightModeSwitchTitle: '切换到浅色模式',
      // darkModeSwitchTitle: '切换到深色模式',
    },

    appearance: false, // 关闭主题切换按钮
    markdown: {
      config: (md) => {
        // 使用更多的 Markdown-it 插件！
        md.use(imgSize);
      },
    },
    mermaid: {
      //mermaidConfig !theme here works for ligth mode since dark theme is forced in dark mode
    },
  })
);
