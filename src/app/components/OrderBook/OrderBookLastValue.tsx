import React from 'react';
import { formatMoney } from '../../utils/Formatter';

const OrderBookLastValue: React.FC<{ value: string }> = ({ value }) => {
  return (
    <div className="grid grid-cols-2 h-10">
      <div className="text-2xl font-bold my-auto">{formatMoney(value)}</div>
      <div className="font-bold my-auto">{formatMoney(value)}</div>
    </div>
  );
};

export default OrderBookLastValue;
