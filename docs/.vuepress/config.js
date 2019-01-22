module.exports = {
  title: 'Intermediate Java',
  description: 'Just playing around',
  themeConfig: {
    title: 'Redi School Intermediate Java',
    sidebar: {'/lessons': [
      '/lessons/01-intro',
      '/lessons/02-git',
      '/lessons/03-string-operations',
      '/lessons/04-data-structures-arrays',
      '/lessons/05-data-structures-lists'
    ]},
    sidebarDepth: 0,
    displayAllHeaders: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Lessons", link: "/lessons/01-intro" },
      { text: "Extra Resources", link: "/resources"}
    ],
    lastUpdated: 'Last Updated'
  }
}
