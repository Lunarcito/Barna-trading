export default function OrderBookHeader() {
  return (
    <div className="grid grid-cols-3 h-8">
      <div>Price (USDT)</div>
      <div className="text-right">Amount (ETH)</div>
      <div className="text-right">Total</div>
    </div>
  );
}
