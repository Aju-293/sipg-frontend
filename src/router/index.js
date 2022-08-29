import { createRouter, createWebHistory, createWebHashHistory} from "vue-router"
const Login =  () => import('pages/Login.vue');
const Register =  () => import('pages/Register.vue');
const routes= [
    {
        path: '/',
        component: Login
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
    history: createWebHashHistory()
})