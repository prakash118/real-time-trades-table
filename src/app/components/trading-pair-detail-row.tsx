import { Trade } from '@/types/trading-pairs';

export default function TradingPairDetailRow(params: Trade) {
  return (
    <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {params.trade_id}
      </td>
      <td className="px-6 py-4">{params.side}</td>
      <td className="px-6 py-4">{params.price}</td>
      <td className="px-6 py-4">{params.last_size}</td>
      <td className="px-6 py-4">{params.time}</td>
    </tr>
  );
}
