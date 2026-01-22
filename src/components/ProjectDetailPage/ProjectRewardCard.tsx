import type { ProjectReward } from '../../types/projectDetails';
import { CircleCheckBig } from 'lucide-react';

interface ProjectRewardCardProps {
  reward: ProjectReward;
}

export const ProjectRewardCard = ({ reward }: ProjectRewardCardProps) => {
  return (
    <div className="group w-full rounded-[32px] border border-white60 p-6 bg-white cursor-pointer hover:border-solidBlue hover:shadow-md hover:shadow-solidBlue/10 transition-all duration-300">
      <span className="mb-1 text-lg font-boldFont text-mainBlack group-hover:text-solidBlue transition-all duration-300">
        {reward.price.toLocaleString()}원
      </span>
      <p className="mb-2 text-base font-mediumFont text-mainBlack">
        {reward.title}
      </p>
      <p className="mb-4 text-sm text-black60 leading-relaxed">
        {reward.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <CircleCheckBig className="w-3 h-3 text-solidBlue" />
          <p className="text-xs font-boldFont text-black40">
            {reward.numberOfFunded}명 선택함
          </p>
        </div>
        <p className="text-xs font-boldFont text-[#F87171]">
          {reward.numberOfAvailable}개 남음
        </p>
      </div>
    </div>
  );
};
