# npm
[npm](https://www.npmjs.com/)，全名 node package manger。  
简单来说，npm就是JavaScript的包管理工具，类似Java语法当中的Maven, Gradle, Python的pip。

## 安装
npm 在按照 [Node.js](https://nodejs.org/en/download/) 时会连带被安装。但有可能不是最新版本，需要 `npm install npm@latest -g` 升级到最新版本。

## 使用
### `npm install`
npm install命令可以安装对应的包，并创建一个node_modules的文件夹,然后把需要安装的安装包下载到里面。
```sh
npm install [package name]
```

### `npm update`
npm update命令可以更新本地安装的模块
```sh
# 升级当前项目的指定模块
npm update [package name]
# 升级全局安装的模块
npm update -g [package name]
```

### `npm uninstall`
npm uninstall命令可以卸载已安装的模块
```sh
# 卸载当前项目的指定模块
npm uninstall [package name]
# 卸载全局模块
npm uninstall [package name] -g
```

## 常用命令
```sh
npm install     // 安装模块
npm uninstall   // 卸载模块
npm update      // 更新模块
npm ls          // 查看安装的模块
npm init        // 在项目中引导创建一个 package.json 文件
npm config      // 管理npm的配置路径
npm publish     // 发布模块
npm version     // 查看模块版本
npm help        // 查看某条命令的详细帮助
npm root        // 查看包的安装路径
```