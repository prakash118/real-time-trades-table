import { redirect } from 'next/navigation';

const defaultPair = 'ETH-USD';

export default function Detail() {
  redirect(`/detail/${defaultPair}`);
}
