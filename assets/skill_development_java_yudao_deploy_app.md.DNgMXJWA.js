import{_ as s,c as a,o as n,aS as i}from"./chunks/framework.Cuoppmxr.js";const E=JSON.parse('{"title":"部署","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"skill/development/java/yudao/deploy_app.md","filePath":"skill/development/java/yudao/deploy_app.md","lastUpdated":1728838755000}'),p={name:"skill/development/java/yudao/deploy_app.md"},e=i(`<h1 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h1><h2 id="部署后端服务" tabindex="-1">部署后端服务 <a class="header-anchor" href="#部署后端服务" aria-label="Permalink to &quot;部署后端服务&quot;">​</a></h2><h3 id="修改配置" tabindex="-1">修改配置 <a class="header-anchor" href="#修改配置" aria-label="Permalink to &quot;修改配置&quot;">​</a></h3><p>（1）修改 <code>yudao\\ruoyi-vue-pro\\yudao-server\\target\\classes</code> 目录下的 <code>application-dev.yaml</code>，主要是修改ip地址</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">···</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">datasource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">master</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">jdbc:mysql://bongxin.cn:33306/ruoyi-vue-pro?useSSL=false&amp;serverTimezone=Asia/Shanghai&amp;allowPublicKeyRetrieval=true&amp;nullCatalogMeansCurrent=true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # MySQL Connector/J 8.X 连接的示例</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">root</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123456</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">slave</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 模拟从库，可根据自己需要修改 # 模拟从库，可根据自己需要修改</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    lazy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 开启懒加载，保证启动速度</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">jdbc:mysql://bongxin.cn:33306/ruoyi-vue-pro?useSSL=false&amp;serverTimezone=Asia/Shanghai&amp;allowPublicKeyRetrieval=true&amp;nullCatalogMeansCurrent=true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # MySQL Connector/J 8.X 连接的示例</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">root</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123456</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">···</span></span></code></pre></div><p>（2）修改 <code>yudao\\ruoyi-vue-pro\\yudao-server\\target\\classes</code> 目录下的 <code>application-dev.yaml</code>，主要是修改host地址</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">···</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Redis 配置。Redisson 默认的配置足够使用，一般不需要进行调优</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">redis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bongxin.cn</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 地址</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">36379</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 端口</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 数据库索引</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">···</span></span></code></pre></div><p>（3）修改 <code>yudao\\ruoyi-vue-pro\\yudao-server\\target\\classes</code> 目录下的 <code>application-dev.yaml</code>，主要是修改为 <code>demo: false</code></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 芋道配置项，设置当前项目所有自定义的配置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">yudao</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  captcha</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 本地环境，暂时关闭图片验证码，方便登录等接口的测试；</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  security</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    mock-enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  pay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    order-notify-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://yunai.natapp1.cc/admin-api/pay/notify/order</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 支付渠道的【支付】回调地址</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    refund-notify-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://yunai.natapp1.cc/admin-api/pay/notify/refund</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 支付渠道的【退款】回调地址</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  access-log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 访问日志的配置项</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  demo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 关闭演示模式</span></span></code></pre></div><p>（4）修改 <code>yudao\\ruoyi-vue-pro\\yudao-server\\target\\classes</code> 目录下的 <code>application-dev.yaml</code>，主要是补充 <code>captcha.enable: false</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>···</span></span>
<span class="line"><span># 芋道配置项，设置当前项目所有自定义的配置</span></span>
<span class="line"><span>yudao:</span></span>
<span class="line"><span>  captcha:</span></span>
<span class="line"><span>    enable: false # 本地环境，暂时关闭图片验证码，方便登录等接口的测试；</span></span>
<span class="line"><span>  pay:</span></span>
<span class="line"><span>    order-notify-url: http://yunai.natapp1.cc/admin-api/pay/notify/order # 支付渠道的【支付】回调地址</span></span>
<span class="line"><span>    refund-notify-url: http://yunai.natapp1.cc/admin-api/pay/notify/refund # 支付渠道的【退款】回调地址</span></span>
<span class="line"><span>  demo: false # 开启演示模式</span></span>
<span class="line"><span>  tencent-lbs-key: TVDBZ-TDILD-4ON4B-PFDZA-RNLKH-VVF6E # QQ 地图的密钥 https://lbs.qq.com/service/staticV2/staticGuide/staticDoc</span></span>
<span class="line"><span>···</span></span></code></pre></div><p>（5）修改 <code>application.yaml</code> 配置，将 <code>active: local</code> 改成 <code>dev</code></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  application</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yudao-server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  profiles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    active</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">local</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    allow-circular-references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 允许循环依赖，因为项目是三层架构，无法避免这个情况。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">···</span></span></code></pre></div><h3 id="编译代码" tabindex="-1">编译代码 <a class="header-anchor" href="#编译代码" aria-label="Permalink to &quot;编译代码&quot;">​</a></h3><p>使用 IDEA 自带的 Maven 插件，进行项目的编译</p><p>maven终端执行 <code>mvn clean install package -Dmaven.test.skip=true</code></p><h3 id="上传jar包" tabindex="-1">上传jar包 <a class="header-anchor" href="#上传jar包" aria-label="Permalink to &quot;上传jar包&quot;">​</a></h3><p>打包生成的jar包在 <code>yudao\\ruoyi-vue-pro\\yudao-server\\target</code> 目录下</p><p>在 Linux 服务器上创建 <code>/work/projects/yudao-server</code> 目录，使用 scp 命令或者 FTP 工具，将 <code>yudao-server.jar</code> 上传到该目录下</p><h3 id="构建镜像" tabindex="-1">构建镜像 <a class="header-anchor" href="#构建镜像" aria-label="Permalink to &quot;构建镜像&quot;">​</a></h3><p>(1) 在 <code>/work/projects/yudao-server</code> 目录下，新建 <code>Dockerfile</code> 文件，用于制作后端项目的 Docker 镜像。编写内容如下：</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>根据打包编辑的jdk版本，选择合适的jdk镜像</p></div><div class="language-Dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## AdoptOpenJDK 停止发布 OpenJDK 二进制，而 Eclipse Temurin 是它的延伸，提供更好的稳定性</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 感谢复旦核博士的建议！灰子哥，牛皮！</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> openjdk:17-jdk-alpine </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> builder</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># FROM m.daocloud.io/docker.io/eclipse-temurin:8-jre</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 创建目录，并使用它作为工作目录</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mkdir -p /yudao-server</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WORKDIR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /yudao-server</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 将后端项目的 Jar 文件，复制到镜像中</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COPY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> yudao-server.jar app.jar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 设置 TZ 时区</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 设置 JAVA_OPTS 环境变量，可通过 docker run -e &quot;JAVA_OPTS=&quot; 进行覆盖</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ENV</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TZ=Asia/Shanghai JAVA_OPTS=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-Xms512m -Xmx512m&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 暴露后端项目的 48080 端口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EXPOSE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 48080</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 启动后端项目</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ENTRYPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> java \${JAVA_OPTS} -Djava.security.egd=file:/dev/./urandom -jar app.jar</span></span></code></pre></div><p>(2) 执行如下命令，构建名字为 <code>yudao-server</code> 的 Docker 镜像。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /work/projects/yudao-server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yudao-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><p>(3) 在 <code>/work/projects/yudao-server</code> 目录下，新建 Shell 脚本 <code>deploy.sh</code>，使用 Docker 启动后端项目。编写内容如下：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 第一步：删除可能启动的老 yudao-server 容器</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;开始删除 yudao-server 容器&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yudao-server</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yudao-server</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;完成删除 yudao-server 容器&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 第二步：启动新的 yudao-server 容器 \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;开始启动 yudao-server 容器&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yudao-server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-p </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">48080:48080</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-e </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SPRING_PROFILES_ACTIVE=dev&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/work/projects/yudao-server:/root/logs/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yudao-server</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;正在启动 yudao-server 容器中，需要等待 60 秒左右&quot;</span></span></code></pre></div><p>应用日志文件，挂载到服务器的的 /work/projects/yudao-server 目录下</p><p>通过 SPRING_PROFILES_ACTIVE 设置为 dev 开发环境</p><h3 id="启动后端" tabindex="-1">启动后端 <a class="header-anchor" href="#启动后端" aria-label="Permalink to &quot;启动后端&quot;">​</a></h3><p>(1) 执行 <code>sh deploy.sh</code> 命令，使用 Docker 启动后端项目。日志如下：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">开始删除</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yudao-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 容器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yudao-server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yudao-server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">完成删除</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yudao-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 容器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">开始启动</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yudao-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 容器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0dfd3dc409a53ae6b5e7c5662602cf5dcb52fd4d7f673bd74af7d21da8ead9d5</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">正在启动</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yudao-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 容器中，需要等待</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 秒左右</span></span></code></pre></div><p>(2) 执行 docker logs yudao-server 命令，查看启动日志。</p><h2 id="部署前端应用" tabindex="-1">部署前端应用 <a class="header-anchor" href="#部署前端应用" aria-label="Permalink to &quot;部署前端应用&quot;">​</a></h2><h3 id="修改配置-1" tabindex="-1">修改配置 <a class="header-anchor" href="#修改配置-1" aria-label="Permalink to &quot;修改配置&quot;">​</a></h3><p>前端 dev 开发环境对应的是 <code>.env.dev</code> 配置文件，主要是修改 <code>VITE_BASE_URL</code> 为你的后端项目的访问地址。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 开发环境：本地只启动前端项目，依赖开发环境（后端、APP）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NODE_ENV=production</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_DEV=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 请求路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_BASE_URL=&#39;http:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//bongxin.com.cn&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 文件上传类型：server - 后端上传， client - 前端直连上传，仅支持S</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">服务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_UPLOAD_TYPE=server</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 上传路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_UPLOAD_URL=&#39;http:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//bongxin.com.cn/admin-api/infra/file/upload&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 接口地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_API_URL=/admin-api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 是否删除debugger</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_DROP_DEBUGGER=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 是否删除console.log</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_DROP_CONSOLE=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 是否sourcemap</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_SOURCEMAP=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 打包路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_BASE_PATH=/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 输出路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_OUT_DIR=dist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 商城H</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">会员端域名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_MALL_H</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_DOMAIN=&#39;http:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//mall.bongxin.com.cn&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 验证码的开关</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_APP_CAPTCHA_ENABLE=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><h3 id="编译代码-1" tabindex="-1">编译代码 <a class="header-anchor" href="#编译代码-1" aria-label="Permalink to &quot;编译代码&quot;">​</a></h3><p>在前端项目的根目录下，执行 <code>npm run build:dev</code> 命令，编译前端项目，构建出它的 <code>dist</code> 文件</p><h3 id="上传-dist-文件" tabindex="-1">上传 dist 文件 <a class="header-anchor" href="#上传-dist-文件" aria-label="Permalink to &quot;上传 dist 文件&quot;">​</a></h3><p>在 Linux 服务器上创建 <code>/work/projects/yudao-ui-admin</code> 目录，使用 scp 命令或者 FTP 工具，将 dist 上传到该目录</p><h4 id="打包压缩包" tabindex="-1">打包压缩包 <a class="header-anchor" href="#打包压缩包" aria-label="Permalink to &quot;打包压缩包&quot;">​</a></h4><p>进入 <code>dist</code> 文件夹，使用 <code>7zip</code> 将文件打包压缩包 <code>dist.tar</code></p><h4 id="上传压缩包" tabindex="-1">上传压缩包 <a class="header-anchor" href="#上传压缩包" aria-label="Permalink to &quot;上传压缩包&quot;">​</a></h4><p>使用 <code>MobaXterm</code> 上传 <code>dist.tar</code> 到服务器 <code>/work/projects/yudao-ui-admin</code> 目录</p><h4 id="解压压缩包" tabindex="-1">解压压缩包 <a class="header-anchor" href="#解压压缩包" aria-label="Permalink to &quot;解压压缩包&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dist.tar</span></span></code></pre></div><h3 id="配置-nginx-转发" tabindex="-1">配置 Nginx 转发 <a class="header-anchor" href="#配置-nginx-转发" aria-label="Permalink to &quot;配置 Nginx 转发&quot;">​</a></h3><p>两种 Nginx 的配置，分别满足服务器 IP、独立域名的不同场景。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Nginx配置必须加上这三行，不然访问会报404错误</p><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>location = /index.html {</span></span>
<span class="line"><span>    root   /usr/share/nginx/html/yudao-ui-admin;</span></span>
<span class="line"><span>}</span></span></code></pre></div></div><h4 id="方式一-服务器-ip-访问" tabindex="-1">方式一：服务器 IP 访问 <a class="header-anchor" href="#方式一-服务器-ip-访问" aria-label="Permalink to &quot;方式一：服务器 IP 访问&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>公网IP动态变化，因此不建议<code>服务器 IP 访问</code>的方式</p></div><p>(1) 在 <code>/work/nginx/conf.d</code> 目录下，创建 <code>ruoyi-vue-pro.conf</code>，内容如下：</p><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name  8.138.22.121; ## 重要！！！修改成你的外网 IP/域名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / { ## 前端项目</span></span>
<span class="line"><span>        root   /usr/share/nginx/html/yudao-ui-admin;</span></span>
<span class="line"><span>        index  index.html index.htm;</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location = /index.html {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html/yudao-ui-admin;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /admin-api/ { ## 后端项目 - 管理后台</span></span>
<span class="line"><span>        proxy_pass http://172.25.142.160:48080/admin-api/; ## 重要！！！proxy_pass 需要设置为后端项目所在服务器的 IP</span></span>
<span class="line"><span>        proxy_set_header Host $http_host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /app-api/ { ## 后端项目 - 用户 App</span></span>
<span class="line"><span>        proxy_pass http://172.25.142.160:48080/app-api/; ## 重要！！！proxy_pass 需要设置为后端项目所在服务器的 IP</span></span>
<span class="line"><span>        proxy_set_header Host $http_host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>(2) 执行 <code>docker exec yudao-nginx nginx -s reload</code> 命令，重新加载 Nginx 配置。</p><p>(3) 执行 <code>curl http://8.138.22.121/admin-api/</code> 命令，成功访问后端项目的内网地址，返回结果如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{&quot;code&quot;:401,&quot;data&quot;:null,&quot;msg&quot;:&quot;账号未登录&quot;}</span></span></code></pre></div><p>(4) 请求 <code>http://8.138.22.121</code> 地址，成功访问前端项目的外网地址</p><h4 id="方式二-独立域名访问-推荐" tabindex="-1">方式二：独立域名访问（推荐） <a class="header-anchor" href="#方式二-独立域名访问-推荐" aria-label="Permalink to &quot;方式二：独立域名访问（推荐）&quot;">​</a></h4><p>(1) 在 <code>/work/nginx/conf.d</code> 目录下，创建 <code>ruoyi-vue-pro2.conf</code>，内容如下：</p><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       443 ssl; # 监听 HTTPS 端口</span></span>
<span class="line"><span>    server_name  bongxin.com.cn; # 您的域名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ssl_certificate /etc/nginx/cert/bongxin.com.cn_bundle.crt; # 使用 bundle.crt 文件</span></span>
<span class="line"><span>    ssl_certificate_key /etc/nginx/cert/bongxin.com.cn.key; # 私钥文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # SSL 相关配置</span></span>
<span class="line"><span>    ssl_session_timeout 1d;</span></span>
<span class="line"><span>    ssl_session_cache shared:SSL:50m;</span></span>
<span class="line"><span>    ssl_protocols TLSv1.2 TLSv1.3; # 使用最新的加密协议</span></span>
<span class="line"><span>    ssl_ciphers HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span>    ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # OCSP Stapling 配置</span></span>
<span class="line"><span>    ssl_stapling on;</span></span>
<span class="line"><span>    ssl_stapling_verify on;</span></span>
<span class="line"><span>    resolver 8.8.8.8 valid=300s;</span></span>
<span class="line"><span>    resolver_timeout 5s;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # HTTP 重定向到 HTTPS</span></span>
<span class="line"><span>    if ($scheme != &quot;https&quot;) {</span></span>
<span class="line"><span>        return 301 https://$host$request_uri;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / { ## 前端项目</span></span>
<span class="line"><span>        root   /usr/share/nginx/html/yudao-ui-admin;</span></span>
<span class="line"><span>        index  index.html index.htm;</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location = /index.html {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html/yudao-ui-admin;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /admin-api/ { ## 后端项目 - 管理后台</span></span>
<span class="line"><span>        proxy_pass http://172.25.142.160:48080/admin-api/;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /app-api/ { ## 后端项目 - 用户 App</span></span>
<span class="line"><span>        proxy_pass http://172.25.142.160:48080/app-api/;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name  bongxin.com.cn; ## 重要！！！修改成你的外网 IP/域名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / { ## 前端项目</span></span>
<span class="line"><span>        root   /usr/share/nginx/html/yudao-ui-admin;</span></span>
<span class="line"><span>        index  index.html index.htm;</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location = /index.html {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html/yudao-ui-admin;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /admin-api/ { ## 后端项目 - 管理后台</span></span>
<span class="line"><span>        proxy_pass http://172.25.142.160:48080/admin-api/; ## 重要！！！proxy_pass 需要设置为后端项目所在服务器的 IP</span></span>
<span class="line"><span>        proxy_set_header Host $http_host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /app-api/ { ## 后端项目 - 用户 App</span></span>
<span class="line"><span>        proxy_pass http://172.25.142.160:48080/app-api/; ## 重要！！！proxy_pass 需要设置为后端项目所在服务器的 IP</span></span>
<span class="line"><span>        proxy_set_header Host $http_host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>(2) 执行 <code>docker exec yudao-nginx nginx -s reload</code> 命令，重新加载 Nginx 配置。</p><p>(3) 执行 <code>curl http://bongxin.com.cn/admin-api/</code> 命令，成功访问后端项目的内网地址，返回结果如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{&quot;code&quot;:401,&quot;data&quot;:null,&quot;msg&quot;:&quot;账号未登录&quot;}</span></span></code></pre></div><p>(4) 请求 <code>http://bongxin.com.cn</code> 地址，成功访问前端项目的外网地址</p><h2 id="minio配置" tabindex="-1">MinIO配置 <a class="header-anchor" href="#minio配置" aria-label="Permalink to &quot;MinIO配置&quot;">​</a></h2><p>（1） 访问 <code>http://bongxin.cn:39001/</code></p><p>（2） 配置 <code>Buckets</code>，创建名为 <code>yudaoyuanma</code></p><p>（3） 配置 <code>yudaoyuanma</code> 的 <code>Anonymous</code>, 点击 <code>Add Access Rule +</code></p><ul><li>Prefix: <code>/</code></li><li>Access: <code>readonly</code></li></ul><h3 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-label="Permalink to &quot;验证&quot;">​</a></h3><p>（1）上传图片 <code>tmp_db206877393365b29ccf8c960b1b0d9b.jpg</code></p><p>（2）访问 <code>http://bongxin.cn:39000/yudaoyuanma/tmp_db206877393365b29ccf8c960b1b0d9b.jpg</code></p><h3 id="获取access-key" tabindex="-1">获取Access Key <a class="header-anchor" href="#获取access-key" aria-label="Permalink to &quot;获取Access Key&quot;">​</a></h3><p>（1） 配置 <code>Access Keys</code>， 点击 <code>Add Access Rule +</code></p><ul><li>Access Key: <code>******</code></li><li>Secret Key: <code>******</code></li></ul><h3 id="配置系统文件配置" tabindex="-1">配置系统文件配置 <a class="header-anchor" href="#配置系统文件配置" aria-label="Permalink to &quot;配置系统文件配置&quot;">​</a></h3><p>菜单项：<code>文件管理-文件配置</code></p><ul><li>配置名: <code>MinIO存储</code></li><li>存储器: <code>S3 对象存储</code></li><li>节点地址: <code>http://bongxin.cn:39000</code></li><li>节点地址: <code>yudaoyuanma</code></li><li>accessKey: <code>******</code></li><li>accessSecret: <code>******</code></li></ul><h2 id="部署商城应用-h5" tabindex="-1">部署商城应用（H5） <a class="header-anchor" href="#部署商城应用-h5" aria-label="Permalink to &quot;部署商城应用（H5）&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">前置准备</p><p>① 克隆 <a href="https://github.com/yudaocode/yudao-mall-uniapp" target="_blank" rel="noreferrer">https://github.com/yudaocode/yudao-mall-uniapp</a> 项目。</p><p>② 下载 <code>HBuilder</code> 工具，并进行安装。</p><p>③ 点击 HBuilder 的 [文件 -&gt; 导入 -&gt; 从本地项目导入...] 菜单，选择克隆的 <code>yudao-mall-uniapp</code> 目录</p></div><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span></code></pre></div><h3 id="修改配置-2" tabindex="-1">修改配置 <a class="header-anchor" href="#修改配置-2" aria-label="Permalink to &quot;修改配置&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 版本号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SHOPRO_VERSION = v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 后端接口 - 正式环境（通过 process.env.NODE_ENV 非 development）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SHOPRO_BASE_URL = http:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//api-dashboard.yudao.iocoder.cn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 后端接口 - 测试环境（通过 process.env.NODE_ENV = development）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SHOPRO_DEV_BASE_URL = http:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//bongxin.com.cn:48080</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">### SHOPRO_DEV_BASE_URL = http:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//yunai.natapp1.cc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 后端接口前缀（一般不建议调整）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SHOPRO_API_PATH = /app-api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 后端 websocket 接口前缀</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SHOPRO_WEBSOCKET_PATH = /infra/ws</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 开发环境运行端口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SHOPRO_DEV_PORT = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 客户端静态资源地址 空=默认使用服务端指定的CDN资源地址前缀 | local=本地  |  http(s):</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//xxx.xxx=自定义静态资源地址前缀</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SHOPRO_STATIC_URL = https:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//file.sheepjs.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 是否开启直播  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 开启直播 | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 关闭直播 (小程序官方后台未审核开通直播权限时请勿开启)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SHOPRO_MPLIVE_ON = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 租户ID 默认 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SHOPRO_TENANT_ID = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span></code></pre></div><h3 id="打包项目" tabindex="-1">打包项目 <a class="header-anchor" href="#打包项目" aria-label="Permalink to &quot;打包项目&quot;">​</a></h3><ol><li><p>HBuilder 打开 <code>uni-app项目 -&gt; 发行 -&gt; 网站 -&gt; PC Web或手机H5</code></p></li><li><p>点完之后会弹出一个框, 填写 <code>网站标题</code> 和 <code>网站域名</code> 之后点 <code>发行</code></p></li><li><p>点完之后控制台会显示正在编译中... , 稍等一会</p></li><li><p>打包成功, 生成了unpackage文件夹, 打包好的文件存放在里面 <code>yudao-mall-uniapp\\unpackage\\dist\\build\\web</code></p></li></ol><h3 id="上传-web-文件" tabindex="-1">上传 web 文件 <a class="header-anchor" href="#上传-web-文件" aria-label="Permalink to &quot;上传 web 文件&quot;">​</a></h3><p>在 Linux 服务器上创建 <code>/work/projects/yudao-ui-mall</code> 目录，使用 scp 命令或者 FTP 工具，将 web 上传到该目录</p><h4 id="打包压缩包-1" tabindex="-1">打包压缩包 <a class="header-anchor" href="#打包压缩包-1" aria-label="Permalink to &quot;打包压缩包&quot;">​</a></h4><p>进入 <code>web</code> 文件夹，使用 <code>7zip</code> 将文件打包压缩包 <code>web.tar</code></p><h4 id="上传压缩包-1" tabindex="-1">上传压缩包 <a class="header-anchor" href="#上传压缩包-1" aria-label="Permalink to &quot;上传压缩包&quot;">​</a></h4><p>使用 <code>MobaXterm</code> 上传 <code>web.tar</code> 到服务器 <code>/work/projects/yudao-ui-mall</code> 目录</p><h4 id="解压压缩包-1" tabindex="-1">解压压缩包 <a class="header-anchor" href="#解压压缩包-1" aria-label="Permalink to &quot;解压压缩包&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> web.tar</span></span></code></pre></div><h3 id="配置-nginx-转发-1" tabindex="-1">配置 Nginx 转发 <a class="header-anchor" href="#配置-nginx-转发-1" aria-label="Permalink to &quot;配置 Nginx 转发&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>复制服务器 <code>/work/projects/yudao-ui-mall</code> 目录到 <code>/work/nginx/html/yudao-ui-mall</code></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /work/nginx/html/yudao-ui-mall</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /work/projects/yudao-ui-mall/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /work/nginx/html/yudao-ui-mall</span></span></code></pre></div></div><h4 id="独立域名访问-推荐-未验证" tabindex="-1">独立域名访问（推荐）（未验证） <a class="header-anchor" href="#独立域名访问-推荐-未验证" aria-label="Permalink to &quot;独立域名访问（推荐）（未验证）&quot;">​</a></h4><p>(1) 在 <code>/work/nginx/conf.d</code> 目录下，创建 <code>ruoyi-vue-pro3.conf</code>，内容如下：</p><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 二级域名配置</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen       443 ssl; # 监听 HTTPS 端口</span></span>
<span class="line"><span>    server_name  mall.bongxin.com.cn; # 二级域名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ssl_certificate /etc/nginx/cert/bongxin.com.cn_bundle.crt; # 使用 bundle.crt 文件</span></span>
<span class="line"><span>    ssl_certificate_key /etc/nginx/cert/bongxin.com.cn.key; # 私钥文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # SSL 相关配置</span></span>
<span class="line"><span>    ssl_session_timeout 1d;</span></span>
<span class="line"><span>    ssl_session_cache shared:SSL:50m;</span></span>
<span class="line"><span>    ssl_protocols TLSv1.2 TLSv1.3; # 使用最新的加密协议</span></span>
<span class="line"><span>    ssl_ciphers HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span>    ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # OCSP Stapling 配置</span></span>
<span class="line"><span>    ssl_stapling on;</span></span>
<span class="line"><span>    ssl_stapling_verify on;</span></span>
<span class="line"><span>    resolver 8.8.8.8 valid=300s;</span></span>
<span class="line"><span>    resolver_timeout 5s;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # HTTP 重定向到 HTTPS</span></span>
<span class="line"><span>    #if ($scheme != &quot;https&quot;) {</span></span>
<span class="line"><span>    #    return 301 https://$host$request_uri;</span></span>
<span class="line"><span>    #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://localhost:3000; ## 将请求转发到本地主机的 3000 端口</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>        proxy_http_version 1.1;</span></span>
<span class="line"><span>        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>        proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 错误页面配置</span></span>
<span class="line"><span>    error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>    location = /50x.html {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name  mall.bongxin.com.cn; ## 二级域名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://localhost:3000; ## 将请求转发到本地主机的 3000 端口</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>        proxy_http_version 1.1;</span></span>
<span class="line"><span>        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>        proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 错误页面配置</span></span>
<span class="line"><span>    error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>    location = /50x.html {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 3000 端口上的前端项目配置</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen       3000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / { ## 前端项目</span></span>
<span class="line"><span>        root   /usr/share/nginx/html/yudao-ui-mall;</span></span>
<span class="line"><span>        index  index.html index.htm;</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location = /index.html {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html/yudao-ui-mall;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>(2) 执行 <code>docker exec yudao-nginx nginx -s reload</code> 命令，重新加载 Nginx 配置。</p><p>(3) 请求 <code>http://mall.bongxin.com.cn</code> 地址，成功访问商城项目的外网地址</p>`,102),l=[e];function t(h,d,r,c,o,k){return n(),a("div",null,l)}const g=s(p,[["render",t]]);export{E as __pageData,g as default};
