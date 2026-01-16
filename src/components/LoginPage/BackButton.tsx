import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface BackButtonProps {
  onClick?: () => void;
  text?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  text = '뒤로 가기',
}) => {
  return (
    <button
      onClick={onClick}
      className="w-[88px] h-[24px] flex items-center gap-1 text-black60 hover:text-mainBlack transition-colors group"
    >
      <ChevronLeft
        size={20}
        className="transition-transform group-hover:-translate-x-1"
      />
      <span className="font-mediumFont text-[14px] leading-none">{text}</span>
    </button>
  );
};

export default BackButton;
