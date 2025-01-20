export default function Page() {
  return (
    <div className="m-4">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Trade ID
              </th>
              <th scope="col" className="px-6 py-3">
                Side
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Size
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ETH-USD
              </td>
              <td className="px-6 py-4">BUY</td>
              <td className="px-6 py-4">33000</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">20/01/2025, 12:29:44</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
