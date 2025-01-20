export type TradeSide = 'buy' | 'sell' | 'both';

export interface Trade {
  type: string;
  sequence: number;
  product_id: string;
  price: number;
  side: TradeSide;
  time: string;
  trade_id: number;
  last_size: number;
}

export interface TradingPair {
  id: string;
  base_currency: string;
  quote_currency: string;
  display_name: string;
  status: string;
  trading_disabled: boolean;
}
