
  const note = [
    {   
        title:'写在前面',
        collapsable: true,
        path:'/'
    },
    {  
        title: 'vue3学习总结',
        collapsable: true,
        children: [
            'sourceCode/vue3简介',
            'sourceCode/vue3使用小结1',
            'sourceCode/vue3使用小结2'
        ]
    },
    {  
        title: '项目相关',
        collapsable: true,
        children: [
            'project/资源可视化',
        ]
    },
    {
        title: '性能优化',
        collapsable: true,
        children: [
            'optimization/性能优化一',
            'optimization/性能优化二',
            'optimization/性能优化三',
            'optimization/性能优化四',
            'optimization/性能优化五',
            'optimization/性能优化总结',
            'optimization/SOLID',
            'optimization/performance指标解释',
        ]
    },
    
    {
        title: '你不知道的css',
        collapsable: true,
        children: [
            'cssNote/css',
            'cssNote/cssHoudini',
            'cssNote/css_matrix',
            'cssNote/css_split',
        ]
    },
    {
        title: '常见问题总结记录',
        collapsable: true,
        children: [
            'problem/常见问题总结',
        ]
    },
    {
        title:'数据结构与算法',
        collapsable: true,
        children: [
            'algorithm/algorithm',
            'algorithm/binaryTree',
            'algorithm/graph',
            'algorithm/bubbling',
            'algorithm/insert',
            'algorithm/merge',
            'algorithm/quick',
            'algorithm/select',
            'algorithm/shell',
            'algorithm/advance',
            'algorithm/object',
            'algorithm/摩尔投票法',
        ]
    },
    {
        title:'设计模式',
        collapsable: true,
        children: [
            'design/设计模式笔记',
            'design/introduce',
            'design/singleton',
            'design/factory',
            'design/flyweightPattern',
        ]
    },
    {
        title: 'TS & JS进阶',
        collapsable: true,
        children: [
            'typescript/typescript',
            'typescript/recursive_optimization',
            'typescript/functional_programming.md',
            'javascript/学习笔记'
        ]
    },
    // {
    //     title: 'JavaScript',
    //     collapsable: true,
    //     children: [
    //         'javaScript/学习笔记',
    //     ]
    // },
    {
        title: 'Node',
        collapsable: true,
        children: [
            'node/node',
            'node/pm2',
            'node/node基础',
            'node/node高级'

        ]
    },
    {
        title: 'HTTP',
        collapsable: true,
        children: [
            'http/http_1',
            'http/http_2',
            'http/http_head',
            'http/网络经典问题',
        ]
    },
    {
        title: 'Linux',
        collapsable: true,
        children: [
            'linux/linux',
            'linux/linux_deploy',
            'linux/linux_centos',
            'linux/BasicCommand',
            // 'linux/linux免密登陆',
        ]
    },
    {
        title: '开发工具篇',
        collapsable: true,
        children: [
            '开发工具篇/git',
            // 'linux/linux免密登陆',
        ]
    },
	 {
        title: '收藏夹',
        collapsable: true,
        children: [
            'nav/nav',
            // 'linux/linux免密登陆',
        ]
    },
    {
        title: 'OS',
        collapsable: true,
        children: [
            'os/thread'
        ]
    },
    // {
    //     title: 'Python',
    //     collapsable: true,
    //     children: [
    //         'python/python爬虫'
    //     ]
    // },
    // {
    //     title: 'Java',
    //     collapsable: true,
    //     children: [
    //         'java/java'
    //     ]
    // },
    {
        title: 'Nginx',
        collapsable: true,
        children: [
            'nginx/nginx',
            'nginx/nginx入门'
        ]
    },
    {
        title: '项目工程化',
        collapsable: true,
        children: [
            'engineering/ci_cd',
            'engineering/sonar',
            'engineering/小程序系列之-工程化',
        ]
    },
    {
        title: '数据库',
        collapsable: true,
        children: [
            'mysql/mysql'
        ]
    },
    {
        title: '计算机网络',
        collapsable: true,
        children: [
            '计算机网络/计算机网络'
        ]
    },
    {
        title: '环境搭建、项目部署',
        collapsable: true,
        children: [
            '环境搭建、项目部署/利用Xshell更新前端项目',
            '环境搭建、项目部署/gitlab-CICD自动化部署'
        ]
    },
    {
        title: '常用工具',
        collapsable: true,
        children: [
            'mac/command_line',
            'mac/homebrew',
            'mac/nvm',
            'node/nrm'
        ]
    },
    {
        title: '自动化',
        collapsable: true,
        children: [
            'automation/jenkins',
            'automation/cli',
        ]
    },
    {
        title: 'js相关',
        collapsable: true,
        children: [
            'jsNote/函数柯里化curry',
            'jsNote/继承',
            'jsNote/使用setTimeout模拟setInterval',
            'jsNote/手写防抖和节流',
            'jsNote/手写实现拖拽',
            'jsNote/手写实现Object.create',
            'jsNote/手写一个call或apply',
            'jsNote/手写一个Function.bind',
            'jsNote/手写一个instanceOf原理',
            'jsNote/手写一个JS深拷贝',
            'jsNote/手写一个JSON.parse和JSOn.stringify',
            'jsNote/手写一个map和reduce',
            'jsNote/手写一个new操作符',
            'jsNote/LRU缓存算法',
            'jsNote/手写Promise',
            'jsNote/set',
            'jsNote/random',
            'jsNote/原型',
            'jsNote/实现Symbol类型',
        ]
    },
    {
        title: 'QA相关',
        collapsable: true,
        children: [
            'QA/JavaScript&QA',
        ]
    },
    {
        title: '文章收藏',
        collapsable: true,
        children: [
            'article/article',
        ]
    },
  ]
  
//   const conllection = [
//     {  
//         title: '网站',
//         collapsable: true,
//         children: [
//             ' /pages/160bed/',
//         ]
//     },
//   ]


  module.exports = {
    '/note/':note,
    // '/conllection/':conllection,

    // '/vue/': vuePost,
    // '/vuesource/': vuesource,
    // '/algorithm/': algorithm,
    // '/open_source/': open_source
}