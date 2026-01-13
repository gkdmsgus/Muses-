import React from 'react';

const ProfileSetupForm: React.FC = () => {
  return (
    <div
      className="flex flex-col"
      style={{
        width: '382px',
        height: '398px',
        gap: '172px',
        opacity: '1',
      }}
    >
      <div
        className="flex flex-col"
        style={{
          width: '382px',
          height: '178px',
          gap: '24px',
          opacity: '1',
        }}
      >
        <div
          className="flex flex-col"
          style={{
            width: '382px',
            height: '81px',
            gap: '8px',
            opacity: '1',
          }}
        >
          <label className="text-[14px] font-medium text-[#111827]">
            닉네임
          </label>
          <input
            type="text"
            placeholder="푸른 오렌지"
            className="w-full h-full px-4 border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#111827] transition-colors"
          />
        </div>

        <div
          className="flex flex-col"
          style={{
            width: '382px',
            height: '81px',
            gap: '8px',
            opacity: '1',
          }}
        >
          <label className="text-[14px] font-medium text-[#111827]">
            소개글
          </label>
          <input
            type="text"
            placeholder="150자 이내로 소개글을 적어주세요!"
            className="w-full h-full px-4 border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#111827] transition-colors"
          />
        </div>
      </div>

      <button
        style={{
          width: '382px',
          height: '48px',
          background: '#111827',
          borderRadius: '9999px',
          paddingTop: '12px',
          paddingBottom: '12px',
          color: '#FFFFFF',
          fontSize: '16px',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer',
          opacity: '1',
        }}
      >
        회원가입
      </button>
    </div>
  );
};

export default ProfileSetupForm;
