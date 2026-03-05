---
# layout: home
aside: 'right'
# sidebar: false
---

# 认识Gravizo
官网地址：[https://www.gravizo.com/](https://www.gravizo.com/)

Gravizo 是一个绘图引擎，只需要用 Url 包含 PlantUML 代码放到一个 img 标签中，就可以在线实时的绘制出我们需要的 UML 图。

## 示例1：支持PlantUML语法

### 效果
<img src='https://g.gravizo.com/svg?
@startuml;
actor User;
participant "First Class" as A;
participant "Second Class" as B;
participant "Last Class" as C;
User -> A: DoWork;
activate A;
A -> B: Create Request;
activate B;
B -> C: DoWork;
activate C;
C --> B: WorkDone;
destroy C;
B --> A: Request Created;
deactivate B;
A --> User: Done;
deactivate A;
@enduml
'>

### 代码
```
<img src='https://g.gravizo.com/svg?
@startuml;
actor User;
participant "First Class" as A;
participant "Second Class" as B;
participant "Last Class" as C;
User -> A: DoWork;
activate A;
A -> B: Create Request;
activate B;
B -> C: DoWork;
activate C;
C --> B: WorkDone;
destroy C;
B --> A: Request Created;
deactivate B;
A --> User: Done;
deactivate A;
@enduml
'>
```

## 示例2：支持Graphviz语法

### 效果
<img src='https://g.gravizo.com/svg?
digraph G {Hello->World}
'>

### 代码
```
<img src='https://g.gravizo.com/svg?
digraph G {Hello->World}
'>
```

## 示例3：不支持Mermaid语法

### 效果
<img src='https://g.gravizo.com/svg?
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
'>

### 代码
```
<img src='https://g.gravizo.com/svg?
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
'>
```

## 示例4：支持Graphviz DOT语法

### 效果
<img src='https://g.gravizo.com/svg?
digraph WaterCycle {
  layout=neato;
  overlap=false;
  node [shape=rectangle];
  0 [label="大气中的水蒸气"];
  1 [label="凝结成云"];
  2 [label="形成降水"];
  3 [label="降水到地面"];
  4 [label="形成地表水"];
  5 [label="流入河流"];
  6 [label="进入地下水"];
  7 [label="蒸发"];
  8 [label="回到大气中的水蒸气"];
  0 -> 1;
  1 -> 2;
  2 -> 3;
  3 -> 4;
  4 -> 5;
  4 -> 6;
  5 -> 7;
  6 -> 7;
  7 -> 8;
  8 -> 0;
}
'>

### 代码
```
digraph WaterCycle {
  layout=neato;
  overlap=false;
  node [shape=rectangle];

  0 [label="大气中的水蒸气"];
  1 [label="凝结成云"];
  2 [label="形成降水"];
  3 [label="降水到地面"];
  4 [label="形成地表水"];
  5 [label="流入河流"];
  6 [label="进入地下水"];
  7 [label="蒸发"];
  8 [label="回到大气中的水蒸气"];

  0 -> 1;
  1 -> 2;
  2 -> 3;
  3 -> 4;
  4 -> 5;
  4 -> 6;
  5 -> 7;
  6 -> 7;
  7 -> 8;
  8 -> 0;
}

```
