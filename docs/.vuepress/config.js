
const nav = require('./nav.js')
const sidebar = require('./sidebar.js')

/*   vding vuepress博客主题插件文档地址：https://doc.xugaoyi.com/  */
module.exports = {
    title: '程序员成长-修炼中心 「作者：陈楚城」',
    description: '个人博客-学习总结',
    theme:'vdoing',     
    base:'/blog/', //https://<USERNAME>.github.io/
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
        // vssueConfig: {
        //   platform: 'github',
        //   owner: 'Chamberlain99',
        //   repo: 'vue-press-blog-system',
        //   clientId: 'f3885593c58b486b414b',
        //   clientSecret: 'f854e5b4f2a93b80c947e3b79257a77aab2c33dd',
        // }
    },
    markdown: {
      lineNumbers: true,
        // ......
        extendMarkdown: md => {
          md.use(require("markdown-it-disable-url-encode"));
        }
     },
    plugins: [
      ["@vuepress/medium-zoom",true],
       ["@vuepress/back-to-top",true],
       [
        'one-click-copy', // 代码块复制按钮
        {
          copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
          copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
          duration: 1000, // prompt message display time.
          showInMobile: false, // whether to display on the mobile side, default: false.
        },
      ],
      [
        'vuepress-plugin-zooming', // 放大图片
        {
          selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
          options: {
            bgColor: 'rgba(0,0,0,0.6)',
          },
        },
      ],
      [
        'vuepress-plugin-comment', // 评论
        {
          choosen: 'gitalk',
          options: {
            clientID: 'a6e1355287947096b88b',
            clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
            repo: 'blog', // GitHub 仓库
            owner: 'Chamberlain99', // GitHub仓库所有者
            admin: ['Chamberlain99'], // 对仓库有写权限的人
            // distractionFreeMode: true,
            pagerDirection: 'last', // 'first'正序 | 'last'倒序
            id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
            title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
            labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
            body:
              '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
          },
        },
      ],

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    // [
    //   'thirdparty-search',
    //   {
    //     thirdparty: [
    //       {
    //         title: '在MDN中搜索',
    //         frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
    //         behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
    //       },
    //       {
    //         title: '在Runoob中搜索',
    //         frontUrl: 'https://www.runoob.com/?s=',
    //       },
    //       {
    //         title: '在Vue API中搜索',
    //         frontUrl: 'https://cn.vuejs.org/v2/api/#',
    //       },
    //       {
    //         title: '在Bing中搜索',
    //         frontUrl: 'https://cn.bing.com/search?q=',
    //       },
    //       {
    //         title: '通过百度搜索本站的',
    //         frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
    //       },
    //     ],
    //   }
    // ],


     ]
  }
  