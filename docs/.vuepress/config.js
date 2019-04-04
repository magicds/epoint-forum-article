const fs = require('fs');
const sidebar = [];

function getArticals() {
    const folder = fs.readdirSync('/');

}


module.exports = {
    host: '0.0.0.0',
    port: '3004',
    base: '/fedemo/pages/forumarticle/',
    title: 'article',
    head: [
        ['meta', {
            'http-equiv': 'X-UA-Compatible',
            content: 'ie=edge'
        }],
        ['meta', {
            name: 'icon Shortcut Bookmark',
            href: '/favicon.ico'
        }]
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
                '/f9/skin-builder.md',
                '/f9/fetools.md'
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
    plugins: ['@vuepress/nprogress', '@vuepress/back-to-top', '@vuepress/medium-zoom',
        ['@vssue/vuepress-plugin-vssue', {
            // set `platform` rather than `api`
            platform: 'github',
            // all other options of Vssue are allowed
            owner: 'cdswyda',
            repo: 'epoint-forum-article',
            clientId: '4d0a27bfd5751c5e70a1',
            clientSecret: '0fc6b91b0e19d10409bf019cb2e6472d45882efc',
        }]
    ]
}