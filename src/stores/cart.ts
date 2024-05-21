import { defineStore } from 'pinia'
import { storeApi } from '@/api/store'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Market.Product[],
  }),
  getters: {

  },
  actions: {
    async getProducts() {
      const products = await storeApi.getProducts()
      this.products = products
    },
  },
})
