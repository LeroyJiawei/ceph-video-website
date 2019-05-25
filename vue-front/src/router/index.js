const Layout = r => require.ensure([], () => r(require('../page/layout')), 'layout');

export default [{
    path: "/",
    name: 'Layout',
    component: Layout
  },
  
  {
    path: '*',
    redirect: "/",
    name: 'Layout',
    component: Layout
  }
]
