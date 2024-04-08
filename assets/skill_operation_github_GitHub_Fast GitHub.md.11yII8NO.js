import{_ as a,c as e,o as t,a2 as i}from"./chunks/framework.ODoktiSX.js";const _=JSON.parse('{"title":"FastGithub","description":"","frontmatter":{},"headers":[],"relativePath":"skill/operation/github/GitHub/Fast GitHub.md","filePath":"skill/operation/github/GitHub/Fast GitHub.md","lastUpdated":1712575434000}'),o={name:"skill/operation/github/GitHub/Fast GitHub.md"},l=i('<h1 id="fastgithub" tabindex="-1">FastGithub <a class="header-anchor" href="#fastgithub" aria-label="Permalink to &quot;FastGithub&quot;">​</a></h1><p>github加速神器，解决github打不开、用户头像无法加载、releases无法上传下载、git-clone、git-pull、git-push失败等问题。</p><h2 id="_1-程序下载" tabindex="-1">1 程序下载 <a class="header-anchor" href="#_1-程序下载" aria-label="Permalink to &quot;1 程序下载&quot;">​</a></h2><ul><li><a href="https://github.com/dotnetcore/fastgithub/releases" target="_blank" rel="noreferrer">github-release</a></li><li>Q群1 <a href="https://qm.qq.com/cgi-bin/qm/qr?k=cx_MgEIvoo1EMkrKg5tXz8vMdtPap3Rw&amp;jump_from=webapi" target="_blank" rel="noreferrer">307306673</a> [已满]</li><li>Q群2 <a href="https://qm.qq.com/cgi-bin/qm/qr?k=6BBJ1nrJwe1o1E4-NJfwSOP-C4sMGc4q&amp;jump_from=webapi" target="_blank" rel="noreferrer">742376932</a></li><li>Q群3 <a href="https://jq.qq.com/?_wv=1027&amp;k=1YpGW564" target="_blank" rel="noreferrer">597131950</a></li><li>清华云盘 <a href="https://cloud.tsinghua.edu.cn/d/df482a15afb64dfeaff8/" target="_blank" rel="noreferrer">https://cloud.tsinghua.edu.cn/d/df482a15afb64dfeaff8/</a></li></ul><h2 id="_2-部署方式" tabindex="-1">2 部署方式 <a class="header-anchor" href="#_2-部署方式" aria-label="Permalink to &quot;2 部署方式&quot;">​</a></h2><h3 id="_2-1-windows-x64桌面" tabindex="-1">2.1 windows-x64桌面 <a class="header-anchor" href="#_2-1-windows-x64桌面" aria-label="Permalink to &quot;2.1 windows-x64桌面&quot;">​</a></h3><ul><li>双击运行FastGithub.UI.exe</li></ul><h3 id="_2-2-windows-x64服务" tabindex="-1">2.2 windows-x64服务 <a class="header-anchor" href="#_2-2-windows-x64服务" aria-label="Permalink to &quot;2.2 windows-x64服务&quot;">​</a></h3><ul><li><code>fastgithub.exe start</code> // 以windows服务安装并启动</li><li><code>fastgithub.exe stop</code> // 以windows服务卸载并删除</li></ul><h3 id="_2-3-linux-x64终端" tabindex="-1">2.3 linux-x64终端 <a class="header-anchor" href="#_2-3-linux-x64终端" aria-label="Permalink to &quot;2.3 linux-x64终端&quot;">​</a></h3><ul><li><code>sudo ./fastgithub</code></li><li>设置系统自动代理为<code>http://127.0.0.1:38457</code>，或手动代理http/https为<code>127.0.0.1:38457</code></li></ul><h3 id="_2-4-linux-x64服务" tabindex="-1">2.4 linux-x64服务 <a class="header-anchor" href="#_2-4-linux-x64服务" aria-label="Permalink to &quot;2.4 linux-x64服务&quot;">​</a></h3><ul><li><code>sudo ./fastgithub start</code> // 以systemd服务安装并启动</li><li><code>sudo ./fastgithub stop</code> // 以systemd服务卸载并删除</li><li>设置系统自动代理为<code>http://127.0.0.1:38457</code>，或手动代理http/https为<code>127.0.0.1:38457</code></li></ul><h3 id="_2-5-macos-x64" tabindex="-1">2.5 macOS-x64 <a class="header-anchor" href="#_2-5-macos-x64" aria-label="Permalink to &quot;2.5 macOS-x64&quot;">​</a></h3><ul><li>双击运行fastgithub</li><li>安装cacert/fastgithub.cer并设置信任</li><li>设置系统自动代理为<code>http://127.0.0.1:38457</code>，或手动代理http/https为<code>127.0.0.1:38457</code></li><li><a href="https://github.com/dotnetcore/FastGithub/blob/master/MacOSXConfig.md" target="_blank" rel="noreferrer">具体配置详情</a></li></ul><h3 id="_2-6-docker-compose一键部署" tabindex="-1">2.6 docker-compose一键部署 <a class="header-anchor" href="#_2-6-docker-compose一键部署" aria-label="Permalink to &quot;2.6 docker-compose一键部署&quot;">​</a></h3><ul><li>准备好docker 18.09, docker-compose.</li><li>在源码目录下，有一个docker-compose.yaml 文件，专用于在实际项目中，临时使用github.com源码，而做的demo配置。</li><li>根据自己的需要更新docker-compose.yaml中的sample和build镜像即可完成拉github.com源码加速，并基于源码做后续的操作。</li></ul><h2 id="_3-软件功能" tabindex="-1">3 软件功能 <a class="header-anchor" href="#_3-软件功能" aria-label="Permalink to &quot;3 软件功能&quot;">​</a></h2><ul><li>提供域名的纯净IP解析；</li><li>提供IP测速并选择最快的IP；</li><li>提供域名的tls连接自定义配置；</li><li>google的CDN资源替换，解决大量国外网站无法加载js和css的问题；</li></ul><h2 id="_4-证书验证" tabindex="-1">4 证书验证 <a class="header-anchor" href="#_4-证书验证" aria-label="Permalink to &quot;4 证书验证&quot;">​</a></h2><h3 id="_4-1-git" tabindex="-1">4.1 git <a class="header-anchor" href="#_4-1-git" aria-label="Permalink to &quot;4.1 git&quot;">​</a></h3><p>git操作提示<code>SSL certificate problem</code><br> 需要关闭git的证书验证：<code>git config --global http.sslverify false</code></p><h3 id="_4-2-firefox" tabindex="-1">4.2 firefox <a class="header-anchor" href="#_4-2-firefox" aria-label="Permalink to &quot;4.2 firefox&quot;">​</a></h3><p>firefox提示<code>连接有潜在的安全问题</code><br> 设置-&gt;隐私与安全-&gt;证书-&gt;查看证书-&gt;证书颁发机构，导入cacert/fastgithub.cer，勾选“信任由此证书颁发机构来标识网站”</p><h2 id="_5-安全性说明" tabindex="-1">5 安全性说明 <a class="header-anchor" href="#_5-安全性说明" aria-label="Permalink to &quot;5 安全性说明&quot;">​</a></h2><p>FastGithub为每台不同的主机生成自颁发CA证书，保存在cacert文件夹下。客户端设备需要安装和无条件信任自颁发的CA证书，请不要将证书私钥泄露给他人，以免造成损失。</p><h2 id="_6-合法性说明" tabindex="-1">6 合法性说明 <a class="header-anchor" href="#_6-合法性说明" aria-label="Permalink to &quot;6 合法性说明&quot;">​</a></h2><p>《国际联网暂行规定》第六条规定：“计算机信息网络直接进行国际联网，必须使用邮电部国家公用电信网提供的国际出入口信道。任何单位和个人不得自行建立或者使用其他信道进行国际联网。” FastGithub本地代理使用的都是“公用电信网提供的国际出入口信道”，从国外Github服务器到国内用户电脑上FastGithub程序的流量，使用的是正常流量通道，其间未对流量进行任何额外加密（仅有网页原有的TLS加密，区别于VPN的流量加密），而FastGithub获取到网页数据之后发生的整个代理过程完全在国内，不再适用国际互联网相关之规定。</p>',28),r=[l];function h(s,c,d,u,n,b){return t(),e("div",null,r)}const p=a(o,[["render",h]]);export{_ as __pageData,p as default};
