import React from 'react';

const LoginHeader: React.FC = () => {
  return (
    <div className="w-[382px] h-[78px] flex flex-col items-center gap-[8px] mx-auto">
      <div className="w-[382px] h-[46px] flex items-center justify-center">
        <div className="w-[114px] h-[46px] flex items-center gap-[8px]">
          <div className="w-[46px] h-[46px]  rounded-[12px] shadow-sm flex items-center justify-center overflow-hidden">
            <img
              src="/images/icons/logo.png"
              alt="muses logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[60px] h-[28px] flex items-center">
            <span className="font-logoFont font-bold text-[20px] leading-[28px] tracking-[-0.5px] text-mainBlack">
              muses
            </span>
          </div>
        </div>
      </div>

      <div className="w-[382px] h-[24px] flex items-center justify-center">
        <p className="w-[129px] h-[24px] font-mainFont font-normal text-[16px] leading-[24px] text-mainBlack text-center flex items-center justify-center">
          계정에 로그인하세요
        </p>
      </div>
    </div>
  );
};

export default LoginHeader;
