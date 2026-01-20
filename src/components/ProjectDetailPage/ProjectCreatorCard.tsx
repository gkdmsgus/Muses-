import { ChevronRight, Users } from 'lucide-react';
import { MOCK_PROJECT_DETAILS } from '../../types/projectDetails';

interface ProjectInfoProps {
  projectId: number;
}

export const ProjectCreatorCard = ({ projectId }: ProjectInfoProps) => {
  const detail = MOCK_PROJECT_DETAILS.find(
    (item) => item.projectId === projectId
  );

  return (
    <div className="w-full flex items-center justify-between gap-4 bg-white rounded-[32px] shadow-xs p-6 border border-white80 mb-6">
      <div className="w-14 h-14 bg-[#C7D2FE] rounded-full p-4">
        <Users className="w-full h-full text-[#4F46E5]" />
      </div>
      <div className="flex flex-col gap-1 justify-start w-[166px]">
        <p className="text-xs font-boldFont text-black40">Creator</p>
        <p className="text-lg font-boldFont text-mainBlack">
          {detail?.creator}
        </p>
      </div>
      <div className="w-8 h-8 bg-mainWhite rounded-full p-2 cursor-pointer hover:bg-white60 transition-all duration-300">
        <ChevronRight className="w-full h-full text-mainBlack" />
      </div>
    </div>
  );
};
