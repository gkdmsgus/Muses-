import { ChevronRight } from 'lucide-react';
import { type DonationItemType } from '../types/types';

interface Props {
  item: DonationItemType;
  onSelect: (item: DonationItemType) => void;
}

const DonationItem = ({ item, onSelect }: Props) => {
  const { initial, status, date, title, amount } = item;

  return (
    <div className="self-stretch p-6 bg-white rounded-[32px] border border-white80 shadow inline-flex items-center gap-6">
      <div className="w-14 h-14 bg-[#EEF2FF] rounded-2xl flex justify-center items-center">
        <div className="text-solidBlue text-2xl font-boldFont">{initial}</div>
      </div>

      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between">
          <div className="px-2 py-0.5 bg-[#EEF2FF] rounded text-[#4F46E5] text-xs font-boldFont">
            {status}
          </div>
          <div className="text-black40 text-xs">{date}</div>
        </div>

        <div className="text-mainBlack text-base font-boldFont">{title}</div>

        <div className="text-black60 text-sm font-boldFont">{amount}</div>
      </div>

      <button
        onClick={() => onSelect(item)}
        className="text-white60 hover:text-black40 cursor-pointer transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default DonationItem;
