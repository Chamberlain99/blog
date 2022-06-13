
const sidebar = require('./sidebar.js')
const nav = require('./nav.js')
/*   vding vuepress博客主题插件文档地址：https://doc.xugaoyi.com/  */
module.exports = {
    title: '程序员成长-修炼中心 「作者：张伯伦」',
    description: '个人博客-学习总结',
    theme:'vdoing',     
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
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
        author: {
          name: 'chamberlain', // 必需
          link: 'https://github.com/Chamberlain99', // 可选的
          
        },
    
        // 博主信息 (显示在首页侧边栏)
        // blogger: {
        //   avatar: 'https://fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg',
        //   name: 'chamberlain',
        //   slogan: '前端持续学习者',
        // },
    
        // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
        // social: {
        //   // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
        //   icons: [
        //     {
        //       iconClass: 'icon-youjian',
        //       title: '发邮件',
        //       link: 'chamberlain_mail@163.com',
        //     },
        //     {
        //       iconClass: 'icon-github',
        //       title: 'GitHub',
        //       link: 'https://github.com/chamberlain99',
        //     },
        //     {
        //       iconClass: 'icon-erji',
        //       title: '听音乐',
        //       link: 'https://music.163.com/#/playlist?id=755597173',
        //     },
        //   ],
        // },
    
        // 页脚信息
        // footer: {
        //   createYear: 2019, // 博客创建年份
        //   copyrightInfo:
        //     'chamberlain | <a href="https://github.com/Chamberlain99/blog/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签或换行标签</br>
        // },
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
    plugins:[
      ["@vuepress/medium-zoom",true],
       ["@vuepress/back-to-top",true],
     ]
  }
  