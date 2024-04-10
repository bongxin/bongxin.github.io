---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "BongXin"
  text: "Different Me"
  tagline: My great project tagline
  image:
    src: /logo.svg
    alt: VitePress
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples
features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

```mermaid
flowchart TD
  Start --> Stop
```
### Title <Badge type="info" text="default" />
### Title <Badge type="tip" text="^1.9.0" />
### Title <Badge type="warning" text="beta" />
### Title <Badge type="danger" text="caution" />

```mermaid
graph TD
    展现层 --> 通讯层;
    通讯层 --> 服务层;
    服务层 --> 数据层;

    subgraph 展现层
        UI[用户界面]
        WebApp[Web应用]
        MobileApp[移动应用]
    end

    subgraph 通讯层
        API[API网关]
        MessageQueue[消息队列]
    end

    subgraph 服务层
        Microservices[微服务]
        AuthService[认证服务]
    end

    subgraph 数据层
        DB[数据库]
        Cache[缓存]
        FileSystem[文件系统]
    end

```