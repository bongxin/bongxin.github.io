---
# layout: home
aside: 'right'
# sidebar: false
---

# 认识Mermaid
官网地址：[https://mermaid.js.org/](https://mermaid.js.org/)

Mermaid Live Editor: [https://mermaid.live/](https://mermaid.live/)

## 示例1：mermaid插件方式实现

### 效果
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

### 代码
::: tip 提示
需要用 \`\`\`mermaid和 \`\`\`包含起来
:::

``` markdown
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

## 示例2：mermaid图片链接方式实现

### 效果
[![](https://mermaid.ink/img/pako:eNpdj7sOwjAMRX8l8oiahTEDC6xMHQmD1Zg2Uh4odSqhqv9OSIRA9XR0fG3ZKwzRECiYGZkuFseEXi5HHUSp2-EupDyJnq1zTVWssjT36hoXG8ZmG-_H_-w54Tw1W_G7FDrwlDxaU85aPwENPJEnDaqgoQdmxxp02EoUM8f-FQZQnDJ1kJ_m90iT2xvafEcK?type=png)](https://mermaid.live/edit#pako:eNpdj7sOwjAMRX8l8oiahTEDC6xMHQmD1Zg2Uh4odSqhqv9OSIRA9XR0fG3ZKwzRECiYGZkuFseEXi5HHUSp2-EupDyJnq1zTVWssjT36hoXG8ZmG-_H_-w54Tw1W_G7FDrwlDxaU85aPwENPJEnDaqgoQdmxxp02EoUM8f-FQZQnDJ1kJ_m90iT2xvafEcK)

### 代码
``` markdown
[![](https://mermaid.ink/img/pako:eNpdj7sOwjAMRX8l8oiahTEDC6xMHQmD1Zg2Uh4odSqhqv9OSIRA9XR0fG3ZKwzRECiYGZkuFseEXi5HHUSp2-EupDyJnq1zTVWssjT36hoXG8ZmG-_H_-w54Tw1W_G7FDrwlDxaU85aPwENPJEnDaqgoQdmxxp02EoUM8f-FQZQnDJ1kJ_m90iT2xvafEcK?type=png)](https://mermaid.live/edit#pako:eNpdj7sOwjAMRX8l8oiahTEDC6xMHQmD1Zg2Uh4odSqhqv9OSIRA9XR0fG3ZKwzRECiYGZkuFseEXi5HHUSp2-EupDyJnq1zTVWssjT36hoXG8ZmG-_H_-w54Tw1W_G7FDrwlDxaU85aPwENPJEnDaqgoQdmxxp02EoUM8f-FQZQnDJ1kJ_m90iT2xvafEcK)
```