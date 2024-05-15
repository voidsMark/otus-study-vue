import numeral from 'numeral'

export const priceUSD = (value: number) => numeral(value).format('$ 0.00')

export const priceRUB = (value: number) => numeral(value).format('0,0.00₽')
