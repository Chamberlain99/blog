
   const home =  { text: '首页', link: '/' }

   const post =  { 
       text: '博客文章', 
       link: '/note/'
      //  items:[
      //    {text:'vue3学习篇',link:'/vue/'},
      //    {text:'vue2源码解读',link:'/vuesource/'}
      //  ]
     }

   const more =  { 
        text: 'Github & 掘金', 
        items: [
            { text: 'Github', link: 'https://github.com/chamberlain99' },
            { text: '掘金', link: 'https://juejin.cn/user/1855631360537159/posts' }
        ]
    }

    // const node = { text: 'node', link: '/node/nodeBase.md' }
    const contact = { text:'关于我',link:'/contact/' }


module.exports = [
    // home,
    post,
    more,
    // node,
    contact
]