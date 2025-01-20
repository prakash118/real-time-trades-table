import { Suspense } from 'react';
import TradingPairList from './trading-pair-list';

export default function TradingPairContainer() {
  const getProducts = async () => {
    const res = await fetch('https://api.exchange.coinbase.com/products');
    return await res.json();
  };
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <TradingPairList productsPromise={getProducts()} />
      </Suspense>
  );
}
