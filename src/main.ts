import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import './assets/rem.js'

createApp(App).use(store).use(router).mount('#app')
