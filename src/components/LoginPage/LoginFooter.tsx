import React from 'react';
import { Link } from 'react-router-dom';

const LoginFooter: React.FC = () => {
  return (
    <div className="w-[382px] h-[24px] flex items-center justify-center mx-auto">
      <div className="w-[186px] h-[24px] font-mainFont text-[16px] leading-[24px] text-center flex items-center justify-center gap-1">
        <span className="text-mainBlack">계정이 없으신가요?</span>

        <Link
          to="/signup"
          className="text-mainBlack underline underline-offset-4 decoration-1 hover:text-solidPurple transition-colors"
        >
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginFooter;
