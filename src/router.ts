import { createRouter, createWebHistory } from 'vue-router'

import NotFound404 from './pages/NotFound404.vue'
import InDeveloping from './pages/InDeveloping.vue'
import MarketMain from './pages/MarketMain.vue'
import CartPage from './pages/CartPage.vue'
import ProductPage from './pages/ProductPage.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
  routes: [
    { path: '/', component: MarketMain, name: 'MarketMain' },
    { path: '/cart', component: CartPage, name: 'CartPage' },

    { path: '/product/:productId', component: ProductPage, name: 'ProductPage' },

    { path: '/:pathMatch(.*)*', component: NotFound404, name: '404' },
    { path: '/in-developing', component: InDeveloping, name: 'developing' },
  ],
})

// export const beforeEach = () => {

// }

// router.beforeEach(beforeEach)
