export interface CandlestickType {
  klines: KlineType[];
}

export interface KlineType {
  close: number;
  high: number;
  low: number;
  open: number;
  time: string;
}

export function convertDate(date: string): string {
  const dateObject = new Date(date);
  const monthValue = String(dateObject.getUTCMonth() + 1).padStart(2, '0');
  const monthDay = String(dateObject.getUTCDate()).padStart(2, '0');
  return `${dateObject.getUTCFullYear()}-${monthValue}-${monthDay}`;
}
