import { createRouter, createWebHistory} from "vue-router"
const Login =  () => import('pages/Login.vue');
const Register =  () => import('pages/Register.vue');
const routes= [
    {
        path: '/',
        component: () => import('pages/Login.vue')
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
]

export default createRouter({
    routes,
    history: createWebHistory()
})