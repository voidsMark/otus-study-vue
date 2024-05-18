// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace Market {
  export interface Product {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    title: string,
    rating: {
      rate: number,
      count: number
    }
  }

  export interface Filters {
    priceMin: number | undefined,
    priceMax: number | undefined,
    category: string | undefined
  }
}
