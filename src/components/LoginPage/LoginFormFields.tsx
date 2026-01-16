import React from 'react';
import { Mail, Lock } from 'lucide-react';
import AuthButton from './AuthButton';

const LoginFormFields: React.FC = () => {
  return (
    <div className="w-[382px] h-[236px] flex flex-col gap-[16px] mx-auto">
      <div className="w-[382px] h-[78px] flex flex-col gap-[8px]">
        <label className="text-[14px] font-mediumFont text-black80 leading-[20px]">
          이메일
        </label>

        <div className="relative w-[382px] h-[50px]">
          <Mail
            size={20}
            className="absolute left-[16px] top-1/2 -translate-y-1/2 text-black40"
          />
          <input
            type="email"
            placeholder="example@muses.com"
            className="w-full h-full bg-white border border-[#C3C5C8] rounded-[12px] pt-[14.5px] pb-[14.5px] pr-[16px] pl-[40px] font-mainFont text-[16px] placeholder:text-black40 focus:outline-none focus:border-solidPurple transition-colors"
          />
        </div>
      </div>

      <div className="w-[382px] h-[78px] flex flex-col gap-[8px]">
        <label className="text-[14px] font-mediumFont text-black80 leading-[20px]">
          비밀번호
        </label>

        <div className="relative w-[382px] h-[50px]">
          <Lock
            size={20}
            className="absolute left-[16px] top-1/2 -translate-y-1/2 text-black40"
          />
          <input
            type="password"
            placeholder="••••••••"
            className="w-full h-full bg-white border border-[#C3C5C8] rounded-[12px] pt-[14.5px] pb-[14.5px] pr-[16px] pl-[40px] font-mainFont text-[16px] placeholder:text-black40 focus:outline-none focus:border-solidPurple transition-colors"
          />
        </div>
      </div>

      <AuthButton
        text="로그인"
        variant="primary"
        onClick={() => console.log('Login clicked')}
      />
    </div>
  );
};

export default LoginFormFields;
