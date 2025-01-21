'use client';

import { useTradingPairFilterContext } from '../context/trading-pair-filter-provider';

export default function TradingPairSearch() {
  const { searchText, setSearchText } = useTradingPairFilterContext();

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
      <input
        type="search"
        id="search"
        data-testid="search-input"
        className="block w-1/2 max-w-lg p-4 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="Type to search"
        value={searchText}
        onChange={searchHandler}
      />
  );
}
