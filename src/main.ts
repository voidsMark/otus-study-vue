import { createApp } from 'vue'
import './styles/global.sass'
import './utils/setup'
import { router } from './router'
import App from './App.vue'

createApp(App)
.use(router)
.mount('#app')
