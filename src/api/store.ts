import { request } from './request'

export const storeApi = {
  getProducts: async () => request<Market.Product[]>('https://fakestoreapi.com/products'),
  getProduct: async (id: string) => request<Market.Product>(`https://fakestoreapi.com/products/${id}`),

  getCategories: async () => request<string[]>('https://fakestoreapi.com/products/categories'),

  createProduct: async (product: Market.Product) => request<Market.Product>('https://fakestoreapi.com/products', product),
}
