
  const note = [
    {  
        title: '源码解析',
        collapsable: true,
        children: [
            'sourceCode/vue3',
            'sourceCode/vueAll',
            'sourceCode/vueBase'
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
        title: '源码解析',
        collapsable: true,
        children: [
            'sourceCode/vue2',
            'sourceCode/vue3',
            'sourceCode/react',
            'sourceCode/reactHooks',
            'sourceCode/redux',
            'sourceCode/applets',
            'sourceCode/koa',
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
            'design/introduce',
            'design/singleton',
            'design/factory',
            'design/flyweightPattern',
        ]
    },
    {
        title: 'TypeScript',
        collapsable: true,
        children: [
            'typescript/typescript',
            'typescript/recursive_optimization',
            'typescript/functional_programming.md'
        ]
    },
    {
        title: 'Node',
        collapsable: true,
        children: [
            'node/node',
            'node/pm2'
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
        title: 'OS',
        collapsable: true,
        children: [
            'os/thread'
        ]
    },
    {
        title: 'Python',
        collapsable: true,
        children: [
            'python/python爬虫'
        ]
    },
    {
        title: 'Java',
        collapsable: true,
        children: [
            'java/java'
        ]
    },
    {
        title: 'Nginx',
        collapsable: true,
        children: [
            'nginx/nginx'
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
  


  module.exports = {
    '/note/':note,

    // '/vue/': vuePost,
    // '/vuesource/': vuesource,
    // '/algorithm/': algorithm,
    // '/open_source/': open_source
}