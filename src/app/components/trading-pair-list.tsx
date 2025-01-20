import { TradingPair } from '@/types/trading-pairs';
import { Suspense } from 'react';

const getProducts = async (): Promise<TradingPair[]> => {
  const res = await fetch('https://api.exchange.coinbase.com/products');
  return await res.json();
};

async function TradingPairListImpl() {
  const products = await getProducts();
  return (
    <div className="m-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
        {products.map((product) => (
          <a key={product.id} href={`/trading-pair-detail/${product.id}`}>
            {product.display_name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function TradingPairList() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TradingPairListImpl />
    </Suspense>
  );
}
