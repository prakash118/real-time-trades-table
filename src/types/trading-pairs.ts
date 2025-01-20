export interface TradingPair {
  id: string;
  base_currency: string;
  quote_currency: string;
  display_name: string;
  status: string;
  trading_disabled: boolean;
}
