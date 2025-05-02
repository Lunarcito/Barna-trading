import React from 'react';
import { formatMoney } from '../../utils/Formatter';

const OrderBookLastValue: React.FC<{ value: string }> = ({ value }) => {
  return (
    <div className="grid grid-cols-2 h-10">
      <div data-testid="last-value-a" className="text-2xl font-bold my-auto">
        {formatMoney(value)}
      </div>
      <div data-testid="last-value-b" className="font-bold my-auto">
        {formatMoney(value)}
      </div>
    </div>
  );
};

export default OrderBookLastValue;
