import { Ticket } from 'lucide-react';
import RecentDonations from '../donation/RecentDonationList';
import InterestProjectList from '../projects/InterestProjectList';
import TicketCard from '../tickets/TicketCard';
import ActivitySection from './ActivitySection';

const MyActivitySection = () => {
  return (
    <section className="max-w-[848px] flex flex-col gap-[24px]">
      <ActivitySection title="나의 티켓 (2)" icon={<Ticket className="text-blue-700 h-[20px] w-[20px]" />}>
        <div className="h-[280px] flex flex-col gap-[24px]">
          <div className="flex flex-wrap gap-6">
            <TicketCard />
          </div>
        </div>
      </ActivitySection>

      <ActivitySection title="응원 상세 정보">
        <div className="h-[312px] flex flex-col gap-[24px]">
          <RecentDonations />
        </div>
      </ActivitySection>

      <ActivitySection title="관심있는 프로젝트">
        <div className="self-stretch flex flex-col gap-6">
          <InterestProjectList />
        </div>
      </ActivitySection>
    </section>
  );
};

export default MyActivitySection;
