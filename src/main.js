import { createApp } from 'vue'
import Header from './layout/Header'
import App from './App.vue'
import router from 'router'
import ElementPlus from 'element-plus';
import './style.css'
import 'element-plus/dist/index.css'
let app = createApp(App)
app.component('Header', Header)
app.use(ElementPlus)
app.use(router)
app.mount('#app')