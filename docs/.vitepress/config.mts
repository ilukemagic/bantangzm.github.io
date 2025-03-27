import lightbox from "vitepress-plugin-lightbox";

export default {
  title: `Luke 的个人小站`,
  description: "一个前端开发者",
  themeConfig: {
    outline: {
      level: [2, 3, 4], // 显示 h2, h3 和 h4 标题
      label: '大纲' // 可选：自定义右侧大纲的标题
    },
    nav: [
      { text: "主页", link: "/" },
      { text: "博客", link: "/blog/" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Luke",
    },
    sidebar: {
      "/blog/": [
        {
          text: "前端",
          items: [
            {
              text: "JavaScript",
              link: "/blog/frontend/js/runtime-scope",
            },
            {
              text: "Vue.js",
              link: "/blog/frontend/vue/reactive",
            },
            {
              text: "React",
              link: "/blog/frontend/react/setState",
            },
            {
              text: "Node.js",
              link: "/blog/frontend/node/custom-cli",
            },
            {
              text: "Typescript",
              link: "/blog/frontend/ts/basic",
            },
            {
              text: "CLI 开发(全英)",
              link: "/blog/frontend/cli/01_before_starting",
            },
            {
              text: "浏览器",
              link: "/blog/frontend/browser/cache",
            },
            {
              text: "AI",
              link: "/blog/ai/cursor-guide",
            },
            {
              text: "工具链及实践",
              link: "/blog/frontend/tool/webpack-basic",
            },
            {
              text: "需求案例",
              link: "/blog/frontend/case/nav-mix-mod",
            },
          ],
        },
        {
          text: "后端",
          items: [
            {
              text: "golang",
              link: "/blog/backend/golang/goroutine",
            },
          ],
        },
        {
          text: "计算机基础",
          items: [
            {
              text: "设计模式",
              link: "/blog/design-pattern/",
            },
          ],
        },
        {
          text: "区块链",
          items: [{ text: "基础概念", link: "/blog/blockchain/basic" }],
        },
        {
          text: "生活记录",
          items: [
            {
              text: "阅读",
              link: "/blog/book/",
            },
            {
              text: "感悟",
              link: "/blog/thinking/",
            },
          ],
        },
      ],
      "/blog/frontend/js/": [
        {
          text: "JavaScript",
          items: [
            {
              text: "运行原理与作用域",
              link: "/blog/frontend/js/runtime-scope",
            },
            { text: "闭包", link: "/blog/frontend/js/closure" },
            { text: "函数式编程", link: "/blog/frontend/js/fp" },
            { text: "this指向", link: "/blog/frontend/js/this" },
            {
              text: "call-apply-bind",
              link: "/blog/frontend/js/call-apply-bind",
            },
            { text: "类数组", link: "/blog/frontend/js/like-array" },
            { text: "面向对象", link: "/blog/frontend/js/oop" },
            { text: "防抖", link: "/blog/frontend/js/debounce" },
            { text: "节流", link: "/blog/frontend/js/throttle" },
            { text: "Promise", link: "/blog/frontend/js/Promise" },
            { text: "ES6", link: "/blog/frontend/js/ES6" },
            { text: "ES6+", link: "/blog/frontend/js/ES6+" },
            {
              text: "迭代器和生成器",
              link: "/blog/frontend/js/iterator-generator",
            },
            { text: "事件循环", link: "/blog/frontend/js/event-loop" },
            { text: "模块化", link: "/blog/frontend/js/module" },
            { text: "WebSockets 入门", link: "/blog/frontend/js/ws" },
          ],
        },
      ],
      "/blog/design-pattern/": [
        {
          text: "设计模式",
          items: [
            {
              text: "单例模式",
              link: "/blog/design-pattern/singleton",
            },
          ],
        },
      ],
      "/blog/frontend/node": [
        {
          text: "Node.js",
          items: [
            {
              text: "实现一个 CLI 工具",
              link: "/blog/frontend/node/custom-cli",
            },
            { text: "node 包管理", link: "/blog/frontend/node/pkg-mgr" },
            { text: "node 文件上传", link: "/blog/frontend/node/file-upload" },
            { text: "oss 文件上传方案", link: "/blog/frontend/node/oss-upload" },
            { text: "nest 核心概念", link: "/blog/frontend/node/nest-core" },
            { text: "node 发邮件", link: "/blog/frontend/node/node-send-email" },
            { text: "node 日志", link: "/blog/frontend/node/node-log" },
          ],
        },
      ],
      "/blog/frontend/vue": [
        {
          text: "Vue.js",
          items: [
            { text: "Vue 响应式原理", link: "/blog/frontend/vue/reactive" },
            { text: "Vue3 源码分析", link: "/blog/frontend/vue/vue3-source" },
            { text: "nextTick 实现原理", link: "/blog/frontend/vue/nextTick" },
          ],
        },
      ],
      "/blog/frontend/react": [
        {
          text: "React",
          items: [
            { text: "setState", link: "/blog/frontend/react/setState" },
            { text: 'React.memo', link: '/blog/frontend/react/memo' }
          ],
        }
      ],
      "/blog/frontend/ts": [
        {
          text: "Typescript",
          items: [
            { text: "Typescript 入门", link: "/blog/frontend/ts/basic" },
            { text: "定义对象类型", link: "/blog/frontend/ts/define-obj-type" },
            { text: "函数重载", link: "/blog/frontend/ts/fn-overload" },
            { text: "keyof 操作符", link: "/blog/frontend/ts/keyof" },
            { text: "typeof 操作符", link: "/blog/frontend/ts/typeof" },
            {
              text: "type 与 interface",
              link: "/blog/frontend/ts/type-interface",
            },
            { text: "any 与 unknown", link: "/blog/frontend/ts/any-unknown" },
            { text: "映射类型", link: "/blog/frontend/ts/mapping-type" },
            { text: "交叉类型", link: "/blog/frontend/ts/intersection-type" },
            { text: "装饰器", link: "/blog/frontend/ts/decorators" },
            { text: "declare 作用", link: "/blog/frontend/ts/declare" },
            {
              text: "协变与逆变",
              link: "/blog/frontend/ts/contravariance-covariance",
            },
          ],
        },
      ],
      "/blog/frontend/cli": [
        {
          text: "Build CLI tool tutorial",
          items: [
            {
              text: "01.Before Starting",
              link: "/blog/frontend/cli/01_before_starting",
            },
            {
              text: "02.What is Bash and Shell",
              link: "/blog/frontend/cli/02_what_is_bash_shell",
            },
          ],
        },
      ],
      "/blog/frontend/browser": [
        {
          text: "浏览器",
          items: [
            { text: "浏览器缓存", link: "/blog/frontend/browser/cache" },
            {
              text: "回流与重绘",
              link: "/blog/frontend/browser/layout-painting",
            },
            {
              text: "cookie session token 的区别",
              link: "/blog/frontend/browser/cookie-session-token",
            },
            { text: "浏览器安全", link: "/blog/frontend/browser/safety" },
            {
              text: "输入URL到页面展示发生了什么",
              link: "/blog/frontend/browser/navigation",
            },
          ],
        },
      ],
      "/blog/frontend/tool": [
        {
          text: "工具链及实践",
          items: [
            {
              text: "webpack",
              items: [
                {
                  text: "webpack 入门",
                  link: "/blog/frontend/tool/webpack-basic",
                },
                { text: "代码压缩", link: "/blog/frontend/tool/compression" },
                {
                  text: "source-map 配置",
                  link: "/blog/frontend/tool/source-map",
                },
                {
                  text: "模块化原理",
                  link: "/blog/frontend/tool/webpack-module",
                },
                {
                  text: "区分环境与代码分离",
                  link: "/blog/frontend/tool/webpack-env",
                },
                {
                  text: "devServer 与 HMR",
                  link: "/blog/frontend/tool/devserver",
                },
              ],
            },
            {
              text: "其他工具",
              items: [
                { text: "postcss 介绍", link: "/blog/frontend/tool/postcss" },
                { text: "babel 深入解析", link: "/blog/frontend/tool/babel" },
              ],
            },
            {
              text: "项目实践",
              items: [
                {
                  text: "项目管理规范",
                  link: "/blog/frontend/tool/project-manage",
                },
                { text: "git 基本使用", link: "/blog/frontend/tool/git-basic" },
                {
                  text: "github 工作流",
                  link: "/blog/frontend/tool/github-flow",
                },
              ],
            },
          ],
        },
      ],
      "/blog/frontend/case": [
        {
          text: "需求案例",
          items: [
            { text: "导航栏模式切换", link: "/blog/frontend/case/nav-mix-mod" },
            {
              text: "前端监控SDK简单实现",
              link: "/blog/frontend/case/frontend-monitoring",
            },
          ],
        },
      ],
      "/blog/backend/golang": [
        {
          text: "Go 中的协程",
          link: "/blog/backend/golang/goroutine",
        },
      ],
      "/blog/book/": [
        {
          text: "阅读",
          items: [
            { text: "认知觉醒", link: "/blog/book/renzhi" },
            {
              text: "被讨厌的勇气",
              link: "/blog/book/The-Courage-to-Be-Disliked",
            },
          ],
        },
      ],
      "/blog/thinking/": [
        {
          text: "感悟",
          items: [
            { text: "2021 年终总结", link: "/blog/thinking/2021" },
            { text: "2022 年终总结", link: "/blog/thinking/2022" },
            { text: "2023 年终总结", link: "/blog/thinking/2023" },
            { text: "The 5am project 实验感悟", link: "/blog/thinking/five-am-project" },
          ],
        },
      ],
    },
  },
  cleanUrls: true,
  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
  },
  ignoreDeadLinks: true,
};
