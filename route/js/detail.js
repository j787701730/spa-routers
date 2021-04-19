SPA_RESOLVE_INIT = function (transition) {
  console.log($);
  function foo() {
    console.log($(this).html());
  }
  $("#content").off("click", "p", "**");
  document.getElementById("content").innerHTML =
    '<p class="bg-primary" style="color:red;">当前异步渲染详情页' +
    JSON.stringify(transition) +
    '</p><button class="btn">点我</button><input class="form-control"/>';
  console.log("首页回调" + JSON.stringify(transition));
  $("#content")
    .on("click", "p", foo)
    .on("keydown", ".form-control", function (e) {
      console.log(e.keyCode);
    })
    .on("click", ".btn", function () {
      alert("btn");
    });

  $("#content input").val("hello world");
};
