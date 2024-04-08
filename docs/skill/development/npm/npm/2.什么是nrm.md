# npm
[nrm](https://www.npmjs.com/package/nrm) 是npm源管理器，它能便捷地切换不同的源来安装依赖包

## 安装
```sh
npm install -g nrm
```

## 常用命令
```sh
nrm ls                      # 列出可用的源
nrm use <registry>          # 选择源
nrm test npm                # 测试速度
nrm add <registry> <url>    # 添加源
nrm del <registry>          # 删除对应的源
```