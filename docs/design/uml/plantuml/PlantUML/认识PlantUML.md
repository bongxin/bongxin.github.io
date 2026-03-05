---
# layout: home
aside: 'right'
# sidebar: false
---

# 认识PlantUML
官网地址：[https://plantuml.com/zh/](https://plantuml.com/zh/)

## 示例

### 示例1
![](https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80)

``` markdown
![](https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80)
```
### 示例2
<img src='https://www.plantuml.com/plantuml/svg/RSx12O8n38RXUwV80bb0HFuwWXl4Dc2X9jga-nliGP2Uy_3cEynf-7psb7ih37Y1gzvFaAS_MBmLygO2DtvFDaznCwg0mRv-0-sbOfnMZwp-ag911z0-lVwV4V_rld-mr9Zz0G00'>

```markdown
<img src='https://www.plantuml.com/plantuml/svg/RSx12O8n38RXUwV80bb0HFuwWXl4Dc2X9jga-nliGP2Uy_3cEynf-7psb7ih37Y1gzvFaAS_MBmLygO2DtvFDaznCwg0mRv-0-sbOfnMZwp-ag911z0-lVwV4V_rld-mr9Zz0G00'>
```

### 代码

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
