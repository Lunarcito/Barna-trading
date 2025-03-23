export interface OHLCVData {
  lastPrice: string;
  priceChange: string;
  priceChangePercent: string;
  highPrice: string;
  lowPrice: string;
  tradedBaseVolume: string;
  totalTradedAssetVolume: string;
}

export interface OHLCVType {
  data: OHLCVData;
}

export function createOHLCV(input: {
  [key: string]: string;
}): OHLCVData | null {
  try {
    const lastPrice = input["c"];
    const priceChange = input["p"];
    const priceChangePercent = input["P"];
    const highPrice = input["h"];
    const lowPrice = input["l"];
    const tradedBaseVolume = input["v"];
    const totalTradedAssetVolume = input["q"];
    return {
      lastPrice,
      priceChange,
      priceChangePercent,
      highPrice,
      lowPrice,
      tradedBaseVolume,
      totalTradedAssetVolume,
    };
  } catch (error) {
    console.error("Error parsing OHLCVType", error);
  }
  return null;
}
