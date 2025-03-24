import { TradingPairType } from "../../Models/TradingPairType";

export interface DropdownMenuType {
  options: TradingPairType[],
  action: (value: TradingPairType) => void
}