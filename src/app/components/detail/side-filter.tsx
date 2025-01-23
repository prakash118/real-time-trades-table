import React from 'react';
import { useTradingPairDetailContext } from '@/app/context/trading-pair-detail-provider';

interface ButtonProps {
  className: string;
  selected: boolean;
  handleSide: () => void;
  label: string;
}

const Button = ({ className, selected, handleSide, label }: ButtonProps) => {
  return (
    <button
      onClick={handleSide}
      type="button"
      className={`px-4 py-2 text-sm font-medium text-gray-900 border-gray-200 hover:bg-gray-100 hover:text-black-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 ${className} ${
        selected
          ? 'bg-gray-100 text-black-700 dark:text-white dark:bg-gray-400 font-bold'
          : ''
      }`}
    >
      {label}
    </button>
  );
};

export default function SideFilter() {
  const { side, setSide } = useTradingPairDetailContext();
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <Button
        label="Buy"
        handleSide={() => setSide('buy')}
        selected={side === 'buy'}
        className="border rounded-s-lg"
      />
      <Button
        label="Sell"
        handleSide={() => setSide('sell')}
        selected={side === 'sell'}
        className="border-t border-b"
      />
      <Button
        label="Both"
        handleSide={() => setSide('both')}
        selected={side === 'both'}
        className="border rounded-e-lg"
      />
    </div>
  );
}
