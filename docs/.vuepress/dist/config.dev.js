"use strict";

var back2top = require('@vuepress/plugin-back-to-top');

var path = require('path');

module.exports = {
  title: 'oicq',
  description: 'oicq 项目文档',
  dest: './src',
  base: '/oicq-wiki/',
  clientRootMixin: path.resolve(__dirname, 'mixin.js'),
  head: [['link', {
    rel: 'icon',
    href: 'takayama.png'
  }] // ['script', { async: '', src:'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'}]
  ],
  themeConfig: {
    nav: [{
      text: '文档项目',
      link: 'https://github.com/ltxhhz/oicq-wiki'
    }, {
      text: 'github',
      link: 'https://github.com/takayama-lily/oicq',
      target: '_blank'
    }, {
      text: 'gitee',
      link: 'https://gitee.com/takayama/oicq',
      target: '_blank'
    }, {
      text: 'QQ群',
      link: 'https://qm.qq.com/cgi-bin/qm/qr?k=NXw3NEA5lzPjkRhyEpjVBqMpdg1WHRKJ&jump_from=webapi',
      target: '_blank'
    }, {
      text: 'discord',
      link: 'https://discord.gg/gKnU7BARzv',
      target: '_blank'
    }],
    sidebarDepth: 2,
    sidebar: [{
      title: '教程',
      path: '/',
      children: ['/杂七杂八', ['/awesome', '社区相关应用'], '/web-api'] // collapsable:false //保持展开

    }, {
      title: 'api',
      path: '/api',
      children: ['/api/系统类api.md', '/api/应用类api.md']
    }, {
      title: '事件',
      path: '/event',
      children: ['/event/system.md', '/event/message.md', '/event/request.md', '/event/notice.md', '/event/sync.md', '/event/internal.md']
    }, {
      title: 'http-api',
      path: '/http-api',
      children: ['/http-api/null.md']
    }]
  },
  plugins: ['@vuepress/last-updated', back2top],
  markdown: {
    another: {},
    toc: {
      format: function format(e) {
        return e;
      }
    }
  }
};