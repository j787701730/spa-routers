var menu = {
  index: {
    title: "首页",
    path: "/index",
    files: {
      js: ["pages/home/index.js"],
      css: [],
    },
  },
  ShopOrders: {
    title: "列表页",
    path: "/list",
    files: {
      js: [
        "https://cdn.bootcdn.net/ajax/libs/echarts/5.1.0/echarts.min.js",
        "pages/list/index.js",
      ],
      css: ["pages/list/index.css"],
    },
  },
  DepotOrder: {
    title: "详情页",
    path: "/detail",
    files: {
      js: [
        "https://cdn.bootcdn.net/ajax/libs/echarts/5.1.0/echarts.min.js",
        "pages/detail/index.js",
      ],
      css: ["pages/detail/index.css"],
    },
  },
};
