import React from 'react';

interface SocialLoginButtonProps {
  text: string;
  bgColor: string;
  textColor?: string;
  onClick?: () => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  text,
  bgColor,
  textColor = '#000000',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center font-mainFont hover:brightness-95 transition-all overflow-hidden w-[185px] h-[48px] rounded-full py-[12px] leading-[1.2]`}
      style={{ backgroundColor: bgColor }}
    >
      <span
        className="text-[16px] font-semibold text-center block"
        style={{ color: textColor }}
      >
        {text}
      </span>
    </button>
  );
};

export default SocialLoginButton;
