import { TradingPairType } from "../../Models/TradingPairType";

const OrderBookHeader: React.FC<TradingPairType> = ({ exchangeCurrency, baseCurrency }) => {
  return (
    <div className="grid grid-cols-3 h-8">
      <div className="text-center text-sm text-gray-400">Price ({ exchangeCurrency })</div>
      <div className="text-right text-sm text-gray-400">Amount ({ baseCurrency })</div>
      <div className="text-right text-sm text-gray-400">Total</div>
    </div>
  );
}

export default OrderBookHeader;