import React from 'react';
import { Link } from 'react-router-dom';
const SignupFooter: React.FC = () => {
  return (
    <div className="w-[382px] h-[24px] flex items-center justify-center mx-auto mt-[24px]">
      <div className="font-mainFont text-[16px] leading-[24px] text-center flex items-center gap-1">
        <span className="text-mainBlack">이미 계정이 있으신가요?</span>
        <Link
          to="/login"
          className="text-mainBlack underline underline-offset-4 hover:text-solidPurple transition-colors"
        >
          로그인
        </Link>
      </div>
    </div>
  );
};

export default SignupFooter;
