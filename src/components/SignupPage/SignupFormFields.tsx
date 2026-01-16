import React, { useState } from 'react';
import { Mail, Lock, ChevronDown } from 'lucide-react';

const SignupFormFields: React.FC = () => {
  const [isGenderOpen, setIsGenderOpen] = useState(false);

  const [selectedGender, setSelectedGender] = useState('여자');

  const genderOptions = ['여자', '남자'];

  return (
    <div className="w-[382px] flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[8px]">
        <label className="text-[14px] font-mediumFont text-black80">
          이름*
        </label>
        <input
          type="text"
          placeholder="홍길동"
          className="w-full h-[50px] px-[16px] bg-white border border-[#C3C5C8] rounded-[12px] focus:outline-none focus:border-solidPurple transition-all font-mainFont"
        />
      </div>

      <div className="flex flex-col gap-[8px]">
        <label className="text-[14px] font-mediumFont text-black80">
          이메일*
        </label>
        <div className="relative">
          <Mail
            className="absolute left-[16px] top-1/2 -translate-y-1/2 text-black40"
            size={20}
          />
          <input
            type="email"
            placeholder="example@muses.com"
            className="w-full h-[50px] pl-[40px] pr-[16px] bg-white border border-[#C3C5C8] rounded-[12px] focus:outline-none focus:border-solidPurple transition-all font-mainFont"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <label className="text-[14px] font-mediumFont text-black80">
          비밀번호*
        </label>
        <div className="relative">
          <Lock
            className="absolute left-[16px] top-1/2 -translate-y-1/2 text-black40"
            size={20}
          />
          <input
            type="password"
            placeholder="••••••••"
            className="w-full h-[50px] pl-[40px] pr-[16px] bg-white border border-[#C3C5C8] rounded-[12px] focus:outline-none focus:border-solidPurple transition-all font-mainFont"
          />
        </div>
      </div>

      <div className="flex gap-[28px] w-full">
        <div className="flex flex-col gap-[4px] flex-1">
          <label className="text-[14px] font-mediumFont text-black80">
            생년월일
          </label>
          <input
            type="text"
            placeholder="2000.01.01"
            className="w-full h-[49px] px-[16px] bg-white border border-[#C3C5C8] rounded-[12px] text-black40 focus:outline-none focus:border-solidPurple transition-all font-mainFont"
          />
        </div>

        <div className="flex flex-col gap-[4px] relative">
          <label className="text-[14px] font-mediumFont text-black80">
            성별
          </label>

          <div
            onClick={() => setIsGenderOpen(!isGenderOpen)}
            className="w-[121px] h-[49px] px-[16px] bg-white border border-[#C3C5C8] rounded-[12px] flex items-center justify-between cursor-pointer hover:border-solidPurple transition-all"
          >
            <span className="font-bold font-mainFont text-[16px] text-black60">
              {selectedGender}
            </span>
            <ChevronDown
              size={16}
              className={`text-[#6B7280] transition-transform ${isGenderOpen ? 'rotate-180' : ''}`}
            />
          </div>

          {isGenderOpen && (
            <div className="absolute top-[78px] left-0 w-[121px] bg-white border border-[#C3C5C8] rounded-[12px] shadow-lg z-[100] overflow-hidden">
              {genderOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelectedGender(option);
                    setIsGenderOpen(false);
                  }}
                  className="w-full h-[40px] px-[16px] flex items-center text-[14px] font-mainFont text-black60 hover:bg-white80 hover:text-mainBlack cursor-pointer transition-colors"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupFormFields;
