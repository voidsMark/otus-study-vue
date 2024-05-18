import { createApp } from 'vue'
import './styles/global.sass'
import './utils/setup'
import { createPinia } from 'pinia'
import { router } from './router'
import App from './App.vue'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
