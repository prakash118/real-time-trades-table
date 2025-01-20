'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { redirect, useParams } from 'next/navigation';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import { Trade, TradeSide } from '@/types/trading-pairs';

const socketUrl = 'wss://ws-feed.exchange.coinbase.com';

interface TradingPairDetailContextProps {
  trades: Trade[];
  handleClose: () => void;
  loading: boolean;
  setSide: (side: TradeSide) => void;
  side: TradeSide;
}

const TradingPairDetailContext = createContext<
  TradingPairDetailContextProps | undefined
>(undefined);

const setupSubscription = (pair: string) => {
  return {
    subscribe: () =>
      JSON.stringify({
        type: 'subscribe',
        product_ids: [pair],
        channels: ['ticker'],
      }),
    unsubscribe: () =>
      JSON.stringify({
        type: 'unsubscribe',
        product_ids: [pair],
        channels: ['ticker'],
      }),
  };
};

export default function TradingPairDetailProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pair } = useParams<{ pair: string }>();
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);
  const [side, setSide] = useState<TradeSide>('both');
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const subscription = setupSubscription(pair);

  useEffect(() => {
    sendMessage(subscription.subscribe());
    return () => {
      sendMessage(subscription.unsubscribe());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loading && lastMessage) {
      const newTrade = JSON.parse(lastMessage.data);
      if (newTrade.type === 'ticker') {
        let newTrades = [];
        // some trade reappears - (guessing) the execution happens in chunk
        // previous trades are ignored here and replaced with the latest trade
        const hasTrade = trades.some((t) => t.trade_id === newTrade.trade_id);
        if (hasTrade) {
          newTrades = [
            newTrade,
            ...trades.filter((t) => t.trade_id !== newTrade.trade_id),
          ];
        } else {
          newTrades = [newTrade, ...trades];
        }
        // only 50 trades
        if (newTrades.length > 50) {
          newTrades = newTrades.slice(0, 50);
        }
        setTrades(newTrades);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMessage, loading]); // ignoring the update for trades

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      setLoading(false);
    }
  }, [readyState]);

  const handleClose = () => {
    redirect('/');
  };

  return (
    <TradingPairDetailContext
      value={{ trades, handleClose, loading, side, setSide }}
    >
      {children}
    </TradingPairDetailContext>
  );
}

export const useTradingPairDetailContext = () => {
  const context = useContext(TradingPairDetailContext);
  if (!context) {
    throw new Error(
      'useTradingPairDetailContext must be used within a TradingPairDetailContext'
    );
  }
  return context;
};
