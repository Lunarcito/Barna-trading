"use client";

import OHLCV from "./components/OHLCV/OHLCV";
import {
  createOHLCV,
  OHLCVType,
  emptyOHLCV,
} from "./components/OHLCV/OHLCVType";
import OrderBook from "./components/OrderBook/OrderBook";
import {
  OrderBookType,
  createOrderBook,
} from "./components/OrderBook/OrderBookType";
import useWebSocket from "./Network/UseWebSocket";
import { useState, useCallback } from "react";
import { emptyTrading, TradingPairType } from "./Models/TradingPairType";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";

const SupportedTradingPairs: TradingPairType[] = [
  {
    baseCurrencyName: "Bitcoin",
    baseCurrency: "BTC",
    exchangeCurrency: "USDT",
    pairCode: "btcusdt",
  },
  {
    baseCurrencyName: "Ethereum",
    baseCurrency: "ETH",
    exchangeCurrency: "USDT",
    pairCode: "ethusdt",
  },
  {
    baseCurrencyName: "Solana",
    baseCurrency: "SOL",
    exchangeCurrency: "USDT",
    pairCode: "solusdt",
  },
  {
    baseCurrencyName: "Cardano",
    baseCurrency: "ADA",
    exchangeCurrency: "USDT",
    pairCode: "adausdt",
  },
];

export default function Home() {
  const [OHLCVType, setOHLCVType] = useState<OHLCVType>(emptyOHLCV());
  const [orderBookType, setOrderBookType] = useState<OrderBookType>({
    asks: [],
    bids: [],
    tradingPair: emptyTrading(),
    lastPrice: "",
  });

  const [selectedTradingPairType, setSelectedTradingPairType] =
    useState<TradingPairType>(SupportedTradingPairs[0]);

  function handleSelection(value: TradingPairType) {
    setSelectedTradingPairType(value);
  }
  const handleOHLCVData = useCallback(
    (data: { [key: string]: string }) => {
      const value = createOHLCV(data, selectedTradingPairType);
      setOHLCVType(value);
    },
    [selectedTradingPairType]
  );

  const handleOrderBookData = useCallback(
    (data: { [key: string]: string }) => {
      const value = createOrderBook(data, selectedTradingPairType, "");
      setOrderBookType(value);
    },
    [selectedTradingPairType]
  );

  useWebSocket(
    `wss://stream.binance.com:9443/ws/${selectedTradingPairType.pairCode}@ticker`,
    handleOHLCVData
  );

  useWebSocket(
    `wss://stream.binance.com:9443/ws/${selectedTradingPairType.pairCode}@depth`,
    handleOrderBookData
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
      <OHLCV data={OHLCVType.data} tradingPair={selectedTradingPairType} />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 col-start-1 col-end-3 ">
          <h3>Item 3</h3>
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
