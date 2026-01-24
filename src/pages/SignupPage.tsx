import React from 'react';
import BackButton from '../components/LoginPage/BackButton';
import LoginHeader from '../components/LoginPage/LoginHeader';
import SignupFormFields from '../components/SignupPage/SignupFormFields';
import AuthButton from '../components/LoginPage/AuthButton';
import SignupFooter from '../components/SignupPage/SignupFooter';
import { useNavigate } from 'react-router-dom';

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    console.log('Signup clicked');
    navigate('/onboarding');
  };
  return (
    <div
      className="w-full min-h-screen pt-24 flex justify-center bg-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("src/assets/images/backgrounds/login_bg.png")',
      }}
    >
      <div className="w-[448px] flex flex-col gap-[24px]">
        <BackButton onClick={() => window.history.back()} />

        <div className="w-full h-[645px] bg-white/80 border border-white rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[20px] px-[33px] py-[26px]">
          <LoginHeader subtitle="새 계정을 만드세요" />

          <div className="mt-[26px] flex flex-col gap-[21px]">
            <SignupFormFields />

            <AuthButton
              text="계속하기"
              variant="primary"
              className="mt-[12px]"
              onClick={handleSignup}
            />
          </div>

          <SignupFooter />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
