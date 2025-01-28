import ListContainer from './components/list/list-server';
import Search from './components/list/search';
import Toggle from './components/list/toggle';
import TradingPairSearchProvider from './context/trading-pair-filter-provider';

export default function Home() {
  return (
    <TradingPairSearchProvider>
      <div className="m-4">
        <div className="flex justify-center gap-4 mb-4">
          <Search />
          <Toggle />
        </div>
        <ListContainer />
      </div>
    </TradingPairSearchProvider>
  );
}
