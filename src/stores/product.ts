import { defineStore } from 'pinia'
import { storeApi } from '@/api/store'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Market.Product[],
    categories: [] as string[],
    searchQuery: '',
    filters: {} as Market.Filters,
  }),
  getters: {
    filteredProducts: (state) => {
      console.log('Store: filteredProducts()')
      const needToFilter = Boolean(state.filters.priceMin || state.filters.priceMax || state.filters.category || state.searchQuery)

      if (!needToFilter) {
        return state.products
      }

      const query = state.searchQuery.toLowerCase()
      const category = state.filters.category || undefined
      const minPrice = state.filters.priceMin || -Infinity
      const maxPrice = state.filters.priceMax || Infinity

      return state.products.filter(({ title, category: productCategory, price }) => {
        const isMatch = title.toLowerCase().includes(query)
                      && (category === undefined || productCategory === category)
                      && price >= minPrice
                      && price <= maxPrice
        return isMatch
      })
    },

  },
  actions: {
    setProducts(products: Market.Product[]) {
      console.log('Store: setProducts()')

      this.products = products
    },
    setCategories(categories: string[]) {
      console.log('Store: setCategories()')

      this.categories = categories
    },

    // Filters
    setSearchQuery(query: string) {
      console.log('Store: setSearchQuery()')

      this.searchQuery = query
    },
    setFilters(filters: Market.Filters) {
      console.log('Store: setFilters()')

      this.filters = filters
    },

    // API
    async getProducts() {
      console.log('Store: getProducts()')

      const products = await storeApi.getProducts()
      this.setProducts(products)
      this.getCategories()
    },

    async getCategories() {
      console.log('Store: getCategories()')

      const categories = await storeApi.getCategories()
      this.setCategories(categories)
    },
  },
})
