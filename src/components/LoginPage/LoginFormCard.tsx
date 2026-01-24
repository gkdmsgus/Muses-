import React from 'react';
import BackButton from './BackButton';
import LoginHeader from './LoginHeader';
import LoginFormFields from './LoginFormFields';
import SocialLoginSection from './SocialLoginSection';
import GoogleLoginSection from './GoogleLoginSection';
import LoginFooter from './LoginFooter';

const LoginFormCard: React.FC = () => {
  return (
    <div className="flex items-center justify-center  bg-mainWhite p-4 font-mainFont">
      <div className="w-[448px] flex flex-col gap-[24px]">
        <BackButton onClick={() => window.history.back()} />

        <div className="w-full h-[638px] bg-white/80 border border-white rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[20px] ">
          <div className="flex flex-col pt-[33px] px-[33px]">
            <LoginHeader subtitle="계정에 로그인하세요" />

            <div className="mt-[26px]">
              <LoginFormFields />
            </div>

            <div className="mt-[24px]">
              <SocialLoginSection />
            </div>

            <div className="mt-[12.5px]">
              <GoogleLoginSection />
            </div>

            <div className="mt-[30.5px]">
              <LoginFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormCard;
