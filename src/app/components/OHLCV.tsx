import DropdownMenu from "./DropdownMenu";
export default function OHLCV() {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-6 p-2 gap-2">
        <div className="col-span-1">
          <div className="text-2xl font-bold mr-4">BTC/USDT</div>
          <div className="flex items-center gap-2">
            <div className="text-sm ">Bitcoin Price</div>
            <DropdownMenu />
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-start">
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
