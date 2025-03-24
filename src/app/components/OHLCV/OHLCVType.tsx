import { emptyTrading, TradingPairType } from "../../Models/TradingPairType";

export interface OHLCVType {
  data: {
    lastPrice: string;
    priceChange: string;
    priceChangePercent: string;
    highPrice: string;
    lowPrice: string;
    tradedBaseVolume: string;
    totalTradedAssetVolume: string;
  };
  tradingPair: TradingPairType;
}

export function createOHLCV(
  input: { [key: string]: string },
  trading: TradingPairType
): OHLCVType {
  try {
    const lastPrice = input["c"];
    const priceChange = input["p"];
    const priceChangePercent = input["P"];
    const highPrice = input["h"];
    const lowPrice = input["l"];
    const tradedBaseVolume = input["v"];
    const totalTradedAssetVolume = input["q"];
    return {
      data: {
        lastPrice,
        priceChange,
        priceChangePercent,
        highPrice,
        lowPrice,
        tradedBaseVolume,
        totalTradedAssetVolume,
      },
      tradingPair: trading,
    };
  } catch (error) {
    console.error("Error parsing OHLCVType", error);
  }
  return emptyOHLCV();
}

export function emptyOHLCV(): OHLCVType {
  return {
    data: {
      lastPrice: "",
      priceChange: "",
      priceChangePercent: "",
      highPrice: "",
      lowPrice: "",
      tradedBaseVolume: "",
      totalTradedAssetVolume: "",
    },
    tradingPair: emptyTrading(),
  };
}
