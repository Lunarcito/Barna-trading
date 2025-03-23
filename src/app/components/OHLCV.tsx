export default function OHLCV() {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-6 p-4 gap-4">
        <div>
          <div className="grid text-2xl font-bold">
            <div>BTC/USDT</div>
          </div>
          <div>Bitcoin Price</div>
        </div>
        <div>
          <div className="text-2xl font-bold">1,988.77</div>
          <div className="font-bold">$1,988.77</div>
        </div>
        <div className="my-auto">
          <div>24h High</div>
          <div className="font-bold">84,584.00</div>
        </div>
        <div className="my-auto">
          <div>24h Low</div>
          <div className="font-bold">83,800.00</div>
        </div>
        <div className="my-auto">
          <div>24h Volume(BTC)</div>
          <div className="font-bold">83,800.00</div>
        </div>
        <div className="my-auto">
          <div>24h Volume(BTC)</div>
          <div className="font-bold">83,800.00</div>
        </div>
      </div>
    </div>
  );
}
