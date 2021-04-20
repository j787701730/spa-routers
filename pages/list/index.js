didMount = function (props) {
  var $content = $("#content");
  $content.html(
    '<h3>当前异步渲染列表页</h3><p style="color:#099fde;">' +
      JSON.stringify(props) +
      '</p><div id="main" style="height: 500px"></div><button class="btn">点我</button><input class="form-control"/>'
  );
  console.log("列表页回调" + JSON.stringify(props));

  var myChart = echarts.init(document.getElementById("main"));

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    legend: {
      data: ["销量"],
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  $(".btn").click(function () {
    layer.msg("列表页回调" + JSON.stringify(props), {
      icon: 1,
      shade: 0.3,
      time: 2000,
    });
  });
};
