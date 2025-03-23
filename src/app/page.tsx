import OHLCV from "./components/OHLCV";
import OrderBook from "./components/OrderBook";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold sm:text-3xl sm:tracking-tight pb-4">
        Barna Trading
      </h1>
      <OHLCV />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4">Item 3 </div>
        <div className="p-4 md:col-start-3">
          <OrderBook />
        </div>
      </div>
    </div>
  );
}
