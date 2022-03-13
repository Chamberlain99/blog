
const nav = require('./nav.js')
const sidebar = require('./sidebar.js')

module.exports = {
    title: '程序员成长-修炼中心 「作者：陈楚城」',
    description: '个人博客-学习总结',
    theme:'reco',
    themeConfig: {
        nav,
        sidebar,
        sidebarDepth: 2,
        smoothScroll: true,
        // repo: 'L-SUI/note',
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
  