import { useSearchParams } from 'react-router-dom';
import { useMyPageTab } from '../components/MyPage/hooks/useMyPageTab';
import MyPageTab from '../components/MyPage/MyPageTab';
import MyActivitySection from '../components/MyPage/section/MyActivitySection';
import CreatorSection from '../components/MyPage/section/CreatorSection';
import CreatorEmptySection from '../components/MyPage/section/CreatorEmptySection';
import ProfileCard from '../components/MyPage/profile/ProfileCard';
import { useEffect, useState } from 'react';
import { fetchMyCreatorProjects, getMyInfo } from '../api/user';
import type { Member } from '../components/MyPage/types/apitypes/members';
import { getCreatorSummary } from '../api/creator';
import type { Project } from '../components/MyPage/types/project';

export default function MyPage() {
  const [member, setMember] = useState<Member | null>(null);
  const [creatorSummary, setCreatorSummary] = useState<{
    totalFunding: number;
    ongoingProjectCount: number;
  } | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  const [params] = useSearchParams();
  const tab = params.get('tab');

  const initialTab = tab === 'creator' ? 'creator' : 'activity';

  const { activeTab, setActiveTab, isActivityTab, isCreatorTab } =
    useMyPageTab(initialTab);

  const role = localStorage.getItem('role');
  const isCreator = role === 'CREATOR';
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getMyInfo();
        setMember(userData);

        let serverProjects: Project[] = [];

        if (isCreator) {
          const summaryData = await getCreatorSummary();
          setCreatorSummary(summaryData);

          // 서버 프로젝트 가져오기
          const projectData = await fetchMyCreatorProjects();
          serverProjects = projectData;
        }

        // localStorage에서 로컬 프로젝트 가져오기
        const localProjectsJson = localStorage.getItem('my_created_projects');
        const localProjects: Project[] = localProjectsJson
          ? JSON.parse(localProjectsJson)
          : [];

        // 로컬 프로젝트를 우선순위로 하여 합침 (최신순)
        setProjects([...localProjects, ...serverProjects]);
      } catch (err) {
        console.error('마이페이지 데이터 로드 실패:', err);
        
        // API 실패 시에도 로컬 프로젝트는 보여줌
        const localProjectsJson = localStorage.getItem('my_created_projects');
        if (localProjectsJson) {
          setProjects(JSON.parse(localProjectsJson));
        }
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
              <CreatorSection projects={projects} />
            ) : (
              <CreatorEmptySection />
            ))}
        </div>
      </div>
    </div>
  );
}
