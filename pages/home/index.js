didMount = function (props) {
  var $content = $("#content");
  $content.html(
    '<h3>当前异步渲染首页</h3><p style="color:#099fde;">' +
      JSON.stringify(props) +
      '</p><button class="btn msg-btn">点我</button><input class="form-control"/><button class="btn out-btn">退出</button>'
  );
  console.log("首页回调" + JSON.stringify(props));
  $(".msg-btn").click(function () {
    layer.msg("首页回调" + JSON.stringify(props), {
      icon: 1,
      shade: 0.3,
      time: 2000,
    });
  });

  $(".out-btn").click(function () {
    window.location.href = "login.html#/login";
  });
};

unMount = function () {
  $("#content").off("click", "**");
};
