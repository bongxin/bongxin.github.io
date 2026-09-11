# 嵌入 Bilibili 视频移动端自适应

## 获取嵌入代码

![获取嵌入代码](./获取嵌入代码.jpg){ width=640 }

## 修改嵌入代码自适应

### 官方默认嵌入代码

```html
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=9951809&bvid=BV1ex411D7jh&cid=16451857&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
```

### 官方默认嵌入代码

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

### 效果

<div style="position: relative; padding: 30% 45%;">
  <iframe
    style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
    src="//player.bilibili.com/player.html?isOutside=true&aid=35054282&bvid=BV15b411P786&cid=61415063&p=1&autoplay=0&muted=false"
    scrolling="no"
    border="0"
    frameborder="no"
    framespacing="0"
    allowfullscreen="true"
  ></iframe>
</div>

## 参数说明

| Key        | 说明                                                                                     |
|------------|------------------------------------------------------------------------------------------|
| aid        | 视频ID。就是B站的 avxxxx 后面的数字。                                                   |
| cid        | 应该是客户端id, clientId 的缩写(推测的, 不一定准确)。经过测试, 这个字段不填也没关系。       |
| page       | 第几个视频, 起始下标为 1 (默认值也是为1)。就是B站视频, 选集里的, 第几个视频。             |
| as_wide    | 是否宽屏。1: 宽屏, 0: 小屏。                                                             |
| high_quality | 是否高清。1: 高清, 0: 最低视频质量(默认)。如视频有 360p 720p 1080p 三种, 默认或者 high_quality=0 是最低 360p，high_quality=1 是最高1080p。 |
| danmaku    | 是否开启弹幕。1: 开启(默认), 0: 关闭。                                                  |
| autoplay   | 是否自动播放。1: 开启(默认), 0: 关闭。                                                  |
| muted      | 是否静音播放。true : 开启(默认), false: 关闭。                                                  |