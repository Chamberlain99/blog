module.exports = {
    title: '程序员成长-修炼中心 「作者：陈楚城」',
    description: '个人博客-学习总结',
    theme:'reco',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: 'vue框架篇', link: '/vue/' },
            { 
                text: '张伯伦 JavaScript 博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/chamberlain99' },
                    { text: '掘金', link: 'https://juejin.cn/user/1855631360537159/posts' }
                ]
            },
            { text: 'node', link: '/node/node基础知识.md' },

        ],
        sidebar: {
            // {
            //     title: '欢迎学习',
            //     path: '/',
            //     collapsable: false, // 不折叠
            //     children: [
            //         { title: "学前必读", path: "/" }
            //     ]
            // },
            '/vue/':[
              {
                title: "Vue框架",
                path: '/',
                collapsable: true, // 不折叠
                children: [
                  { title: "vue3初体验", path: "/vue/vue3.md" },
                  { title: "vue3基础笔记", path: "/vue/01-vue3基础笔记.md" },
                  { title: "vue3全家桶", path: "/vue/02-vue3全家桶.md" },
                ],
              },
            ]
      
          }
    },
    markdown: {
        // ......
        extendMarkdown: md => {
          md.use(require("markdown-it-disable-url-encode"));
        }
      }
  }
  