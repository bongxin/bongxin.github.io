---
order: -1
title: Hermes Agent
---

[Hermes Agent](https://github.com/NousResearch/hermes-agent) 是由 [Nous Research](https://nousresearch.com) 开源的自进化 AI 智能体框架（MIT 协议）。它不只是对话窗口，而是具备**跨会话记忆**、**技能自学习**与**多平台常驻**能力的数字助手，可部署在本地、VPS 或 Serverless 环境。

## 安装

### Linux / macOS / WSL2

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
source ~/.bashrc   # 或 source ~/.zshrc
hermes             # 启动对话
```

### Windows（PowerShell）

```powershell
iex (irm https://hermes-agent.nousresearch.com/install.ps1)
```

安装脚本会自动处理 Python、Node.js、ripgrep 等依赖；Windows 下还会安装便携版 Git Bash（无需管理员权限）。

## 使用

安装完成后，常用命令如下：

```bash
hermes              # 交互式 CLI，开始对话
hermes setup        # 完整配置向导（模型、工具、网关等）
hermes model        # 选择 LLM 提供商与模型
hermes tools        # 配置启用的工具
hermes gateway      # 启动消息网关（Telegram、Discord 等）
hermes doctor       # 诊断环境问题
hermes update       # 更新到最新版本
```

**快速接入 Nous Portal**（一站式模型与工具网关，免逐个配置 API Key）：

```bash
hermes setup --portal
```

**从 OpenClaw 迁移**：

```bash
hermes claw migrate              # 交互式迁移
hermes claw migrate --dry-run    # 预览将迁移的内容
```

## 核心特性

- **自进化技能**：从任务经验中自动生成、优化并复用技能，越用越强
- **持久记忆**：五层记忆架构（SQLite + FTS5），支持跨会话检索与摘要
- **多平台网关**：单进程接入 Telegram、Discord、Slack、WhatsApp、Signal、飞书、企业微信等
- **多模型支持**：兼容 OpenRouter（200+ 模型）、Claude、OpenAI、DeepSeek、Ollama 等，一条命令切换
- **多种执行后端**：本地终端、Docker、SSH、Modal、Daytona、Singularity
- **MCP 集成**：可作为 MCP Server 接入 IDE，扩展工具能力
- **定时任务**：内置 Cron 调度，支持自然语言配置定时报告与自动化

## 参考

- [Hermes Agent 官方文档](https://hermes-agent.nousresearch.com/docs/)
- [Quickstart 快速开始](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart)
- [CLI 使用指南](https://hermes-agent.nousresearch.com/docs/user-guide/cli)
- [消息网关配置](https://hermes-agent.nousresearch.com/docs/user-guide/messaging)
- [Hermes Agent GitHub](https://github.com/NousResearch/hermes-agent)
- [Hermes Agent 中文站](https://hermesagentai.cn/)
