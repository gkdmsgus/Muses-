import React from 'react';
import AuthButton from './AuthButton';

const GoogleLoginSection: React.FC = () => {
  return (
    <div className="w-[382px] h-[48px] mx-auto">
      <AuthButton
        text="구글로 계속하기"
        variant="google"
        onClick={() => console.log('Google Login clicked')}
        className="border-mainBlack font-semiBoldFont text-[16px] leading-[24px] cursor-pointer"
        iconClassName="left-[20px]"
        icon={
          <img
            src="src/assets/images/icons/google_logo.png"
            alt="Google"
            className="w-[26px] h-[26px]"
          />
        }
      />
    </div>
  );
};

export default GoogleLoginSection;
