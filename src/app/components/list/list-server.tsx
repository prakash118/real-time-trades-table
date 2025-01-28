import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import List from './list';

export default function ListContainer() {
  const getProducts = async () => {
    const res = await fetch('https://api.exchange.coinbase.com/products');
    return await res.json();
  };
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <List productsPromise={getProducts()} />
      </Suspense>
    </ErrorBoundary>
  );
}
