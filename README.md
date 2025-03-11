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
      title: "稀有",
      warning: "⚠音量に注意⚠", // 可选
      rows: [
        [ // 第一行按钮
          { text: "谁", param: "谁" },
          { text: "罕", param: "罕" },
          { text: "见", param: "见" },
          { text: "啊", param: "啊" }
        ],
        [ // 第二行按钮
          { text: "谁", param: "谁" },
          { text: "罕", param: "罕" },
          { text: "见", param: "见" },
          { text: "啊", param: "啊" }
        ],
        // 其他行...
      ]
    },
    {
      title: "藏话",
      rows: [
        [
          { text: "你怎么说藏话啊", param: "你怎么说藏话啊" },
          { text: "我是你爹", param: "我是你爹" }
        ],
        // ...
      ]
    },
    //...
];
```

### 参考项目

- [rarebox](https://github.com/Initsnow/rarebox)

在原项目基础上实现了动态增加按钮，文件分离等优化

### 未来更新方向

- [taffy-button](https://github.com/ChowDPa02k/taffy-button)