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

			C = new function() {
				function t() {
					c && c()
				}

				function i(n, a) {
					f && f(n, a)
				}
				var r;
				this.init = function(n, a) {
					f = a,
						function(n) {
							c = n;
							for (var a = [], e = 0; e < o; e++) a[e] = [e + ".mp3"];
							(r = new WebAudioManager).load("data/track/track.json", a, t, i)
						}(n)
				}, this.update = function() {
					! function() {
						if (l) {
							var n = 1e3 * (aidn.___waContext.currentTime - m);
							if (v * p < n) {
								var a = (v = Math.floor(n / p) + 1) * p - n;
								if (0 <= a) {
									if (!T) return;
									for (var e = (v - 1) % u, t = d.length, i = 0; i < t; i++) {
										var o = d[i][e];
										0 <= o && r.play(o, a / 1e3, s[o])
									}
								}
							}
						}
					}()
				}, this.start = function() {
					l = !0, v = 0
				};
				this.end = function() {
					l = !1, v = 0
				};
				var l = !1,
					o = 11;
				this.length = o;
				for (var s = [], n = 0; n < o; n++) s[n] = 1.2;
				s[1] *= .6;
				var d = [
						[0, 1, 2, 1],
						[]
					],
					a = "";
				a += "3443443443443434", a += "5665665665665656", a += "7887887887887878";
				var e = (a += "9119119119119191").length;
				for (n = 0; n < e; n++) {
					var h = parseInt(a.charAt(n));
					1 == h && (h = 10), d[1][n] = h, 4 <= n && (d[0][n] = d[0][n % 4])
				}
				var c, f, u = d[0].length,
					v = 0,
					p = 6e4 / 280
			},
			R = new function() {
				var o, r = -1,
					l = -1;

				function t() {
					c && c()
				}

				function i(n, a) {
					e && e(n, a)
				}
				this.init = function(n, a) {
					e = a,
						function(n) {
							c = n;
							for (var a = [], e = 0; e < s; e++) a[e] = [e + ".mp3"];
							(o = new WebAudioManager).load("data/main/main.json", a, t, i)
						}(n)
				};
				this.play = function(n, a) {
					var e = 1e3 * (aidn.___waContext.currentTime + h[n] - m),
						t = Math.floor(e / f);
					t == r && 0 <= l && o.stop(l), r = t, l = n;
					var i = f - e % f;
					o.play(n, i / 1e3, d[n])
				};
				var s = 1;
				this.length = s;
				for (var d = [], h = [], n = 0; n < s; n++) d[n] = 1, h[n] = .05;
				for (h[6] = .08, h[20] = .1, h[23] = .1, d[1] = 1.3, d[2] = 1.6, d[3] = 1.35, d[5] = 1.7, d[9] = .8, d[17] = .8, d[22] = .9, d[25] = .7, d[29] = 1.2, n = 0; n < s; n++) d[n] *= 1.2;
				var c, e, f = 6e4 / 280
			},