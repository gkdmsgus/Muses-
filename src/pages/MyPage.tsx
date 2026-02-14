import { useSearchParams } from 'react-router-dom';
import { useMyPageTab } from '../components/MyPage/hooks/useMyPageTab';
import MyPageTab from '../components/MyPage/MyPageTab';
import MyActivitySection from '../components/MyPage/section/MyActivitySection';
import CreatorSection from '../components/MyPage/section/CreatorSection';
import CreatorEmptySection from '../components/MyPage/section/CreatorEmptySection';
import ProfileCard from '../components/MyPage/profile/ProfileCard';
import { projectItems } from '../components/MyPage/projects/projectData';
import { useEffect, useState } from 'react';
import { getMyInfo } from '../api/user';
import type { Member } from '../components/MyPage/types/apitypes/members';
import { getCreatorSummary } from '../api/creator';

export default function MyPage() {
  const [member, setMember] = useState<Member | null>(null);
  const [creatorSummary, setCreatorSummary] = useState<{
    totalFunding: number;
    ongoingProjectCount: number;
  } | null>(null);

  const [params] = useSearchParams();
  const tab = params.get('tab');

  const initialTab = tab === 'creator' ? 'creator' : 'activity';

  const { activeTab, setActiveTab, isActivityTab, isCreatorTab } =
    useMyPageTab(initialTab);

  const isCreator = false;

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getMyInfo();
      setMember(userData);
      console.log('userData:', userData);
      if (isCreator) {
        const summaryData = await getCreatorSummary();
        setCreatorSummary(summaryData);
      }
    };

    fetchData();
  }, [isCreator]);

  return (
    <div className="min-h-screen bg-[#F8F9FC] pt-[110px]">
      <div className="max-w-[1425px] mx-auto px-[264.5px] pb-[80px]">
        <div className="max-w-[896px] mx-auto flex flex-col gap-[32px] px-[24px]">
          {member && (
            <ProfileCard
              isCreator={isCreator}
              member={member}
              ongoingProjectCount={
                isCreator ? (creatorSummary?.ongoingProjectCount ?? 0) : 0
              }
            />
          )}

          <MyPageTab
            activeTab={activeTab}
            onChange={setActiveTab}
            isCreator={isCreator}
          />

          {isActivityTab && <MyActivitySection />}

          {isCreatorTab &&
            (isCreator ? (
              <CreatorSection
                projects={projectItems}
              />
            ) : (
              <CreatorEmptySection />
            ))}
        </div>
      </div>
    </div>
  );
}
