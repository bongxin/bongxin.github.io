---
title: PVE 创建 dev-yudao（LXC）
aside: true
outline: [2, 3]
---

芋道开发用 LXC。宿主机：[PVE](https://192.168.31.2:8006/) · 环境：[芋道 · 运行环境](/environment/yudao/)。

实装路径：先建模板 **`tpl-yudao`（VMID 102）**，再链接克隆出 **`dev-yudao`（103）** / **`test-yudao`（104）**。IP 末段 = VMID。

## 下载 CT 模板

1. PVE → **local (pve)** → **CT Templates** → **Templates**。
2. 搜索并下载 Ubuntu 模板（实装可用 `ubuntu-26.04-standard`；若求稳可改用 **24.04 LTS**）。

## 创建模板容器（tpl-yudao）

右上角 **Create CT**，建议参数：

| 项 | 建议 |
|----|------|
| VMID / Hostname | `102` / `tpl-yudao` |
| Password | root 口令自管，勿写入公开仓 |
| Template | 上一步 Ubuntu 模板 |
| Root Disk | **local-zfs**，约 **15GB** |
| CPU | **2** Cores |
| Memory | **4096 MB** |
| Network | 桥接 **vmbr0**；静态 **`192.168.31.102/24`**，网关 `.1` |
| Features | 勾选 **Nesting**（`nesting=1`） |

创建后可转为模板，或保持为「母本 CT」供链接克隆。

## 链接克隆开发 / 测试

| 目标 | VMID | Hostname | IP |
|------|------|----------|-----|
| 开发 | 103 | `dev-yudao` | `192.168.31.103/24` |
| 测试 | 104 | `test-yudao` | `192.168.31.104/24` |

克隆时同样开启 Nesting；磁盘落在 **local-zfs**。

## 系统初始化（每个 CT）

```bash
sudo apt update && sudo apt upgrade -y
```

国内源可按本机习惯改为 TUNA / 阿里云等。

### 安装 Docker

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
sudo usermod -aG docker "$USER"
# 重新登录或重启容器后再免 sudo 使用 docker
```

务必已开 Nesting，否则 Docker 易异常。开发机建议内存升到 **8GB**、磁盘 **≥40GB** 再跑完整 Compose 构建。

### 应用部署（开发）

代码可从本机 `bernsine` 同步；后端官方 Compose：`ruoyi-vue-pro/script/docker`。

| 服务 | 端口（宿主机映射） |
|------|-------------------|
| 管理前端 | `8080` |
| API | `48080` |
| MySQL | `3306` |
| Redis | `6379` |

口令仅本地保管；公开文档写 `<your-password>`。

## 实装记录

| 项 | 内容 |
|----|------|
| 模板 | `tpl-yudao` · VMID `102` · `192.168.31.102` |
| 开发 | `dev-yudao` · VMID `103` · `192.168.31.103` · 2 核 / 4GB / 15GB · Nesting |
| 测试 | `test-yudao` · VMID `104` · `192.168.31.104` · 同规格 |
| 状态 | CT 已建；Docker / 应用部署进行中 |

总览见 [Proxmox VE](/ops/proxmox/)。
