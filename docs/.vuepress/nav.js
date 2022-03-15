
   const home =  { text: '首页', link: '/' }

   const post =  { 
       text: '博客文章', 
       link: '/note/'
      //  items:[
      //    {text:'vue3学习篇',link:'/vue/'},
      //    {text:'vue2源码解读',link:'/vuesource/'}
      //  ]
     }
    const componentLib = {
        text:'组件库',
        link:'https://evel-font-end.github.io/vue-baselib/dist/#/mapcharts'
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
    componentLib, //组件库
    // node,
    contact
]