---
name: yudao_repos_dev_memory
description: 芋道后端/前端本地仓库路径、origin/upstream 远程约定、与官方同步及推送到自己 GitHub 的流程
---

## 开发要点

- 本地根目录：`/home/bongxin/Code/yudao/`（已从 `~/tmp/*-official` 迁出）
  - 后端：`ruoyi-vue-pro/`
  - 前端：`yudao-ui-admin-vben/`
  - 总说明：`/home/bongxin/Code/yudao/README.md`
- 远程约定（两仓一致）：
  - **`origin`** → 自己的 GitHub（日常 push/pull）
  - **`upstream`** → 官方（只 fetch/merge；`push` URL 已设为 `no_push` 防误推）
- 工作分支统一 **`main`**（跟踪 `origin/main`）；官方默认多为 `master`，同步时合并 `upstream/master`
- 同步脚本：各仓 `scripts/sync-upstream.sh`（要求工作区干净 → fetch upstream → merge → push origin）
- **后端已解档并推送成功**（2026-09-19）：`origin/main` = `01a0eaf573`（force-with-lease）。GitHub 仅警告 `yudao-admin-ui/.../Mockitt-win32-x64-zh-1.1.7.exe` 约 78MB（>50MB 建议阈值，未超 100MB 硬限制），推送已完成，不必为此重推。
- 另有归档仓 `bongxin/yudao-backend`（同样只读、旧 tip），勿再当主仓
- 前端 `bongxin/yudao-ui-admin-vben` 正常可推；本地 `main` 已与 `origin/main` 同步；有未提交改动 `apps/web-antd/.env.production`（勿把密钥提交）
- **开发环境模块（2026-09-19）**：`~/Code/yudao/ruoyi-vue-pro` 已在根 `pom` 与 `yudao-server/pom` 打开 member/bpm/report/mp/pay/mall/crm/erp/iot/mes/wms/hrm/fms/pms/im；`application-local.yaml` 已去掉 Quartz 排除。jar 已部署到 `.103` `/opt/yudao-ct-deploy`，堆 `-Xmx2048m`。
- **AI 模块未编入**：当前 `master` 是 Spring Boot 2.7 / JDK 8，`yudao-module-ai` 源码用了 Spring 6（`HttpStatusCode`、`jakarta`、record），与 BOM 不兼容。菜单仍会提示已禁用，需切 `master-jdk17` 依赖体系后再开。
- **IoT 时序**：`TDengineTableInitRunner` 已去掉 `System.exit`（否则未装 TDengine 时整站退出）。产品/设备等 MySQL 接口可用；设备消息需另起 TDengine（`jdbc:TAOS-WS`，配置见 `application-local.yaml` 注释）。
- **表结构**：官方附件 SQL 只覆盖 bpm/member/mp/pay/mall/report。其余模块按 `*DO.java` 生成了 MySQL 表，并补了缺失列（尤其 `tenant_id`）。字段长度/索引不是官方脚本，列表能开，复杂写入若报缺列再按实体补。


## 改动涉及的文件

- `/home/bongxin/Code/yudao/README.md`
- `/home/bongxin/Code/yudao/ruoyi-vue-pro/`（远程 origin/upstream、分支 main、scripts/sync-upstream.sh）
- `/home/bongxin/Code/yudao/yudao-ui-admin-vben/`（分支 main、scripts/sync-upstream.sh）
