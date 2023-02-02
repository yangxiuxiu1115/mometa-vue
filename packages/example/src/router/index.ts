import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/HomeContent.vue')
  },
  {
    path: '/page',
    component: () => import('../views/PageContent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
