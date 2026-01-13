import React from 'react';

const ProfileHeader: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center"
      style={{
        width: '382px',
        height: '218px',
        gap: '12px',
        opacity: '1',
      }}
    >
      <div
        className="flex flex-col items-center"
        style={{
          width: '382px',
          height: '78px',
          gap: '8px',
        }}
      >
        <div className="flex items-center gap-2">
          <img
            src="/images/icons/logo.png"
            alt="logo"
            className="w-8 h-8 object-contain"
          />

          <span
            style={{
              fontFamily: 'Pretendard Variable',
              fontWeight: '900',
              fontSize: '20px',
              lineHeight: '28px',
              letterSpacing: '-0.5px',
              color: '#1F2937',
              verticalAlign: 'middle',
            }}
          >
            muses.
          </span>
        </div>

        <p
          style={{
            width: '100%',
            fontFamily: 'Pretendard Variable',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#4B5563',
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
        >
          프로필을 만드세요
        </p>
      </div>

      <div className="relative" style={{ width: '128px', height: '128px' }}>
        <div
          style={{
            width: '128px',
            height: '128px',
            backgroundColor: '#F3F4F6',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: '1',
          }}
        >
          <img
            src="/images/icons/profile_placeholder.png"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <button
          style={{
            position: 'absolute',
            width: '28px',
            height: '28px',
            bottom: '0px',
            right: '4px',
            background: '#FAFBFD',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #E5E7EB',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
          }}
        >
          <img
            src="/images/icons/edit_pencil.png"
            alt="edit"
            style={{ width: '14px', height: '14px' }}
          />
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
