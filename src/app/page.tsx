import ListContainer from "./components/list/list-container";
import ListLayout from "./components/list/list-layout";
import TradingPairSearchProvider from "./context/trading-pair-filter-provider";

export default function Home() {
  return (
    <TradingPairSearchProvider>
      <ListLayout>
        <ListContainer />
      </ListLayout>
    </TradingPairSearchProvider>
  );
}
