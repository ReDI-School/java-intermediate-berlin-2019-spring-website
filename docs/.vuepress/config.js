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
      '/lessons/05-data-structures-lists',
      '/lessons/06-data-structures-sets',
      '/lessons/07-data-structures-maps',
      '/lessons/08-essentials-of-oop-introduction',
      '/lessons/09-oop-classes-and-objects',
      '/lessons/10-method-overloading-overriding',
      '/lessons/11-oop-encapsulation',
      '/lessons/12-oop-inheritance',
      '/lessons/13-oop-abstract-interface-polymorphism',
      '/lessons/15-exception',
      '/lessons/16-exception2',
      '/lessons/17-libraries',
      '/lessons/18-file-io-and-format',
      '/lessons/20-21-unit-tests',
      '/lessons/22-algorithms',
      '/lessons/24-last-lesson'
    ],
    '/teachers': [
      '/teachers/for-teachers',
      '/teachers/how-to-edit-this-site',
      '/teachers/how-to-make-a-screencast',
      '/teachers/how-to-teach-resources'
    ]},
    sidebarDepth: 1,
    displayAllHeaders: 0,
    nav: [
      { text: "Home", link: "/" },
      { text: "Lessons", link: "/lessons/01-intro" },
      { text: "Extra Resources", link: "/resources"},
      { text: "For Teachers", link: "/teachers/for-teachers"}
    ],
    lastUpdated: 'Last Updated'
  }
}
