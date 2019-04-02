const fs = require('fs');
const sidebar = [];

function getArticals() {
    const folder = fs.readdirSync('/');

}


module.exports = {
    port: '3004',
    base: '/fedemo/pages/forumarticle/',
    title: 'article',
    head: [
        ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' }]
    ],
    serviceWorker: true,
    lastUpdated: 'Last Updated',
    themeConfig: {
        displayAllHeaders: true,
        sidebarDepth: 3,
        sidebar: [{
            title: '响应式网页',
            children: [
                '/explain/about-responsive-web.md',
                '/explain/how-to-responsive-web.md'
            ]
        }, {
            title: 'F9',
            children: [
                '/f9/skin-change.md',
                '/f9/skin-builder.md'
            ]
        }],
        nav: [{
            text: 'Home',
            link: '/'
        }]
    },
    markdown: {
        lineNumbers: true,
    },
    // plugins: ['@vuepress/nprogress', '@vuepress/back-to-top', '@vuepress/medium-zoom']
}