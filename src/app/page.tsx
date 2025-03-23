"use client";

import OHLCV from "./components/OHLCV";
import { createOHLCV, OHLCVType } from "./components/OHLCVType";
import OrderBook from "./components/OrderBook";
import useWebSocket from "./Network/UseWebSocket";
import { useState, useCallback } from "react";

export default function Home() {
  const [OHLCVType, setOHLCVType] = useState<OHLCVType>();

  const handleWebSocketData = useCallback((data: { [key: string]: string }) => {
    const value = createOHLCV(data);
    if (value != null) {
      setOHLCVType({ data: value });
    }
  }, []);

  useWebSocket(
    "wss://stream.binance.com:9443/ws/btcusdt@ticker",
    handleWebSocketData
  );

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold sm:text-3xl sm:tracking-tight pb-4">
        Barna Trading
      </h1>
      <OHLCV data={OHLCVType?.data} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4">Item 3 </div>
        <div className="p-4 md:col-start-3">
          <OrderBook />
        </div>
      </div>
    </div>
  );
}
