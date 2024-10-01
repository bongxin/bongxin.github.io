---
outline: "deep"
---

# 快速启动

## 后端项目

使用 [IDEA Community](https://www.jetbrains.com/zh-cn/idea/download/?section=windows) 运行后端项目

### 初始化MySQL

#### 创建数据库

创建一个名字为 `ruoyi-vue-pro` 数据库，执行对应数据库类型的 `yudao\ruoyi-vue-pro\sql\mysql` 目录下的 `ruoyi-vue-pro.sql` SQL 文件，进行初始化

#### 修改配置文件

修改 `yudao\ruoyi-vue-pro\yudao-server\target\classes` 目录下的 `application-dev.yaml`，主要是修改ip地址

``` yaml
···
datasource:
master:
    url: jdbc:mysql://192.168.6.181:3306/ruoyi-vue-pro?useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true&nullCatalogMeansCurrent=true # MySQL Connector/J 8.X 连接的示例
    username: root
    password: 123456
slave: # 模拟从库，可根据自己需要修改 # 模拟从库，可根据自己需要修改
    lazy: true # 开启懒加载，保证启动速度
    url: jdbc:mysql://192.168.6.181:3306/ruoyi-vue-pro?useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true&nullCatalogMeansCurrent=true # MySQL Connector/J 8.X 连接的示例
    username: root
    password: 123456
···          
```

### 初始化Redis

#### 修改配置文件

修改 `yudao\ruoyi-vue-pro\yudao-server\target\classes` 目录下的 `application-dev.yaml`，主要是修改host地址

``` yaml
···  
# Redis 配置。Redisson 默认的配置足够使用，一般不需要进行调优
data:
redis:
    host: 192.168.6.181 # 地址
    port: 6379 # 端口
    database: 1 # 数据库索引
···
```

修改 `application.yaml` 配置，将 `active: local` 改成 `dev`

``` yaml
spring:
  application:
    name: yudao-server

  profiles:
    active: local

  main:
    allow-circular-references: true # 允许循环依赖，因为项目是三层架构，无法避免这个情况。
···
```

### 启动后端项目

#### 编译项目

使用 IDEA 自带的 Maven 插件，进行项目的编译

maven终端执行 `mvn clean install package '-Dmaven.test.skip=true'`

报错的话就改成以下命令：

``` sh
mvn install -Dmaven.test.skip=true
```

#### 启动项目

执行 `yudao\ruoyi-vue-pro\yudao-server\src\main\java\cn\iocoder\yudao\server` 目录下的 `YudaoServerApplication.java`，进行启动。


#### 验证

启动完成后，使用浏览器访问 `http://127.0.0.1:48080`地址，返回如下 JSON 字符串，说明成功


#### 常见问题处理

::: danger

启动其它模块后，启动项目时报错：
> Error running 'YudaoServerApplication'   Error running YudaoServerApplication.   Command line is too long.   Shorten the command line and rerun.`
:::

解决办法：在项目的 `.idea/workspace.xml` 文件中，找到 `<component name="PropertiesComponent">` ，后面在添加一行 `"dynamic.classpath": "true"` 这种方式一次设置就行。

``` xml
<component name="PropertiesComponent"><![CDATA[{
  "keyToString": {
    "Application.YudaoServerApplication.executor": "Run",
    "Maven.yudao [clean,install,package...].executor": "Run",
    "Maven.yudao [clean].executor": "Run",
    "Maven.yudao [install,-Dmaven.test.skip=true].executor": "Run",
    "Maven.yudao [install].executor": "Run",
    "Maven.yudao [spring-boot:run...].executor": "Run",
    "RunOnceActivity.ShowReadmeOnStart": "true",
    "git-widget-placeholder": "Branch__v2.2.0(jdk17/21)",
    "kotlin-language-version-configured": "true",
    "settings.editor.selected.configurable": "reference.projectsettings.compiler.javacompiler",
    "dynamic.classpath": "true"
  }
```

关闭演示模式

修改 `yudao\ruoyi-vue-pro\yudao-server\target\classes` 目录下的 `application-dev.yaml`，主要是修改为 `demo: false`

``` yaml
# 芋道配置项，设置当前项目所有自定义的配置
yudao:
  captcha:
    enable: false # 本地环境，暂时关闭图片验证码，方便登录等接口的测试；
  security:
    mock-enable: true
  pay:
    order-notify-url: http://yunai.natapp1.cc/admin-api/pay/notify/order # 支付渠道的【支付】回调地址
    refund-notify-url: http://yunai.natapp1.cc/admin-api/pay/notify/refund # 支付渠道的【退款】回调地址
  access-log: # 访问日志的配置项
    enable: false
  demo: false # 关闭演示模式
``` 

## 前端项目

使用 `VSCode` 运行后端项目

### 启动
```
# 安装 pnpm，提升依赖的安装速度
npm config set registry https://registry.npmmirror.com
npm install -g pnpm
# 安装依赖
pnpm install

# 启动服务
npm run dev
```

### 修改配置

查看 `package.json` 配置

``` json
"scripts": {
    "i": "pnpm install",
    "dev": "vite --mode env.local",
    "dev-server": "vite --mode dev",
    "ts:check": "vue-tsc --noEmit",
    "build:local": "node --max_old_space_size=8192 ./node_modules/vite/bin/vite.js build",
    "build:dev": "node --max_old_space_size=8192 ./node_modules/vite/bin/vite.js build --mode dev",
    "build:test": "node --max_old_space_size=8192 ./node_modules/vite/bin/vite.js build --mode test",
    "build:stage": "node --max_old_space_size=8192 ./node_modules/vite/bin/vite.js build --mode stage",
    "build:prod": "node --max_old_space_size=8192 ./node_modules/vite/bin/vite.js build --mode prod",
    "serve:dev": "vite preview --mode dev",
    "serve:prod": "vite preview --mode prod",
    "preview": "pnpm build:local && vite preview",
    "clean": "npx rimraf node_modules",
    "clean:cache": "npx rimraf node_modules/.cache",
    "lint:eslint": "eslint --fix --ext .js,.ts,.vue ./src",
    "lint:format": "prettier --write --loglevel warn \"src/**/*.{js,ts,json,tsx,css,less,scss,vue,html,md}\"",
    "lint:style": "stylelint --fix \"./src/**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
    "lint:lint-staged": "lint-staged -c "
```

本地运行的话，修改 `yudao\yudao-ui-admin-vue3` 目录下 `.env.local`，根据实际情况修改 `.env.dev` `.env.test` `.env.prod` 等

主要修改 `VITE_BASE_URL` 和 `VITE_UPLOAD_URL` 的host地址

``` json
# 本地开发环境：本地启动所有项目（前端、后端、APP）时使用，不依赖外部环境
NODE_ENV=development

VITE_DEV=true

# 请求路径
VITE_BASE_URL='http://localhost:48080'

# 文件上传类型：server - 后端上传， client - 前端直连上传，仅支持 S3 服务
VITE_UPLOAD_TYPE=server
# 上传路径
VITE_UPLOAD_URL='http://localhost:48080/admin-api/infra/file/upload'

# 接口地址
VITE_API_URL=/admin-api

# 是否删除debugger
VITE_DROP_DEBUGGER=false

# 是否删除console.log
VITE_DROP_CONSOLE=false

# 是否sourcemap
VITE_SOURCEMAP=false

# 打包路径
VITE_BASE_PATH=/

# 商城H5会员端域名
VITE_MALL_H5_DOMAIN='http://localhost:3000'

# 验证码的开关
VITE_APP_CAPTCHA_ENABLE=false

```

#### 访问

`http://localhost/`





