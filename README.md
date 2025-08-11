# 活动报名小程序（uni-app）

## 项目简介

本项目是基于 uni-app 框架开发的活动报名小程序前端，支持多端（微信/支付宝/H5等）运行。主要功能包括：
- 活动列表展示
- 活动详情查看
- 在线报名
- 我的报名记录

## 目录结构

```
mac_uniapp/
├── api/           # 接口请求封装
├── pages/         # 页面文件（首页、详情页、报名页等）
├── static/        # 静态资源（图片等）
├── uview-ui/      # UI组件库
├── utils/         # 工具函数
├── App.vue        # 应用入口
├── main.js        # 全局配置
├── pages.json     # 页面路由配置
├── manifest.json  # 项目配置
└── README.md      # 项目说明
```

## 运行方法

1. 安装依赖
```bash
npm install
```

2. HBuilderX 或命令行运行/编译
- 推荐用 HBuilderX 打开本项目，点击“运行”或“发行”到对应平台。
- 也可用命令行：
```bash
npm run dev:%PLATFORM%
# 例如：npm run dev:h5
```

3. 配置后端接口地址
- 在 `api/` 目录下配置后端 API 基础地址，确保能访问后端服务。

## 常见问题

- 时间格式显示异常？
  - 请使用 `utils/date.js` 提供的 `formatDateTime` 工具进行格式化。
- 接口请求失败？
  - 检查后端服务是否启动，API地址是否正确。
- 样式错乱？
  - 检查 uview-ui 是否正确引入。

## 主要依赖
- [uni-app](https://uniapp.dcloud.io/)
- [uView UI](https://www.uviewui.com/)

## 联系方式
如有问题可通过 issue 或邮箱联系作者。 

##项目截图
<img src="./static/截屏2025-08-11 17.55.39.png" width="300">

