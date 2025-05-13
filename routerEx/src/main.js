import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

const app = createApp(App) // App! app 이 아니라..

app.use(router)
app.mount('#app')
