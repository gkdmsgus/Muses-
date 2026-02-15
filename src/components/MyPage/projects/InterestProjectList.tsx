import InterestProjectCard from './InterestProjectCard';
import { useEffect, useState } from 'react';
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
      const res = await fetchMyLikedProjects(0, 10);
      setProjects(res.data);
    };
    load();
  }, []);

  return (
    <div className="inline-flex justify-start items-start gap-6">
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
        />
      ))}
    </div>
  );
};

export default InterestProjectList;
