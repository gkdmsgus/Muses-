import { useSearchParams } from 'react-router-dom';
import { useMyPageTab } from '../components/MyPage/hooks/useMyPageTab';
import MyPageTab from '../components/MyPage/MyPageTab';
import MyActivitySection from '../components/MyPage/section/MyActivitySection';
import CreatorSection from '../components/MyPage/section/CreatorSection';
import CreatorEmptySection from '../components/MyPage/section/CreatorEmptySection';
import ProfileCard from '../components/MyPage/profile/ProfileCard';
import { projectItems } from '../components/MyPage/projects/projectData';

export default function MyPage() {
  const [params] = useSearchParams();
  const tab = params.get('tab');

  const initialTab = tab === 'creator' ? 'creator' : 'activity';

  const { activeTab, setActiveTab, isActivityTab, isCreatorTab } =
    useMyPageTab(initialTab);

  const isCreator = true;

  const activeProjects = projectItems.filter(
    (project) => project.status === 'ONGOING'
  );

  const activeProjectCount = activeProjects.length;

  return (
    <div className="min-h-screen bg-[#F8F9FC] pt-[110px]">
      <div className="max-w-[1425px] mx-auto px-[264.5px] pb-[80px]">
        <div className="max-w-[896px] mx-auto flex flex-col gap-[32px] px-[24px]">
          <ProfileCard
            isCreator={isCreator}
            ongoingProjectCount={activeProjectCount}
          />

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
                activeProjectCount={activeProjectCount}
              />
            ) : (
              <CreatorEmptySection />
            ))}
        </div>
      </div>
    </div>
  );
}
