import TradingPairSearch from './trading-pair-search';
import TradingPairToggle from './trading-pair-toggle';

export default function TradingPairListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-4">
      <div className="flex justify-center gap-4 mb-4">
        <TradingPairSearch />
        <TradingPairToggle />
      </div>
      {children}
    </div>
  );
}
