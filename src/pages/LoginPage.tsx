import React from 'react';
import LoginFormCard from '../components/LoginPage/LoginFormCard';

const LoginPage: React.FC = () => {
  return (
    <div
      className=" w-full min-h-screen pt-24 flex justify-center bg-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("src/assets/images/backgrounds/login_bg.png")',
      }}
    >
      <LoginFormCard />
    </div>
  );
};

export default LoginPage;
