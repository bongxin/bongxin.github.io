---
title: 嵌入 Bilibili 视频
---

## 写法

```md
@[bilibili](bvid)
@[bilibili](bvid aid cid)
@[bilibili p2](bvid aid cid)
```

### 效果

@[bilibili](BV15b411P786 35054282 61415063)

## 旧方案对照

手写 iframe（仅作对照）：

```html
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=9951809&bvid=BV1ex411D7jh&cid=16451857&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
```

自适应外壳：

```html
<div style="position: relative; padding: 30% 45%;">
  <iframe
    style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
    src="//player.bilibili.com/player.html?isOutside=true&aid=35054282&bvid=BV15b411P786&cid=61415063&p=1"
    scrolling="no"
    border="0"
    frameborder="no"
    framespacing="0"
    allowfullscreen="true"
  ></iframe>
</div>
```

## 播放器 URL 参数

| Key | 说明 |
|-----|------|
| aid | 视频 ID（av 号数字） |
| cid | 分 P / 资源 id；常可省略 |
| page / p | 选集，从 1 起 |
| as_wide | 1 宽屏 / 0 小屏 |
| high_quality | 1 高清 / 0 低清 |
| danmaku | 1 开弹幕 / 0 关 |
| autoplay | 1 自动播放 / 0 关 |
| muted | true 静音 / false 有声 |
