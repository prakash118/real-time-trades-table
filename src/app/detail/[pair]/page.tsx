import Table from '@/app/components/detail/table';
import TradingPairDetailProvider from '@/app/context/trading-pair-detail-provider';

export default function Page() {
  return (
    <TradingPairDetailProvider>
      <Table />
    </TradingPairDetailProvider>
  );
}
