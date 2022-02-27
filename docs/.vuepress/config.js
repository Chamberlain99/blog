module.exports = {
    title: 'chamberlain BLOG',
    description: '个人博客-学习总结',
    theme:'reco',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '张伯伦 JavaScript 博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/chamberlain99' },
                    { text: '掘金', link: 'https://juejin.cn/user/1855631360537159/posts' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "Vue框架",
              path: '/vue/vue3.md',
              collapsable: false, // 不折叠
              children: [
                { title: "vue3基础", path: "/vue/vue3.md" }
              ],
            },
      
          ]
    },
    markdown: {
        // ......
        extendMarkdown: md => {
          md.use(require("markdown-it-disable-url-encode"));
        }
      }
  }
  