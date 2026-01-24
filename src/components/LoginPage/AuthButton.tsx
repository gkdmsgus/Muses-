import React from 'react';

interface AuthButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'kakao' | 'google' | 'outline';
  className?: string;
  icon?: React.ReactNode;
  iconClassName?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  className = '',
  icon,
  iconClassName = 'left-[20px]',
}) => {
  const baseStyles =
    'relative w-full h-[48px] rounded-full flex items-center justify-center font-semiBoldFont text-[16px] transition-all active:scale-[0.98] cursor-pointer';

  const variantStyles = {
    primary: 'bg-mainBlack text-white hover:bg-black80',
    kakao: 'bg-[#FBE300] text-mainBlack',
    google: 'bg-white border border-mainBlack text-mainBlack hover:bg-white80',
    outline:
      'bg-transparent border border-white60 text-mainBlack hover:bg-white80',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {icon && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center ${iconClassName}`}
        >
          {icon}
        </div>
      )}
      <span>{text}</span>
    </button>
  );
};

export default AuthButton;
