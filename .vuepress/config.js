const fs = require('fs');
const sidebar = [];

function getArticals() {
    const folder = fs.readdirSync('/');

}


module.exports = {
    port: '3004',
    base:'/article/.vuepress/dist/',
    title: 'article',
    serviceWorker: true,
    lastUpdated: 'Last Updated',
    themeConfig: {
        displayAllHeaders: true,
        sidebarDepth: 3,
        sidebar: [{
                title: '响应式网页',
                children: [
                    '/2018/about-responsive-web.md',
                    '/2018/how-to-responsive-web.md'
                ]
            },
            '/2019/f9/skin-change.md',
            '/2019/f9/skin-builder.md'
        ],
        nav: [{
            text: 'Home',
            link: '/'
        }]
    },
    markdown: {
        lineNumbers: true,

    },
    plugins: ['@vuepress/nprogress', '@vuepress/back-to-top', '@vuepress/medium-zoom']
}