import { createRouter , createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/', // 필수
            name: 'home', // 필수
            component: HomeView  // 필수
        }, 
        { // 라우트 객체 포함 
            path: '/about', 
            name: 'about', 
            component: () => import('../views/AboutView.vue') 
        }, 
        {
            path: '/user/info:id', 
            name: 'user', 
            component: () => import('../views/UserView.vue')
        },

    ] 
})

export default router;
