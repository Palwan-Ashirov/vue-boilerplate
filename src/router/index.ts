import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TheDefaultLayout from '@/layouts/TheDefaultLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/TheHome.vue'),
    meta: {
      layout: TheDefaultLayout
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
