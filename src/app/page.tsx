'use client';

import OHLCV from './components/OHLCV/OHLCV';
import {
  createOHLCV,
  OHLCVType,
  emptyOHLCV,
} from './components/OHLCV/OHLCVType';
import OrderBook from './components/OrderBook/OrderBook';
import {
  OrderBookType,
  createOrderBook,
} from './components/OrderBook/OrderBookType';
import useWebSocket from './Network/UseWebSocket';
import { useEffect, useState, useCallback } from 'react';
import { emptyTrading, TradingPairType } from './Models/TradingPairType';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import ChartComponent from './components/CandleStick/CandleStick';
import {
  CandlestickType,
  convertDate,
  KlineType,
} from './components/CandleStick/CandleStickType';

async function getuiKlines(tradingPairCode: string): Promise<CandlestickType> {
  const tradingPairCodeUppercase = tradingPairCode.toUpperCase();
  const getUIKlinesAPIURL: string = `https://api.binance.com/api/v3/uiKlines?symbol=${tradingPairCodeUppercase}&interval=1d&limit=100`;
  try {
    const response = await fetch(getUIKlinesAPIURL);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const result = await response.json();
    return {
      klines: result.map((element: string[]): KlineType => {
        return {
          close: Number(element[4]),
          high: Number(element[2]),
          low: Number(element[3]),
          open: Number(element[1]),
          time: convertDate(element[0]),
        };
      }),
    };
  } catch (error) {
    console.error('Error fetching UI Klines:', error);
    return { klines: [] };
  }
}

const SupportedTradingPairs: TradingPairType[] = [
  {
    baseCurrencyName: 'Bitcoin',
    baseCurrency: 'BTC',
    exchangeCurrency: 'USDT',
    pairCode: 'btcusdt',
  },
  {
    baseCurrencyName: 'Ethereum',
    baseCurrency: 'ETH',
    exchangeCurrency: 'USDT',
    pairCode: 'ethusdt',
  },
  {
    baseCurrencyName: 'Solana',
    baseCurrency: 'SOL',
    exchangeCurrency: 'USDT',
    pairCode: 'solusdt',
  },
  {
    baseCurrencyName: 'Cardano',
    baseCurrency: 'ADA',
    exchangeCurrency: 'USDT',
    pairCode: 'adausdt',
  },
];

export default function Home() {
  const [OHLCVType, setOHLCVType] = useState<OHLCVType>(emptyOHLCV());
  const [orderBookType, setOrderBookType] = useState<OrderBookType>({
    asks: [],
    bids: [],
    tradingPair: emptyTrading(),
    lastPrice: '',
  });

  const [selectedTradingPairType, setSelectedTradingPairType] =
    useState<TradingPairType>(SupportedTradingPairs[0]);
  const [candlestickType, setCandlestickType] = useState<CandlestickType>({
    klines: [],
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleSelection(value: TradingPairType) {
    setSelectedTradingPairType(value);
  }

  useEffect(() => {
    setCandlestickType({ klines: [] });

    const fetchKlines = async () => {
      try {
        const klinesValue = await getuiKlines(selectedTradingPairType.pairCode);
        console.log(klinesValue);
        setCandlestickType(klinesValue);
      } catch (error) {
        console.error(error);
        setErrorMessage('Failed to load candlestick data. Please try again.');
      }
    };
    fetchKlines();
  }, [selectedTradingPairType]);

  const handleWebSocketData = useCallback(
    (data: { [key: string]: string }) => {
      if (data.e === 'depthUpdate') {
        const value = createOrderBook(data, selectedTradingPairType, '');
        setOrderBookType(value);
      } else {
        const value = createOHLCV(data, selectedTradingPairType);
        setOHLCVType(value);
      }
    },
    [selectedTradingPairType]
  );

  useWebSocket(
    `wss://stream.binance.com:9443/ws/${selectedTradingPairType.pairCode}@ticker/${selectedTradingPairType.pairCode}@depth`,
    handleWebSocketData
  );

  return (
    <div className="p-10">
      <div className="grid grid-cols-6">
        <h2 className="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-4">
          Barna Trading
        </h2>
        <div className="p-2">
          <DropdownMenu
            options={SupportedTradingPairs}
            action={handleSelection}
          />
        </div>
      </div>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

      <OHLCV data={OHLCVType.data} tradingPair={selectedTradingPairType} />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 col-start-1 col-end-3 ">
          <ChartComponent klines={candlestickType.klines} />
        </div>
        <div className="p-4 md:col-start-3">
          <OrderBook
            asks={orderBookType.asks}
            bids={orderBookType.bids}
            tradingPair={selectedTradingPairType}
            lastPrice={OHLCVType.data.lastPrice}
          />
        </div>
      </div>
      <div className="h-40"></div>
    </div>
  );
}
