"use client";

import OHLCV from "./components/OHLCV/OHLCV";
import { createOHLCV, OHLCVType, emptyOHLCV } from "./components/OHLCV/OHLCVType";
import OrderBook from "./components/OrderBook/OrderBook";
import { OrderBookType, createOrderBook } from "./components/OrderBook/OrderBookType";
import useWebSocket from "./Network/UseWebSocket";
import { useState, useCallback } from "react";
import { emptyTrading, TradingPairType } from "./Models/TradingPairType";

function sampleTrading(): TradingPairType {
  return {
    baseCurrencyName: "Bitcoin",
    baseCurrency: "BTC",
    exchangeCurrency: "USDT",
    pairCode: "btcusdt",
  };
}

export default function Home() {
  const [OHLCVType, setOHLCVType] = useState<OHLCVType>(emptyOHLCV());
  const [orderBookType, setOrderBookType] = useState<OrderBookType>({
    asks: [],
    bids: [],
    tradingPair: emptyTrading(),
    lastPrice: "",
  });

  const handleOHLCVData = useCallback((data: { [key: string]: string }) => {
    const value = createOHLCV(data, sampleTrading());
    setOHLCVType(value);
  }, []);

  const handleOrderBookData = useCallback((data: { [key: string]: string }) => {
    const value = createOrderBook(data, sampleTrading(), "");
    setOrderBookType(value);
  }, []);

  useWebSocket(
    "wss://stream.binance.com:9443/ws/btcusdt@ticker",
    handleOHLCVData
  );

  useWebSocket(
    "wss://stream.binance.com:9443/ws/btcusdt@depth",
    handleOrderBookData
  );

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold sm:text-3xl sm:tracking-tight pb-4">
        Barna Trading
      </h1>
      <OHLCV data={OHLCVType.data} tradingPair={sampleTrading()} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4">Item 3</div>
        <div className="p-4 md:col-start-3">
          <OrderBook
            asks={orderBookType.asks}
            bids={orderBookType.bids}
            tradingPair={sampleTrading()}
            lastPrice={OHLCVType.data.lastPrice}
          />
        </div>
      </div>
    </div>
  );
}
