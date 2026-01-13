import React from 'react';
import SignUpForm from '../components/LoginPage/SignUpForm';
import SocialLoginButton from '../components/LoginPage/SocialLoginButton';

const SignUpPage: React.FC = () => {
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

        <div className="flex flex-col items-center shadow-xl w-[448px] h-[725px] bg-white/90 rounded-[24px] border border-white/95 backdrop-blur-[20px] pt-[26px] px-[33px] pb-[26px] gap-[26px]">
          <div className="mt-4 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <img
                src="/images/icons/logo.png"
                alt="logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-logoFont text-2xl font-bold tracking-tight text-mainBlack">
                muses
              </span>
            </div>
            <p className="text-black60 text-sm">새 계정을 만드세요</p>
          </div>

          <SignUpForm />

          <div className="w-full flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-white60"></div>
            <span className="text-[12px] text-black40">또는</span>
            <div className="flex-1 h-[1px] bg-white60"></div>
          </div>

          <div className="flex gap-[12px]">
            <SocialLoginButton
              text="카카오로 계속하기"
              bgColor="#FACC15"
              textColor="#3C1E1E"
            />
            <SocialLoginButton
              text="구글로 계속하기"
              bgColor="#3A3A3A"
              textColor="#FFFFFF"
            />
          </div>

          <div className="text-[14px]">
            <span className="text-black80">이미 계정이 있으신가요? </span>
            <button className="font-semibold underline underline-offset-2 hover:text-mainBlack transition-colors">
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
