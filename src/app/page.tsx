import TradingPairContainer from "./components/trading-pair-list-container";
import TradingPairListLayout from "./components/trading-pair-list-layout";
import TradingPairSearchProvider from "./context/trading-pair-filter-provider";

export default function Home() {
  return (
    <TradingPairSearchProvider>
      <TradingPairListLayout>
        <TradingPairContainer />
      </TradingPairListLayout>
    </TradingPairSearchProvider>
  );
}
