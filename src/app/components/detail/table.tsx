'use client';

import React from 'react';

import { useTradingPairDetailContext } from '@/app/context/trading-pair-detail-provider';
import SideFilter from './side-filter';
import Row from './row';

export default function Table() {
  const { trades, handleClose, loading, side } = useTradingPairDetailContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-4">
      <div className="flex justify-between mb-2">
        <SideFilter />
        <button
          onClick={handleClose}
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-black-700  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Close
        </button>
      </div>
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
              trades
                .filter((tradeData) => {
                  if (side === 'both') {
                    return tradeData;
                  }
                  return tradeData.side === side;
                })
                .map((tradeData) => (
                  <Row key={tradeData.trade_id} {...tradeData} />
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
