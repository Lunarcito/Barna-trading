import OrderBookItem from "./OrderBookItem";
import OrderBookHeader from "./OrderBookHeader";
import OrderBookLastValue from "./OrderBookLastValue";
import { OrderBookType } from "./OrderBookType";

const OrderBook: React.FC<OrderBookType> = ({
  asks,
  bids,
  tradingPair,
  lastPrice,
}) => {
  return (
    <div>
      <div>
        <OrderBookHeader
          exchangeCurrency={tradingPair.exchangeCurrency}
          baseCurrency={tradingPair.baseCurrency}
        />
        {asks.map((ask) => {
          return (
            <OrderBookItem
              price={ask.price}
              quantity={ask.quantity}
              key={Math.random()}
            />
          );
        })}
      </div>
      <OrderBookLastValue value={lastPrice} />
      <div>
        <OrderBookHeader
          exchangeCurrency={tradingPair.exchangeCurrency}
          baseCurrency={tradingPair.baseCurrency}
        />
        {bids.map((bid) => {
          return (
            <OrderBookItem
              price={bid.price}
              quantity={bid.quantity}
              key={Math.random()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OrderBook;
