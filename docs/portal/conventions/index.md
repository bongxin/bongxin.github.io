---
permalink: /conventions/
title: 站点约定
description: 本站内容展示、信息架构与维护约定
aside: true
outline: [2, 3]
readingTime: false
comments: false
contributors: false
lastUpdated: false
editLink: false
---

## Plume 优先 · 少改 CSS

本站基于 VuePress 2 + [vuepress-theme-plume](https://theme-plume.vuejs.press/)。展示、布局、嵌入优先用主题指南与配置，不自造等价 UI。

查阅：[指南](https://theme-plume.vuejs.press/guide/) · [配置](https://theme-plume.vuejs.press/config/)

| 需求 | 用法 |
|------|------|
| 相册瀑布流 | `::: card-masonry` |
| 艺人图卡 | `<ImageCard>` + `VPCardGrid` |
| 网站链接 / 音乐曲目 | `<LinkCard>` + `VPCardGrid`（仅此两处） |
| 应用访问 / 快捷入口 | Markdown 链接列表 |
| 站点导航 | Markmap |
| 表格全宽 | `::: table full-width` |
| 文章标题 | frontmatter `title`；正文从 `##` 起 |
| 视频 | `@[bilibili]` |
| 首页 | `doc-hero` + `features` |
| 卡片列数 | `<VPCardGrid :cols="{ sm:1, md:2, lg:3 }">` |

自定义样式由 `client.ts` 引入 `docs/.vuepress/styles/` 下的 `brand` / `home-hero` / `dark-button`（只覆盖 CSS 变量）；**不要**在 CSS 里 `@import` 同目录文件。不用 CSS 改布局或藏标题。

## 正文忌套话

正文只写给读者看的内容，不写实现说明。

不要写：左右栏提示、主题组件名、对齐某某站、如何启用某 markdown 开关等。约定写在本页或仓库规则里即可。交叉链接（如「见环境说明」）可以保留。

## 信息架构

顶栏顺序（尽量四字）：

1. 站点导航
2. 运行环境
3. 应用访问
4. 快捷入口
5. 网站链接
6. 设备资产
7. 版本号 → 更新日志 / 本页

音乐、相册、关于不进顶栏。页面标题与顶栏文案一致。

知识库保持一级目录，不大挪路径。门户在 `docs/portal/`，对外用短路径（如 `/map/`）。

## 静态资源（双轨）

| 类型 | 放哪 | 怎么写 |
|------|------|--------|
| Logo、门户图标、音乐/相册封面等跨页资源 | `docs/.vuepress/public/`（勿用 `docs/public`） | 绝对路径 `/music/…`、`/portal/…` |
| 单篇教程截图、配图 | 与 `.md` 同目录（或旁路 `images/`） | **必须** `./xxx.png`（裸写 `xxx.png` 会导致 Vite 构建失败） |

- 网页用图建议单张 ≤ 500KB；封面可更严。
- **PMP 等教材 PDF 暂保留并参与构建**；日后若要减部署体积再单独迁出。
- `npm run docs:check` 会拦截：死链、缺资源、裸相对资源路径，并对过大图片告警。

## 分支与发版

- **日常开发 / commit：只在 `plume`**，不要在 `main` 上直接改。
- **发版顺序（固定，勿颠倒）**：
  1. `npm run docs:check:build` 通过  
  2. 在 `plume` 写 [更新日志](/changelog/)、升版本（如需）、提交并打 tag `vX.Y.Z`  
  3. 将 `plume` 合并进 `main`  
  4. 再 `git push`（推 `main` 与 tag；建议同时推 `plume`）
- 线上以 **main** 为准：推送到 `main` 后 GitHub Actions 先 `docs:check` 再构建部署到 `gh-pages`。
- 可选：`git config core.hooksPath .githooks`，push 时自动跑门禁（不能代替发版前的完整检查）。

更新日志：`## vX.Y.Z` + 新增 / 优化 / 修复；与 `package.json` version、GitHub tag 一致（tag 带 `v` 前缀）。

## 约定维护

可复用的约定变更时，同步更新本页与仓库 `.cursor/rules/`（助手规则与站点约定保持一致）。一次性踩坑写开发记忆即可，不必上本页。

## 本地开发

改顶栏、`config.ts` 的 markdown/plugins、permalink、collections，或新启用图表 / Bilibili / 表格等之后，硬刷新往往无效，需 `npm run docs:clean-dev`（Node ≥ 22.18）。

- 快速检查：`npm run docs:check`
- 对齐 CI / 发版前：`npm run docs:check:build`
