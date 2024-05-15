import { request } from './request'

export const storeApi = {
  getProducts: async () => request<Market.Item[]>('https://fakestoreapi.com/products'),
}
