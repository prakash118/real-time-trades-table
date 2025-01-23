import { Trade, TradeSide } from '@/types/trading-pairs';

export default function Row(params: Trade) {
  const sideColor: Record<TradeSide, string> = {
    buy: 'text-green-700',
    sell: 'text-red-700',
    both: '',
  };
  const date = new Date(params.time);
  const time = date.toLocaleString('en-GB', { timeZone: 'UTC' });

  return (
    <tr className=" animate-fadein bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {params.trade_id}
      </td>
      <td className={`px-6 py-4 ${sideColor[params.side]}`}>
        {params.side.toUpperCase()}
      </td>
      <td className="px-6 py-4">{params.price}</td>
      <td className="px-6 py-4">{params.last_size}</td>
      <td className="px-6 py-4">{time}</td>
    </tr>
  );
}
