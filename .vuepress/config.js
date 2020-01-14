module.exports = {
  title: 'Diguzim - Knowledge Management',
  description: 'This is my knowledge management system',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Coding', link: '/coding/' }
    ],
    sidebar: {
      '/coding/': [
        '',
        'frontend',
        'backend'
      ]
    }
  }
}
