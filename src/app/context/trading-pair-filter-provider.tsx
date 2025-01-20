'use client';

import { createContext, useContext, useState } from 'react';

interface TradingPairFilterContextProps {
  searchText: string;
  setSearchText: (s: string) => void;
  hideDelisted: boolean;
  setHideDelisted: (x: boolean) => void;
}

const TradingPairFilterContext = createContext<
  TradingPairFilterContextProps | undefined
>(undefined);

export default function TradingPairFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchText, setSearchText] = useState('');
  const [hideDelisted, setHideDelisted] = useState(false);
  return (
    <TradingPairFilterContext.Provider
      value={{ searchText, setSearchText, hideDelisted, setHideDelisted }}
    >
      {children}
    </TradingPairFilterContext.Provider>
  );
}

export function useTradingPairFilterContext() {
  const context = useContext(TradingPairFilterContext);
  if (!context) {
    throw new Error(
      'useTradingPairFilterContext must be used within a TradingPairFilterContext'
    );
  }
  return context;
}
