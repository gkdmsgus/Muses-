import React from 'react';

const OnboardingFormFields: React.FC = () => {
  return (
    <div
      className="w-[382px] h-[183px] flex flex-col shrink-0"
      style={{ gap: '11px' }}
    >
      <div className="flex flex-col gap-[8px] h-[86px] shrink-0">
        <label className="text-[14px] font-mediumFont text-black80 h-[20px]">
          닉네임*
        </label>
        <input
          type="text"
          placeholder="푸른 오렌지"
          className="w-full h-[58px] px-[17px] bg-white border border-[#C3C5C8] rounded-[12px] focus:outline-none focus:border-solidPurple transition-all font-mainFont text-[16px]"
        />
      </div>

      <div className="flex flex-col gap-[8px] h-[86px] shrink-0">
        <label className="text-[14px] font-mediumFont text-black80 h-[20px]">
          소개글
        </label>
        <input
          type="text"
          placeholder="150자 이내로 소개글을 적어주세요!"
          className="w-full h-[58px] px-[17px] bg-white border border-[#C3C5C8] rounded-[12px] focus:outline-none focus:border-solidPurple transition-all font-mainFont text-[16px]"
        />
      </div>
    </div>
  );
};

export default OnboardingFormFields;
