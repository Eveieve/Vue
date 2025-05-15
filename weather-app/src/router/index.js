import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/forecast',
      name: 'forecast',
      component: () => import('../views/ForecastView.vue')
    }, 
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    }, {
      path: '/new', 
      name: 'new', 
      component: () => import('../views/NewView.vue')
    }
  
  ]
})

export default router // 등록한 세개의 라우터 객체들을 외부로 보냄 
