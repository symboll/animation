import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { setTitle, getToken, setToken } from '@/lib/util'
import store from '@/store'
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes
})

// 全局守卫

router.beforeEach((to, from, next) => {
  console.log(111111)
  setTitle((to.meta || {}).title)
  const token = getToken()
  if (token) {
    store.dispatch('authorization').then(() => {
      if (to.name === 'login') next({ name: 'home' })
      else next()
    }).catch(() => {
      setToken('')
      next({ name: 'login' })
    })
  } else {
    if (to.name === 'login') next()
    else next({ name: 'login' })
  }
})

router.afterEach((to, from) => {})
router.beforeResolve((to, from, next) => { next() })

// 独享守卫 在routes.js 中配置
// 组件内守卫 在Home.vue 中演示

// 1.导航被触发
// 2. 在失活的组件(即将离开的页面组件) 里调用离开守卫 beforeRouteLeave
// 3. 调用全局的前置守卫 beforeEach
// 4. 在重用的组件里调用 beforeRouteUpdate
// 5. 调用路由独享守卫 beforeEnter  (在routes中定义)
// 6. 解析异步路由组件
// 7. 在被激活的组件 (即将进入的页面组件) 里调用 beforeRouteEnter
// 8. 调用全局的解析守卫beforeResolve
// 9. 导航被确认
// 10. 调用全局后置守卫 afterEach
// 11. 触发DOM更新
// 12. 用创建好的实例调用beforeRouteEnter 守卫里传给next 的回调函数

export default router
