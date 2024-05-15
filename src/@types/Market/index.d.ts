namespace Market {
  export interface Item {
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
}
