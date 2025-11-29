# 陈皮纪元 - Vue 3 版本

这是一个使用 Vue 3 + TypeScript + Tailwind CSS 构建的响应式 H5 项目。

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 下一代前端构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架
- **VueUse Motion** - Vue 动画库
- **ECharts** - 强大的图表库
- **Lucide Vue Next** - 图标库

## 安装依赖

```bash
npm install
```

## 开发

```bash
npm run dev
```

项目将在 `http://localhost:3000` 启动。

## 构建

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

## 项目结构

```
src/
├── components/          # 组件目录
│   ├── Navigation.vue   # 导航栏
│   ├── Hero.vue         # 首页英雄区
│   ├── Comparison.vue    # 对比组件
│   ├── ProductDetails.vue # 产品详情
│   ├── ValueCurve.vue    # 价值曲线图表
│   ├── Rights.vue        # 权益说明
│   ├── Roadmap.vue       # 路线图
│   ├── Partners.vue      # 合作伙伴
│   └── Footer.vue        # 页脚
├── assets/              # 静态资源
├── App.vue              # 根组件
└── main.ts              # 入口文件
```

## 特性

- ✅ 完全响应式设计，适配移动端和桌面端
- ✅ 保持原有文案和布局不变
- ✅ 使用 Vue 3 Composition API
- ✅ TypeScript 类型支持
- ✅ 动画效果使用 VueUse Motion
- ✅ 图表使用 ECharts

## 浏览器支持

现代浏览器和移动浏览器（iOS Safari, Chrome, Firefox, Edge）
