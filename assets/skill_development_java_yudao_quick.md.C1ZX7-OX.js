import{_ as a,c as s,o as n,aS as e}from"./chunks/framework.Cuoppmxr.js";const q=JSON.parse('{"title":"快速启动","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"skill/development/java/yudao/quick.md","filePath":"skill/development/java/yudao/quick.md","lastUpdated":1727771475000}'),p={name:"skill/development/java/yudao/quick.md"},l=e(`<h1 id="快速启动" tabindex="-1">快速启动 <a class="header-anchor" href="#快速启动" aria-label="Permalink to &quot;快速启动&quot;">​</a></h1><h2 id="后端项目" tabindex="-1">后端项目 <a class="header-anchor" href="#后端项目" aria-label="Permalink to &quot;后端项目&quot;">​</a></h2><p>使用 <a href="https://www.jetbrains.com/zh-cn/idea/download/?section=windows" target="_blank" rel="noreferrer">IDEA Community</a> 运行后端项目</p><h3 id="初始化mysql" tabindex="-1">初始化MySQL <a class="header-anchor" href="#初始化mysql" aria-label="Permalink to &quot;初始化MySQL&quot;">​</a></h3><h4 id="创建数据库" tabindex="-1">创建数据库 <a class="header-anchor" href="#创建数据库" aria-label="Permalink to &quot;创建数据库&quot;">​</a></h4><p>创建一个名字为 <code>ruoyi-vue-pro</code> 数据库，执行对应数据库类型的 <code>yudao\\ruoyi-vue-pro\\sql\\mysql</code> 目录下的 <code>ruoyi-vue-pro.sql</code> SQL 文件，进行初始化</p><h4 id="修改配置文件" tabindex="-1">修改配置文件 <a class="header-anchor" href="#修改配置文件" aria-label="Permalink to &quot;修改配置文件&quot;">​</a></h4><p>修改 <code>yudao\\ruoyi-vue-pro\\yudao-server\\target\\classes</code> 目录下的 <code>application-dev.yaml</code>，主要是修改ip地址</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>···</span></span>
<span class="line"><span>datasource:</span></span>
<span class="line"><span>master:</span></span>
<span class="line"><span>    url: jdbc:mysql://192.168.6.181:3306/ruoyi-vue-pro?useSSL=false&amp;serverTimezone=Asia/Shanghai&amp;allowPublicKeyRetrieval=true&amp;nullCatalogMeansCurrent=true # MySQL Connector/J 8.X 连接的示例</span></span>
<span class="line"><span>    username: root</span></span>
<span class="line"><span>    password: 123456</span></span>
<span class="line"><span>slave: # 模拟从库，可根据自己需要修改 # 模拟从库，可根据自己需要修改</span></span>
<span class="line"><span>    lazy: true # 开启懒加载，保证启动速度</span></span>
<span class="line"><span>    url: jdbc:mysql://192.168.6.181/ruoyi-vue-pro?useSSL=false&amp;serverTimezone=Asia/Shanghai&amp;allowPublicKeyRetrieval=true&amp;nullCatalogMeansCurrent=true # MySQL Connector/J 8.X 连接的示例</span></span>
<span class="line"><span>    username: root</span></span>
<span class="line"><span>    password: 123456</span></span>
<span class="line"><span>···</span></span></code></pre></div><h3 id="初始化redis" tabindex="-1">初始化Redis <a class="header-anchor" href="#初始化redis" aria-label="Permalink to &quot;初始化Redis&quot;">​</a></h3><h4 id="修改配置文件-1" tabindex="-1">修改配置文件 <a class="header-anchor" href="#修改配置文件-1" aria-label="Permalink to &quot;修改配置文件&quot;">​</a></h4><p>修改 <code>yudao\\ruoyi-vue-pro\\yudao-server\\target\\classes</code> 目录下的 <code>application-dev.yaml</code>，主要是修改host地址</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>···  </span></span>
<span class="line"><span># Redis 配置。Redisson 默认的配置足够使用，一般不需要进行调优</span></span>
<span class="line"><span>data:</span></span>
<span class="line"><span>redis:</span></span>
<span class="line"><span>    host: 192.168.6.181 # 地址</span></span>
<span class="line"><span>    port: 6379 # 端口</span></span>
<span class="line"><span>    database: 1 # 数据库索引</span></span>
<span class="line"><span>···</span></span></code></pre></div><p>修改 <code>application.yaml</code> 配置，将 <code>active: local</code> 改成 <code>dev</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  application:</span></span>
<span class="line"><span>    name: yudao-server</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  profiles:</span></span>
<span class="line"><span>    active: local</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  main:</span></span>
<span class="line"><span>    allow-circular-references: true # 允许循环依赖，因为项目是三层架构，无法避免这个情况。</span></span>
<span class="line"><span>···</span></span></code></pre></div><h3 id="启动后端项目" tabindex="-1">启动后端项目 <a class="header-anchor" href="#启动后端项目" aria-label="Permalink to &quot;启动后端项目&quot;">​</a></h3><h4 id="编译项目" tabindex="-1">编译项目 <a class="header-anchor" href="#编译项目" aria-label="Permalink to &quot;编译项目&quot;">​</a></h4><p>使用 IDEA 自带的 Maven 插件，进行项目的编译</p><p>maven终端执行 <code>mvn clean install package &#39;-Dmaven.test.skip=true&#39;</code></p><p>报错的话就改成以下命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mvn install -Dmaven.test.skip=true</span></span></code></pre></div><h4 id="启动项目" tabindex="-1">启动项目 <a class="header-anchor" href="#启动项目" aria-label="Permalink to &quot;启动项目&quot;">​</a></h4><p>执行 <code>yudao\\ruoyi-vue-pro\\yudao-server\\src\\main\\java\\cn\\iocoder\\yudao\\server</code> 目录下的 <code>YudaoServerApplication.java</code>，进行启动。</p><h4 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-label="Permalink to &quot;验证&quot;">​</a></h4><p>启动完成后，使用浏览器访问 <code>http://127.0.0.1:48080</code>地址，返回如下 JSON 字符串，说明成功</p><h2 id="前端项目" tabindex="-1">前端项目 <a class="header-anchor" href="#前端项目" aria-label="Permalink to &quot;前端项目&quot;">​</a></h2><p>使用 <code>VSCode</code> 运行后端项目</p><h3 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 安装 pnpm，提升依赖的安装速度</span></span>
<span class="line"><span>npm config set registry https://registry.npmmirror.com</span></span>
<span class="line"><span>npm install -g pnpm</span></span>
<span class="line"><span># 安装依赖</span></span>
<span class="line"><span>pnpm install</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动服务</span></span>
<span class="line"><span>npm run dev</span></span></code></pre></div><h3 id="修改配置" tabindex="-1">修改配置 <a class="header-anchor" href="#修改配置" aria-label="Permalink to &quot;修改配置&quot;">​</a></h3><p>查看 <code>package.json</code> 配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;i&quot;: &quot;pnpm install&quot;,</span></span>
<span class="line"><span>    &quot;dev&quot;: &quot;vite --mode env.local&quot;,</span></span>
<span class="line"><span>    &quot;dev-server&quot;: &quot;vite --mode dev&quot;,</span></span>
<span class="line"><span>    &quot;ts:check&quot;: &quot;vue-tsc --noEmit&quot;,</span></span>
<span class="line"><span>    &quot;build:local&quot;: &quot;node --max_old_space_size=8192 ./node_modules/vite/bin/vite.js build&quot;,</span></span>
<span class="line"><span>    &quot;build:dev&quot;: &quot;node --max_old_space_size=8192 ./node_modules/vite/bin/vite.js build --mode dev&quot;,</span></span>
<span class="line"><span>    &quot;build:test&quot;: &quot;node --max_old_space_size=8192 ./node_modules/vite/bin/vite.js build --mode test&quot;,</span></span>
<span class="line"><span>    &quot;build:stage&quot;: &quot;node --max_old_space_size=8192 ./node_modules/vite/bin/vite.js build --mode stage&quot;,</span></span>
<span class="line"><span>    &quot;build:prod&quot;: &quot;node --max_old_space_size=8192 ./node_modules/vite/bin/vite.js build --mode prod&quot;,</span></span>
<span class="line"><span>    &quot;serve:dev&quot;: &quot;vite preview --mode dev&quot;,</span></span>
<span class="line"><span>    &quot;serve:prod&quot;: &quot;vite preview --mode prod&quot;,</span></span>
<span class="line"><span>    &quot;preview&quot;: &quot;pnpm build:local &amp;&amp; vite preview&quot;,</span></span>
<span class="line"><span>    &quot;clean&quot;: &quot;npx rimraf node_modules&quot;,</span></span>
<span class="line"><span>    &quot;clean:cache&quot;: &quot;npx rimraf node_modules/.cache&quot;,</span></span>
<span class="line"><span>    &quot;lint:eslint&quot;: &quot;eslint --fix --ext .js,.ts,.vue ./src&quot;,</span></span>
<span class="line"><span>    &quot;lint:format&quot;: &quot;prettier --write --loglevel warn \\&quot;src/**/*.{js,ts,json,tsx,css,less,scss,vue,html,md}\\&quot;&quot;,</span></span>
<span class="line"><span>    &quot;lint:style&quot;: &quot;stylelint --fix \\&quot;./src/**/*.{vue,less,postcss,css,scss}\\&quot; --cache --cache-location node_modules/.cache/stylelint/&quot;,</span></span>
<span class="line"><span>    &quot;lint:lint-staged&quot;: &quot;lint-staged -c &quot;</span></span></code></pre></div><p>本地运行的话，修改 <code>yudao\\yudao-ui-admin-vue3</code> 目录下 <code>.env.local</code>，根据实际情况修改 <code>.env.dev</code> <code>.env.test</code> <code>.env.prod</code> 等</p><p>主要修改 <code>VITE_BASE_URL</code> 和 <code>VITE_UPLOAD_URL</code> 的host地址</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 本地开发环境：本地启动所有项目（前端、后端、APP）时使用，不依赖外部环境</span></span>
<span class="line"><span>NODE_ENV=development</span></span>
<span class="line"><span></span></span>
<span class="line"><span>VITE_DEV=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 请求路径</span></span>
<span class="line"><span>VITE_BASE_URL=&#39;http://localhost:48080&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 文件上传类型：server - 后端上传， client - 前端直连上传，仅支持 S3 服务</span></span>
<span class="line"><span>VITE_UPLOAD_TYPE=server</span></span>
<span class="line"><span># 上传路径</span></span>
<span class="line"><span>VITE_UPLOAD_URL=&#39;http://localhost:48080/admin-api/infra/file/upload&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 接口地址</span></span>
<span class="line"><span>VITE_API_URL=/admin-api</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否删除debugger</span></span>
<span class="line"><span>VITE_DROP_DEBUGGER=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否删除console.log</span></span>
<span class="line"><span>VITE_DROP_CONSOLE=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否sourcemap</span></span>
<span class="line"><span>VITE_SOURCEMAP=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 打包路径</span></span>
<span class="line"><span>VITE_BASE_PATH=/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 商城H5会员端域名</span></span>
<span class="line"><span>VITE_MALL_H5_DOMAIN=&#39;http://localhost:3000&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 验证码的开关</span></span>
<span class="line"><span>VITE_APP_CAPTCHA_ENABLE=false</span></span></code></pre></div><h4 id="访问" tabindex="-1">访问 <a class="header-anchor" href="#访问" aria-label="Permalink to &quot;访问&quot;">​</a></h4><p><code>http://localhost/</code></p>`,37),o=[l];function t(i,c,d,r,u,h){return n(),s("div",null,o)}const m=a(p,[["render",t]]);export{q as __pageData,m as default};
