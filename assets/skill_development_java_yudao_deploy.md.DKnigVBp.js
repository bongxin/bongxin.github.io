import{_ as a,c as s,o as n,aS as e}from"./chunks/framework.Cuoppmxr.js";const g=JSON.parse('{"title":"基础环境准备","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"skill/development/java/yudao/deploy.md","filePath":"skill/development/java/yudao/deploy.md","lastUpdated":1727808176000}'),p={name:"skill/development/java/yudao/deploy.md"},l=e(`<h1 id="基础环境准备" tabindex="-1">基础环境准备 <a class="header-anchor" href="#基础环境准备" aria-label="Permalink to &quot;基础环境准备&quot;">​</a></h1><h2 id="docker部署" tabindex="-1">Docker部署 <a class="header-anchor" href="#docker部署" aria-label="Permalink to &quot;Docker部署&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">小贴士</p><p>镜像加速：<a href="https://github.com/DaoCloud/public-image-mirror" target="_blank" rel="noreferrer">DaoCloud / public-image-mirror</a></p></div><p>::: <a href="https://docker.aityp.com/" target="_blank" rel="noreferrer">全站镜像索引数量https://docker.aityp.com/</a> :::</p><h3 id="mysql" tabindex="-1">MySQL <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;MySQL&quot;">​</a></h3><h4 id="创建挂载目录" tabindex="-1">创建挂载目录 <a class="header-anchor" href="#创建挂载目录" aria-label="Permalink to &quot;创建挂载目录&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir /work/mysql</span></span></code></pre></div><h4 id="创建docker容器" tabindex="-1">创建Docker容器 <a class="header-anchor" href="#创建docker容器" aria-label="Permalink to &quot;创建Docker容器&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run -v /work/mysql/:/var/lib/mysql \\</span></span>
<span class="line"><span>-p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 \\</span></span>
<span class="line"><span>--restart=always --name yudao-mysql -d mysql</span></span></code></pre></div><h5 id="国内加速" tabindex="-1">国内加速 <a class="header-anchor" href="#国内加速" aria-label="Permalink to &quot;国内加速&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run -v /work/mysql/:/var/lib/mysql \\</span></span>
<span class="line"><span>-p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 \\</span></span>
<span class="line"><span>--restart=always --name yudao-mysql -d -P m.daocloud.io/docker.io/library/mysql</span></span></code></pre></div><h4 id="创建数据库" tabindex="-1">创建数据库 <a class="header-anchor" href="#创建数据库" aria-label="Permalink to &quot;创建数据库&quot;">​</a></h4><ul><li>数据库名：<code>ruoyi-vue-pro</code></li><li>sql脚本：<code>ruoyi-vue-pro\\sql\\mysql\\ruoyi-vue-pro.sql</code></li><li>数据库图形化工具：<a href="https://navicat.com.cn/download/direct-download?product=navicat17_premium_cs_x64.exe&amp;location=1" target="_blank" rel="noreferrer">Navicat Premium 17</a></li></ul><div class="tip custom-block"><p class="custom-block-title">小贴士</p><p>Navicat Premium 17 补丁</p><ul><li>链接:<a href="https://pan.baidu.com/s/19s4_35KQMd_gywgtqIulaQ" target="_blank" rel="noreferrer">https://pan.baidu.com/s/19s4_35KQMd_gywgtqIulaQ</a></li><li>提取码:9gm3</li></ul></div><h3 id="minio" tabindex="-1">MinIO <a class="header-anchor" href="#minio" aria-label="Permalink to &quot;MinIO&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run -p 9000:9000 -p 9001:9001 \\</span></span>
<span class="line"><span>           --name yudao-minio \\</span></span>
<span class="line"><span>           -e MINIO_ACCESS_KEY=admin \\</span></span>
<span class="line"><span>           -e MINIO_SECRET_KEY=password \\</span></span>
<span class="line"><span>           -v /work/minio:/data \\</span></span>
<span class="line"><span>           minio/minio server /data --console-address &quot;:9001&quot;</span></span></code></pre></div><h4 id="国内加速-1" tabindex="-1">国内加速 <a class="header-anchor" href="#国内加速-1" aria-label="Permalink to &quot;国内加速&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker pull swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/minio/minio:RELEASE.2024-09-22T00-33-43Z</span></span>
<span class="line"><span>docker tag  swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/minio/minio:RELEASE.2024-09-22T00-33-43Z  docker.io/minio/minio:RELEASE.2024-09-22T00-33-43Z</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run -d -p 9000:9000 -p 9001:9001 \\</span></span>
<span class="line"><span>           --name yudao-minio \\</span></span>
<span class="line"><span>           -e MINIO_ACCESS_KEY=admin \\</span></span>
<span class="line"><span>           -e MINIO_SECRET_KEY=password \\</span></span>
<span class="line"><span>           -v /work/minio:/data \\</span></span>
<span class="line"><span>           docker.io/minio/minio:RELEASE.2024-09-22T00-33-43Z server /data --console-address &quot;:9001&quot;</span></span></code></pre></div><h3 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h3><h4 id="创建docker容器-1" tabindex="-1">创建Docker容器 <a class="header-anchor" href="#创建docker容器-1" aria-label="Permalink to &quot;创建Docker容器&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>           --name yudao-nginx \\</span></span>
<span class="line"><span>           --restart always \\</span></span>
<span class="line"><span>           -p 80:80 \\</span></span>
<span class="line"><span>           -p 443:443 \\</span></span>
<span class="line"><span>           -e TZ=Asia/Shanghai \\</span></span>
<span class="line"><span>           -v /work/nginx/nginx.conf:/etc/nginx/nginx.conf \\</span></span>
<span class="line"><span>           -v /work/nginx/conf.d:/etc/nginx/conf.d \\</span></span>
<span class="line"><span>           -v /work/nginx/logs:/var/log/nginx \\</span></span>
<span class="line"><span>           -v /work/nginx/cert:/etc/nginx/cert \\</span></span>
<span class="line"><span>           -v /work/nginx/html:/usr/share/nginx/html \\</span></span>
<span class="line"><span>           9527c0f683c3</span></span></code></pre></div><h4 id="手动创建-work-nginx-nginx-conf" tabindex="-1">手动创建 <code>/work/nginx/nginx.conf</code> <a class="header-anchor" href="#手动创建-work-nginx-nginx-conf" aria-label="Permalink to &quot;手动创建 \`/work/nginx/nginx.conf\`&quot;">​</a></h4><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># User: nobody</span></span>
<span class="line"><span>user  nginx;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Worker Processes: 1</span></span>
<span class="line"><span>worker_processes  auto;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Error Log &amp; Level</span></span>
<span class="line"><span>error_log  /var/log/nginx/error.log warn;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># PID File</span></span>
<span class="line"><span>pid        /var/run/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Include modules configurations.</span></span>
<span class="line"><span>include /etc/nginx/modules-enabled/*.conf;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    ##</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # MIME Types</span></span>
<span class="line"><span>    include       mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Logging Parameters</span></span>
<span class="line"><span>    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    tcp_nopush      on;</span></span>
<span class="line"><span>    tcp_nodelay     on;</span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span>    types_hash_max_size 2048;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # server_names_hash_bucket_size 64;</span></span>
<span class="line"><span>    # server_name_in_redirect off;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    include /etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span>    include /etc/nginx/sites-enabled/*;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-label="Permalink to &quot;Redis&quot;">​</a></h3><h4 id="创建docker容器-2" tabindex="-1">创建Docker容器 <a class="header-anchor" href="#创建docker容器-2" aria-label="Permalink to &quot;创建Docker容器&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run -d --name yudao-redis --restart=always -p 6379:6379 m.daocloud.io/docker.io/redis</span></span></code></pre></div>`,26),i=[l];function o(c,t,r,d,h,u){return n(),s("div",null,i)}const k=a(p,[["render",o]]);export{g as __pageData,k as default};
