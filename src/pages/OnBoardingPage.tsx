import React from 'react';
import ProfileHeader from '../components/OnBoardingPage/ProfileHeader';
import ProfileSetupForm from '../components/OnBoardingPage/ProfileSetupForm';

const OnBoardingPage: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/backgrounds/login_bg.png')",
        width: '100%',
        height: '100vh',
      }}
    >
      <div
        className="flex flex-col"
        style={{
          width: '448px',
          height: '773px',
          gap: '24px',
        }}
      >
        <button className="flex items-center text-black60 text-sm hover:text-mainBlack transition-colors w-fit">
          <img
            src="/images/icons/back_arrow.png"
            alt="back"
            className="w-4 h-4 mr-1"
          />
          뒤로 가기
        </button>

        <div
          className="flex flex-col items-center shadow-xl"
          style={{
            width: '448px',
            height: '725px',
            backgroundColor: '#FFFFFFE5',
            borderRadius: '24px',
            border: '1px solid #FFFFFFF2',
            backdropFilter: 'blur(20px)',
            padding: '26px 33px',
            gap: '26px',
            opacity: '1',
          }}
        >
          <ProfileHeader />

          <ProfileSetupForm />
        </div>
      </div>
    </div>
  );
};

export default OnBoardingPage;
