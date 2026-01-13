import React from 'react';
import ProfileHeader from '../components/OnBoardingPage/ProfileHeader';
import ProfileSetupForm from '../components/OnBoardingPage/ProfileSetupForm';

const OnBoardingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/images/backgrounds/login_bg.png')] bg-cover bg-center w-full h-screen">
      <div className="flex flex-col w-[448px] h-[773px] gap-6">
        <button className="flex items-center text-black60 text-sm hover:text-mainBlack transition-colors w-fit">
          <img
            src="/images/icons/back_arrow.png"
            alt="back"
            className="w-4 h-4 mr-1"
          />
          뒤로 가기
        </button>

        <div className="flex flex-col items-center shadow-xl w-[448px] h-[725px] bg-white/90 rounded-[24px] border border-white/95 backdrop-blur-[20px] p-[26px_33px] gap-[26px]">
          <ProfileHeader />
          <ProfileSetupForm />
        </div>
      </div>
    </div>
  );
};

export default OnBoardingPage;
