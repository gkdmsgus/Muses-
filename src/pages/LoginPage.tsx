import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginPage/LoginForm';
import SocialLoginButton from '../components/LoginPage/SocialLoginButton';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleKakaoLogin = (): void => console.log('카카오 로그인');
  const handleGoogleLogin = (): void => console.log('구글 로그인');

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/images/backgrounds/login_bg.png')] bg-cover bg-center w-full h-screen">
      <div className="relative bg-white rounded-[32px] shadow-xl p-10 flex flex-col items-center w-[448px] h-[686px]">
        <button className="absolute top-8 left-8 flex items-center text-black60 text-sm hover:text-mainBlack transition-colors">
          <img
            src="/images/icons/back_arrow.png"
            alt="back"
            className="w-4 h-4 mr-1"
          />
          뒤로 가기
        </button>

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
          <p className="text-black60 text-sm">계정에 로그인하세요</p>
        </div>

        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />

        <div className="w-full flex flex-col items-center mt-[260px]">
          <div className="w-full flex items-center my-6">
            <div className="flex-1 h-[1px] bg-white60"></div>
            <span className="px-4 text-[12px] text-black40 font-mainFont">
              또는
            </span>
            <div className="flex-1 h-[1px] bg-white60"></div>
          </div>

          <div className="w-full flex justify-between gap-[12px]">
            <SocialLoginButton
              text="카카오로 계속하기"
              bgColor="#FACC15"
              textColor="#3C1E1E"
              onClick={handleKakaoLogin}
            />
            <SocialLoginButton
              text="구글로 계속하기"
              bgColor="#3A3A3A"
              textColor="#FFFFFF"
              onClick={handleGoogleLogin}
            />
          </div>
        </div>

        <div className="mt-auto mb-8 flex items-center justify-center gap-2">
          <span className="font-mainFont text-[16px] font-medium text-black">
            계정이 없으신가요?
          </span>
          <Link
            to="/signup"
            className="font-mainFont text-[16px] font-medium text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
