import { request } from './request'

export const storeApi = {
  getProducts: async () => request<Market.Product[]>('https://fakestoreapi.com/products'),
}
