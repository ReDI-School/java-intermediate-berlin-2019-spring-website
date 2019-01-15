module.exports = {
  title: 'Redi School Intermediate Java Course',
  description: 'Just playing around',
  themeConfig: {
    title: 'Redi School Intermediate Java Course',
    sidebar: {'/lessons': [
      '/lessons/01-intro',
      '/lessons/02-git'
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
