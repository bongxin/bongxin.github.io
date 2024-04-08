import{_ as s,c as i,o as a,a4 as h}from"./chunks/framework.DX-coKgs.js";const c=JSON.parse('{"title":"基本配置","description":"","frontmatter":{},"headers":[],"relativePath":"skill/operation/ubuntu/基本配置/基本配置.md","filePath":"skill/operation/ubuntu/基本配置/基本配置.md","lastUpdated":1712542844000}'),n={name:"skill/operation/ubuntu/基本配置/基本配置.md"},l=h(`<h1 id="基本配置" tabindex="-1">基本配置 <a class="header-anchor" href="#基本配置" aria-label="Permalink to &quot;基本配置&quot;">​</a></h1><p>针对Ubuntu Server 22.04，基本配置包含网络配置，必备工具安装等</p><h2 id="安装网络工具net-tool" tabindex="-1">安装网络工具net-tool <a class="header-anchor" href="#安装网络工具net-tool" aria-label="Permalink to &quot;安装网络工具net-tool&quot;">​</a></h2><p>系统默认是不预装net-tool,因此ifconfig是不生效的，所以需执行一下命令安装</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> net-tools</span></span></code></pre></div><h2 id="配置静态ip地址" tabindex="-1">配置静态IP地址 <a class="header-anchor" href="#配置静态ip地址" aria-label="Permalink to &quot;配置静态IP地址&quot;">​</a></h2><p>修改网络配置需要管理员权限</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/netplan/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> su</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 00-installer-config.yaml</span></span></code></pre></div><p>配置信息如下</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">network</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ethernets</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enp0s6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      addresses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">192.168.1.249/24</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      routes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">default</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          via</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">192.168.1.1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      nameservers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        addresses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8.8.8.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        search</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span></code></pre></div><p>调整 /etc/netplan 配置后，需要执行以下命令方能生效：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netplan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span></span></code></pre></div><blockquote><p>Netplan —— 抽象网络配置生成器 ，是一个用于配置 Linux 网络的简单工具。 通过 Netplan ，你只需用一个 YAML 文件描述每个网络接口需要配置成啥样即可。</p></blockquote><h2 id="配置防火墙ufw-uncomplicated-firewall" tabindex="-1">配置防火墙UFW（Uncomplicated Firewall） <a class="header-anchor" href="#配置防火墙ufw-uncomplicated-firewall" aria-label="Permalink to &quot;配置防火墙UFW（Uncomplicated Firewall）&quot;">​</a></h2><p>一款轻量化的工具，主要用于对输入输出的流量进行监控，常见的用于开放端口</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span></span></code></pre></div><h3 id="设置防火墙默认状态" tabindex="-1">设置防火墙默认状态 <a class="header-anchor" href="#设置防火墙默认状态" aria-label="Permalink to &quot;设置防火墙默认状态&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allow</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deny</span></span></code></pre></div><h3 id="开启-关闭防火墙" tabindex="-1">开启/关闭防火墙 <a class="header-anchor" href="#开启-关闭防火墙" aria-label="Permalink to &quot;开启/关闭防火墙&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disable</span></span></code></pre></div><h3 id="重启防火墙" tabindex="-1">重启防火墙 <a class="header-anchor" href="#重启防火墙" aria-label="Permalink to &quot;重启防火墙&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span></span></code></pre></div><h3 id="开启-禁用服务" tabindex="-1">开启/禁用服务 <a class="header-anchor" href="#开启-禁用服务" aria-label="Permalink to &quot;开启/禁用服务&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [service]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deny</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [service]</span></span></code></pre></div><h3 id="打开-关闭端口" tabindex="-1">打开/关闭端口 <a class="header-anchor" href="#打开-关闭端口" aria-label="Permalink to &quot;打开/关闭端口&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [port]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deny</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [port]</span></span></code></pre></div><h3 id="查看防火墙状态" tabindex="-1">查看防火墙状态 <a class="header-anchor" href="#查看防火墙状态" aria-label="Permalink to &quot;查看防火墙状态&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span></code></pre></div><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allow</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 53</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 允许外部访问53端口</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcp/udp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allow</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3690</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 允许外部访问3690端口</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">svn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.111</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 允许此IP访问所有的本机端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> proto</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 192.168.0.0/24</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> any</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 22</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  允许指定的IP段访问特定端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> smtp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 删除上面建立的某条规则，比如删除svn端口就是</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allow</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3690</span></span></code></pre></div>`,31),t=[l];function e(p,k,d,r,F,o){return a(),i("div",null,t)}const E=s(n,[["render",e]]);export{c as __pageData,E as default};
