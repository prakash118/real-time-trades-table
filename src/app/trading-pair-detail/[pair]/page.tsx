import TradingPairDetailTable from '@/app/components/trading-pair-detail-table';
import TradingPairDetailProvider from '@/app/context/trading-pair-detail-provider';

export default function Page() {
  return (
    <TradingPairDetailProvider>
      <TradingPairDetailTable />
    </TradingPairDetailProvider>
  );
}
