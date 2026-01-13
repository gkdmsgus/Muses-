import React from 'react';

interface SocialLoginButtonProps {
  text: string;
  bgColor: string;
  textColor?: string;
  onClick?: () => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ text, bgColor, textColor = '#000000', onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center font-mainFont hover:brightness-95 transition-all overflow-hidden"
      style={{
        width: '185px',
        height: '48px',
        backgroundColor: bgColor,
        borderRadius: '9999px',
        paddingTop: '12px',
        paddingBottom: '12px',
        lineHeight: '1.2',
      }}
    >
      <span
        style={{
          color: textColor,
          fontSize: '16px',
          fontWeight: '600',
          textAlign: 'center',
          display: 'block'
        }}
      >
        {text}
      </span>
    </button>
  );
};

export default SocialLoginButton;