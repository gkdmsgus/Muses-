import React from 'react';

interface SignUpFormProps {}

const SignUpForm: React.FC<SignUpFormProps> = () => {
  return (
    <div
      style={{
        width: '382px',
        height: '420px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        opacity: 1,
      }}
    >
      <div className="flex flex-col gap-[8px]">
        <label className="text-[14px] font-[500] text-[#374151]">이름</label>
        <div className="relative">
          <img
            src="/images/icons/mail.png"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40"
            alt="mail"
          />
          <input
            type="text"
            placeholder="홍길동"
            className="w-full h-[50px] pl-[40px] pr-[16px] border border-[#E5E7EB] rounded-[12px] focus:outline-none focus:border-[#4F46E5] placeholder-[#9CA3AF] text-[16px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <label className="text-[14px] font-[500] text-[#374151]">이메일</label>
        <div className="relative">
          <img
            src="/images/icons/mail.png"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40"
            alt="mail"
          />
          <input
            type="email"
            placeholder="example@muses.com"
            className="w-full h-[50px] pl-[40px] pr-[16px] border border-[#E5E7EB] rounded-[12px] focus:outline-none focus:border-[#4F46E5] placeholder-[#9CA3AF] text-[16px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <label className="text-[14px] font-[500] text-[#374151]">
          비밀번호
        </label>
        <div className="relative">
          <img
            src="/images/icons/lock.png"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40"
            alt="lock"
          />
          <input
            type="password"
            placeholder="........"
            className="w-full h-[50px] pl-[40px] pr-[16px] border border-[#E5E7EB] rounded-[12px] focus:outline-none focus:border-[#4F46E5] placeholder-[#9CA3AF] text-[16px]"
          />
        </div>
      </div>

      <div className="flex gap-[16px]">
        <div className="flex flex-col gap-[8px] flex-1">
          <label className="text-[14px] font-[500] text-[#374151]">
            생년월일
          </label>
          <input
            type="text"
            placeholder="........"
            className="w-full h-[50px] px-[16px] border border-[#E5E7EB] rounded-[12px] focus:outline-none focus:border-[#4F46E5] placeholder-[#9CA3AF] text-[16px]"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-[500] text-[#374151]">성별</label>
          <div
            className="flex items-center bg-white cursor-pointer hover:bg-gray-50 transition-colors"
            style={{
              width: '121px',
              height: '49px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              padding: '14px 16px',
              gap: '28px',
            }}
          >
            <span className="text-[16px] text-black whitespace-nowrap">
              여자
            </span>

            <img
              src="/images/icons/arrow_down.png"
              alt="dropdown arrow"
              className="w-3 h-3 object-contain"
            />
          </div>
        </div>
      </div>

      <button className="w-full h-[50px] bg-[#0F172A] text-white rounded-[12px] font-semibold mt-auto hover:opacity-90 transition-opacity">
        회원가입
      </button>
    </div>
  );
};

export default SignUpForm;
