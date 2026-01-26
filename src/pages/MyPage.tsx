import { useMyPageTab } from '../components/MyPage/hooks/useMyPageTab';
import MyPageTab from '../components/MyPage/MyPageTab';
import MyActivitySection from '../components/MyPage/section/MyActivitySection';
import CreatorSection from '../components/MyPage/section/CreatorSection';
import CreatorEmptySection from '../components/MyPage/section/CreatorEmptySection';
import ProfileCard from '../components/MyPage/profile/ProfileCard';
import { type Project } from '../components/MyPage/projects/ProjectType';

const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    status: 'ONGOING',
    title: '새벽 2집 앨범 발매 기념 굿즈',
    progressPercent: 142,
    amount: '2,840,000원',
    dday: 'D-3',
  },
];

export default function MyPage() {
  const { activeTab, setActiveTab, isActivityTab, isCreatorTab } =
    useMyPageTab();

  const isCreator = false;

  return (
    <div className="min-h-screen bg-[#F8F9FC] pt-[110px]">
      <div className="max-w-[1425px] mx-auto px-[264.5px] pb-[80px]">
        <div className="max-w-[896px] mx-auto flex flex-col gap-[32px] px-[24px]">
          <ProfileCard />

          <MyPageTab
            activeTab={activeTab}
            onChange={setActiveTab}
            isCreator={isCreator}
          />

          {isActivityTab && <MyActivitySection />}

          {isCreatorTab &&
            (isCreator ? (
              <CreatorSection projects={MOCK_PROJECTS} />
            ) : (
              <CreatorEmptySection />
            ))}
        </div>
      </div>
    </div>
  );
}
