import { createRouter, createWebHistory} from "vue-router"
const routes= [
    {
        path: '/login',
        component: () => import('pages/Login.vue')
    }
]

export default createRouter({
    routes,
    history: createWebHistory()
})