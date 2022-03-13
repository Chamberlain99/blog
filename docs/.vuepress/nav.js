
   const note =  { text: '首页', link: '/' }

   const algorithm =  { 
       text: '博客文章', 
       link: 'note'
      //  items:[
      //    {text:'vue3学习篇',link:'/vue/'},
      //    {text:'vue2源码解读',link:'/vuesource/'}
      //  ]
     }

   const more =  { 
        text: '张伯伦 JavaScript 博客', 
        items: [
            { text: 'Github', link: 'https://github.com/chamberlain99' },
            { text: '掘金', link: 'https://juejin.cn/user/1855631360537159/posts' }
        ]
    }

    const node = { text: 'node', link: '/node/node基础知识.md' }


module.exports = [
    note,
    algorithm,
    more,
    node
]