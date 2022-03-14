
const nav = require('./nav.js')
const sidebar = require('./sidebar.js')

module.exports = {
    title: '程序员成长-修炼中心 「作者：陈楚城」',
    description: '个人博客-学习总结',
    theme:'vdoing',
    head:[
      ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标) 
    ],
    // extraWatchFiles: [
    //   './nav.js',
    //   './sidebar.js'
    // ],
    /* 测试 文件 */
    themeConfig: {
        nav,
        sidebar,
        sidebarDepth: 2,
        smoothScroll: true,
        // repo: 'vuePress-Blog/note',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '在 Github 上编辑此页',
        lastUpdated: '更新时间',

    },
    markdown: {
      lineNumbers: true,
        // ......
        extendMarkdown: md => {
          md.use(require("markdown-it-disable-url-encode"));
        }
     },
    plugins:[
      ["@vuepress/medium-zoom",true],
       ["@vuepress/back-to-top",true],
     ]
  }
  