import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register.vue')
    },
    {
        path: '/manager',
        name: 'manager',
        component: () => import('@/views/manager.vue')
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index.vue')
    },
    {
        path: '/manager',
        name: 'manager',
        component: () => import('@/views/manager.vue')
    }
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router