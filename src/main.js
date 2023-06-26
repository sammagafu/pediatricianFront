import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axiosInstance from './http'

import './assets/css/bootstrap.min.css'
import './assets/css/animate.css'
import './assets/css/lity.min.css'
import './assets/css/style.css'
import './assets/css/responsive.css'


// axios.defaults.baseURL = 'http://localhost:8000/api/v1/'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axiosInstance)
app.mount('#app')


