import RecentDonations from '../donation/RecentDonation';
import TicketCard from '../tickets/TicketCard';
import { Ticket } from 'lucide-react';

const MyActivitySection = () => {
  return (
    <section className="max-w-[848px] flex flex-col gap-[48px]">
      {/* 나의 티켓 */}
      <div className="h-[280px] flex flex-col gap-[24px]">
        <h2 className="font-semibold inline-flex items-center">
          <Ticket className="text-blue-700 h-[20px] w-[20px] mr-2" />
          <div className="justify-center text-[#1F2937] text-xl font-boldFont leading-7">
            나의 티켓 (2)
          </div>
        </h2>

        <div className="flex flex-wrap gap-6">
          <TicketCard />
        </div>
      </div>

      {/* 최근 후원 내역 */}
      <div className="h-[312px] flex flex-col gap-[24px]">
        <div className="self-stretch justify-center text-[#1F2937] text-xl font-boldFont leading-7">
          최근 후원 내역
        </div>
        <RecentDonations />
      </div>
    </section>
  );
};

export default MyActivitySection;
