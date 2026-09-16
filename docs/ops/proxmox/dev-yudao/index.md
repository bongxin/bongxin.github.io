---
title: PVE 创建 dev-yudao（LXC）
aside: true
outline: [2, 3]
---

芋道开发用 LXC 容器。宿主机：[PVE](https://192.168.31.2:8006/) · 芋道文档：[芋道](/dev/framework/yudao/) · 环境说明：[芋道 · 运行环境](/environment/yudao/)。

## 下载 CT 模板

1. PVE → **local (pve)** → **CT Templates** → **Templates**。
2. 搜索并下载 Ubuntu 模板（实装可用 `ubuntu-26.04-standard`；若求稳可改用 **24.04 LTS**）。

## 创建容器

右上角 **Create CT**，建议参数：

| 项 | 建议 |
|----|------|
| Hostname | `dev-yudao` |
| Password | root 口令自管，勿写入公开仓 |
| Template | 上一步下载的 Ubuntu 模板 |
| Root Disk | **local-zfs**，约 **15GB** |
| CPU | **2** Cores |
| Memory | **4096 MB** |
| Network | 桥接 **vmbr0**；建议静态 IP，实装示例 **`192.168.31.101`** |
| Features | 勾选 **Nesting**（`nesting=1`），便于容器内跑 Docker；按需 Keyctl |

确认后 **完成**，可勾选创建后启动。

## 系统初始化

进入容器 Shell 或 SSH 后：

```bash
sudo apt update && sudo apt upgrade -y
```

国内源可按本机习惯改为 TUNA / 阿里云等（以系统实际 `sources` 文件为准）。

### 安装 Docker

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
sudo usermod -aG docker "$USER"
# 重新登录或重启容器后再免 sudo 使用 docker
```

创建时务必已开 Nesting，否则 Docker 易异常。

### MySQL / Redis（开发用）

口令请换成自己的，勿把真实口令写进公开文档：

```bash
mkdir -p ~/docker-data/{mysql,redis}

docker run -d --name yudao-mysql \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD='<your-password>' \
  -v ~/docker-data/mysql:/var/lib/mysql \
  mysql:8.0 \
  --character-set-server=utf8mb4 \
  --collation-server=utf8mb4_unicode_ci

docker run -d --name yudao-redis \
  -p 6379:6379 \
  redis:7-alpine
```

### JDK

芋道常用 JDK 17，以项目 `pom.xml` 为准：

```bash
sudo apt install -y openjdk-17-jdk
java -version
```

## 实装记录

| 项 | 内容 |
|----|------|
| Hostname | dev-yudao（以创建时为准） |
| IP | `192.168.31.101` |
| 规格 | 2 核 / 4GB / 15GB · Nesting |
| 角色 | 芋道开发调试 |

测试环境 LXC、生产应用 / 数据 KVM 规划见 [Proxmox VE 总览](/ops/proxmox/)。
