# nvm
[nvm](https://nvm.uihtm.com/) 是Node版本管理器，目的是为了解决开发中由于 Node 版本不同而出现的各种问题，方便切换各种版本的 Node

:::warning 提示
目前只针对 `Windows` 系统做简单介绍。

如果你是 `MacOS` 或者 `Linux` ,请查看 [npm nvm nvm安装、使用、卸载](https://juejin.cn/post/7052567984866328583)。
:::

## 安装
进入网站，根据所需版本 `下载 nvm for windows` 进行下载安装。

## 常用命令
```sh
nvm --version               // 查看 nvm 版本
nvm ls                      // 查看已经安装的 nodejs 版本
nvm alias default <version> // 指定默认 nodejs 版本
nvm install <version>       // 下载指定版本 nodejs
nvm use <version>           // 使用指定版本
nvm current                 // 当前使用版本
nvm ls-remote               // 查看远程所有可用的版本
```

