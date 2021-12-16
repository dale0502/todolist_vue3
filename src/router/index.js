import { createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

//這裡為路由配置的array
//這裡有兩個必填屬性, path: 路由路徑,必須以'/'開頭 , componet:對應的路由組件 ,name:路由的名字
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  }
]

//創建路由對象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
