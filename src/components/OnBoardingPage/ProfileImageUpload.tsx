import React from 'react';
import { Pencil } from 'lucide-react';

const ProfileImageUpload: React.FC = () => {
  return (
    <div className="relative w-[128px] h-[128px] mx-auto mt-[12px]">
      <div className="w-full h-full rounded-full bg-[#F3F4F6] border border-white60 flex items-center justify-center overflow-hidden shadow-inner">
        <img
          src="src/assets/images/icons/profile_placeholder.png"
          alt="profile placeholder"
          className="w-[90px] h-[78px] object-contain"
        />
      </div>

      <button className="absolute bottom-0 right-0 w-[28px] h-[28px] bg-[#FAFBFD] rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center hover:bg-white transition-colors">
        <Pencil size={12} className="text-mainBlack" />
      </button>
    </div>
  );
};

export default ProfileImageUpload;
