import { useState } from 'react';
import { Ticket } from 'lucide-react';
import RecentDonations from '../donation/RecentDonationList';
import InterestProjectList from '../projects/InterestProjectList';
import TicketCard from '../tickets/TicketCard';
import ActivitySection from './ActivitySection';

const MyActivitySection = () => {
  const [ticketCount, setTicketCount] = useState(0);

  return (
    <section className="max-w-[848px] flex flex-col gap-[48px]">
      <ActivitySection
        title={`나의 티켓 (${ticketCount})`}
        icon={<Ticket className="text-blue-700 h-[20px] w-[20px]" />}
      >
        {/* 🔥 height 고정 제거 */}
        <div className="flex flex-wrap gap-6">
          <TicketCard onCountChange={setTicketCount} />
        </div>
      </ActivitySection>

      <ActivitySection title="응원 상세 정보">
        <div className=" flex flex-col gap-[24px]">
          <RecentDonations />
        </div>
      </ActivitySection>

      <ActivitySection title="관심있는 프로젝트">
        <div className="w-full flex flex-col gap-6">
          <InterestProjectList />
        </div>
      </ActivitySection>
    </section>
  );
};

export default MyActivitySection;
