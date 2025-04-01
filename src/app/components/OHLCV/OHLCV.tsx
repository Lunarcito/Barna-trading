import React from 'react';
import { OHLCVType } from './OHLCVType';
import { formatMoney, formatPercentage } from '../../utils/Formatter';

const OHLCV: React.FC<OHLCVType> = ({ data, tradingPair }) => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-6 p-2 gap-2">
        <div className="col-span-1">
          <div className="text-2xl font-bold mr-4">
            {tradingPair.baseCurrency + '/' + tradingPair.exchangeCurrency}
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-gray-400">
              {tradingPair.baseCurrencyName} Price
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-start">
          <div className="text-2xl font-bold">
            {formatMoney(data?.lastPrice)}
          </div>
          <div className="font-bold">
            {formatMoney(data?.priceChange) +
              ' ' +
              formatPercentage(data?.priceChangePercent)}
          </div>
        </div>
        <div className="my-auto">
          <div className="text-sm text-gray-400">24h High</div>
          <div className="font-bold">{formatMoney(data?.highPrice)}</div>
        </div>
        <div className="my-auto">
          <div className="text-sm text-gray-400">24h Low</div>
          <div className="font-bold">{formatMoney(data?.lowPrice)}</div>
        </div>
        <div className="my-auto">
          <div className="text-sm text-gray-400">
            24h Volume({tradingPair.baseCurrency})
          </div>
          <div className="font-bold">{formatMoney(data?.tradedBaseVolume)}</div>
        </div>
        <div className="my-auto">
          <div className="text-sm text-gray-400">
            24h Volume({tradingPair.exchangeCurrency})
          </div>
          <div className="font-bold">
            {formatMoney(data?.totalTradedAssetVolume)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OHLCV;
