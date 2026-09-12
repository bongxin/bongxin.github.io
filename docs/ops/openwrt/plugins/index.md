---
title: OpenWrt 常用插件
---

本文汇总 OpenWrt 上常用第三方/额外插件的**包名**与用途，便于在「系统 → 软件包」或 SSH 下用 `opkg` 安装。不同固件（官方 OpenWrt、ImmortalWrt、自编译等）软件源可能不同，部分插件需先添加对应软件源或从 GitHub 安装。

::: tip 软件包对照
不确定包名或依赖时，可参考论坛整理帖：[OpenWrt 软件包对照表](https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=8387547&highlight=%E8%BD%AF%E4%BB%B6%E5%8C%85)（恩山）。
:::

## 安装方式

- **LuCI 界面**：登录后台 → **系统 → 软件包** → 更新列表后搜索包名，安装。
- **SSH 命令行**：
  ```bash
  opkg update
  opkg install <包名>
  ```
安装后若为 LuCI 插件，通常会在「服务」或「网络」等菜单下出现新入口；部分需刷新页面或重新登录。

---

## 代理与科学上网

| 插件 | 包名（示例） | 说明 |
|------|----------------|------|
| OpenClash | `luci-app-openclash` | 常用 Clash 内核 LuCI 管理界面，需在界面内下载/选择内核。 |

::: warning
OpenClash 等代理插件多数不在官方源，需使用 ImmortalWrt、OpenWrt 第三方固件自带源，或从开发者 GitHub Release 下载对应架构的 ipk 安装。
:::

---

## 动态 DNS（DDNS）

| 插件 | 包名（示例） | 说明 |
|------|----------------|------|
| DDNS Go | `luci-app-ddns-go`、`luci-i18n-ddns-go-zh-cn` | 动态 DNS 客户端，支持多服务商；中文语言包可选。 |

```bash
opkg install luci-app-ddns-go luci-i18n-ddns-go-zh-cn
```

---

## 广告过滤

| 插件 | 包名（示例） | 说明 |
|------|----------------|------|
| AdBlock | `luci-app-adblock`、`luci-i18n-adblock-zh-cn` | 基于域名/列表的广告拦截，可订阅规则。 |

```bash
opkg install luci-app-adblock luci-i18n-adblock-zh-cn
```

---

## VPN

| 插件 | 包名（示例） | 说明 |
|------|----------------|------|
| OpenVPN 服务端 | `luci-app-openvpn-server`、`luci-i18n-openvpn-server-zh-cn` | 在路由上提供 OpenVPN 服务端，便于远程访问内网。 |
| Tailscale | `luci-app-tailscale` | Tailscale 组网客户端，可与其它设备组成虚拟局域网。 |

```bash
# OpenVPN 服务端
opkg install luci-app-openvpn-server luci-i18n-openvpn-server-zh-cn
```

Tailscale 需根据固件源安装，部分需从 [Tailscale OpenWrt](https://github.com/tailscale/tailscale/wiki/OpenWrt) 等渠道获取 ipk。

---

## 界面与主题

| 插件 | 包名（示例） | 说明 |
|------|----------------|------|
| Argon 主题配置 | `luci-app-argon-config` | 为 Argon 主题提供背景、透明度等 LuCI 配置。 |

主题本身通常为 `luci-theme-argon`，与配置插件分开安装。

---

## 工具类

| 插件 | 包名（示例） | 说明 |
|------|----------------|------|
| 网络唤醒 (WOL) | `luci-app-wol` | 在 LuCI 中通过局域网唤醒支持 WOL 的设备。 |
| 网页终端 (ttyd) | `luci-app-ttyd` | 在浏览器中打开终端，无需 SSH 即可执行命令。 |
| 文件浏览 | `luci-app-filebrowser` | 提供简单的 Web 文件管理（部分固件为 filebrowser 等名称）。 |
| 实时监控 (Netdata) | `luci-app-netdata` | 集成 Netdata，在 LuCI 中查看 CPU、内存、网络等实时图表。 |

```bash
# 示例：安装 WOL、网页终端
opkg install luci-app-wol luci-app-ttyd
```

以上包名在不同版本/架构下可能略有差异，安装前建议在「软件包」中搜索关键词（如 `ttyd`、`wol`、`filebrowser`）确认后再装。

---

## 小结

- 安装前先 **更新列表**（`opkg update` 或 界面「刷新」），再按包名安装。
- 遇到依赖错误时，先安装提示的依赖包，或换用带更多预装源的固件（如 ImmortalWrt）。
- 更多拨号、LAN、端口映射等基础配置见 [OpenWRT 使用](/ops/openwrt/使用/)。
