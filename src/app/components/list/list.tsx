'use client';
import Link from 'next/link';
import { use } from 'react';
import { TradingPair } from '@/types/trading-pairs';
import { useTradingPairFilterContext } from '@/app/context/trading-pair-filter-provider';

export default function List({
  productsPromise,
}: {
  productsPromise: Promise<TradingPair[]>;
}) {
  const products = use(productsPromise);
  const { searchText, hideDelisted } = useTradingPairFilterContext();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
      {products
        .filter((product: TradingPair) =>
          product.id.toLowerCase().includes(searchText)
        )
        .filter((product) => (hideDelisted ? !product.trading_disabled : true))
        .map((product) =>
          product.trading_disabled ? (
            <div
              key={product.id}
              className="block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-not-allowed"
            >
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.display_name}
              </h5>
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Delisted
              </span>
            </div>
          ) : (
            <Link
              key={product.id}
              href={`/detail/${product.id}`}
              className="block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
            >
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.display_name}
              </h5>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                Trading
              </span>
            </Link>
          )
        )}
    </div>
  );
}
