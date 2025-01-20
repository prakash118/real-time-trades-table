'use client';

import { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';

import TradingPairDetailRow from '@/app/components/trading-pair-detail-row';
import { Trade } from '@/types/trading-pairs';

const socketUrl = 'wss://ws-feed.exchange.coinbase.com';

export default function Page() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const { sendMessage, lastMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    sendMessage(
      JSON.stringify({
        type: 'subscribe',
        product_ids: ['ETH-GBP'],
        channels: ['ticker'],
      })
    );
    return () => {
      sendMessage(
        JSON.stringify({
          type: 'unsubscribe',
          product_ids: ['ETH-GBP'],
          channels: ['ticker'],
        })
      );
    };
  }, []);

  useEffect(() => {
    console.log('lastMessage');
    
    if (lastMessage) {
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
        setTrades(newTrades);
      }
    }
  }, [lastMessage]);

  return (
    <div className="m-4">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Trade ID
              </th>
              <th scope="col" className="px-6 py-3">
                Side
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Size
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {!!trades.length &&
              trades.map((tradeData) => (
                <TradingPairDetailRow key={tradeData.trade_id} {...tradeData} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
