---
title: 芋道
---

基于 Spring Boot 的芋道项目（ruoyi-vue-pro）相关文档。

运行环境与部署关系：[芋道 · 运行环境](/environment/yudao/)

## 模块架构

`system` / `infra` 为必选，其余按业务启用。明细见 [模块说明](/dev/framework/yudao/modules/)。

```mermaid
---
config:
  theme: base
  themeVariables:
    primaryColor: "#f5f5f7"
    primaryTextColor: "#1d1d1f"
    primaryBorderColor: "#3c3c43"
    secondaryColor: "#ebebf0"
    tertiaryColor: "#ffffff"
    lineColor: "#6e6e73"
    mainBkg: "#f5f5f7"
    clusterBkg: "#fafafa"
    clusterBorder: "#d2d2d7"
  flowchart:
    useMaxWidth: true
    padding: 10
    nodeSpacing: 20
    rankSpacing: 36
---
flowchart TB
  admin[管理前端 Vue3] --> system[yudao-module-system]
  admin --> infra[yudao-module-infra]
  system --> infra
  admin --> optional[业务模块 · 可选]
  optional --> system
  optional --> infra
  optional --- member[member]
  optional --- bpm[bpm]
  optional --- report[report]
  optional --- mp[mp]
  optional --- pay[pay]
  optional --- mall[mall]
  optional --- crm[crm]
  optional --- erp[erp]
  optional --- ai[ai]
  optional --- iot[iot]
```

## 文档导航

- [入门与项目介绍](/dev/framework/yudao/guide/)
- [快速开始](/dev/framework/yudao/quick/)
- [模块说明](/dev/framework/yudao/modules/)
- [部署](/dev/framework/yudao/deploy/) / [应用部署](/dev/framework/yudao/deploy-app/)
- [常见问题](/dev/framework/yudao/problems/)
