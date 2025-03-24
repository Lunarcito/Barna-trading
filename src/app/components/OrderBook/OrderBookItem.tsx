import { OrderBookItemType } from "./OrderBookItemType";
import { formatDecimal, formatMoney } from "../../utils/Formatter";

function calculateTotal(price: string, quantity: string) {
  if (quantity != null && price != null) {
    const result = Number(quantity) * Number(price);
    return formatMoney(String(result));
  }
  return "";
}

const OrderBookItem: React.FC<OrderBookItemType> = ({ price, quantity }) => {
  return (
    <div className="grid grid-cols-3 h-7">
      <div className="text-center text-sm">{ formatMoney(price) }</div>
      <div className="text-center text-sm">{ formatDecimal(quantity) }</div>
      <div className="text-right text-sm">{ calculateTotal(price, quantity) }</div>
    </div>
  );
};

export default OrderBookItem;
