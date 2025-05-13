<!-- markdownlint-disable MD033 MD041-->

<p align="center">
  <img src="img/favicon.ico" width="200" height="200"/>
</p>
<div align="center">

# 米米留声机 <sub>Ice Cream Voice Button</sub>
<!-- markdownlint-disable-next-line MD036 -->
_💕 关注雪糕Cheese喵，关注雪糕Cheese谢谢喵 💕_
</div>

### 访问链接 👉 [icecream.qslie.top](https://icecream.qslie.top/)

### 增加语音

- 将所需音频文件以 `param.acc` 形式上传到 `data/voices/` 目录下
- 编写 `data/sections.js` 文件，示例如下：

```js
const sections = [
    {
      title: "曼波",
      // warning: "⚠音量に注意⚠", // 可选
      rows: [
        [ // 第一行按钮
          { text: "哦耶！", param: "哦耶" },
        ],
        [ // 第二行按钮
          { text: "哦耶", param: "哦耶1" },
          { text: "哦耶", param: "哦耶2" },
          { text: "哦哦耶", param: "哦哦耶" }
        ],
        [ // ...
          { text: "曼波", param: "曼波" },
          { text: "曼波", param: "曼波" },
          { text: "曼曼波", param: "曼曼波" }
        ],
      ]
    },
    { // 其他板块
      title: "稀有",
      rows: [...]
    }
    //...
];
```

### 参考项目

- [rarebox](https://github.com/Initsnow/rarebox)
- [MikuTap](https://)

在原项目基础上实现了动态增加按钮，文件分离等优化

### 未来更新方向

- [taffy-button](https://github.com/ChowDPa02k/taffy-button)