import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/LoginPage/BackButton';
import { LoginHeader } from '../components/LoginPage/LoginHeader';
import { AuthButton } from '../components/LoginPage/AuthButton';
import ProfileImageUpload from '../components/OnBoardingPage/ProfileImageUpload';
import OnboardingFormFields from '../components/OnBoardingPage/OnboardingFormFields';

const OnBoardingPage: React.FC = () => {
  const navigate = useNavigate();
  const handleFinalSignup = () => {
    console.log('Final Signup clicked');
    navigate('/');
  };
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-white bg-cover bg-center bg-no-repeat py-12"
      style={{
        backgroundImage: 'url("src/assets/images/backgrounds/login_bg.png")',
      }}
    >
      <div className="w-[448px] flex flex-col gap-[24px]">
        <BackButton onClick={() => window.history.back()} />

        <div className="w-full h-[732px] bg-white/80 border border-white rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.4)] backdrop-blur-[20px] px-[33px] pt-[33px] flex flex-col relative overflow-hidden">
          <div className="w-[382px] h-[218px] flex flex-col items-center gap-[12px] mx-auto shrink-0">
            <div className="w-[382px] h-[78px] shrink-0">
              <LoginHeader subtitle="프로필을 만드세요" />
            </div>

            <div className="w-[128px] h-[128px] shrink-0">
              <ProfileImageUpload />
            </div>
          </div>

          <div className="w-[382px] h-[426px] flex flex-col gap-[110px] mx-auto mt-[20px] shrink-0">
            <div className="shrink-0">
              <OnboardingFormFields />
            </div>

            <AuthButton
              text="회원가입"
              variant="primary"
              className="h-[48px] shrink-0"
              onClick={handleFinalSignup}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingPage;
