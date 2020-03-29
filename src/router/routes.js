
export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
    beforeEnter: (to, from, next) => {
      // 路由独享守卫
      next()
    },
    meta: { title: '首页' }
    // props: route => ({
    //   name: route.query.name
    // })
    // props: {
    //   name: 'abc'
    // },
    // path: '/:id',
    // props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "404" */ '@/views/login.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "404" */ '@/views/error-404.vue')
  }
]
