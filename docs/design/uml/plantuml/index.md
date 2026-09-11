---
aside: 'right'
order: 0
---

# PlantUML

官网地址：[https://plantuml.com/zh/](https://plantuml.com/zh/)

PlantUML 是一款用文本描述生成 UML 图的工具，支持序列图、用例图、类图、活动图、状态图等。语法简洁，可与多种文档/维基/博客集成，也可通过官方或第三方服务生成图片链接嵌入页面。

在线服务器：[https://www.plantuml.com/plantuml](https://www.plantuml.com/plantuml)（将源码编码后放入 `/svg/` 或 `/png/` 路径即可生成图片）

## 示例1：官方 SVG 链接（Markdown 图片语法）

### 效果
![](https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80)

### 代码
```markdown
![](https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80)
```

::: tip 说明
URL 中的长字符串是 PlantUML 源码的编码结果，可在 [PlantUML 在线编辑器](https://www.plantuml.com/plantuml/uml) 中编写源码并获取编码后的链接。
:::

## 示例2：官方 SVG 链接（HTML img 标签）

### 效果
<img src='https://www.plantuml.com/plantuml/svg/RSx12O8n38RXUwV80bb0HFuwWXl4Dc2X9jga-nliGP2Uy_3cEynf-7psb7ih37Y1gzvFaAS_MBmLygO2DtvFDaznCwg0mRv-0-sbOfnMZwp-ag911z0-lVwV4V_rld-mr9Zz0G00'>

### 代码
```html
<img src='https://www.plantuml.com/plantuml/svg/RSx12O8n38RXUwV80bb0HFuwWXl4Dc2X9jga-nliGP2Uy_3cEynf-7psb7ih37Y1gzvFaAS_MBmLygO2DtvFDaznCwg0mRv-0-sbOfnMZwp-ag911z0-lVwV4V_rld-mr9Zz0G00'>
```

## 示例3：通过 Gravizo 渲染 PlantUML 源码

[Gravizo](https://www.gravizo.com/) 支持在 URL 中直接携带 PlantUML 源码，适合在无法使用编码链接的场景下使用。

### 3.1 序列图（登录流程）

#### 效果

<img src='https://g.gravizo.com/svg?
@startuml;
participant User;
participant Application;
participant Database;
User -> Application: 输入用户名和密码;
activate Application;
Application -> Database: 验证用户名和密码;
activate Database;
Database --> Application: 验证通过;
deactivate Database;
Application --> User: 登录成功;
deactivate Application;
@enduml
'>
#### 代码
```
<img src='https://g.gravizo.com/svg?
@startuml;
participant User;
participant Application;
participant Database;
User -> Application: 输入用户名和密码;
activate Application;
Application -> Database: 验证用户名和密码;
activate Database;
Database --> Application: 验证通过;
deactivate Database;
Application --> User: 登录成功;
deactivate Application;
@enduml
'>
```

### 3.2 序列图（参与者类型）

#### 效果
<img src='https://g.gravizo.com/svg?
@startuml
participant Participant as Foo;
actor       Actor       as Foo1;
boundary    Boundary    as Foo2;
control     Control     as Foo3;
entity      Entity      as Foo4;
database    Database    as Foo5;
collections Collections as Foo6;
queue       Queue       as Foo7;
Foo -> Foo1 : To actor;
Foo -> Foo2 : To boundary;
Foo -> Foo3 : To control;
Foo -> Foo4 : To entity;
Foo -> Foo5 : To database;
Foo -> Foo6 : To collections;
Foo -> Foo7: To queue;
@enduml
'>
#### 代码
```
<img src='https://g.gravizo.com/svg?
@startuml
participant Participant as Foo;
actor       Actor       as Foo1;
boundary    Boundary    as Foo2;
control     Control     as Foo3;
entity      Entity      as Foo4;
database    Database    as Foo5;
collections Collections as Foo6;
queue       Queue       as Foo7;
Foo -> Foo1 : To actor;
Foo -> Foo2 : To boundary;
Foo -> Foo3 : To control;
Foo -> Foo4 : To entity;
Foo -> Foo5 : To database;
Foo -> Foo6 : To collections;
Foo -> Foo7: To queue;
@enduml
'>
```

### 3.3 用例图

#### 效果
<img src='https://g.gravizo.com/svg?
@startuml;
left to right direction;
actor "管理用户" as g;
package Professional {;
  actor Chef as c;
  actor "Food Critic" as fc;
};
package Restaurant {;
  usecase "Eat Food" as UC1;
  usecase "Pay for Food" as UC2;
  usecase "Drink" as UC3;
  usecase "Review" as UC4;
};
fc --> UC4;
g --> UC1;
g --> UC2;
g --> UC3;
@enduml;
'>
#### 代码
```
<img src='https://g.gravizo.com/svg?
@startuml;
left to right direction;
actor "管理用户" as g;
package Professional {;
  actor Chef as c;
  actor "Food Critic" as fc;
};
package Restaurant {;
  usecase "Eat Food" as UC1;
  usecase "Pay for Food" as UC2;
  usecase "Drink" as UC3;
  usecase "Review" as UC4;
};
fc --> UC4;
g --> UC1;
g --> UC2;
g --> UC3;
@enduml;
'>
```
