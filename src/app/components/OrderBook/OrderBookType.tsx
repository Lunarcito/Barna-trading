import { createOrderBookItem, OrderBookItemType } from './OrderBookItemType';
import { TradingPairType } from '../../Models/TradingPairType';

export interface OrderBookType {
  bids: OrderBookItemType[];
  asks: OrderBookItemType[];
  tradingPair: TradingPairType;
  lastPrice: string;
}

export function createOrderBook(
  input: { [key: string]: any },
  tradingPair: TradingPairType,
  lastPrice: string
): OrderBookType {
  const asksItems = input['a'].map((data) => {
    return createOrderBookItem(data);
  });
  const bidsItems = input['b'].map((data) => {
    return createOrderBookItem(data);
  });
  return {
    bids: bidsItems.slice(0, 12),
    asks: asksItems.slice(0, 12),
    tradingPair: tradingPair,
    lastPrice: lastPrice,
  };
}
