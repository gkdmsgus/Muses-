import React from 'react';
import LoginFormCard from '../components/LoginPage/LoginFormCard';

const LoginPage: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/backgrounds/login_bg.png")',
      }}
    >
      <LoginFormCard />
    </div>
  );
};

export default LoginPage;
