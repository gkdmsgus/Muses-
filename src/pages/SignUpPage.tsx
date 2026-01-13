import React from 'react';
import SignUpForm from '../components/LoginPage/SignUpForm';
import SocialLoginButton from '../components/LoginPage/SocialLoginButton';

const SignUpPage: React.FC = () => {
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
          opacity: '1',
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
            paddingTop: '26px',
            paddingRight: '33px',
            paddingBottom: '26px',
            paddingLeft: '33px',
            gap: '26px',
            opacity: '1',
          }}
        >
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
            <div className="flex-1 h-[1px] bg-[#E5E7EB]"></div>
            <span className="text-[12px] text-[#9CA3AF]">또는</span>
            <div className="flex-1 h-[1px] bg-[#E5E7EB]"></div>
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
            <span className="text-[#4B5563]">이미 계정이 있으신가요? </span>
            <button className="font-semibold underline underline-offset-2">
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
