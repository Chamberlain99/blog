
  //  const vuePost = [
  //     {
  //       title: "Vue框架",
  //       path: '/',
  //       collapsable: true, // 不折叠
  //       children: [
  //         { title: "vue3初体验", path: "/vue/vue3.md" },
  //         { title: "vue3基础笔记", path: "/vue/01-vue3基础笔记.md" },
  //         { title: "vue3全家桶", path: "/vue/02-vue3全家桶.md" },
  //       ],
  //     },
  //   ]

  //   const vuesource = [
  //     {
  //       title: "Vue源码系列",
  //       path: '/vuesource',
  //       collapsable: true, // 不折叠
  //       children: [
  //         { title: "vue2源码解析", path: "/vuesource/01-vue2源码解析.md" },

  //       ],
  //     },
  //   ]

  const note = [
    {  
        title: '源码解析',
        collapsable: true,
        children: [
            'sourceCode/vue3',
            'sourceCode/vueAll',
            'sourceCode/vueBase'
            // ['sourceCode/vue3','vue3基础1']
            // ['sourceCode/vueAll','vue3基础2'],
            // ['sourceCode/vueBase','vue3全家桶']
            // 'sourceCode/vue3基础2.md',
            // 'sourceCode/vue3全家桶.md',
            // 'sourceCode/react',
            // 'sourceCode/reactHooks',
            // 'sourceCode/redux',
            // 'sourceCode/applets',
            // 'sourceCode/koa',
        ]
    },
  ]
  


  module.exports = {
    '/note/':note,

    // '/vue/': vuePost,
    // '/vuesource/': vuesource,
    // '/algorithm/': algorithm,
    // '/open_source/': open_source
}