export interface OrderBookItemType {
    price: string,
    quantity: string
  }
  
  export function createOrderBookItem(input: string[]): OrderBookItemType {
    return {price: input[0], quantity: input[1]}
  }