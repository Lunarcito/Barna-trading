export interface TradingPairType {
  baseCurrencyName: string;
  baseCurrency: string;
  exchangeCurrency: string;
  pairCode: string;
}

export function emptyTrading(): TradingPairType {
  return {
    baseCurrencyName: "",
    baseCurrency: "",
    exchangeCurrency: "",
    pairCode: "",
  };
}
