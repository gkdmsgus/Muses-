import { useState } from 'react';
import DonationItem from './DonationItem';
import DetailDonationItem from './DetailDonationItem';
import { type DonationItemType } from '../types/types';

const items: DonationItemType[] = [
  {
    initial: '밴',
    status: '결제완료',
    date: '2025.10.01',
    title: "밴드 '새벽' 단독 콘서트",
    amount: '55,000원',
  },
  {
    initial: '재',
    status: '결제완료',
    date: '2024.12.15',
    title: '재즈 페스티벌 얼리버드',
    amount: '88,000원',
  },
];

const RecentDonations = () => {
const [selected, setSelected] = useState<DonationItemType | null>(null);

  return (
    <>
      <div className="flex flex-col gap-4">
        {items.map((item, idx) => (
          <DonationItem key={`${item.date}-${item.title}`} item={item} onSelect={setSelected} />
        ))}
      </div>

      {selected && (
        <DetailDonationItem item={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};

export default RecentDonations;
