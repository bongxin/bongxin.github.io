import{_ as a,c as t,o as n,aS as s}from"./chunks/framework.Cuoppmxr.js";const m=JSON.parse('{"title":"认识PlantUML","description":"","frontmatter":{"aside":"right"},"headers":[],"relativePath":"skill/design/uml/plantuml/PlantUML/认识PlantUML.md","filePath":"skill/design/uml/plantuml/PlantUML/认识PlantUML.md","lastUpdated":1734252055000}'),o={name:"skill/design/uml/plantuml/PlantUML/认识PlantUML.md"},i=s(`<h1 id="认识plantuml" tabindex="-1">认识PlantUML <a class="header-anchor" href="#认识plantuml" aria-label="Permalink to &quot;认识PlantUML&quot;">​</a></h1><p>官网地址：<a href="https://plantuml.com/zh/" target="_blank" rel="noreferrer">https://plantuml.com/zh/</a></p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><h3 id="示例1" tabindex="-1">示例1 <a class="header-anchor" href="#示例1" aria-label="Permalink to &quot;示例1&quot;">​</a></h3><p><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80" alt=""></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="示例2" tabindex="-1">示例2 <a class="header-anchor" href="#示例2" aria-label="Permalink to &quot;示例2&quot;">​</a></h3><img src="https://www.plantuml.com/plantuml/svg/RSx12O8n38RXUwV80bb0HFuwWXl4Dc2X9jga-nliGP2Uy_3cEynf-7psb7ih37Y1gzvFaAS_MBmLygO2DtvFDaznCwg0mRv-0-sbOfnMZwp-ag911z0-lVwV4V_rld-mr9Zz0G00"><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.plantuml.com/plantuml/svg/RSx12O8n38RXUwV80bb0HFuwWXl4Dc2X9jga-nliGP2Uy_3cEynf-7psb7ih37Y1gzvFaAS_MBmLygO2DtvFDaznCwg0mRv-0-sbOfnMZwp-ag911z0-lVwV4V_rld-mr9Zz0G00&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h3><p><img src="https://g.gravizo.com/svg?
@startuml;
participant User;
participant Application;
participant Database;
User -&gt; Application: 输入用户名和密码;
activate Application;
Application -&gt; Database: 验证用户名和密码;
activate Database;
Database --&gt; Application: 验证通过;
deactivate Database;
Application --&gt; User: 登录成功;
deactivate Application;
@enduml
"></p><p><img src="https://g.gravizo.com/svg?
@startuml
participant Participant as Foo;
actor       Actor       as Foo1;
boundary    Boundary    as Foo2;
control     Control     as Foo3;
entity      Entity      as Foo4;
database    Database    as Foo5;
collections Collections as Foo6;
queue       Queue       as Foo7;
Foo -&gt; Foo1 : To actor;
Foo -&gt; Foo2 : To boundary;
Foo -&gt; Foo3 : To control;
Foo -&gt; Foo4 : To entity;
Foo -&gt; Foo5 : To database;
Foo -&gt; Foo6 : To collections;
Foo -&gt; Foo7: To queue;
@enduml
"></p><p><img src="https://g.gravizo.com/svg?
@startuml;
left to right direction;
actor &quot;管理用户&quot; as g;
package Professional {;
  actor Chef as c;
  actor &quot;Food Critic&quot; as fc;
};
package Restaurant {;
  usecase &quot;Eat Food&quot; as UC1;
  usecase &quot;Pay for Food&quot; as UC2;
  usecase &quot;Drink&quot; as UC3;
  usecase &quot;Review&quot; as UC4;
};
fc --&gt; UC4;
g --&gt; UC1;
g --&gt; UC2;
g --&gt; UC3;
@enduml;
"></p>`,13),e=[i];function l(p,r,c,h,d,g){return n(),t("div",null,e)}const k=a(o,[["render",l]]);export{m as __pageData,k as default};
