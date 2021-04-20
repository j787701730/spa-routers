## 前端路由实现之 #hash(**基于kliuj的spa-routers修改) ##
**基于kliuj github项目地址：** [spa-routers][1]


[1]: https://github.com/kliuj/spa-routers
[2]: https://sfault-image.b0.upaiyun.com/141/103/1411034344-5821e08e5c623_articlex
[3]: https://github.com/kliuj/spa-routers

## 注意: 本人就玩玩, 切勿生产使用

## 修改地方

### 1.添加jQuery.js

### 2. 添加menus.js 文件 匹配后端导航路由;

```var menu = {
var menu = {
  index: {
    title: "首页",
    path: "/index",
    files: {
      js: ["pages/home/index.js"],
      css: [],
    },
  },
 },
```

### 3.添加两个全局变量didMount(页面js加载完成), unMount(页面销毁, 主要用于注销事件, 定时器等等)

```
didMount = function (props) {
  var $content = $("#content");
  $content.html(
    '<h3>当前异步渲染首页</h3><p style="color:#099fde;">' +
      JSON.stringify(props) +
      '</p><button class="btn">点我</button><input class="form-control"/>'
  );
  console.log("首页回调" + JSON.stringify(props));
  $(".btn").click(function () {
    layer.msg("首页回调" + JSON.stringify(props), {
      icon: 1,
      shade: 0.3,
      time: 2000,
    });
  });
};

unMount = function () {
  $("#content").off("click", "**");
};
```

### 4.修改asyncFun函数, 主要是根据menus.js引入 css 和 js 文件.

### 5.修改beforeEach函数, 在里面移除css文件, 添加title.