import OrderBookItem from "./OrderBookItem";
import OrderBookHeader from "./OrderBookHeader";
import OrderBookLastValue from "./OrderBookLastValue";

export default function OrderBook() {
  return (
    <div>
      <div>
        <OrderBookHeader />
        <OrderBookItem />
        <OrderBookItem />
        <OrderBookItem />
        <OrderBookItem />
        <OrderBookItem />
        <OrderBookItem />
        <OrderBookItem />
        <OrderBookItem />
      </div>
      <OrderBookLastValue />
      <div>
        <OrderBookHeader />
        <OrderBookItem />
        <OrderBookItem />
        <OrderBookItem />
        <OrderBookItem />
        <OrderBookItem />
        <OrderBookItem />
        <OrderBookItem />
        <OrderBookItem />
      </div>
    </div>
  );
}
