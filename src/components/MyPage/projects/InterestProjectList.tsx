import InterestProjectCard from './InterestProjectCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMyLikedProjects } from '../../../api/user';
import type { Project } from '../../../types/projects';

const statusMap = {
  FUNDING: '진행중',
  CLOSING: '마감임박',
  SUCCESS: '성공',
  FAIL: '실패',
} as const;

const formatDday = (dday: number) => {
  if (dday > 0) return `D-${dday}`;
  if (dday === 0) return 'D-Day';
  return `D+${Math.abs(dday)}`;
};

const InterestProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const load = async () => {
      let serverProjects: Project[] = [];
      try {
        const res = await fetchMyLikedProjects(0, 10);
        serverProjects = res.data;
      } catch (e) {
        console.warn('서버에서 관심 프로젝트를 불러오는데 실패했습니다. 로컬 데이터를 사용합니다.');
      }

      // localStorage에서 좋아요한 프로젝트 가져오기
      const localLikedJson = localStorage.getItem('my_liked_projects');
      const localLiked = localLikedJson ? JSON.parse(localLikedJson) : [];

      // 중복 제거 (ID 기준)
      const combined = [...localLiked];
      serverProjects.forEach((sp) => {
        if (!combined.some((lp) => lp.projectId === sp.projectId)) {
          combined.push(sp);
        }
      });

      setProjects(combined);
    };
    load();
  }, []);

  if (projects.length === 0) {
    return (
      <div className="self-stretch py-12 px-6 rounded-xl bg-white60/50 flex flex-col items-center justify-center gap-4 min-h-[120px] font-mainFont">
        <p className="text-black60 text-base font-normal leading-6">
          아직 관심있는 프로젝트가 없어요.
        </p>
        <Link
          to="/projects"
          className="inline-block px-5 py-2.5 rounded-full bg-solidPurple text-white text-sm font-mediumFont leading-5 transition-all duration-200 ease-in-out hover:bg-solidPurple/80 hover:scale-105"
        >
          둘러보기
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-start items-start gap-6">
      {projects.map((p) => (
        <InterestProjectCard
          projectId={p.projectId}
          key={p.projectId}
          location={p.region ?? '지역미정'}
          status={statusMap[p.fundingStatus]}
          tags={p.tags ?? []}
          title={p.title}
          progress={p.achieveRate}
          dday={formatDday(p.dday)}
          thumbnailUrl={p.thumbnailUrl}
        />
      ))}
    </div>
  );
};

export default InterestProjectList;
