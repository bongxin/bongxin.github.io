---
order: -1
---

# Vue 3

本目录整理 Vue 3 及相关生态的笔记与用法。

## 安装

### 创建项目（推荐）

使用官方脚手架 [create-vue](https://github.com/vuejs/create-vue)（基于 Vite）：

```sh
npm create vue@latest
```

按提示选择项目名、TypeScript、Router、Pinia、测试与规范工具等即可生成工程。

若只需「Vite + Vue」最小模板，也可用：

```sh
npm create vite@latest my-app -- --template vue
cd my-app && npm install && npm run dev
```

## 导航

| 分类       | 说明 |
| ---------- | ---- |
| [Element Plus](/dev/web/vue/element-plus/) | 桌面端 UI 组件库 |
| [Vant](/dev/web/vue/vant/) | 移动端 UI 组件库 |
| [VitePress](/dev/web/vue/vitepress/) | 静态站点 / 文档生成 |
| [VueUse](/dev/web/vue/vue-use/) | Composition API 工具集 |

## 参考

- [Vue 3 官方文档](https://cn.vuejs.org/)
- [create-vue（项目脚手架）](https://github.com/vuejs/create-vue)
- [Vite 官方文档](https://cn.vitejs.dev/)
