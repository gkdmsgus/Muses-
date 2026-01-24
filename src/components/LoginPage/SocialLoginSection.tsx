import React from 'react';
import AuthButton from './AuthButton';

const SocialLoginSection: React.FC = () => {
  return (
    <div className="w-[382px] h-[92px] flex flex-col gap-[24px] mx-auto">
      <div className="relative w-[382px] h-[20px] flex items-center justify-center">
        <div className="absolute w-full h-[1px] bg-[#C3C5C8]"></div>

        <div className="relative bg-white px-[16px] h-[20px] flex items-center justify-center">
          <span className="font-mainFont text-[14px] leading-[20px] text-black60">
            또는
          </span>
        </div>
      </div>

      <AuthButton
        text="카카오로 계속하기"
        variant="kakao"
        onClick={() => console.log('Kakao Login clicked')}
        className="font-semiBoldFont text-[16px] leading-[24px] cursor-pointer"
        iconClassName="left-[19.5px]"
        icon={
          <img
            src="src/assets/images/icons/kakao_logo.png"
            alt="Kakao"
            className="w-[28px] h-[28px] rounded-[23px]"
          />
        }
      />
    </div>
  );
};

export default SocialLoginSection;
