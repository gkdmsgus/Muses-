import type { ProjectReward } from '../../types/projectDetails';
import { CircleCheckBig } from 'lucide-react';

interface ProjectRewardCardProps {
  reward: ProjectReward;
  onClick?: (reward: ProjectReward) => void;
  quantity?: number;
  onQuantityChange?: (quantity: number) => void;
  isSelected?: boolean;
}

export const ProjectRewardCard = ({
  reward,
  onClick,
  quantity,
  onQuantityChange,
  isSelected = false,
}: ProjectRewardCardProps) => {
  const canAdjustQuantity = quantity !== undefined && onQuantityChange;
  const currentQuantity = quantity ?? 0;
  
  // 실제 남은 수량에서 사용자가 현재 선택한 수량을 뺀 값을 표시
  const displayedRemainingQuantity =
    reward.remainingQuantity !== undefined
      ? Math.max(0, reward.remainingQuantity - currentQuantity)
      : null;

  // 최대 선택 가능 수량 (남은 수량만큼만 선택 가능)
  const maxAvailable = reward.remainingQuantity ?? Infinity;

  return (
    <div
      className={`group relative w-full rounded-[32px] border p-6 bg-white cursor-pointer hover:border-solidBlue hover:shadow-md hover:shadow-solidBlue/10 transition-all duration-300 ${isSelected ? 'border-solidBlue shadow-md shadow-solidBlue/10' : 'border-white60 '}`}
      role="button"
      tabIndex={0}
      onClick={() => onClick?.(reward)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick?.(reward);
        }
      }}
    >
      {canAdjustQuantity && (
        <div className="absolute top-4 right-4 flex items-center">
          <button
            type="button"
            className="w-8 h-8 text-mainBlack border border-white60 hover:border-solidBlue transition-all duration-300 disabled:opacity-40 cursor-pointer"
            onClick={(event) => {
              event.stopPropagation();
              onQuantityChange(Math.max(0, currentQuantity - 1));
            }}
            disabled={currentQuantity <= 0}
          >
            -
          </button>
          <span className="w-8 h-8 flex items-center justify-center border-y border-white60 text-xs font-mediumFont text-mainBlack">
            {currentQuantity}
          </span>
          <button
            type="button"
            className="w-8 h-8 text-mainBlack border border-white60 hover:border-solidBlue transition-all duration-300 disabled:opacity-40 cursor-pointer"
            onClick={(event) => {
              event.stopPropagation();
              const nextQuantity = currentQuantity + 1;
              onQuantityChange(Math.min(maxAvailable, nextQuantity));
            }}
            disabled={currentQuantity >= maxAvailable}
          >
            +
          </button>
        </div>
      )}
      <span
        className={`mb-1 text-lg font-boldFont transition-all duration-300 ${
          isSelected ? 'text-solidBlue' : 'text-mainBlack'
        } group-hover:text-solidBlue`}
      >
        {reward.price.toLocaleString()}원
      </span>
      <p className="mb-2 text-base font-mediumFont text-mainBlack">
        {reward.rewardName}
      </p>
      <p className="mb-4 text-sm text-black60 leading-relaxed">
        {reward.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <CircleCheckBig className="w-3 h-3 text-solidBlue" />
          <p className="text-xs font-boldFont text-black40">
            {reward.soldQuantity + currentQuantity}명 선택함
          </p>
        </div>
        <p className="text-xs font-boldFont text-[#F87171]">
          {displayedRemainingQuantity !== null
            ? `${displayedRemainingQuantity}개 남음`
            : '수량 제한 없음'}
        </p>
      </div>
    </div>
  );
};
