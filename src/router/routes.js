import Login from '@/views/login.vue'
import Home from '@/views/home.vue'

export default [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: '',
    component: Home,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */'@/learn-page/Home.vue')
      },
      {
        path: 'form',
        name: 'form',
        component: () => import(/* webpackChunkName: "about" */'@/views/form-page.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */'@/views/user.vue')
      }
    ]
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
  //   beforeEnter: (to, from, next) => {
  //     // 路由独享守卫
  //     next()
  //   },
  //   meta: { title: '首页' }
  //   // props: route => ({
  //   //   name: route.query.name
  //   // })
  //   // props: {
  //   //   name: 'abc'
  //   // },
  //   // path: '/:id',
  //   // props: true
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import(/* webpackChunkName: "404" */ '@/views/login.vue')
  // },
  // {
  //   path: '/store',
  //   name: 'store',
  //   component: () => import('@/views/store.vue')
  // },
  // {
  //   path: '/count-up',
  //   name: 'countup',
  //   component: () => import('@/views/view-countup.vue')
  // },
  // {
  //   path: '/render-page',
  //   name: 'render-page',
  //   component: () => import('@/views/view-render.vue')
  // },
  // {
  //   path: '/view-menu',
  //   name: 'view-menu',
  //   component: () => import('@/views/view-menu.vue')
  // },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "404" */ '@/views/error-404.vue')
  }
]
