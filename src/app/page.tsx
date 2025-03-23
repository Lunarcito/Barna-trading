export default function Home() {

  return (
    <div>
      <h1 className="text-2xl">Barna Trading</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 bg-red-400">
        <div className="p-4">BTC/USDT Bitcoin Price</div>
        <div className="p-4">
          241.11 +0.29% 24h High 84,584.00 24h Low 83,800.00 24h Volume(BTC)
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4">Item 3 </div>
        <div className="p-4 bg-gray-200">Item 4</div>
      </div>
    </div>
  );
}
