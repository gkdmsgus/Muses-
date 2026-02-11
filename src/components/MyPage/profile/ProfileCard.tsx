import ProfileAvatar from './detailprofile/ProfileAvatar';
import ProfileBadges from './detailprofile/ProfileBadges';
import ProfileHeader from './detailprofile/ProfileHeader';
import ProfileIntro from './detailprofile/ProfileIntro';
import ProfileStats from './detailprofile/ProfileStats';

interface ProfileCardProps {
  isCreator: boolean;
  ticketCount?: number;
  supportCount?: number;
  ongoingProjectCount?: number;
}

export default function ProfileCard({
  isCreator,
  ticketCount = 2,
  supportCount = 2,
  ongoingProjectCount = 0,
}: ProfileCardProps) {
  return (
    <div className="h-64 p-8 bg-white rounded-[40px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-white80 flex gap-6">
      <ProfileAvatar />

      <div className="flex flex-col gap-2 flex-1">
        <ProfileBadges isCreator={isCreator} certifiedCreator='인증된 크리에이터'  supporterClass='Lv3 열정적인 서포터' />
        <ProfileHeader name='푸른 오렌지' />
        <ProfileIntro />
        <ProfileStats
          isCreator={isCreator}
          ticketCount={ticketCount}
          supportCount={supportCount}
          ongoingProjectCount={ongoingProjectCount}
        />
      </div>
    </div>
  );
}
