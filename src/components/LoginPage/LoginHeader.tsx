import React from 'react';

interface LoginHeaderProps {
  subtitle: string;
}

const LoginHeader: React.FC<LoginHeaderProps> = ({ subtitle }) => {
  return (
    <div className="w-[382px] h-[78px] flex flex-col items-center gap-[8px] mx-auto">
      <div className="w-[382px] h-[46px] flex items-center justify-center">
        <div className="w-[114px] h-[46px] flex items-center gap-[8px]">
          <div className="w-[46px] h-[46px] flex items-center justify-center overflow-hidden rounded-[12px]">
            <img
              src="src/assets/images/icons/logo.png"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-logoFont font-bold text-[20px] text-mainBlack">
            muses
          </span>
        </div>
      </div>
      <p className="text-[16px] font-mainFont text-mainBlack text-center">
        {subtitle}
      </p>
    </div>
  );
};

export default LoginHeader;
