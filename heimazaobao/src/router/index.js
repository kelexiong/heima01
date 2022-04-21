import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入组件
import Home from '@/components/Home/Home.vue'
import User from '@/components/User/User.vue'
import login from '@/components/login/login'
import edit from '@/components/edit/edit'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/user', component: User, name: 'user' },
  { path: '/login', component: login },
  { path: '/edit', component: edit }]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/user') {
    next()
    if (localStorage.getItem('token')) next()
    else next('/login')
  } else next()
})
export default router
