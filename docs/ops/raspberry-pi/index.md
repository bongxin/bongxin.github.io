---
aside: 'right'
---

# 树莓派（Raspberry Pi）

树莓派是由英国树莓派基金会推出的单板计算机（SBC），价格低廉、体积小巧，广泛用于教育、DIY、家庭服务器、物联网和边缘计算等场景。

## 一、树莓派是什么

树莓派是一系列基于 ARM 的信用卡大小的电脑板，具备 GPIO 引脚、USB、HDMI 等接口，可运行 Linux（如 Raspberry Pi OS）。其初衷是让更多人能以低成本接触编程与计算机硬件，现已发展成为创客、运维和嵌入式开发中的常用平台。

## 二、常见型号与选型

| 系列 | 特点 | 适用场景 |
|------|------|----------|
| **Raspberry Pi 5** | 性能最强，PCIe、双 4K 输出 | 桌面替代、小型服务器 |
| **Raspberry Pi 4** | 多代同堂，内存 1GB～8GB | 家用服务器、软路由、媒体中心 |
| **Raspberry Pi 3 / Zero 2 W** | 功耗低、带无线 | 物联网、监控、便携设备 |
| **Raspberry Pi Zero / Pico** | 极小体积、超低成本 | 嵌入式、穿戴、简单控制 |

选型时可优先考虑：是否需要无线（Wi‑Fi/蓝牙）、内存大小、GPIO 与扩展需求，以及供电与散热。

## 三、系统与首次使用

### 官方系统 Raspberry Pi OS

- 基于 **Debian**，与 Ubuntu 同源，使用 **apt** 包管理。
- 镜像下载：[Raspberry Pi OS – Raspberry Pi](https://www.raspberrypi.com/software/operating-systems/)。
- 烧录工具推荐：**Raspberry Pi Imager**（支持多系统、预配置 Wi‑Fi 与 SSH）。

### 首次启动建议

1. 使用 Imager 时勾选「设置」：开启 **SSH**、设置主机名、用户名与密码、配置 **Wi‑Fi**（可选）。
2. 若未预配置，将存有 `ssh` 或 `wpa_supplicant.conf` 的 U 盘插入树莓派，或接显示器键盘进行首次配置。
3. 通过 `ssh pi@<树莓派IP>` 或默认主机名 `raspberrypi.local` 登录。

::: tip 与 Ubuntu 的相似处
Raspberry Pi OS 使用 systemd、apt、UFW 等，多数 [Linux 常见操作](/ops/linux/常见操作/常见操作) 与 [基本配置](/ops/linux/基本配置/基本配置) 思路可直接沿用。
:::

## 四、常见用途

- **家庭服务器 / NAS**：挂载硬盘、跑 Docker、Samba/NFS 共享。
- **软路由 / 旁路由**：配合 OpenWRT 或自建网关，实现代理、去广告等。
- **智能家居与物联网**：Home Assistant、Node-RED，或通过 GPIO 控制传感器与继电器。
- **学习与开发**：Python/GPIO 编程、K8s 节点、CI Runner、小型数据库与 Web 服务。
- **媒体中心**：Kodi、Jellyfin 等，接电视或显示器播放。

## 五、常用资源

| 资源 | 链接 |
|------|------|
| 官网与文档 | [raspberrypi.com](https://www.raspberrypi.com/documentation/) |
| 镜像与 Imager | [Raspberry Pi OS 下载与安装](https://www.raspberrypi.com/software/) |
| GPIO 与硬件 | [pinout.xyz](https://pinout.xyz/)（引脚说明） |
| 论坛与社区 | [Raspberry Pi Forums](https://forums.raspberrypi.com/) |

后续可在本目录下按主题新增子页（如「系统安装与备份」「Docker 与 Home Assistant」「GPIO 入门」等），与 [Linux](/ops/linux/)、[OpenWRT](/ops/openwrt/) 等运维文档配合使用。
