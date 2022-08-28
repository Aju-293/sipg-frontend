import { createRouter, createWebHistory} from "vue-router"
const routes= [
    {
        path: '/',
        component: () => import('pages/Login.vue')
    },
    {
        path: '/login',
        component: () => import('pages/Login.vue')
    },
    {
        path: '/register',
        component: () => import('pages/Register.vue')
    }
]

export default createRouter({
    routes,
    history: createWebHistory()
})