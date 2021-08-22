module.exports = {
  title: 'oicq',
  description: 'oicq 项目文档',
  head: [
    ['link', { rel: 'icon', href: '/images/takayama.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'github', link: 'https://github.com/takayama-lily/oicq', target: '_blank' },
      { text: 'gitee', link: 'https://gitee.com/takayama/oicq', target: '_blank' },
      { text: 'QQ群', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=NXw3NEA5lzPjkRhyEpjVBqMpdg1WHRKJ&jump_from=webapi', target: '_blank' },
      { text: 'discord', link: 'https://discord.gg/gKnU7BARzv', target: '_blank' },
    ],
    sidebarDepth:2,
    sidebar: [
      '/',
      '/杂七杂八',
      ['/awesome','社区相关应用'],
      '/web-api'
    ]
  },
  plugins: {
    '@vuepress/back-to-top': true,
    '@vuepress/last-updated': true
  }
}