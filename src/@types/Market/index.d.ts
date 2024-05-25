// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace Market {
  export interface Product {
    category: string,
    description: string,
    id: string,
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

  export interface Order {
    productId: string
    name: string,
    email: string,
    phone: string,
    address: string,
    cardNumber: string
    date: Date
    // i wont pass card data into request coz it will be encrypted and stored in db later
  }
}
