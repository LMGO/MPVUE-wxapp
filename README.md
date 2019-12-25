# zhijian-yunda

> A wxapp about compus service of YNU
这是一个学校课程的作业，前端采用MPVUE,后端是springboot.目前发帖部分图片没有搞好，原计划的商家部分未完成，但其他功能基本完善。涉及登录、注册，可以发生活帖、寻物贴，二手贴。点赞评论，标记寻物状态，交易状态，个人中心，信息修改等。
后端地址：https://github.com/LMGO/MPVUE-wxapp.service.git

## Build Setup

``` bash
# 下载项目
git clone+本项目仓库地址

# 安装依赖
npm install

# 开发时构建
npm run dev

# 打包构建
npm run build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
