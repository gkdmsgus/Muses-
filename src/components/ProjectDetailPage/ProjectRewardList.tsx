import { MOCK_PROJECT_DETAILS } from '../../types/projectDetails';
import { ProjectRewardCard } from './ProjectRewardCard';

interface ProjectRewardListProps {
  projectId: number;
}

export const ProjectRewardList = ({ projectId }: ProjectRewardListProps) => {
  const detail = MOCK_PROJECT_DETAILS.find(
    (item) => item.projectId === projectId
  );

  return (
    <div className="flex flex-col gap-4 mb-6">
      <p className="text-lg font-boldFont text-mainBlack px-2">리워드 선택</p>
      <div className="flex flex-col gap-4">
        {detail?.rewards?.map((reward) => (
          <ProjectRewardCard key={reward.id} reward={reward} />
        ))}
      </div>
    </div>
  );
};
